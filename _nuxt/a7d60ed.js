(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{291:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("425da23e",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n(291)},351:function(t,e,n){var o=n(78)((function(i){return i[1]}));o.push([t.i,"button[data-v-540f96d0]{outline:none}.code-group[data-v-540f96d0]{margin-top:1rem;margin-bottom:1rem}.code-group .code-block[data-v-540f96d0]:not(.active),.code-group .docus-highlight[data-v-540f96d0]:not(.active){display:none}.code-group[data-v-540f96d0] .docus-highlight{margin-top:0;margin-bottom:0}.first-tab>.code-block[data-v-540f96d0]:nth-child(2),.first-tab>.docus-highlight[data-v-540f96d0]:nth-child(2){display:block}.highlight-underline[data-v-540f96d0]{bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-540f96d0]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}.code-group[data-v-540f96d0] >.prose>.docus-highlight .filename{display:none}.code-group[data-v-540f96d0] >.prose>.docus-highlight .filename+pre[class*=language-]{padding-top:.75rem}.docus-highlight[data-v-540f96d0]{margin:0}",""]),o.locals={},t.exports=o},410:function(t,e,n){"use strict";n.r(e);var o=n(5),d=(n(155),n(18),n(8),n(156),n(34),n(30),n(13)),r=n(119),c=Object(d.b)({data:function(){return{activeTabIndex:0,counter:0}},computed:{tabs:function(){return this.counter,this.calculateTabs()}},watch:{activeTabIndex:function(t,e){var n=this.$el.querySelectorAll(".code-group > .code-block, .code-group > .prose .docus-highlight, .code-group > .docus-highlight");e<n.length&&n[e].classList.remove("active"),n[t].classList.add("active")}},updated:function(){var t=this,e=this.calculateTabs();JSON.stringify(e)!==JSON.stringify(this.tabs)&&(this.counter+=1,this.$nextTick((function(){t.updateActiveTab(),t.updateHighlighteUnderlinePosition()})))},created:function(){this.updateActiveTab()},mounted:function(){this.updateHighlighteUnderlinePosition()},methods:{updateActiveTab:function(){var t=this.tabs.findIndex((function(t){return t.active}));this.activeTabIndex=t<0?0:t},updateTabs:function(i){this.activeTabIndex=i,this.updateHighlighteUnderlinePosition()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}},calculateTabs:function(){return this.$slots.default.flatMap((function(slot){var t,e,n;return null!==(t=slot.data)&&void 0!==t&&null!==(e=t.attrs)&&void 0!==e&&null!==(n=e.class)&&void 0!==n&&n.includes("prose")?slot.children:slot})).filter((function(slot){var t,e,n;return(null===(t=slot.data)||void 0===t||null===(e=t.attrs)||void 0===e||null===(n=e.class)||void 0===n?void 0:n.includes("docus-highligh"))||Object(r.c)(slot,"code-block")||Object(r.c)(slot,"prose-code")})).map((function(slot){var t,e,n,d,r,c=(null===(t=slot.asyncMeta)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.attrs)||(null===(n=slot.componentOptions)||void 0===n?void 0:n.propsData)||{},l=slot.children||(null===(d=slot.componentOptions)||void 0===d?void 0:d.children)||(null===(r=slot.asyncMeta)||void 0===r?void 0:r.children)||[],h=Object(o.a)(l,1)[0];return{label:c.label||(null==h?void 0:h.children[0].text)||"untitled",active:void 0!==c.active}}))}}}),l=(n(350),n(37)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group",class:[0==t.activeTabIndex&&"first-tab"]},[n("div",{staticClass:"\n      relative\n      px-2\n      text-sm text-white\n      bg-gray-100\n      border-b-2 border-gray-200\n      rounded-t-md\n      h-12\n      dark:bg-gray-800\n      dark:border-gray-700\n    "},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:""+t.counter+label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 font-mono font-bold h-12",class:[t.activeTabIndex===i?"active text-gray-800 dark:text-white":"text-gray-600 dark:text-gray-300"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"absolute highlight-underline bg-primary-500 dark:bg-primary-400"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"540f96d0",null);e.default=component.exports}}]);