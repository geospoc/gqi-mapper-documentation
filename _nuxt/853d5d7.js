(window.webpackJsonp=window.webpackJsonp||[]).push([[10,18,37,52,54],{288:function(t,e,n){"use strict";n.r(e);n(26),n(185),n(18),n(8);var r={h1:["h1","prose-h1"],h2:["h2","prose-h2"],h3:["h3","prose-h3"],h4:["h4","prose-h4"],h5:["h5","prose-h5"],h6:["h6","prose-h6"],hr:["hr","prose-hr"],p:["p","prose-paragraph"],ul:["ul","prose-ul"],ol:["ol","prose-ol"],blockquote:["blockquote","prose-blockquote"],img:["img","prose-img"],a:["a","prose-a"],code:["code","prose-code-inline"]},o=function(t){return t.flatMap((function(t){return r[t]}))},l=o(["p","h1","h2","h3","h4","h5","h6","li"]);function c(t,e){var n,r;return(null==t?void 0:t.tag)===e||(null==t||null===(n=t.componentOptions)||void 0===n?void 0:n.tag)===e||(null==t||null===(r=t.asyncMeta)||void 0===r?void 0:r.tag)===e}function d(t){var e,n;return t.children||(null==t||null===(e=t.componentOptions)||void 0===e?void 0:e.children)||(null==t||null===(n=t.asyncMeta)||void 0===n?void 0:n.children)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];if(Array.isArray(t))return t.flatMap((function(t){return f(t,e)}));e=o(e);var n=t;return e.some((function(e){return c(t,e)}))&&(n=d(t)||t,l.some((function(e){return c(t,e)}))&&(n=[n])),n}var m={name:"Markdown",functional:!0,props:{use:{type:[String,Object,Function,Array],default:"default"},unwrap:{type:String,default:""}},render:function(t,e){var n,r,slot=e.props.use||"default",o="string"==typeof slot?e.parent.$scopedSlots[slot]||e.parent.$slots[slot]||(null===(n=e.parent.$parent)||void 0===n?void 0:n.$scopedSlots[slot])||(null===(r=e.parent.$parent)||void 0===r?void 0:r.$slots[slot]):slot;if("function"==typeof o&&(o=o()),"string"==typeof o)return[o];if(o&&e.props.unwrap){var l=e.props.unwrap.split(/[,\s]/),d=Array.isArray(o)&&o[0];o=e.scopedSlots.between&&d&&!d.text&&!["span","strong","em","a","code"].some((function(t){return c(d,t)}))?o.flatMap((function(t,i){return 0===i?f(t,l):[e.scopedSlots.between(),f(t,l)]})):function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["p"];return(Array.isArray(t)?t:[t]).flatMap((function(t){return f(t,e)})).flatMap((function(t){return f(t,e)})).filter((function(t){return!t.text||!!t.text.trim()}))}(o,l)}return o}},h=n(3),component=Object(h.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);n(49);var r=n(1),o=Object(r.b)({props:{to:{type:String,required:!0},blank:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.a)((function(){return!t.static&&t.to.startsWith("/")&&!1===t.to.startsWith("//")})),n=Object(r.a)((function(){return{rel:e.value?void 0:"noopener nofollow noreferrer",target:t.blank?"_blank":void 0}}));return{isInternal:e,linkAttrs:n}}}),l=n(3),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("NuxtLink",{attrs:{to:t.$contentLocalePath(t.to)}},[t._t("default"),t._v(" "),t._t("nuxt-link")],2):n("a",t._b({attrs:{href:t.to}},"a",t.linkAttrs,!1),[t._t("default"),t._v(" "),t._t("href")],2)}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("751a080c",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(304)},331:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"a.button-link[data-v-1a14bbe7]{background-color:var(--primary-500);border-color:transparent;border-radius:.375rem;border-width:1px;display:inline-flex;align-items:center;flex:none;font-size:.875rem;line-height:1.25rem;line-height:1rem;padding:.375rem .75rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s}a.button-link[data-v-1a14bbe7]:hover{background-color:var(--primary-600)}a.button-link[data-v-1a14bbe7]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(255,255,255,var(--tw-ring-offset-opacity));--tw-ring-offset-width:2px;--tw-ring-color:var(--primary-600)}.dark a.button-link[data-v-1a14bbe7]:focus{--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(24,24,27,var(--tw-ring-offset-opacity))}a.button-link.medium[data-v-1a14bbe7]{font-size:1rem;line-height:1.5rem;line-height:1rem;padding:.5rem 1rem}a.button-link.large[data-v-1a14bbe7]{font-size:1.125rem;line-height:1.5rem;padding:.625rem 1.5rem}",""]),r.locals={},t.exports=r},369:function(t,e,n){"use strict";n.r(e);var r=n(1),o=Object(r.b)({props:{href:{type:String,default:""},blank:{type:Boolean,default:!1},size:{type:String,default:"medium"},bold:{type:Boolean,default:!1}}}),l=(n(330),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Link",{staticClass:"button-link",class:[t.size,t.bold?"font-semibold":"font-medium"],attrs:{to:t.href},scopedSlots:t._u([{key:"href",fn:function(){return[t.blank?n("IconExternalLink",{staticClass:"w-4 h-4 ml-2"}):t._e()]},proxy:!0}])},[n("Markdown",{attrs:{use:t.$slots.default,unwrap:"p ul li"}})],1)}),[],!1,null,"1a14bbe7",null);e.default=component.exports;installComponents(component,{Markdown:n(288).default,IconExternalLink:n(295).default,Link:n(290).default})},463:function(t,e,n){"use strict";n.r(e);var r=n(1),o=Object(r.b)({props:{cta:{type:Array,default:function(){return["Get started","/get-started"]}},secondary:{type:Array,default:function(){return["Open on GitHub","https://github.com"]}},snippet:{type:[String,Boolean],default:function(){return!1}}}}),l=n(3),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-12 lg:py-24 d-container-content"},[n("div",{staticClass:"flex flex-col lg:flex-row my-8 md:my-16"},[n("div",{staticClass:"flex flex-col items-center pr-0 lg:items-start lg:pr-8 lg:w-2/3"},[n("h2",{staticClass:"\n          mb-4\n          text-4xl\n          xs:text-5xl\n          font-semibold\n          sm:leading-none\n          tracking-tighter\n          text-center text-gray-900\n          lg:text-left\n          dark:text-gray-100\n          sm:text-6xl\n          lg:text-7xl\n          sm:mb-8\n        "},[n("Markdown",{attrs:{use:"title",unwrap:"p"}})],1),t._v(" "),n("p",{staticClass:"\n          mb-8\n          text-lg text-center text-gray-700\n          font-medium\n          tracking-tight\n          lg:text-left\n          sm:text-xl\n          xl:text-xl\n          leading-base\n          sm:mb-12\n          dark:text-gray-300\n        "},[n("Markdown",{attrs:{use:"description",unwrap:"p"}})],1),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8"},[n("InjectComponent",{attrs:{component:t.cta}},[n("ButtonLink",{staticClass:"mx-auto md:mx-0",attrs:{size:"large",href:t.cta[1]}},[t._v("\n            "+t._s(t.cta[0])+"\n          ")])],1),t._v(" "),t.secondary?n("InjectComponent",{attrs:{component:t.secondary}},[n("a",{staticClass:"\n              py-px\n              mt-px\n              font-medium\n              text-primary-500\n              border-b-1 border-transparent\n              dark:text-primary-400\n              hover:border-primary-500\n              dark:hover:border-primary-400\n            ",attrs:{href:t.secondary[1]}},[t._v("\n            "+t._s(t.secondary[0])+"\n          ")])]):t._e()],1)]),t._v(" "),t.snippet?n("div",{staticClass:"w-full mx-auto lg:w-1/3 sm:w-580px"},[n("div",{staticClass:"md:pl-2 md:mx"},[n("Terminal",{attrs:{snippet:t.snippet}})],1)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Markdown:n(288).default,ButtonLink:n(369).default,InjectComponent:n(186).default,Terminal:n(443).default})}}]);