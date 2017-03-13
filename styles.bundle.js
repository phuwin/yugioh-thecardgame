webpackJsonp([2,4],{

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(826)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\nhtml {\r\n    background-color:black;\r\n}\r\nh1,h2,h3,h4,h5,h6,p {\r\n    color:antiquewhite;\r\n    font-family: 'Baloo Bhaina', cursive;\r\n}\r\n\r\nbutton {\r\n    border:2px solid antiquewhite;\r\n    background-color:black;\r\n    border-radius:4px;\r\n    padding:10px 10px 5px;\r\n    color:antiquewhite;\r\n    font-family: 'Baloo Bhaina', cursive;   \r\n    line-height: 20px;    \r\n    cursor: pointer;\r\n}\r\nbutton:hover{\r\n    background-color:antiquewhite;\r\n    font-family: 'Baloo Bhaina', cursive;   \r\n    color:black;\r\n}\r\n\r\n@media (max-width:768px) {\r\n    h1,h2,h3,h4,h5,h6,p {\r\n        font-size:22px;\r\n    }\r\n}\r\n.container,.container-fluid{margin-right:auto;margin-left:auto}.container-fluid{padding-right:2rem;padding-left:2rem}.row{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-.5rem;margin-left:-.5rem}.row.reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.col.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-offset-0,.col-xs-offset-1,.col-xs-offset-10,.col-xs-offset-11,.col-xs-offset-12,.col-xs-offset-2,.col-xs-offset-3,.col-xs-offset-4,.col-xs-offset-5,.col-xs-offset-6,.col-xs-offset-7,.col-xs-offset-8,.col-xs-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-xs{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-xs-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-xs-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-xs-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-xs-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-xs-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-xs-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-xs-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-xs-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-11{margin-left:91.66666667%}.start-xs{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-xs{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-xs{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-xs{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-xs{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-xs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-xs{-ms-flex-pack:distribute;justify-content:space-around}.between-xs{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-xs{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-xs{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}@media only screen and (min-width:48em){.container{width:49rem}.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-offset-0,.col-sm-offset-1,.col-sm-offset-10,.col-sm-offset-11,.col-sm-offset-12,.col-sm-offset-2,.col-sm-offset-3,.col-sm-offset-4,.col-sm-offset-5,.col-sm-offset-6,.col-sm-offset-7,.col-sm-offset-8,.col-sm-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-sm{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-sm-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-sm-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-sm-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-sm-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-sm-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-sm-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-sm-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-sm-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-11{margin-left:91.66666667%}.start-sm{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-sm{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-sm{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-sm{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-sm{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-sm{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-sm{-ms-flex-pack:distribute;justify-content:space-around}.between-sm{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-sm{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-sm{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media only screen and (min-width:64em){.container{width:65rem}.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-offset-0,.col-md-offset-1,.col-md-offset-10,.col-md-offset-11,.col-md-offset-12,.col-md-offset-2,.col-md-offset-3,.col-md-offset-4,.col-md-offset-5,.col-md-offset-6,.col-md-offset-7,.col-md-offset-8,.col-md-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-md{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-md-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-md-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-md-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-md-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-md-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-md-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-md-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-md-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-11{margin-left:91.66666667%}.start-md{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-md{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-md{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-md{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-md{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-md{-ms-flex-pack:distribute;justify-content:space-around}.between-md{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-md{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-md{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media only screen and (min-width:75em){.container{width:76rem}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-offset-0,.col-lg-offset-1,.col-lg-offset-10,.col-lg-offset-11,.col-lg-offset-12,.col-lg-offset-2,.col-lg-offset-3,.col-lg-offset-4,.col-lg-offset-5,.col-lg-offset-6,.col-lg-offset-7,.col-lg-offset-8,.col-lg-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:.5rem;padding-left:.5rem}.col-lg{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-lg-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-lg-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-lg-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-lg-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-lg-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-lg-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-lg-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-lg-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-11{margin-left:91.66666667%}.start-lg{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-lg{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-lg{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-lg{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-lg{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-lg{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-lg{-ms-flex-pack:distribute;justify-content:space-around}.between-lg{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-lg{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-lg{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 826:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);


/***/ })

},[830]);
//# sourceMappingURL=styles.bundle.js.map