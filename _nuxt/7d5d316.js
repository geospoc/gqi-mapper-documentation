(window.webpackJsonp=window.webpackJsonp||[]).push([[39,12],{229:function(e,t,r){"use strict";r.r(t);var l=r(13),o=Object(l.b)({props:{prose:{type:Boolean,default:!1}}}),n=r(37),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col w-full pt-0 xl:flex-row xl:pt-10"},[r("article",{staticClass:"flex-auto order-last min-w-0 px-4 mt-4 xl:order-first sm:px-6 xl:mt-0",class:e.prose?"prose dark:prose-dark":""},[e._t("default")],2),e._v(" "),e._t("toc")],2)}),[],!1,null,null,null);t.default=component.exports},423:function(e,t,r){"use strict";r.r(t);var l=r(13),o=Object(l.b)({props:{error:{type:Object,required:!0}},head:function(){return{title:this.error.message}}}),n=r(37),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppContainer",[r("AppPage",{staticClass:"min-h-screen-sm",attrs:{prose:""}},[r("h1",[e._v(e._s(e.error.message))]),e._v(" "),404===e.error.statusCode?r("p",[e._v("Go back "),r("NuxtLink",{attrs:{to:"/"}},[e._v("home")]),e._v(".")],1):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppPage:r(229).default,AppContainer:r(228).default})}}]);