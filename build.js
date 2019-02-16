var fs = require('fs');
var fsx = require('fs-extra');
var replace = require('replace-in-file');
var browserify = require("browserify");
var babelify = require("babelify");

/*************************************************/
/* Build into distributable, production versions */
/*************************************************/

// CUSTOM WEB COMPONENT -- BUILD //
console.log('--------------------------------');
console.log('- Custom Web Component - BUILD -');
console.log('--------------------------------');
console.log('');

// clean up build
console.log('Cleaned Build...');
fsx.remove('./public/node_modules')
.then(() => fsx.remove('./public/index.js'))
.then(() => console.log('Cleaned Build DONE'))
.catch((error) => console.log('Cleaned Build FAILED...', error))

// copy over deps
.then(() => console.log('Copy Dependencies...'))
.then(() => fsx.copy('./node_modules/promise-polyfill', './public/node_modules/promise-polyfill'))
.then(() => fsx.copy('./node_modules/@webcomponents', './public/node_modules/@webcomponents'))
.then(() => fsx.copy('./node_modules/custom-web-component', './public/node_modules/custom-web-component'))
.then(() => fsx.copy('./node_modules/custom-web-components', './public/node_modules/custom-web-components'))
.then(() => fsx.copy('./node_modules/lit-html', './public/node_modules/lit-html'))
.then(() => fsx.copy('./node_modules/reflect-constructor', './public/node_modules/reflect-constructor'))
.then(() => console.log('Copy Dependencies DONE'))
.catch((error) => console.log('Copy Dependencies FAILED', error))

// build src into distributable
.then(() => console.log('Create distributable logic...'))
.then(() => new Promise((resolve, reject) => {
	browserify({ debug: true })
	.transform(babelify.configure({ extensions: [".mjs"] }))
	.require("./public/index.mjs", { entry: true })
	.bundle()
	.on("error", (err) => reject("Browserify/Babelify compile error: " + err.message))
	.pipe(fs.createWriteStream("./public/index.js"))
	.on("finish", () => resolve());
}))
.then(() => console.log('Create distributable logic DONE'))
.catch((error) => console.log('Create distributable logic FAILED', error))

// finish
.then(() => {
	console.log('');
	console.log('-------');
	console.log('- END -');
	console.log('-------');
	console.log('');
});