(window.webpackJsonp=window.webpackJsonp||[]).push([[21,88],{287:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("a55d94a0",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n(287)},302:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".highlight-underline[data-v-64312b0a]{transition:left .15s,top .15s,width .15s,height .15s}",""]),o.locals={},t.exports=o},306:function(t,e,n){"use strict";n.r(e);n(128);var o=n(3),r=Object(o.b)({props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},mounted:function(){this.updateHighlightUnderlinePosition()},methods:{updateTabs:function(i){var t=this;this.$emit("update",i),this.$nextTick((function(){return t.updateHighlightUnderlinePosition()}))},updateHighlightUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.top="".concat(t.offsetTop,"px"),e.style.width="".concat(t.clientWidth,"px"),e.style.height="".concat(t.clientHeight,"px")}}}}),l=(n(301),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative text-white rounded-t-lg d-code-group-header-bg"},[n("div",{staticClass:"relative z-0 px-2"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:""+i+label,ref:"tabs",refInFor:!0,staticClass:"\n        relative\n        px-3\n        py-1.5\n        xs:py-3\n        my-1.5\n        xs:my-0\n        text-sm\n        font-mono font-medium\n        tracking-tight\n        focus:outline-none\n      ",class:[t.activeTabIndex===i?"active text-gray-800 dark:text-white":"d-prose-code-filename-text"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"absolute -z-1 highlight-underline h-full xs:py-1.5"},[n("span",{staticClass:"flex w-full h-full d-code-group-tab rounded-md"})])],2),t._v(" "),t._t("footer")],2)}),[],!1,null,"64312b0a",null);e.default=component.exports},341:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("50ebf191",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n(341)},404:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".code-group[data-v-76f380c0] pre{border-top-left-radius:0!important;border-top-right-radius:0!important}.code-group[data-v-76f380c0]{margin-top:1rem;margin-bottom:1rem}.code-group[data-v-76f380c0] >.code-block:not(.active),.code-group[data-v-76f380c0] >.docus-highlight:not(.active){display:none}.code-group[data-v-76f380c0]  .docus-highlight{margin-top:0}.code-group[data-v-76f380c0]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}.first-tab[data-v-76f380c0]  .code-block:nth-child(2),.first-tab[data-v-76f380c0]  .docus-highlight:nth-child(2){display:block}",""]),o.locals={},t.exports=o},423:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(184),n(15),n(12),n(129),n(37),n(30),n(3)),l={h1:["h1","prose-h1"],h2:["h2","prose-h2"],h3:["h3","prose-h3"],h4:["h4","prose-h4"],h5:["h5","prose-h5"],h6:["h6","prose-h6"],hr:["hr","prose-hr"],p:["p","prose-paragraph"],ul:["ul","prose-ul"],ol:["ol","prose-ol"],blockquote:["blockquote","prose-blockquote"],img:["img","prose-img"],a:["a","prose-a"],code:["code","prose-code-inline"]},c=function(t){return t.flatMap((function(t){return l[t]}))};c(["p","h1","h2","h3","h4","h5","h6","li"]);function d(t,e){var n,o;return(null==t?void 0:t.tag)===e||(null==t||null===(n=t.componentOptions)||void 0===n?void 0:n.tag)===e||(null==t||null===(o=t.asyncMeta)||void 0===o?void 0:o.tag)===e}var h=Object(r.b)({data:function(){return{activeTabIndex:0,counter:0}},computed:{tabs:function(){return this.calculateTabs()}},watch:{activeTabIndex:function(t,e){var n=this.$el.querySelectorAll(".code-group > .code-block, .code-group > .prose .docus-highlight, .code-group > .docus-highlight");e<n.length&&n[e].classList.remove("active"),n[t].classList.add("active")}},updated:function(){var t=this,e=this.calculateTabs();JSON.stringify(e)!==JSON.stringify(this.tabs)&&this.$nextTick((function(){t.updateActiveTab(),t.$refs["tabs-header"].updateHighlightUnderlinePosition()}))},created:function(){this.updateActiveTab()},methods:{updateActiveTab:function(){var t=this.tabs.findIndex((function(t){return t.active}));this.activeTabIndex=t<0?0:t},calculateTabs:function(){return this.$slots.default.flatMap((function(slot){var t,e,n;return null!==(t=slot.data)&&void 0!==t&&null!==(e=t.attrs)&&void 0!==e&&null!==(n=e.class)&&void 0!==n&&n.includes("prose")?slot.children:slot})).filter((function(slot){var t,e,n;return(null===(t=slot.data)||void 0===t||null===(e=t.attrs)||void 0===e||null===(n=e.class)||void 0===n?void 0:n.includes("docus-highligh"))||d(slot,"code-block")||d(slot,"prose-code")})).map((function(slot){var t,e,n,r,l,c,d,h=(null===(t=slot.asyncMeta)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.attrs)||(null===(n=slot.componentOptions)||void 0===n?void 0:n.propsData)||{},f=slot.children||(null===(r=slot.componentOptions)||void 0===r?void 0:r.children)||(null===(l=slot.asyncMeta)||void 0===l?void 0:l.children)||[],v=Object(o.a)(f,1)[0];return{label:h.label||(null==v||null===(c=v.children)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.text)||"untitled",active:void 0!==h.active}}))}}}),f=(n(403),n(2)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group",class:[0==t.activeTabIndex&&"first-tab"]},[n("TabsHeader",{ref:"tabs-header",attrs:{"active-tab-index":t.activeTabIndex,tabs:t.tabs},on:{update:function(e){t.activeTabIndex=e}}}),t._v(" "),t._t("default")],2)}),[],!1,null,"76f380c0",null);e.default=component.exports;installComponents(component,{TabsHeader:n(306).default})}}]);