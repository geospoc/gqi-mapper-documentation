(window.webpackJsonp=window.webpackJsonp||[]).push([[74,38,64],{237:function(t,e,n){"use strict";n.r(e);var o=n(13),r=Object(o.b)({setup:function(){var t=Object(o.j)(),e=t.value=!t.value,n=t.value=!1;return{open:t,toggle:e,close:n}}}),l=n(37),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative inline-block text-left",on:{mouseenter:function(e){t.open=!0},mouseleave:function(e){t.open=!1},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.open=!1}}},[t._t("trigger",null,{toggle:t.toggle,open:t.open}),t._v(" "),n("Transition",{attrs:{"enter-class":"transform scale-95 opacity-0","enter-active-class":"transition duration-100 ease-out","enter-to-class":"transform scale-100 opacity-100","leave-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-to-class":"transform scale-95 opacity-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute top-6 z-50 w-auto origin-top-right rounded-md shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"},[n("div",{staticClass:"bg-white rounded-md dark:bg-gray-800"},[t._t("default")],2)])])],2)}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);var o=n(37),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}})])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var o=n(37),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$i18n.locales.length>1?n("Dropdown",{staticClass:"inline-flex",scopedSlots:t._u([{key:"trigger",fn:function(t){var e=t.open,o=t.toggle;return[n("button",{staticClass:"text-icon",class:{"text-gray-700 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-400":e},on:{touchstart:function(t){return t.stopPropagation(),t.preventDefault(),o(t)}}},[n("IconTranslate",{staticClass:"w-6 h-6"})],1)]}}],null,!1,1649896668)},[t._v(" "),n("ul",{staticClass:"py-1"},t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code},[n("NuxtLink",{staticClass:"px-4 py-1 flex items-center whitespace-no-wrap",class:[t.$i18n.locale===e.code?"font-semibold cursor-default text-gray-800 dark:text-gray-200":"hover:text-primary"],attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconTranslate:n(244).default,Dropdown:n(237).default})}}]);