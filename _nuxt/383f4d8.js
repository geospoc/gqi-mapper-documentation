(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14,29,69],{272:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(34);function o(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var r=t.replace(/\./g,"\\."),o=document.querySelector("#".concat(r)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var r=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),r}(e);window.scrollTo(0,o)}))}},273:function(t,e,r){"use strict";var o=r(272);r.d(e,"a",(function(){return o.a}))},274:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(12);var o=r(4);function n(){var t=Object(o.j)(),e=Object(o.j)([]),r=Object(o.j)([]),n=function(t){return t.forEach((function(t){var r=t.target.id;t.isIntersecting?e.value.push(r):e.value=e.value.filter((function(t){return t!==r}))}))};return Object(o.o)(e,(function(t,e){0===t.length?r.value=e:r.value=t})),Object(o.f)((function(){return t.value=new IntersectionObserver(n)})),Object(o.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:r,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},276:function(t,e,r){"use strict";r.r(e);var o=r(2),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("3c1908e6",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";r(278)},285:function(t,e,r){var o=r(64)((function(i){return i[1]}));o.push([t.i,'code[data-v-314bfd02]{background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;font-weight:400;font-size:.875rem;line-height:1.25rem;padding:3px 6px;white-space:nowrap}.dark code[data-v-314bfd02],code[data-v-314bfd02]{--tw-bg-opacity:1}.dark code[data-v-314bfd02]{background-color:rgba(39,39,42,var(--tw-bg-opacity))}a code[data-v-314bfd02]{border:1px dashed transparent}tbody code[data-v-314bfd02]{font-size:12px;line-height:1}h1 a:hover code[data-v-314bfd02],h2 a:hover code[data-v-314bfd02],h3 a:hover code[data-v-314bfd02],h4 a:hover code[data-v-314bfd02]{--tw-border-opacity:1;border-color:rgba(113,113,122,var(--tw-border-opacity))}.dark h1 a:hover code[data-v-314bfd02],.dark h2 a:hover code[data-v-314bfd02],.dark h3 a:hover code[data-v-314bfd02],.dark h4 a:hover code[data-v-314bfd02]{--tw-border-opacity:1;border-color:rgba(228,228,231,var(--tw-border-opacity))}h1 a code[data-v-314bfd02],h2 a code[data-v-314bfd02],h3 a code[data-v-314bfd02],h4 a code[data-v-314bfd02]{font-size:inherit;position:relative}h1 a code[data-v-314bfd02]:before,h2 a code[data-v-314bfd02]:before,h3 a code[data-v-314bfd02]:before,h4 a code[data-v-314bfd02]:before{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity));border-radius:.375rem;pointer-events:none;position:absolute;top:-2px;left:-2px;z-index:-1;content:"";width:calc(100% + 4px);height:calc(100% + 4px)}.dark h1 a code[data-v-314bfd02]:before,.dark h2 a code[data-v-314bfd02]:before,.dark h3 a code[data-v-314bfd02]:before,.dark h4 a code[data-v-314bfd02]:before{--tw-bg-opacity:1;background-color:rgba(39,39,42,var(--tw-bg-opacity))}',""]),o.locals={},t.exports=o},299:function(t,e,r){"use strict";r.r(e);r(284);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("code",[t._t("default")],2)}),[],!1,null,"314bfd02",null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);r(14),r(13),r(12),r(20),r(21);var o=r(6),n=r(38),c=r(4),l=r(274),d=r(272);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(t){var e=Object(c.i)({activeLink:"",exactActiveLink:"",showMobileToc:!1}),r=Object(l.a)(),o=r.activeHeadings,f=r.updateHeadings;Object(c.h)((function(){return f([].concat(Object(n.a)(document.querySelectorAll(".docus-content h1")),Object(n.a)(document.querySelectorAll(".docus-content h2")),Object(n.a)(document.querySelectorAll(".docus-content h3"))))}));var h=Object(c.a)((function(){var e=Object(n.a)(t.toc);return e.shift(),e}));return v(v({},Object(c.l)(e)),{},{activeHeadings:o,scrollToHeading:d.a,filteredToc:h})}}),m=r(2),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.toc.length?r("div",{staticClass:"\n    sticky\n    z-10\n    px-4\n    text-sm\n    border-b border-gray-100 border-dashed\n    top-header\n    dark:border-gray-800\n    d-blur-header d-page-mobile-toc-bg\n  "},[r("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[r("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),r("IconChevronRight",{staticClass:"w-4 h-4 text-gray-400 transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),r("ul",{staticClass:"pb-4 overflow-x-hidden font-medium",class:[t.showMobileToc?"flex flex-col":"hidden"]},t._l(t.filteredToc,(function(link){return r("li",{key:link.id,on:{click:function(e){t.showMobileToc=!1}}},[r("a",{staticClass:"block py-1 transition-colors duration-100 transform scrollactive-item",class:{"text-gray-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400":t.activeHeadings.includes(link.id),"text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400":!t.activeHeadings.includes(link.id)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--blogpost-scroll-margin-block")}}},[t._v(t._s(link.text))])])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:r(276).default})},433:function(t,e,r){"use strict";r.r(e);var o=r(38),n=(r(34),r(35),r(4)),c=r(273),l=Object(n.b)({props:{page:{type:Object,required:!0}},setup:function(){Object(n.h)((function(){if(window.location.hash){var t=window.location.hash.replace("#","");setTimeout((function(){Object(c.a)(t,"--blogpost-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.href.split("#").pop();Object(c.a)(e,"--blogpost-scroll-margin-block")}))}))}),300)}));return{today:(new Date).toISOString().split("T")[0],formatDateByLocale:function(t,e){var r=t||"en";return new Date(e).toLocaleDateString(r,{year:"numeric",month:"long",day:"numeric"})}}},computed:{imgUrl:function(){return this.page.imgUrl||"https://source.unsplash.com/random"}},templateOptions:{aside:!1,fluid:!0}}),d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"py-16 sm:py-24 relative"},[r("div",{staticClass:"relative max-w-2xl mx-auto"},[r("NuxtLink",{staticClass:"absolute top-0 left-0 px-4 -mt-12 sm:-mt-16",attrs:{to:t.$contentLocalePath("/blog")}},[r("span",{staticClass:"\n            text-sm\n            sm:text-base\n            leading-none\n            text-gray-900\n            dark:text-gray-100\n            hover:text-gray-500 hover:dark:text-gray-400\n            font-medium\n          "},[t._v("← Back")])]),t._v(" "),r("div",{staticClass:"mb-6 px-4"},[r("h1",{staticClass:"flex-1 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"},[t._v("\n          "+t._s(t.page.title)+"\n        ")]),t._v(" "),r("p",{staticClass:"my-4 text-base font-medium d-secondary-text"},[t._v("\n          "+t._s(t.page.description)+"\n        ")]),t._v(" "),r("div",{staticClass:"flex sm:flex-row items-center"},[t.page.date?r("time",{staticClass:"font-medium mr-2 text-sm d-tertiary-text",attrs:{datetime:t.page.date}},[t._v("\n            "+t._s(t.formatDateByLocale(t.$i18n.locale,t.page.date))+"\n          ")]):r("div",{staticClass:"font-medium mr-2 text-sm text-yellow-600 dark:text-yellow-500"},[t._v("\n            ⚠️ Please add\n            "),r("ProseCodeInline",[t._v("date: "+t._s(t.today))]),t._v("\n            in the page front-matter`\n          ")],1),t._v(" "),t.page.authors&&t.page.authors.length?r("div",{staticClass:"text-sm text-gray-400 dark:text-gray-700"},[t._v("|")]):t._e(),t._v(" "),r("div",{staticClass:"flex ml-4 sm:ml-2"},t._l(t.page.authors,(function(e,o){return r("a",{key:o,staticClass:"flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2",attrs:{href:e.link,target:"_blank",rel:"noopener noindex nofollow"}},[r("NuxtImg",{staticClass:"rounded-full border border-gray-300 dark:border-gray-700 inline-block h-8 w-8 sm:mr-1",attrs:{height:"32",width:"32",src:e.avatarUrl,alt:e.name,title:e.name}}),t._v(" "),r("span",{staticClass:"hidden sm:inline-block font-medium text-sm text-gray-800 dark:text-gray-300"},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])])],1),t._v(" "),r("div",{staticClass:"max-w-4xl mx-auto"},[r("div",{staticClass:"aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 mb-8"},[r("NuxtImg",{attrs:{src:t.imgUrl,alt:t.page.title}})],1)]),t._v(" "),r("div",{staticClass:"max-w-2xl mx-auto"},[r("BlogpostToc",{staticClass:"mb-8",attrs:{toc:t.page.toc.links,title:t.page.toc.title}}),t._v(" "),r("DocusContent",{staticClass:"px-4 docus-content",attrs:{document:t.page}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProseCodeInline:r(299).default,BlogpostToc:r(338).default})}}]);