(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{248:function(t,r,o){var content=o(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("29f9adfb",content,!0,{sourceMap:!1})},270:function(t,r,o){"use strict";o(248)},271:function(t,r,o){var c=o(45)(!1);c.push([t.i,".list-primary{color:var(--primary-500)}.dark .list-primary{color:var(--primary-400)}.list-info{--tw-text-opacity:1;color:rgba(14,165,233,var(--tw-text-opacity))}.dark .list-info{--tw-text-opacity:1;color:rgba(56,189,248,var(--tw-text-opacity))}.list-success{--tw-text-opacity:1;color:rgba(16,185,129,var(--tw-text-opacity))}.dark .list-success{--tw-text-opacity:1;color:rgba(52,211,153,var(--tw-text-opacity))}.list-warning{--tw-text-opacity:1;color:rgba(245,158,11,var(--tw-text-opacity))}.dark .list-warning{--tw-text-opacity:1;color:rgba(251,191,36,var(--tw-text-opacity))}.list-danger{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .list-danger{--tw-text-opacity:1;color:rgba(248,113,113,var(--tw-text-opacity))}",""]),t.exports=c},295:function(t,r,o){"use strict";o.r(r);o(42);var c={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},e=(o(270),o(3)),component=Object(e.a)(c,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",t._l(t.items,(function(r,i){return o("div",{key:i,staticClass:"mt-3 flex"},[o("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[o(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(r)+"\n  ")])})),0)}),[],!1,null,null,null);r.default=component.exports}}]);