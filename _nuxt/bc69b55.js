(window.webpackJsonp=window.webpackJsonp||[]).push([[58,59,60,61],{272:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(34);function r(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),r=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,r)}))}},273:function(t,e,n){"use strict";var r=n(272);n.d(e,"a",(function(){return r.a}))},274:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(12);var r=n(4);function o(){var t=Object(r.j)(),e=Object(r.j)([]),n=Object(r.j)([]),o=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(r.o)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(r.f)((function(){return t.value=new IntersectionObserver(o)})),Object(r.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}},275:function(t,e,n){"use strict";n.r(e);var r=n(38),o=(n(37),n(30),n(4)),c=n(274),l=n(273),d=Object(o.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(c.a)(),e=t.activeHeadings,n=t.visibleHeadings,d=t.updateHeadings;Object(o.h)((function(){return setTimeout((function(){d([].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:e,scrollToHeading:l.a,isActiveParent:function(link){return link.children&&link.children.some((function(t){return e.value.includes(t.id)}))}}}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"font-medium ml-4"},t._l(t.toc,(function(link){return n("li",{key:link.id,on:{click:function(e){return t.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id)||t.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)&&!t.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[t._v("\n      "+t._s(link.text)+"\n    ")]),t._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(link.children,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(e.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(e.id)},attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.scrollToHeading(e.id,"--docs-scroll-margin-block")}}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocTop.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(79).default})},283:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocBottom.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(79).default})},295:function(t,e,n){"use strict";n.r(e);var r=n(4),o=Object(r.b)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  "},[n("div",{staticClass:"\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    "},[n("PageTocTop"),t._v(" "),t.toc.length?n("div",{staticClass:"mb-8"},[n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("PageTocList",{attrs:{toc:t.toc}})],1):t._e(),t._v(" "),n("PageTocBottom")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:n(277).default,PageTocList:n(275).default,PageTocBottom:n(283).default})}}]);