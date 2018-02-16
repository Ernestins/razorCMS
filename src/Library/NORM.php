<?php

namespace Razilo\Library;

class NORMException extends \Exception {}

class NORMExecuteException extends \Exception {
	protected $_query;
	protected $_data;
	protected $_error_message;
	protected $_error_code;

	public function __construct($message="", $queryObject, $data) {
		$this->_query = $queryObject->queryString;
		$this->_data = $data;
		$this->_error_message = $queryObject->errorInfo()[2];
		$this->_error_code = $queryObject->errorCode();

		parent::__construct("{$message} Catch this exception to find out more about the failed query (getQuery(), getData(), getErrorMessage(), getErrorCode())");
    }

    public function getQuery()
    {
        return $this->_query;
    }

    public function getData()
    {
        return $this->_data;
    }

    public function getErrorMessage()
    {
        return $this->_error_message;
    }

    public function getErrorCode()
    {
        return $this->_error_code;
    }
}

/**
 * NORM
 * Not an ORM... Gives ORM type functionality and wraps it around PDO
 * Base model that gives a nice clean way to represent the data from DB as an object, with base methods to act on data
 * Extend this class to create models for use with new DB structures (and old but with limited functionality e.g. no ->save())
 */
class NORM
{
	private $__pdo;
	private $__class;
	private $__table;
	private $__query_data = [];
	private $__query_string;

	public function __construct(&$pdo = null)
	{
		$this->__pdo = &$pdo;

		if (substr(get_class($this), -5) !== 'Model') {
			// New Class > get reflection on extended class if this is extended else work it out from past in
			$this->__class = get_class($this);
			if (!empty($class)) $this->__class = substr($this->__class, 0, -5).ucfirst($class);
			if (defined("{$this->__class}::TABLE")) $this->__table = constant("{$this->__class}::TABLE");
		}
	}

	/**
	 * toArray()
	 * Release all data as a array
	 * @return array The data as an array
	 */
	public function toArray()
    {
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		// get public/protected data on child object
		$reflect = new \ReflectionClass($this);
		$props = $reflect->getProperties(\ReflectionProperty::IS_PUBLIC | \ReflectionProperty::IS_PROTECTED);
		$data = [];
		foreach ($props as $prop) if ($this->{$prop->name} !== null) $data[$prop->name] = $this->{$prop->name};

		return $data;
    }

	/**
	 * get()
	 * Get a value from the object
	 * @return string the value from the object
	 */
	public function get($key) {
		return substr(get_class($this), -5) !== 'Model' ? $this->$key : null;
	}

	/**
	 * set()
	 * Set a value from the object
	 * @return string the value from the object
	 */
	public function set($key,$value) {
		if(substr(get_class($this), -5) !== 'Model') $this->$key = $value;
	}

	/**
	 * select()
	 * Set the select portion of the query
	 * @return object The instance
	 */
	public function select($select = null) {
		$this->__query_data['select'] = $select;
		return $this;
	}

	/**
	 * where()
	 * Set the where portion of the query
	 * @return object The instance
	 */
	public function where($where = null) {
		$this->__query_data['where'] = $where;
		return $this;
	}

	/**
	 * orderBy()
	 * Set the orderBy portion of the query
	 * @return object The instance
	 */
	public function orderBy($order_by = null) {
		$this->__query_data['order_by'] = $order_by;
		return $this;
	}

	/**
	 * groupBy()
	 * Set the groupBy portion of the query
	 * @return object The instance
	 */
	public function groupBy($group_by = null) {
		$this->__query_data['group_by'] = $group_by;
		return $this;
	}

	/**
	 * limit()
	 * Set the limit portion of the query
	 * @return object The instance
	 */
	public function limit($limit = null) {
		$this->__query_data['limit'] = $limit;
		return $this;
	}

	/**
	 * offset()
	 * Set the offset portion of the query
	 * @return object The instance
	 */
	public function offset($offset = null) {
		$this->__query_data['offset'] = $offset;
		return $this;
	}

	/**
	 * buildQuery()
	 * Build the query
	 */
	private function buildQuery() {
		$query = 'SELECT ';
		if (empty($this->__query_data['select'])) $query.= '* ';
		else if (is_string($this->__query_data['select'])) $query.= "{$this->__query_data['select']} ";
		else foreach($this->__query_data['select'] as $s) $query.= "{$s},";
		$query = substr($query, 0, -1);
		$query.= " FROM {$this->__table}";

		if (!empty($this->__query_data['where'])) {
			$query.= ' WHERE ';
			if (is_numeric($this->__query_data['where'])) $query.= "id = :id ";
			else {
				foreach($this->__query_data['where'] as $w => $d) {
					if ($d === null) $query.= "{$w} IS :{$w} AND ";
					else $query.= "{$w} = :{$w} AND ";
				}

				$query = substr($query, 0, -5);
			}
		}

		if (!empty($this->__query_data['order_by'])) {
			$query.= ' ORDER BY ';
			foreach($this->__query_data['order_by'] as $ob => $dir) $query.= "{$ob} {$dir},";
			$query = substr($query, 0, -1);
		}

		if (!empty($this->__query_data['group_by'])) {
			$query.= ' GROUP BY ';
			if (is_string($this->__query_data['group_by'])) $query.= $this->__query_data['group_by'];
		 	else {
				foreach($this->__query_data['group_by'] as $gb) $query.= "{$gb},";
				$query = substr($query, 0, -1);
			}
		}

		if (!empty($this->__query_data['limit'])) {
			$query.= ' LIMIT ';
			$query.= $this->__query_data['limit'];
		}

		if (!empty($this->__query_data['offset'])) {
			$query.= ' OFFSET ';
			$query.= $this->__query_data['offset'];
		}

		$this->__query_string = $query;
	}

	/**
	 * query()
	 * Multi porpuse query tool for creating complex calls and serving as object method
	 * @return object The instance
	 */
	protected function query($query, $data = []) {
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		if (!empty($data)) $this->__query_data['bindable'] = $data;

		$db_query = $this->__pdo->prepare($query);
        $db_query->setFetchMode($this->__pdo::FETCH_CLASS, $this->__class, [&$this->__pdo]);
		$this->bindData($db_query);
		$db_query->execute();

		if ($db_query->errorCode() > 0) throw new NORMExecuteException('Could not fetch data.', $db_query, $data);

		return $db_query->fetchAll();
	}

	/**
	 * save()
	 * Save changes from object to DB or create if new
	 * @return bool Did the values get added or changed
	 */
    public function save()
    {
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		// get public data on child object
		$reflect = new \ReflectionClass($this);
		$props = $reflect->getProperties(\ReflectionProperty::IS_PUBLIC);
		$data = [];
		if (isset($this->id)) $data = ['id' => $this->id];

		foreach ($props as $prop) {
			$data[$prop->name] = $this->{$prop->name};
		}

		// do we add new?
		if (empty($this->id)) return $this->addData($data);

		// ok, just alter
 		return $this->editData($data);
    }

	/**
	 * Add data to the table
	 * @param string $data The data to add
	 * @return bool Did the values get added
	 */
	private function addData($data = null)
	{
		if (!is_array($data) || empty($data)) return false;

		// gather cols and values
		$cols = '';
		$vals = '';
		foreach ($data as $key => $val) {
			$cols.= "`{$key}`,";
			$vals.= ":{$key},";
		}
		$cols = substr($cols, 0, -1);
		$vals = substr($vals, 0, -1);
		$cache_data = $this->__query_data['bindable'] = $data;

		// generate query
		$this->__query_string = "INSERT INTO {$this->__table} ({$cols}) VALUES ({$vals})";

		try
		{
			$this->__pdo->beginTransaction();
			$db_query = $this->__pdo->prepare($this->__query_string);
			$this->bindData($db_query);
			$result = $db_query->execute();

			if ($result) {
				$this->id = (int) $this->__pdo->lastInsertId();
				$this->created = date("Y-m-d H:i:s");
				$this->updated = date("Y-m-d H:i:s");
			} else throw new \PDOException('Failed to add data object.');

			$this->__pdo->commit();
		} catch(\PDOException $e) {
		    $this->__pdo->rollBack();
			throw new NORMExecuteException($e->getMessage(), $db_query, $cache_data);
		}

		return (bool) $result;
	}

	/**
	 * Edit data to the table
	 * @param string $data The data to change
	 * @return bool Did the values get changed
	 */
	private function editData($data = null)
	{
		if (!is_array($data) || empty($data)) return false;

		// gather cols and values
		$set = '';
		foreach ($data as $key => $val) {
			if ($key == 'id') continue;
			$set.= "`{$key}` = :{$key},";
		}
		$set = substr($set, 0, -1);
		$cache_data = $this->__query_data['bindable'] = $data;

		// generate query
		$this->__query_string = "UPDATE {$this->__table} SET {$set} WHERE id = :id";

		try
		{
			$this->__pdo->beginTransaction();
			$db_query = $this->__pdo->prepare($this->__query_string);
			$this->bindData($db_query);
			$result = $db_query->execute();
			if (!$result) throw new \PDOException('Failed to edit data object.');
		    $this->__pdo->commit();
		} catch(\PDOException $e) {
		    $this->__pdo->rollBack();
			throw new NORMExecuteException($e->getMessage(), $db_query, $cache_data);
		}

		return (bool) $result;
	}

	/**
	 * delete()
	 * Delete the object from DB
	 * @return bool Did the data get deleted
	 */
	public function delete()
    {
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (empty($this->id)) throw new NORMException('Cannot delete data when id is not set');

		$cache_data = $this->__query_data = ['where' => ['id' => $this->id]];

		// run query
		$this->__pdo->beginTransaction();

		try
		{
			$db_query = $this->__pdo->prepare("DELETE FROM {$this->__table} WHERE id = :id");
			$this->bindData($db_query);
			$result = $db_query->execute();
			if (!$result) throw new \PDOException('Failed to delete data object.');
		    $this->__pdo->commit();
		}
		catch(PDOException $e)
		{
		    $this->__pdo->rollBack();
			throw new NORMExecuteException($e->getMessage(), $db_query, $cache_data);
		}

		return (bool) $result;
    }

	/**
	 * fetch()
	 * Get single row based on query builder
	 * @return object The data object to return based on the model type
	 */
	public function fetch($id = null)
	{
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		if ($id !== null) $this->__query_data = ['where' => ['id' => $id]];
		$cache_data = $this->__query_data;
		$this->buildQuery();

		$db_query = $this->__pdo->prepare($this->__query_string);
		$db_query->setFetchMode($this->__pdo::FETCH_CLASS, $this->__class, [&$this->__pdo]);

		$this->bindData($db_query);
		$db_query->execute();

		if ($db_query->errorCode() > 0) throw new NORMExecuteException('Could not fetch data.', $db_query, $cache_data);

		return $db_query->fetch();
	}

	/**
	 * fetchFirst() Alias for fetch
	 * Get first row based on query builder
	 * @return object The data object to return based on the model type
	 */
	public function fetchFirst()
	{
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		return $this->fetch();
	}

	/**
	 * fetchLast()
	 * Get last row based on query builder
	 * @return object The data object to return based on the model type
	 */
	public function fetchLast()
	{
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!empty($this->__query_data['order_by'])) throw new NORMException('Cannot '.__FUNCTION__.' a when you have order by set, ude to bug in PDO not working with PDO::FETCH_ORI_LAST');

		$this->__query_data['order_by'] = ['id' => 'DESC'];
		$cache_data = $this->__query_data;
		$this->buildQuery();

		$db_query = $this->__pdo->prepare($this->__query_string);
        $db_query->setFetchMode($this->__pdo::FETCH_CLASS, $this->__class, [&$this->__pdo]);

		$this->bindData($db_query);
		$db_query->execute();

		if ($db_query->errorCode() > 0) throw new NORMExecuteException('Could not fetch data.', $db_query, $cache_data);

		return $db_query->fetch();
	}

	/**
	 * fetchAll()
	 * Get all rows based on query builder
	 * @return object The data object to return based on the model type
	 */
	public function fetchAll()
	{
		if (substr(get_class($this), -5) == 'Model') throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');
		if (!$this->__table) throw new NORMException('Cannot '.__FUNCTION__.' a generic model type, can only perform '.__FUNCTION__.' against final model class');

		$this->buildQuery();
		$cache_data = $this->__query_data;

		$db_query = $this->__pdo->prepare($this->__query_string);
        $db_query->setFetchMode($this->__pdo::FETCH_CLASS, $this->__class, [&$this->__pdo]);

		$this->bindData($db_query);
		$db_query->execute();

		if ($db_query->errorCode() > 0) throw new NORMExecuteException('Could not fetch data.', $db_query, $cache_data);

		return $db_query->fetchAll();
	}

	/**
	 * bindData()
	 * Bindds data to the query, it's normally in the where data object, we also store it here if its a where
	 * @return object The data object to return based on the model type
	 */
	private function bindData(&$query)
	{
		// bind if we have bindable data
		if (!empty($this->__query_data['bindable']) || !empty($this->__query_data['where'])) {
			if (!empty($this->__query_data['bindable'])) {
				foreach ($this->__query_data['bindable'] as $key => $val) $query->bindValue((substr($key, 0, 1) == ':' ? $key : ":{$key}"), $val);
			} else {
				if (!is_array($this->__query_data['where'])) $query->bindParam(':id', $this->__query_data['where']);
				else foreach ($this->__query_data['where'] as $key => $val) $query->bindValue((substr($key, 0, 1) == ':' ? $key : ":{$key}"), $val);
			}
		}

		$this->__query_data = [];
		return $query;
	}
}
