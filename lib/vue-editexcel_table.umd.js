(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-editexcel_table"] = factory();
	else
		root["vue-editexcel_table"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1aa9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_905a615a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("788b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_905a615a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_905a615a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_905a615a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "351a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5ad6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d428");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "788b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9bc9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a678":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTop_vue_vue_type_style_index_0_id_ce714864_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bc9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTop_vue_vue_type_style_index_0_id_ce714864_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTop_vue_vue_type_style_index_0_id_ce714864_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackTop_vue_vue_type_style_index_0_id_ce714864_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cb5f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_714e63fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("351a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_714e63fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_714e63fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_714e63fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d428":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f36d6f40-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/editTable/src/index.vue?vue&type=template&id=905a615a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"po-r"},[(_vm.showTotal)?_c('div',{staticClass:"total-row mb-10"},[_c('div',{staticClass:"text-bold"},[_vm._v("数据统计：")]),_c('div',{staticClass:"color-light"},[_vm._v("工作项目（"),_c('span',{staticClass:"color-primary"},[_vm._v(_vm._s(_vm.projectNum)+"个")]),_vm._v("）")]),_c('div',{staticClass:"color-light ml-10"},[_vm._v("工作任务：（"),_c('span',{staticClass:"color-primary"},[_vm._v(_vm._s(_vm.taskNum)+"个")]),_vm._v("）")]),_c('div',{staticClass:"color-light ml-10"},[_vm._v("职业能力：（"),_c('span',{staticClass:"color-primary"},[_vm._v(_vm._s(_vm.abilityNum)+"个")]),_vm._v("）")])]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isEdit||_vm.tableData.length>0),expression:"isEdit||tableData.length>0"}],staticClass:"flex-table"},[_c('div',{staticClass:"table-header"},[_vm._m(0),_c('div',{staticClass:"header-children"},[_vm._m(1),_c('div',{staticClass:"header-ability"},[_vm._m(2),(_vm.showRequire)?_c('div',{staticClass:"header-level"},[_c('div',{staticClass:"level-title"},[_vm._v("能力要求")]),_vm._m(3)]):_vm._e(),(_vm.showLevel)?_c('div',{staticClass:"header-level"},[_c('div',{staticClass:"level-title"},[_vm._v("学习水平")]),_vm._m(4)]):_vm._e()])])]),_c('div',{staticClass:"flexBox"},[_vm._l((_vm.tableData),function(project,i){return [(!_vm.onlyShowChecked||project.CheckStatus)?_c('div',{key:i,staticClass:"flexRow borProj",class:[_vm.taskAbility[project.Id]?'black':'white'],on:{"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.rightClick($event,project)}}},[_c('div',{staticClass:"itemCode object-area",style:(_vm.staticNum[project.Id]&&{color:_vm.returnColor(_vm.staticNum[project.Id])}),attrs:{"data-obj":_vm.toJson(project)},on:{"mousedown":function($event){return _vm.beforeDown(project,$event)}}},[_c('div',{staticClass:"taskText just-c"},[(_vm.tier>=1&&project.Id)?_c('i',{staticClass:"fa check-icon",class:_vm._f("statusFilter")(project.CheckStatus),on:{"click":function (){_vm.checkBox(project);}}}):_vm._e(),(project.Id||_vm.isEdit)?_c('span',[_vm._v(_vm._s(_vm.isEdit?_vm.isAddZero(i+1):project.Code||_vm.isAddZero(i+1))+" ")]):_vm._e()])]),_c('div',{staticClass:"itemName object-area",class:_vm.isEdit&&'no-padding',style:(_vm.staticNum[project.Id]&&{color:_vm.returnColor(_vm.staticNum[project.Id])}),attrs:{"data-obj":_vm.toJson(project)},on:{"mousedown":function($event){return _vm.beforeDown(project,$event)}}},[(project.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input mlr-5",attrs:{"type":"textarea","autosize":"","resize":"none","data-focus":project.focus,"readonly":!_vm.isEdit},on:{"input":function($event){return _vm.changeStatus(project)},"change":function($event){return _vm.updateAdd(project,$event)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(project,$event)}},model:{value:(project.Name),callback:function ($$v) {_vm.$set(project, "Name", $$v)},expression:"project.Name"}})],1):_c('div',{staticClass:"projText just-c"},[_vm._v(_vm._s(project.Name))])]),_c('div',{staticClass:"itemChildren"},[_vm._l((project.Children),function(task,j){return [(!_vm.onlyShowChecked||task.CheckStatus)?_c('div',{key:j,staticClass:"flexRow",class:[j==(project.Children.length-1)?'borItemL':'borItem',_vm.taskAbility[task.Id]?'black':'white'],on:{"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.rightClick($event,task)}}},[_c('div',{staticClass:"itemCode object-area",style:(_vm.staticNum[task.Id]&&{color:_vm.returnColor(_vm.staticNum[task.Id])}),attrs:{"data-obj":_vm.toJson(task)},on:{"mousedown":function($event){$event.stopPropagation();return _vm.beforeDown(task,$event)}}},[_c('div',{staticClass:"taskText just-c"},[(_vm.tier>=2&&task.Id)?_c('i',{staticClass:"fa check-icon",class:_vm._f("statusFilter")(task.CheckStatus),on:{"click":function (){_vm.checkBox(task,project);}}}):_vm._e(),(task.Id||_vm.isEdit)?_c('span',[_vm._v(" "+_vm._s(_vm.isEdit?(_vm.isAddZero(i+1)+'-'+_vm.isAddZero(j+1)):task.Code||(_vm.isAddZero(i+1)+'-'+_vm.isAddZero(j+1)))+" ")]):_vm._e()])]),_c('div',{staticClass:"itemName object-area",class:_vm.isEdit&&'no-padding',style:(_vm.staticNum[task.Id]&&{color:_vm.returnColor(_vm.staticNum[task.Id])}),attrs:{"data-obj":_vm.toJson(task)},on:{"mousedown":function($event){$event.stopPropagation();return _vm.beforeDown(task,$event)}}},[(task.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input mlr-5",attrs:{"type":"textarea","autosize":"","resize":"none","readonly":!_vm.isEdit,"data-focus":task.focus},on:{"input":function($event){return _vm.changeStatus(task)},"change":function($event){return _vm.updateAdd(task,$event)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(task,$event)}},model:{value:(task.Name),callback:function ($$v) {_vm.$set(task, "Name", $$v)},expression:"task.Name"}})],1):_c('div',{staticClass:"taskText just-c"},[_vm._v(_vm._s(task.Name))])]),_c('div',{staticClass:"itemChildren"},[_vm._l((task.Children),function(ability,k){return [(!_vm.onlyShowChecked||ability.CheckStatus)?_c('div',{key:k,staticClass:"flexRow",class:[k==(task.Children.length-1)?'borItemL':'borItem',_vm.taskAbility[ability.Id]?'black':'white'],style:(_vm.staticNum[ability.Id]&&{color:_vm.returnColor(_vm.staticNum[ability.Id])}),on:{"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.rightClick($event,ability)}}},[_c('div',{staticClass:"itemCodeA object-area",attrs:{"data-obj":_vm.toJson(ability)},on:{"mousedown":function($event){$event.stopPropagation();return _vm.beforeDown(ability,$event)}}},[_c('div',{staticClass:"abilText just-c"},[(_vm.tier>=3&&ability.Id)?_c('i',{staticClass:"fa check-icon",class:_vm._f("statusFilter")(ability.CheckStatus),on:{"click":function (){_vm.checkBox(ability,task,project);}}}):_vm._e(),(ability.Id||_vm.isEdit)?_c('span',[_vm._v(" "+_vm._s(_vm.isEdit?(_vm.isAddZero(i+1)+'-'+_vm.isAddZero(j+1)+'-'+_vm.isAddZero(k+1)): ability.Code||(_vm.isAddZero(i+1)+'-'+_vm.isAddZero(j+1)+'-'+_vm.isAddZero(k+1)))+" ")]):_vm._e()])]),_c('div',{staticClass:"itemNameA object-area",class:_vm.isEdit&&'no-padding',attrs:{"data-obj":_vm.toJson(ability)},on:{"mousedown":function($event){$event.stopPropagation();return _vm.beforeDown(ability,$event)}}},[(ability.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input ability-input",attrs:{"type":"textarea","autosize":"","resize":"none","readonly":!_vm.isEdit,"data-focus":ability.focus},on:{"change":function($event){return _vm.updateAdd(ability,$event)},"input":function($event){return _vm.changeStatus(ability)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(ability,$event)}},model:{value:(ability.Name),callback:function ($$v) {_vm.$set(ability, "Name", $$v)},expression:"ability.Name"}})],1):_c('div',{staticClass:"abilText"},[_vm._v(_vm._s(ability.Name))])]),(_vm.showRequire)?_c('div',{staticClass:"level-box"},[_c('div',{staticClass:"item-level"},[_c('div',{staticClass:"abilText radio"},[_c('el-radio',{attrs:{"label":"1","disabled":!_vm.isEdit},on:{"change":function (n,$event){_vm.changeStatus(ability);_vm.updateAdd(ability,$event,n)}},model:{value:(ability.Demand),callback:function ($$v) {_vm.$set(ability, "Demand", $$v)},expression:"ability.Demand"}})],1)]),_c('div',{staticClass:"item-level"},[_c('div',{staticClass:"abilText radio"},[_c('el-radio',{attrs:{"label":"0","disabled":!_vm.isEdit},on:{"change":function (n,$event){_vm.changeStatus(ability);_vm.updateAdd(ability,$event,n)}},model:{value:(ability.Demand),callback:function ($$v) {_vm.$set(ability, "Demand", $$v)},expression:"ability.Demand"}})],1)])]):_vm._e(),(_vm.showLevel)?_c('div',{staticClass:"level-box"},[_c('div',{staticClass:"item-level",on:{"click":function($event){$event.stopPropagation();return _vm.domClick(ability,$event)}}},[(ability.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input ability-input",attrs:{"type":"textarea","autosize":"","resize":"none","readonly":!_vm.isEdit},on:{"change":function($event){return _vm.updateAdd(ability,$event)},"input":function($event){return _vm.changeStatus(ability)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(ability,$event)}},model:{value:(ability.Li),callback:function ($$v) {_vm.$set(ability, "Li", $$v)},expression:"ability.Li"}})],1):_c('div',{staticClass:"abilText"},[_vm._v(_vm._s(ability.Li))])]),_c('div',{staticClass:"item-level",on:{"click":function($event){$event.stopPropagation();return _vm.domClick(ability,$event)}}},[(ability.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input ability-input",attrs:{"type":"textarea","autosize":"","resize":"none","readonly":!_vm.isEdit},on:{"change":function($event){return _vm.updateAdd(ability,$event)},"input":function($event){return _vm.changeStatus(ability)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(ability,$event)}},model:{value:(ability.Lj),callback:function ($$v) {_vm.$set(ability, "Lj", $$v)},expression:"ability.Lj"}})],1):_c('div',{staticClass:"abilText"},[_vm._v(_vm._s(ability.Lj))])]),_c('div',{staticClass:"item-level",on:{"click":function($event){$event.stopPropagation();return _vm.domClick(ability,$event)}}},[(ability.focus)?_c('div',{staticClass:"input-box"},[_c('el-input',{staticClass:"text-input ability-input",attrs:{"type":"textarea","autosize":"","resize":"none","readonly":!_vm.isEdit},on:{"change":function($event){return _vm.updateAdd(ability,$event)},"input":function($event){return _vm.changeStatus(ability)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.updateAdd(ability,$event)}},model:{value:(ability.Lk),callback:function ($$v) {_vm.$set(ability, "Lk", $$v)},expression:"ability.Lk"}})],1):_c('div',{staticClass:"abilText"},[_vm._v(_vm._s(ability.Lk))])])]):_vm._e()]):_vm._e()]})],2)]):_vm._e()]})],2)]):_vm._e()]})],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMenu),expression:"showMenu"}],ref:"fixedMenu",staticClass:"fixed-menu",attrs:{"id":"fixedMenu"}},[_c('ul',[_c('li',{on:{"click":_vm.topMove}},[_vm._v("向上移一行")]),_c('li',{on:{"click":_vm.bottomMove}},[_vm._v("向下移一行")]),_c('hr'),_c('li',{on:{"click":function($event){return _vm.topAdd()}}},[_vm._v("在上方插入一行")]),_c('li',{on:{"click":function($event){return _vm.bottomAdd()}}},[_vm._v("在下方插入一行")]),_c('hr'),_c('li',{on:{"click":function($event){return _vm.copyItem()}}},[_vm._v("复制")]),_c('li',{on:{"click":function($event){return _vm.pasteItem()}}},[_vm._v("粘贴")]),_c('hr'),(_vm.canDelete)?_c('li',{staticClass:"delete",on:{"click":_vm.beforeDeleteCurent}},[_vm._v("删除所在行和子集")]):_vm._e()])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEdit&&_vm.tableData.length==0),expression:"!isEdit&&tableData.length==0"}],staticClass:"text-c ptb-60"},[_c('img',{attrs:{"src":"/img/暂无内容.png","alt":""}})]),_c('BackTop'),_c('div',{attrs:{"id":"drag-icon"}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-project"},[_c('div',{staticClass:"itme-title"},[_vm._v("工作项目")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-task"},[_c('div',{staticClass:"itme-title"},[_vm._v("工作任务")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ability-title"},[_c('div',{staticClass:"itme-title"},[_vm._v("职业能力（技能、工具、方法、要求、知识）")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level-box"},[_c('div',[_vm._v("高")]),_c('div',[_vm._v("中")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level-box"},[_c('div',[_vm._v("中职")]),_c('div',[_vm._v("高职")]),_c('div',[_vm._v("本科")])])}]


// CONCATENATED MODULE: ./packages/editTable/src/index.vue?vue&type=template&id=905a615a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f36d6f40-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/editTable/src/BackTop.vue?vue&type=template&id=ce714864&scoped=true&
var BackTopvue_type_template_id_ce714864_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showBtn),expression:"showBtn"}],staticClass:"back-top",on:{"click":_vm.backTop}},[_c('i',{staticClass:"fa fa-chevron-up"})])}
var BackTopvue_type_template_id_ce714864_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/editTable/src/BackTop.vue?vue&type=template&id=ce714864&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/editTable/src/BackTop.vue?vue&type=script&lang=js&
//
//
//
//
//
//

// import { getStyle, startMove } from '@/utils/move'
/* harmony default export */ var BackTopvue_type_script_lang_js_ = ({
  components: {},
  data() {
    return {
      timer: null,
      autoScroll: true,
      showBtn: false
    }
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
      if (!this.autoScroll) {
        clearInterval(this.timer)
      }
      this.autoScroll = false
    }
  },
  methods: {
    backTop() {
      this.timer = setInterval(() => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var iSpeed = Math.floor(-scrollTop / 8)
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
        this.autoScroll = true
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + iSpeed
      }, 30)
    }
  }
});

// CONCATENATED MODULE: ./packages/editTable/src/BackTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BackTopvue_type_script_lang_js_ = (BackTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/editTable/src/BackTop.vue?vue&type=style&index=0&id=ce714864&lang=scss&scoped=true&
var BackTopvue_type_style_index_0_id_ce714864_lang_scss_scoped_true_ = __webpack_require__("a678");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/editTable/src/BackTop.vue






/* normalize component */

var component = normalizeComponent(
  src_BackTopvue_type_script_lang_js_,
  BackTopvue_type_template_id_ce714864_scoped_true_render,
  BackTopvue_type_template_id_ce714864_scoped_true_staticRenderFns,
  false,
  null,
  "ce714864",
  null
  
)

/* harmony default export */ var BackTop = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/editTable/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'EditTable',
  components: { BackTop: BackTop },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'fa-square-o',
        1: 'fa-check-square',
        2: 'fa-minus-square'
      }
      return statusMap[status]
    }
  },
  // props: ['tier', 'defaultKeys', 'abilityTree', 'isEdit', 'baseParams'],
  props: {
    // 勾选层级，0:无法勾选，1-3:第1-3级
    tier: {
      type: Number,
      default: 0
    },
    // 默认勾选id数组，只在勾选状态下生效
    defaultKeys: {
      type: Array,
      default: () => []
    },
    // 表对象数组
    abilityTree: {
      type: Array,
      default: () => []
    },
    // 是否可编辑
    isEdit: {
      type: Boolean,
      default: false
    },
    // 编辑状态下请求参数
    baseParams: {
      type: Object,
      default: () => ({})
    },
    // 编辑状态下添加url
    addRequest: {
      type: Object,
      default: () => ({})
    },
    // 编辑状态下修改url
    editRequest: {
      type: Object,
      default: () => ({})
    },
    deleteRequest: {
      type: Object,
      default: () => ({})
    },
    moveRequest: {
      type: Object,
      default: () => ({})
    },
    taskAbility: {
      type: Object,
      default: () => ({})
    },
    dragRequest: {
      type: Object,
      default: () => ({
        url: '/VocationalAbility/Move'
      })
    },
    showRequire: {
      type: Boolean,
      default: false
    },
    showLevel: {
      type: Boolean,
      default: false
    },
    catlogId: {
      type: String,
      default: '481f7e6e-374d-4002-8123-14064d75f69c'
    },
    abilityId: {
      type: String,
      default: 'd895143f-c7b6-466e-b241-1b56fb3a79b8'
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    onlyShowChecked: {
      type: Boolean,
      default: false
    },
    checkedTree: {
      type: Object,
      default: () => ({})
    },
    limitNum: {
      type: Number,
      default: 3
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      abilityCatelog: [],
      tableData: [],
      showMenu: false,
      handleObj: {},
      cloneData: {
        CheckStatus: 0,
        Checked: false,
        IsChanged: false,
        focus: 0,
        Code: '',
        Id: '',
        Name: '',
        ParentId: null,
        SelectCount: null,
        Type: 'Project',
        Children: [
          {
            CheckStatus: 0,
            Checked: false,
            IsChanged: false,
            focus: 0,
            Code: '',
            Id: '',
            Name: '',
            ParentId: '',
            SelectCount: null,
            Type: 'Task',
            Children: [
              {
                CheckStatus: 0,
                Checked: false,
                Children: [],
                focus: 0,
                Code: '',
                Id: '',
                Sort: 0,
                Name: '',
                ParentId: '',
                SelectCount: null,
                Type: 'Ability',
                IsChanged: false,
                Demand: '1'
              }
            ]
          }
        ]
      },
      projectNum: 0,
      taskNum: 0,
      abilityNum: 0,
      currentObj: {},
      stopUpdate: false,
      loading: false,
      staticNum: {},
      numColor: ['#333', '#4971F1', '#FF3300'],
      copyData: ''
    }
  },
  watch: {
    abilityTree(n) {
      // console.log('数据变哈U',n)
      // this.tableData = JSON.parse(JSON.stringify(this.abilityTree))
      this.addIndex()
    },
    defaultKeys(n) {
      // console.log('更新', n)
      // debugger
      this.addIndex()
      this.addDefaultKey()
    },
    isEdit(n) {
      this.addIndex()
    },
    // taskAbility(n){
    //   console.log('典型工作任务对应能力',n)
    // },
    checkedTree(n) {
      if (JSON.stringify(this.checkedTree) === '{}') {
        this.staticNum = {}
      } else {
        // let result = {}
        // let arr = Object.keys(this.checkedTree)
        // arr.forEach(e => {
        //   // result[e] = this.checkedTree[e]
        //   let obj = this.findObj(e, this.tableData)
        //   if (obj) {
        //     // result[obj.Id] = this.checkedTree[e]
        //     if (obj.Children && obj.Children.length > 0) {
        //       this.setSelectNum(obj.Children, this.checkedTree[e], result)
        //     }
        //   }
        // })
        // arr.forEach(e => {
        //   if (result[e]) {
        //     result[e] += this.checkedTree[e]
        //   } else {
        //     result[e] = this.checkedTree[e]
        //   }
        // })
        // console.log(result)
        this.staticNum = n
      }
    }
    // onlyShowChecked(n) {
    //   console.log('显示已选', n)
    // }
    // isEdit(n) {
    //   if (n) {
    //     this.editTextArea()
    //   }
    // }
  },
  mounted() {
    this.addIndex()
    this.addDefaultKey()
    document.addEventListener('click', () => {
      // var fixedMenu = document.querySelector('#fixedMenu')
      // fixedMenu.style.display = 'none'
      this.showMenu = false
      // this.handleObj = {}
    })
    // document.documentElement
    this.$refs.fixedMenu.addEventListener('click', e => {
      e.stopPropagation()
    })
    // })
  },
  destroyed() {
    window.removeEventListener('click', () => {
      this.showMenu = false
      // this.handleObj = {}
    })
    window.removeEventListener('scroll', () => {
      this.showMenu = false
      // this.handleObj = {}
    })
  },
  methods: {
    async getTree(params) {
      const res = await this.$http.get('/VocationalAbility/GetAbilityTree', { params })
      if (res.Result.Status) {
        this.$message({
          message: '登录异常，请重试！',
          type: 'error',
          duration: 3000
        })
        return
      }
      this.abilityCatelog = res.Result.Children
    },
    isAddZero(num) {
      return num < 10 ? '0' + num : num
    },
    toJson(obj) {
      return JSON.stringify(obj)
    },
    copyItem() {
      this.showMenu = false
      this.copyData = this.handleObj.Name
    },
    pasteItem() {
      this.showMenu = false
      this.handleObj.Name = this.copyData
      this.handleObj.IsChanged = true
      this.updateAdd(this.handleObj)
    },
    // 拖拽处理函数
    dragFun(data, ev) {
      const downTime = new Date().getTime()
      // var disX = 0
      // var disY = 0

      // var oEvent = ev || event
      var oDiv = document.getElementById('drag-icon')
      let timer = null
      timer = setTimeout(() => {
        oDiv.style.display = 'block'
      }, 500)
      // const { left: rootLeft, top: rootTop } = this.$el.getBoundingClientRect()
      // oDiv.style.left = oEvent.clientX - rootLeft + 'px'
      // oDiv.style.top = oEvent.clientY - rootTop + 'px'
      // disX = oEvent.clientX - rootLeft
      // disY = oEvent.clientY - rootTop
      // var oRoot = document.documentElement || document.body
      // let { scrollLeft, scrollTop } = oRoot
      // console.log(rootLeft, rootTop,this.$el.offsetWidth + rootLeft)
      document.onmousemove = function(ev) {
        this.$el.classList.add('none-select')
        oDiv.style.display = 'block'
        const {
          left: rootLeft,
          top: rootTop
        } = this.$el.getBoundingClientRect()
        var oEvent = ev || event
        var l = oEvent.clientX - rootLeft
        var t = oEvent.clientY - rootTop
        // console.log(l, t, rootTop)
        if (l < 0) {
          l = 0
        } else if (l > this.$el.offsetWidth - oDiv.offsetWidth) {
          l = this.$el.offsetWidth - oDiv.offsetWidth
        }

        if (t < 0) {
          t = 0
        } else if (t > this.$el.offsetHeight - oDiv.offsetHeight) {
          t = this.$el.offsetHeight - oDiv.offsetHeight
        }

        oDiv.style.left = l + 'px'
        oDiv.style.top = t + 'px'
      }.bind(this)

      document.onmouseup = async ev => {
        const upTime = new Date().getTime()
        if (upTime - downTime < 500) {
          document.onmousemove = null
          document.onmouseup = null
          clearTimeout(timer)
          oDiv.style.display = 'none'
          this.$el.classList.remove('none-select')
          return
        }
        clearTimeout(timer)
        oDiv.style.display = 'none'
        this.$el.classList.remove('none-select')
        document.onmousemove = null
        document.onmouseup = null
        var oEvent = ev || event
        var l = oEvent.clientX
        var t = oEvent.clientY
        if (!data.Id) {
          this.$message({
            showClose: true,
            message: '当前操作项目为留空项目，不可操作！',
            type: 'warning',
            duration: 2000
          })
          return
        }
        // console.log(l, t, oDiv.style.left, oDiv.style.top)
        const areaArr = Array.prototype.slice.call(
          document.querySelectorAll('.object-area')
        )
        const element = areaArr.find(e => {
          const { left, top } = e.getBoundingClientRect()
          const width = e.offsetWidth
          const height = e.offsetHeight
          return l >= left && l <= left + width && t >= top && t <= top + height
        })
        if (element) {
          // console.log(element)
          const handleObj = JSON.parse(element.dataset.obj)
          if (element.dataset.obj === JSON.stringify(data)) {
            return
          }
          if (!handleObj.ParentId && handleObj.Type !== 'Project') {
            this.$message({
              showClose: true,
              message: '当前操作项目为留空项目，不可操作！',
              type: 'warning',
              duration: 2000
            })
            return
          }
          if (handleObj.Type !== data.Type) {
            this.$message({
              showClose: true,
              message: '只能同级之间移动！',
              type: 'warning',
              duration: 2000
            })
            return
          }
          // const { left, top } = element.getBoundingClientRect()
          // const width = element.offsetWidth
          // const height = element.offsetHeight
          // 删除拖动的对象
          let arr = []
          const index = data.numIndex
          if (data.ParentId) {
            arr = this.findObj(data.ParentId, this.tableData).Children
          } else {
            arr = this.tableData
          }
          console.log(arr, index)
          // if (handleObj.ParentId != data.ParentId)
          arr.splice(index, 1)
          // this.addNumIndex(this.tableData)
          // end

          // this.handleObj = data
          // await this.deleteCurent()
          this.handleObj = handleObj
          // if (t < top + height / 2 || !handleObj.Id) {
          // console.log('放上边')
          this.topAdd(JSON.parse(JSON.stringify(data)))
          // } else {
          //   // console.log('放下边')
          //   this.bottomAdd(JSON.parse(JSON.stringify(data)))
          // }
          // this.addNumIndex(this.tableData)
          console.log('删除后还有么', this.tableData)
          const resultObj = this.findObj(data.Id, this.tableData)
          const parentObj = this.findObj(resultObj.ParentId, this.tableData)
          resultObj.IsChanged = true
          console.log('结果对象', resultObj, parentObj)
          this.moveItem(resultObj)
        } else {
          console.log('位置不对')
        }
      }

      return false
    },
    // 拖拽请求
    async moveItem(obj, e, Demand) {
      if (obj.Type !== 'Project' && !obj.ParentId) {
        this.$message({
          type: 'error',
          message: '该项父级为空，请先添加父级再进行此操作！'
        })
        return
      }
      if (this.loading) {
        return
      } else {
        this.loading = true
      }
      // if (!this.stopUpdate) {
      //   obj.focus = 0
      // }
      this.handleObj = obj
      // const { arr, index } = this.strikeHandle()
      // 修改删除操作
      if (!obj.IsChanged) {
        console.log('hello你好，你没改内容')
        this.loading = false
        // 如果未修改，不提交
        return
      }
      if (!obj.Name) {
        // 内容为空，提示
        this.$message({
          type: 'error',
          message: '内容不能为空！'
        })
        this.loading = false
        return
      }
      let params = this.getParams(obj, Demand)
      // console.log(params)
      if (this.baseParams) {
        // 父组件是否传入参数
        params = {
          ...params,
          ...this.baseParams
        }
      }
      try {
        let res = null
        res = await this.$http.post(this.dragRequest.url, {
          ...params,
          ...this.dragRequest.params
        })
        if (res.Result) {
          this.addNumIndex(this.tableData)
          obj.IsChanged = false
        } else {
          throw new Error('123')
        }
      } catch (err) {
        console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      } finally {
        this.loading = false
      }
    },
    returnColor(num) {
      if (num < 3) {
        return this.numColor[num - 1]
      } else {
        return this.numColor[2]
      }
    },
    setSelectNum(arr, num, result) {
      arr.forEach(e => {
        result[e.Id] = num
        if (e.Children && e.Children.length > 0) {
          this.setSelectNum(e.Children, num, result)
        }
      })
    },
    domClick(data, e) {
      // return
      if (!this.isEdit) {
        return
      }
      // console.log(this.currentObj.Code==data.Code&&this.currentObj.ParentId==data.ParentId)
      if (
        this.currentObj.Code !== data.Code ||
        this.currentObj.ParentId !== data.ParentId
      ) {
        this.currentObj.focus = 0
      }
      // console.log(data)
      this.currentObj = data
      data.focus = 1
      this.$nextTick(() => {
        // let oInput = Array.prototype.slice.call(
        //   document.querySelectorAll('.el-textarea__inner')
        // )
        // console.log(data, oInput)
        // let nextInput = oInput.find(e => e.dataset.focus == 1)
        // if (nextInput) {
        //   nextInput.focus()
        // }
        // console.log(e.target)
        if (e.target.className === 'el-textarea__inner') {
          e.target.focus()
        } else if (
          e.target.getElementsByClassName('el-textarea__inner').length
        ) {
          const input = e.target.getElementsByClassName('el-textarea__inner')
          input[0].focus()
        }
      })
    },
    beforeDown(data, e) {
      // return
      if (!this.isEdit) {
        return
      }
      // console.log(this.currentObj.Code==data.Code&&this.currentObj.ParentId==data.ParentId)
      if (
        this.currentObj.Code !== data.Code ||
        this.currentObj.ParentId !== data.ParentId
      ) {
        this.currentObj.focus = 0
      }
      // console.log(data)
      this.currentObj = data
      data.focus = 1
      this.$nextTick(() => {
        // let oInput = Array.prototype.slice.call(
        //   document.querySelectorAll('.el-textarea__inner')
        // )
        // console.log(data, oInput)
        // let nextInput = oInput.find(e => e.dataset.focus == 1)
        // if (nextInput) {
        //   nextInput.focus()
        // }
        // console.log(e.target)
        if (e.target.className === 'el-textarea__inner') {
          e.target.focus()
        } else if (
          e.target.getElementsByClassName('el-textarea__inner').length
        ) {
          const input = e.target.getElementsByClassName('el-textarea__inner')
          input[0].focus()
        }
      })
      this.dragFun(data)
    },
    handleRadio(n, obj) {
      obj.Demand = n
      // console.log(n)
    },
    keyListen(obj, event) {
      // this.send() // 发送文本
      event.preventDefault() // 阻止浏览器默认换行操作
      return false
    },
    async updateAdd(obj, e, Demand) {
      if (obj.Type !== 'Project' && !obj.ParentId) {
        this.$message({
          type: 'error',
          message: '该项父级为空，请先添加父级再进行此操作！'
        })
        return
      }
      if (this.loading) {
        return
      } else {
        this.loading = true
      }
      // if (!this.stopUpdate) {
      //   obj.focus = 0
      // }
      this.handleObj = obj
      const { arr, index } = this.strikeHandle()
      // 修改删除操作
      if (!obj.IsChanged) {
        console.log('hello你好，你没改内容')
        this.loading = false
        // 如果未修改，不提交
        return
      }
      if (!obj.Name) {
        // 内容为空，提示
        this.$message({
          type: 'error',
          message: '内容不能为空！'
        })
        this.loading = false
        return
      }
      let params = this.getParams(obj, Demand)
      // console.log(params)
      if (this.baseParams) {
        // 父组件是否传入参数
        params = {
          ...params,
          ...this.baseParams
        }
      }
      try {
        let res = null
        if (!params.Id) {
          res = await this.$http.post(this.addRequest.url, {
            ...params,
            ...this.addRequest.params
          })
        } else {
          res = await this.$http.post(this.editRequest.url, {
            ...params,
            ...this.editRequest.params
          })
        }
        if (res.Result) {
          if (!params.Id) {
            obj.Id = res.Result
            obj.Children.forEach(e => {
              e.ParentId = obj.Id
            })
            console.log('修改后的对象', obj)
            this.addNumIndex(this.tableData)
            if (e && e.keyCode) {
              arr[index + 1].focus = 1
              this.$nextTick(() => {
                const oInput = Array.prototype.slice.call(
                  document.querySelectorAll('.el-textarea__inner')
                )
                const nextInput = oInput.find(e => e.dataset.focus === 1)
                if (nextInput) {
                  nextInput.focus()
                }
              })
            }
          }
          obj.IsChanged = false
        } else {
          throw new Error('123')
        }
      } catch (err) {
        console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      } finally {
        this.loading = false
      }
    },
    getParams(obj, Demand) {
      // 根据选择的层级返回对应的修改、添加所需参数
      let result = {}
      if (obj.Type === 'Ability') {
        result = {
          Sort: obj.numIndex + 1,
          Name: obj.Name,
          AbilityCatelog: obj.ParentId,
          Id: obj.Id,
          TableId: this.abilityId,
          Li: obj.Li,
          Lj: obj.Lj,
          Lk: obj.Lk,
          Demand: obj.Demand
        }
        if (Demand) {
          result.Demand = Demand
        }
      } else {
        result = {
          Sort: obj.numIndex + 1,
          Name: obj.Name,
          Parent: obj.ParentId,
          Id: obj.Id,
          TableId: this.catlogId
        }
      }
      // result = {
      //   ...result,
      //   ...this.baseParams
      // }
      return Object.assign(result, this.baseParams)
    },
    getEdit() {
      // 获取已修改项，废弃方案，没用
      this.tableData.forEach((e, i) => {
        let hadEdit = {}
        hadEdit = e.IsChanged ? e : {}
        if (e.Children) {
          e.Children.forEach((p, q) => {
            if (JSON.stringify(hadEdit) === '{}') {
              hadEdit = p.IsChanged ? p : {}
            } else {
              hadEdit.Children = p.IsChanged ? p : {}
            }
            if (p.Children) {
              p.Children.forEach((m, n) => {})
            }
          })
        }
      })
    },
    changeStatus(obj) {
      // 修改内容，修改标识字段为true
      obj.IsChanged = true
    },
    beforeDeleteCurent(e) {
      // e.stopPropagation()
      this.showMenu = false
      this.$confirm('此操作将会删除所有已勾选该项的记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // console.log(this.handleObj)
          this.deleteCurent()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    async deleteCurent() {
      console.log(this.handleObj)
      // 删除当前选中项
      const { arr, index } = this.strikeHandle()
      if (!this.handleObj.Id && index === arr.length - 1) {
        this.$message({
          type: 'warning',
          message: '当前项为空数据，无法删除！'
        })
        return
      }
      this.showMenu = false
      // console.log(arr, index)
      // console.log(this.handleObj)
      let params = {}
      // 根据所选项的层级操作不同数据表
      if (this.handleObj.Type === 'Ability') {
        params = {
          TableId: this.abilityId,
          Id: this.handleObj.Id
        }
      } else {
        params = {
          TableId: this.catlogId,
          Id: this.handleObj.Id
        }
      }
      try {
        if (this.handleObj.Id) {
          await this.$http.get(this.deleteRequest.url, {
            params: { ...params, ...this.deleteRequest.params }
          })
        }
        arr.splice(index, 1)
        this.addNumIndex(this.tableData)
      } catch (err) {
        // console.log(err)
        this.$message({
          type: 'error',
          message: '操作失败，请重试！'
        })
      }
    },
    topAdd(assignObj) {
      // 向上添加
      if (this.handleObj.Type !== 'Project' && !this.handleObj.ParentId) {
        this.$message({
          type: 'warning',
          message: '此项还没有父级，无法添加！'
        })
        return
      }
      var { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (assignObj) {
        const clonObj = JSON.parse(JSON.stringify(assignObj))
        if (
          this.handleObj.ParentId === clonObj.ParentId &&
          index >= clonObj.Sort
        ) {
          index -= 1
        }
        console.log(
          '条件',
          this.handleObj.ParentId === clonObj.ParentId,
          index,
          clonObj.Sort
        )
      }
      // console.log('结果',arr, index)
      if (this.handleObj.Type === 'Project') {
        const addObj = assignObj || JSON.parse(JSON.stringify(this.cloneData))
        // addObj.Children = []
        arr.splice(index, 0, addObj)
      } else if (this.handleObj.Type === 'Ability') {
        const addObj =
          assignObj ||
          JSON.parse(JSON.stringify(this.cloneData.Children[0].Children[0]))
        addObj.ParentId = this.handleObj.ParentId
        // console.log(index, assignObj)
        arr.splice(index, 0, addObj)
      } else {
        const addObj =
          assignObj || JSON.parse(JSON.stringify(this.cloneData.Children[0]))
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index, 0, addObj)
      }
      this.addNumIndex(this.tableData)
    },
    bottomAdd(assignObj) {
      // 向下添加
      if (this.handleObj.Type !== 'Project' && !this.handleObj.ParentId) {
        this.$message({
          type: 'warning',
          message: '此项还没有父级，无法添加！'
        })
        return
      }
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      // let cloneObj = this.cloneObj(this.handleObj)
      // console.log(cloneObj)
      if (this.handleObj.Type === 'Project') {
        const obj = assignObj || JSON.parse(JSON.stringify(this.cloneData))
        // obj.Children = []
        arr.splice(index + 1, 0, obj)
      } else if (this.handleObj.Type === 'Ability') {
        const addObj =
          assignObj ||
          JSON.parse(JSON.stringify(this.cloneData.Children[0].Children[0]))
        // addObj.Children = []
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index + 1, 0, addObj)
      } else {
        const addObj =
          assignObj || JSON.parse(JSON.stringify(this.cloneData.Children[0]))
        // addObj.Children = []
        addObj.ParentId = this.handleObj.ParentId
        arr.splice(index + 1, 0, addObj)
      }
      this.addNumIndex(this.tableData)
    },
    // 向上移动
    async topMove() {
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (!this.handleObj.Id) {
        this.$message({
          type: 'warning',
          message: '该项数据为空，请保存后操作！'
        })
        return
      }
      // console.log(parent, index)
      if (index !== 0) {
        let params = {}
        if (this.handleObj.Type === 'Ability') {
          params = {
            TableId: this.abilityId,
            aId: this.handleObj.Id,
            bId: arr[index - 1].Id
          }
        } else {
          params = {
            TableId: this.catlogId,
            aId: this.handleObj.Id,
            bId: arr[index - 1].Id
          }
        }
        // console.log(arr, params)
        const res = await this.$http.get(this.moveRequest.url, {
          params: { ...params, ...this.moveRequest.params }
        })
        if (res.Result) {
          this.swapArray(arr, index, index - 1)
          this.addNumIndex(this.tableData)
        } else {
          this.$message({
            type: 'error',
            message: '操作失败，请重试'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '已经处于第一个，无法上移'
        })
        // alert('已经处于第一个，无法上移')
      }
    },
    strikeHandle() {
      // 根据所选对象，找出所在父级，以及索引值
      // this.showMenu = false
      let arr = []
      if (this.handleObj.ParentId) {
        arr = this.findObj(this.handleObj.ParentId, this.tableData).Children
      } else {
        arr = this.tableData
      }
      // let index = arr.findIndex(e => e.Id == this.handleObj.Id)
      return { arr, index: this.handleObj.numIndex }
    },
    // 向下移动
    async bottomMove() {
      const { arr, index } = this.strikeHandle()
      this.showMenu = false
      if (!this.handleObj.Id) {
        this.$message({
          type: 'warning',
          message: '该项数据为空，请保存后操作！'
        })
        return
      }
      if (!arr[index + 1].Id) {
        this.$message({
          type: 'warning',
          message: '已经处于最后一个，无法下移！'
        })
        return
      }
      // console.log(arr, index, index + 1)
      if (index + 1 !== arr.length) {
        let params = {}
        if (this.handleObj.Type === 'Ability') {
          params = {
            TableId: this.abilityId,
            aId: this.handleObj.Id,
            bId: arr[index + 1].Id
          }
        } else {
          params = {
            TableId: this.catlogId,
            aId: this.handleObj.Id,
            bId: arr[index + 1].Id
          }
        }
        // console.log(arr, params)
        const res = await this.$http.get(this.moveRequest.url, {
          params: { ...params, ...this.moveRequest.params }
        })
        if (res.Result) {
          this.swapArray(arr, index, index + 1)
          this.addNumIndex(this.tableData)
        } else {
          this.$message({
            type: 'warning',
            message: '操作失败，请重试'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '已经处于最后一个，无法下移'
        })
        // alert('已经处于最后一个，无法下移')
      }
    },
    swapArray(arr, index1, index2) {
      // 数组交换元素
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    cloneObj(obj) {
      // 针对树结构对象是否存在Children进行深克隆，并将属性值置空
      const result = {}
      for (const key in obj) {
        if (key === 'Type') {
          result[key] = obj[key]
        } else if (key === 'Children') {
          console.log(obj[key].length)
          if (obj[key] && obj[key].length > 0) {
            result[key] = [this.cloneObj(obj[key][0])]
          } else {
            result[key] = []
          }
        } else {
          result[key] = ''
        }
      }
      return result
    },
    rightClick(e, obj) {
      // 阻止鼠标右键默认行为，在当前指针处弹出操作框
      if (!this.isEdit) return
      // e.preventDefault()
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      // console.log(clientHeight, e.clientY, this.$refs.fixedMenu.offsetHeight,clientHeight <= e.clientY + this.$refs.fixedMenu.offsetHeight)
      if (clientHeight <= e.clientY + 260 + 60) {
        this.$refs.fixedMenu.style.bottom = 60 + 'px'
        this.$refs.fixedMenu.style.top = 'auto'
      } else {
        this.$refs.fixedMenu.style.top = e.clientY + 'px'
      }
      this.$refs.fixedMenu.style.left = e.clientX + 'px'
      // this.$refs.fixedMenu.style.display = 'block'
      this.handleObj = obj
      this.showMenu = true
    },
    addIndex() {
      // 初始化表格数组
      const arr = JSON.parse(JSON.stringify(this.abilityTree))
      // if (this.isEdit) {
      //   let obj = JSON.parse(JSON.stringify(this.cloneData))
      //   obj.Children = []
      //   arr.push(obj)
      // }
      this.addNumIndex(arr)
      this.tableData = arr
      // console.log(this.tableData)
    },
    addNumIndex(arr) {
      this.statistics(arr)
      if (
        (arr.length <= 0 && this.isEdit) ||
        (arr.length && arr[arr.length - 1].Id && this.isEdit)
      ) {
        const obj = JSON.parse(JSON.stringify(this.cloneData))
        // obj.Children = []
        arr.push(obj)
      }
      // 为数组添加索引值字段，并为已存在的项目、任务添加一个子集
      let index = 0
      arr.forEach((e, i) => {
        e.numIndex = i
        if (e.Children && e.Children.length > 0) {
          // console.log(e.Children)
          if (e.Children[e.Children.length - 1].Id && this.isEdit) {
            const obj = JSON.parse(JSON.stringify(this.cloneData.Children[0]))
            obj.ParentId = e.Id
            // obj.Children = []
            e.Children.push(obj)
          }
          e.Children.forEach((p, q) => {
            p.numIndex = q
            ++index
            p.Index = index
            if (p.Children && p.Children.length > 0) {
              if (p.Children[p.Children.length - 1].Id && this.isEdit) {
                const obj = JSON.parse(
                  JSON.stringify(this.cloneData.Children[0].Children[0])
                )
                obj.ParentId = p.Id
                // obj.Children = []
                obj.numIndex = 0
                p.Children.push(obj)
              }
              p.Children.forEach((m, n) => {
                m.numIndex = n
              })
            } else {
              if (p.Id) {
                const obj = JSON.parse(
                  JSON.stringify(this.cloneData.Children[0].Children[0])
                )
                obj.ParentId = p.Id
                obj.numIndex = 0
                p.Children = [obj]
              }
            }
          })
        } else {
          const obj = JSON.parse(JSON.stringify(this.cloneData.Children[0]))
          // obj.Children = []
          obj.ParentId = e.Id
          obj.numIndex = 0
          // obj.Children[0].numIndex = 0
          e.Children = [obj]
          // console.log('添加任务', e)
        }
      })
      this.addFocus(arr)
    },
    addFocus(arr) {
      arr.forEach((e, i) => {
        e.focus = 0
        if (e.Children && e.Children.length) {
          e.Children.forEach(p => {
            p.focus = 0
            if (p.Children && p.Children.length) {
              p.Children.forEach(m => {
                m.focus = 0
              })
            }
          })
        }
      })
    },
    statistics(arr) {
      let projectNum = 0
      let taskNum = 0
      let abilityNum = 0
      arr.forEach(project => {
        if (project.Id) projectNum++
        // taskNum += project.Children.length
        if (project.Children && project.Children.length > 0) {
          project.Children.forEach(task => {
            if (task.Id) taskNum++
            if (task.Children && task.Children.length) {
              task.Children.forEach(ability => {
                if (ability.Id) abilityNum++
              })
            }
            // abilityNum += task.Children.length
          })
        }
      })
      this.projectNum = projectNum
      this.taskNum = taskNum
      this.abilityNum = abilityNum
      this.$emit('update:projectNum', this.projectNum)
      this.$emit('update:taskNum', this.taskNum)
      this.$emit('update:abilityNum', this.abilityNum)
      // console.log(this.projectNum, this.taskNum, this.abilityNum)
    },
    editTextArea() {
      // 将textArea标签手动改为高度自适应，已换用element input组件，弃用
      this.$nextTick(() => {
        var textarea = Array.prototype.slice.call(
          document.querySelectorAll('.el-textarea__inner'),
          0
        )
        textarea.forEach(e => {
          this.makeExpandingArea(e)
          // console.log(e.scrollHeight)
        })
        // console.log(document.querySelectorAll('.el-textarea__inner'))
      })
    },
    async intialize() {
      // 获取能力树，现在由父组件传入，弃用
      // 获取能力树
      await this.getTree({
        params: {
          schoolId: this.userSid,
          majorId: this.majorObj.BaseMajorId
        }
      })
      this.tableData = JSON.parse(JSON.stringify(this.abilityCatelog))
    },
    addDefaultKey() {
      // 如果默认选中key数组存在进行自动选中操作
      // debugger
      if (this.defaultKeys) {
        // console.log('defaultKeys',this.defaultKeys)
        this.defaultKeys.forEach(e => {
          const ability = this.findObj(e, this.tableData)
          let task = null
          let project = null
          // console.log(ability)
          if (ability && ability.ParentId) {
            task = this.findObj(ability.ParentId, this.tableData)
            if (task.ParentId) {
              project = this.findObj(task.ParentId, this.tableData)
            }
          }
          // this.selectDefaultKey(ability)
          this.selectDefaultKey(ability, task, project)
          // console.log(ability,this.tableData)
        })
      }
    },
    selectDefaultKey(item, parent, grandParent) {
      // 根据默认选中key数组自动选中
      if (!item) {
        return
      }
      item.Checked = true
      item.CheckStatus = 1
      if (item.Children.length > 0) {
        item.Children.map(p => {
          p.Checked = item.Checked
          p.CheckStatus = item.CheckStatus
          if (p.Children.length > 0) {
            p.Children.map(q => {
              q.CheckStatus = item.CheckStatus
              q.Checked = item.Checked
            })
          }
        })
      }
      if (parent) {
        // 同级节点选中个数
        var sibChechedCount = parent.Children.filter(p => p.Checked).length
        if (sibChechedCount === 0) {
          parent.Checked = false
          parent.CheckStatus = 0
        } else if (parent.Children.length === sibChechedCount) {
          parent.Checked = true
          parent.CheckStatus = 1
        } else {
          parent.Checked = false
          parent.CheckStatus = 2
        }
      }
      if (grandParent) {
        var sibCount = grandParent.Children.filter(p => p.Checked).length
        var isHasChecked =
          grandParent.Children.filter(p => p.CheckStatus === 2).length > 0
        if (sibCount === 0 && !isHasChecked) {
          grandParent.Checked = false
          grandParent.CheckStatus = 0
        } else if (grandParent.Children.length === sibCount) {
          grandParent.Checked = true
          grandParent.CheckStatus = 1
        } else {
          grandParent.Checked = false
          grandParent.CheckStatus = 2
        }
      }
    },
    findObj(id, arr) {
      // 从表格数组中查找指定对象
      const result = arr.find(e => e.Id === id)
      if (result) {
        return result
        // console.log('target',this.target)
      } else {
        let aaa = null
        arr.forEach(p => {
          if (p.Children && this.findObj(id, p.Children)) {
            aaa = this.findObj(id, p.Children, this.target)
          }
        })
        return aaa
      }
    },
    getProject() {
      // 获取已勾选项目
      const arr = []
      this.tableData.forEach(e => {
        if (e.Checked) {
          arr.push(e.Id)
        }
      })
      return arr
    },
    getTask() {
      // 获取已勾选任务
      const arr = []
      this.tableData.forEach(e => {
        if (e.Children && e.Children.length > 0) {
          e.Children.forEach(p => {
            if (p.Checked) {
              arr.push(p.Id)
            }
          })
        }
      })
      return arr
    },
    getVal() {
      // 获取已勾选能力
      const arr = []
      this.tableData.forEach(e => {
        if (e.Children && e.Children.length > 0) {
          e.Children.forEach(p => {
            if (p.Children && p.Children.length > 0) {
              p.Children.forEach(m => {
                if (m.Checked) {
                  arr.push(m.Id)
                }
              })
            }
          })
        }
      })
      return arr
      // this.
    },
    getFinaly() {
      // let project = [],
      //   task = []
      // ability = []
      const arr = []
      this.tableData.forEach(e => {
        if (e.Checked) {
          // project.push({Project:e.Id})
          arr.push(e.Id)
        } else {
          if (e.Children && e.Children.length > 0) {
            e.Children.forEach(p => {
              if (p.Checked) {
                // task.push({Task:p.Id})
                arr.push(p.Id)
              } else {
                if (p.Children && p.Children.length > 0) {
                  p.Children.forEach(m => {
                    if (m.Checked) {
                      // ability.push({Ability:m.Id})
                      arr.push(m.Id)
                    }
                  })
                }
              }
            })
          }
        }
      })
      // return {project,task,ability}
      return arr
    },
    emitChange() {
      // 向父组件发射勾选的数据
      this.$emit('check-change', this.getFinaly())
    },
    checkBox(item, parent, grandParent) {
      if (
        this.staticNum[item.Id] &&
        this.staticNum[item.Id] >= this.limitNum &&
        !item.Checked
      ) {
        console.log(this.staticNum[item.Id])
        this.$message({
          type: 'warning',
          message: '建议最多勾选' + this.limitNum + '次！'
        })
        // return
      }
      // 修改勾选状态
      // debugger
      item.Checked = !item.Checked
      if (item.Checked) {
        // if(this.staticNum[item.Id]){
        //   if(this.staticNum[item.Id]<3){
        //     this.staticNum[item.Id] += 1
        //   }
        // }else{
        //   this.staticNum[item.Id] = 1
        // }
        this.staticNum[item.Id] = this.staticNum[item.Id]
          ? (this.staticNum[item.Id] += 1)
          : 1
      } else {
        if (this.staticNum[item.Id]) {
          this.staticNum[item.Id] -= 1
        }
        // this.staticNum[item.Id] = this.staticNum[item.Id]
        //   ? (this.staticNum[item.Id] -= 1)
        //   : 1
      }
      item.CheckStatus = item.Checked ? 1 : 0
      if (item.Children.length > 0) {
        item.Children.map(p => {
          if (item.Checked && p.Checked) {
            if (this.staticNum[p.Id]) {
              this.staticNum[p.Id] -= 1
            }
          }
          p.Checked = item.Checked
          p.CheckStatus = item.CheckStatus
          if (p.Children.length > 0) {
            p.Children.map(q => {
              if (p.Checked && q.Checked) {
                if (this.staticNum[q.Id]) {
                  this.staticNum[q.Id] -= 1
                }
              }
              q.CheckStatus = item.CheckStatus
              q.Checked = item.Checked
            })
          }
        })
      }
      if (parent) {
        // 同级节点选中个数
        var sibChechedCount = parent.Children.filter(p => p.Checked).length
        if (sibChechedCount === 0) {
          parent.Checked = false
          parent.CheckStatus = 0
        } else if (parent.Children.length === sibChechedCount) {
          parent.Children.forEach(e => {
            if (this.staticNum[e.Id]) {
              this.staticNum[e.Id] -= 1
            }
          })
          parent.Checked = true
          parent.CheckStatus = 1
        } else {
          if (parent.Checked) {
            parent.Children.forEach(x => {
              if (x.Checked) {
                if (this.staticNum[x.Id] >= 3) {
                  this.staticNum[x.Id] += 1
                  this.$message({
                    message: '有能力已经勾选了三次，将会自动取消勾选！',
                    type: 'error'
                  })
                  this.checkBox(x, parent, grandParent)
                  // console.log(x)
                } else {
                  this.staticNum[x.Id] = this.staticNum[x.Id]
                    ? (this.staticNum[x.Id] += 1)
                    : 1
                }
              }
            })
          }
          parent.Checked = false
          parent.CheckStatus = 2
        }
      }
      if (grandParent) {
        var sibCount = grandParent.Children.filter(p => p.Checked).length
        var isHasChecked =
          grandParent.Children.filter(p => p.CheckStatus === 2).length > 0
        if (sibCount === 0 && !isHasChecked) {
          grandParent.Checked = false
          grandParent.CheckStatus = 0
        } else if (grandParent.Children.length === sibCount) {
          grandParent.Checked = true
          grandParent.CheckStatus = 1
        } else {
          grandParent.Checked = false
          grandParent.CheckStatus = 2
        }
      }
      this.emitChange()
    },
    makeExpandingArea(el) {
      // 将textArea标签手动改为高度自适应，已换用element input组件，弃用
      var timer = null
      // 由于ie8有溢出堆栈问题，故调整了这里
      var setStyle = function(el, auto) {
        if (auto) el.style.height = 'auto'
        el.style.height = el.scrollHeight + 'px'
      }
      var delayedResize = function(el) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(function() {
          setStyle(el)
        }, 200)
      }
      if (el.addEventListener) {
        el.addEventListener(
          'input',
          function() {
            setStyle(el, 1)
          },
          false
        )
        setStyle(el)
      } else if (el.attachEvent) {
        el.attachEvent('onpropertychange', function() {
          setStyle(el)
        })
        setStyle(el)
      }
      if (window.VBArray && window.addEventListener) {
        // IE9
        el.attachEvent('onkeydown', function() {
          var key = window.event.keyCode
          if (key === 8 || key === 46) delayedResize(el)
        })
        el.attachEvent('oncut', function() {
          delayedResize(el)
        }) // 处理粘贴
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/editTable/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var editTable_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/editTable/src/index.vue?vue&type=style&index=0&id=905a615a&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_905a615a_lang_scss_scoped_true_ = __webpack_require__("1aa9");

// EXTERNAL MODULE: ./packages/editTable/src/index.vue?vue&type=style&index=1&lang=scss&
var srcvue_type_style_index_1_lang_scss_ = __webpack_require__("5ad6");

// CONCATENATED MODULE: ./packages/editTable/src/index.vue







/* normalize component */

var src_component = normalizeComponent(
  editTable_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "905a615a",
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/editTable/index.js
// packages/textarea/index.js

// 导入组件，组件必须声明 name


// 为组件添加 install 方法，用于按需引入
src.install = function(Vue) {
  Vue.component(src.name, src)
}

/* harmony default export */ var editTable = (src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f36d6f40-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/BackTop/src/index.vue?vue&type=template&id=714e63fc&scoped=true&
var srcvue_type_template_id_714e63fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showBtn),expression:"showBtn"}],staticClass:"back-top",on:{"click":_vm.backTop}},[_c('i',{staticClass:"fa fa-chevron-up"})])}
var srcvue_type_template_id_714e63fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/BackTop/src/index.vue?vue&type=template&id=714e63fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/BackTop/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

// import { getStyle, startMove } from '@/utils/move'
/* harmony default export */ var BackTop_srcvue_type_script_lang_js_ = ({
  name: 'BackTop',
  components: {},
  data() {
    return {
      timer: null,
      autoScroll: true,
      showBtn: false
    }
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
      if (!this.autoScroll) {
        clearInterval(this.timer)
      }
      this.autoScroll = false
    }
  },
  methods: {
    backTop() {
      this.timer = setInterval(() => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var iSpeed = Math.floor(-scrollTop / 8)
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
        this.autoScroll = true
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + iSpeed
      }, 30)
    }
  }
});

// CONCATENATED MODULE: ./packages/BackTop/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_BackTop_srcvue_type_script_lang_js_ = (BackTop_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/BackTop/src/index.vue?vue&type=style&index=0&id=714e63fc&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_714e63fc_lang_scss_scoped_true_ = __webpack_require__("cb5f");

// CONCATENATED MODULE: ./packages/BackTop/src/index.vue






/* normalize component */

var BackTop_src_component = normalizeComponent(
  packages_BackTop_srcvue_type_script_lang_js_,
  srcvue_type_template_id_714e63fc_scoped_true_render,
  srcvue_type_template_id_714e63fc_scoped_true_staticRenderFns,
  false,
  null,
  "714e63fc",
  null
  
)

/* harmony default export */ var BackTop_src = (BackTop_src_component.exports);
// CONCATENATED MODULE: ./packages/BackTop/index.js
// packages/textarea/index.js

// 导入组件，组件必须声明 name


// 为组件添加 install 方法，用于按需引入
BackTop_src.install = function(Vue) {
  Vue.component(BackTop_src.name, BackTop_src)
}

/* harmony default export */ var packages_BackTop = (BackTop_src);

// CONCATENATED MODULE: ./packages/index.js
// packages / index.js

// 导入单个组件


// 以数组的结构保存组件，便于遍历
const components = [
  editTable,
  packages_BackTop
]
// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}
// const componentsObj = components.reduce((pre, cur) => {
//   pre[cur.name] = cur
//   return pre
// }, {})
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  EditTable: editTable,
  BackTop: packages_BackTop
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-editexcel_table.umd.js.map