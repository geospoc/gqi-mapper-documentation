(window.webpackJsonp=window.webpackJsonp||[]).push([[25,71],{221:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(13),l=Object(o.b)({functional:!0,props:{component:{type:[String,Object,Array],required:!0},tag:{type:String,default:"span"}},render:function(t,e){var n=e.props,data=e.data,o=e.slots,l=e.children;return"string"==typeof n.component&&r.default.component(n.component)?t(n.component,data,l):t(n.tag,data,o().default)}}),c=n(37),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},289:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("1b4255c6",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(289)},347:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"h2[data-v-62f740b5],h3[data-v-62f740b5]{margin-bottom:.5rem;font-size:1.25rem;line-height:1.75rem}p[data-v-62f740b5]{font-weight:400}",""]),r.locals={},t.exports=r},407:function(t,e,n){"use strict";n.r(e);n(34),n(30);var r=n(13),o=Object(r.b)({props:{title:{type:String,required:!0},icon:{type:String,default:""},iconClass:{type:String,default:""}},setup:function(){return{isImage:function(t){return String(t).includes(".")}}}}),l=(n(346),n(37)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"relative w-full px-6 py-8 bg-white border border-gray-200 rounded dark:border-gray-700 dark:bg-gray-900"},[n("InjectComponent",{staticClass:"w-16 h-16 mb-3",class:t.iconClass||"",attrs:{component:t.icon}},[t.isImage(t.icon)?n("NuxtImg",{staticClass:"inline-block w-16 h-16 mb-3",attrs:{src:t.icon}}):n("span",{staticClass:"inline-block w-16 h-16 mb-3 text-6xl"},[t._v(t._s(t.icon))])],1),t._v(" "),n("h3",{staticClass:"mb-2 text-xl"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)])}),[],!1,null,"62f740b5",null);e.default=component.exports;installComponents(component,{InjectComponent:n(221).default})}}]);