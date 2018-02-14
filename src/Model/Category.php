<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Category extends NORM
{
	const TABLE = 'category';

	// cannot change, only read through toArray() or get('col')
	protected $id;
	protected $created;
	protected $updated;

	public $name;
	public $parent_category_id;
	public $level;
	public $icon;

	/**
	 * getCategoryTree
	 * Returns all categories in a tree view, parents to children for showing as a category dump
	 * @return array() Categories in an array format
	 */
	// public function getCategoryTree($id = null) {
	// 	$cats = $this->query(
	// 		'SELECT a.id AS id_a'
	// 		.', a.name AS name_a'
	// 		.', a.icon AS icon_a'
	// 		.', b.id AS id_b'
	// 		.', b.name AS name_b'
	// 		.', b.icon AS icon_b'
	// 		.', c.id AS id_c'
	// 		.', c.name AS name_c'
	// 		.', c.icon AS icon_c'
	// 		.', d.id AS id_d'
	// 		.', d.name AS name_d'
	// 		.', d.icon AS icon_d'
	// 		.' FROM category AS a'
	// 		.' LEFT JOIN category AS b ON a.id = b.parent_category_id'
	// 		.' LEFT JOIN category AS c ON b.id = c.parent_category_id'
	// 		.' LEFT JOIN category AS d ON c.id = d.parent_category_id'
	// 		.(!empty($id) ? ' WHERE a.id = :id' : ' WHERE a.parent_category_id IS NULL')
	// 		.' ORDER BY a.name ASC, b.name ASC, c.name ASC, d.name ASC'
	// 	, !empty($id) ? ['id' => $id] : null);
	//
	// 	$output = [];
	// 	foreach ($cats as $cat) {
	// 		if ($cat->id_a && !isset($output[$cat->id_a])) $output[$cat->id_a] = ['id' => $cat->id_a, 'name' => $cat->name_a, 'icon' => $cat->icon_a, 'children' => []];
	// 		if ($cat->id_b && !isset($output[$cat->id_a]['children'][$cat->id_b])) $output[$cat->id_a]['children'][$cat->id_b] = ['id' => $cat->id_b, 'name' => $cat->name_b, 'icon' => $cat->name_b, 'children' => []];
	// 		if ($cat->id_c && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c] = ['id' => $cat->id_c, 'name' => $cat->name_c, 'icon' => $cat->icon_c, 'children' => []];
	// 		if ($cat->id_d && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d] = ['id' => $cat->id_d, 'name' => $cat->name_d, 'icon' => $cat->icon_d, 'children' => []];
	// 	}
	//
	// 	return $output;
	// }

	/**
	 * getCategoryTree
	 * Returns all categories in a tree view, parents to children for showing as a category dump
	 * @return array() Categories in an array format
	 */
	public function getCategoryTree($id = null) {
		$cats = $this->query(
		    'SELECT a.id AS id_a'
		    .', a.name AS name_a'
		    .', a.icon AS icon_a'
		    .', COUNT(ac.id) AS entries_a'
		    .', b.id AS id_b'
		    .', b.name AS name_b'
		    .', b.icon AS icon_b'
		    .', COUNT(bc.id) AS entries_b'
		    .', c.id AS id_c'
		    .', c.name AS name_c'
		    .', c.icon AS icon_c'
		    .', COUNT(cc.id) AS entries_c'
		    .', d.id AS id_d'
		    .', d.name AS name_d'
		    .', d.icon AS icon_d'
		    .', COUNT(dc.id) AS entries_d'
		    .', e.id AS id_e'
		    .', e.name AS name_e'
		    .', e.icon AS icon_e'
		    .', COUNT(ec.id) AS entries_e'
		    .', f.id AS id_f'
		    .', f.name AS name_f'
		    .', f.icon AS icon_f'
		    .', COUNT(fc.id) AS entries_f'
		    .' FROM category AS a'
		    .' LEFT JOIN category__entry AS ac ON a.id = ac.category_id'
		    .' LEFT JOIN category AS b ON a.id = b.parent_category_id'
		    .' LEFT JOIN category__entry AS bc ON b.id = bc.category_id'
		    .' LEFT JOIN category AS c ON b.id = c.parent_category_id'
		    .' LEFT JOIN category__entry AS cc ON c.id = cc.category_id'
		    .' LEFT JOIN category AS d ON c.id = d.parent_category_id'
		    .' LEFT JOIN category__entry AS dc ON d.id = dc.category_id'
		    .' LEFT JOIN category AS e ON d.id = e.parent_category_id'
		    .' LEFT JOIN category__entry AS ec ON e.id = ec.category_id'
		    .' LEFT JOIN category AS f ON e.id = f.parent_category_id'
		    .' LEFT JOIN category__entry AS fc ON f.id = fc.category_id'
		    .(!empty($id) ? ' WHERE a.id = :id' : ' WHERE a.parent_category_id IS NULL')
		    .' GROUP BY a.id, b.id, c.id, d.id, e.id, f.id'
		    .' ORDER BY a.name ASC, b.name ASC, c.name ASC, d.name ASC, e.name ASC, f.name ASC'
		, !empty($id) ? ['id' => $id] : null);

		// build assoc array
		$output = [];
		foreach ($cats as $cat) {
		    if ($cat->id_a && !isset($output[$cat->id_a])) $output[$cat->id_a] = ['id' => $cat->id_a, 'name' => $cat->name_a, 'icon' => $cat->icon_a, 'entries' => $cat->entries_a, 'children' => []];
		    if ($cat->id_b && !isset($output[$cat->id_a]['children'][$cat->id_b])) $output[$cat->id_a]['children'][$cat->id_b] = ['id' => $cat->id_b, 'name' => $cat->name_b, 'icon' => $cat->name_b, 'entries' => $cat->entries_b, 'children' => []];
		    if ($cat->id_c && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c] = ['id' => $cat->id_c, 'name' => $cat->name_c, 'icon' => $cat->icon_c, 'entries' => $cat->entries_c, 'children' => []];
		    if ($cat->id_d && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d] = ['id' => $cat->id_d, 'name' => $cat->name_d, 'icon' => $cat->icon_d, 'entries' => $cat->entries_d, 'children' => []];
		    if ($cat->id_e && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d]['children'][$cat->id_e])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d]['children'][$cat->id_e] = ['id' => $cat->id_e, 'name' => $cat->name_e, 'icon' => $cat->icon_e, 'entries' => $cat->entries_e, 'children' => []];
		    if ($cat->id_f && !isset($output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d]['children'][$cat->id_e]['children'][$cat->id_f])) $output[$cat->id_a]['children'][$cat->id_b]['children'][$cat->id_c]['children'][$cat->id_d]['children'][$cat->id_e]['children'][$cat->id_f] = ['id' => $cat->id_f, 'name' => $cat->name_f, 'icon' => $cat->icon_f, 'entries' => $cat->entries_f, 'children' => []];
		}

		// calculate totals
		foreach ($output as $key => $val) {
			$output[$key]['total'] = (int) $output[$key]['entries'];
			foreach ($val['children'] as $keyb => $valb) {
				$output[$key]['total'] += (int) $valb['entries'];
				$output[$key]['children'][$keyb]['total'] = (int) $valb['entries'];
				foreach ($valb['children'] as $keyc => $valc) {
					$output[$key]['total'] += (int) $valc['entries'];
					$output[$key]['children'][$keyb]['total'] += $valc['entries'];
					$output[$key]['children'][$keyb]['children'][$keyc]['total'] = $valc['entries'];
					foreach ($valc['children'] as $keyd => $vald) {
						$output[$key]['total'] += (int) $vald['entries'];
						$output[$key]['children'][$keyb]['total'] += $vald['entries'];
						$output[$key]['children'][$keyb]['children'][$keyc]['total'] += $vald['entries'];
						$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['total'] = $vald['entries'];
						foreach ($vald['children'] as $keye => $vale) {
							$output[$key]['total'] += (int) $vale['entries'];
							$output[$key]['children'][$keyb]['total'] += $vale['entries'];
							$output[$key]['children'][$keyb]['children'][$keyc]['total'] += $vale['entries'];
							$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['total'] += $vale['entries'];
							$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['children'][$keye]['total'] = $vale['entries'];
							foreach ($vale['children'] as $keyf => $valf) {
								$output[$key]['total'] += (int) $valf['entries'];
								$output[$key]['children'][$keyb]['total'] += $valf['entries'];
								$output[$key]['children'][$keyb]['children'][$keyc]['total'] += $valf['entries'];
								$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['total'] += $valf['entries'];
								$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['children'][$keye]['total'] += $valf['entries'];
								$output[$key]['children'][$keyb]['children'][$keyc]['children'][$keyd]['children'][$keye]['children'][$keyf]['total'] = $valf['entries'];
							}
						}
					}
				}
			}
		}

		return $output;
	}

	/**
	 * getCategoryTree
	 * Returns all categories in a tree view, parents to children for showing as a category dump
	 * @return array() Categories in an array format
	 */
	public function getCategoryBreadcrumb($id) {
		$breadcrumbs = $this->query(
			'SELECT a.id AS a_id'
			.', a.name AS a_name'
			.', b.id AS b_id'
			.', b.name AS b_name'
			.', c.id AS c_id'
			.', c.name AS c_name'
			.', d.id AS d_id'
			.', d.name AS d_name'
			.', e.id AS e_id'
			.', e.name AS e_name'
			.' FROM category AS a'
			.' LEFT JOIN category AS b ON b.id = a.parent_category_id'
			.' LEFT JOIN category AS c ON c.id = b.parent_category_id'
			.' LEFT JOIN category AS d ON d.id = c.parent_category_id'
			.' LEFT JOIN category AS e ON e.id = d.parent_category_id'
			.' WHERE a.id = :id'
			.' LIMIT 1'
		, ['id' => $id]);

		$output = [];
		if (!empty($breadcrumbs)) {
			if ($breadcrumbs[0]->e_id) $output[] = ['id' => $breadcrumbs[0]->e_id, 'name' => $breadcrumbs[0]->e_name];
			if ($breadcrumbs[0]->d_id) $output[] = ['id' => $breadcrumbs[0]->d_id, 'name' => $breadcrumbs[0]->d_name];
			if ($breadcrumbs[0]->c_id) $output[] = ['id' => $breadcrumbs[0]->c_id, 'name' => $breadcrumbs[0]->c_name];
			if ($breadcrumbs[0]->b_id) $output[] = ['id' => $breadcrumbs[0]->b_id, 'name' => $breadcrumbs[0]->b_name];
			if ($breadcrumbs[0]->a_id) $output[] = ['id' => $breadcrumbs[0]->a_id, 'name' => $breadcrumbs[0]->a_name];
		}

		return $output;
	}
}
