(window.webpackJsonp=window.webpackJsonp||[]).push([[17,71],{221:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(13),l=Object(o.b)({functional:!0,props:{component:{type:[String,Object,Array],required:!0},tag:{type:String,default:"span"}},render:function(t,n){var e=n.props,data=n.data,o=n.slots,l=n.children;return"string"==typeof e.component&&r.default.component(e.component)?t(e.component,data,l):t(e.tag,data,o().default)}}),c=e(37),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports},417:function(t,n,e){"use strict";e.r(n);e(34),e(30);var r=e(13),o=Object(r.b)({props:{title:{type:String,default:"Features"},features:{type:Array,default:function(){return[{icon:"👀",title:"Use Emojis",description:"And add a description for it!"},{icon:"IconEdit",title:"Use Components",description:"By using a component name inside, great for using SVG."}]}}},setup:function(){return{isImage:function(t){return String(t).includes(".")}}}}),l=e(37),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"py-12 lg:py-24 bg-gray-50 dark:bg-gray-800"},[e("div",{staticClass:"d-container-content"},[e("h2",{staticClass:"mb-8 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("ul",{staticClass:"\n        grid\n        gap-4\n        font-semibold\n        text-left text-gray-900\n        dark:text-gray-100\n        sm:grid-cols-2\n        xl:grid-cols-3\n        2xl:gap-8\n      "},t._l(t.features,(function(n,r){return e("li",{key:r,staticClass:"flex"},[e("div",{staticClass:"\n            relative\n            w-full\n            px-6\n            py-8\n            bg-white\n            rounded\n            border border-gray-200\n            dark:border-gray-700\n            dark:bg-gray-900\n          "},[e("InjectComponent",{staticClass:"w-16 h-16 mb-3",class:n.iconClass||"",attrs:{component:n.icon}},[t.isImage(n.icon)?e("NuxtImg",{staticClass:"inline-block w-16 h-16 mb-3",attrs:{src:n.icon,width:"64",height:"64"}}):e("span",{staticClass:"inline-block w-16 h-16 mb-3 text-6xl"},[t._v(t._s(n.icon))])],1),t._v(" "),e("h2",{staticClass:"mb-2 text-xl"},[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"font-normal"},[t._v(t._s(n.description))])],1)])})),0)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{InjectComponent:e(221).default})}}]);