(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{293:function(t,e,r){"use strict";r.r(e);var o=r(4),l=Object(o.b)({props:{post:{type:Object,required:!0}},setup:function(){return{formatDateByLocale:function(t,e){var r=t||"en";return new Date(e).toLocaleDateString(r,{year:"numeric",month:"long",day:"numeric"})}}}}),n=r(2),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mb-16 flex flex-col items-end"},[r("div",{staticClass:"flex flex-col mb-4 w-full"},[r("div",{staticClass:"px-4 sm:px-0 flex items-center sm:items-end justify-between mb-4"},[r("time",{staticClass:"font-medium mr-2 text-sm text-gray-400 dark:text-gray-500",attrs:{datetime:t.post.date}},[t._v("\n        "+t._s(t.formatDateByLocale(t.$i18n.locale,t.post.date))+"\n      ")]),t._v(" "),r("div",{staticClass:"flex"},t._l(t.post.authors,(function(t,e){return r("a",{key:e,staticClass:"flex items-center justify-end -ml-2 rounded-full border border-gray-300 dark:border-gray-700",attrs:{href:t.link,target:"_blank",rel:"noopener noindex nofollow"}},[r("NuxtImg",{staticClass:"inline-block h-8 w-8 rounded-full",attrs:{height:"32",width:"32",src:t.avatarUrl,alt:""}})],1)})),0)]),t._v(" "),r("NuxtLink",{staticClass:"w-full hover:opacity-75 transition-opacity duration-100",attrs:{to:t.$contentLocalePath(t.post.to)}},[r("div",{staticClass:"aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800"},[r("NuxtImg",{attrs:{src:t.post.imgUrl,width:"864",height:"378",alt:""}})],1)])],1),t._v(" "),r("div",{staticClass:"flex flex-col w-full"},[r("div",{staticClass:"px-4 sm:px-0"},[r("NuxtLink",{staticClass:"hover:text-gray-500 hover:dark:text-gray-400 transition-color duration-100",attrs:{to:t.$contentLocalePath(t.post.to)}},[r("h1",{staticClass:"text-2xl font-semibold mb-2"},[t._v(t._s(t.post.title))])]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 mb-4"},[t._v(t._s(t.post.description))]),t._v(" "),r("NuxtLink",{staticClass:"font-medium hover:text-gray-500 hover:dark:text-gray-400 transition-color duration-100",attrs:{to:t.$contentLocalePath(t.post.to)}},[r("span",[t._v("Read More →")])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);