(window.webpackJsonp=window.webpackJsonp||[]).push([[38,4,11,12,19,26,27,29,30,31],{236:function(t,e,n){"use strict";var r=n(6),o=n(81)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(80)(l)},237:function(t,e,n){"use strict";n.r(e),e.default={render:function(t){return t(!1)}}},238:function(t,e,n){"use strict";n.r(e),e.default={render:function(t){return t(!1)}}},239:function(t,e,n){"use strict";n.r(e);n(30),n(236);var r={props:{toc:{type:Array,default:function(){return[]}}},data:function(){return{activeLink:"",exactActiveLink:"",sections:[]}},computed:{settings:function(){return this.$docus.settings}},beforeMount:function(){history.scrollRestoration="manual"},mounted:function(){var t=this;document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]").forEach((function(section){t.sections.push({level:section.tagName.replace(/h/i,""),id:section.getAttribute("id"),top:section.offsetTop})}));var e=window.location.hash.replace("#",""),n=this.sections.findIndex((function(section){return section.id===e}));if(e&&n>=0){var r=document.querySelector(location.hash).offsetTop-110;this.$nextTick().then((function(){scrollTo(0,r),t.setActive(n)}))}else this.onScroll();window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,!0)},methods:{onScroll:function(){var t=window.pageYOffset,e=window.innerHeight;if(0===t)this.setActive(0);else{if(t+e>=document.body.scrollHeight)return this.setActive(this.sections.length-1);for(var n=t+e/2,r=0,i=0;i<this.sections.length;i++)this.sections[i].top<=n&&(r=i);this.setActive(r)}},setActive:function(t){if(this.sections[t]&&(this.exactActiveLink=this.sections[t].id,this.activeLink=this.sections[t].id,"3"===this.sections[t].level)){for(var e=-1,i=0;i<t;i++)"2"===this.sections[i].level&&(e=i);e>=0&&(this.activeLink=this.sections[e].id)}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block"},[n("TocTop"),t._v(" "),n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"},[n("h5",{staticClass:"mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-gray-100 lg:text-xs"},[t._v(t._s(t.$t("toc.title")))]),t._v(" "),n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(t.toc,(function(link){return n("li",{key:link.id,staticClass:"hover:text-gray-900 dark:hover:text-gray-100",class:{"text-primary-500 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400":t.exactActiveLink===link.id||t.activeLink===link.id}},[n("a",{staticClass:"block py-2 transition-colors duration-100 transform scrollactive-item",class:{"ml-2":3===link.depth,"ml-3":4===link.depth,"ml-4":5===link.depth,"ml-5":6===link.depth},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0),t._v(" "),n("TocBottom")],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TocTop:n(237).default,TocBottom:n(238).default})},240:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);n(11),n(30);var r={props:{document:{type:Object,required:!0}},computed:{settings:function(){return this.$docus.settings},link:function(){if(this.settings.github)return[this.$docus.repoUrl,"edit",this.settings.github.branch,this.settings.github.dir,this.$config.contentDir,"".concat(this.document.path).concat(this.document.extension).replace(/^\//g,"")].filter(Boolean).join("/")}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("div",{staticClass:"flex flex-col justify-between mt-10 mb-4 sm:flex-row"},[n("a",{staticClass:"flex items-center font-medium hover:underline",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("article.github"))+"\n    "),n("IconExternalLink",{staticClass:"w-4 h-4 ml-1"})],1),t._v(" "),n("span",{staticClass:"flex items-center mt-4 text-sm font-medium text-gray-500 dark:text-gray-300 sm:mt-0"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconExternalLink:n(240).default})},251:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"flex justify-between space-x-3 font-medium leading-7"},[t.prev?n("NuxtLink",{staticClass:"flex items-center justify-start truncate text-primary-500 dark:text-primary-400 hover:underline",attrs:{to:t.$contentLocalePath(t.prev.to)}},[n("IconArrowLeft",{staticClass:"flex-shrink-0 w-4 h-4 mr-1"}),t._v(" "),n("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"flex items-center justify-end truncate text-primary-500 dark:text-primary-400 hover:underline",attrs:{to:t.$contentLocalePath(t.next.to)}},[n("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),n("IconArrowRight",{staticClass:"flex-shrink-0 w-4 h-4 ml-1"})],1):n("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(241).default,IconArrowRight:n(242).default})},254:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"inline-flex items-center px-3 py-1 text-base leading-5 tracking-tight rounded-full bg-primary-100 dark:bg-primary-800 text-primary-500 dark:text-primary-400"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);n(32),n(10),n(17),n(12),n(31),n(22),n(23);var r=n(4),o=n(2),l=(n(16),n(0)),c=n(283);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={name:"PageSlug",layout:function(t){return t.$docus.settings.layout},middleware:function(t){var e=t.app,n=t.params,r=t.redirect;"index"===n.pathMatch&&r(e.localePath("/"))},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,f,m,h,v,x,y,_,w,k,C,$;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,l=t.$docus,c=t.app,d=t.params,f=t.error,m=c.i18n.locale,h="/".concat(d.pathMatch||""),v=!(null===(n=l.ui)||void 0===n||!n.draft)&&void 0,e.next=6,o({deep:!0}).where({language:m,to:h,draft:v}).fetch();case 6:if(x=e.sent,y=Object(r.a)(x,1),_=y[0]){e.next=11;break}return e.abrupt("return",f({statusCode:404,message:"Page not found"}));case 11:return e.next=13,o({deep:!0}).where({language:m,draft:v}).only(["title","slug","to"]).sortBy("position","asc").surround(_.slug,{before:1,after:1}).fetch();case 13:return w=e.sent,k=Object(r.a)(w,2),C=k[0],$=k[1],e.abrupt("return",{document:_,prev:C,next:$});case 18:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"description",name:"description",content:this.document.description},{hid:"og:title",property:"og:title",content:this.document.title},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:title",name:"twitter:title",content:this.document.title},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]}},computed:{settings:function(){return this.$docus.settings}},mounted:function(){this.document.version&&localStorage.setItem("document-".concat(this.document.slug,"-version"),this.document.version),setTimeout((function(){var t,e=d(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var n=t.value,component=(new(l.a.extend(c.default))).$mount();n.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)}},h=n(3),v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex w-full pt-10 pb-24 lg:pb-16"},[n("article",{staticClass:"flex-auto min-w-0 px-4 sm:px-6 xl:px-8"},[n("div",{staticClass:"mb-10",class:{"border-b border-gray-200 dark:border-gray-800 pb-10":t.document.description}},[n("h1",{staticClass:"flex items-center justify-between text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"},[n("span",{staticClass:"flex-1"},[t._v(t._s(t.document.title))]),t._v(" "),t.document.draft?n("span",{staticClass:"inline-block px-3 py-1 mr-2 text-base font-medium leading-5 tracking-tight text-yellow-500 bg-yellow-100 rounded-full items-flex dark:bg-yellow-800 dark:text-yellow-400"},[t._v("Draft")]):t._e(),t._v(" "),t.document.badge?n("Badge",{staticClass:"font-medium"},[t._v(t._s(t.document.badge))]):t._e()],1),t._v(" "),t.document.description?n("p",{staticClass:"mt-2 text-lg text-gray-500 dark:text-gray-300"},[t._v(t._s(t.document.description))]):t._e()]),t._v(" "),n("div",{staticClass:"max-w-none"},[n("NuxtContent",{attrs:{document:t.document}})],1),t._v(" "),n("PageBottom",{attrs:{document:t.document}}),t._v(" "),n("hr",{staticClass:"mt-10 mb-4 border-gray-200 dark:border-gray-800"}),t._v(" "),n("PagePrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),t.document.fullscreen?t._e():n("Toc",{attrs:{toc:t.document.toc}})],1)}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{Badge:n(254).default,PageBottom:n(250).default,PagePrevNext:n(251).default,Toc:n(239).default})}}]);