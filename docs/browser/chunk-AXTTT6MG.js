import{c as hg,d as Cg,e as Ag}from"./chunk-45J4GCXB.js";import{a as mg}from"./chunk-MJZYF3LX.js";import{$a as eg,Aa as Jm,Ab as ug,Ca as Ss,Fb as gg,Ga as Zm,Hb as _i,Ib as pg,Jb as fg,Ka as Ci,Kb as vi,Lb as kg,Na as Xm,Oa as tg,Qb as bg,Sb as wg,Wa as uo,Xa as he,Ya as De,Z as bi,Za as Is,_ as wi,_a as Ai,bb as ng,cb as og,db as ig,eb as rg,f as Ym,fb as Xe,hb as sg,ib as ag,jb as cg,lb as lg,mb as dg,w as Qm,z as $m}from"./chunk-3UAMMXGE.js";import{a as qm,b as Wm,d as c0,e as l0,g as At}from"./chunk-2WH2EVR6.js";var _g=c0((Nt,Ns)=>{"use strict";(function(D){let _=D.en=D.en||{};_.dictionary=Object.assign(_.dictionary||{},{"%0 of %1":"%0 of %1","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bulleted List":"Bulleted List",Cancel:"Cancel","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Decrease indent":"Decrease indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey","Document colors":"Document colors",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Horizontal line":"Horizontal line",Huge:"Huge","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Show more items":"Show more items","Side image":"Side image",Small:"Small","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(D,_){typeof Nt=="object"&&typeof Ns=="object"?Ns.exports=_():typeof define=="function"&&define.amd?define([],_):typeof Nt=="object"?Nt.ClassicEditor=_():D.ClassicEditor=_()}(window,function(){return function(D){var _={};function g(A){if(_[A])return _[A].exports;var y=_[A]={i:A,l:!1,exports:{}};return D[A].call(y.exports,y,y.exports,g),y.l=!0,y.exports}return g.m=D,g.c=_,g.d=function(A,y,v){g.o(A,y)||Object.defineProperty(A,y,{enumerable:!0,get:v})},g.r=function(A){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},g.t=function(A,y){if(1&y&&(A=g(A)),8&y||4&y&&typeof A=="object"&&A&&A.__esModule)return A;var v=Object.create(null);if(g.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:A}),2&y&&typeof A!="string")for(var w in A)g.d(v,w,function(P){return A[P]}.bind(null,w));return v},g.n=function(A){var y=A&&A.__esModule?function(){return A.default}:function(){return A};return g.d(y,"a",y),y},g.o=function(A,y){return Object.prototype.hasOwnProperty.call(A,y)},g.p="",g(g.s=68)}([function(D,_,g){"use strict";g.d(_,"a",function(){return A}),g.d(_,"b",function(){return y});class A extends Error{constructor(b,R,it){super(`${b}${it?` ${JSON.stringify(it)}`:""}${v(b)}`),this.name="CKEditorError",this.context=R,this.data=it}is(b){return b==="CKEditorError"}static rethrowUnexpectedError(b,R){if(b.is&&b.is("CKEditorError"))throw b;let it=new A(b.message,R);throw it.stack=b.stack,it}}function y(P,b){console.warn(...w(P,b))}function v(P){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-${P}`}function w(P,b){let R=v(P);return b?[P,b,R]:[P,R]}},function(D,_,g){"use strict";var A,y=function(){return A===void 0&&(A=!!(window&&document&&document.all&&!window.atob)),A},v=function(){var F={};return function(U){if(F[U]===void 0){var B=document.querySelector(U);if(window.HTMLIFrameElement&&B instanceof window.HTMLIFrameElement)try{B=B.contentDocument.head}catch{B=null}F[U]=B}return F[U]}}(),w=[];function P(F){for(var U=-1,B=0;B<w.length;B++)if(w[B].identifier===F){U=B;break}return U}function b(F,U){for(var B={},W=[],Q=0;Q<F.length;Q++){var ht=F[Q],mt=U.base?ht[0]+U.base:ht[0],Ee=B[mt]||0,Ht="".concat(mt," ").concat(Ee);B[mt]=Ee+1;var Pn=P(Ht),mo={css:ht[1],media:ht[2],sourceMap:ht[3]};Pn!==-1?(w[Pn].references++,w[Pn].updater(mo)):w.push({identifier:Ht,updater:ho(mo,U),references:1}),W.push(Ht)}return W}function R(F){var U=document.createElement("style"),B=F.attributes||{};if(B.nonce===void 0){var W=g.nc;W&&(B.nonce=W)}if(Object.keys(B).forEach(function(ht){U.setAttribute(ht,B[ht])}),typeof F.insert=="function")F.insert(U);else{var Q=v(F.insert||"head");if(!Q)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Q.appendChild(U)}return U}var it,V=(it=[],function(F,U){return it[F]=U,it.filter(Boolean).join(`
`)});function bt(F,U,B,W){var Q=B?"":W.media?"@media ".concat(W.media," {").concat(W.css,"}"):W.css;if(F.styleSheet)F.styleSheet.cssText=V(U,Q);else{var ht=document.createTextNode(Q),mt=F.childNodes;mt[U]&&F.removeChild(mt[U]),mt.length?F.insertBefore(ht,mt[U]):F.appendChild(ht)}}function ie(F,U,B){var W=B.css,Q=B.media,ht=B.sourceMap;if(Q?F.setAttribute("media",Q):F.removeAttribute("media"),ht&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ht))))," */")),F.styleSheet)F.styleSheet.cssText=W;else{for(;F.firstChild;)F.removeChild(F.firstChild);F.appendChild(document.createTextNode(W))}}var me=null,Oe=0;function ho(F,U){var B,W,Q;if(U.singleton){var ht=Oe++;B=me||(me=R(U)),W=bt.bind(null,B,ht,!1),Q=bt.bind(null,B,ht,!0)}else B=R(U),W=ie.bind(null,B,U),Q=function(){(function(mt){if(mt.parentNode===null)return!1;mt.parentNode.removeChild(mt)})(B)};return W(F),function(mt){if(mt){if(mt.css===F.css&&mt.media===F.media&&mt.sourceMap===F.sourceMap)return;W(F=mt)}else Q()}}D.exports=function(F,U){(U=U||{}).singleton||typeof U.singleton=="boolean"||(U.singleton=y());var B=b(F=F||[],U);return function(W){if(W=W||[],Object.prototype.toString.call(W)==="[object Array]"){for(var Q=0;Q<B.length;Q++){var ht=P(B[Q]);w[ht].references--}for(var mt=b(W,U),Ee=0;Ee<B.length;Ee++){var Ht=P(B[Ee]);w[Ht].references===0&&(w[Ht].updater(),w.splice(Ht,1))}B=mt}}}},function(D,_,g){"use strict";function A(v,w){return function(P){if(Array.isArray(P))return P}(v)||function(P,b){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(P)))){var R=[],it=!0,V=!1,bt=void 0;try{for(var ie,me=P[Symbol.iterator]();!(it=(ie=me.next()).done)&&(R.push(ie.value),!b||R.length!==b);it=!0);}catch(Oe){V=!0,bt=Oe}finally{try{it||me.return==null||me.return()}finally{if(V)throw bt}}return R}}(v,w)||function(P,b){if(P){if(typeof P=="string")return y(P,b);var R=Object.prototype.toString.call(P).slice(8,-1);if(R==="Object"&&P.constructor&&(R=P.constructor.name),R==="Map"||R==="Set")return Array.from(P);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return y(P,b)}}(v,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function y(v,w){(w==null||w>v.length)&&(w=v.length);for(var P=0,b=new Array(w);P<w;P++)b[P]=v[P];return b}D.exports=function(v){var w=A(v,4),P=w[1],b=w[3];if(typeof btoa=="function"){var R=btoa(unescape(encodeURIComponent(JSON.stringify(b)))),it="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(R),V="/*# ".concat(it," */"),bt=b.sources.map(function(ie){return"/*# sourceURL=".concat(b.sourceRoot||"").concat(ie," */")});return[P].concat(bt).concat([V]).join(`
`)}return[P].join(`
`)}},function(D,_,g){"use strict";D.exports=function(A){var y=[];return y.toString=function(){return this.map(function(v){var w=A(v);return v[2]?"@media ".concat(v[2]," {").concat(w,"}"):w}).join("")},y.i=function(v,w,P){typeof v=="string"&&(v=[[null,v,""]]);var b={};if(P)for(var R=0;R<this.length;R++){var it=this[R][0];it!=null&&(b[it]=!0)}for(var V=0;V<v.length;V++){var bt=[].concat(v[V]);P&&b[bt[0]]||(w&&(bt[2]?bt[2]="".concat(w," and ").concat(bt[2]):bt[2]=w),y.push(bt))}},y}},,function(D,_,g){"use strict";var A=g(9),y=typeof self=="object"&&self&&self.Object===Object&&self,v=A.a||y||Function("return this")();_.a=v},function(D,_,g){"use strict";(function(A){var y=g(5),v=g(67),w=typeof Nt=="object"&&Nt&&!Nt.nodeType&&Nt,P=w&&typeof A=="object"&&A&&!A.nodeType&&A,b=P&&P.exports===w?y.a.Buffer:void 0,R=(b?b.isBuffer:void 0)||v.a;_.a=R}).call(this,g(11)(D))},function(D,_,g){"use strict";(function(A){var y=g(9),v=typeof Nt=="object"&&Nt&&!Nt.nodeType&&Nt,w=v&&typeof A=="object"&&A&&!A.nodeType&&A,P=w&&w.exports===v&&y.a.process,b=function(){try{var R=w&&w.require&&w.require("util").types;return R||P&&P.binding&&P.binding("util")}catch{}}();_.a=b}).call(this,g(11)(D))},function(D,_,g){"use strict";(function(A){var y=g(0);let v="27.1.0",w=typeof window=="object"?window:A;if(w.CKEDITOR_VERSION)throw new y.a("ckeditor-duplicated-modules",null);w.CKEDITOR_VERSION=v}).call(this,g(66))},function(D,_,g){"use strict";(function(A){var y=typeof A=="object"&&A&&A.Object===Object&&A;_.a=y}).call(this,g(66))},function(D,_,g){"use strict";(function(A){var y=g(5),v=typeof Nt=="object"&&Nt&&!Nt.nodeType&&Nt,w=v&&typeof A=="object"&&A&&!A.nodeType&&A,P=w&&w.exports===v?y.a.Buffer:void 0,b=P?P.allocUnsafe:void 0;_.a=function(R,it){if(it)return R.slice();var V=R.length,bt=b?b(V):new R.constructor(V);return R.copy(bt),bt}}).call(this,g(11)(D))},function(D,_){D.exports=function(g){if(!g.webpackPolyfill){var A=Object.create(g);A.children||(A.children=[]),Object.defineProperty(A,"loaded",{enumerable:!0,get:function(){return A.l}}),Object.defineProperty(A,"id",{enumerable:!0,get:function(){return A.i}}),Object.defineProperty(A,"exports",{enumerable:!0}),A.webpackPolyfill=1}return A}},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,iDAGC,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,eACD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,sDAA8D,CAC9D,iDAAyD,CACzD,yCAAqD,CACrD,uCAAsD,CACtD,6CAA0D,CAC1D,uCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,qDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,wDAAmE,CACnE,mDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,iDAIC,QAAS,CACT,SAAU,CACV,QAAS,CACT,sBAAuB,CACvB,oBAAqB,CACrB,qBAAsB,CACtB,eAAgB,CAGhB,oBACD,CAKA,oCAGC,wBAAyB,CACzB,iGAAkG,CAClG,0BAA2B,CAC3B,eAAgB,CAChB,kBAAmB,CACnB,WAAY,CACZ,UACD,CAGC,2BACC,gBACD,CAEA,wBAEC,sBACD,CAEA,0BACC,oBACD,CAEA,kGAGC,WACD,CAEA,gIAGC,cACD,CAEA,0BACC,YAAa,CACb,yBACD,CAEA,0CAEC,SAAU,CACV,QACD,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck.ck-reset_all * {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck.ck-reset_all * {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck.ck-reset_all * {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck.ck-reset_all {
	& .ck-rtl * {
		text-align: right;
	}

	& iframe {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea {
		white-space: pre-wrap;
	}

	& textarea,
	& input[type="text"],
	& input[type="password"] {
		cursor: text;
	}

	& textarea[disabled],
	& input[type="text"][disabled],
	& input[type="password"][disabled] {
		cursor: default;
	}

	& fieldset {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YACC,yBAA0B,CAC1B,0BAA2B,CAG3B,uBAAwB,CAQxB,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_sw{right:50%;left:auto}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{right:auto;left:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{right:auto;left:0;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:transparent;border-bottom-color:transparent;border-right-color:var(--ck-color-tooltip-background);border-top-color:transparent;border-left-width:0;border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_w{right:calc(100% + var(--ck-tooltip-arrow-size));left:auto;top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:var(--ck-color-tooltip-background);border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:0;border-top-width:var(--ck-tooltip-arrow-size)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDAEC,iBAAkB,CAGlB,mBAAoB,CAIpB,kCACD,CAEA,eAEC,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CACX,OAAQ,CACR,QACD,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAGC,cAAe,CACf,eAAgB,CAChB,kCAAmC,CACnC,wDAAyD,CACzD,6CAA8C,CAC9C,iBAAkB,CAClB,SAYD,CAVC,uCAMC,sCAAuC,CACvC,kBAAmB,CACnB,QACD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAEC,+CAAkD,CAClD,0BAA6B,CAC7B,6BAAoF,CAApF,sDAAoF,CAApF,8BAAoF,CAApF,4BAAoF,CACpF,8CAAsG,CAAtG,gDAAsG,CAAtG,+CAAsG,CAAtG,kBACD,CAaD,6BACC,SAAU,CACV,SAWD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CACC,UAAW,CACX,0CACD,CAEA,qDACC,UAAW,CACX,MAAO,CACP,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDACC,4CAA+C,CAC/C,0BAA6B,CAC7B,6BAAoF,CAApF,+BAAoF,CAApF,8BAAoF,CAApF,mDAAoF,CACpF,8CAAsG,CAAtG,qBAAsG,CAAtG,+CAAsG,CAAtG,6CACD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDACC,0CAA6C,CAC7C,8CAAiD,CACjD,6BAAoF,CAApF,+BAAoF,CAApF,qDAAoF,CAApF,4BAAoF,CACpF,mBAAsG,CAAtG,gDAAsG,CAAtG,+CAAsG,CAAtG,6CACD,CAWF,4BACC,+CAAgD,CAChD,SAAU,CACV,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDACC,SAAU,CACV,8CAAiD,CACjD,oDAAoF,CAApF,+BAAoF,CAApF,8BAAoF,CAApF,4BAAoF,CACpF,8CAAsG,CAAtG,gDAAsG,CAAtG,oBAAsG,CAAtG,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(var(--ck-spacing-small)*-1);margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAKC,iBAAkB,CAClB,mBAAoB,CACpB,kBAAmB,CACnB,oBAyBD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEACC,kBAAmB,CACnB,SACD,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BAKC,kBAAmB,CACnB,cAAe,CACf,qBAAsB,CACtB,8BAA+B,CAC/B,iBAAkB,CAGlB,2CAA4C,CAC5C,4CAA6C,CAI7C,aAAc,CAGd,iBAAkB,CAGlB,4BAA6B,CAG7B,4DAA8D,CAG9D,uBA6GD,CA3GC,oFGjCA,YAAa,CACb,2BAA2B,CCF3B,2CJsCA,CAIC,kJAEC,aACD,CAGD,iEAEC,iBAAkB,CAClB,mBAAoB,CACpB,aAAc,CACd,cAAe,CAIf,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAEA,uFK3FD,kCL6FC,CAGA,yFKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAOE,6CAAgD,CAChD,mCAEF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover {
		@mixin ck-tooltip_visible;
	}

	/* Get rid of the native focus outline around the tooltip when focused (but not :hover). */
	&:focus:not(:hover) {
		@mixin ck-tooltip_disabled;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*0.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var(--ck-switch-button-translation)*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAcC,8BAAiC,CAEjC,0CAA2C,CAC3C,uDAwBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,+CAWF,CAbA,2EAMC,6CAA8C,CAC9C,+CAAgD,CAChD,gDAAiD,CACjD,yDAA0D,CAG1D,uBACD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,yDAMF,CAXA,2FASE,kEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,oCAAqC,CACrC,qCAAsC,CACtC,wCAAyC,CACzC,yCAA0C,CAC1C,SAAU,CACV,8BAA+B,CAC/B,QAmCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCACC,YAAa,CACb,2CACD,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,qDAGE,6BAA8B,CAC9B,gCAQF,CAZA,qDASE,4BAA6B,CAC7B,+BAEF,CAEA,0CAGC,eAmBD,CAtBA,oDCnBA,eDyCA,CAtBA,+ICfC,qCAAsC,CDuBpC,4BAA6B,CAC7B,+BAaH,CAtBA,oDAeE,6BAA8B,CAC9B,gCAMF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAGC,sKACC,2DACD,CAIA,sKACC,4DACD,CAMF,uCCpEA,eD8EA,CAVA,qHChEC,qCD0ED,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	& > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			@mixin ck-rounded-corners {
				border-top-left-radius: unset;
				border-bottom-left-radius: unset;
			}
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled) {
				border-left-color: var(--ck-color-split-button-hover-border);
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled) {
				border-right-color: var(--ck-color-split-button-hover-border);
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);max-width:var(--ck-dropdown-max-width);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CACb,yBAA0B,CAC1B,sCAAuC,CAEvC,iBAyDD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSASC,QAAS,CACT,WACD,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CACC,gCAAiC,CAGjC,sCACD,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEACC,SAAU,CACV,eAAgB,CAChB,sBACD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBEpFC,oCAA8B,CFwF9B,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CAGT,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;background:var(--ck-color-toolbar-border);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,YAAa,CACb,oBAAqB,CACrB,kBA6CD,CA3CC,kCACC,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAC9C,iCAAkC,CAClC,+CAwFD,CAtFC,yCACC,kBAAmB,CACnB,SAAU,CACV,aAAc,CACd,yCAA0C,CAM1C,kCAAmC,CACnC,qCACD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAGC,kCAAmC,CACnC,qCACD,CAEA,mCAEC,SAgBD,CAbC,0DAEC,UAAW,CAGX,QAAS,CAGT,eAAgB,CAGhB,QACD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JACC,wBAAyB,CACzB,2BACD,CAGA,2JACC,yBAA0B,CAC1B,4BACD,CAID,qGACC,mCACD,CAGA,yLACC,mCACD,CAWA,qHACC,cACD,CAIC,6JACC,yBAA0B,CAC1B,4BACD,CAGA,2JACC,wBAAyB,CACzB,2BACD,CAID,qGACC,oCACD,CAGA,yLACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,YAAa,CACb,qBAcD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAGC,oBAAqB,CACrB,0CACD,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BACC,gBAAiB,CACjB,UAAW,CACX,eAAgB,CAChB,eAAgB,CAKhB,mIAiCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBACC,UAAW,CACX,UAAW,CACX,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{width:max-content;max-width:var(--ck-toolbar-dropdown-max-width)}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAEC,iBAAkB,CAClB,8CAOD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDIpC,wBAAyB,CACzB,2BAA4B,CAC5B,4BAEF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEERA,YAAa,CACb,2BAA2B,CCF3B,qCHYA,CAGD,+BACC,aAAc,CACd,oCAAqC,CACrC,4BAwBD,CAtBC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CACC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-form__header{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{padding:var(--ck-spacing-small) var(--ck-spacing-large);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,kBAAmB,CACnB,6BACD,CCNA,MACC,4BACD,CAEA,oBACC,uDAAwD,CACxD,mCAAoC,CACpC,wCAAyC,CACzC,mDAKD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/inputtext/inputtext.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,0BACD,CAEA,kBCFC,eDwCD,CAtCA,2ECEE,qCDoCF,CAtCA,kBAGC,2CAA4C,CAC5C,6CAA8C,CAC9C,6DAA8D,CAC9D,oCAAqC,CAGrC,4CAA6C,CAG7C,4DA0BD,CAxBC,wBEjBA,YAAa,CACb,2BAA2B,CCF3B,2CHqBA,CAEA,4BACC,sDAAuD,CACvD,oDAAqD,CACrD,yCAMD,CAJC,kCG5BD,oDH+BC,CAGD,2BACC,+CAAgD,CAChD,2CAKD,CAHC,iCGtCD,iDHwCC,CAIF,+BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-text-width: 18em;
}

.ck.ck-input-text {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-text-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-text-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-text-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{pointer-events:none;transform-origin:0 0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);background:var(--ck-color-labeled-field-label-background);padding:0 calc(var(--ck-font-size-tiny)*0.5);line-height:normal;font-weight:400;text-overflow:ellipsis;overflow:hidden;max-width:100%;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*0.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*0.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));background:transparent;padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAWC,mBAAoB,CACpB,oBAAqB,CAGrB,6DAA+D,CAE/D,yDAA0D,CAC1D,4CAA8C,CAC9C,kBAAoB,CACpB,eAAmB,CAGnB,sBAAuB,CACvB,eAAgB,CAEhB,cAAe,CAEf,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,wSAGE,yFAYF,CAfA,wSAOE,kGAQF,CAfA,oRAWC,iEAAkE,CAElE,sBAAuB,CACvB,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border);filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBENC,oCAA8B,CFU9B,eAAgB,CAEhB,2CAA4C,CAC5C,6CAiID,CA9HE,+GAEC,OAAQ,CACR,QAAS,CACT,kBACD,CAIA,uFAEC,oDAAoH,CAApH,kDAAoH,CAApH,qDAAoH,CAApH,kBACD,CAEA,4CACC,gDACD,CAEA,uFAHC,6BAA8E,CAA9E,8BAA8E,CAA9E,4BAMD,CAHA,2CACC,oDAAkF,CAClF,yCACD,CAIA,uFAEC,oDAAoH,CAApH,qBAAoH,CAApH,qDAAoH,CAApH,+CACD,CAEA,4CACC,6CAAkE,CAClE,uDACD,CAEA,uFAJC,6BAAkE,CAAlE,+BAAkE,CAAlE,8BAOD,CAHA,2CACC,iDAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,8CACD,CAIA,2GAEC,+CAAkD,CAClD,8CACD,CAIA,2GAEC,gDAAmD,CACnD,8CACD,CAIA,6GAEC,SAAU,CACV,uDAA0D,CAC1D,8CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,8CACD,CAIA,6GAEC,SAAU,CACV,uDAA0D,CAC1D,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCACC,oCAAqC,CACrC,kCAAmC,CACnC,qCACD,CAGA,iEACC,uCAAwC,CAGxC,mCACD,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBCJC,oCAA8B,CDO9B,eAAgB,CAEhB,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CAEtC,UAAW,CACX,WACD,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDACC,yBAA0B,CAC1B,cAAe,CACf,KACD,CAEA,kEACC,QAAS,CACT,iBACD,CCPA,qDCCA,oCAA8B,CDE7B,sBAAuB,CACvB,wBAAyB,CACzB,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-placeholder,.ck .ck-placeholder{position:relative}.ck.ck-placeholder:before,.ck .ck-placeholder:before{position:absolute;left:0;right:0;content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDACC,iBAAkB,CAClB,MAAO,CACP,OAAQ,CACR,8BAA+B,CAG/B,mBACD,CAKA,wCACC,YACD,CClBA,qDACC,WAAY,CACZ,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAEC,eAAgB,CAGhB,mBAAoB,CACpB,kBAAmB,CAEnB,aAAc,CACd,cAAe,CACf,iBAAkB,CAClB,0BACD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(var(--ck-widget-outline-thickness)*-0.5);left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-0.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CACd,iBAAkB,CAClB,eAAgB,CAChB,2BAwBD,CAtBC,mDACC,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,qCACD,CAEA,qFAEC,iDAAoD,CACpD,kBAAoB,CAEpB,0BACD,CAEA,oFAEC,oDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CACd,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,qCACD,CAMD,2EACC,YAAa,CACb,iBAAkB,CAClB,MAAO,CACP,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHACC,qDAA0D,CAC1D,aACD,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CACC,8CAA+C,CAC/C,+CAAgD,CAChD,oDAAqD,CACrD,mBAAoB,CACpB,uMAAyM,CAb1M,SAAU,CACV,mBA0DA,CA1CC,mDACC,UAAW,CACX,UAAW,CACX,8BAA+B,CAC/B,6BAA8B,CAC9B,cAgBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLACC,0DAA2D,CAC3D,2DAA4D,CAC5D,mBAAoB,CACpB,uEACD,CAOD,8GACC,gBACD,CAKA,mDACC,mBAAoB,CACpB,UAAW,CACX,mFAAoF,CAMpF,oCAAwC,CACxC,oCACD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CASE,0jBACC,SACD,CASF,mPACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CACtD,0CAA2C,CAC3C,qDAAsD,CACtD,6CAA8C,CAC9C,kCAAmC,CACnC,aAAc,CACd,+BA4BD,CA1BC,gLAIC,iBACD,CAEA,0CACC,oCAAqC,CACrC,qCACD,CAEA,2CACC,oCAAqC,CACrC,sCACD,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CCtED,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eACC,gDAAiD,CACjD,mBAAoB,CACpB,yBAA0B,CAC1B,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGC/BA,YAAa,CACb,2BAA2B,CCF3B,qCAA8B,CFqC7B,iEACD,CAIA,4EACC,WAAY,CACZ,qBAAsB,CAGtB,4BAA6B,CAC7B,SAAU,CAMV,6SAG6F,CAG7F,iEAAkE,CAGlE,2BAA4B,CAC5B,mDAqBD,CAnBC,qFAEC,wCAAyC,CACzC,yCAA0C,CAC1C,oDASD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFACC,SAAU,CACV,oDACD,CAKC,oMACC,SAAU,CACV,6CAMD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: var(--ck-spacing-small);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;position:relative;pointer-events:none}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-left:-1px}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{content:"";width:0;height:0;display:block;position:absolute;left:50%;top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);transform:translateX(-50%);border-left:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-bottom:0 solid transparent;border-right:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-top:calc(var(--ck-clipboard-drop-target-dot-height)) solid var(--ck-clipboard-drop-target-color)}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CACf,iBAAkB,CAClB,mBAMD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEACC,4DAA8D,CAC9D,yDAA2D,CAC3D,sDAAuD,CACvD,gDAAiD,CACjD,gBAkBD,CAfC,yEACC,UAAW,CACX,OAAQ,CACR,QAAS,CAET,aAAc,CACd,iBAAkB,CAClB,QAAS,CACT,yDAA2D,CAE3D,0BAA2B,CAG3B,iFAAmB,CAAnB,iCAAmB,CAAnB,kFAAmB,CAAnB,uGACD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-button.ck-color-table__remove-color{display:flex;align-items:center;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontcolor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CACC,YAAa,CACb,kBAAmB,CACnB,UACD,CAEA,8BACC,iBACD,CCNA,4CACC,qEAAyE,CACzE,2BAA4B,CAC5B,4BAeD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-button.ck-color-table__remove-color {
	display: flex;
	align-items: center;
	width: 100%;
}

label.ck.ck-color-grid__label {
	font-weight: unset;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck .ck-button.ck-color-table__remove-color {
	padding: calc(var(--ck-spacing-standard) / 2 ) var(--ck-spacing-standard);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	&:not(:focus) {
		border-bottom: 1px solid var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-standard);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-standard);
		}
	}
}

`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CACb,iBAAkB,CAGlB,mBAAoB,CAEpB,MAAO,CACP,KACD,CAGC,2EACC,aACD,CAGD,gCACC,iBAAkB,CAGlB,kBAWD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCACC,4BAA6B,CAC7B,6BAA8B,CAC9B,uCAAwC,CACxC,gDAA6D,CAC7D,6CAqBD,CAnBC,oEACC,4BAA6B,CAC7B,6BACD,CAEA,qEACC,4BAA6B,CAC7B,8BACD,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{margin:15px 0;height:4px;background:#dedede;border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eACC,aAAc,CACd,UAAW,CACX,kBAA2B,CAC3B,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


.ck-editor__editable .ck-horizontal-line {
	/* Necessary to render properly next to floated objects, e.g. side image case. */
	display: flow-root;
}

.ck-content hr {
	margin: 15px 0;
	height: 4px;
	background: hsl(0, 0%, 87%);
	border: 0;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck-vertical-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-text-width)*0.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-large);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCACC,UAAW,CACX,OAAQ,CACR,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAC5B,8BAA+B,CAC/B,SACD,CCTC,oCDaC,wCACC,UAAW,CACX,OAAQ,CACR,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAC5B,8BAA+B,CAC/B,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,0CA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAEC,kCAAmC,CACnC,kCAAmC,CAEnC,eAAgB,CAChB,QAAS,CACT,gDAaD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-text-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:50px}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{position:static}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAKA,mBACC,aAAc,CACd,UAAW,CACX,iBAAkB,CAGlB,eAeD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAQD,gEACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image {
	display: table;
	clear: both;
	text-align: center;

	/* Make sure there is some space between the content and the image. Center image by default. */
	margin: 1em auto;

	& img {
		/* Prevent unnecessary margins caused by line-height (see #44). */
		display: block;

		/* Center the image if its width is smaller than the content's width. */
		margin: 0 auto;

		/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
		max-width: 100%;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;
	}
}

/*
 * Since the caption placeholder for images disappears when focused, it does not require special treatment
 * and can go with a position that follows text alignment of an .image out-of-the-box (center by default).
 * See https://github.com/ckeditor/ckeditor5/issues/8689.
 */
.ck.ck-editor__editable .image > figcaption.ck-placeholder::before {
	position: static;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,8BACC,qBAAsB,CACtB,mBAAoB,CACpB,qBAAsB,CACtB,UAAsB,CACtB,wBAAiC,CACjC,YAAa,CACb,eAAgB,CAChB,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: hsl(0, 0%, 20%);
	background-color: hsl(0, 0%, 97%);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAKA,+BACC,iBACD,CAGA,gDACC,iBAAkB,CAClB,KAAM,CACN,MACD,CCPC,yCACC,oBACD,CAID,gDACC,UAAW,CACX,OAAQ,CACR,gDAAiD,CACjD,oBACD,CAEA,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable .image {
	position: relative;
}

/* Upload progress bar. */
.ck.ck-editor__editable .image .ck-progress-bar {
	position: absolute;
	top: 0;
	left: 0;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable .image {
	/* Showing animation. */
	&.ck-appear {
		animation: fadeIn 700ms;
	}
}

/* Upload progress bar. */
.ck.ck-editor__editable .image .ck-progress-bar {
	height: 2px;
	width: 0;
	background: var(--ck-color-upload-bar-background);
	transition: width 100ms;
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BACC,aAAc,CACd,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,iBAMD,CAJC,qCACC,UAAW,CACX,iBACD,CCVD,MACC,iCAA8C,CAC9C,+CAA4D,CAE5D,gCAAiC,CACjC,gCACD,CAEA,+BACC,sCAAuC,CACvC,uCAAwC,CACxC,SAAU,CACV,uDAAwD,CACxD,wEAA0E,CAC1E,qCAAuC,CACvC,0BAAgC,CAGhC,0CAA2C,CAG3C,sBAyBD,CAtBC,qCAEC,QAAS,CAET,OAAQ,CACR,SAAU,CACV,QAAS,CACT,OAAQ,CAER,mCAAoC,CACpC,yBAA0B,CAC1B,oFAAqF,CACrF,sFAAuF,CAEvF,4CAA6C,CAC7C,sBAAyB,CACzB,mBAAsB,CACtB,4BAA6B,CAG7B,qBACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GACC,SAAU,CACV,OAAQ,CACR,QACD,CACA,IACC,UAAY,CACZ,QACD,CACA,GACC,SAAU,CACV,UAAY,CACZ,YACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;
	top: 10px;
	right: 10px;
	border-radius: 50%;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	--ck-image-upload-icon-size: 20px;
	--ck-image-upload-icon-width: 2px;
}

.ck-image-upload-complete-icon {
	width: var(--ck-image-upload-icon-size);
	height: var(--ck-image-upload-icon-size);
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: var(--ck-image-upload-icon-size);

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCACC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,KAAM,CACN,MAMD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCACD,CAEA,iCAEC,UAAW,CACX,QACD,CAEA,kCACC,UAAW,CACX,WAUD,CARC,yCACC,8CAA+C,CAC/C,+CAAgD,CAChD,iBAAkB,CAClB,8DAA+D,CAC/D,kCAAmC,CACnC,yDACD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{display:block;width:100%;margin:var(--ck-spacing-standard) auto;border:1px solid #ccc;border-radius:var(--ck-border-radius)}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{padding:0;margin:0;border:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCACC,aAAc,CACd,UAAW,CACX,sCAAuC,CACvC,qBAAiC,CACjC,qCACD,CAGA,oDACC,SAAU,CACV,QAAS,CACT,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCACC,cAAe,CAMf,aAAc,CACd,qBAWD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAGD,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BACD,CAGC,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
}

.ck-content {
	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDACD,CAMA,4BACC,8CACD,CAGA,sCACC,WAAY,CACZ,gDAAiD,CACjD,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCACC,SAAU,CACV,oCA8CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CACC,kCAAmC,CACnC,QAAS,CACT,eAAgB,CAChB,QAAS,CACT,gDAAiD,CACjD,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-text-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EACC,kCAAmC,CACnC,kCAAmC,CACnC,sBAAuB,CACvB,cAAe,CAIf,oCAAqC,CACrC,aAAc,CACd,iBAKD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EACC,WAAY,CACZ,cACD,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-text-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,'.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(var(--ck-spacing-standard)*3);background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CACC,YAAa,CACb,qBAAsB,CACtB,kBAmBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFACC,kBAAmB,CACnB,SACD,CD3BE,wGACC,eAAgB,CAChB,aACD,CAQD,+UACC,YACD,CAYF,2LACC,mBACD,CE/CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA4FD,CA1FC,0CACC,0CAA+C,CAC/C,0CA4BD,CA1BC,uEACC,qDAAsD,CACtD,kDAAmD,CACnD,qCAAsC,CACtC,uBAA2B,CAC3B,qBAMD,CAJC,gFACC,UAAW,CACX,WACD,CAGD,4EACC,sDAAuD,CACvD,kBAAmB,CACnB,iBAAkB,CAClB,iBAAkB,CAClB,sBAOD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDACC,eAAgB,CAChB,gBACD,CAEA,oFACC,gvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,48BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBACC,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CAGX,YAAa,CAIb,aAAc,CAId,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	margin: 1em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,8DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAEC,oJAA2J,CAC3J,yFACD,CAEA,qCACC,iBACD,CAEA,uCACC,+CAAgD,CAChD,iDAAkD,CAClD,iDAAkD,CAClD,4CAA6C,CAC7C,iBAMD,CAJC,6CACC,yCAA0C,CAC1C,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget_selected{outline:unset}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,yDACD,CAGC,0IAEC,iBAAkB,CAClB,uBAAwB,CACxB,aAAc,CACd,gBAsBD,CAnBC,sJACC,UAAW,CACX,mBAAoB,CACpB,yDAA0D,CAC1D,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,OAAQ,CACR,QACD,CAEA,wTAEC,4BACD,CAEA,kLACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		& .ck-widget_selected {
			outline: unset;
		}
	}
}
`],sourceRoot:""}]),_.a=w},function(D,_,g){"use strict";var A=g(2),y=g.n(A),v=g(3),w=g.n(v)()(y.a);w.push([D.i,".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAEC,eAAgB,CAChB,aAgCD,CA9BC,yBAEC,wBAAyB,CACzB,gBAAiB,CAIjB,UAAW,CACX,WAAY,CAIZ,yBAiBD,CAfC,wDAEC,aAAc,CACd,YAAa,CAKb,wBACD,CAEA,4BACC,eAAiB,CACjB,2BACD,CAMF,+BACC,gBACD,CAEA,+BACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	margin: 1em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the ediitor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}
`],sourceRoot:""}]),_.a=w},function(D,_){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch{typeof window=="object"&&(g=window)}D.exports=g},function(D,_,g){"use strict";_.a=function(){return!1}},function(D,_,g){"use strict";g.r(_);var A=function(){return function o(){o.called=!0}};class y{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=A(),this.off=A()}}let v=new Array(256).fill().map((o,t)=>("0"+t.toString(16)).slice(-2));function w(){let o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+v[o>>0&255]+v[o>>8&255]+v[o>>16&255]+v[o>>24&255]+v[t>>0&255]+v[t>>8&255]+v[t>>16&255]+v[t>>24&255]+v[e>>0&255]+v[e>>8&255]+v[e>>16&255]+v[e>>24&255]+v[n>>0&255]+v[n>>8&255]+v[n>>16&255]+v[n>>24&255]}var P={get(o){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5},b=(g(8),g(0));let R=Symbol("listeningTo"),it=Symbol("emitterId");var V={on(o,t,e={}){this.listenTo(this,o,t,e)},once(o,t,e){let n=!1;this.listenTo(this,o,function(i,...r){n||(n=!0,i.off(),t.call(this,i,...r))},e)},off(o,t){this.stopListening(this,o,t)},listenTo(o,t,e,n={}){let i,r;this[R]||(this[R]={});let s=this[R];ie(o)||bt(o);let a=ie(o);(i=s[a])||(i=s[a]={emitter:o,callbacks:{}}),(r=i.callbacks[t])||(r=i.callbacks[t]=[]),r.push(e),function(c,l,d,u,h){l._addEventListener?l._addEventListener(d,u,h):c._addEventListener.call(l,d,u,h)}(this,o,t,e,n)},stopListening(o,t,e){let n=this[R],i=o&&ie(o),r=n&&i&&n[i],s=r&&t&&r.callbacks[t];if(!(!n||o&&!r||t&&!s))if(e)U(this,o,t,e),s.indexOf(e)!==-1&&(s.length===1?delete r.callbacks[t]:U(this,o,t,e));else if(s){for(;e=s.pop();)U(this,o,t,e);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(o,t);delete n[i]}else{for(i in n)this.stopListening(n[i].emitter);delete this[R]}},fire(o,...t){try{let e=o instanceof y?o:new y(this,o),n=e.name,i=ho(this,n);if(e.path.push(this),i){let r=[e,...t];i=Array.from(i);for(let s=0;s<i.length&&(i[s].callback.apply(this,r),e.off.called&&(delete e.off.called,this._removeEventListener(n,i[s].callback)),!e.stop.called);s++);}if(this._delegations){let r=this._delegations.get(n),s=this._delegations.get("*");r&&F(r,e,t),s&&F(s,e,t)}return e.return}catch(e){b.a.rethrowUnexpectedError(e,this)}},delegate(...o){return{to:(t,e)=>{this._delegations||(this._delegations=new Map),o.forEach(n=>{let i=this._delegations.get(n);i?i.set(t,e):this._delegations.set(n,new Map([[t,e]]))})}}},stopDelegating(o,t){if(this._delegations)if(o)if(t){let e=this._delegations.get(o);e&&e.delete(t)}else this._delegations.delete(o);else this._delegations.clear()},_addEventListener(o,t,e){(function(s,a){let c=me(s);if(c[a])return;let l=a,d=null,u=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},u.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(let h of u)h.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,o);let n=Oe(this,o),i=P.get(e.priority),r={callback:t,priority:i};for(let s of n){let a=!1;for(let c=0;c<s.length;c++)if(s[c].priority<i){s.splice(c,0,r),a=!0;break}a||s.push(r)}},_removeEventListener(o,t){let e=Oe(this,o);for(let n of e)for(let i=0;i<n.length;i++)n[i].callback==t&&(n.splice(i,1),i--)}};function bt(o,t){o[it]||(o[it]=t||w())}function ie(o){return o[it]}function me(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Oe(o,t){let e=me(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){let r=Oe(o,e.childEvents[i]);n=n.concat(r)}return n}function ho(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?ho(o,t.substr(0,t.lastIndexOf(":"))):null}function F(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;let r=new y(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function U(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}var B=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},W=g(5),Q=W.a.Symbol,ht=Object.prototype,mt=ht.hasOwnProperty,Ee=ht.toString,Ht=Q?Q.toStringTag:void 0,Pn=function(o){var t=mt.call(o,Ht),e=o[Ht];try{o[Ht]=void 0;var n=!0}catch{}var i=Ee.call(o);return n&&(t?o[Ht]=e:delete o[Ht]),i},mo=Object.prototype.toString,yg=function(o){return mo.call(o)},Ps=Q?Q.toStringTag:void 0,Me=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Ps&&Ps in Object(o)?Pn(o):yg(o)},zs,Re=function(o){if(!B(o))return!1;var t=Me(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Di=W.a["__core-js_shared__"],Ls=(zs=/[^.]+$/.exec(Di&&Di.keys&&Di.keys.IE_PROTO||""))?"Symbol(src)_1."+zs:"",xg=function(o){return!!Ls&&Ls in o},Dg=Function.prototype.toString,je=function(o){if(o!=null){try{return Dg.call(o)}catch{}try{return o+""}catch{}}return""},Eg=/^\[object .+?Constructor\]$/,Mg=Function.prototype,Tg=Object.prototype,Sg=Mg.toString,Ig=Tg.hasOwnProperty,Ng=RegExp("^"+Sg.call(Ig).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bg=function(o){return!(!B(o)||xg(o))&&(Re(o)?Ng:Eg).test(je(o))},Pg=function(o,t){return o?.[t]},Fe=function(o,t){var e=Pg(o,t);return Bg(e)?e:void 0},go=function(){try{var o=Fe(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Ei=function(o,t,e){t=="__proto__"&&go?go(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e},zn=function(o,t){return o===t||o!=o&&t!=t},zg=Object.prototype.hasOwnProperty,Mi=function(o,t,e){var n=o[t];zg.call(o,t)&&zn(n,e)&&(e!==void 0||t in o)||Ei(o,t,e)},tn=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],o[a],a,e,o):void 0;c===void 0&&(c=o[a]),i?Ei(e,a,c):Mi(e,a,c)}return e},Os=function(o){return o},Lg=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)},Rs=Math.max,Og=function(o,t,e){return t=Rs(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=Rs(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),Lg(o,this,a)}},Rg=function(o){return function(){return o}},jg=go?function(o,t){return go(o,"toString",{configurable:!0,enumerable:!1,value:Rg(t),writable:!0})}:Os,Fg=Date.now,Vg=function(o){var t=0,e=0;return function(){var n=Fg(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(jg),Ug=function(o,t){return Vg(Og(o,t,Os),o+"")},js=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991},po=function(o){return o!=null&&js(o.length)&&!Re(o)},Hg=/^(?:0|[1-9]\d*)$/,Ti=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&Hg.test(o))&&o>-1&&o%1==0&&o<t},Kg=function(o,t,e){if(!B(e))return!1;var n=typeof t;return!!(n=="number"?po(e)&&Ti(t,e.length):n=="string"&&t in e)&&zn(e[t],o)},Fs=function(o){return Ug(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&Kg(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},Gg=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},Wt=function(o){return o!=null&&typeof o=="object"},Vs=function(o){return Wt(o)&&Me(o)=="[object Arguments]"},Us=Object.prototype,qg=Us.hasOwnProperty,Wg=Us.propertyIsEnumerable,Si=Vs(function(){return arguments}())?Vs:function(o){return Wt(o)&&qg.call(o,"callee")&&!Wg.call(o,"callee")},Bt=Array.isArray,Ln=g(6),ct={};ct["[object Float32Array]"]=ct["[object Float64Array]"]=ct["[object Int8Array]"]=ct["[object Int16Array]"]=ct["[object Int32Array]"]=ct["[object Uint8Array]"]=ct["[object Uint8ClampedArray]"]=ct["[object Uint16Array]"]=ct["[object Uint32Array]"]=!0,ct["[object Arguments]"]=ct["[object Array]"]=ct["[object ArrayBuffer]"]=ct["[object Boolean]"]=ct["[object DataView]"]=ct["[object Date]"]=ct["[object Error]"]=ct["[object Function]"]=ct["[object Map]"]=ct["[object Number]"]=ct["[object Object]"]=ct["[object RegExp]"]=ct["[object Set]"]=ct["[object String]"]=ct["[object WeakMap]"]=!1;var Yg=function(o){return Wt(o)&&js(o.length)&&!!ct[Me(o)]},Ii=function(o){return function(t){return o(t)}},en=g(7),Hs=en.a&&en.a.isTypedArray,Ni=Hs?Ii(Hs):Yg,Qg=Object.prototype.hasOwnProperty,Ks=function(o,t){var e=Bt(o),n=!e&&Si(o),i=!e&&!n&&Object(Ln.a)(o),r=!e&&!n&&!i&&Ni(o),s=e||n||i||r,a=s?Gg(o.length,String):[],c=a.length;for(var l in o)!t&&!Qg.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ti(l,c))||a.push(l);return a},$g=Object.prototype,Bi=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||$g)},Jg=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t},Zg=Object.prototype.hasOwnProperty,Xg=function(o){if(!B(o))return Jg(o);var t=Bi(o),e=[];for(var n in o)(n!="constructor"||!t&&Zg.call(o,n))&&e.push(n);return e},nn=function(o){return po(o)?Ks(o,!0):Xg(o)},On=Fs(function(o,t){tn(t,nn(t),o)});let fo=Symbol("observableProperties"),ko=Symbol("boundObservables"),bo=Symbol("boundProperties"),on=Symbol("decoratedMethods"),Gs=Symbol("decoratedOriginal"),Pi={set(o,t){if(B(o))return void Object.keys(o).forEach(n=>{this.set(n,o[n])},this);qs(this);let e=this[fo];if(o in this&&!e.has(o))throw new b.a("observable-set-cannot-override",this);Object.defineProperty(this,o,{enumerable:!0,configurable:!0,get:()=>e.get(o),set(n){let i=e.get(o),r=this.fire("set:"+o,o,n,i);r===void 0&&(r=n),i===r&&e.has(o)||(e.set(o,r),this.fire("change:"+o,o,r,i))}}),this[o]=t},bind(...o){if(!o.length||!Ws(o))throw new b.a("observable-bind-wrong-properties",this);if(new Set(o).size!==o.length)throw new b.a("observable-bind-duplicate-properties",this);qs(this);let t=this[bo];o.forEach(n=>{if(t.has(n))throw new b.a("observable-bind-rebind",this)});let e=new Map;return o.forEach(n=>{let i={property:n,to:[]};t.set(n,i),e.set(n,i)}),{to:tp,toMany:ep,_observable:this,_bindProperties:o,_to:[],_bindings:e}},unbind(...o){if(!this[fo])return;let t=this[bo],e=this[ko];if(o.length){if(!Ws(o))throw new b.a("observable-unbind-wrong-properties",this);o.forEach(n=>{let i=t.get(n);if(!i)return;let r,s,a,c;i.to.forEach(l=>{r=l[0],s=l[1],a=e.get(r),c=a[s],c.delete(i),c.size||delete a[s],Object.keys(a).length||(e.delete(r),this.stopListening(r,"change"))}),t.delete(n)})}else e.forEach((n,i)=>{this.stopListening(i,"change")}),e.clear(),t.clear()},decorate(o){let t=this[o];if(!t)throw new b.a("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:o});this.on(o,(e,n)=>{e.return=t.apply(this,n)}),this[o]=function(...e){return this.fire(o,e)},this[o][Gs]=t,this[on]||(this[on]=[]),this[on].push(o)}};On(Pi,V),Pi.stopListening=function(o,t,e){if(!o&&this[on]){for(let n of this[on])this[n]=this[n][Gs];delete this[on]}V.stopListening.call(this,o,t,e)};var rt=Pi;function qs(o){o[fo]||(Object.defineProperty(o,fo,{value:new Map}),Object.defineProperty(o,ko,{value:new Map}),Object.defineProperty(o,bo,{value:new Map}))}function tp(...o){let t=function(...r){if(!r.length)throw new b.a("observable-bind-to-parse-error",null);let s={to:[]},a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new b.a("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new b.a("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new b.a("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new b.a("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{let s=i[ko],a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Ys(i,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,u,h,m){let p=d[ko],k=p.get(h),f=k||{};f[m]||(f[m]=new Set),f[m].add(u),k||p.set(h,f)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Ys(this._observable,r)})}function ep(o,t,e){if(this._bindings.size>1)throw new b.a("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){let r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function Ws(o){return o.every(t=>typeof t=="string")}function Ys(o,t){let e=o[bo].get(t),n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}function L(o,...t){t.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in o.prototype)return;let i=Object.getOwnPropertyDescriptor(e,n);i.enumerable=!1,Object.defineProperty(o.prototype,n,i)})})}class S{constructor(t){this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Qs,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Qs),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Qs(o){o.return=!1,o.stop()}L(S,rt);class H{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,i)=>{i?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",$s,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",$s),this.refresh())}execute(){}destroy(){this.stopListening()}}function $s(o){o.return=!1,o.stop()}L(H,rt);class Js extends H{constructor(t){super(t),this._childCommands=[]}refresh(){}execute(...t){let e=this._getFirstEnabledCommand();return e!=null&&e.execute(t)}registerChildCommand(t){this._childCommands.push(t),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(t=>t.isEnabled)}}var Zs=function(o,t){return function(e){return o(t(e))}},zi=Zs(Object.getPrototypeOf,Object),np=Function.prototype,op=Object.prototype,Xs=np.toString,ip=op.hasOwnProperty,rp=Xs.call(Object),ge=function(o){if(!Wt(o)||Me(o)!="[object Object]")return!1;var t=zi(o);if(t===null)return!0;var e=ip.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Xs.call(e)==rp},sp=function(){this.__data__=[],this.size=0},wo=function(o,t){for(var e=o.length;e--;)if(zn(o[e][0],t))return e;return-1},ap=Array.prototype.splice,cp=function(o){var t=this.__data__,e=wo(t,o);return!(e<0)&&(e==t.length-1?t.pop():ap.call(t,e,1),--this.size,!0)},lp=function(o){var t=this.__data__,e=wo(t,o);return e<0?void 0:t[e][1]},dp=function(o){return wo(this.__data__,o)>-1},up=function(o,t){var e=this.__data__,n=wo(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function rn(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}rn.prototype.clear=sp,rn.prototype.delete=cp,rn.prototype.get=lp,rn.prototype.has=dp,rn.prototype.set=up;var Co=rn,hp=function(){this.__data__=new Co,this.size=0},mp=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},gp=function(o){return this.__data__.get(o)},pp=function(o){return this.__data__.has(o)},Rn=Fe(W.a,"Map"),jn=Fe(Object,"create"),fp=function(){this.__data__=jn?jn(null):{},this.size=0},kp=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t},bp=Object.prototype.hasOwnProperty,wp=function(o){var t=this.__data__;if(jn){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return bp.call(t,o)?t[o]:void 0},Cp=Object.prototype.hasOwnProperty,Ap=function(o){var t=this.__data__;return jn?t[o]!==void 0:Cp.call(t,o)},_p=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=jn&&t===void 0?"__lodash_hash_undefined__":t,this};function sn(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}sn.prototype.clear=fp,sn.prototype.delete=kp,sn.prototype.get=wp,sn.prototype.has=Ap,sn.prototype.set=_p;var ta=sn,vp=function(){this.size=0,this.__data__={hash:new ta,map:new(Rn||Co),string:new ta}},yp=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Ao=function(o,t){var e=o.__data__;return yp(t)?e[typeof t=="string"?"string":"hash"]:e.map},xp=function(o){var t=Ao(this,o).delete(o);return this.size-=t?1:0,t},Dp=function(o){return Ao(this,o).get(o)},Ep=function(o){return Ao(this,o).has(o)},Mp=function(o,t){var e=Ao(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function an(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}an.prototype.clear=vp,an.prototype.delete=xp,an.prototype.get=Dp,an.prototype.has=Ep,an.prototype.set=Mp;var _o=an,Tp=function(o,t){var e=this.__data__;if(e instanceof Co){var n=e.__data__;if(!Rn||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new _o(n)}return e.set(o,t),this.size=e.size,this};function cn(o){var t=this.__data__=new Co(o);this.size=t.size}cn.prototype.clear=hp,cn.prototype.delete=mp,cn.prototype.get=gp,cn.prototype.has=pp,cn.prototype.set=Tp;var Fn=cn,Sp=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},Ip=Zs(Object.keys,Object),Np=Object.prototype.hasOwnProperty,Bp=function(o){if(!Bi(o))return Ip(o);var t=[];for(var e in Object(o))Np.call(o,e)&&e!="constructor"&&t.push(e);return t},Li=function(o){return po(o)?Ks(o):Bp(o)},Pp=function(o,t){return o&&tn(t,Li(t),o)},zp=function(o,t){return o&&tn(t,nn(t),o)},ea=g(10),na=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Lp=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},oa=function(){return[]},Op=Object.prototype.propertyIsEnumerable,ia=Object.getOwnPropertySymbols,Oi=ia?function(o){return o==null?[]:(o=Object(o),Lp(ia(o),function(t){return Op.call(o,t)}))}:oa,Rp=function(o,t){return tn(o,Oi(o),t)},ra=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},sa=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)ra(t,Oi(o)),o=zi(o);return t}:oa,jp=function(o,t){return tn(o,sa(o),t)},aa=function(o,t,e){var n=t(o);return Bt(o)?n:ra(n,e(o))},Ri=function(o){return aa(o,Li,Oi)},Fp=function(o){return aa(o,nn,sa)},ji=Fe(W.a,"DataView"),Fi=Fe(W.a,"Promise"),Vi=Fe(W.a,"Set"),Ui=Fe(W.a,"WeakMap"),ca="[object Map]",la="[object Promise]",da="[object Set]",ua="[object WeakMap]",ha="[object DataView]",Vp=je(ji),Up=je(Rn),Hp=je(Fi),Kp=je(Vi),Gp=je(Ui),Ve=Me;(ji&&Ve(new ji(new ArrayBuffer(1)))!=ha||Rn&&Ve(new Rn)!=ca||Fi&&Ve(Fi.resolve())!=la||Vi&&Ve(new Vi)!=da||Ui&&Ve(new Ui)!=ua)&&(Ve=function(o){var t=Me(o),e=t=="[object Object]"?o.constructor:void 0,n=e?je(e):"";if(n)switch(n){case Vp:return ha;case Up:return ca;case Hp:return la;case Kp:return da;case Gp:return ua}return t});var Vn=Ve,qp=Object.prototype.hasOwnProperty,Wp=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&qp.call(o,"index")&&(e.index=o.index,e.input=o.input),e},vo=W.a.Uint8Array,Hi=function(o){var t=new o.constructor(o.byteLength);return new vo(t).set(new vo(o)),t},Yp=function(o,t){var e=t?Hi(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)},Qp=/\w*$/,$p=function(o){var t=new o.constructor(o.source,Qp.exec(o));return t.lastIndex=o.lastIndex,t},ma=Q?Q.prototype:void 0,ga=ma?ma.valueOf:void 0,Jp=function(o){return ga?Object(ga.call(o)):{}},pa=function(o,t){var e=t?Hi(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},Zp=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Hi(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Yp(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return pa(o,e);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return $p(o);case"[object Set]":return new n;case"[object Symbol]":return Jp(o)}},fa=Object.create,Xp=function(){function o(){}return function(t){if(!B(t))return{};if(fa)return fa(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),ka=function(o){return typeof o.constructor!="function"||Bi(o)?{}:Xp(zi(o))},tf=function(o){return Wt(o)&&Vn(o)=="[object Map]"},ba=en.a&&en.a.isMap,ef=ba?Ii(ba):tf,nf=function(o){return Wt(o)&&Vn(o)=="[object Set]"},wa=en.a&&en.a.isSet,of=wa?Ii(wa):nf,Ca="[object Arguments]",Aa="[object Function]",rf="[object Object]",st={};st[Ca]=st["[object Array]"]=st["[object ArrayBuffer]"]=st["[object DataView]"]=st["[object Boolean]"]=st["[object Date]"]=st["[object Float32Array]"]=st["[object Float64Array]"]=st["[object Int8Array]"]=st["[object Int16Array]"]=st["[object Int32Array]"]=st["[object Map]"]=st["[object Number]"]=st["[object Object]"]=st["[object RegExp]"]=st["[object Set]"]=st["[object String]"]=st["[object Symbol]"]=st["[object Uint8Array]"]=st["[object Uint8ClampedArray]"]=st["[object Uint16Array]"]=st["[object Uint32Array]"]=!0,st["[object Error]"]=st[Aa]=st["[object WeakMap]"]=!1;var Ki=function o(t,e,n,i,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!B(t))return t;var u=Bt(t);if(u){if(a=Wp(t),!c)return na(t,a)}else{var h=Vn(t),m=h==Aa||h=="[object GeneratorFunction]";if(Object(Ln.a)(t))return Object(ea.a)(t,c);if(h==rf||h==Ca||m&&!r){if(a=l||m?{}:ka(t),!c)return l?jp(t,zp(a,t)):Rp(t,Pp(a,t))}else{if(!st[h])return r?t:{};a=Zp(t,h,c)}}s||(s=new Fn);var p=s.get(t);if(p)return p;s.set(t,a),of(t)?t.forEach(function(f){a.add(o(f,e,n,f,t,s))}):ef(t)&&t.forEach(function(f,C){a.set(C,o(f,e,n,C,t,s))});var k=u?void 0:(d?l?Fp:Ri:l?nn:Li)(t);return Sp(k||t,function(f,C){k&&(f=t[C=f]),Mi(a,C,o(f,e,n,C,t,s))}),a},_a=function(o,t){return Ki(o,5,t=typeof t=="function"?t:void 0)},pe=function(o){return Wt(o)&&o.nodeType===1&&!ge(o)};class va{constructor(t,e){this._config={},e&&this.define(ya(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(let t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(ge(e))return void this._setObjectToTarget(t,e,i);let r=e.split(".");e=r.pop();for(let s of r)ge(t[s])||(t[s]={}),t=t[s];if(ge(n))return ge(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){let n=e.split(".");e=n.pop();for(let i of n){if(!ge(t[i])){t=null;break}t=t[i]}return t?ya(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function ya(o){return _a(o,sf)}function sf(o){return pe(o)?o:void 0}function Yt(o){return!(!o||!o[Symbol.iterator])}class xt{constructor(t={},e={}){let n=Yt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(let i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new b.a("collection-add-item-invalid-index",this);for(let n=0;n<t.length;n++){let i=t[n],r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s)}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new b.a("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{let e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);let t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new b.a("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(n=>e(n)):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){let e=this._bindToCollection,n=(i,r,s)=>{let a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{let l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(let u of this._skippedIndexesFromExternal)s>u&&d--;for(let u of e._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let u=0;u<e._skippedIndexesFromExternal.length;u++)d<=e._skippedIndexesFromExternal[u]&&e._skippedIndexesFromExternal[u]++}};for(let i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{let a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){let e=this._idProperty,n;if(e in t){if(n=t[e],typeof n!="string")throw new b.a("collection-add-invalid-id",this);if(this.get(n))throw new b.a("collection-add-item-already-exists",this)}else t[e]=n=w();return n}_remove(t){let e,n,i,r=!1,s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new b.a("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);let a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}L(xt,V);class Gi{constructor(t,e=[],n=[]){this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(let i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(let[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(let t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){let e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new b.a("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){let i=this,r=this._context;(function p(k,f=new Set){k.forEach(C=>{c(C)&&(f.has(C)||(f.add(C),C.pluginName&&!i._availablePlugins.has(C.pluginName)&&i._availablePlugins.set(C.pluginName,C),C.requires&&p(C.requires,f)))})})(t),h(t);let s=[...function p(k,f=new Set){return k.map(C=>c(C)?C:i._availablePlugins.get(C)).reduce((C,x)=>f.has(x)?C:(f.add(x),x.requires&&(h(x.requires,x),p(x.requires,f).forEach(M=>C.add(M))),C.add(x)),new Set)}(t.filter(p=>!d(p,e)))];(function(p,k){for(let f of k){if(typeof f!="function")throw new b.a("plugincollection-replace-plugin-invalid-type",null,{pluginItem:f});let C=f.pluginName;if(!C)throw new b.a("plugincollection-replace-plugin-missing-name",null,{pluginItem:f});if(f.requires&&f.requires.length)throw new b.a("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:C});let x=i._availablePlugins.get(C);if(!x)throw new b.a("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:C});let M=p.indexOf(x);if(M===-1){if(i._contextPlugins.has(x))return;throw new b.a("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:C})}if(x.requires&&x.requires.length)throw new b.a("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:C});p.splice(M,1,f),i._availablePlugins.set(C,f)}})(s,n);let a=function(p){return p.map(k=>{let f=i._contextPlugins.get(k)||new k(r);return i._add(k,f),f})}(s);return m(a,"init").then(()=>m(a,"afterInit")).then(()=>a);function c(p){return typeof p=="function"}function l(p){return c(p)&&p.isContextPlugin}function d(p,k){return k.some(f=>f===p||u(p)===f||u(f)===p)}function u(p){return c(p)?p.pluginName||p.name:p}function h(p,k=null){p.map(f=>c(f)?f:i._availablePlugins.get(f)||f).forEach(f=>{(function(C,x){if(!c(C))throw x?new b.a("plugincollection-soft-required",r,{missingPlugin:C,requiredBy:u(x)}):new b.a("plugincollection-plugin-not-found",r,{plugin:C})})(f,k),function(C,x){if(l(x)&&!l(C))throw new b.a("plugincollection-context-required",r,{plugin:u(C),requiredBy:u(x)})}(f,k),function(C,x){if(x&&d(C,e))throw new b.a("plugincollection-required",r,{plugin:u(C),requiredBy:u(x)})}(f,k)})}function m(p,k){return p.reduce((f,C)=>C[k]?i._contextPlugins.has(C)?f:f.then(C[k].bind(C)):f,Promise.resolve())}}destroy(){let t=[];for(let[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);let n=t.pluginName;if(n){if(this._plugins.has(n))throw new b.a("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}function gt(o){return Array.isArray(o)?o:[o]}function af(o,t,e=1){if(typeof e!="number")throw new b.a("translation-service-quantity-not-a-number",null,{quantity:e});let n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);let i=t.id||t.string;if(n===0||!function(c,l){return!!window.CKEDITOR_TRANSLATIONS[c]&&!!window.CKEDITOR_TRANSLATIONS[c].dictionary[l]}(o,i))return e!==1?t.plural:t.string;let r=window.CKEDITOR_TRANSLATIONS[o].dictionary,s=window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(c=>c===1?0:1);if(typeof r[i]=="string")return r[i];let a=Number(s(e));return r[i][a]}L(Gi,V),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});let cf=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function xa(o){return cf.includes(o)?"rtl":"ltr"}class lf{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=xa(this.uiLanguage),this.contentLanguageDirection=xa(this.contentLanguage),this.t=(e,n)=>this._t(e,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=gt(e),typeof t=="string"&&(t={string:t});let n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(af(this.uiLanguage,t,n),e)}}class df{constructor(t){this.config=new va(t,this.constructor.defaultConfig);let e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Gi(this,e);let n=this.config.get("language")||{};this.locale=new lf({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new xt,this._contextOwner=null}initPlugins(){let t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(let n of t.concat(e)){if(typeof n!="function")throw new b.a("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new b.a("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new b.a("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){let t={};for(let e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{let n=new this(t);e(n.initPlugins().then(()=>n))})}}class Un{constructor(t){this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function St(o,t){let e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}L(Un,rt);var Da=function(o){return Ki(o,4)};class Ue{constructor(t){this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new b.a("view-node-not-found-in-parent",this);return t}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){let n=this.getAncestors(e),i=t.getAncestors(e),r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),n=t.getPath(),i=St(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){let t=Da(this);return delete t.parent,t}is(t){return t==="node"||t==="view:node"}}L(Ue,V);class nt extends Ue{constructor(t,e){super(t),this._textData=e}is(t){return t==="$text"||t==="view:$text"||t==="text"||t==="view:text"||t==="node"||t==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof nt&&(this===t||this.data===t.data)}_clone(){return new nt(this.document,this.data)}}class fe{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new b.a("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new b.a("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return t==="$textProxy"||t==="view:$textProxy"||t==="textProxy"||t==="view:textProxy"}getAncestors(t={includeSelf:!1,parentFirst:!1}){let e=[],n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function ke(o){return Yt(o)?new Map(o):function(t){let e=new Map;for(let n in t)e.set(n,t[n]);return e}(o)}class re{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),e.classes&&(typeof e.classes=="string"||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(let e of t)for(let n of this._patterns){let i=Ea(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){let e=[];for(let n of t)for(let i of this._patterns){let r=Ea(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;let t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Ea(o,t){if(typeof t=="function")return t(o);let e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?n.test(i):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){let r=[];for(let s in n){let a=n[s];if(!i.hasAttribute(s))return null;{let c=i.getAttribute(s);if(a===!0)r.push(s);else if(a instanceof RegExp){if(!a.test(c))return null;r.push(s)}else{if(c!==a)return null;r.push(s)}}}return r}(t.attributes,o),!e.attributes)?null:!(t.classes&&(e.classes=function(n,i){let r=[];for(let s of n)if(s instanceof RegExp){let a=i.getClassNames();for(let c of a)s.test(c)&&r.push(c);if(r.length===0)return null}else{if(!i.hasClass(s))return null;r.push(s)}return r}(t.classes,o),!e.classes))&&!(t.styles&&(e.styles=function(n,i){let r=[];for(let s in n){let a=n[s];if(!i.hasStyle(s))return null;{let c=i.getStyle(s);if(a instanceof RegExp){if(!a.test(c))return null;r.push(s)}else{if(c!==a)return null;r.push(s)}}}return r}(t.styles,o),!e.styles))&&e}var yo=function(o){return typeof o=="symbol"||Wt(o)&&Me(o)=="[object Symbol]"},uf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hf=/^\w*$/,mf=function(o,t){if(Bt(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!yo(o))||hf.test(o)||!uf.test(o)||t!=null&&o in Object(t)};function qi(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(qi.Cache||_o),e}qi.Cache=_o;var gf=qi,pf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ff=/\\(\\)?/g,kf=function(o){var t=gf(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(pf,function(e,n,i,r){t.push(i?r.replace(ff,"$1"):n||e)}),t}),bf=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i},Ma=Q?Q.prototype:void 0,Ta=Ma?Ma.toString:void 0,wf=function o(t){if(typeof t=="string")return t;if(Bt(t))return bf(t,o)+"";if(yo(t))return Ta?Ta.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Wi=function(o){return o==null?"":wf(o)},Yi=function(o,t){return Bt(o)?o:mf(o,t)?[o]:kf(Wi(o))},Cf=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},Qi=function(o){if(typeof o=="string"||yo(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},Sa=function(o,t){for(var e=0,n=(t=Yi(t,o)).length;o!=null&&e<n;)o=o[Qi(t[e++])];return e&&e==n?o:void 0},Ia=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},Af=function(o,t){return t.length<2?o:Sa(o,Ia(t,0,-1))},_f=function(o,t){return t=Yi(t,o),(o=Af(o,t))==null||delete o[Qi(Cf(t))]},vf=function(o,t){return o==null||_f(o,t)},xo=function(o,t,e){var n=o==null?void 0:Sa(o,t);return n===void 0?e:n},$i=function(o,t,e){(e!==void 0&&!zn(o[t],e)||e===void 0&&!(t in o))&&Ei(o,t,e)},yf=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[o?a:++i];if(e(r[c],c,r)===!1)break}return t}}(),xf=function(o){return Wt(o)&&po(o)},Ji=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},Df=function(o){return tn(o,nn(o))},Ef=function(o,t,e,n,i,r,s){var a=Ji(o,e),c=Ji(t,e),l=s.get(c);if(l)$i(o,e,l);else{var d=r?r(a,c,e+"",o,t,s):void 0,u=d===void 0;if(u){var h=Bt(c),m=!h&&Object(Ln.a)(c),p=!h&&!m&&Ni(c);d=c,h||m||p?Bt(a)?d=a:xf(a)?d=na(a):m?(u=!1,d=Object(ea.a)(c,!0)):p?(u=!1,d=pa(c,!0)):d=[]:ge(c)||Si(c)?(d=a,Si(a)?d=Df(a):B(a)&&!Re(a)||(d=ka(c))):u=!1}u&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),$i(o,e,d)}},Mf=function o(t,e,n,i,r){t!==e&&yf(e,function(s,a){if(r||(r=new Fn),B(s))Ef(t,e,a,n,o,i,r);else{var c=i?i(Ji(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),$i(t,a,c)}},nn)},Na=Fs(function(o,t,e){Mf(o,t,e)}),Tf=function(o,t,e,n){if(!B(o))return o;for(var i=-1,r=(t=Yi(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=Qi(t[i]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=B(d)?d:Ti(t[i+1])?[]:{})}Mi(a,c,l),a=a[c]}return o},Sf=function(o,t,e){return o==null?o:Tf(o,t,e)};class If{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){let t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();let e=Array.from(function(n){let i=null,r=0,s=0,a=null,c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){let d=n.charAt(l);if(i===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=d;break;case";":{let u=n.substr(s,l-s);a&&c.set(a.trim(),u.trim()),a=null,r=l+1;break}}else d===i&&(i=null)}return c}(t).entries());for(let[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;let e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(B(t))for(let[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){let e=Zi(t);vf(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!B(this._styles[t]))return this._styles[t];let e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(){return this.isEmpty?[]:this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){let t=[],e=Object.keys(this._styles);for(let n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){let e=t.split(".");if(!(e.length>1))return;let n=e.splice(0,e.length-1).join("."),i=xo(this._styles,n);i&&!Array.from(Object.keys(i)).length&&this.remove(n)}}class Nf{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(B(e))Xi(n,Zi(t),e);else if(this._normalizers.has(t)){let i=this._normalizers.get(t),{path:r,value:s}=i(e);Xi(n,r,s)}else Xi(n,t,e)}getNormalized(t,e){if(!t)return Na({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){let n=this._extractors.get(t);if(typeof n=="string")return xo(e,n);let i=n(t,e);if(i)return i}return xo(e,Zi(t))}getReducedForm(t,e){let n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(let n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Zi(o){return o.replace("-",".")}function Xi(o,t,e){let n=e;B(e)&&(n=Na({},xo(o,t),e)),Sf(o,t,n)}class Qt extends Ue{constructor(t,e,n,i){if(super(t),this.name=e,this._attrs=function(r){r=ke(r);for(let[s,a]of r)a===null?r.delete(s):typeof a!="string"&&r.set(s,String(a));return r}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){let r=this._attrs.get("class");Ba(this._classes,r),this._attrs.delete("class")}this._styles=new If(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._isAllowedInsideAttributeElement=!1}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}get isAllowedInsideAttributeElement(){return this._isAllowedInsideAttributeElement}is(t,e=null){return e?e===this.name&&(t==="element"||t==="view:element"):t==="element"||t==="view:element"||t==="node"||t==="view:node"}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*At(this._attrs.keys())}*getAttributes(){yield*At(this._attrs.entries()),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){let e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Qt))return!1;if(this===t)return!0;if(this.name!=t.name||this.isAllowedInsideAttributeElement!=t.isAllowedInsideAttributeElement||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(let[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(let e of this._classes)if(!t._classes.has(e))return!1;for(let e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(let e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(){return this._styles.getStyleNames()}hasStyle(...t){for(let e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){let e=new re(...t),n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*At(this._customProperties.entries())}getIdentity(){let t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}_clone(t=!1){let e=[];if(t)for(let i of this.getChildren())e.push(i._clone(t));let n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._isAllowedInsideAttributeElement=this.isAllowedInsideAttributeElement,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0,i=function(r,s){return typeof s=="string"?[new nt(r,s)]:(Yt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new nt(r,a):a instanceof fe?new nt(r,a.data):a))}(this.document,e);for(let r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),t=="class"?Ba(this._classes,e):t=="style"?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(let e of gt(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(let e of gt(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(let e of gt(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Ba(o,t){let e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}class Do extends Qt{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=Pa}is(t,e=null){return e?e===this.name&&(t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}}function Pa(){let o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(let e of o)if(!e.is("uiElement"))return null;return this.childCount}class Eo extends Do{constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}is(t,e=null){return e?e===this.name&&(t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}destroy(){this.stopListening()}}L(Eo,rt);let za=Symbol("rootName");class Bf extends Eo{constructor(t,e){super(t,e),this.rootName="main"}is(t,e=null){return e?e===this.name&&(t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}get rootName(){return this.getCustomProperty(za)}set rootName(t){this._setCustomProperty(za,t)}set _name(t){this.name=t}}class He{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new b.a("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new b.a("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=I._createAt(t.startPosition):this.position=I._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do i=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone(),e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof nt){if(t.isAtEnd)return this.position=I._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof Qt)return this.shallow?t.offset++:t=new I(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof nt){if(this.singleCharacters)return t=new I(i,0),this.position=t,this._next();{let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new fe(i,0,s),t=I._createAfter(r)):(r=new fe(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;let s=new fe(n,t.offset,r);return t.offset+=r,this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=I._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone(),e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof nt){if(t.isAtStart)return this.position=I._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof Qt)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new I(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof nt){if(this.singleCharacters)return t=new I(i,i.data.length),this.position=t,this._previous();{let r,s=i.data.length;if(i==this._boundaryStartParent){let a=this.boundaries.start.offset;r=new fe(i,a,i.data.length-a),s=r.data.length,t=I._createBefore(r)}else r=new fe(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{let a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;let s=new fe(n,t.offset,r);return this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=I._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof fe&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=I._createAfter(e.textNode):(i=I._createAfter(e.textNode),this.position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=I._createBefore(e.textNode):(i=I._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class I{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){let t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Eo);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){let e=I._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;let n=new He(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){let e=this.getAncestors(),n=t.getAncestors(),i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}is(t){return t==="position"||t==="view:position"}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";let e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);let i=St(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new He(t)}clone(){return new I(this.parent,this.offset)}static _createAt(t,e){if(t instanceof I)return new this(t.parent,t.offset);{let n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new b.a("view-createpositionat-offset-required",n)}return new I(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new I(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new b.a("view-position-after-root",t,{root:t});return new I(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new I(t.textNode,t.offsetInText);if(!t.parent)throw new b.a("view-position-before-root",t,{root:t});return new I(t.parent,t.index)}}class O{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*At(new He({boundaries:this,ignoreElementEnd:!0}))}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Mo,{direction:"backward"}),e=this.end.getLastMatchingPosition(Mo);return t.parent.is("$text")&&t.isAtStart&&(t=I._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=I._createAfter(e.parent)),new O(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Mo);if(t.isAfter(this.end)||t.isEqual(this.end))return new O(t,t);let e=this.end.getLastMatchingPosition(Mo,{direction:"backward"}),n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new I(n,0)),i&&i.is("$text")&&(e=new I(i,i.data.length)),new O(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new O(this.start,t.start)),this.containsPosition(t.end)&&e.push(new O(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new O(e,n)}return null}getWalker(t={}){return t.boundaries=this,new He(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new O(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new He(t);for(let n of e)yield n.item}*getPositions(t={}){t.boundaries=this;let e=new He(t);yield e.position;for(let n of e)yield n.nextPosition}is(t){return t==="range"||t==="view:range"}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new I(t,e),new I(n,i))}static _createFromPositionAndShift(t,e){let n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){let e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(I._createBefore(t),e)}}function Mo(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}function tr(o){let t=0;for(let e of o)t++;return t}class te{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;let t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(let t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let n=!1;for(let i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;let e=tr(this.getRanges());if(e!=tr(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(t,e,n){if(t===null)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof te||t instanceof er)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof O)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof I)this._setRanges([new O(t)]),this._setFakeOptions(e);else if(t instanceof Ue){let i=!!n&&!!n.backward,r;if(e===void 0)throw new b.a("view-selection-setto-required-second-parameter",this);r=e=="in"?O._createIn(t):e=="on"?O._createOn(t):new O(I._createAt(t,e)),this._setRanges([r],i),this._setFakeOptions(n)}else{if(!Yt(t))throw new b.a("view-selection-setto-not-selectable",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new b.a("view-selection-setfocus-no-ranges",this);let n=I._createAt(t,e);if(n.compareWith(this.focus)=="same")return;let i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new O(n,i),!0):this._addRange(new O(i,n)),this.fire("change")}is(t){return t==="selection"||t==="view:selection"}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(let n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof O))throw new b.a("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(let e of this._ranges)if(t.isIntersecting(e))throw new b.a("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new O(t.start,t.end))}}L(te,V);class er{constructor(t=null,e,n){this._selection=new te,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*At(this._selection.getRanges())}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return t==="selection"||t=="documentSelection"||t=="view:selection"||t=="view:documentSelection"}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}L(er,V);class To extends y{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}let nr=Symbol("bubbling contexts");var Pf={fire(o,...t){try{let e=o instanceof y?o:new y(this,o),n=or(this);if(!n.size)return;if(Hn(e,"capturing",this),ln(n,"$capture",e,...t))return e.return;let i=e.startRange||this.selection.getFirstRange(),r=i?i.getContainedElement():null,s=!!r&&!!La(n,r),a=r||function(c){if(!c)return null;let l=c.start.parent,d=c.end.parent,u=l.getPath(),h=d.getPath();return u.length>h.length?l:d}(i);if(Hn(e,"atTarget",a),!s){if(ln(n,"$text",e,...t))return e.return;Hn(e,"bubbling",a)}for(;a;){if(a.is("rootElement")){if(ln(n,"$root",e,...t))return e.return}else if(a.is("element")&&ln(n,a.name,e,...t))return e.return;if(ln(n,a,e,...t))return e.return;a=a.parent,Hn(e,"bubbling",a)}return Hn(e,"bubbling",this),ln(n,"$document",e,...t),e.return}catch(e){b.a.rethrowUnexpectedError(e,this)}},_addEventListener(o,t,e){let n=gt(e.context||"$document"),i=or(this);for(let r of n){let s=i.get(r);s||(s=Object.create(V),i.set(r,s)),this.listenTo(s,o,t,e)}},_removeEventListener(o,t){let e=or(this);for(let n of e.values())this.stopListening(n,o,t)}};function Hn(o,t,e){o instanceof To&&(o._eventPhase=t,o._currentTarget=e)}function ln(o,t,e,...n){let i=typeof t=="string"?o.get(t):La(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function La(o,t){for(let[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function or(o){return o[nr]||(o[nr]=new Map),o[nr]}class Kn{constructor(t){this.selection=new er,this.roots=new xt({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(let n of this._postFixers)if(e=n(t),e)break;while(e)}}L(Kn,Pf),L(Kn,rt);class dn extends Qt{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=zf,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new b.a("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(t,e=null){return e?e===this.name&&(t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"):t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){let e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function zf(){if(ir(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(ir(o)>1)return null;o=o.parent}return!o||ir(o)>1?null:this.childCount}function ir(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}dn.DEFAULT_PRIORITY=10;class Oa extends Qt{constructor(t,e,n,i){super(t,e,n,i),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Lf}is(t,e=null){return e?e===this.name&&(t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"):t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Ue||Array.from(e).length>0))throw new b.a("view-emptyelement-cannot-add",[this,e])}}function Lf(){return null}let Gn=navigator.userAgent.toLowerCase();var Ct={isMac:function(o){return o.indexOf("macintosh")>-1}(Gn),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(Gn),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(Gn),isAndroid:function(o){return o.indexOf("android")>-1}(Gn),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(Gn),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};let Of={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Rf={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},G=function(){let o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){let e=String.fromCharCode(t);o[e.toLowerCase()]=t}for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;return o}(),jf=Object.fromEntries(Object.entries(G).map(([o,t])=>[t,o.charAt(0).toUpperCase()+o.slice(1)]));function se(o){let t;if(typeof o=="string"){if(t=G[o.toLowerCase()],!t)throw new b.a("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?G.alt:0)+(o.ctrlKey?G.ctrl:0)+(o.shiftKey?G.shift:0)+(o.metaKey?G.cmd:0);return t}function rr(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return se(e.slice(0,-1));let n=se(e);return Ct.isMac&&n==G.ctrl?G.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Ra(o){let t=rr(o);return Object.entries(Ct.isMac?Of:Rf).reduce((e,[n,i])=>(t&G[n]&&(t&=~G[n],e+=i),e),"")+(t?jf[t]:"")}function ja(o,t){let e=t==="ltr";switch(o){case G.arrowleft:return e?"left":"right";case G.arrowright:return e?"right":"left";case G.arrowup:return"up";case G.arrowdown:return"down"}}function Fa(o,t){let e=ja(o,t);return e==="down"||e==="right"}class Va extends Qt{constructor(t,e,n,i){super(t,e,n,i),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Vf}is(t,e=null){return e?e===this.name&&(t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"):t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Ue||Array.from(e).length>0))throw new b.a("view-uielement-cannot-add",this)}render(t){return this.toDomElement(t)}toDomElement(t){let e=t.createElement(this.name);for(let n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function Ff(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==G.arrowright){let s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){let c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let u=!1,h=d.getLastMatchingPosition(m=>(m.item.is("uiElement")&&(u=!0),!(!m.item.is("uiElement")&&!m.item.is("attributeElement"))));if(u){let m=r.viewPositionToDom(h);a?s.collapse(m.parent,m.offset):s.extend(m.parent,m.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function Vf(){return null}class Ua extends Qt{constructor(t,e,n,i){super(t,e,n,i),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Uf}is(t,e=null){return e?e===this.name&&(t==="rawElement"||t==="view:rawElement"||t==="element"||t==="view:element"):t==="rawElement"||t==="view:rawElement"||t===this.name||t==="view:"+this.name||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Ue||Array.from(e).length>0))throw new b.a("view-rawelement-cannot-add",[this,e])}}function Uf(){return null}class Ke{constructor(t,e){this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="view:documentFragment"}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0,i=function(r,s){return typeof s=="string"?[new nt(r,s)]:(Yt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new nt(r,a):a instanceof fe?new nt(r,a.data):a))}(this.document,e);for(let r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}L(Ke,V);class Ha{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new Ke(this.document,t)}createText(t){return new nt(this.document,t)}createAttributeElement(t,e,n={}){let i=new dn(this.document,t,e);return n.priority&&(i._priority=n.priority),n.id&&(i._id=n.id),i}createContainerElement(t,e,n={}){let i=new Do(this.document,t,e);return n.isAllowedInsideAttributeElement!==void 0&&(i._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),i}createEditableElement(t,e){let n=new Eo(this.document,t,e);return n._document=this.document,n}createEmptyElement(t,e,n={}){let i=new Oa(this.document,t,e);return n.isAllowedInsideAttributeElement!==void 0&&(i._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),i}createUIElement(t,e,n,i={}){let r=new Va(this.document,t,e);return n&&(r.render=n),i.isAllowedInsideAttributeElement!==void 0&&(r._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),r}createRawElement(t,e,n,i={}){let r=new Ua(this.document,t,e);return r.render=n||(()=>{}),i.isAllowedInsideAttributeElement!==void 0&&(r._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof I?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){let e=t.parent;if(!e.is("containerElement"))throw new b.a("view-writer-break-non-container-element",this.document);if(!e.parent)throw new b.a("view-writer-break-root",this.document);if(t.isAtStart)return I._createBefore(e);if(!t.isAtEnd){let n=e._clone(!1);this.insert(I._createAfter(e),n);let i=new O(t,I._createAt(e,"end")),r=new I(n,0);this.move(i,r)}return I._createAfter(e)}mergeAttributes(t){let e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){let s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new I(s,a))}let i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return Ga(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){let s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new I(i,s))}return t}mergeContainers(t){let e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new b.a("view-writer-merge-containers-invalid-position",this.document);let i=e.getChild(e.childCount-1),r=i instanceof nt?I._createAt(i,"end"):I._createAt(e,"end");return this.move(O._createIn(n),I._createAt(e,"end")),this.remove(O._createOn(n)),r}insert(t,e){qa(e=Yt(e)?[...e]:[e],this.document);let n=e.reduce((s,a)=>{let c=s[s.length-1],l=!(a.is("uiElement")&&a.isAllowedInsideAttributeElement);return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]),i=null,r=t;for(let{nodes:s,breakAttributes:a}of n){let c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new O(i,r):new O(t)}remove(t){let e=t instanceof O?t:O._createOn(t);if(qn(e,this.document),e.isCollapsed)return new Ke(this.document);let{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(let l of a)this._removeFromClonedElementsGroup(l);let c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new Ke(this.document,a)}clear(t,e){qn(t,this.document);let n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(let i of n){let r=i.item,s;if(r.is("element")&&e.isSimilar(r))s=O._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){let a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=O._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){let i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof dn))throw new b.a("view-writer-wrap-invalid-attribute",this.document);if(qn(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);let r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new O(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof dn))throw new b.a("view-writer-unwrap-invalid-attribute",this.document);if(qn(t,this.document),t.isCollapsed)return t;let{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;let c=this.mergeAttributes(s.end);return new O(a,c)}rename(t,e){let n=new Do(this.document,t,e.getAttributes());return this.insert(I._createAfter(e),n),this.move(O._createIn(e),I._createAt(n,0)),this.remove(O._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return I._createAt(t,e)}createPositionAfter(t){return I._createAfter(t)}createPositionBefore(t){return I._createBefore(t)}createRange(t,e){return new O(t,e)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(t,e,n){return new te(t,e,n)}_insertNodes(t,e,n){let i,r;if(i=n?sr(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new b.a("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?ar(t):t;let s=i._insertChild(r.offset,e);for(let d of e)this._addToClonedElementsGroup(d);let a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;let l=this.mergeAttributes(a);return new O(c,l)}_wrapChildren(t,e,n,i){let r=e,s=[];for(;r<n;){let c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement"),u=c.isAllowedInsideAttributeElement;if(d&&this._wrapAttributeElement(i,c))s.push(new I(t,r));else if(l||u||d&&Hf(i,c)){let h=i._clone();c._remove(),h._appendChild(c),t._insertChild(r,h),this._addToClonedElementsGroup(h),s.push(new I(t,r))}else d&&this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(let c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return O._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e,s=[];for(;r<n;){let c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){let l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new I(t,r),new I(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(i,c)?(s.push(new I(t,r),new I(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(let c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return O._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){let{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;let c=this.mergeAttributes(s.end);return new O(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Ka(t.clone());t.parent.is("$text")&&(t=ar(t));let n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);let i=new O(t,t.getShiftedBy(1));this.wrap(i,e);let r=new I(n.parent,n.index);n._remove();let s=r.nodeBefore,a=r.nodeAfter;return s instanceof nt&&a instanceof nt?Ga(s,a):Ka(r)}_wrapAttributeElement(t,e){if(!Wa(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(let n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(let n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(let n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(let n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Wa(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(let n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(let n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(let n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){let n=t.start,i=t.end;if(qn(t,this.document),t.isCollapsed){let c=this._breakAttributes(t.start,e);return new O(c,c)}let r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new O(a,r)}_breakAttributes(t,e=!1){let n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new b.a("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new b.a("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new b.a("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&cr(i.parent)||cr(i))return t.clone();if(i.is("$text"))return this._breakAttributes(ar(t),e);if(n==i.childCount){let r=new I(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){let r=new I(i.parent,i.index);return this._breakAttributes(r,e)}{let r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);let a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);let l=new I(i.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(let i of t.getChildren())this._addToClonedElementsGroup(i);let e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(let i of t.getChildren())this._removeFromClonedElementsGroup(i);let e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n&&n.delete(t)}}function sr(o){let t=o.parent;for(;!cr(t);){if(!t)return;t=t.parent}return t}function Hf(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Ka(o){let t=o.nodeBefore;if(t&&t.is("$text"))return new I(t,t.data.length);let e=o.nodeAfter;return e&&e.is("$text")?new I(e,0):o}function ar(o){if(o.offset==o.parent.data.length)return new I(o.parent.parent,o.parent.index+1);if(o.offset===0)return new I(o.parent.parent,o.parent.index);let t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new nt(o.root.document,t)),new I(o.parent.parent,o.parent.index+1)}function Ga(o,t){let e=o.data.length;return o._data+=t.data,t._remove(),new I(o,e)}function qa(o,t){for(let e of o){if(!Kf.some(n=>e instanceof n))throw new b.a("view-writer-insert-invalid-node-type",t);e.is("$text")||qa(e.getChildren(),t)}}let Kf=[nt,dn,Do,Oa,Ua,Va];function cr(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function qn(o,t){let e=sr(o.start),n=sr(o.end);if(!e||!n||e!==n)throw new b.a("view-writer-invalid-range-container",t)}function Wa(o,t){return o.id===null&&t.id===null}function It(o){return Object.prototype.toString.call(o)=="[object Text]"}let Ya=o=>o.createTextNode("\xA0"),Qa=o=>{let t=o.createElement("span");return t.dataset.ckeFiller=!0,t.innerHTML="\xA0",t},$a=o=>{let t=o.createElement("br");return t.dataset.ckeFiller=!0,t},So="\u2060".repeat(7);function Kt(o){return It(o)&&o.data.substr(0,7)===So}function Io(o){return o.data.length==7&&Kt(o)}function lr(o){return Kt(o)?o.data.slice(7):o.data}function Gf(o,t){if(t.keyCode==G.arrowleft){let e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){let n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;Kt(n)&&i<=7&&e.collapse(n,0)}}}function Ja(o,t,e,n=!1){e=e||function(r,s){return r===s},Array.isArray(o)||(o=Array.prototype.slice.call(o)),Array.isArray(t)||(t=Array.prototype.slice.call(t));let i=function(r,s,a){let c=Za(r,s,a);if(c===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};let l=Xa(r,c),d=Xa(s,c),u=Za(l,d,a),h=r.length-u,m=s.length-u;return{firstIndex:c,lastIndexOld:h,lastIndexNew:m}}(o,t,e);return n?function(r,s){let{firstIndex:a,lastIndexOld:c,lastIndexNew:l}=r;if(a===-1)return Array(s).fill("equal");let d=[];return a>0&&(d=d.concat(Array(a).fill("equal"))),l-a>0&&(d=d.concat(Array(l-a).fill("insert"))),c-a>0&&(d=d.concat(Array(c-a).fill("delete"))),l<s&&(d=d.concat(Array(s-l).fill("equal"))),d}(i,t.length):function(r,s){let a=[],{firstIndex:c,lastIndexOld:l,lastIndexNew:d}=s;return d-c>0&&a.push({index:c,type:"insert",values:r.slice(c,d)}),l-c>0&&a.push({index:c+(d-c),type:"delete",howMany:l-c}),a}(t,i)}function Za(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function Xa(o,t){return o.slice(t).reverse()}function Te(o,t,e){e=e||function(k,f){return k===f};let n=o.length,i=t.length;if(n>200||i>200||n+i>300)return Te.fastDiff(o,t,e,!0);let r,s;if(i<n){let k=o;o=t,t=k,r="delete",s="insert"}else r="insert",s="delete";let a=o.length,c=t.length,l=c-a,d={},u={};function h(k){let f=(u[k-1]!==void 0?u[k-1]:-1)+1,C=u[k+1]!==void 0?u[k+1]:-1,x=f>C?-1:1;d[k+x]&&(d[k]=d[k+x].slice(0)),d[k]||(d[k]=[]),d[k].push(f>C?r:s);let M=Math.max(f,C),N=M-k;for(;N<a&&M<c&&e(o[N],t[M]);)N++,M++,d[k].push("equal");return M}let m,p=0;do{for(m=-p;m<l;m++)u[m]=h(m);for(m=l+p;m>l;m--)u[m]=h(m);u[l]=h(l),p++}while(u[l]!==c);return d[l].slice(1)}function tc(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function ec(o){let t=o.parentNode;t&&t.removeChild(o)}function un(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}Te.fastDiff=Ja;class nc{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new b.a("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){let t;for(let e of this.markedChildren)this._updateChildrenMappings(e);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(let e of this.markedAttributes)this._updateAttrs(e);for(let e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(let e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){let e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;Kt(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=oc(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){let e=this.domConverter.mapViewToDom(t);if(!e)return;let n=this.domConverter.mapViewToDom(t).childNodes,i=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findReplaceActions(r,n,i);if(s.indexOf("replace")!==-1){let a={equal:0,insert:0,delete:0};for(let c of s)if(c==="replace"){let l=a.equal+a.insert,d=a.equal+a.delete,u=t.getChild(l);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,n[d]),ec(i[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){let t=this.selection.getFirstPosition();return t.parent.is("$text")?I._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&It(e.parent)&&Kt(e.parent))}_removeInlineFiller(){let t=this._inlineFiller;if(!Kt(t))throw new b.a("view-renderer-filler-was-lost",this);Io(t)?t.parentNode.removeChild(t):t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;let a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;let i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof nt||r instanceof nt)}_updateText(t,e){let n=this.domConverter.findCorrespondingDomText(t),i=this.domConverter.viewToDom(t,n.ownerDocument),r=n.data,s=i.data,a=e.inlineFillerPosition;if(a&&a.parent==t.parent&&a.offset==t.index&&(s=So+s),r!=s){let c=Ja(r,s);for(let l of c)l.type==="insert"?n.insertData(l.index,l.values.join("")):n.deleteData(l.index,l.howMany)}}_updateAttrs(t){let e=this.domConverter.mapViewToDom(t);if(!e)return;let n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(let r of i)e.setAttribute(r,t.getAttribute(r));for(let r of n)t.hasAttribute(r)||e.removeAttribute(r)}_updateChildren(t,e){let n=this.domConverter.mapViewToDom(t);if(!n)return;let i=e.inlineFillerPosition,r=this.domConverter.mapViewToDom(t).childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:i}));i&&i.parent===t&&oc(n.ownerDocument,s,i.offset);let a=this._diffNodeLists(r,s),c=0,l=new Set;for(let d of a)d==="delete"?(l.add(r[c]),ec(r[c])):d==="equal"&&c++;c=0;for(let d of a)d==="insert"?(tc(n,c,s[c]),c++):d==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[c])),c++);for(let d of l)d.parentNode||this.domConverter.unbindDomElement(d)}_diffNodeLists(t,e){return Te(t=function(n,i){let r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),e,qf.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let i=[],r=[],s=[],a={equal:0,insert:0,delete:0};for(let c of t)c==="insert"?s.push(n[a.equal+a.insert]):c==="delete"?r.push(e[a.equal+a.delete]):(i=i.concat(Te(r,s,ic).map(l=>l==="equal"?"replace":l)),i.push("equal"),r=[],s=[]),a[c]++;return i.concat(Te(r,s,ic).map(c=>c==="equal"?"replace":c))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(let e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();let t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){let e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){let a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(e));let n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";let i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){let e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;let n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),Ct.isGecko&&function(r,s){let a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;let c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;let e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){let e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(let t of this.domDocuments)if(t.getSelection().rangeCount){let e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}_removeFakeSelection(){let t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){let t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function oc(o,t,e){let n=t instanceof Array?t:t.childNodes,i=n[e];if(It(i))return i.data=So+i.data,i;{let r=o.createTextNode(So);return Array.isArray(t)?n.splice(e,0,r):tc(t,e,r),r}}function ic(o,t){return un(o)&&un(t)&&!It(o)&&!It(t)&&o.nodeType!==Node.COMMENT_NODE&&t.nodeType!==Node.COMMENT_NODE&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function qf(o,t,e){return t===e||(It(t)&&It(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}L(nc,rt);var lt={window,document};function dr(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function Wn(o){let t=[];for(;o&&o.nodeType!=Node.DOCUMENT_NODE;)t.unshift(o),o=o.parentNode;return t}let Wf=$a(document),Yf=Ya(document),Qf=Qa(document);class No{constructor(t,e={}){this.document=t,this.blockFillerMode=e.blockFillerMode||"br",this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6","li","dd","dt","figcaption","td","th"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new re,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new te(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){let e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(let n of t.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("$text")){let i=this._processDataFromViewText(t);return e.createTextNode(i)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let i;if(t.is("documentFragment"))i=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(i,t);else{if(t.is("uiElement"))return i=t.render(e),n.bind&&this.bindElements(i,t),i;i=t.hasAttribute("xmlns")?e.createElementNS(t.getAttribute("xmlns"),t.name):e.createElement(t.name),t.is("rawElement")&&t.render(i),n.bind&&this.bindElements(i,t);for(let r of t.getAttributeKeys())i.setAttribute(r,t.getAttribute(r))}if(n.withChildren!==!1)for(let r of this.viewChildrenToDom(t,e,n))i.appendChild(r);return i}}*viewChildrenToDom(t,e,n={}){let i=t.getFillerOffset&&t.getFillerOffset(),r=0;for(let s of t.getChildren())i===r&&(yield this._getBlockFiller(e)),yield this.viewToDom(s,e,n),r++;i===r&&(yield this._getBlockFiller(e))}viewRangeToDom(t){let e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=document.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){let e=t.parent;if(e.is("$text")){let n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Kt(n)&&(i+=7),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{let s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(t.nodeBefore),!i)return null;n=i.parentNode,r=i.nextSibling}return It(r)&&Kt(r)?{parent:r,offset:7}:{parent:n,offset:i?dr(i)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;let n=this.getHostViewElement(t);if(n)return n;if(It(t)){if(Io(t))return null;{let i=this._processDataFromDomText(t);return i===""?null:new nt(this.document,i)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let i;if(this.isDocumentFragment(t))i=new Ke(this.document),e.bind&&this.bindDocumentFragments(t,i);else{let r=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();i=new Qt(this.document,r),e.bind&&this.bindElements(t,i);let s=t.attributes;for(let a=s.length-1;a>=0;a--)i._setAttribute(s[a].name,s[a].value);if(e.withChildren!==!1&&this._rawContentElementMatcher.match(i))return i._setCustomProperty("$rawContent",t.innerHTML),this._encounteredRawContentDomNodes.add(t),i}if(e.withChildren!==!1)for(let r of this.domChildrenToView(t,e))i._appendChild(r);return i}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){let i=t.childNodes[n],r=this.domToView(i,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;It(i)&&(i=i.parentNode);let r=this.fakeSelectionToView(i);if(r)return r}let e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){let r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new te(n,{backward:e})}domRangeToView(t){let e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new O(e,n):null}domPositionToView(t,e){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,dr(t));let n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return I._createBefore(n);if(It(t)){if(Io(t))return this.domPositionToView(t.parentNode,dr(t));let i=this.findCorrespondingViewText(t),r=e;return i?(Kt(t)&&(r-=7,r=r<0?0:r),new I(i,r)):null}if(e===0){let i=this.mapDomToView(t);if(i)return new I(i,0)}else{let i=t.childNodes[e-1],r=It(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new I(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Io(t))return null;let e=this.getHostViewElement(t);if(e)return e;let n=t.previousSibling;if(n){if(!this.isElement(n))return null;let i=this.mapDomToView(n);if(i)return i.nextSibling instanceof nt?i.nextSibling:null}else{let i=this.mapDomToView(t.parentNode);if(i){let r=i.getChild(0);return r instanceof nt?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){let e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){let e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){let{scrollX:n,scrollY:i}=lt.window,r=[];rc(e,s=>{let{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),rc(e,s=>{let[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),lt.window.scrollTo(n,i)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(Wf):!(t.tagName!=="BR"||!sc(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(Qf)||function(e,n){return e.isEqualNode(Yf)&&sc(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;let e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);let n=e.collapsed;return e.detach(),n}getHostViewElement(t){let e=Wn(t);for(e.pop();e.length;){let n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(t){switch(this.blockFillerMode){case"nbsp":return Ya(t);case"markedNbsp":return Qa(t);case"br":return $a(t)}}_isDomSelectionPositionCorrect(t,e){if(It(t)&&Kt(t)&&e<7||this.isElement(t)&&Kt(t.childNodes[e]))return!1;let n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){let n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){let n=this._getTouchingViewTextNode(t,!0);e.charAt(e.length-2)!=" "&&n&&n.data.charAt(0)!=" "||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;let e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(ur(t,this.preElements))return lr(t);e=e.replace(/[ \n\t\r]{1,}/g," ");let n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),s=this._checkShouldRightTrimDomText(t,i);return r&&(e=e.replace(/^ /,"")),s&&(e=e.replace(/ $/,"")),e=lr(new Text(e)),e=e.replace(/ \u00A0/g,"  "),(/( |\u00A0)\u00A0$/.test(e)||!i||i.data&&i.data.charAt(0)==" ")&&(e=e.replace(/\u00A0$/," ")),r&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||!!pe(e)||!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1))}_checkShouldRightTrimDomText(t,e){return!e&&!Kt(t)}_getTouchingViewTextNode(t,e){let n=new He({startPosition:e?I._createAfter(t):I._createBefore(t),direction:e?"forward":"backward"});for(let i of n){if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;let n=e?"nextNode":"previousNode",i=t.ownerDocument,r=Wn(t)[0],s=i.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:c=>It(c)||c.tagName=="BR"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});s.currentNode=t;let a=s[n]();if(a!==null){let c=function(l,d){let u=Wn(l),h=Wn(d),m=0;for(;u[m]==h[m]&&u[m];)m++;return m===0?null:u[m-1]}(t,a);if(c&&!ur(t,this.blockElements,c)&&!ur(a,this.blockElements,c))return a}return null}}function ur(o,t,e){let n=Wn(o);return e&&(n=n.slice(n.indexOf(e)+1)),n.some(i=>i.tagName&&t.includes(i.tagName.toLowerCase()))}function rc(o,t){for(;o&&o!=lt.document;)t(o),o=o.parentNode}function sc(o,t){let e=o.parentNode;return e&&e.tagName&&t.includes(e.tagName.toLowerCase())}function Bo(o){let t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}var hn=On({},V,{listenTo(o,...t){if(un(o)||Bo(o)){let e=this._getProxyEmitter(o)||new hr(o);e.attach(...t),o=e}V.listenTo.call(this,o,...t)},stopListening(o,t,e){if(un(o)||Bo(o)){let n=this._getProxyEmitter(o);if(!n)return;o=n}V.stopListening.call(this,o,t,e),o instanceof hr&&o.detach(t)},_getProxyEmitter(o){return t=this,e=ac(o),t[R]&&t[R][e]?t[R][e].emitter:null;var t,e}});class hr{constructor(t){bt(this,ac(t)),this._domNode=t}}function ac(o){return o["data-ck-expando"]||(o["data-ck-expando"]=w())}On(hr.prototype,V,{attach(o,t,e={}){if(this._domListeners&&this._domListeners[o])return;let n={capture:!!e.useCapture,passive:!!e.usePassive},i=this._createDomListener(o,n);this._domNode.addEventListener(o,i,n),this._domListeners||(this._domListeners={}),this._domListeners[o]=i},detach(o){let t;!this._domListeners[o]||(t=this._events[o])&&t.callbacks.length||this._domListeners[o].removeListener()},_createDomListener(o,t){let e=n=>{this.fire(o,n)};return e.removeListener=()=>{this._domNode.removeEventListener(o,e,t),delete this._domListeners[o]},e}});class be{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}L(be,hn);var $f=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},Jf=function(o){return this.__data__.has(o)};function Po(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new _o;++t<e;)this.add(o[t])}Po.prototype.add=Po.prototype.push=$f,Po.prototype.has=Jf;var Zf=Po,Xf=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},tk=function(o,t){return o.has(t)},cc=function(o,t,e,n,i,r){var s=1&e,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(t);if(l&&d)return l==t&&d==o;var u=-1,h=!0,m=2&e?new Zf:void 0;for(r.set(o,t),r.set(t,o);++u<a;){var p=o[u],k=t[u];if(n)var f=s?n(k,p,u,t,o,r):n(p,k,u,o,t,r);if(f!==void 0){if(f)continue;h=!1;break}if(m){if(!Xf(t,function(C,x){if(!tk(m,x)&&(p===C||i(p,C,e,n,r)))return m.push(x)})){h=!1;break}}else if(p!==k&&!i(p,k,e,n,r)){h=!1;break}}return r.delete(o),r.delete(t),h},ek=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},nk=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e},lc=Q?Q.prototype:void 0,mr=lc?lc.valueOf:void 0,ok=function(o,t,e,n,i,r,s){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new vo(o),new vo(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return zn(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var a=ek;case"[object Set]":var c=1&n;if(a||(a=nk),o.size!=t.size&&!c)return!1;var l=s.get(o);if(l)return l==t;n|=2,s.set(o,t);var d=cc(a(o),a(t),n,i,r,s);return s.delete(o),d;case"[object Symbol]":if(mr)return mr.call(o)==mr.call(t)}return!1},ik=Object.prototype.hasOwnProperty,rk=function(o,t,e,n,i,r){var s=1&e,a=Ri(o),c=a.length;if(c!=Ri(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:ik.call(t,d)))return!1}var u=r.get(o),h=r.get(t);if(u&&h)return u==t&&h==o;var m=!0;r.set(o,t),r.set(t,o);for(var p=s;++l<c;){var k=o[d=a[l]],f=t[d];if(n)var C=s?n(f,k,d,t,o,r):n(k,f,d,o,t,r);if(!(C===void 0?k===f||i(k,f,e,n,r):C)){m=!1;break}p||(p=d=="constructor")}if(m&&!p){var x=o.constructor,M=t.constructor;x==M||!("constructor"in o)||!("constructor"in t)||typeof x=="function"&&x instanceof x&&typeof M=="function"&&M instanceof M||(m=!1)}return r.delete(o),r.delete(t),m},dc="[object Arguments]",uc="[object Array]",zo="[object Object]",hc=Object.prototype.hasOwnProperty,sk=function(o,t,e,n,i,r){var s=Bt(o),a=Bt(t),c=s?uc:Vn(o),l=a?uc:Vn(t),d=(c=c==dc?zo:c)==zo,u=(l=l==dc?zo:l)==zo,h=c==l;if(h&&Object(Ln.a)(o)){if(!Object(Ln.a)(t))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new Fn),s||Ni(o)?cc(o,t,e,n,i,r):ok(o,t,c,e,n,i,r);if(!(1&e)){var m=d&&hc.call(o,"__wrapped__"),p=u&&hc.call(t,"__wrapped__");if(m||p){var k=m?o.value():o,f=p?t.value():t;return r||(r=new Fn),i(k,f,e,n,r)}}return!!h&&(r||(r=new Fn),rk(o,t,e,n,i,r))},mc=function o(t,e,n,i,r){return t===e||(t==null||e==null||!Wt(t)&&!Wt(e)?t!=t&&e!=e:sk(t,e,n,i,o,r))},ak=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?mc(o,t,void 0,e):!!n};class gc extends be{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(let t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;let e=this.domConverter,n=new Map,i=new Set;for(let l of t)if(l.type==="childList"){let d=e.mapDomToView(l.target);if(d&&(d.is("uiElement")||d.is("rawElement")))continue;d&&!this._isBogusBrMutation(l)&&i.add(d)}for(let l of t){let d=e.mapDomToView(l.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&l.type==="characterData"){let u=e.findCorrespondingViewText(l.target);u&&!i.has(u.parent)?n.set(u,{type:"text",oldText:u.data,newText:lr(l.target),node:u}):!u&&Kt(l.target)&&i.add(e.mapDomToView(l.target.parentNode))}}let r=[];for(let l of n.values())this.renderer.markToSync("text",l.node),r.push(l);for(let l of i){let d=e.mapViewToDom(l),u=Array.from(l.getChildren()),h=Array.from(e.domChildrenToView(d,{withChildren:!1}));ak(u,h,c)||(this.renderer.markToSync("children",l),r.push({type:"children",oldChildren:u,newChildren:h,node:l}))}let s=t[0].target.ownerDocument.getSelection(),a=null;if(s&&s.anchorNode){let l=e.domPositionToView(s.anchorNode,s.anchorOffset),d=e.domPositionToView(s.focusNode,s.focusOffset);l&&d&&(a=new te(l),a.setFocus(d))}function c(l,d){if(!Array.isArray(l))return l===d||!(!l.is("$text")||!d.is("$text"))&&l.data===d.data}r.length&&(this.document.fire("mutations",r,a),this.view.forceRender())}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class gr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,On(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Se extends be{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new gr(this.view,e,n))}}class ck extends Se{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return se(this)}})}}var pr=function(){return W.a.Date.now()},lk=/\s/,dk=function(o){for(var t=o.length;t--&&lk.test(o.charAt(t)););return t},uk=/^\s+/,hk=function(o){return o&&o.slice(0,dk(o)+1).replace(uk,"")},mk=/^[-+]0x[0-9a-f]+$/i,gk=/^0b[01]+$/i,pk=/^0o[0-7]+$/i,fk=parseInt,pc=function(o){if(typeof o=="number")return o;if(yo(o))return NaN;if(B(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=B(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=hk(o);var e=gk.test(o);return e||pk.test(o)?fk(o.slice(2),e?2:8):mk.test(o)?NaN:+o},kk=Math.max,bk=Math.min,fr=function(o,t,e){var n,i,r,s,a,c,l=0,d=!1,u=!1,h=!0;if(typeof o!="function")throw new TypeError("Expected a function");function m(M){var N=n,q=i;return n=i=void 0,l=M,s=o.apply(q,N)}function p(M){return l=M,a=setTimeout(f,t),d?m(M):s}function k(M){var N=M-c;return c===void 0||N>=t||N<0||u&&M-l>=r}function f(){var M=pr();if(k(M))return C(M);a=setTimeout(f,function(N){var q=t-(N-c);return u?bk(q,r-(N-l)):q}(M))}function C(M){return a=void 0,h&&n?m(M):(n=i=void 0,s)}function x(){var M=pr(),N=k(M);if(n=arguments,i=this,c=M,N){if(a===void 0)return p(c);if(u)return clearTimeout(a),a=setTimeout(f,t),m(c)}return a===void 0&&(a=setTimeout(f,t)),s}return t=pc(t)||0,B(e)&&(d=!!e.leading,r=(u="maxWait"in e)?kk(pc(e.maxWait)||0,t):r,h="trailing"in e?!!e.trailing:h),x.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},x.flush=function(){return a===void 0?s:C(pr())},x};class wk extends be{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=fr(e=>this.document.fire("selectionChangeDone",e),200)}observe(){let t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){let e=this.document.selection,n=new te(e.getRanges(),{backward:e.isBackward,fake:!1});t!=G.arrowleft&&t!=G.arrowup||n.setTo(n.getFirstPosition()),t!=G.arrowright&&t!=G.arrowdown||n.setTo(n.getLastPosition());let i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class Ck extends be{constructor(t){super(t),this.mutationObserver=t.getObserver(gc),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=fr(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){let e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",(n,i)=>{this._handleSelectionChange(i,e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;let n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();let i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(i))this.view.forceRender();else{let r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Ak extends Se{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;let e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.forceRender(),50)}),e.on("blur",(n,i)=>{let r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,t.forceRender())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class _k extends Se{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];let e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class vk extends Se{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}class yk{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}var fc=function(o){return typeof o=="string"||!Bt(o)&&Wt(o)&&Me(o)=="[object String]"};function Lo(o){return Object.prototype.toString.apply(o)=="[object Range]"}function kc(o){let t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}let bc=["top","right","bottom","left","width","height"];class ${constructor(t){let e=Lo(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),pe(t)||e)if(e){let n=$.getDomRangeRects(t);Oo(this,$.getBoundingRect(n))}else Oo(this,t.getBoundingClientRect());else if(Bo(t)){let{innerWidth:n,innerHeight:i}=t;Oo(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Oo(this,t)}clone(){return new $(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){let e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new $(e)}getIntersectionArea(t){let e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){let t=this._source,e=this.clone();if(!wc(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!wc(n);){let i=new $(n),r=e.getIntersection(i);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(let e of bc)if(this[e]!==t[e])return!1;return!0}contains(t){let e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){let t=this._source,e,n,i;if(Bo(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{let r=kc(this._source);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){let e=[],n=Array.from(t.getClientRects());if(n.length)for(let i of n)e.push(new $(i));else{let i=t.startContainer;It(i)&&(i=i.parentNode);let r=new $(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){let e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY},n=0;for(let i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new $(e))}}function Oo(o,t){for(let e of bc)o[e]=t[e]}function wc(o){return!!pe(o)&&o===o.ownerDocument.body}class dt{constructor(t,e){dt._observerInstance||dt._createObserver(),this._element=t,this._callback=e,dt._addElementCallback(t,e),dt._observerInstance.observe(t)}destroy(){dt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){dt._elementCallbacks||(dt._elementCallbacks=new Map);let n=dt._elementCallbacks.get(t);n||(n=new Set,dt._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){let n=dt._getElementCallbacks(t);n&&(n.delete(e),n.size||(dt._elementCallbacks.delete(t),dt._observerInstance.unobserve(t))),dt._elementCallbacks&&!dt._elementCallbacks.size&&(dt._observerInstance=null,dt._elementCallbacks=null)}static _getElementCallbacks(t){return dt._elementCallbacks?dt._elementCallbacks.get(t):null}static _createObserver(){let t;t=typeof lt.window.ResizeObserver=="function"?lt.window.ResizeObserver:Cc,dt._observerInstance=new t(e=>{for(let n of e){let i=dt._getElementCallbacks(n.target);if(i)for(let r of i)r(n)}})}}dt._observerInstance=null,dt._elementCallbacks=null;class Cc{constructor(t){this._callback=t,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(t){this._elements.add(t),this._checkElementRectsAndExecuteCallback(),this._elements.size===1&&this._startPeriodicCheck()}unobserve(t){this._elements.delete(t),this._previousRects.delete(t),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){let t=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(t,100)};this.listenTo(lt.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(t,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){let t=[];for(let e of this._elements)this._hasRectChanged(e)&&t.push({target:e,contentRect:this._previousRects.get(e)});t.length&&this._callback(t)}_hasRectChanged(t){if(!t.ownerDocument.body.contains(t))return!1;let e=new $(t),n=this._previousRects.get(t),i=!n||!n.isEqual(e);return this._previousRects.set(t,e),i}}function mn(o){return t=>t+o}function Pt(o){let t=o.next();return t.done?null:t.value}L(Cc,hn);class zt{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new b.a("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}L(zt,hn),L(zt,rt);class $t{constructor(){this._listener=Object.create(hn)}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+se(n),n)})}set(t,e,n={}){let i=rr(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+se(t),t)}destroy(){this._listener.stopListening()}}class xk extends be{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((i=n.keyCode)==G.arrowright||i==G.arrowleft||i==G.arrowup||i==G.arrowdown)){let r=new To(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var i})}observe(){}}function Ac({target:o,viewportOffset:t=0}){let e=kr(o),n=e,i=null;for(;n;){let r;r=Ec(n==e?o:i),_c(r,()=>Mc(o,n));let s=Mc(o,n);if(Dk(n,s,t),n.parent!=n){if(i=n.frameElement,n=n.parent,!i)return}else n=null}}function Dk(o,t,e){let n=t.clone().moveBy(0,e),i=t.clone().moveBy(0,-e),r=new $(o).excludeScrollbarsAndBorders();if(![i,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=o;yc(i,r)?a-=r.top-t.top+e:vc(n,r)&&(a+=t.bottom-r.bottom+e),xc(t,r)?s-=r.left-t.left+e:Dc(t,r)&&(s+=t.right-r.right+e),o.scrollTo(s,a)}}function _c(o,t){let e=kr(o),n,i;for(;o!=e.document.body;)i=t(),n=new $(o).excludeScrollbarsAndBorders(),n.contains(i)||(yc(i,n)?o.scrollTop-=n.top-i.top:vc(i,n)&&(o.scrollTop+=i.bottom-n.bottom),xc(i,n)?o.scrollLeft-=n.left-i.left:Dc(i,n)&&(o.scrollLeft+=i.right-n.right)),o=o.parentNode}function vc(o,t){return o.bottom>t.bottom}function yc(o,t){return o.top<t.top}function xc(o,t){return o.left<t.left}function Dc(o,t){return o.right>t.right}function kr(o){return Lo(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Ec(o){if(Lo(o)){let t=o.commonAncestorContainer;return It(t)&&(t=t.parentNode),t}return o.parentNode}function Mc(o,t){let e=kr(o),n=new $(o);if(e===t)return n;{let i=e;for(;i!=t;){let r=i.frameElement,s=new $(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}Object.assign({},{scrollViewportToShowTarget:Ac,scrollAncestorsToShowTarget:function(o){_c(Ec(o),()=>new $(o))}});class Tc{constructor(t){this.document=new Kn(t),this.domConverter=new No(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new nc(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Ha(this.document),this.addObserver(gc),this.addObserver(Ck),this.addObserver(Ak),this.addObserver(ck),this.addObserver(wk),this.addObserver(_k),this.addObserver(xk),Ct.isAndroid&&this.addObserver(vk),this.document.on("arrowKey",Gf,{priority:"low"}),Ff(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){let n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();let i={};for(let{name:s,value:a}of Array.from(t.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,i);let r=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(let s of this._observers.values())s.observe(t,e)}detachDomRoot(t){let e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:i})=>e.removeAttribute(i));let n=this._initialDomRootAttributes.get(e);for(let i in n)e.setAttribute(i,n[i]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(let[n,i]of this.domRoots)e.observe(i,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(let t of this._observers.values())t.disable()}enableObservers(){for(let t of this._observers.values())t.enable()}scrollToTheSelection(){let t=this.document.selection.getFirstRange();t&&Ac({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){let t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new b.a("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;let e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){b.a.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(let t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return I._createAt(t,e)}createPositionAfter(t){return I._createAfter(t)}createPositionBefore(t){return I._createBefore(t)}createRange(t,e){return new O(t,e)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(t,e,n){return new te(t,e,n)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}L(Tc,rt);class Ge{constructor(t){this.parent=null,this._attrs=ke(t)}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new b.a("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new b.a("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){let t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){let t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){let t=[],e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){let n=this.getAncestors(e),i=t.getAncestors(e),r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;let e=this.getPath(),n=t.getPath(),i=St(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){let t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}is(t){return t==="node"||t==="model:node"}_clone(){return new Ge(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=ke(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class ot extends Ge{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return t==="$text"||t==="model:$text"||t==="text"||t==="model:text"||t==="node"||t==="model:node"}toJSON(){let t=super.toJSON();return t.data=this.data,t}_clone(){return new ot(this.data,this.getAttributes())}static fromJSON(t){return new ot(t.data,t.attributes)}}class ae{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new b.a("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new b.a("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(t){return t==="$textProxy"||t==="model:$textProxy"||t==="textProxy"||t==="model:textProxy"}getPath(){let t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){let e=[],n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class gn{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){let e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){let e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;let e=this._nodes[t];if(!e)throw new b.a("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(let n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new b.a("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(let n of e)if(!(n instanceof Ge))throw new b.a("model-nodelist-insertnodes-not-node",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class et extends Ge{constructor(t,e,n){super(e),this.name=t,this._children=new gn,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="model:element"):t==="element"||t==="model:element"||t==="node"||t==="model:node"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(let n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={includeSelf:!1}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){let t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(let e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){let e=t?Array.from(this._children).map(n=>n._clone(!0)):null;return new et(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let n=function(i){return typeof i=="string"?[new ot(i)]:(Yt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new ot(r):r instanceof ae?new ot(r.data,r.getAttributes()):r))}(e);for(let i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){let n=this._children._removeNodes(t,e);for(let i of n)i.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(let n of t.children)n.name?e.push(et.fromJSON(n)):e.push(ot.fromJSON(n))}return new et(t.name,t.attributes,e)}}class we{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new b.a("model-tree-walker-no-start-position",null);let e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new b.a("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=T._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,r;do i=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let i=e.parent,r=pn(e,i),s=r||br(e,i,r);if(s instanceof et)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=s),this.position=e,qe("elementStart",s,t,e,1);if(s instanceof ot){let a;if(this.singleCharacters)a=1;else{let d=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<d&&(d=this.boundaries.end.offset),a=d-e.offset}let c=e.offset-s.startOffset,l=new ae(s,c,a);return e.offset+=a,this.position=e,qe("text",l,t,e,a)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():qe("elementEnd",n,t,e)}_previous(){let t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let i=e.parent,r=pn(e,i),s=r||Sc(e,i,r);if(s instanceof et)return e.offset--,this.shallow?(this.position=e,qe("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this.position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():qe("elementEnd",s,t,e));if(s instanceof ot){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=e.offset-d}let c=e.offset-s.startOffset,l=new ae(s,c-a,a);return e.offset-=a,this.position=e,qe("text",l,t,e,a)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,qe("elementStart",n,t,e,1)}}function qe(o,t,e,n,i){return{done:!1,value:{type:o,item:t,previousPosition:e,nextPosition:n,length:i}}}class T{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new b.a("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new b.a("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new b.a("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new b.a("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return pn(this,this.parent)}get nodeAfter(){let t=this.parent;return br(this,t,pn(this,t))}get nodeBefore(){let t=this.parent;return Sc(this,t,pn(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";let e=St(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;let n=new we(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){let t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){let e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];let e=St(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){let e=this.getAncestors(),n=t.getAncestors(),i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}getShiftedBy(t){let e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=T._createAt(this),n=T._createAt(t);break;case"after":e=T._createAt(t),n=T._createAt(this);break;default:return!1}let i=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==i.maxOffset)return!1;e.path=e.path.slice(0,-1),i=i.parent,e.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(t){return t==="position"||t==="model:position"}hasSameParentAs(t){return this.root!==t.root?!1:St(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=T._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){let e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){let e=t.movedRange,n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?T._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){let n=T._createAt(this);if(this.root!=t.root)return n;if(St(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(St(t.getParentPath(),this.getParentPath())=="prefix"){let i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){let n=T._createAt(this);if(this.root!=t.root)return n;if(St(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(St(t.getParentPath(),this.getParentPath())=="prefix"){let i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return T._createAt(this);let i=this._getTransformedByDeletion(t,n);return i===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){let n=t.path.length-1,i=T._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof T)return new T(t.root,t.path,t.stickiness);{let i=t;if(e=="end")e=i.maxOffset;else{if(e=="before")return this._createBefore(i,n);if(e=="after")return this._createAfter(i,n);if(e!==0&&!e)throw new b.a("model-createpositionat-offset-required",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new b.a("model-position-parent-incorrect",[this,t]);let r=i.getPath();return r.push(e),new this(i.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new b.a("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new b.a("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){let n=new T(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new b.a("model-position-fromjson-no-root",e,{rootName:t.root});return new T(e.getRoot(t.root),t.path,t.stickiness)}}function pn(o,t){let e=t.getChild(t.offsetToIndex(o.offset));return e&&e.is("$text")&&e.startOffset<o.offset?e:null}function br(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset))}function Sc(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset)-1)}class E{constructor(t,e=null){this.start=T._createAt(t),this.end=e?T._createAt(e):T._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*At(new we({boundaries:this,ignoreElementEnd:!0}))}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return St(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);let n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){let e=T._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return t==="range"||t==="model:range"}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){let e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new E(this.start,t.start)),this.containsPosition(t.end)&&e.push(new E(t.end,this.end))):e.push(new E(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new E(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return t.start.isBefore(i)&&(i=t.start),t.end.isAfter(r)&&(r=t.end),new E(i,r)}getMinimalFlatRanges(){let t=[],e=this.start.getCommonPath(this.end).length,n=T._createAt(this.start),i=n.parent;for(;n.path.length>e+1;){let r=i.maxOffset-n.offset;r!==0&&t.push(new E(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){let r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new E(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new we(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;let e=new we(t);for(let n of e)yield n.item}*getPositions(t={}){t.boundaries=this;let e=new we(t);yield e.position;for(let n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new E(this.start,this.end)]}getTransformedByOperations(t){let e=[new E(this.start,this.end)];for(let n of t)for(let i=0;i<e.length;i++){let r=e[i].getTransformedByOperation(n);e.splice(i,1,...r),i+=r.length-1}for(let n=0;n<e.length;n++){let i=e[n];for(let r=n+1;r<e.length;r++){let s=e[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){let n=t.sourcePosition,i=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,i,e)}_getTransformedBySplitOperation(t){let e=this.start._getTransformedBySplitOperation(t),n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new E(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new E(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=T._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new E(e,n)):new E(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new E(this.start,t),new E(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{let i=new E(this.start,this.end);return i.start=i.start._getTransformedByInsertion(t,e),i.end=i.end._getTransformedByInsertion(t,e),[i]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){let u=this.start._getTransformedByMove(t,e,n);return[new E(u)]}let r=E._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){let u=this.start._getTransformedByMove(t,e,n),h=this.end._getTransformedByMove(t,e,n);return[new E(u,h)]}let a,c=this.getDifference(r),l=null,d=this.getIntersection(r);if(c.length==1?l=new E(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(l=new E(this.start,this.end._getTransformedByDeletion(t,n))),a=l?l._getTransformedByInsertion(s,n,d!==null||i):[],d){let u=new E(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,u):a.push(u)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return n==null&&i==null?null:(n==null&&(n=t),i==null&&(i=t),new E(n,i))}static _createFromPositionAndShift(t,e){let n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(T._createAt(t,0),T._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(T._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new b.a("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();let e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);let n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(i.start);r++)i.start=T._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(i.end);r++)i.end=T._createAt(t[r].end);return i}static fromJSON(t,e){return new this(T.fromJSON(t.start,e),T.fromJSON(t.end,e))}}class wr{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;let n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;let n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=T._createAt(i,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){let e=this.toModelElement(t);if(this._viewToModelMapping.delete(t),this._elementToMarkerNames.has(t))for(let n of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(n);this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){let e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){let n=this._markerNameToElements.get(e)||new Set;n.add(t);let i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){let n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));let i=this._elementToMarkerNames.get(t);i&&(i.delete(e),i.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){let t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new E(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new O(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){let e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){let n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){let e=this._markerNameToElements.get(t);if(!e)return null;let n=new Set;for(let i of e)if(i.is("attributeElement"))for(let r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let i=0;for(let r=0;r<e;r++)i+=this.getModelLength(t.getChild(r));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(let n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,i=0,r=0,s=0;if(t.is("$text"))return new I(t,e);for(;r<e;)n=t.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==e?this._moveViewPositionToTextNode(new I(t,s)):this.findPositionIn(n,e-(r-i))}_moveViewPositionToTextNode(t){let e=t.nodeBefore,n=t.nodeAfter;return e instanceof nt?new I(e,e.data.length):n instanceof nt?new I(n,0):t}}L(wr,V);class Ro{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=jo(e),t instanceof ae&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=jo(e),t instanceof ae&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=jo(e),t instanceof ae&&(t=this._getSymbolForTextProxy(t));let n=this._consumable.get(t);if(n===void 0)return null;let i=n.get(e);return i===void 0?null:i}revert(t,e){e=jo(e),t instanceof ae&&(t=this._getSymbolForTextProxy(t));let n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}_getSymbolForTextProxy(t){let e=null,n=this._textProxyRegistry.get(t.startOffset);if(n){let i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){let i=Symbol("textProxySymbol"),r,s;return r=this._textProxyRegistry.get(t),r||(r=new Map,this._textProxyRegistry.set(t,r)),s=r.get(e),s||(s=new Map,r.set(e,s)),s.set(n,i),i}}function jo(o){let t=o.split(":");return t.length>1?t[0]+":"+t[1]:t[0]}class Cr{constructor(t){this.conversionApi=Object.assign({dispatcher:this},t),this._reconversionEventsMapping=new Map}convertChanges(t,e,n){for(let r of t.getMarkersToRemove())this.convertMarkerRemove(r.name,r.range,n);let i=this._mapChangesWithAutomaticReconversion(t);for(let r of i)r.type==="insert"?this.convertInsert(E._createFromPositionAndShift(r.position,r.length),n):r.type==="remove"?this.convertRemove(r.position,r.length,r.name,n):r.type==="reconvert"?this.reconvertElement(r.element,n):this.convertAttribute(r.range,r.attributeKey,r.attributeOldValue,r.attributeNewValue,n);for(let r of this.conversionApi.mapper.flushUnboundMarkerNames()){let s=e.get(r).getRange();this.convertMarkerRemove(r,s,n),this.convertMarkerAdd(r,s,n)}for(let r of t.getMarkersToAdd())this.convertMarkerAdd(r.name,r.range,n)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(let n of Array.from(t).map(Ic))this._convertInsertWithAttributes(n);this._clearConversionApi()}convertRemove(t,e,n,i){this.conversionApi.writer=i,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,i,r){this.conversionApi.writer=r,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(let s of t){let a={item:s.item,range:E._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,a)}this._clearConversionApi()}reconvertElement(t,e){let n=E._createOn(t);this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(n);let i=this.conversionApi.mapper,r=i.toViewElement(t);e.remove(r),this._convertInsertWithAttributes({item:t,range:n});let s=i.toViewElement(t);for(let a of E._createIn(t)){let{item:c}=a,l=Mk(c,i);l?l.root!==s.root&&e.move(e.createRangeOn(l),i.toViewPosition(T._createBefore(c))):this._convertInsertWithAttributes(Ic(a))}i.unbindViewElement(r),this._clearConversionApi()}convertSelection(t,e,n){let i=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,i),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(let r of i){let s=r.getRange();if(!Ek(t.getFirstPosition(),r,this.conversionApi.mapper))continue;let a={item:t,markerName:r.name,markerRange:s};this.conversionApi.consumable.test(t,"addMarker:"+r.name)&&this.fire("addMarker:"+r.name,a,this.conversionApi)}for(let r of t.getAttributeKeys()){let s={item:t,range:t.getFirstRange(),attributeKey:r,attributeOldValue:null,attributeNewValue:t.getAttribute(r)};this.conversionApi.consumable.test(t,"attribute:"+s.attributeKey)&&this.fire("attribute:"+s.attributeKey+":$text",s,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;this.conversionApi.writer=n;let i="addMarker:"+t,r=new Ro;if(r.add(e,i),this.conversionApi.consumable=r,this.fire(i,{markerName:t,markerRange:e},this.conversionApi),r.test(e,i)){this.conversionApi.consumable=this._createConsumableForRange(e,i);for(let s of e.getItems()){if(!this.conversionApi.consumable.test(s,i))continue;let a={item:s,range:E._createOn(s),markerName:t,markerRange:e};this.fire(i,a,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_mapReconversionTriggerEvent(t,e){this._reconversionEventsMapping.set(e,t)}_createInsertConsumable(t){let e=new Ro;for(let n of t){let i=n.item;e.add(i,"insert");for(let r of i.getAttributeKeys())e.add(i,"attribute:"+r)}return e}_createConsumableForRange(t,e){let n=new Ro;for(let i of t.getItems())n.add(i,e);return n}_createSelectionConsumable(t,e){let n=new Ro;n.add(t,"selection");for(let i of e)n.add(t,"addMarker:"+i.name);for(let i of t.getAttributeKeys())n.add(t,"attribute:"+i);return n}_testAndFire(t,e){this.conversionApi.consumable.test(e.item,t)&&this.fire(function(n,i){let r=i.item.name||"$text";return`${n}:${r}`}(t,e),e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}_convertInsertWithAttributes(t){this._testAndFire("insert",t);for(let e of t.item.getAttributeKeys())t.attributeKey=e,t.attributeOldValue=null,t.attributeNewValue=t.item.getAttribute(e),this._testAndFire(`attribute:${e}`,t)}_mapChangesWithAutomaticReconversion(t){let e=new Set,n=[];for(let i of t.getChanges()){let r=i.position||i.range.start,s=r.parent;if(pn(r,s)){n.push(i);continue}let a=i.type==="attribute"?br(r,s,null):s;if(a.is("$text")){n.push(i);continue}let c;if(c=i.type==="attribute"?`attribute:${i.attributeKey}:${a.name}`:`${i.type}:${i.name}`,this._isReconvertTriggerEvent(c,a.name)){if(e.has(a))continue;e.add(a),n.push({type:"reconvert",element:a})}else n.push(i)}return n}_isReconvertTriggerEvent(t,e){return this._reconversionEventsMapping.get(t)===e}}function Ek(o,t,e){let n=t.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Ic(o){return{item:o.item,range:E._createFromPositionAndShift(o.previousPosition,o.length)}}function Mk(o,t){if(o.is("textProxy")){let e=t.toViewPosition(T._createBefore(o)).parent;return e.is("$text")?e:null}return t.toViewElement(o)}L(Cr,V);class Ce{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){let t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(let e of this._ranges){let n=!1;for(let i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(let t of this._ranges)yield new E(t.start,t.end)}getFirstRange(){let t=null;for(let e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new E(t.start,t.end):null}getLastRange(){let t=null;for(let e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new E(t.start,t.end):null}getFirstPosition(){let t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){let t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(t===null)this._setRanges([]);else if(t instanceof Ce)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof E)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof T)this._setRanges([new E(t)]);else if(t instanceof Ge){let i=!!n&&!!n.backward,r;if(e=="in")r=E._createIn(t);else if(e=="on")r=E._createOn(t);else{if(e===void 0)throw new b.a("model-selection-setto-required-second-parameter",[this,t]);r=new E(T._createAt(t,e))}this._setRanges([r],i)}else{if(!Yt(t))throw new b.a("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){let n=(t=Array.from(t)).some(i=>{if(!(i instanceof E))throw new b.a("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(r=>!r.isEqual(i))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(let i of t)this._pushRange(i);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(this.anchor===null)throw new b.a("model-selection-setfocus-no-ranges",[this,t]);let n=T._createAt(t,e);if(n.compareWith(this.focus)=="same")return;let i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new E(n,i)),this._lastRangeBackward=!0):(this._pushRange(new E(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(t){return t==="selection"||t==="model:selection"}*getSelectedBlocks(){let t=new WeakSet;for(let e of this.getRanges()){let n=Bc(e.start,t);n&&Ar(n,e)&&(yield n);for(let r of e.getWalker()){let s=r.item;r.type=="elementEnd"&&Tk(s,t,e)&&(yield s)}let i=Bc(e.end,t);i&&!e.end.isTouching(T._createAt(i,0))&&Ar(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){let e=T._createAt(t,0),n=T._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new E(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new b.a("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Nc(o,t){return!t.has(o)&&(t.add(o),o.root.document.model.schema.isBlock(o)&&o.parent)}function Tk(o,t,e){return Nc(o,t)&&Ar(o,e)}function Bc(o,t){let e=o.parent.root.document.model.schema,n=o.parent.getAncestors({parentFirst:!0,includeSelf:!0}),i=!1,r=n.find(s=>!i&&(i=e.isLimit(s),!i&&Nc(s,t)));return n.forEach(s=>t.add(s)),r}function Ar(o,t){let e=function(n){let i=n.root.document.model.schema,r=n.parent;for(;r;){if(i.isBlock(r))return r;r=r.parent}}(o);return e?!t.containsRange(E._createOn(e),!0):!0}L(Ce,V);class ce extends E{constructor(t,e){super(t,e),Sk.call(this)}detach(){this.stopListening()}is(t){return t==="liveRange"||t==="model:liveRange"||t=="range"||t==="model:range"}toRange(){return new E(this.start,this.end)}static fromRange(t){return new ce(t.start,t.end)}}function Sk(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{let e=t[0];e.isDocumentOperation&&Ik.call(this,e)},{priority:"low"})}function Ik(o){let t=this.getTransformedByOperation(o),e=E._createFromRanges(t),n=!e.isEqual(this),i=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,o),r=null;if(n){e.root.rootName=="$graveyard"&&(r=o.type=="remove"?o.sourcePosition:o.deletionPosition);let s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}L(ce,V);let Yn="selection:";class ee{constructor(t){this._selection=new Nk(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}is(t){return t==="selection"||t=="model:selection"||t=="documentSelection"||t=="model:documentSelection"}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return Yn+t}static _isStoreAttributeKey(t){return t.startsWith(Yn)}}L(ee,V);class Nk extends Ce{constructor(t){super(),this.markers=new xt({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,n)=>{let i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(let e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new b.a("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(i,r){let s=i.document.differ;for(let a of s.getChanges()){if(a.type!="insert")continue;let c=a.position.parent;a.length===c.maxOffset&&i.enqueueChange(r,l=>{let d=Array.from(c.getAttributeKeys()).filter(u=>u.startsWith(Yn));for(let u of d)l.removeAttribute(u,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*At(super.getRanges()):yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this._updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){let n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){let e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){let t=w();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new b.a("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(t){let e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;let e=ce.fromRange(t);return e.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;let s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}_updateMarkers(){if(!this._observedMarkers.size)return;let t=[],e=!1;for(let i of this._model.markers){let r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;let s=i.getRange();for(let a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(i)}let n=Array.from(this.markers);for(let i of t)this.markers.has(i)||(this.markers.add(i),e=!0);for(let i of Array.from(this.markers))t.includes(i)||(this.markers.remove(i),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){let n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1,r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(let c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),i=!0):!a&&s&&(this.markers.remove(t),i=!0)}else s&&(this.markers.remove(t),i=!0);i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){let e=ke(this._getSurroundingAttributes()),n=ke(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(let[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);let i=[];for(let[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||i.push(r);for(let[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){let i=n?"normal":"low";return i=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0)}_removeAttribute(t,e=!0){let n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){let e=new Set;for(let[n,i]of this.getAttributes())t.get(n)!==i&&this._removeAttribute(n,!1);for(let[n,i]of t)this._setAttribute(n,i,!1)&&e.add(n);return e}*_getStoredAttributes(){let t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(let e of t.getAttributeKeys())e.startsWith(Yn)&&(yield[e.substr(Yn.length),t.getAttribute(e)])}_getSurroundingAttributes(){let t=this.getFirstPosition(),e=this._model.schema,n=null;if(this.isCollapsed){let i=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Fo(i)),n||(n=Fo(r)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!e.isInline(s)&&!n;)s=s.previousSibling,n=Fo(s)}if(!n){let s=r;for(;s&&!e.isInline(s)&&!n;)s=s.nextSibling,n=Fo(s)}n||(n=this._getStoredAttributes())}else{let i=this.getFirstRange();for(let r of i){if(r.item.is("element")&&e.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){let e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function Fo(o){return o instanceof ae||o instanceof ot?o.getAttributes():null}class Pc{constructor(t){this._dispatchers=t}add(t){for(let e of this._dispatchers)t(e);return this}}var le=function(o){return Ki(o,5)};class Bk extends Pc{elementToElement(t){return this.add(function(e){return(e=le(e)).view=Vo(e.view,"container"),n=>{var i;if(n.on("insert:"+e.model,(i=e.view,(r,s,a)=>{let c=i(s.item,a);if(!c||!a.consumable.consume(s.item,"insert"))return;let l=a.mapper.toViewPosition(s.range.start);a.mapper.bindElements(s.item,c),a.writer.insert(l,c)}),{priority:e.converterPriority||"normal"}),e.triggerBy){if(e.triggerBy.attributes)for(let r of e.triggerBy.attributes)n._mapReconversionTriggerEvent(e.model,`attribute:${r}:${e.model}`);if(e.triggerBy.children)for(let r of e.triggerBy.children)n._mapReconversionTriggerEvent(e.model,`insert:${r}`),n._mapReconversionTriggerEvent(e.model,`remove:${r}`)}}}(t))}attributeToElement(t){return this.add(function(e){e=le(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(let r of e.model.values)e.view[r]=Vo(e.view[r],"attribute");else e.view=Vo(e.view,"attribute");let i=Oc(e);return r=>{r.on(n,function(s){return(a,c,l)=>{let d=s(c.attributeOldValue,l),u=s(c.attributeNewValue,l);if(!d&&!u||!l.consumable.consume(c.item,a.name))return;let h=l.writer,m=h.document.selection;if(c.item instanceof Ce||c.item instanceof ee)h.wrap(m.getFirstRange(),u);else{let p=l.mapper.toViewRange(c.range);c.attributeOldValue!==null&&d&&(p=h.unwrap(p,d)),c.attributeNewValue!==null&&u&&h.wrap(p,u)}}}(i),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=le(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(let r of e.model.values)e.view[r]=Rc(e.view[r]);else e.view=Rc(e.view);let i=Oc(e);return r=>{var s;r.on(n,(s=i,(a,c,l)=>{let d=s(c.attributeOldValue,l),u=s(c.attributeNewValue,l);if(!d&&!u||!l.consumable.consume(c.item,a.name))return;let h=l.mapper.toViewElement(c.item),m=l.writer;if(!h)throw new b.a("conversion-attribute-to-attribute-on-text",[c,l]);if(c.attributeOldValue!==null&&d)if(d.key=="class"){let p=gt(d.value);for(let k of p)m.removeClass(k,h)}else if(d.key=="style"){let p=Object.keys(d.value);for(let k of p)m.removeStyle(k,h)}else m.removeAttribute(d.key,h);if(c.attributeNewValue!==null&&u)if(u.key=="class"){let p=gt(u.value);for(let k of p)m.addClass(k,h)}else if(u.key=="style"){let p=Object.keys(u.value);for(let k of p)m.setStyle(k,u.value[k],h)}else m.setAttribute(u.key,u.value,h)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){return(e=le(e)).view=Vo(e.view,"ui"),n=>{var i;n.on("addMarker:"+e.model,(i=e.view,(r,s,a)=>{s.isOpening=!0;let c=i(s,a);s.isOpening=!1;let l=i(s,a);if(!c||!l)return;let d=s.markerRange;if(d.isCollapsed&&!a.consumable.consume(d,r.name))return;for(let m of d)if(!a.consumable.consume(m.item,r.name))return;let u=a.mapper,h=a.writer;h.insert(u.toViewPosition(d.start),c),a.mapper.bindElementToMarker(c,s.markerName),d.isCollapsed||(h.insert(u.toViewPosition(d.end),l),a.mapper.bindElementToMarker(l,s.markerName)),r.stop()}),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,(e.view,(r,s,a)=>{let c=a.mapper.markerNameToElements(s.markerName);if(c){for(let l of c)a.mapper.unbindElementFromMarkerName(l,s.markerName),a.writer.clear(a.writer.createRangeOn(l),l);a.writer.clearClonedElementsGroup(s.markerName),r.stop()}}),{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var i;n.on("addMarker:"+e.model,(i=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof Ce||s.item instanceof ee||s.item.is("$textProxy")))return;let c=_r(i,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;let l=a.writer,d=zc(l,c),u=l.document.selection;if(s.item instanceof Ce||s.item instanceof ee)l.wrap(u.getFirstRange(),d,u);else{let h=a.mapper.toViewRange(s.range),m=l.wrap(h,d);for(let p of m.getItems())if(p.is("attributeElement")&&p.isSimilar(d)){a.mapper.bindElementToMarker(p,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on("addMarker:"+e.model,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof et))return;let l=_r(r,a,c);if(!l||!c.consumable.test(a.item,s.name))return;let d=c.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(let u of E._createIn(a.item))c.consumable.consume(u.item,s.name);d.getCustomProperty("addHighlight")(d,l,c.writer),c.mapper.bindElementToMarker(d,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;let l=_r(r,a,c);if(!l)return;let d=zc(c.writer,l),u=c.mapper.markerNameToElements(a.markerName);if(u){for(let h of u)c.mapper.unbindElementFromMarkerName(h,a.markerName),h.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(h),d):h.getCustomProperty("removeHighlight")(h,l.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){let n=(e=le(e)).model;return e.view||(e.view=i=>({group:n,name:i.substr(e.model.length+1)})),i=>{var r;i.on("addMarker:"+n,(r=e.view,(s,a,c)=>{let l=r(a.markerName,c);if(!l)return;let d=a.markerRange;c.consumable.consume(d,s.name)&&(Lc(d,!1,c,a,l),Lc(d,!0,c,a,l),s.stop())}),{priority:e.converterPriority||"normal"}),i.on("removeMarker:"+n,function(s){return(a,c,l)=>{let d=s(c.markerName,l);if(!d)return;let u=l.mapper.markerNameToElements(c.markerName);if(u){for(let m of u)l.mapper.unbindElementFromMarkerName(m,c.markerName),m.is("containerElement")?(h(`data-${d.group}-start-before`,m),h(`data-${d.group}-start-after`,m),h(`data-${d.group}-end-before`,m),h(`data-${d.group}-end-after`,m)):l.writer.clear(l.writer.createRangeOn(m),m);l.writer.clearClonedElementsGroup(c.markerName),a.stop()}function h(m,p){if(p.hasAttribute(m)){let k=new Set(p.getAttribute(m).split(","));k.delete(d.name),k.size==0?l.writer.removeAttribute(m,p):l.writer.setAttribute(m,Array.from(k).join(","),p)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}}function zc(o,t){let e=o.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),t.priority&&(e._priority=t.priority),e._id=t.id,e}function Lc(o,t,e,n,i){let r=t?o.start:o.end;if(e.schema.checkChild(r,"$text"))(function(s,a,c,l,d){let u=`${d.group}-${a?"start":"end"}`,h=d.name?{name:d.name}:null,m=c.writer.createUIElement(u,h);c.writer.insert(s,m),c.mapper.bindElementToMarker(m,l.markerName)})(e.mapper.toViewPosition(r),t,e,n,i);else{let s,a;t&&r.nodeAfter||!t&&!r.nodeBefore?(s=r.nodeAfter,a=!0):(s=r.nodeBefore,a=!1),function(c,l,d,u,h,m){let p=`data-${m.group}-${l?"start":"end"}-${d?"before":"after"}`,k=c.hasAttribute(p)?c.getAttribute(p).split(","):[];k.unshift(m.name),u.writer.setAttribute(p,k.join(","),c),u.mapper.bindElementToMarker(c,h.markerName)}(e.mapper.toViewElement(s),t,a,e,n,i)}}function Vo(o,t){return typeof o=="function"?o:(e,n)=>function(i,r,s){typeof i=="string"&&(i={name:i});let a,c=r.writer,l=Object.assign({},i.attributes);if(s=="container")a=c.createContainerElement(i.name,l);else if(s=="attribute"){let d={priority:i.priority||dn.DEFAULT_PRIORITY};a=c.createAttributeElement(i.name,l,d)}else a=c.createUIElement(i.name,l);if(i.styles){let d=Object.keys(i.styles);for(let u of d)c.setStyle(u,i.styles[u],a)}if(i.classes){let d=i.classes;if(typeof d=="string")c.addClass(d,a);else for(let u of d)c.addClass(u,a)}return a}(o,n,t)}function Oc(o){return o.model.values?(t,e)=>{let n=o.view[t];return n?n(t,e):null}:o.view}function Rc(o){return typeof o=="string"?t=>({key:o,value:t}):typeof o=="object"?o.value?()=>o:t=>({key:o.key,value:t}):o}function _r(o,t,e){let n=typeof o=="function"?o(t,e):o;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function jc(o){let{schema:t,document:e}=o.model;for(let n of e.getRootNames()){let i=e.getRoot(n);if(i.isEmpty&&!t.checkChild(i,"$text")&&t.checkChild(i,"paragraph"))return o.insertElement("paragraph",i),!0}return!1}function Fc(o,t,e){let n=e.createContext(o);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Vc(o,t){let e=t.createElement("paragraph");return t.insert(e,o),t.createPositionAt(e,0)}class Pk extends Pc{elementToElement(t){return this.add(Uc(t))}elementToAttribute(t){return this.add(function(e){Hc(e=le(e));let n=Kc(e,!1),i=vr(e.view),r=i?"element:"+i:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=le(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});let s=r.view.key,a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(e)),Hc(e,n);let i=Kc(e,!0);return r=>{r.on("element",i,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return Object(b.b)("upcast-helpers-element-to-marker-deprecated"),this.add(function(e){return function(n){let i=n.model;n.model=(r,s)=>{let a=typeof i=="string"?i:i(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(e=le(e)),Uc(e)}(t))}dataToMarker(t){return this.add(function(e){(e=le(e)).model||(e.model=r=>r?e.view+":"+r:e.view);let n=yr(Gc(e,"start")),i=yr(Gc(e,"end"));return r=>{r.on("element:"+e.view+"-start",n,{priority:e.converterPriority||"normal"}),r.on("element:"+e.view+"-end",i,{priority:e.converterPriority||"normal"});let s=P.get("low"),a=P.get("highest"),c=P.get(e.converterPriority)/a;r.on("element",function(l){return(d,u,h)=>{let m=`data-${l.view}`;function p(k,f){for(let C of f){let x=l.model(C,h),M=h.writer.createElement("$marker",{"data-name":x});h.writer.insert(M,k),u.modelCursor.isEqual(k)?u.modelCursor=u.modelCursor.getShiftedBy(1):u.modelCursor=u.modelCursor._getTransformedByInsertion(k,1),u.modelRange=u.modelRange._getTransformedByInsertion(k,1)[0]}}u.modelRange||(u=Object.assign(u,h.convertChildren(u.viewItem,u.modelCursor))),h.consumable.consume(u.viewItem,{attributes:m+"-end-after"})&&p(u.modelRange.end,u.viewItem.getAttribute(m+"-end-after").split(",")),h.consumable.consume(u.viewItem,{attributes:m+"-start-after"})&&p(u.modelRange.end,u.viewItem.getAttribute(m+"-start-after").split(",")),h.consumable.consume(u.viewItem,{attributes:m+"-end-before"})&&p(u.modelRange.start,u.viewItem.getAttribute(m+"-end-before").split(",")),h.consumable.consume(u.viewItem,{attributes:m+"-start-before"})&&p(u.modelRange.start,u.viewItem.getAttribute(m+"-start-before").split(","))}}(e),{priority:s+c})}}(t))}}function Uc(o){let t=yr(o=le(o)),e=vr(o.view),n=e?"element:"+e:"element";return i=>{i.on(n,t,{priority:o.converterPriority||"normal"})}}function vr(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function yr(o){let t=new re(o.view);return(e,n,i)=>{let r=t.match(n.viewItem);if(!r)return;let s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;let a=function(c,l,d){return c instanceof Function?c(l,d):d.writer.createElement(c)}(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function Hc(o,t=null){let e=t===null||(r=>r.getAttribute(t)),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||o.model.value===void 0?e:o.model.value;o.model={key:n,value:i}}function Kc(o,t){let e=new re(o.view);return(n,i,r)=>{let s=e.match(i.viewItem);if(!s)return;let a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;c!==null&&(function(l,d){let u=typeof l=="function"?l(d):l;return typeof u=="object"&&!vr(u)?!1:!u.classes&&!u.attributes&&!u.styles}(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,r.consumable.test(i.viewItem,s.match)&&(i.modelRange||(i=Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor))),function(l,d,u,h){let m=!1;for(let p of Array.from(l.getItems({shallow:u})))h.schema.checkAttribute(p,d.key)&&(m=!0,p.hasAttribute(d.key)||h.writer.setAttribute(d.key,d.value,p));return m}(i.modelRange,{key:a,value:c},t,r)&&r.consumable.consume(i.viewItem,s.match)))}}function Gc(o,t){let e={};return e.view=o.view+"-"+t,e.model=(n,i)=>{let r=n.getAttribute("name"),s=o.model(r,i);return i.writer.createElement("$marker",{"data-name":s})},e}class qc{constructor(t,e){this.model=t,this.view=new Tc(e),this.mapper=new wr,this.downcastDispatcher=new Cr({mapper:this.mapper,schema:t.schema});let n=this.model.document,i=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(i,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,l)=>{let d=l.newSelection,u=[];for(let m of d.getRanges())u.push(a.toModelRange(m));let h=s.createSelection(u,{backward:d.isBackward});h.isEqual(s.document.selection)||s.change(m=>{m.setSelection(h)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,"insert"))return;let l=c.writer,d=c.mapper.toViewPosition(a.range.start),u=l.createText(a.item.data);l.insert(d,u)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{let l=c.mapper.toViewPosition(a.position),d=a.position.getShiftedBy(a.length),u=c.mapper.toViewPosition(d,{isPhantom:!0}),h=c.writer.createRange(l,u),m=c.writer.remove(h.getTrimmed());for(let p of c.writer.createRangeIn(m).getItems())c.mapper.unbindViewElement(p)},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=c.writer,d=l.document.selection;for(let u of d.getRanges())u.isCollapsed&&u.end.parent.isAttached()&&c.writer.mergeAttributes(u.start);l.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=a.selection;if(l.isCollapsed||!c.consumable.consume(l,"selection"))return;let d=[];for(let u of l.getRanges()){let h=c.mapper.toViewRange(u);d.push(h)}c.writer.setSelection(d,{backward:l.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{let l=a.selection;if(!l.isCollapsed||!c.consumable.consume(l,"selection"))return;let d=c.writer,u=l.getFirstPosition(),h=c.mapper.toViewPosition(u),m=d.breakAttributes(h);d.setSelection(m)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;let a=new Bf(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}}L(qc,rt);class zk{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){let n=this.get(t);if(!n)throw new b.a("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*At(this._commands.keys())}*commands(){yield*At(this._commands.values())}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(let t of this.commands())t.destroy()}}class Qn{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Lk(t),this._consumables.set(t,n)),n.add(e))}test(t,e){let n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){let n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){let e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(let s of n)s!="style"&&s!="class"&&e.attributes.push(s);let i=t.getClassNames();for(let s of i)e.classes.push(s);let r=t.getStyleNames();for(let s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new Qn(t)),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,Qn.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(let n of t.getChildren())e=Qn.createFrom(n,e);return e}}class Lk{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(let e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(let e in this._consumables)if(e in t){let n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(let e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(let e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){let n=Bt(e)?e:[e],i=this._consumables[t];for(let r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new b.a("viewconsumable-invalid-attribute",this);if(i.set(r,!0),t==="styles")for(let s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(t,e){let n=Bt(e)?e:[e],i=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){let s=i.get(r);if(s===void 0)return null;if(!s)return!1}else{let s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){let n=Bt(e)?e:[e],i=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(i.set(r,!1),t=="styles")for(let s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}else{let s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){let n=Bt(e)?e:[e],i=this._consumables[t];for(let r of n)if(t!=="attributes"||r!=="class"&&r!=="style")i.get(r)===!1&&i.set(r,!0);else{let s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class Wc{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new We(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new We(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new b.a("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new b.a("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:t.is&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){let e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){let e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){let e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){let e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){let e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){let e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){let n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof T){let n=t.nodeBefore,i=t.nodeAfter;if(!(n instanceof et))throw new b.a("schema-check-merge-no-element-before",this);if(!(i instanceof et))throw new b.a("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(let n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;let r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{let r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof T?e=t.parent:e=(t instanceof E?[t]:Array.from(t.getRanges())).reduce((n,i)=>{let r=i.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){let n=[...t.getFirstPosition().getAncestors(),new ot("",t.getAttributes())];return this.checkAttribute(n,e)}{let n=t.getRanges();for(let i of n)for(let r of i)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(let i of n)yield*At(i.getMinimalFlatRanges())}(t);for(let n of t)yield*At(this._getValidRangesForRange(n,e))}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new E(t);let n,i,r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new we({boundaries:E._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(i=new we({boundaries:E._createIn(r),startPosition:t}));for(let s of function*(a,c){let l=!1;for(;!l;){if(l=!0,a){let d=a.next();d.done||(l=!1,yield{walker:a,value:d.value})}if(c){let d=c.next();d.done||(l=!1,yield{walker:c,value:d.value})}}}(n,i)){let a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return E._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new E(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(let n of t)if(n.is("$text"))Yc(this,n,e);else{let i=E._createIn(n).getPositions();for(let r of i)Yc(this,r.nodeBefore||r.parent,e)}}createContext(t){return new We(t)}_clearCache(){this._compiledDefinitions=null}_compile(){let t={},e=this._sourceDefinitions,n=Object.keys(e);for(let i of n)t[i]=Ok(e[i],i);for(let i of n)Rk(t,i);for(let i of n)jk(t,i);for(let i of n)Fk(t,i),Vk(t,i);for(let i of n)Uk(t,i),Hk(t,i);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){let i=e.getItem(n);if(t.allowIn.includes(i.name)){if(n==0)return!0;{let r=this.getDefinition(i);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(let r of t.getItems({shallow:!0}))r.is("element")&&(yield*At(this._getValidRangesForRange(E._createIn(r),e))),this.checkAttribute(r,e)||(n.isEqual(i)||(yield new E(n,i)),n=T._createAfter(r)),i=T._createAfter(r);n.isEqual(i)||(yield new E(n,i))}}L(Wc,rt);class We{constructor(t){if(t instanceof We)return t;typeof t=="string"?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),this._items=t.map(Gk)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){let e=new We([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*At(this._items.map(t=>t.name))}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function Ok(o,t){let e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(n,i){for(let r of n){let s=Object.keys(r).filter(a=>a.startsWith("is"));for(let a of s)i[a]=r[a]}}(o,e),fn(o,e,"allowIn"),fn(o,e,"allowContentOf"),fn(o,e,"allowWhere"),fn(o,e,"allowAttributes"),fn(o,e,"allowAttributesOf"),fn(o,e,"inheritTypesFrom"),function(n,i){for(let r of n){let s=r.inheritAllFrom;s&&(i.allowContentOf.push(s),i.allowWhere.push(s),i.allowAttributesOf.push(s),i.inheritTypesFrom.push(s))}}(o,e),e}function Rk(o,t){for(let e of o[t].allowContentOf)o[e]&&Kk(o,e).forEach(n=>{n.allowIn.push(t)});delete o[t].allowContentOf}function jk(o,t){for(let e of o[t].allowWhere){let n=o[e];if(n){let i=n.allowIn;o[t].allowIn.push(...i)}}delete o[t].allowWhere}function Fk(o,t){for(let e of o[t].allowAttributesOf){let n=o[e];if(n){let i=n.allowAttributes;o[t].allowAttributes.push(...i)}}delete o[t].allowAttributesOf}function Vk(o,t){let e=o[t];for(let n of e.inheritTypesFrom){let i=o[n];if(i){let r=Object.keys(i).filter(s=>s.startsWith("is"));for(let s of r)s in e||(e[s]=i[s])}}delete e.inheritTypesFrom}function Uk(o,t){let e=o[t],n=e.allowIn.filter(i=>o[i]);e.allowIn=Array.from(new Set(n))}function Hk(o,t){let e=o[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function fn(o,t,e){for(let n of o)typeof n[e]=="string"?t[e].push(n[e]):Array.isArray(n[e])&&t[e].push(...n[e])}function Kk(o,t){let e=o[t];return(n=o,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(e.name));var n}function Gk(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*At(o.getAttributeKeys())},getAttribute:t=>o.getAttribute(t)}}function Yc(o,t,e){for(let n of t.getAttributeKeys())o.checkAttribute(t,n)||e.removeAttribute(n,t)}class Qc{constructor(t={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(let l of new We(s)){let d={};for(let h of l.getAttributeKeys())d[h]=l.getAttribute(h);let u=a.createElement(l.name,d);c&&a.append(u,c),c=T._createAt(u,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=Qn.createFrom(t),this.conversionApi.store={};let{modelRange:i}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(i){this._removeEmptyElements();for(let s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){let c=new Set,l=new Map,d=E._createIn(s).getItems();for(let u of d)u.name=="$marker"&&c.add(u);for(let u of c){let h=u.getAttribute("data-name"),m=a.createPositionBefore(u);l.has(h)?l.get(h).end=m.clone():l.set(h,new E(m.clone())),a.remove(u)}return l}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){let n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof E))throw new b.a("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:T._createAt(e,0),i=new E(n);for(let r of Array.from(t.getChildren())){let s=this._convertItem(r,n);s.modelRange instanceof E&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(t,e){let n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){let n=this._getSplitParts(t),i=this.conversionApi.writer;e.modelRange||(e.modelRange=i.createRange(i.createPositionBefore(t),i.createPositionAfter(n[n.length-1])));let r=this._cursorParents.get(t);e.modelCursor=r?i.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){let{schema:n,writer:i}=this.conversionApi,r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return Fc(e,t,n)?{position:Vc(e,i)}:null;let s=this.conversionApi.writer.split(e,r),a=[];for(let l of s.range.getWalker())if(l.type=="elementEnd")a.push(l.item);else{let d=a.pop(),u=l.item;this._registerSplitPair(d,u)}let c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);let n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_removeEmptyElements(){let t=!1;for(let e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}L(Qc,V);class qk{getHtml(t){let e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class Wk{constructor(t){this._domParser=new DOMParser,this._domConverter=new No(t,{blockFillerMode:"nbsp"}),this._htmlWriter=new qk}toData(t){let e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){let e=this._toDom(t);return this._domConverter.domToView(e)}registerRawContentMatcher(t){this._domConverter.registerRawContentMatcher(t)}useFillerType(t){this._domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){let e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class $c{constructor(t,e){this.model=t,this.mapper=new wr,this.downcastDispatcher=new Cr({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,i,r)=>{if(!r.consumable.consume(i.item,"insert"))return;let s=r.writer,a=r.mapper.toViewPosition(i.range.start),c=s.createText(i.item.data);s.insert(a,c)},{priority:"lowest"}),this.upcastDispatcher=new Qc({schema:t.schema}),this.viewDocument=new Kn(e),this.stylesProcessor=e,this.htmlProcessor=new Wk(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Ha(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:r,consumable:s,writer:a})=>{let c=i.modelCursor;if(!s.test(i.viewItem))return;if(!r.checkChild(c,"$text")){if(!Fc(c,"$text",r))return;c=Vc(c,a)}s.consume(i.viewItem);let l=a.createText(i.viewItem.data);a.insert(l,c),i.modelRange=a.createRange(c,c.getShiftedBy(l.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){let{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){let{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange("transparent",jc)},{priority:"lowest"})}get(t={}){let{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new b.a("datacontroller-get-non-existent-root",this);let i=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,t):""}stringify(t,e={}){let n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){let n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();let r=E._createIn(t),s=new Ke(n);this.mapper.bindElements(t,s),this.downcastDispatcher.conversionApi.options=e,this.downcastDispatcher.convertInsert(r,i);let a=t.is("documentFragment")?Array.from(t.markers):function(c){let l=[],d=c.root.document;if(!d)return[];let u=E._createIn(c);for(let h of d.model.markers){let m=u.getIntersection(h.getRange());m&&l.push([h.name,m])}return l}(t);for(let[c,l]of a)this.downcastDispatcher.convertMarkerAdd(c,l,i);return delete this.downcastDispatcher.conversionApi.options,s}init(t){if(this.model.document.version)throw new b.a("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new b.a("datacontroller-init-non-existent-root",this);return this.model.enqueueChange("transparent",n=>{for(let i of Object.keys(e)){let r=this.model.document.getRoot(i);n.insert(this.parse(e[i],r),r,0)}}),Promise.resolve()}set(t){let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new b.a("datacontroller-set-non-existent-root",this);this.model.enqueueChange("transparent",n=>{n.setSelection(null),n.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(let i of Object.keys(e)){let r=this.model.document.getRoot(i);n.remove(n.createRangeIn(r)),n.insert(this.parse(e[i],r),r,0)}})}parse(t,e="$root"){let n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(let e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}L($c,rt);class Yk{constructor(t,e){this._helpers=new Map,this._downcast=gt(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=gt(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){let n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new b.a("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new b.a("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(let{model:e,view:n}of xr(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(let{model:e,view:n}of xr(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(let{model:e,view:n}of xr(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new b.a("conversion-group-exists",this);let i=n?new Bk(e):new Pk(e);this._helpers.set(t,i)}}function*xr(o){if(o.model.values)for(let t of o.model.values){let e={key:o.model.key,value:t},n=o.view[t],i=o.upcastAlso?o.upcastAlso[t]:void 0;yield*At(Jc(e,n,i))}else yield*At(Jc(o.model,o.view,o.upcastAlso))}function*Jc(o,t,e){if(yield{model:o,view:t},e)for(let n of gt(e))yield{model:o,view:n}}class Uo{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(let t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Jt{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){let t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Ae{constructor(t){this.markers=new Map,this._children=new gn,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="model:documentFragment"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(let n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){let t=[];for(let e of this._children)t.push(e.toJSON());return t}static fromJSON(t){let e=[];for(let n of t)n.name?e.push(et.fromJSON(n)):e.push(ot.fromJSON(n));return new Ae(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){let n=function(i){return typeof i=="string"?[new ot(i)]:(Yt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new ot(r):r instanceof ae?new ot(r.data,r.getAttributes()):r))}(e);for(let i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){let n=this._children._removeNodes(t,e);for(let i of n)i.parent=null;return n}}function Dr(o,t){let e=(t=Xc(t)).reduce((r,s)=>r+s.offsetSize,0),n=o.parent;Zn(o);let i=o.index;return n._insertChild(i,t),Jn(n,i+t.length),Jn(n,i),new E(o,o.getShiftedBy(e))}function Zc(o){if(!o.isFlat)throw new b.a("operation-utils-remove-range-not-flat",this);let t=o.start.parent;Zn(o.start),Zn(o.end);let e=t._removeChildren(o.start.index,o.end.index-o.start.index);return Jn(t,o.start.index),e}function $n(o,t){if(!o.isFlat)throw new b.a("operation-utils-move-range-not-flat",this);let e=Zc(o);return Dr(t=t._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),e)}function Xc(o){let t=[];o instanceof Array||(o=[o]);for(let e=0;e<o.length;e++)if(typeof o[e]=="string")t.push(new ot(o[e]));else if(o[e]instanceof ae)t.push(new ot(o[e].data,o[e].getAttributes()));else if(o[e]instanceof Ae||o[e]instanceof gn)for(let n of o[e])t.push(n);else o[e]instanceof Ge&&t.push(o[e]);for(let e=1;e<t.length;e++){let n=t[e],i=t[e-1];n instanceof ot&&i instanceof ot&&tl(n,i)&&(t.splice(e-1,2,new ot(i.data+n.data,i.getAttributes())),e--)}return t}function Jn(o,t){let e=o.getChild(t-1),n=o.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&tl(e,n)){let i=new ot(e.data+n.data,e.getAttributes());o._removeChildren(t-1,2),o._insertChild(t-1,i)}}function Zn(o){let t=o.textNode,e=o.parent;if(t){let n=o.offset-t.startOffset,i=t.index;e._removeChildren(i,1);let r=new ot(t.data.substr(0,n),t.getAttributes()),s=new ot(t.data.substr(n),t.getAttributes());e._insertChild(i,[r,s])}}function tl(o,t){let e=o.getAttributes(),n=t.getAttributes();for(let i of e){if(i[1]!==t.getAttribute(i[0]))return!1;n.next()}return n.next().done}var el=function(o,t){return mc(o,t)};class ft extends Jt{constructor(t,e,n,i,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new ft(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ft(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){let t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new b.a("attribute-operation-range-not-flat",this);for(let t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!el(t.getAttribute(this.key),this.oldValue))throw new b.a("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new b.a("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){el(this.oldValue,this.newValue)||function(t,e,n){Zn(t.start),Zn(t.end);for(let i of t.getItems({shallow:!0})){let r=i.is("$textProxy")?i.textNode:i;n!==null?r._setAttribute(e,n):r._removeAttribute(e),Jn(r.parent,r.index)}Jn(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new ft(E.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Qk extends Jt{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new b.a("detach-operation-on-document-node",this)}_execute(){Zc(E._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Z extends Jt{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){let t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new b.a("move-operation-nodes-do-not-exist",this);if(t===e&&n<i&&i<n+this.howMany)throw new b.a("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&St(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){let r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new b.a("move-operation-node-into-itself",this)}}_execute(){$n(E._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){let n=T.fromJSON(t.sourcePosition,e),i=T.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class _t extends Jt{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new gn(Xc(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){let t=new gn([...this.nodes].map(n=>n._clone(!0))),e=new _t(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){let t=this.position.root.document.graveyard,e=new T(t,[0]);return new Z(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){let t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new b.a("insert-operation-position-invalid",this)}_execute(){let t=this.nodes;this.nodes=new gn([...t].map(e=>e._clone(!0))),Dr(this.position,t)}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){let n=[];for(let r of t.nodes)r.name?n.push(et.fromJSON(r)):n.push(ot.fromJSON(r));let i=new _t(T.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class jt extends Jt{constructor(t,e,n,i,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}clone(){return new jt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new jt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){let t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){let t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new jt(t.name,t.oldRange?E.fromJSON(t.oldRange,e):null,t.newRange?E.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class Ft extends Jt{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Ft(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ft(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){let t=this.position.nodeAfter;if(!(t instanceof et))throw new b.a("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new b.a("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){let t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Ft(T.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class _e extends Jt{constructor(t,e,n,i,r){super(r),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new _e(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new _e(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new b.a("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new b.a("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new b.a("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){let t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new b.a("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new _e(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class wt extends Jt{constructor(t,e,n,i,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new T(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){let t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new E(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new T(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new at(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){let t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new b.a("merge-operation-source-position-invalid",this);if(!e.parent)throw new b.a("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new b.a("merge-operation-how-many-invalid",this)}_execute(){let t=this.sourcePosition.parent;$n(E._createIn(t),this.targetPosition),$n(E._createOn(t),this.graveyardPosition)}toJSON(){let t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){let n=T.fromJSON(t.sourcePosition,e),i=T.fromJSON(t.targetPosition,e),r=T.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,r,t.baseVersion)}}class at extends Jt{constructor(t,e,n,i,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){let t=this.insertionPosition.path.slice();return t.push(0),new T(this.insertionPosition.root,t)}get movedRange(){let t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new E(this.splitPosition,t)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let t=this.splitPosition.root.document.graveyard,e=new T(t,[0]);return new wt(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){let t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new b.a("split-operation-position-invalid",this);if(!t.parent)throw new b.a("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new b.a("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new b.a("split-operation-graveyard-position-invalid",this)}_execute(){let t=this.splitPosition.parent;if(this.graveyardPosition)$n(E._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{let e=t._clone();Dr(this.insertionPosition,e)}$n(new E(T._createAt(t,this.splitPosition.offset),T._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){let t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){let e=t.path.slice(0,-1);return e[e.length-1]++,new T(t.root,e,"toPrevious")}static fromJSON(t,e){let n=T.fromJSON(t.splitPosition,e),i=T.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?T.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,i,r,t.baseVersion)}}class Er extends et{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}is(t,e){return e?e===this.name&&(t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"):t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"||t==="node"||t==="model:node"}toJSON(){return this.rootName}}class $k{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new ot(t,e)}createElement(t,e){return new et(t,e)}createDocumentFragment(){return new Ae}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof ot&&t.data=="")return;let i=T._createAt(e,n);if(t.parent){if(il(t.root,i.root))return void this.move(E._createOn(t),i);if(t.root.document)throw new b.a("model-writer-insert-forbidden-move",this);this.remove(t)}let r=i.root.document?i.root.document.version:null,s=new _t(i,t,r);if(t instanceof ot&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof Ae)for(let[a,c]of t.markers){let l=T._createAt(c.root,0),d={range:new E(c.start._getCombined(l,i),c.end._getCombined(l,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(t,e,n,i){e instanceof Ae||e instanceof et||e instanceof T?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof Ae||e instanceof et||e instanceof T?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Ae||e instanceof et?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Ae||e instanceof et?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof E){let i=n.getMinimalFlatRanges();for(let r of i)nl(this,t,e,r)}else ol(this,t,e,n)}setAttributes(t,e){for(let[n,i]of ke(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof E){let n=e.getMinimalFlatRanges();for(let i of n)nl(this,t,null,i)}else ol(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();let e=n=>{for(let i of n.getAttributeKeys())this.removeAttribute(i,n)};if(t instanceof E)for(let n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof E))throw new b.a("writer-move-invalid-range",this);if(!t.isFlat)throw new b.a("writer-move-range-not-flat",this);let i=T._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!il(t.root,i.root))throw new b.a("writer-move-different-document",this);let r=t.root.document?t.root.document.version:null,s=new Z(t.start,t.end.offset-t.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();let e=(t instanceof E?t:E._createOn(t)).getMinimalFlatRanges().reverse();for(let n of e)this._addOperationForAffectedMarkers("move",n),Jk(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();let e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof et))throw new b.a("writer-merge-no-element-before",this);if(!(n instanceof et))throw new b.a("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){let e=t.nodeBefore,n=t.nodeAfter;this.move(E._createIn(n),T._createAt(e,"end")),this.remove(n)}_merge(t){let e=T._createAt(t.nodeBefore,"end"),n=T._createAt(t.nodeAfter,0),i=t.root.document.graveyard,r=new T(i,[0]),s=t.root.document.version,a=new wt(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof et))throw new b.a("writer-rename-not-element-instance",this);let n=t.root.document?t.root.document.version:null,i=new Ft(T._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,r=t.parent;if(!r.parent)throw new b.a("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new b.a("writer-split-invalid-limit-element",this);do{let s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=at.getInsertionPosition(t),l=new at(t,a,c,null,s);this.batch.addOperation(l),this.model.applyOperation(l),n||i||(n=r,i=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new E(T._createAt(n,"end"),T._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new b.a("writer-wrap-range-not-flat",this);let n=e instanceof et?e:new et(e);if(n.childCount>0)throw new b.a("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new b.a("writer-wrap-element-attached",this);this.insert(n,t.start);let i=new E(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,T._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new b.a("writer-unwrap-element-no-parent",this);this.move(E._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new b.a("writer-addmarker-no-usingoperation",this);let n=e.usingOperation,i=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new b.a("writer-addmarker-marker-exists",this);if(!i)throw new b.a("writer-addmarker-no-range",this);return n?(Xn(this,t,null,i,r),this.model.markers.get(t)):this.model.markers._set(t,i,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();let n=typeof t=="string"?t:t.name,i=this.model.markers.get(n);if(!i)throw new b.a("writer-updatemarker-marker-not-exists",this);if(!e)return void this.model.markers._refresh(i);let r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:i.affectsData;if(!r&&!e.range&&!s)throw new b.a("writer-updatemarker-wrong-options",this);let c=i.getRange(),l=e.range?e.range:c;r&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?Xn(this,n,null,l,a):(Xn(this,n,c,null,a),this.model.markers._set(n,l,void 0,a)):i.managedUsingOperations?Xn(this,n,c,l,a):this.model.markers._set(n,l,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();let e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new b.a("writer-removemarker-no-marker",this);let n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);Xn(this,e,n.getRange(),null,n.affectsData)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(let[n,i]of ke(t))this._setSelectionAttribute(n,i)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(let e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){let n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){let i=ee._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){let e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){let n=ee._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new b.a("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(let n of this.model.markers){if(!n.managedUsingOperations)continue;let i=n.getRange(),r=!1;if(t==="move")r=e.containsPosition(i.start)||e.start.isEqual(i.start)||e.containsPosition(i.end)||e.end.isEqual(i.end);else{let s=e.nodeBefore,a=e.nodeAfter,c=i.start.parent==s&&i.start.isAtEnd,l=i.end.parent==a&&i.end.offset==0,d=i.end.nodeAfter==a,u=i.start.nodeAfter==a;r=c||l||d||u}r&&this.updateMarker(n.name,{range:i})}}}function nl(o,t,e,n){let i=o.model,r=i.document,s,a,c,l=n.start;for(let u of n.getWalker({shallow:!0}))c=u.item.getAttribute(t),s&&a!=c&&(a!=e&&d(),l=s),s=u.nextPosition,a=c;function d(){let u=new E(l,s),h=u.root.document?r.version:null,m=new ft(u,t,a,e,h);o.batch.addOperation(m),i.applyOperation(m)}s instanceof T&&s!=l&&a!=e&&d()}function ol(o,t,e,n){let i=o.model,r=i.document,s=n.getAttribute(t),a,c;if(s!=e){if(n.root===n){let l=n.document?r.version:null;c=new _e(n,t,s,e,l)}else{a=new E(T._createBefore(n),o.createPositionAfter(n));let l=a.root.document?r.version:null;c=new ft(a,t,s,e,l)}o.batch.addOperation(c),i.applyOperation(c)}}function Xn(o,t,e,n,i){let r=o.model,s=r.document,a=new jt(t,e,n,r.markers,i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function Jk(o,t,e,n){let i;if(o.root.document){let r=n.document,s=new T(r.graveyard,[0]);i=new Z(o,t,s,r.version)}else i=new Qk(o,t);e.addOperation(i),n.applyOperation(i)}function il(o,t){return o===t||o instanceof Er&&t instanceof Er}class Zk{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize);let e=E._createOn(t);for(let n of this._markerCollection.getMarkersIntersectingRange(e)){let i=n.getRange();this.bufferMarkerChange(n.name,i,i,n.affectsData)}this._cachedChanges=null}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(let e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;let e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);let e=E._createFromPositionAndShift(t.position,1);for(let n of this._markerCollection.getMarkersIntersectingRange(e)){let i=n.getRange();this.bufferMarkerChange(n.name,i,i,n.affectsData)}break}case"split":{let e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{let e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);let n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);let i=t.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,i){let r=this._changedMarkers.get(t);r?(r.newRange=n,r.affectsData=i,r.oldRange==null&&r.newRange==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:i})}getMarkersToRemove(){let t=[];for(let[e,n]of this._changedMarkers)n.oldRange!=null&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){let t=[];for(let[e,n]of this._changedMarkers)n.newRange!=null&&t.push({name:e,range:n.newRange});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(t=>({name:t[0],data:{oldRange:t[1].oldRange,newRange:t[1].newRange}}))}hasDataChanges(){for(let[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(let n of this._changesInElement.keys()){let i=this._changesInElement.get(n).sort((d,u)=>d.offset===u.offset?d.type!=u.type?d.type=="remove"?-1:1:0:d.offset<u.offset?-1:1),r=this._elementSnapshots.get(n),s=rl(n.getChildren()),a=Xk(r.length,i),c=0,l=0;for(let d of a)if(d==="i")e.push(this._getInsertDiff(n,c,s[c].name)),c++;else if(d==="r")e.push(this._getRemoveDiff(n,c,r[l].name)),l++;else if(d==="a"){let u=s[c].attributes,h=r[l].attributes,m;if(s[c].name=="$text")m=new E(T._createAt(n,c),T._createAt(n,c+1));else{let p=n.offsetToIndex(c);m=new E(T._createAt(n,c),T._createAt(n.getChild(p),0))}e.push(...this._getAttributesDiff(m,h,u)),c++,l++}else c++,l++}e.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<e.length;n++){let r=e[i],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,l=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||l?(r.length++,l&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):i=n}e=e.filter(n=>n);for(let n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.filter(tb),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){let i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){let i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){let e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);let n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,rl(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(let n of e){let i=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){let s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=t.howMany;else if(i<=r)if(t.offset<n.offset){let s=i-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){let s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){let s=i-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(i<=r){let s=n.howMany;n.howMany=t.offset-n.offset;let a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&i>n.offset){if(i>r){let s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(i>r?(t.nodesToHandle=i-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&i>n.offset){let s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&i<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:T._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:T._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){let i=[];n=new Map(n);for(let[r,s]of e){let a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(let[r,s]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(t){let e=t.parent;if(!e)return!1;let n=this._changesInElement.get(e),i=t.startOffset;if(n){for(let r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){let i=new E(T._createAt(t,e),T._createAt(t,e+n));for(let r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function rl(o){let t=[];for(let e of o)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function Xk(o,t){let e=[],n=0,i=0;for(let r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,i+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)e.push("e");return e}function tb(o){let t=o.position&&o.position.root.rootName=="$graveyard",e=o.range&&o.range.root.rootName=="$graveyard";return!t&&!e}class eb{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){let n=[];for(let i of this._operations)i.baseVersion>=t&&i.baseVersion<e&&n.push(i);return n}getOperation(t){for(let e of this._operations)if(e.baseVersion==t)return e}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function sl(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function al(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}let Mr="$graveyard";class cl{constructor(t){this.model=t,this.version=0,this.history=new eb(this),this.selection=new ee(this),this.roots=new xt({idProperty:"rootName"}),this.differ=new Zk(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Mr),this.listenTo(t,"applyOperation",(e,n)=>{let i=n[0];if(i.isDocumentOperation&&i.baseVersion!==this.version)throw new b.a("model-document-applyoperation-wrong-version",this,{operation:i})},{priority:"highest"}),this.listenTo(t,"applyOperation",(e,n)=>{let i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{let i=n[0];i.isDocumentOperation&&(this.version++,this.history.addOperation(i))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,i,r)=>{this.differ.bufferMarkerChange(n.name,i,r,n.affectsData),i===null&&n.on("change",(s,a)=>{this.differ.bufferMarkerChange(n.name,a,n.getRange(),n.affectsData)})})}get graveyard(){return this.getRoot(Mr)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new b.a("model-document-createroot-name-exists",this,{name:e});let n=new Er(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Mr)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){let t=Da(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(let t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){let t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return ll(t.start)&&ll(t.end)}_callPostFixers(t){let e=!1;do for(let n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function ll(o){let t=o.textNode;if(t){let e=t.data,n=o.offset-t.startOffset;return!sl(e,n)&&!al(e,n)}return!0}L(cl,V);class dl{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){let r=t instanceof to?t.name:t;if(r.includes(","))throw new b.a("markercollection-incorrect-marker-name",this);let s=this._markers.get(r);if(s){let l=s.getRange(),d=!1;return l.isEqual(e)||(s._attachLiveRange(ce.fromRange(e)),d=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,d=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,d=!0),d&&this.fire("update:"+r,s,l,e),s}let a=ce.fromRange(e),c=new to(r,a,n,i);return this._markers.set(r,c),this.fire("update:"+r,c,null,e),c}_remove(t){let e=t instanceof to?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}_refresh(t){let e=t instanceof to?t.name:t,n=this._markers.get(e);if(!n)throw new b.a("markercollection-refresh-marker-not-exists",this);let i=n.getRange();this.fire("update:"+e,n,i,i,n.managedUsingOperations,n.affectsData)}*getMarkersAtPosition(t){for(let e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(let e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(let t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(let e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}L(dl,V);class to{constructor(t,e,n,i){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new b.a("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new b.a("marker-destroyed",this);return this._affectsData}getStart(){if(!this._liveRange)throw new b.a("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new b.a("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new b.a("marker-destroyed",this);return this._liveRange.toRange()}is(t){return t==="marker"||t==="model:marker"}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}L(to,V);class vt extends Jt{get type(){return"noop"}clone(){return new vt(this.baseVersion)}getReversed(){return new vt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}let ne={};ne[ft.className]=ft,ne[_t.className]=_t,ne[jt.className]=jt,ne[Z.className]=Z,ne[vt.className]=vt,ne[Jt.className]=Jt,ne[Ft.className]=Ft,ne[_e.className]=_e,ne[at.className]=at,ne[wt.className]=wt;class Dt extends T{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new b.a("model-liveposition-root-not-rootelement",t);nb.call(this)}detach(){this.stopListening()}is(t){return t==="livePosition"||t==="model:livePosition"||t=="position"||t==="model:position"}toPosition(){return new T(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function nb(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{let e=t[0];e.isDocumentOperation&&ob.call(this,e)},{priority:"low"})}function ob(o){let t=this.getTransformedByOperation(o);if(!this.isEqual(t)){let e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}L(Dt,V);class ib{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t){for(let e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){let e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new b.a("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?E._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new E(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;let t=Dt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new b.a("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=Dt.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Dt.fromPosition(t,"toNext"))}_mergeOnLeft(){let t=this._firstNode;if(!(t instanceof et)||!this._canMergeLeft(t))return;let e=Dt._createBefore(t);e.stickiness="toNext";let n=Dt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=Dt._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Dt._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){let t=this._lastNode;if(!(t instanceof et)||!this._canMergeRight(t))return;let e=Dt._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new b.a("insertcontent-invalid-insertion-position",this);this.position=T._createAt(e.nodeBefore,"end");let n=Dt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=Dt._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Dt._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){let e=t.previousSibling;return e instanceof et&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){let e=t.nextSibling;return e instanceof et&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){let e=this.writer.createElement("paragraph");this._getAllowedIn(e,this.position.parent)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();let e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){let e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){let n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{let n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function rb(o,t,e={}){if(t.isCollapsed)return;let n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;let i=o.schema;o.change(r=>{if(!e.doNotResetEntireContent&&function(c,l){let d=c.getLimitElement(l);if(!l.containsEntireContent(d))return!1;let u=l.getFirstRange();return u.start.parent==u.end.parent?!1:c.checkChild(d,"paragraph")}(i,t))return void function(c,l){let d=c.model.schema.getLimitElement(l);c.remove(c.createRangeIn(d)),ml(c,c.createPositionAt(d,0),l)}(r,t);let[s,a]=function(c){let l=c.root.document.model,d=c.start,u=c.end;if(l.hasContent(c,{ignoreMarkers:!0})){let h=function(m){let p=m.parent,k=p.root.document.model.schema,f=p.getAncestors({parentFirst:!0,includeSelf:!0});for(let C of f){if(k.isLimit(C))return null;if(k.isBlock(C))return C}}(u);if(h&&u.isTouching(l.createPositionAt(h,0))){let m=l.createSelection(c);l.modifySelection(m,{direction:"backward"}),u=m.getLastPosition()}}return[Dt.fromPosition(d,"toPrevious"),Dt.fromPosition(u,"toNext")]}(n);s.isTouching(a)||r.remove(r.createRange(s,a)),e.leaveUnmerged||(function(c,l,d){let u=c.model;if(!Tr(c.model.schema,l,d))return;let[h,m]=function(p,k){let f=p.getAncestors(),C=k.getAncestors(),x=0;for(;f[x]&&f[x]==C[x];)x++;return[f[x],C[x]]}(l,d);!h||!m||(!u.hasContent(h,{ignoreMarkers:!0})&&u.hasContent(m,{ignoreMarkers:!0})?hl(c,l,d,h.parent):ul(c,l,d,h.parent))}(r,s,a),i.removeDisallowedAttributes(s.parent.getChildren(),r)),gl(r,t,s),!e.doNotAutoparagraph&&function(c,l){let d=c.checkChild(l,"$text"),u=c.checkChild(l,"paragraph");return!d&&u}(i,s)&&ml(r,s,t),s.detach(),a.detach()})}function ul(o,t,e,n){let i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(r,t),o.merge(t);e.parent.isEmpty;){let s=e.parent;e=o.createPositionBefore(s),o.remove(s)}Tr(o.model.schema,t,e)&&ul(o,t,e,n)}}function hl(o,t,e,n){let i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(i,e);t.parent.isEmpty;){let s=t.parent;t=o.createPositionBefore(s),o.remove(s)}e=o.createPositionBefore(r),function(s,a){let c=a.nodeBefore,l=a.nodeAfter;c.name!=l.name&&s.rename(c,l.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(l.getAttributes()),c),s.merge(a)}(o,e),Tr(o.model.schema,t,e)&&hl(o,t,e,n)}}function Tr(o,t,e){let n=t.parent,i=e.parent;return n!=i&&!o.isLimit(n)&&!o.isLimit(i)&&function(r,s,a){let c=new E(r,s);for(let l of c.getWalker())if(a.isLimit(l.item))return!1;return!0}(t,e,o)}function ml(o,t,e){let n=o.createElement("paragraph");o.insert(n,t),gl(o,e,o.createPositionAt(n,0))}function gl(o,t,e){t instanceof ee?o.setSelection(e):t.setTo(e)}let pl=' ,.?!:;"-()';function sb(o,t){let{isForward:e,walker:n,unit:i,schema:r}=o,{type:s,item:a,nextPosition:c}=t;if(s=="text")return o.unit==="word"?function(l,d){let u=l.position.textNode;if(u){let h=l.position.offset-u.startOffset;for(;!cb(u.data,h,d)&&!lb(u,h,d);){l.next();let m=d?l.position.nodeAfter:l.position.nodeBefore;if(m&&m.is("$text")){let p=m.data.charAt(d?0:m.data.length-1);pl.includes(p)||(l.next(),u=l.position.textNode)}h=l.position.offset-u.startOffset}}return l.position}(n,e):function(l,d){let u=l.position.textNode;if(u){let h=u.data,m=l.position.offset-u.startOffset;for(;sl(h,m)||d=="character"&&al(h,m);)l.next(),m=l.position.offset-u.startOffset}return l.position}(n,i);if(s==(e?"elementStart":"elementEnd")){if(r.isSelectable(a))return T._createAt(a,e?"after":"before");if(r.checkChild(c,"$text"))return c}else{if(r.isLimit(a))return void n.skip(()=>!0);if(r.checkChild(c,"$text"))return c}}function ab(o,t){let e=o.root,n=T._createAt(e,t?"end":0);return t?new E(o,n):new E(n,o)}function cb(o,t,e){let n=t+(e?0:-1);return pl.includes(o.charAt(n))}function lb(o,t,e){return t===(e?o.endOffset:0)}function fl(o,t){let e=[];Array.from(o.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){let r=t.createRangeOn(i);i=i.parent,t.remove(r)}})}function db(o){o.document.registerPostFixer(t=>function(e,n){let i=n.document.selection,r=n.schema,s=[],a=!1;for(let c of i.getRanges()){let l=ub(c,r);l&&!l.isEqual(c)?(s.push(l),a=!0):s.push(c)}a&&e.setSelection(function(c){let l=[];l.push(c.shift());for(let d of c){let u=l.pop();if(d.isEqual(u))l.push(u);else if(d.isIntersecting(u)){let h=u.start.isAfter(d.start)?d.start:u.start,m=u.end.isAfter(d.end)?u.end:d.end,p=new E(h,m);l.push(p)}else l.push(u),l.push(d)}return l}(s),{backward:i.isBackward})}(t,o))}function ub(o,t){return o.isCollapsed?function(e,n){let i=e.start,r=n.getNearestSelectionRange(i);if(!r)return null;if(!r.isCollapsed)return r;let s=r.start;return i.isEqual(s)?null:new E(s)}(o,t):function(e,n){let{start:i,end:r}=e,s=n.checkChild(i,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(i),l=n.getLimitElement(r);if(c===l){if(s&&a)return null;if(function(h,m,p){let k=h.nodeAfter&&!p.isLimit(h.nodeAfter)||p.checkChild(h,"$text"),f=m.nodeBefore&&!p.isLimit(m.nodeBefore)||p.checkChild(m,"$text");return k||f}(i,r,n)){let h=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),m=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),p=h?h.start:i,k=m?m.end:r;return new E(p,k)}}let d=c&&!c.is("rootElement"),u=l&&!l.is("rootElement");if(d||u){let h=i.nodeAfter&&r.nodeBefore&&i.nodeAfter.parent===r.nodeBefore.parent,m=d&&(!h||!bl(i.nodeAfter,n)),p=u&&(!h||!bl(r.nodeBefore,n)),k=i,f=r;return m&&(k=T._createBefore(kl(c,n))),p&&(f=T._createAfter(kl(l,n))),new E(k,f)}return null}(o,t)}function kl(o,t){let e=o,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function bl(o,t){return o&&t.isSelectable(o)}class wl{constructor(){this.markers=new dl,this.document=new cl(this),this.schema=new Wc,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$documentFragment",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$documentFragment"}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),db(this),this.document.registerPostFixer(jc)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Uo,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){b.a.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{typeof t=="string"?t=new Uo(t):typeof t=="function"&&(e=t,t=new Uo),this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){b.a.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(i,r,s,a){return i.change(c=>{let l;l=s?s instanceof Ce||s instanceof ee?s:c.createSelection(s,a):i.document.selection,l.isCollapsed||i.deleteContent(l,{doNotAutoparagraph:!0});let d=new ib(i,c,l.anchor),u;u=r.is("documentFragment")?r.getChildren():[r],d.handleNodes(u);let h=d.getSelectionRange();h&&(l instanceof ee?c.setSelection(h):l.setTo(h));let m=d.getAffectedRange()||i.createRange(l.anchor);return d.destroy(),m})}(this,t,e,n)}deleteContent(t,e){rb(this,t,e)}modifySelection(t,e){(function(n,i,r={}){let s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",l=i.focus,d=new we({boundaries:ab(l,a),singleCharacters:!0,direction:a?"forward":"backward"}),u={walker:d,schema:s,isForward:a,unit:c},h;for(;h=d.next();){if(h.done)return;let m=sb(u,h.value);if(m)return void(i instanceof ee?n.change(p=>{p.setSelectionFocus(m)}):i.setFocus(m))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(i=>{let r=i.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;let a=s.start.root,c=s.start.getCommonPath(s.end),l=a.getNodeByPath(c),d;d=s.start.parent==s.end.parent?s:i.createRange(i.createPositionAt(l,s.start.path[c.length]),i.createPositionAt(l,s.end.path[c.length]+1));let u=d.end.offset-d.start.offset;for(let h of d.getItems({shallow:!0}))h.is("$textProxy")?i.appendText(h.data,h.getAttributes(),r):i.append(i.cloneElement(h,!0),r);if(d!=s){let h=s._getTransformedByMove(d.start,i.createPositionAt(r,0),u)[0],m=i.createRange(i.createPositionAt(r,0),h.start);fl(i.createRange(h.end,i.createPositionAt(r,"end")),i),fl(m,i)}return r})}(this,t)}hasContent(t,e={}){let n=t instanceof et?E._createIn(t):t;if(n.isCollapsed)return!1;let{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=e;if(!r){for(let s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(let s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!i||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new T(t,e,n)}createPositionAt(t,e){return T._createAt(t,e)}createPositionAfter(t){return T._createAfter(t)}createPositionBefore(t){return T._createBefore(t)}createRange(t,e){return new E(t,e)}createRangeIn(t){return E._createIn(t)}createRangeOn(t){return E._createOn(t)}createSelection(t,e,n){return new Ce(t,e,n)}createBatch(t){return new Uo(t)}createOperationFromJSON(t){return class{static fromJSON(e,n){return ne[e.__className].fromJSON(e,n)}}.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){let t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){let e=this._pendingChanges[0].batch;this._currentWriter=new $k(this,e);let n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}L(wl,rt);class hb extends $t{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){let i=e;e=(r,s)=>{this.editor.execute(i),s()}}super.set(t,e,n)}}class Cl{constructor(t={}){this._context=t.context||new df({language:t.language}),this._context._addEditor(this,!t.context);let e=Array.from(this.constructor.builtinPlugins||[]);this.config=new va(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.config.define(this._context._getEditorConfig()),this.plugins=new Gi(this,e,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this.commands=new zk,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new wl;let n=new Nf;this.data=new $c(this.model,n),this.editing=new qc(this.model,n),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Yk([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new hb(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){let t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(i),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...t){try{return this.commands.execute(...t)}catch(e){b.a.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}L(Cl,rt);class mb{constructor(t){this.editor=t,this._components=new Map}*names(){for(let t of this._components.values())yield t.originalName}add(t,e){this._components.set(Sr(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new b.a("componentfactory-item-missing",this,{name:t});return this._components.get(Sr(t)).callback(this.editor.locale)}has(t){return this._components.has(Sr(t))}}function Sr(o){return String(o).toLowerCase()}class Al{constructor(t){this.editor=t,this.componentFactory=new mb(t),this.focusTracker=new zt,this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(let t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}}L(Al,V);var gb={setData(o){this.data.set(o)},getData(o){return this.data.get(o)}},pb={updateSourceElement(){if(!this.sourceElement)throw new b.a("editor-missing-sourceelement",this);var o,t;o=this.sourceElement,t=this.data.get(),o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}};class _l extends Un{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new xt({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new b.a("pendingactions-add-invalid-message",this);let e=Object.create(rt);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}let Ho='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',Ko='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',fb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',kb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',vl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',bb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',wb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',Cb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',Ab='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',yl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',xl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',Ir='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>',Dl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',_b='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',vb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',yb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',xb='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',Db='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',Eb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',Mb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>';function Nr({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;let s=typeof r.composedPath=="function"?r.composedPath():[];for(let a of n)if(a.contains(r.target)||s.includes(a))return;e()})}function Br(o){o.set("_isCssTransitionsDisabled",!1),o.disableCssTransitions=()=>{o._isCssTransitionsDisabled=!0},o.enableCssTransitions=()=>{o._isCssTransitionsDisabled=!1},o.extendTemplate({attributes:{class:[o.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Go({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}class Ie extends xt{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(let e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new b.a("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(let n of this)for(let i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(let r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(let r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}var Tb=g(1),z=g.n(Tb),El=g(12),Sb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(El.a,Sb),El.a.locals;class j{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new xt,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Lt.bind(this,this)}createCollection(t){let e=new Ie(t);return this._viewCollections.add(e),e}registerChild(t){Yt(t)||(t=[t]);for(let e of t)this._unboundChildren.add(e)}deregisterChild(t){Yt(t)||(t=[t]);for(let e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Lt(t)}extendTemplate(t){Lt.extend(this.template,t)}render(){if(this.isRendered)throw new b.a("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}L(j,hn),L(j,rt);class Lt{constructor(t){Object.assign(this,Il(Sl(t))),this._isRendered=!1,this._revertData=null}render(){let t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new b.a("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*At(function*t(e){if(e.children)for(let n of e.children)Wo(n)?yield n:Pr(n)&&(yield*At(t(n)))}(this))}static bind(t,e){return{to:(n,i)=>new Ib({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new Ml({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new b.a("template-extend-render",[this,t]);zl(t,Il(Sl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new b.a("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),qo(this.text)?this._bindToObservable({schema:this.text,updater:Nb(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,i,r;if(!this.attributes)return;let s=t.node,a=t.revertData;for(e in this.attributes)if(i=s.getAttribute(e),n=this.attributes[e],a&&(a.attributes[e]=i),r=B(n[0])&&n[0].ns?n[0].ns:null,qo(n)){let c=r?n[0].value:n;a&&Ll(e)&&c.unshift(i),this._bindToObservable({schema:c,updater:Bb(s,e,r),data:t})}else e=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],t):(a&&i&&Ll(e)&&n.unshift(i),n=n.map(c=>c&&c.value||c).reduce((c,l)=>c.concat(l),[]).reduce(Bl,""),kn(n)||s.setAttributeNS(r,e,n))}_renderStyleAttribute(t,e){let n=e.node;for(let i in t){let r=t[i];qo(r)?this._bindToObservable({schema:[r],updater:Pb(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){let e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying,r=0;for(let s of this.children)if(zr(s)){if(!i){s.setParent(e);for(let a of s)n.appendChild(a.element)}}else if(Wo(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(un(s))n.appendChild(s);else if(i){let a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(let e in this.eventListeners){let n=this.eventListeners[e].map(i=>{let[r,s]=e.split("@");return i.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){let i=n.revertData;Tl(t,e,n);let r=t.filter(s=>!kn(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(let n of e.bindings)for(let i of n)i();if(e.text)t.textContent=e.text;else{for(let n in e.attributes){let i=e.attributes[n];i===null?t.removeAttribute(n):t.setAttribute(n,i)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}L(Lt,V);class eo{constructor(t){Object.assign(this,t)}getValue(t){let e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){let i=()=>Tl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class Ib extends eo{activateDomEventListener(t,e,n){let i=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class Ml extends eo{getValue(t){return!kn(super.getValue(t))&&(this.valueIfTrue||!0)}}function qo(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(qo):o instanceof eo)}function Tl(o,t,{node:e}){let n=function(i,r){return i.map(s=>s instanceof eo?s.getValue(r):s)}(o,e);n=o.length==1&&o[0]instanceof Ml?n[0]:n.reduce(Bl,""),kn(n)?t.remove():t.set(n)}function Nb(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function Bb(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function Pb(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function Sl(o){return _a(o,t=>{if(t&&(t instanceof eo||Pr(t)||Wo(t)||zr(t)))return t})}function Il(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=gt(t.text)}(o),o.on&&(o.eventListeners=function(t){for(let e in t)Nl(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(let n in e)e[n].value&&(e[n].value=gt(e[n].value)),Nl(e,n)}(o.attributes);let t=[];if(o.children)if(zr(o.children))t.push(o.children);else for(let e of o.children)Pr(e)||Wo(e)||un(e)?t.push(e):t.push(new Lt(e));o.children=t}return o}function Nl(o,t){o[t]=gt(o[t])}function Bl(o,t){return kn(t)?o:kn(o)?t:`${o} ${t}`}function Pl(o,t){for(let e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function zl(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),Pl(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),Pl(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new b.a("ui-template-extend-children-mismatch",o);let e=0;for(let n of t.children)zl(o.children[e++],n)}}function kn(o){return!o&&o!==0}function Wo(o){return o instanceof j}function Pr(o){return o instanceof Lt}function zr(o){return o instanceof Ie}function Ll(o){return o=="class"||o=="style"}class zb extends Ie{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Lt({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=function(e,n,i={},r=[]){let s=i&&i.xmlns,a=s?e.createElementNS(s,n):e.createElement(n);for(let c in i)a.setAttribute(c,i[c]);!fc(r)&&Yt(r)||(r=[r]);for(let c of r)fc(c)&&(c=e.createTextNode(c)),a.appendChild(c);return a}(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();let t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Ol=g(13),Lb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Ol.a,Lb),Ol.a.locals;class Yo extends j{constructor(){super();let t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){let t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}var Rl=g(14),Ob={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Rl.a,Ob),Rl.a.locals;class jl extends j{constructor(t){super(t),this.set("text",""),this.set("position","s");let e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",n=>"ck-tooltip_"+n),e.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}var Fl=g(15),Rb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Fl.a,Rb),Fl.a.locals;class X extends j{constructor(t){super(t);let e=this.bindTemplate,n=w();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Yo,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",i=>!i),e.if("isVisible","ck-hidden",i=>!i),e.to("isOn",i=>i?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",i=>i||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,i=>!i),"aria-pressed":e.to("isOn",i=>!!this.isToggleable&&String(i))},children:this.children,on:{mousedown:e.to(i=>{i.preventDefault()}),click:e.to(i=>{this.isEnabled?this.fire("execute"):i.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){let t=new jl;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){let e=new j,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){let t=new j;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Ra(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=Ra(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Vl=g(16),jb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Vl.a,jb),Vl.a.locals;class Lr extends X{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){let t=new j;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}function Fb(o){return typeof o=="string"?{model:o,label:o,hasBorder:!1,view:{name:"span",styles:{color:o}}}:{model:o.color,label:o.label||o.color,hasBorder:o.hasBorder!==void 0&&o.hasBorder,view:{name:"span",styles:{color:`${o.color}`}}}}class Ul extends X{constructor(t){super(t);let e=this.bindTemplate;this.set("color"),this.set("hasBorder"),this.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',this.extendTemplate({attributes:{style:{backgroundColor:e.to("color")},class:["ck","ck-color-grid__tile",e.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}class ve{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(let e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(let i of n)t.keystrokeHandler.set(i,(r,s)=>{this[e](),s()})}}get first(){return this.focusables.find(Or)||null}get last(){return this.focusables.filter(Or).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{let i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){let e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let i=(e+n+t)%n;do{let r=this.focusables.get(i);if(Or(r))return r;i=(i+n+t)%n}while(i!==e);return null}}function Or(o){return!(!o.focus||lt.window.getComputedStyle(o.element).display=="none")}var Hl=g(17),Vb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Hl.a,Vb),Hl.a.locals;class Kl extends j{constructor(t,e){super(t);let n=e&&e.colorDefinitions||[],i={};e&&e.columns&&(i.gridTemplateColumns=`repeat( ${e.columns}, 1fr)`),this.set("selectedColor"),this.items=this.createCollection(),this.focusTracker=new zt,this.keystrokes=new $t,this._focusCycler=new ve({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowleft",focusNext:"arrowright"}}),this.items.on("add",(r,s)=>{s.isOn=s.color===this.selectedColor}),n.forEach(r=>{let s=new Ul;s.set({color:r.color,label:r.label,tooltip:!0,hasBorder:r.options.hasBorder}),s.on("execute",()=>{this.fire("execute",{value:r.color,hasBorder:r.options.hasBorder,label:r.label})}),this.items.add(s)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(r,s,a)=>{for(let c of this.items)c.isOn=c.color===a})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}}var Gl='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Rr extends X{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){let t=new Yo;return t.content=Gl,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var ql=g(18),Ub={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ql.a,Ub),ql.a.locals;class Wl extends j{constructor(t){super(t);let e=this.bindTemplate;this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new $t,this.focusTracker=new zt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}focus(){this.actionView.focus()}_createActionView(){let t=new X;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){let t=new X,e=t.bindTemplate;return t.icon=Gl,t.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.delegate("execute").to(this,"open"),t}}class Hb extends j{constructor(t){super(t);let e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){let t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Yl=g(19),Kb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Yl.a,Kb),Yl.a.locals;function Ql({element:o,target:t,positions:e,limiter:n,fitInViewport:i}){Re(t)&&(t=t()),Re(n)&&(n=n());let r=function(u){return u&&u.parentNode?u.offsetParent===lt.document.body?null:u.offsetParent:null}(o),s=new $(o),a=new $(t),c,l;n||i?[l,c]=function(h,m){let{elementRect:p,viewportRect:k}=m,f=p.getArea(),C=function(x,{targetRect:M,elementRect:N,limiterRect:q,viewportRect:ut}){let tt=[],Vt=N.getArea();for(let Mt of x){let yt=jr(Mt,M,N);if(!yt)continue;let[Ut,Tt]=yt,oe=0,xe=0;if(q)if(ut){let lo=q.getIntersection(ut);lo&&(oe=lo.getIntersectionArea(Tt))}else oe=q.getIntersectionArea(Tt);ut&&(xe=ut.getIntersectionArea(Tt));let co={positionName:Ut,positionRect:Tt,limiterIntersectArea:oe,viewportIntersectArea:xe};if(oe===Vt)return[co];tt.push(co)}return tt}(h,m);if(k){let x=$l(C.filter(({viewportIntersectArea:M})=>M===f),f);if(x)return x}return $l(C,f)}(e,{targetRect:a,elementRect:s,limiterRect:n&&new $(n).getVisible(),viewportRect:i&&new $(lt.window)})||jr(e[0],a,s):[l,c]=jr(e[0],a,s);let d=Jl(c);return r&&(d=function({left:u,top:h},m){let p=Jl(new $(m)),k=kc(m);return u-=p.left,h-=p.top,u+=m.scrollLeft,h+=m.scrollTop,u-=k.left,h-=k.top,{left:u,top:h}}(d,r)),{left:d.left,top:d.top,name:l}}function jr(o,t,e){let n=o(t,e);if(!n)return null;let{left:i,top:r,name:s}=n;return[s,e.clone().moveTo(i,r)]}function $l(o,t){let e,n,i=0;for(let{positionName:r,positionRect:s,limiterIntersectArea:a,viewportIntersectArea:c}of o){if(a===t)return[r,s];let l=c**2+a**2;l>i&&(i=l,e=s,n=r)}return e?[n,e]:null}function Jl({left:o,top:t}){let{scrollX:e,scrollY:n}=lt.window;return{left:o+e,top:t+n}}class bn extends j{constructor(t,e,n){super(t);let i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new $t,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",r=>!r)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&(this.panelPosition==="auto"?this.panelView.position=bn._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);let t=(e,n)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){let{south:t,north:e,southEast:n,southWest:i,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:l,northMiddleWest:d}=bn.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,a,c,t,r,s,l,d,e]:[i,n,c,a,t,s,r,d,l,e]}}bn.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},bn._getOptimalPosition=Ql;class Zl extends j{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Gb extends j{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Xl(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}var td=g(20),qb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(td.a,qb),td.a.locals;class Fr extends j{constructor(t,e){super(t);let n=this.bindTemplate,i=this.t;this.options=e||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new zt,this.keystrokes=new $t,this.set("class"),this.set("isCompact",!1),this.itemsView=new Wb(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection(),this._focusCycler=new ve({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}});let r=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var s;this.options.shouldGroupWhenFull&&this.options.isFloating&&r.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:r,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(s=this,s.bindTemplate.to(a=>{a.target===s.element&&a.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Qb(this):new Yb(this)}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){let n=Xl(t),i=n.items.filter((s,a,c)=>s==="|"||n.removeItems.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(Object(b.b)("toolbarview-line-break-ignored-when-grouping-items",c),!1):!!e.has(s)||(Object(b.b)("toolbarview-item-unavailable",{name:s}),!1))),r=this._cleanSeparators(i).map(s=>s==="|"?new Zl:s==="-"?new Gb:e.create(s));this.items.addMany(r)}_cleanSeparators(t){let e=s=>s!=="-"&&s!=="|",n=t.length,i=t.findIndex(e),r=n-t.slice().reverse().findIndex(e);return t.slice(i,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}}class Wb extends j{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class Yb{constructor(t){let e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Qb{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{let i=n.index;for(let r of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(r):this.ungroupedItems.remove(r);for(let r=i;r<i+n.added.length;r++){let s=n.added[r-i];r>this.ungroupedItems.length?this.groupedItems.add(s,r-this.ungroupedItems.length):this.ungroupedItems.add(s,r)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!this.viewElement.offsetParent)return void(this.shouldUpdateGroupingOnNextResize=!0);let t=this.groupedItems.length,e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;let t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new $(t.lastChild),i=new $(t);if(!this.cachedPadding){let r=lt.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new dt(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Zl),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){let t=this.viewLocale,e=t.t,n=Zt(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",id(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:Mb}),n.toolbarView.items.bindTo(this.groupedItems).using(i=>i),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var ed=g(21),$b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ed.a,$b),ed.a.locals;class Jb extends j{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new zt,this.keystrokes=new $t,this._focusCycler=new ve({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Zb extends j{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class Xb extends j{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var nd=g(22),tw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0},od=(z()(nd.a,tw),nd.a.locals,g(23)),ew={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(od.a,ew),od.a.locals;function Zt(o,t=Rr){let e=new t(o),n=new Hb(o),i=new bn(o,e,n);return e.bind("isEnabled").to(i),e instanceof Rr?e.bind("isOn").to(i,"isOpen"):e.arrowView.bind("isOn").to(i,"isOpen"),function(r){(function(s){s.on("render",()=>{Nr({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof Lr||(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r)}(i),i}function id(o,t){let e=o.locale,n=e.t,i=o.toolbarView=new Fr(e);i.set("ariaLabel",n("Dropdown toolbar")),o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(r=>i.items.add(r)),o.panelView.children.add(i),i.items.delegate("execute").to(o)}function no(o,t){let e=o.locale,n=o.listView=new Jb(e);n.items.bindTo(t).using(({type:i,model:r})=>{if(i==="separator")return new Xb(e);if(i==="button"||i==="switchbutton"){let s=new Zb(e),a;return a=i==="button"?new X(e):new Lr(e),a.bind(...Object.keys(r)).to(r),a.delegate("execute").to(s),s.children.add(a),s}}),o.panelView.children.add(n),n.items.delegate("execute").to(o)}var rd=g(24),nw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(rd.a,nw),rd.a.locals;class ow extends j{constructor(t){super(t),this.body=new zb(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var sd=g(25),iw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(sd.a,iw),sd.a.locals;class Vr extends j{constructor(t){super(t),this.set("text"),this.set("for"),this.id=`ck-editor__label_${w()}`;let e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class rw extends ow{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){let t=this.t,e=new Vr;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class sw extends j{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){let t=this._editingView;function e(n){t.change(i=>{let r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class aw extends sw{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();let t=this._editingView,e=this.t;t.change(n=>{let i=t.document.getRoot(this.name);n.setAttribute("aria-label",e("Rich Text Editor, %0",this.name),i)})}}var ad=g(26),cw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ad.a,cw),ad.a.locals;var cd=g(27),lw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(cd.a,lw),cd.a.locals;class dw extends j{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new zt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to("input"),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}var ld=g(28),uw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ld.a,uw),ld.a.locals;class Qo extends j{constructor(t,e){super(t);let n=`ck-labeled-field-view-${w()}`,i=`ck-labeled-field-view-status-${w()}`;this.fieldView=e(this,n,i),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);let r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(t){let e=new Vr(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){let e=new j(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function $o(o,t,e){let n=new dw(o.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n}class dd extends Un{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){let e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class wn{constructor(t,e){e&&On(this,e),t&&this.set(t)}}L(wn,rt);var ud=g(29),hw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ud.a,hw),ud.a.locals;let hd=mn("px"),md=lt.document.body;class K extends j{constructor(t){super(t);let e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",hd),left:e.to("left",hd)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();let e=K.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast],limiter:md,fitInViewport:!0},t),i=K._getOptimalPosition(n),r=parseInt(i.left),s=parseInt(i.top),a=i.name;Object.assign(this,{top:s,left:r,position:a})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);let e=Ur(t.target),n=t.limiter?Ur(t.limiter):md;this.listenTo(lt.document,"scroll",(i,r)=>{let s=r.target,a=e&&s.contains(e),c=n&&s.contains(n);!a&&!c&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(lt.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(lt.document,"scroll"),this.stopListening(lt.window,"resize")}}function Ur(o){return pe(o)?o:Lo(o)?o.commonAncestorContainer:typeof o=="function"?Ur(o()):null}function Ot(o,t){return o.top-t.height-K.arrowVerticalOffset}function Rt(o){return o.bottom+K.arrowVerticalOffset}K.arrowHorizontalOffset=25,K.arrowVerticalOffset=10,K._getOptimalPosition=Ql,K.defaultPositions={northWestArrowSouthWest:(o,t)=>({top:Ot(o,t),left:o.left-K.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthMiddleWest:(o,t)=>({top:Ot(o,t),left:o.left-.25*t.width-K.arrowHorizontalOffset,name:"arrow_smw"}),northWestArrowSouth:(o,t)=>({top:Ot(o,t),left:o.left-t.width/2,name:"arrow_s"}),northWestArrowSouthMiddleEast:(o,t)=>({top:Ot(o,t),left:o.left-.75*t.width+K.arrowHorizontalOffset,name:"arrow_sme"}),northWestArrowSouthEast:(o,t)=>({top:Ot(o,t),left:o.left-t.width+K.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(o,t)=>({top:Ot(o,t),left:o.left+o.width/2-K.arrowHorizontalOffset,name:"arrow_sw"}),northArrowSouthMiddleWest:(o,t)=>({top:Ot(o,t),left:o.left+o.width/2-.25*t.width-K.arrowHorizontalOffset,name:"arrow_smw"}),northArrowSouth:(o,t)=>({top:Ot(o,t),left:o.left+o.width/2-t.width/2,name:"arrow_s"}),northArrowSouthMiddleEast:(o,t)=>({top:Ot(o,t),left:o.left+o.width/2-.75*t.width+K.arrowHorizontalOffset,name:"arrow_sme"}),northArrowSouthEast:(o,t)=>({top:Ot(o,t),left:o.left+o.width/2-t.width+K.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(o,t)=>({top:Ot(o,t),left:o.right-K.arrowHorizontalOffset,name:"arrow_sw"}),northEastArrowSouthMiddleWest:(o,t)=>({top:Ot(o,t),left:o.right-.25*t.width-K.arrowHorizontalOffset,name:"arrow_smw"}),northEastArrowSouth:(o,t)=>({top:Ot(o,t),left:o.right-t.width/2,name:"arrow_s"}),northEastArrowSouthMiddleEast:(o,t)=>({top:Ot(o,t),left:o.right-.75*t.width+K.arrowHorizontalOffset,name:"arrow_sme"}),northEastArrowSouthEast:(o,t)=>({top:Ot(o,t),left:o.right-t.width+K.arrowHorizontalOffset,name:"arrow_se"}),southWestArrowNorthWest:(o,t)=>({top:Rt(o),left:o.left-K.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthMiddleWest:(o,t)=>({top:Rt(o),left:o.left-.25*t.width-K.arrowHorizontalOffset,name:"arrow_nmw"}),southWestArrowNorth:(o,t)=>({top:Rt(o),left:o.left-t.width/2,name:"arrow_n"}),southWestArrowNorthMiddleEast:(o,t)=>({top:Rt(o),left:o.left-.75*t.width+K.arrowHorizontalOffset,name:"arrow_nme"}),southWestArrowNorthEast:(o,t)=>({top:Rt(o),left:o.left-t.width+K.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(o,t)=>({top:Rt(o),left:o.left+o.width/2-K.arrowHorizontalOffset,name:"arrow_nw"}),southArrowNorthMiddleWest:(o,t)=>({top:Rt(o),left:o.left+o.width/2-.25*t.width-K.arrowHorizontalOffset,name:"arrow_nmw"}),southArrowNorth:(o,t)=>({top:Rt(o),left:o.left+o.width/2-t.width/2,name:"arrow_n"}),southArrowNorthMiddleEast:(o,t)=>({top:Rt(o),left:o.left+o.width/2-.75*t.width+K.arrowHorizontalOffset,name:"arrow_nme"}),southArrowNorthEast:(o,t)=>({top:Rt(o),left:o.left+o.width/2-t.width+K.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(o,t)=>({top:Rt(o),left:o.right-K.arrowHorizontalOffset,name:"arrow_nw"}),southEastArrowNorthMiddleWest:(o,t)=>({top:Rt(o),left:o.right-.25*t.width-K.arrowHorizontalOffset,name:"arrow_nmw"}),southEastArrowNorth:(o,t)=>({top:Rt(o),left:o.right-t.width/2,name:"arrow_n"}),southEastArrowNorthMiddleEast:(o,t)=>({top:Rt(o),left:o.right-.75*t.width+K.arrowHorizontalOffset,name:"arrow_nme"}),southEastArrowNorthEast:(o,t)=>({top:Rt(o),left:o.right-t.width+K.arrowHorizontalOffset,name:"arrow_ne"})};var gd=g(30),mw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0},pd=(z()(gd.a,mw),gd.a.locals,g(31)),gw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(pd.a,gw),pd.a.locals;let Jo=mn("px");class Zo extends S{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{let e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new K(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new b.a("contextualballoon-add-view-exist",[this,t]);let e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));let n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new b.a("contextualballoon-remove-view-not-exist",[this,t]);let e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;let e=this._idToStack.get(t);if(!e)throw new b.a("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){let t=Array.from(this._idToStack.values()),e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){let t=Array.from(this._idToStack.values()),e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){let t=new pw(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";let r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){let t=new fw(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}class pw extends j{constructor(t){super(t);let e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new zt,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){let n=new X(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class fw extends j{constructor(t,e){super(t);let n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Jo),left:n.to("left",Jo),width:n.to("width",Jo),height:n.to("height",Jo)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){let e=new j;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){let e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){let{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new $(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var fd=g(32),kw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(fd.a,kw),fd.a.locals;let oo=mn("px");class bw extends j{constructor(t){super(t);let e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Lt({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?oo(this._panelRect.height):null)}}}).render(),this._contentPanel=new Lt({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?oo(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?oo(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?oo(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(lt.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){let t=this._panelRect=this._contentPanel.getBoundingClientRect(),e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:oo(-lt.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}mn("px");var kd=g(33),ww={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(kd.a,ww),kd.a.locals,mn("px"),mn("px");var bd=g(34),Cw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(bd.a,Cw),bd.a.locals;let Xo=new WeakMap;function wd(o){let{view:t,element:e,text:n,isDirectHost:i=!0,keepOnFocus:r=!1}=o,s=t.document;Xo.has(s)||(Xo.set(s,new Map),s.registerPostFixer(a=>Cd(s,a))),Xo.get(s).set(e,{text:n,isDirectHost:i,keepOnFocus:r,hostElement:i?e:null}),t.change(a=>Cd(s,a))}function Aw(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function Cd(o,t){let e=Xo.get(o),n=[],i=!1;for(let[r,s]of e)s.isDirectHost&&(n.push(r),Ad(t,r,s)&&(i=!0));for(let[r,s]of e){if(s.isDirectHost)continue;let a=_w(r);a&&(n.includes(a)||(s.hostElement=a,Ad(t,r,s)&&(i=!0)))}return i}function Ad(o,t,e){let{text:n,isDirectHost:i,hostElement:r}=e,s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(u=>!u.is("uiElement")))return!1;if(c)return!0;let l=a.document;if(!l.isFocused)return!0;let d=l.selection.anchor;return d&&d.parent!==a}(r,e.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(o,r)&&(s=!0):Aw(o,r)&&(s=!0),s}function _w(o){if(o.childCount){let t=o.getChild(0);if(t.is("element")&&!t.is("uiElement"))return t}return null}let Hr=new Map;function Y(o,t,e){let n=Hr.get(o);n||(n=new Map,Hr.set(o,n)),n.set(t,e)}function vw(o){return[o]}function _d(o,t,e={}){let n=function(i,r){let s=Hr.get(i);return s&&s.has(r)?s.get(r):vw}(o.constructor,t.constructor);try{return n(o=o.clone(),t,e)}catch(i){throw i}}function yw(o,t,e){o=o.slice(),t=t.slice();let n=new xw(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(t);let i=n.originalOperations;if(o.length==0||t.length==0)return{operationsA:o,operationsB:t,originalOperations:i};let r=new WeakMap;for(let c of o)r.set(c,0);let s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:t.length},a=0;for(;a<o.length;){let c=o[a],l=r.get(c);if(l==t.length){a++;continue}let d=t[l],u=_d(c,d,n.getContext(c,d,!0)),h=_d(d,c,n.getContext(d,c,!1));n.updateRelation(c,d),n.setOriginalOperations(u,c),n.setOriginalOperations(h,d);for(let m of u)r.set(m,l+h.length);o.splice(a,1,...u),t.splice(l,1,...h)}if(e.padWithNoOps){let c=o.length-s.originalOperationsACount,l=t.length-s.originalOperationsBCount;yd(o,l-c),yd(t,c-l)}return vd(o,s.nextBaseVersionB),vd(t,s.nextBaseVersionA),{operationsA:o,operationsB:t,originalOperations:i}}class xw{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){let n=e?this.originalOperations.get(e):null;for(let i of t)this.originalOperations.set(i,n||i)}updateRelation(t,e){switch(t.constructor){case Z:switch(e.constructor){case wt:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case Z:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case at:switch(e.constructor){case wt:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case Z:if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{let n=E._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){let i=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:i,offset:r})}}}break;case wt:switch(e.constructor){case wt:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case at:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case jt:{let n=t.newRange;if(!n)return;switch(e.constructor){case Z:{let i=E._createFromPositionAndShift(e.sourcePosition,e.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);!r&&!s||i.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()});break}case wt:{let i=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(i||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){let e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){let n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;let r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(t,e,n){let i=this.originalOperations.get(t),r=this.originalOperations.get(e),s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function vd(o,t){for(let e of o)e.baseVersion=t++}function yd(o,t){for(let e=0;e<t;e++)o.push(new vt(0))}function xd(o,t,e){let n=o.nodes.getNode(0).getAttribute(t);if(n==e)return null;let i=new E(o.position,o.position.getShiftedBy(o.howMany));return new ft(i,t,n,e,0)}function Dd(o,t){return o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function Cn(o,t){let e=[];for(let n=0;n<o.length;n++){let i=o[n],r=new Z(i.start,i.end.offset-i.start.offset,t,0);e.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}Y(ft,ft,(o,t,e)=>{if(o.key===t.key&&o.range.start.hasSameParentAs(t.range.start)){let n=o.range.getDifference(t.range).map(r=>new ft(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(t.range);return i&&e.aIsStrong&&n.push(new ft(i,t.key,t.newValue,o.newValue,0)),n.length==0?[new vt(0)]:n}return[o]}),Y(ft,_t,(o,t)=>{if(o.range.start.hasSameParentAs(t.position)&&o.range.containsPosition(t.position)){let e=o.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new ft(n,o.key,o.oldValue,o.newValue,o.baseVersion));if(t.shouldReceiveAttributes){let n=xd(t,o.key,o.oldValue);n&&e.unshift(n)}return e}return o.range=o.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[o]}),Y(ft,wt,(o,t)=>{let e=[];o.range.start.hasSameParentAs(t.deletionPosition)&&(o.range.containsPosition(t.deletionPosition)||o.range.start.isEqual(t.deletionPosition))&&e.push(E._createFromPositionAndShift(t.graveyardPosition,1));let n=o.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(i=>new ft(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),Y(ft,Z,(o,t)=>function(e,n){let i=E._createFromPositionAndShift(n.sourcePosition,n.howMany),r=null,s=[];i.containsRange(e,!0)?r=e:e.start.hasSameParentAs(i.start)?(s=e.getDifference(i),r=e.getIntersection(i)):s=[e];let a=[];for(let c of s){c=c._getTransformedByDeletion(n.sourcePosition,n.howMany);let l=n.getMovedRangeStart(),d=c.start.hasSameParentAs(l);c=c._getTransformedByInsertion(l,n.howMany,d),a.push(...c)}return r&&a.push(r._getTransformedByMove(n.sourcePosition,n.targetPosition,n.howMany,!1)[0]),a}(o.range,t).map(e=>new ft(e,o.key,o.oldValue,o.newValue,o.baseVersion))),Y(ft,at,(o,t)=>{if(o.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(t.splitPosition)&&o.range.containsPosition(t.splitPosition)){let e=o.clone();return e.range=new E(t.moveTargetPosition.clone(),o.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),o.range.end=t.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,e]}return o.range=o.range._getTransformedBySplitOperation(t),[o]}),Y(_t,ft,(o,t)=>{let e=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(o.position)){let n=xd(o,t.key,t.newValue);n&&e.push(n)}return e}),Y(_t,_t,(o,t,e)=>(o.position.isEqual(t.position)&&e.aIsStrong||(o.position=o.position._getTransformedByInsertOperation(t)),[o])),Y(_t,Z,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),Y(_t,at,(o,t)=>(o.position=o.position._getTransformedBySplitOperation(t),[o])),Y(_t,wt,(o,t)=>(o.position=o.position._getTransformedByMergeOperation(t),[o])),Y(jt,_t,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(t)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(t)[0]),[o])),Y(jt,jt,(o,t,e)=>{if(o.name==t.name){if(!e.aIsStrong)return[new vt(0)];o.oldRange=t.newRange?t.newRange.clone():null}return[o]}),Y(jt,wt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(t)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(t)),[o])),Y(jt,Z,(o,t,e)=>{if(o.oldRange&&(o.oldRange=E._createFromRanges(o.oldRange._getTransformedByMoveOperation(t))),o.newRange){if(e.abRelation){let n=E._createFromRanges(o.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(o.newRange.start))return o.newRange.start.path=e.abRelation.path,o.newRange.end=n.end,[o];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=e.abRelation.path,[o]}o.newRange=E._createFromRanges(o.newRange._getTransformedByMoveOperation(t))}return[o]}),Y(jt,at,(o,t,e)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(t)),o.newRange){if(e.abRelation){let n=o.newRange._getTransformedBySplitOperation(t);return o.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?o.newRange.start=T._createAt(t.insertionPosition):o.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(o.newRange.start=T._createAt(t.moveTargetPosition)),o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?o.newRange.end=T._createAt(t.moveTargetPosition):o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?o.newRange.end=T._createAt(t.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(t)}return[o]}),Y(wt,_t,(o,t)=>(o.sourcePosition.hasSameParentAs(t.position)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(t),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t),[o])),Y(wt,wt,(o,t,e)=>{if(o.sourcePosition.isEqual(t.sourcePosition)&&o.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){let n=t.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new T(t.graveyardPosition.root,n),o.howMany=0,[o]}return[new vt(0)]}if(o.sourcePosition.isEqual(t.sourcePosition)&&!o.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){let n=o.targetPosition.root.rootName=="$graveyard",i=t.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){let s=t.targetPosition._getTransformedByMergeOperation(t),a=o.targetPosition._getTransformedByMergeOperation(t);return[new Z(s,o.howMany,a,0)]}return[new vt(0)]}return o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(t),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),o.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),Y(wt,Z,(o,t,e)=>{let n=E._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&o.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new vt(0)]:(o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition.hasSameParentAs(t.sourcePosition)&&(o.howMany-=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(t),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(t),o.graveyardPosition.isEqual(t.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)),[o])}),Y(wt,at,(o,t,e)=>{if(t.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),o.deletionPosition.isEqual(t.graveyardPosition)&&(o.howMany=t.howMany)),o.targetPosition.isEqual(t.splitPosition)){let n=t.howMany!=0,i=t.graveyardPosition&&o.deletionPosition.isEqual(t.graveyardPosition);if(n||i||e.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),[o]}if(o.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o];if(e.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=t.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}return o.sourcePosition.hasSameParentAs(t.splitPosition)&&(o.howMany=t.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}),Y(Z,_t,(o,t)=>{let e=E._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(t,!1)[0];return o.sourcePosition=e.start,o.howMany=e.end.offset-e.start.offset,o.targetPosition.isEqual(t.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t)),[o]}),Y(Z,Z,(o,t,e)=>{let n=E._createFromPositionAndShift(o.sourcePosition,o.howMany),i=E._createFromPositionAndShift(t.sourcePosition,t.howMany),r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=o.targetPosition.isEqual(t.targetPosition)&&a?o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):o.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Dd(o,t)&&Dd(t,o))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Cn([n],r);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Cn([n],r);let c=St(o.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Cn([n],r);o.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?o.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;let l=[],d=n.getDifference(i);for(let h of d){h.start=h.start._getTransformedByDeletion(t.sourcePosition,t.howMany),h.end=h.end._getTransformedByDeletion(t.sourcePosition,t.howMany);let m=St(h.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",p=h._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,m);l.push(...p)}let u=n.getIntersection(i);return u!==null&&s&&(u.start=u.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),u.end=u.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(u):l.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),l.length===0?[new vt(o.baseVersion)]:Cn(l,r)}),Y(Z,at,(o,t,e)=>{let n=o.targetPosition.clone();o.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=o.targetPosition._getTransformedBySplitOperation(t));let i=E._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(t.splitPosition)&&i.containsPosition(t.splitPosition)){let s=new E(t.splitPosition,i.end);return s=s._getTransformedBySplitOperation(t),Cn([new E(i.start,t.splitPosition),s],n)}o.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),o.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=o.targetPosition);let r=[i._getTransformedBySplitOperation(t)];if(t.graveyardPosition){let s=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);o.howMany>1&&s&&!e.aWasUndone&&r.push(E._createFromPositionAndShift(t.insertionPosition,1))}return Cn(r,n)}),Y(Z,wt,(o,t,e)=>{let n=E._createFromPositionAndShift(o.sourcePosition,o.howMany);if(t.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(o.type!="remove"||e.forceWeakRemove){if(o.howMany==1)return e.bWasUndone?(o.sourcePosition=t.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]):[new vt(0)]}else if(!e.aWasUndone){let r=[],s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);o.howMany>1&&(r.push(new Z(o.sourcePosition,o.howMany-1,o.targetPosition,0)),s=s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));let c=t.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),l=new Z(s,1,c,0),d=l.getMovedRangeStart().path.slice();d.push(0);let u=new T(l.targetPosition.root,d);a=a._getTransformedByMove(s,c,1);let h=new Z(a,t.howMany,u,0);return r.push(l),r.push(h),r}}let i=E._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(t);return o.sourcePosition=i.start,o.howMany=i.end.offset-i.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]}),Y(Ft,_t,(o,t)=>(o.position=o.position._getTransformedByInsertOperation(t),[o])),Y(Ft,wt,(o,t)=>o.position.isEqual(t.deletionPosition)?(o.position=t.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(t),[o])),Y(Ft,Z,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),Y(Ft,Ft,(o,t,e)=>{if(o.position.isEqual(t.position)){if(!e.aIsStrong)return[new vt(0)];o.oldName=t.newName}return[o]}),Y(Ft,at,(o,t)=>{if(St(o.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){let e=new Ft(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,e]}return o.position=o.position._getTransformedBySplitOperation(t),[o]}),Y(_e,_e,(o,t,e)=>{if(o.root===t.root&&o.key===t.key){if(!e.aIsStrong||o.newValue===t.newValue)return[new vt(0)];o.oldValue=t.newValue}return[o]}),Y(at,_t,(o,t)=>(o.splitPosition.hasSameParentAs(t.position)&&o.splitPosition.offset<t.position.offset&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(t),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(t),[o])),Y(at,wt,(o,t,e)=>{if(!o.graveyardPosition&&!e.bWasUndone&&o.splitPosition.hasSameParentAs(t.sourcePosition)){let n=t.graveyardPosition.path.slice();n.push(0);let i=new T(t.graveyardPosition.root,n),r=at.getInsertionPosition(new T(t.graveyardPosition.root,n)),s=new at(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=at.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(t.deletionPosition)&&!o.splitPosition.isAfter(t.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=at.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),Y(at,Z,(o,t,e)=>{let n=E._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.graveyardPosition){let r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!e.bWasUndone&&r){let s=o.splitPosition._getTransformedByMoveOperation(t),a=o.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);let l=new T(a.root,c);return[new Z(s,o.howMany,l,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)}let i=o.splitPosition.isEqual(t.targetPosition);if(i&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return o.howMany+=t.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),o.insertionPosition=at.getInsertionPosition(o.splitPosition),[o];if(i&&e.abRelation&&e.abRelation.howMany){let{howMany:r,offset:s}=e.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.splitPosition)){let r=t.howMany-(o.splitPosition.offset-t.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany),o.splitPosition=t.sourcePosition.clone(),o.insertionPosition=at.getInsertionPosition(o.splitPosition),[o]}return t.sourcePosition.isEqual(t.targetPosition)||(o.splitPosition.hasSameParentAs(t.sourcePosition)&&o.splitPosition.offset<=t.sourcePosition.offset&&(o.howMany-=t.howMany),o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(t),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(t):o.insertionPosition=at.getInsertionPosition(o.splitPosition),[o]}),Y(at,at,(o,t,e)=>{if(o.splitPosition.isEqual(t.splitPosition)){if(!o.graveyardPosition&&!t.graveyardPosition)return[new vt(0)];if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition))return[new vt(0)];if(e.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t),[o]}if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition)){let n=o.splitPosition.root.rootName=="$graveyard",i=t.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){let s=[];return t.howMany&&s.push(new Z(t.moveTargetPosition,t.howMany,t.splitPosition,0)),o.howMany&&s.push(new Z(o.splitPosition,o.howMany,o.moveTargetPosition,0)),s}return[new vt(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t)),o.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return o.howMany++,[o];if(t.splitPosition.isEqual(o.insertionPosition)&&e.baRelation=="splitBefore"){let n=t.insertionPosition.path.slice();n.push(0);let i=new T(t.insertionPosition.root,n);return[o,new Z(o.insertionPosition,1,i,0)]}return o.splitPosition.hasSameParentAs(t.splitPosition)&&o.splitPosition.offset<t.splitPosition.offset&&(o.howMany-=t.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(t),o.insertionPosition=at.getInsertionPosition(o.splitPosition),[o]});class Dw extends Se{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class ti extends Se{constructor(t){super(t),this.domEventType=["mousedown","mouseup"]}onDomEvent(t){this.fire(t.type,t)}}class ei{constructor(t){this.document=t}createDocumentFragment(t){return new Ke(this.document,t)}createElement(t,e,n){return new Qt(this.document,t,e,n)}createText(t){return new nt(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){let e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){let n=t.parent;if(n){let i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){let e=t.parent;if(e){let n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){let n=new Qt(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return I._createAt(t,e)}createPositionAfter(t){return I._createAfter(t)}createPositionBefore(t){return I._createBefore(t)}createRange(t,e){return new O(t,e)}createRangeOn(t){return O._createOn(t)}createRangeIn(t){return O._createIn(t)}createSelection(t,e,n){return new te(t,e,n)}}let Ew=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,Mw=/^rgb\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}[0-9]{1,3}[ %]?\)$/i,Tw=/^rgba\([ ]?([0-9]{1,3}[ %]?,[ ]?){3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,Sw=/^hsl\([ ]?([0-9]{1,3}[ %]?[,]?[ ]*){3}(1|[0-9]+%|[0]?\.?[0-9]+)?\)$/i,Iw=/^hsla\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,Nw=new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","rebeccapurple","currentcolor","transparent"]);function Bw(o){return o.startsWith("#")?Ew.test(o):o.startsWith("rgb")?Mw.test(o)||Tw.test(o):o.startsWith("hsl")?Sw.test(o)||Iw.test(o):Nw.has(o.toLowerCase())}let Pw=/^([+-]?[0-9]*([.][0-9]+)?(px|cm|mm|in|pc|pt|ch|em|ex|rem|vh|vw|vmin|vmax)|0)$/;function zw(o){return Pw.test(o)}let Lw=/^[+-]?[0-9]*([.][0-9]+)?%$/,Ow=["repeat-x","repeat-y","repeat","space","round","no-repeat"],Rw=["center","top","bottom","left","right"];function jw(o){return Rw.includes(o)}let Fw=["fixed","scroll","local"];function Vw(o){return Fw.includes(o)}let Uw=/^url\(/;function Hw(o){return Uw.test(o)}function Kw(o){return o.replace(/, /g,",").split(" ").map(t=>t.replace(/,/g,", "))}function Gw(o){o.setNormalizer("background",qw),o.setNormalizer("background-color",t=>({path:"background.color",value:t})),o.setReducer("background",t=>{let e=[];return e.push(["background-color",t.color]),e})}function qw(o){let t={},e=Kw(o);for(let i of e)n=i,Ow.includes(n)?(t.repeat=t.repeat||[],t.repeat.push(i)):jw(i)?(t.position=t.position||[],t.position.push(i)):Vw(i)?t.attachment=i:Bw(i)?t.color=i:Hw(i)&&(t.image=i);var n;return{path:"background",value:t}}class Ww extends Al{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Xl(t.config.get("toolbar")),this._elementReplacer=new yk}get element(){return this.view.element}init(t){let e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();let a=r.element;this.setEditableElement(r.name,a),this.focusTracker.add(a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){let t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){let t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:i,originKeystrokeHandler:r,originFocusTracker:s,toolbar:a,beforeFocus:c,afterBlur:l}){s.add(a.element),r.set("Alt+F10",(d,u)=>{s.isFocused&&!a.focusTracker.isFocused&&(c&&c(),a.focus(),u())}),a.keystrokes.set("Esc",(d,u)=>{a.focusTracker.isFocused&&(i.focus(),l&&l(),u())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){let t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,r=t.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");r&&wd({view:e,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var Ed=g(35),Yw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Ed.a,Yw),Ed.a.locals;class Qw extends rw{constructor(t,e,n={}){super(t),this.stickyPanel=new bw(t),this.toolbar=new Fr(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new aw(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class ni extends Cl{constructor(t,e){super(e),pe(t)&&(this.sourceElement=t),this.model.document.createRoot();let n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new Qw(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new Ww(this,i),function(r){if(!Re(r.updateSourceElement))throw new b.a("attachtoform-missing-elementapi-interface",r);let s=r.sourceElement;if(s&&s.tagName.toLowerCase()==="textarea"&&s.form){let a,c=s.form,l=()=>r.updateSourceElement();Re(c.submit)&&(a=c.submit,c.submit=()=>{l(),a.apply(c)}),c.addEventListener("submit",l),r.on("destroy",()=>{c.removeEventListener("submit",l),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{let i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(pe(t)?t:null)).then(()=>{if(!pe(t)&&e.initialData)throw new b.a("editor-create-initial-data",null);let r=e.initialData!==void 0?e.initialData:function(s){return pe(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t);return i.data.init(r)}).then(()=>i.fire("ready")).then(()=>i))})}}L(ni,gb),L(ni,pb);let Kr=["left","right","center","justify"];function Md(o){return Kr.includes(o)}function Td(o,t){return t.contentLanguageDirection=="rtl"?o==="right":o==="left"}function Sd(o){let t=o.map(n=>{let i;return i=typeof n=="string"?{name:n}:n,i}).filter(n=>{let i=!!Kr.includes(n.name);return i||Object(b.b)("alignment-config-name-not-recognized",{option:n}),i}),e=t.filter(n=>!!n.className).length;if(e&&e<t.length)throw new b.a("alignment-config-classnames-are-missing",{configuredOptions:o});return t.forEach((n,i,r)=>{let s=r.slice(i+1);if(s.some(a=>a.name==n.name))throw new b.a("alignment-config-name-already-defined",{option:n,configuredOptions:o});if(n.className&&s.some(a=>a.className==n.className))throw new b.a("alignment-config-classname-already-defined",{option:n,configuredOptions:o})}),t}let Gr="alignment";class $w extends H{refresh(){let t=this.editor.locale,e=Pt(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!e&&this._canBeAligned(e),this.isEnabled&&e.hasAttribute("alignment")?this.value=e.getAttribute("alignment"):this.value=t.contentLanguageDirection==="rtl"?"right":"left"}execute(t={}){let e=this.editor,n=e.locale,i=e.model,r=i.document,s=t.value;i.change(a=>{let c=Array.from(r.selection.getSelectedBlocks()).filter(d=>this._canBeAligned(d)),l=c[0].getAttribute("alignment");Td(s,n)||l===s||!s?function(d,u){for(let h of d)u.removeAttribute(Gr,h)}(c,a):function(d,u,h){for(let m of d)u.setAttribute(Gr,h,m)}(c,a,s)})}_canBeAligned(t){return this.editor.model.schema.checkAttribute(t,Gr)}}class Jw extends S{static get pluginName(){return"AlignmentEditing"}constructor(t){super(t),t.config.define("alignment",{options:[...Kr.map(e=>({name:e}))]})}init(){let t=this.editor,e=t.locale,n=t.model.schema,i=Sd(t.config.get("alignment.options")).filter(c=>Md(c.name)&&!Td(c.name,e)),r=i.some(c=>!!c.className);n.extend("$block",{allowAttributes:"alignment"}),t.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),r?t.conversion.attributeToAttribute(function(c){let l={model:{key:"alignment",values:c.map(d=>d.name)},view:{}};for(let d of c)l.view[d.name]={key:"class",value:d.className};return l}(i)):t.conversion.for("downcast").attributeToAttribute(function(c){let l={model:{key:"alignment",values:c.map(d=>d.name)},view:{}};for(let{name:d}of c)l.view[d]={key:"style",value:{"text-align":d}};return l}(i));let s=function(c){let l=[];for(let{name:d}of c)l.push({view:{key:"style",value:{"text-align":d}},model:{key:"alignment",value:d}});return l}(i);for(let c of s)t.conversion.for("upcast").attributeToAttribute(c);let a=function(c){let l=[];for(let{name:d}of c)l.push({view:{key:"align",value:d},model:{key:"alignment",value:d}});return l}(i);for(let c of a)t.conversion.for("upcast").attributeToAttribute(c);t.commands.add("alignment",new $w(t))}}let qr=new Map([["left",bb],["right",Cb],["center",wb],["justify",Ab]]);class Zw extends S{get localizedOptionTitles(){let t=this.editor.t;return{left:t("Align left"),right:t("Align right"),center:t("Align center"),justify:t("Justify")}}static get pluginName(){return"AlignmentUI"}init(){let t=this.editor,e=t.ui.componentFactory,n=t.t,i=Sd(t.config.get("alignment.options"));i.map(r=>r.name).filter(Md).forEach(r=>this._addButton(r)),e.add("alignment",r=>{let s=Zt(r),a=i.map(l=>e.create(`alignment:${l.name}`));id(s,a),s.buttonView.set({label:n("Text alignment"),tooltip:!0}),s.toolbarView.isVertical=!0,s.toolbarView.ariaLabel=n("Text alignment toolbar"),s.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});let c=r.contentLanguageDirection==="rtl"?qr.get("right"):qr.get("left");return s.buttonView.bind("icon").toMany(a,"isOn",(...l)=>{let d=l.findIndex(u=>u);return d<0?c:a[d].icon}),s.bind("isEnabled").toMany(a,"isEnabled",(...l)=>l.some(d=>d)),s})}_addButton(t){let e=this.editor;e.ui.componentFactory.add(`alignment:${t}`,n=>{let i=e.commands.get("alignment"),r=new X(n);return r.set({label:this.localizedOptionTitles[t],icon:qr.get(t),tooltip:!0,isToggleable:!0}),r.bind("isEnabled").to(i),r.bind("isOn").to(i,"value",s=>s===t),this.listenTo(r,"execute",()=>{e.execute("alignment",{value:t}),e.editing.view.focus()}),r})}}function Ne(o,t,e,n){let i,r=null;typeof n=="function"?i=n:(r=o.commands.get(n),i=()=>{o.execute(n)}),o.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!t.isEnabled)return;let c=Pt(o.model.document.selection.getRanges());if(!c.isCollapsed||a.type=="transparent")return;let l=Array.from(o.model.document.differ.getChanges()),d=l[0];if(l.length!=1||d.type!=="insert"||d.name!="$text"||d.length!=1)return;let u=d.position.parent;if(u.is("element","codeBlock")||u.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||r&&r.value===!0)return;let h=u.getChild(0),m=o.model.createRangeOn(h);if(!m.containsRange(c)&&!c.end.isEqual(m.end))return;let p=e.exec(h.data.substr(0,c.end.offset));p&&o.model.enqueueChange(k=>{let f=k.createPositionAt(u,0),C=k.createPositionAt(u,p[0].length),x=new ce(f,C);if(i({match:p})!==!1){k.remove(x);let M=o.model.document.selection.getFirstRange(),N=k.createRangeIn(u);!u.isEmpty||N.isEqual(M)||N.containsRange(M,!0)||k.remove(u)}x.detach()})})}function An(o,t,e,n){let i,r;e instanceof RegExp?i=e:r=e,r=r||(s=>{let a,c=[],l=[];for(;(a=i.exec(s))!==null&&!(a&&a.length<4);){let{index:d,1:u,2:h,3:m}=a,p=u+h+m;d+=a[0].length-p.length;let k=[d,d+u.length],f=[d+u.length+h.length,d+u.length+h.length+m.length];c.push(k),c.push(f),l.push([d+u.length,d+u.length+h.length])}return{remove:c,format:l}}),o.model.document.on("change:data",(s,a)=>{if(a.type=="transparent"||!t.isEnabled)return;let c=o.model,l=c.document.selection;if(!l.isCollapsed)return;let d=Array.from(c.document.differ.getChanges()),u=d[0];if(d.length!=1||u.type!=="insert"||u.name!="$text"||u.length!=1)return;let h=l.focus,m=h.parent,{text:p,range:k}=function(M,N){let q=M.start;return{text:Array.from(M.getItems()).reduce((ut,tt)=>!tt.is("$text")&&!tt.is("$textProxy")||tt.getAttribute("code")?(q=N.createPositionAfter(tt),""):ut+tt.data,""),range:N.createRange(q,M.end)}}(c.createRange(c.createPositionAt(m,0),h),c),f=r(p),C=Id(k.start,f.format,c),x=Id(k.start,f.remove,c);C.length&&x.length&&c.enqueueChange(M=>{if(n(M,C)!==!1)for(let N of x.reverse())M.remove(N)})})}function Id(o,t,e){return t.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>e.createRange(o.getShiftedBy(n[0]),o.getShiftedBy(n[1])))}function oi(o,t){return(e,n)=>{if(!o.commands.get(t).isEnabled)return!1;let i=o.model.schema.getValidRanges(n,t);for(let r of i)e.setAttribute(t,!0,r);e.removeSelectionAttribute(t)}}class Nd{constructor(){let t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(t){let e=this._reader;return this.total=t.size,new Promise((n,i)=>{e.onload=()=>{let r=e.result;this._data=r,n(r)},e.onerror=()=>{i("error")},e.onabort=()=>{i("aborted")},this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}L(Nd,rt);class Be extends S{static get pluginName(){return"FileRepository"}static get requires(){return[_l]}init(){this.loaders=new xt,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return Object(b.b)("filerepository-no-upload-adapter"),null;let e=new Wr(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(n=>{this._loadersMap.set(n,e)}).catch(()=>{}),e.on("change:uploaded",()=>{let n=0;for(let i of this.loaders)n+=i.uploaded;this.uploaded=n}),e.on("change:uploadTotal",()=>{let n=0;for(let i of this.loaders)i.uploadTotal&&(n+=i.uploadTotal);this.uploadTotal=n}),e}destroyLoader(t){let e=t instanceof Wr?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((n,i)=>{n===e&&this._loadersMap.delete(i)})}_updatePendingAction(){let t=this.editor.plugins.get(_l);if(this.loaders.length){if(!this._pendingAction){let e=this.editor.t,n=i=>`${e("Upload in progress")} ${parseInt(i)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}L(Be,rt);class Wr{constructor(t,e){this.id=w(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new Nd,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(n,i)=>i?n/i*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!="idle")throw new b.a("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(t=>this._reader.read(t)).then(t=>{if(this.status!=="reading")throw this.status;return this.status="idle",t}).catch(t=>{throw t==="aborted"?(this.status="aborted","aborted"):(this.status="error",this._reader.error?this._reader.error:t)})}upload(){if(this.status!="idle")throw new b.a("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{throw this.status==="aborted"?"aborted":(this.status="error",t)})}abort(){let t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?t=="reading"?this._reader.abort():t=="uploading"&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){let e={};return e.promise=new Promise((n,i)=>{e.rejecter=i,e.isFulfilled=!1,t.then(r=>{e.isFulfilled=!0,n(r)}).catch(r=>{e.isFulfilled=!0,i(r)})}),e}}L(Wr,rt);class Xw{constructor(t){this.loader=t}upload(){return new Promise((t,e)=>{let n=this.reader=new window.FileReader;n.addEventListener("load",()=>{t({default:n.result})}),n.addEventListener("error",i=>{e(i)}),n.addEventListener("abort",()=>{e()}),this.loader.file.then(i=>{n.readAsDataURL(i)})})}abort(){this.reader.abort()}}function*Bd(o,t){for(let e of t)e&&o.getAttributeProperties(e[0]).copyOnEnter&&(yield e)}class tC extends H{execute(){let t=this.editor.model,e=t.document;t.change(n=>{(function(i,r,s,a){let c=s.isCollapsed,l=s.getFirstRange(),d=l.start.parent,u=l.end.parent;if(a.isLimit(d)||a.isLimit(u))return void(c||d!=u||i.deleteContent(s));if(c){let h=Bd(r.model.schema,s.getAttributes());Pd(r,l.start),r.setSelectionAttribute(h)}else{let h=!(l.start.isAtStart&&l.end.isAtEnd),m=d==u;i.deleteContent(s,{leaveUnmerged:h}),h&&(m?Pd(r,s.focus):r.setSelection(u,0))}})(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function Pd(o,t){o.split(t),o.setSelection(t.parent.nextSibling,0)}class zd extends be{constructor(t){super(t);let e=this.document;e.on("keydown",(n,i)=>{if(this.isEnabled&&i.keyCode==G.enter){let r=new To(e,"enter",e.selection.getFirstRange());e.fire(r,new gr(e,i.domEvent,{isSoft:i.shiftKey})),r.stop.called&&n.stop()}})}observe(){}}class ii extends S{static get pluginName(){return"Enter"}init(){let t=this.editor,e=t.editing.view,n=e.document;e.addObserver(zd),t.commands.add("enter",new tC(t)),this.listenTo(n,"enter",(i,r)=>{r.preventDefault(),r.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class eC extends H{execute(){let t=this.editor.model,e=t.document;t.change(n=>{(function(i,r,s){let a=s.isCollapsed,c=s.getFirstRange(),l=c.start.parent,d=c.end.parent,u=l==d;if(a){let h=Bd(i.schema,s.getAttributes());Ld(i,r,c.end),r.removeSelectionAttribute(s.getAttributeKeys()),r.setSelectionAttribute(h)}else{let h=!(c.start.isAtStart&&c.end.isAtEnd);i.deleteContent(s,{leaveUnmerged:h}),u?Ld(i,r,s.focus):h&&r.setSelection(d,0)}})(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){let t=this.editor.model,e=t.document;this.isEnabled=function(n,i){if(i.rangeCount>1)return!1;let r=i.anchor;if(!r||!n.checkChild(r,"softBreak"))return!1;let s=i.getFirstRange(),a=s.start.parent,c=s.end.parent;return!((Yr(a,n)||Yr(c,n))&&a!==c)}(t.schema,e.selection)}}function Ld(o,t,e){let n=t.createElement("softBreak");o.insertContent(n,e),t.setSelection(n,"after")}function Yr(o,t){return!o.is("rootElement")&&(t.isLimit(o)||Yr(o.parent,t))}class nC extends S{static get pluginName(){return"ShiftEnter"}init(){let t=this.editor,e=t.model.schema,n=t.conversion,i=t.editing.view,r=i.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(s,{writer:a})=>a.createEmptyElement("br")}),i.addObserver(zd),t.commands.add("shiftEnter",new eC(t)),this.listenTo(r,"enter",(s,a)=>{a.preventDefault(),a.isSoft&&(t.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class Od{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=(n,i)=>{i.type!="transparent"&&i!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class oC extends H{constructor(t,e){super(t),this._buffer=new Od(t.model,e),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){let e=this.editor.model,n=e.document,i=t.text||"",r=i.length,s=t.range?e.createSelection(t.range):n.selection,a=t.resultRange;e.enqueueChange(this._buffer.batch,c=>{this._buffer.lock(),this._batches.add(this._buffer.batch),e.deleteContent(s),i&&e.insertContent(c.createText(i,n.selection.getAttributes()),s),a?c.setSelection(a):s.is("documentSelection")||c.setSelection(s),this._buffer.unlock(),this._buffer.input(r)})}}let Rd=[se("arrowUp"),se("arrowRight"),se("arrowDown"),se("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let o=112;o<=135;o++)Rd.push(o);function jd(o){return!(!o.ctrlKey&&!o.metaKey)||Rd.includes(o.keyCode)}function Fd(o){if(o.newChildren.length-o.oldChildren.length!=1)return;let t=function(n,i){let r=[],s,a=0;return n.forEach(d=>{d=="equal"?(c(),a++):d=="insert"?(l("insert")?s.values.push(i[a]):(c(),s={type:"insert",index:a,values:[i[a]]}),a++):l("delete")?s.howMany++:(c(),s={type:"delete",index:a,howMany:1})}),c(),r;function c(){s&&(r.push(s),s=null)}function l(d){return s&&s.type==d}}(Te(o.oldChildren,o.newChildren,iC),o.newChildren);if(t.length>1)return;let e=t[0];return e.values[0]&&e.values[0].is("$text")?e:void 0}function iC(o,t){return o&&o.is("$text")&&t&&t.is("$text")?o.data===t.data:o===t}class rC{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(function(n){if(n.length==0)return!1;for(let i of n)if(i.type==="children"&&!Fd(i))return!0;return!1}(t))this._handleContainerChildrenMutations(t,e);else for(let n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){let n=function(Vt){let Mt=Vt.map(yt=>yt.node).reduce((yt,Ut)=>yt.getCommonAncestor(Ut,{includeSelf:!0}));if(Mt)return Mt.getAncestors({includeSelf:!0,parentFirst:!0}).find(yt=>yt.is("containerElement")||yt.is("rootElement"))}(t);if(!n)return;let i=this.editor.editing.view.domConverter.mapViewToDom(n),r=new No(this.editor.editing.view.document),s=this.editor.data.toModel(r.domToView(i)).getChild(0),a=this.editor.editing.mapper.toModelElement(n);if(!a)return;let c=Array.from(s.getChildren()),l=Array.from(a.getChildren()),d=c[c.length-1],u=l[l.length-1],h=d&&d.is("element","softBreak"),m=u&&!u.is("element","softBreak");h&&m&&c.pop();let p=this.editor.model.schema;if(!Vd(c,p)||!Vd(l,p))return;let k=c.map(Vt=>Vt.is("$text")?Vt.data:"@").join("").replace(/\u00A0/g," "),f=l.map(Vt=>Vt.is("$text")?Vt.data:"@").join("").replace(/\u00A0/g," ");if(f===k)return;let C=Te(f,k),{firstChangeAt:x,insertions:M,deletions:N}=Ud(C),q=null;e&&(q=this.editing.mapper.toModelRange(e.getFirstRange()));let ut=k.substr(x,M),tt=this.editor.model.createRange(this.editor.model.createPositionAt(a,x),this.editor.model.createPositionAt(a,x+N));this.editor.execute("input",{text:ut,range:tt,resultRange:q})}_handleTextMutation(t,e){if(t.type!="text")return;let n=t.newText.replace(/\u00A0/g," "),i=t.oldText.replace(/\u00A0/g," ");if(i===n)return;let r=Te(i,n),{firstChangeAt:s,insertions:a,deletions:c}=Ud(r),l=null;e&&(l=this.editing.mapper.toModelRange(e.getFirstRange()));let d=this.editing.view.createPositionAt(t.node,s),u=this.editing.mapper.toModelPosition(d),h=this.editor.model.createRange(u,u.getShiftedBy(c)),m=n.substr(s,a);this.editor.execute("input",{text:m,range:h,resultRange:l})}_handleTextNodeInsertion(t){if(t.type!="children")return;let e=Fd(t),n=this.editing.view.createPositionAt(t.node,e.index),i=this.editing.mapper.toModelPosition(n),r=e.values[0].data;this.editor.execute("input",{text:r.replace(/\u00A0/g," "),range:this.editor.model.createRange(i)})}}function Vd(o,t){return o.every(e=>t.isInline(e))}function Ud(o){let t=null,e=null;for(let r=0;r<o.length;r++)o[r]!="equal"&&(t=t===null?r:t,e=r);let n=0,i=0;for(let r=t;r<=e;r++)o[r]!="insert"&&n++,o[r]!="delete"&&i++;return{insertions:i,deletions:n,firstChangeAt:t}}class Hd extends S{static get pluginName(){return"Input"}init(){let t=this.editor,e=new oC(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),function(n){let i=null,r=n.model,s=n.editing.view,a=n.commands.get("input");function c(d){let u=r.document,h=s.document.isComposing,m=i&&i.isEqual(u.selection);i=null,a.isEnabled&&(jd(d)||u.selection.isCollapsed||h&&d.keyCode===229||!h&&d.keyCode===229&&m||l())}function l(){let d=a.buffer;d.lock();let u=d.batch;a._batches.add(u),r.enqueueChange(u,()=>{r.deleteContent(r.document.selection)}),d.unlock()}Ct.isAndroid?s.document.on("beforeinput",(d,u)=>c(u),{priority:"lowest"}):s.document.on("keydown",(d,u)=>c(u),{priority:"lowest"}),s.document.on("compositionstart",function(){let d=r.document,u=d.selection.rangeCount!==1||d.selection.getFirstRange().isFlat;d.selection.isCollapsed||u||l()},{priority:"lowest"}),s.document.on("compositionend",()=>{i=r.createSelection(r.document.selection)},{priority:"lowest"})}(t),function(n){n.editing.view.document.on("mutations",(i,r,s)=>{new rC(n).handle(r,s)})}(t)}isInput(t){return this.editor.commands.get("input")._batches.has(t)}}class Kd extends H{constructor(t,e){super(t),this.direction=e,this._buffer=new Od(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){let e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();let r=i.createSelection(t.selection||n.selection),s=t.sequence||1,a=r.isCollapsed;if(r.isCollapsed&&e.modifySelection(r,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(s))return void this._replaceEntireContentWithParagraph(i);if(this._shouldReplaceFirstBlockWithParagraph(r,s))return void this.editor.execute("paragraph",{selection:r});if(r.isCollapsed)return;let c=0;r.getFirstRange().getMinimalFlatRanges().forEach(l=>{c+=tr(l.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(r,{doNotResetEntireContent:a,direction:this.direction}),this._buffer.input(c),i.setSelection(r),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;let e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(i))||!e.schema.checkChild(i,"paragraph"))return!1;let r=i.getChild(0);return!r||r.name!=="paragraph"}_replaceEntireContentWithParagraph(t){let e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n),r=t.createElement("paragraph");t.remove(t.createRangeIn(i)),t.insert(r,i),t.setSelection(r,0)}_shouldReplaceFirstBlockWithParagraph(t,e){let n=this.editor.model;if(e>1||this.direction!="backward"||!t.isCollapsed)return!1;let i=t.getFirstPosition(),r=n.schema.getLimitElement(i),s=r.getChild(0);return i.parent==s&&!!t.containsEntireContent(s)&&!!n.schema.checkChild(r,"paragraph")&&s.name!="paragraph"}}class sC extends be{constructor(t){super(t);let e=t.document,n=0;function i(r,s,a){let c=new To(e,"delete",e.selection.getFirstRange());e.fire(c,new gr(e,s,a)),c.stop.called&&r.stop()}e.on("keyup",(r,s)=>{s.keyCode!=G.delete&&s.keyCode!=G.backspace||(n=0)}),e.on("keydown",(r,s)=>{let a={};if(s.keyCode==G.delete)a.direction="forward",a.unit="character";else{if(s.keyCode!=G.backspace)return;a.direction="backward",a.unit="codePoint"}let c=Ct.isMac?s.altKey:s.ctrlKey;a.unit=c?"word":a.unit,a.sequence=++n,i(r,s.domEvent,a)}),Ct.isAndroid&&e.on("beforeinput",(r,s)=>{if(s.domEvent.inputType!="deleteContentBackward")return;let a={unit:"codepoint",direction:"backward",sequence:1},c=s.domTarget.ownerDocument.defaultView.getSelection();c.anchorNode==c.focusNode&&c.anchorOffset+1!=c.focusOffset&&(a.selectionToRemove=t.domConverter.domSelectionToView(c)),i(r,s.domEvent,a)})}observe(){}}class io extends S{static get pluginName(){return"Delete"}init(){let t=this.editor,e=t.editing.view,n=e.document;e.addObserver(sC);let i=new Kd(t,"forward");if(t.commands.add("deleteForward",i),t.commands.add("forwardDelete",i),t.commands.add("delete",new Kd(t,"backward")),this.listenTo(n,"delete",(r,s)=>{let a={unit:s.unit,sequence:s.sequence};if(s.selectionToRemove){let c=t.model.createSelection(),l=[];for(let d of s.selectionToRemove.getRanges())l.push(t.editing.mapper.toModelRange(d));c.setTo(l),a.selection=c}t.execute(s.direction=="forward"?"deleteForward":"delete",a),s.preventDefault(),e.scrollToTheSelection()},{priority:"low"}),Ct.isAndroid){let r=null;this.listenTo(n,"delete",(s,a)=>{let c=a.domTarget.ownerDocument.defaultView.getSelection();r={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}},{priority:"lowest"}),this.listenTo(n,"keyup",(s,a)=>{if(r){let c=a.domTarget.ownerDocument.defaultView.getSelection();c.collapse(r.anchorNode,r.anchorOffset),c.extend(r.focusNode,r.focusOffset),r=null}})}}}class aC extends S{static get requires(){return[Hd,io]}static get pluginName(){return"Typing"}}function Gd(o,t){let e=o.start;return{text:Array.from(o.getItems()).reduce((n,i)=>i.is("$text")||i.is("$textProxy")?n+i.data:(e=t.createPositionAfter(i),""),""),range:t.createRange(e,o.end)}}class Qr{constructor(t,e){this.model=t,this.testCallback=e,this.hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(t.document.selection),this.stopListening(t.document))}),this._startListening()}_startListening(){let t=this.model.document;this.listenTo(t.selection,"change:range",(e,{directChange:n})=>{n&&(t.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this.hasMatch=!1))}),this.listenTo(t,"change:data",(e,n)=>{n.type!="transparent"&&this._evaluateTextBeforeSelection("data",{batch:n})})}_evaluateTextBeforeSelection(t,e={}){let n=this.model,i=n.document.selection,r=n.createRange(n.createPositionAt(i.focus.parent,0),i.focus),{text:s,range:a}=Gd(r,n),c=this.testCallback(s);if(!c&&this.hasMatch&&this.fire("unmatched"),this.hasMatch=!!c,c){let l=Object.assign(e,{text:s,range:a});typeof c=="object"&&Object.assign(l,c),this.fire(`matched:${t}`,l)}}}L(Qr,rt);class qd extends S{static get pluginName(){return"TwoStepCaretMovement"}constructor(t){super(t),this.attributes=new Set,this._overrideUid=null}init(){let t=this.editor,e=t.model,n=t.editing.view,i=t.locale,r=e.document.selection;this.listenTo(n.document,"arrowKey",(s,a)=>{if(!r.isCollapsed||a.shiftKey||a.altKey||a.ctrlKey)return;let c=a.keyCode==G.arrowright,l=a.keyCode==G.arrowleft;if(!c&&!l)return;let d=i.contentLanguageDirection,u=!1;u=d==="ltr"&&c||d==="rtl"&&l?this._handleForwardMovement(a):this._handleBackwardMovement(a),u===!0&&s.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(r,"change:range",(s,a)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!a.directChange&&si(r.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(t){this.attributes.add(t)}_handleForwardMovement(t){let e=this.attributes,n=this.editor.model.document.selection,i=n.getFirstPosition();return!this._isGravityOverridden&&(!i.isAtStart||!$r(n,e))&&(si(i,e)?(ri(t),this._overrideGravity(),!0):void 0)}_handleBackwardMovement(t){let e=this.attributes,n=this.editor.model,i=n.document.selection,r=i.getFirstPosition();return this._isGravityOverridden?(ri(t),this._restoreGravity(),Jr(n,e,r),!0):r.isAtStart?!!$r(i,e)&&(ri(t),Jr(n,e,r),!0):function(s,a){return si(s.getShiftedBy(-1),a)}(r,e)?r.isAtEnd&&!$r(i,e)&&si(r,e)?(ri(t),Jr(n,e,r),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):void 0}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function $r(o,t){for(let e of t)if(o.hasAttribute(e))return!0;return!1}function Jr(o,t,e){let n=e.nodeBefore;o.change(i=>{n?i.setSelectionAttribute(n.getAttributes()):i.removeSelectionAttribute(t)})}function ri(o){o.preventDefault()}function si(o,t){let{nodeBefore:e,nodeAfter:n}=o;for(let i of t){let r=e?e.getAttribute(i):void 0;if((n?n.getAttribute(i):void 0)!==r)return!0}return!1}var Wd=/[\\^$.*+?()[\]{}|]/g,cC=RegExp(Wd.source),lC=function(o){return(o=Wi(o))&&cC.test(o)?o.replace(Wd,"\\$&"):o};let dC={copyright:{from:"(c)",to:"\xA9"},registeredTrademark:{from:"(r)",to:"\xAE"},trademark:{from:"(tm)",to:"\u2122"},oneHalf:{from:"1/2",to:"\xBD"},oneThird:{from:"1/3",to:"\u2153"},twoThirds:{from:"2/3",to:"\u2154"},oneForth:{from:"1/4",to:"\xBC"},threeQuarters:{from:"3/4",to:"\xBE"},lessThanOrEqual:{from:"<=",to:"\u2264"},greaterThanOrEqual:{from:">=",to:"\u2265"},notEqual:{from:"!=",to:"\u2260"},arrowLeft:{from:"<-",to:"\u2190"},arrowRight:{from:"->",to:"\u2192"},horizontalEllipsis:{from:"...",to:"\u2026"},enDash:{from:/(^| )(--)( )$/,to:[null,"\u2013",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"\u2014",null]},quotesPrimary:{from:_n('"'),to:[null,"\u201C",null,"\u201D"]},quotesSecondary:{from:_n("'"),to:[null,"\u2018",null,"\u2019"]},quotesPrimaryEnGb:{from:_n("'"),to:[null,"\u2018",null,"\u2019"]},quotesSecondaryEnGb:{from:_n('"'),to:[null,"\u201C",null,"\u201D"]},quotesPrimaryPl:{from:_n('"'),to:[null,"\u201E",null,"\u201D"]},quotesSecondaryPl:{from:_n("'"),to:[null,"\u201A",null,"\u2019"]}},Yd={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},uC=["symbols","mathematical","typography","quotes"];function hC(o){return typeof o=="string"?new RegExp(`(${lC(o)})$`):o}function mC(o){return typeof o=="string"?()=>[o]:o instanceof Array?()=>o:o}function gC(o){return(o.textNode?o.textNode:o.nodeAfter).getAttributes()}function _n(o){return new RegExp(`(^|\\s)(${o})([^${o}]*)(${o})$`)}function vn(o,t,e,n){return n.createRange(Qd(o,t,e,!0,n),Qd(o,t,e,!1,n))}function Qd(o,t,e,n,i){let r=o.textNode||(n?o.nodeBefore:o.nodeAfter),s=null;for(;r&&r.getAttribute(t)==e;)s=r,r=n?r.previousSibling:r.nextSibling;return s?i.createPositionAt(s,n?"before":"after"):o}class pC extends H{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){let e=this.editor.model,n=e.schema,i=e.document.selection,r=Array.from(i.getSelectedBlocks()),s=t.forceValue===void 0?!this.value:t.forceValue;e.change(a=>{if(s){let c=r.filter(l=>ai(l)||Jd(n,l));this._applyQuote(a,c)}else this._removeQuote(a,r.filter(ai))})}_getValue(){let t=Pt(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!ai(t))}_checkEnabled(){if(this.value)return!0;let t=this.editor.model.document.selection,e=this.editor.model.schema,n=Pt(t.getSelectedBlocks());return!!n&&Jd(e,n)}_removeQuote(t,e){$d(t,e).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd)return void t.unwrap(n.start.parent);if(n.start.isAtStart){let r=t.createPositionBefore(n.start.parent);return void t.move(n,r)}n.end.isAtEnd||t.split(n.end);let i=t.createPositionAfter(n.end.parent);t.move(n,i)})}_applyQuote(t,e){let n=[];$d(t,e).reverse().forEach(i=>{let r=ai(i.start);r||(r=t.createElement("blockQuote"),t.wrap(i,r)),n.push(r)}),n.reverse().reduce((i,r)=>i.nextSibling==r?(t.merge(t.createPositionAfter(i)),i):r)}}function ai(o){return o.parent.name=="blockQuote"?o.parent:null}function $d(o,t){let e,n=0,i=[];for(;n<t.length;){let r=t[n],s=t[n+1];e||(e=o.createPositionBefore(r)),s&&r.nextSibling==s||(i.push(o.createRange(e,o.createPositionAfter(r))),e=null),n++}return i}function Jd(o,t){let e=o.checkChild(t.parent,"blockQuote"),n=o.checkChild(["$root","blockQuote"],t);return e&&n}class fC extends S{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[ii,io]}init(){let t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new pC(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(s=>{let a=t.model.document.differ.getChanges();for(let c of a)if(c.type=="insert"){let l=c.position.nodeAfter;if(!l)continue;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0;if(l.is("element","blockQuote")&&!e.checkChild(c.position,l))return s.unwrap(l),!0;if(l.is("element")){let d=s.createRangeIn(l);for(let u of d.getItems())if(u.is("element","blockQuote")&&!e.checkChild(s.createPositionBefore(u),u))return s.unwrap(u),!0}}else if(c.type=="remove"){let l=c.position.parent;if(l.is("element","blockQuote")&&l.isEmpty)return s.remove(l),!0}return!1});let n=this.editor.editing.view.document,i=t.model.document.selection,r=t.commands.get("blockQuote");this.listenTo(n,"enter",(s,a)=>{!i.isCollapsed||!r.value||i.getLastPosition().parent.isEmpty&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(s,a)=>{if(a.direction!="backward"||!i.isCollapsed||!r.value)return;let c=i.getLastPosition().parent;c.isEmpty&&!c.previousSibling&&(t.execute("blockQuote"),t.editing.view.scrollToTheSelection(),a.preventDefault(),s.stop())},{context:"blockquote"})}}var Zd=g(36),kC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Zd.a,kC),Zd.a.locals;class bC extends S{static get pluginName(){return"BlockQuoteUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{let i=t.commands.get("blockQuote"),r=new X(n);return r.set({label:e("Block quote"),icon:Eb,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute("blockQuote"),t.editing.view.focus()}),r})}}class Xd extends H{constructor(t,e){super(t),this.attributeKey=e}refresh(){let t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){let e=this.editor.model,n=e.document.selection,i=t.forceValue===void 0?!this.value:t.forceValue;e.change(r=>{if(n.isCollapsed)i?r.setSelectionAttribute(this.attributeKey,!0):r.removeSelectionAttribute(this.attributeKey);else{let s=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(let a of s)i?r.setAttribute(this.attributeKey,i,a):r.removeAttribute(this.attributeKey,a)}})}_getValueFromFirstAllowedNode(){let t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(let i of n.getRanges())for(let r of i.getItems())if(e.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}let yn="bold";class wC extends S{static get pluginName(){return"BoldEditing"}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:yn}),t.model.schema.setAttributeProperties(yn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:yn,view:"strong",upcastAlso:["b",e=>{let n=e.getStyle("font-weight");return n?n=="bold"||Number(n)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(yn,new Xd(t,yn)),t.keystrokes.set("CTRL+B",yn)}}let Zr="bold";class CC extends S{static get pluginName(){return"BoldUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add(Zr,n=>{let i=t.commands.get(Zr),r=new X(n);return r.set({label:e("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(Zr),t.editing.view.focus()}),r})}}let Xr={autoRefresh:!0},tu=36e5;class ci{constructor(t,e=Xr){if(!t)throw new b.a("token-missing-token-url",this);e.initValue&&this._validateTokenValue(e.initValue),this.set("value",e.initValue),this._refresh=typeof t=="function"?t:()=>{return n=t,new Promise((i,r)=>{let s=new XMLHttpRequest;s.open("GET",n),s.addEventListener("load",()=>{let a=s.status,c=s.response;return a<200||a>299?r(new b.a("token-cannot-download-new-token",null)):i(c)}),s.addEventListener("error",()=>r(new Error("Network Error"))),s.addEventListener("abort",()=>r(new Error("Abort"))),s.send()});var n},this._options=Object.assign({},Xr,e)}init(){return new Promise((t,e)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),t(this)):this.refreshToken().then(t).catch(e)})}refreshToken(){return this._refresh().then(t=>{this._validateTokenValue(t),this.set("value",t),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(t){let e=typeof t=="string",n=!/^".*"$/.test(t),i=e&&t.split(".").length===3;if(!n||!i)throw new b.a("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){let t=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},t)}_getTokenRefreshTimeoutTime(){try{let[,t]=this.value.split("."),{exp:e}=JSON.parse(atob(t));return e?Math.floor((1e3*e-Date.now())/2):tu}catch{return tu}}static create(t,e=Xr){return new ci(t,e).init()}}L(ci,rt);var AC=ci;let ts=/^data:(\S*?);base64,/;class eu{constructor(t,e,n){if(!t)throw new b.a("fileuploader-missing-file",null);if(!e)throw new b.a("fileuploader-missing-token",null);if(!n)throw new b.a("fileuploader-missing-api-address",null);this.file=function(i){if(typeof i!="string")return!1;let r=i.match(ts);return!(!r||!r.length)}(t)?function(i,r=512){try{let s=i.match(ts)[1],a=atob(i.replace(ts,"")),c=[];for(let l=0;l<a.length;l+=r){let d=a.slice(l,l+r),u=new Array(d.length);for(let h=0;h<d.length;h++)u[h]=d.charCodeAt(h);c.push(new Uint8Array(u))}return new Blob(c,{type:s})}catch{throw new b.a("fileuploader-decoding-image-data-error",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){let t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){let t=this,e=this.xhr;function n(i){return()=>t.fire("error",i)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",i=>{i.lengthComputable&&this.fire("progress",{total:i.total,uploaded:i.loaded})}),e.addEventListener("load",()=>{let i=e.status,r=e.response;if(i<200||i>299)return this.fire("error",r.message||r.error)})}_sendRequest(){let t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,i)=>{e.addEventListener("load",()=>{let r=e.status,s=e.response;return r<200||r>299?s.message?i(new b.a("fileuploader-uploading-data-failed",this,{message:s.message})):i(s.error):n(s)}),e.addEventListener("error",()=>i(new Error("Network Error"))),e.addEventListener("abort",()=>i(new Error("Abort"))),e.send(t)})}}L(eu,V);class _C{constructor(t,e){if(!t)throw new b.a("uploadgateway-missing-token",null);if(!e)throw new b.a("uploadgateway-missing-api-address",null);this._token=t,this._apiAddress=e}upload(t){return new eu(t,this._token,this._apiAddress)}}class vC extends Un{static get pluginName(){return"CloudServicesCore"}createToken(t,e){return new AC(t,e)}createUploadGateway(t,e){return new _C(t,e)}}class yC{constructor(t){this.files=function(e){let n=e.files?Array.from(e.files):[],i=e.items?Array.from(e.items):[];return n.length?n:i.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class es extends Se{constructor(t){super(t);let e=this.document;function n(i){return(r,s)=>{s.preventDefault();let a=s.dropRange?[s.dropRange]:null,c=new y(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){let e={dataTransfer:new yC(t.clipboardData?t.clipboardData:t.dataTransfer)};t.type!="drop"&&t.type!="dragover"||(e.dropRange=function(n,i){let r=i.target.ownerDocument,s=i.clientX,a=i.clientY,c;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?c=r.caretRangeFromPoint(s,a):i.rangeParent&&(c=r.createRange(),c.setStart(i.rangeParent,i.rangeOffset),c.collapse(!0)),c?n.domConverter.domRangeToView(c):null}(this.view,t)),this.fire(t.type,t,e)}}let nu=["figcaption","li"];function ou(o){let t="";if(o.is("$text")||o.is("$textProxy"))t=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))t=o.getAttribute("alt");else if(o.is("element","br"))t=`
`;else{let e=null;for(let n of o.getChildren()){let i=ou(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(nu.includes(e.name)||nu.includes(n.name)?t+=`
`:t+=`

`),t+=i,e=n}}return t}class Pe extends S{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(es),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){let t=this.editor,e=t.model,n=t.editing.view,i=n.document;this.listenTo(i,"clipboardInput",r=>{t.isReadOnly&&r.stop()},{priority:"highest"}),this.listenTo(i,"clipboardInput",(r,s)=>{let a=s.dataTransfer,c=s.content||"";var l;c||(a.getData("text/html")?c=function(u){return u.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(h,m)=>m.length==1?" ":m)}(a.getData("text/html")):a.getData("text/plain")&&(((l=(l=a.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||l.includes("<br>"))&&(l=`<p>${l}</p>`),c=l),c=this.editor.data.htmlProcessor.toView(c));let d=new y(this,"inputTransformation");this.fire(d,{content:c,dataTransfer:a,targetRanges:s.targetRanges,method:s.method}),d.stop.called&&r.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(r,s)=>{if(s.content.isEmpty)return;let a=this.editor.data.toModel(s.content,"$clipboardHolder");a.childCount!=0&&(r.stop(),e.change(()=>{this.fire("contentInsertion",{content:a,method:s.method,dataTransfer:s.dataTransfer,targetRanges:s.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(r,s)=>{s.resultRange=e.insertContent(s.content)},{priority:"low"})}_setupCopyCut(){let t=this.editor,e=t.model.document,n=t.editing.view.document;function i(r,s){let a=s.dataTransfer;s.preventDefault();let c=t.data.toView(t.model.getSelectedContent(e.selection));n.fire("clipboardOutput",{dataTransfer:a,content:c,method:r.name})}this.listenTo(n,"copy",i,{priority:"low"}),this.listenTo(n,"cut",(r,s)=>{t.isReadOnly?s.preventDefault():i(r,s)},{priority:"low"}),this.listenTo(n,"clipboardOutput",(r,s)=>{s.content.isEmpty||(s.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(s.content)),s.dataTransfer.setData("text/plain",ou(s.content))),s.method=="cut"&&t.model.deleteContent(e.selection)},{priority:"low"})}}class iu{constructor(){this._stack=[]}add(t,e){let n=this._stack,i=n[0];this._insertDescriptor(t);let r=n[0];i===r||ns(i,r)||this.fire("change:top",{oldDescriptor:i,newDescriptor:r,writer:e})}remove(t,e){let n=this._stack,i=n[0];this._removeDescriptor(t);let r=n[0];i===r||ns(i,r)||this.fire("change:top",{oldDescriptor:i,newDescriptor:r,writer:e})}_insertDescriptor(t){let e=this._stack,n=e.findIndex(r=>r.id===t.id);if(ns(t,e[n]))return;n>-1&&e.splice(n,1);let i=0;for(;e[i]&&xC(e[i],t);)i++;e.splice(i,0,t)}_removeDescriptor(t){let e=this._stack,n=e.findIndex(i=>i.id===t);n>-1&&e.splice(n,1)}}function ns(o,t){return o&&t&&o.priority==t.priority&&li(o.classes)==li(t.classes)}function xC(o,t){return o.priority>t.priority||!(o.priority<t.priority)&&li(o.classes)>li(t.classes)}function li(o){return Array.isArray(o)?o.sort().join(","):o}L(iu,V);var DC='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>';let ru="ck-widget_selected";function kt(o){return!!o.is("element")&&!!o.getCustomProperty("widget")}function di(o,t,e={}){if(!o.is("containerElement"))throw new b.a("widget-to-widget-wrong-element-type",null,{element:o});return t.setAttribute("contenteditable","false",o),t.addClass("ck-widget",o),t.setCustomProperty("widget",!0,o),o.getFillerOffset=IC,e.label&&function(n,i,r){r.setCustomProperty("widgetLabel",i,n)}(o,e.label,t),e.hasSelectionHandle&&function(n,i){let r=i.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(s){let a=this.toDomElement(s),c=new Yo;return c.set("content",DC),c.render(),a.appendChild(c.element),a});i.insert(i.createPositionAt(n,0),r),i.addClass(["ck-widget_with-selection-handle"],n)}(o,t),os(o,t,EC,MC),o}function EC(o,t,e){if(t.classes&&e.addClass(gt(t.classes),o),t.attributes)for(let n in t.attributes)e.setAttribute(n,t.attributes[n],o)}function MC(o,t,e){if(t.classes&&e.removeClass(gt(t.classes),o),t.attributes)for(let n in t.attributes)e.removeAttribute(n,o)}function os(o,t,e,n){let i=new iu;i.on("change:top",(r,s)=>{s.oldDescriptor&&n(o,s.oldDescriptor,s.writer),s.newDescriptor&&e(o,s.newDescriptor,s.writer)}),t.setCustomProperty("addHighlight",(r,s,a)=>i.add(s,a),o),t.setCustomProperty("removeHighlight",(r,s,a)=>i.remove(s,a),o)}function TC(o){let t=o.getCustomProperty("widgetLabel");return t?typeof t=="function"?t():t:""}function is(o,t){return t.addClass(["ck-editor__editable","ck-editor__nested-editable"],o),t.setAttribute("contenteditable",o.isReadOnly?"false":"true",o),o.on("change:isReadOnly",(e,n,i)=>{t.setAttribute("contenteditable",i?"false":"true",o)}),o.on("change:isFocused",(e,n,i)=>{i?t.addClass("ck-editor__nested-editable_focused",o):t.removeClass("ck-editor__nested-editable_focused",o)}),o}function xn(o,t){let e=o.getSelectedElement();if(e){let i=En(o);if(i)return t.createPositionAt(e,i);if(t.schema.isBlock(e))return t.createPositionAfter(e)}let n=o.getSelectedBlocks().next().value;if(n){if(n.isEmpty)return t.createPositionAt(n,0);let i=t.createPositionAfter(n);return o.focus.isTouching(i)?i:t.createPositionBefore(n)}return o.focus}function ui(o,t){let e=o.getSelectedElement();return!!e&&t.isObject(e)}function SC(o,t){let e=new $(lt.window),n=e.getIntersection(o),i=t.height+K.arrowVerticalOffset;if(o.top-i>e.top||o.bottom+i<e.bottom)return null;let r=n||o,s=r.left+r.width/2-t.width/2;return{top:Math.max(o.top,0)+K.arrowVerticalOffset,left:s,name:"arrow_n"}}function IC(){return null}let ze="widget-type-around";function Dn(o,t,e){return o&&kt(o)&&!e.isInline(t)}function En(o){return o.getAttribute(ze)}var su=g(37),NC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(su.a,NC),su.a.locals;let au=["before","after"],BC=new DOMParser().parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild,cu="ck-widget__type-around_disabled";class PC extends S{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[ii,io]}constructor(t){super(t),this._currentFakeCaretModelElement=null}init(){let t=this.editor,e=t.editing.view;this.on("change:isEnabled",(n,i,r)=>{e.change(s=>{for(let a of e.document.roots)r?s.removeClass(cu,a):s.addClass(cu,a)}),r||t.model.change(s=>{s.removeSelectionAttribute(ze)})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration()}destroy(){this._currentFakeCaretModelElement=null}_insertParagraph(t,e){let n=this.editor,i=n.editing.view;n.execute("insertParagraph",{position:n.model.createPositionAt(t,e)}),i.focus(),i.scrollToTheSelection()}_listenToIfEnabled(t,e,n,i){this.listenTo(t,e,(...r)=>{this.isEnabled&&n(...r)},i)}_insertParagraphAccordingToFakeCaretPosition(){let t=this.editor.model.document.selection,e=En(t);if(!e)return!1;let n=t.getSelectedElement();return this._insertParagraph(n,e),!0}_enableTypeAroundUIInjection(){let t=this.editor,e=t.model.schema,n=t.locale.t,i={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};t.editing.downcastDispatcher.on("insert",(r,s,a)=>{let c=a.mapper.toViewElement(s.item);Dn(c,s.item,e)&&function(l,d,u){let h=l.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},function(m){let p=this.toDomElement(m);return function(k,f){for(let C of au){let x=new Lt({tag:"div",attributes:{class:["ck","ck-widget__type-around__button",`ck-widget__type-around__button_${C}`],title:f[C]},children:[k.ownerDocument.importNode(BC,!0)]});k.appendChild(x.render())}}(p,d),function(k){let f=new Lt({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});k.appendChild(f.render())}(p),p});l.insert(l.createPositionAt(u,"end"),h)}(a.writer,i,c)},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){let t=this.editor,e=t.model,n=e.document.selection,i=e.schema,r=t.editing.view;function s(a){return`ck-widget_type-around_show-fake-caret_${a}`}this._listenToIfEnabled(r.document,"arrowKey",(a,c)=>{this._handleArrowKeyPress(a,c)},{context:[kt,"$text"],priority:"high"}),this._listenToIfEnabled(n,"change:range",(a,c)=>{c.directChange&&t.model.change(l=>{l.removeSelectionAttribute(ze)})}),this._listenToIfEnabled(e.document,"change:data",()=>{let a=n.getSelectedElement();a&&Dn(t.editing.mapper.toViewElement(a),a,i)||t.model.change(c=>{c.removeSelectionAttribute(ze)})}),this._listenToIfEnabled(t.editing.downcastDispatcher,"selection",(a,c,l)=>{let d=l.writer;if(this._currentFakeCaretModelElement){let p=l.mapper.toViewElement(this._currentFakeCaretModelElement);p&&(d.removeClass(au.map(s),p),this._currentFakeCaretModelElement=null)}let u=c.selection.getSelectedElement();if(!u)return;let h=l.mapper.toViewElement(u);if(!Dn(h,u,i))return;let m=En(c.selection);m&&(d.addClass(s(m),h),this._currentFakeCaretModelElement=u)}),this._listenToIfEnabled(t.ui.focusTracker,"change:isFocused",(a,c,l)=>{l||t.model.change(d=>{d.removeSelectionAttribute(ze)})})}_handleArrowKeyPress(t,e){let n=this.editor,i=n.model,r=i.document.selection,s=i.schema,a=n.editing.view,c=Fa(e.keyCode,n.locale.contentLanguageDirection),l=a.document.selection.getSelectedElement(),d;Dn(l,n.editing.mapper.toModelElement(l),s)?d=this._handleArrowKeyPressOnSelectedWidget(c):r.isCollapsed&&(d=this._handleArrowKeyPressWhenSelectionNextToAWidget(c)),d&&(e.preventDefault(),t.stop())}_handleArrowKeyPressOnSelectedWidget(t){let e=this.editor.model,n=En(e.document.selection);return e.change(i=>n?n!==(t?"after":"before")?(i.removeSelectionAttribute(ze),!0):!1:(i.setSelectionAttribute(ze,t?"after":"before"),!0))}_handleArrowKeyPressWhenSelectionNextToAWidget(t){let e=this.editor,n=e.model,i=n.schema,r=e.plugins.get("Widget"),s=r._getObjectElementNextToSelection(t);return!!Dn(e.editing.mapper.toViewElement(s),s,i)&&(n.change(a=>{r._setSelectionOverElement(s),a.setSelectionAttribute(ze,t?"before":"after")}),!0)}_enableInsertingParagraphsOnButtonClick(){let t=this.editor,e=t.editing.view;this._listenToIfEnabled(e.document,"mousedown",(n,i)=>{let r=i.domTarget.closest(".ck-widget__type-around__button");if(!r)return;let s=function(l){return l.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(r),a=function(l,d){let u=l.closest(".ck-widget");return d.mapDomToView(u)}(r,e.domConverter),c=t.editing.mapper.toModelElement(a);this._insertParagraph(c,s),i.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){let t=this.editor,e=t.model.document.selection,n=t.editing.view;this._listenToIfEnabled(n.document,"enter",(i,r)=>{if(i.eventPhase!="atTarget")return;let s=e.getSelectedElement(),a=t.editing.mapper.toViewElement(s),c=t.model.schema,l;this._insertParagraphAccordingToFakeCaretPosition()?l=!0:Dn(a,s,c)&&(this._insertParagraph(s,r.isSoft?"before":"after"),l=!0),l&&(r.preventDefault(),i.stop())},{context:kt})}_enableInsertingParagraphsOnTypingKeystroke(){let t=this.editor.editing.view,e=[G.enter,G.delete,G.backspace];this._listenToIfEnabled(t.document,"keydown",(n,i)=>{e.includes(i.keyCode)||jd(i)||this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){let t=this.editor,e=t.editing.view,n=t.model,i=n.schema;this._listenToIfEnabled(e.document,"delete",(r,s)=>{if(r.eventPhase!="atTarget")return;let a=En(n.document.selection);if(!a)return;let c=s.direction,l=n.document.selection.getSelectedElement(),d=c=="forward";if(a==="before"===d)t.execute("delete",{selection:n.createSelection(l,"on")});else{let u=i.getNearestSelectionRange(n.createPositionAt(l,a),c);if(u)if(u.isCollapsed){let h=n.createSelection(u.start);if(n.modifySelection(h,{direction:c}),h.focus.isEqual(u.start)){let m=function(p,k){let f=k;for(let C of k.getAncestors({parentFirst:!0})){if(C.childCount>1||p.isLimit(C))break;f=C}return f}(i,u.start.parent);n.deleteContent(n.createSelection(m,"on"),{doNotAutoparagraph:!0})}else n.change(m=>{m.setSelection(u),t.execute(d?"deleteForward":"delete")})}else n.change(h=>{h.setSelection(u),t.execute(d?"deleteForward":"delete")})}s.preventDefault(),r.stop()},{context:kt})}_enableInsertContentIntegration(){let t=this.editor,e=this.editor.model,n=e.document.selection;this._listenToIfEnabled(t.model,"insertContent",(i,[r,s])=>{if(s&&!s.is("documentSelection"))return;let a=En(n);return a?(i.stop(),e.change(c=>{let l=n.getSelectedElement(),d=e.createPositionAt(l,a),u=c.createSelection(d),h=e.insertContent(r,u);return c.setSelection(u),h})):void 0},{priority:"high"})}}var lu=g(38),zC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(lu.a,zC),lu.a.locals;function LC(o){let t=o.model;return(e,n)=>{let i=n.keyCode==G.arrowup,r=n.keyCode==G.arrowdown,s=n.shiftKey,a=t.document.selection;if(!i&&!r)return;let c=r;if(s&&function(d,u){return!d.isCollapsed&&d.isBackward==u}(a,c))return;let l=function(d,u,h){let m=d.model;if(h){let p=u.isCollapsed?u.focus:u.getLastPosition(),k=du(m,p,"forward");if(!k)return null;let f=m.createRange(p,k),C=uu(m.schema,f,"backward");return C&&p.isBefore(C)?m.createRange(p,C):null}{let p=u.isCollapsed?u.focus:u.getFirstPosition(),k=du(m,p,"backward");if(!k)return null;let f=m.createRange(k,p),C=uu(m.schema,f,"forward");return C&&p.isAfter(C)?m.createRange(C,p):null}}(o,a,c);l&&!l.isCollapsed&&function(d,u,h){let m=d.model,p=d.view.domConverter;if(h){let M=m.createSelection(u.start);m.modifySelection(M),M.focus.isAtEnd||u.start.isEqual(M.focus)||(u=m.createRange(M.focus,u.end))}let k=d.mapper.toViewRange(u),f=p.viewRangeToDom(k),C=$.getDomRangeRects(f),x;for(let M of C)if(x!==void 0){if(Math.round(M.top)>=x)return!1;x=Math.max(x,Math.round(M.bottom))}else x=Math.round(M.bottom);return!0}(o,l,c)&&(t.change(d=>{let u=c?l.end:l.start;if(s){let h=t.createSelection(a.anchor);h.setFocus(u),d.setSelection(h)}else d.setSelection(u)}),e.stop(),n.preventDefault(),n.stopPropagation())}}function du(o,t,e){let n=o.schema,i=o.createRangeIn(t.root),r=e=="forward"?"elementStart":"elementEnd";for(let{previousPosition:s,item:a,type:c}of i.getWalker({startPosition:t,direction:e})){if(n.isLimit(a)&&!n.isInline(a))return s;if(c==r&&n.isBlock(a))return null}return null}function uu(o,t,e){let n=e=="backward"?t.end:t.start;if(o.checkChild(n,"$text"))return n;for(let{nextPosition:i}of t.getWalker({direction:e}))if(o.checkChild(i,"$text"))return i}class ro extends S{static get pluginName(){return"Widget"}static get requires(){return[PC,io]}init(){let t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(n,i,r)=>{this._clearPreviouslySelectedWidgets(r.writer);let s=r.writer,a=s.document.selection,c=a.getSelectedElement(),l=null;for(let d of a.getRanges())for(let u of d){let h=u.item;kt(h)&&!OC(h,l)&&(s.addClass(ru,h),this._previouslySelected.add(h),l=h,h==c&&s.setSelection(a.getRanges(),{fake:!0,label:TC(c)}))}},{priority:"low"}),t.addObserver(ti),this.listenTo(e,"mousedown",(...n)=>this._onMousedown(...n)),this.listenTo(e,"arrowKey",(...n)=>{this._handleSelectionChangeOnArrowKeyPress(...n)},{context:[kt,"$text"]}),this.listenTo(e,"arrowKey",(...n)=>{this._preventDefaultOnArrowKeyPress(...n)},{context:"$root"}),this.listenTo(e,"arrowKey",LC(this.editor.editing),{context:"$text"}),this.listenTo(e,"delete",(n,i)=>{this._handleDelete(i.direction=="forward")&&(i.preventDefault(),n.stop())},{context:"$root"})}_onMousedown(t,e){let n=this.editor,i=n.editing.view,r=i.document,s=e.target;if(function(c){for(;c;){if(c.is("editableElement")&&!c.is("rootElement"))return!0;if(kt(c))return!1;c=c.parent}return!1}(s)){if((Ct.isSafari||Ct.isGecko)&&e.domEvent.detail>=3){let c=n.editing.mapper,l=s.is("attributeElement")?s.findAncestor(u=>!u.is("attributeElement")):s,d=c.toModelElement(l);e.preventDefault(),this.editor.model.change(u=>{u.setSelection(d,"in")})}return}if(!kt(s)&&(s=s.findAncestor(kt),!s))return;Ct.isAndroid&&e.preventDefault(),r.isFocused||i.focus();let a=n.editing.mapper.toModelElement(s);this._setSelectionOverElement(a)}_handleSelectionChangeOnArrowKeyPress(t,e){let n=e.keyCode,i=this.editor.model,r=i.schema,s=i.document.selection,a=s.getSelectedElement(),c=Fa(n,this.editor.locale.contentLanguageDirection);if(a&&r.isObject(a)){let d=c?s.getLastPosition():s.getFirstPosition(),u=r.getNearestSelectionRange(d,c?"forward":"backward");return void(u&&(i.change(h=>{h.setSelection(u)}),e.preventDefault(),t.stop()))}if(!s.isCollapsed)return;let l=this._getObjectElementNextToSelection(c);l&&r.isObject(l)&&(this._setSelectionOverElement(l),e.preventDefault(),t.stop())}_preventDefaultOnArrowKeyPress(t,e){let n=this.editor.model,i=n.schema,r=n.document.selection.getSelectedElement();r&&i.isObject(r)&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;let e=this.editor.model.document.selection;if(!e.isCollapsed)return;let n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(i=>{let r=e.anchor.parent;for(;r.isEmpty;){let s=r;r=s.parent,i.remove(s)}this._setSelectionOverElement(n)}),!0):void 0}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){let e=this.editor.model,n=e.schema,i=e.document.selection,r=e.createSelection(i);e.modifySelection(r,{direction:t?"forward":"backward"});let s=t?r.focus.nodeBefore:r.focus.nodeAfter;return s&&n.isObject(s)?s:null}_clearPreviouslySelectedWidgets(t){for(let e of this._previouslySelected)t.removeClass(ru,e);this._previouslySelected.clear()}}function OC(o,t){return!!t&&Array.from(o.getAncestors()).includes(t)}var hu=function(o,t,e){var n=!0,i=!0;if(typeof o!="function")throw new TypeError("Expected a function");return B(e)&&(n="leading"in e?!!e.leading:n,i="trailing"in e?!!e.trailing:i),fr(o,t,{leading:n,maxWait:t,trailing:i})},mu=g(39),RC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(mu.a,RC),mu.a.locals;class jC extends S{static get pluginName(){return"DragDrop"}static get requires(){return[Pe,ro]}init(){let t=this.editor,e=t.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=hu(n=>this._updateDropMarker(n),40),this._removeDropMarkerDelayed=fu(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=fu(()=>this._clearDraggableAttributes(),40),e.addObserver(es),e.addObserver(ti),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(t,"change:isReadOnly",(n,i,r)=>{r?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(n,i,r)=>{r||this._finalizeDragging(!1)}),Ct.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){let t=this.editor,e=t.model,n=e.document,i=t.editing.view,r=i.document;this.listenTo(r,"dragstart",(s,a)=>{let c=n.selection;if(a.target&&a.target.is("editableElement"))return void a.preventDefault();let l=a.target?ku(a.target):null;if(l){let h=t.editing.mapper.toModelElement(l);this._draggedRange=ce.fromRange(e.createRangeOn(h))}else if(!r.selection.isCollapsed){let h=r.selection.getSelectedElement();h&&kt(h)||(this._draggedRange=ce.fromRange(c.getFirstRange()))}if(!this._draggedRange)return void a.preventDefault();this._draggingUid=w(),a.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",a.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);let d=e.createSelection(this._draggedRange.toRange()),u=t.data.toView(e.getSelectedContent(d));r.fire("clipboardOutput",{dataTransfer:a.dataTransfer,content:u,method:s.name}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(r,"dragend",(s,a)=>{this._finalizeDragging(!a.dataTransfer.isCanceled&&a.dataTransfer.dropEffect=="move")},{priority:"low"}),this.listenTo(r,"dragenter",()=>{this.isEnabled&&i.focus()}),this.listenTo(r,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(r,"dragging",(s,a)=>{if(!this.isEnabled)return void(a.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();let c=gu(t,a.targetRanges,a.target);this._draggedRange||(a.dataTransfer.dropEffect="copy"),Ct.isGecko||(a.dataTransfer.effectAllowed=="copy"?a.dataTransfer.dropEffect="copy":["all","copyMove"].includes(a.dataTransfer.effectAllowed)&&(a.dataTransfer.dropEffect="move")),c&&this._updateDropMarkerThrottled(c)},{priority:"low"})}_setupClipboardInputIntegration(){let t=this.editor,e=t.editing.view.document;this.listenTo(e,"clipboardInput",(n,i)=>{if(i.method!="drop")return;let r=gu(t,i.targetRanges,i.target);if(this._removeDropMarker(),!r)return this._finalizeDragging(!1),void n.stop();if(this._draggedRange&&this._draggingUid!=i.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=""),pu(i.dataTransfer)=="move"&&this._draggedRange&&this._draggedRange.containsRange(r,!0))return this._finalizeDragging(!1),void n.stop();i.targetRanges=[t.editing.mapper.toViewRange(r)]},{priority:"high"})}_setupContentInsertionIntegration(){let t=this.editor.plugins.get(Pe);t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;let i=n.targetRanges.map(r=>this.editor.editing.mapper.toModelRange(r));this.editor.model.change(r=>r.setSelection(i))},{priority:"high"}),t.on("contentInsertion",(e,n)=>{if(!this.isEnabled||n.method!=="drop")return;let i=pu(n.dataTransfer)=="move",r=!n.resultRange||!n.resultRange.isCollapsed;this._finalizeDragging(r&&i)},{priority:"lowest"})}_setupDraggableAttributeHandling(){let t=this.editor,e=t.editing.view,n=e.document;this.listenTo(n,"mousedown",(i,r)=>{if(Ct.isAndroid||!r)return;this._clearDraggableAttributesDelayed.cancel();let s=ku(r.target);if(Ct.isBlink&&!t.isReadOnly&&!s&&!n.selection.isCollapsed){let a=n.selection.getSelectedElement();a&&kt(a)||(s=n.selection.editableElement)}s&&(e.change(a=>{a.setAttribute("draggable","true",s)}),this._draggableElement=t.editing.mapper.toModelElement(s))}),this.listenTo(n,"mouseup",()=>{Ct.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){let t=this.editor.editing;t.view.change(e=>{this._draggableElement&&this._draggableElement.root.rootName!="$graveyard"&&e.removeAttribute("draggable",t.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){let t=this.editor;t.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),t.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(e,{writer:n})=>{if(t.model.schema.checkChild(e.markerRange.start,"$text"))return n.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},function(i){let r=this.toDomElement(i);return r.innerHTML="&NoBreak;<span></span>&NoBreak;",r})}})}_updateDropMarker(t){let e=this.editor,n=e.model.markers;e.model.change(i=>{n.has("drop-target")?n.get("drop-target").getRange().isEqual(t)||i.updateMarker("drop-target",{range:t}):i.addMarker("drop-target",{range:t,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){let t=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),t.markers.has("drop-target")&&t.change(e=>{e.removeMarker("drop-target")})}_finalizeDragging(t){let e=this.editor.model;this._removeDropMarker(),this._clearDraggableAttributes(),this._draggingUid="",this._draggedRange&&(t&&this.isEnabled&&e.deleteContent(e.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function gu(o,t,e){let n=o.model,i=o.editing.mapper,r=null,s=t?t[0].start:null;if(e.is("uiElement")&&(e=e.parent),r=function(l,d){let u=l.model,h=l.editing.mapper;if(kt(d))return u.createRangeOn(h.toModelElement(d));if(!d.is("editableElement")){let m=d.findAncestor(p=>kt(p)||p.is("editableElement"));if(kt(m))return u.createRangeOn(h.toModelElement(m))}return null}(o,e),r)return r;let a=function(l,d){let u=l.editing.mapper,h=l.editing.view,m=u.toModelElement(d);if(m)return m;let p=h.createPositionBefore(d),k=u.findMappedViewAncestor(p);return u.toModelElement(k)}(o,e),c=s?i.toModelPosition(s):null;return c?(r=function(l,d,u){let h=l.model;if(!h.schema.checkChild(u,"$block"))return null;let m=h.createPositionAt(u,0),p=d.path.slice(0,m.path.length),k=h.createPositionFromPath(d.root,p).nodeAfter;return k&&h.schema.isObject(k)?h.createRangeOn(k):null}(o,c,a),r||(r=n.schema.getNearestSelectionRange(c,Ct.isGecko?"forward":"backward"),r||function(l,d){let u=l.model;for(;d;){if(u.schema.isObject(d))return u.createRangeOn(d);d=d.parent}}(o,c.parent))):function(l,d){let u=l.model,h=u.schema,m=u.createPositionAt(d,0);return h.getNearestSelectionRange(m,"forward")}(o,a)}function pu(o){return Ct.isGecko?o.dropEffect:["all","copyMove"].includes(o.effectAllowed)?"move":"copy"}function fu(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function ku(o){if(o.is("editableElement"))return null;if(o.hasClass("ck-widget__selection-handle"))return o.findAncestor(kt);if(kt(o))return o;let t=o.findAncestor(e=>kt(e)||e.is("editableElement"));return kt(t)?t:null}class FC extends S{static get pluginName(){return"PastePlainText"}static get requires(){return[Pe]}init(){let t=this.editor,e=t.model,n=t.editing.view,i=n.document,r=e.document.selection,s=!1;n.addObserver(es),this.listenTo(i,"keydown",(a,c)=>{s=c.shiftKey}),t.plugins.get(Pe).on("contentInsertion",(a,c)=>{(s||function(l,d){if(l.childCount>1)return!1;let u=l.getChild(0);return d.isObject(u)?!1:[...u.getAttributeKeys()].length==0}(c.content,e.schema))&&e.change(l=>{let d=Array.from(r.getAttributes()).filter(([h])=>e.schema.getAttributeProperties(h).isFormatting);r.isCollapsed||e.deleteContent(r,{doNotAutoparagraph:!0}),d.push(...r.getAttributes());let u=l.createRangeIn(c.content);for(let h of u.getItems())h.is("$textProxy")&&l.setAttributes(d,h)})})}}class bu extends S{static get pluginName(){return"Clipboard"}static get requires(){return[Pe,jC,FC]}}class VC extends H{execute(){let t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);if(e.containsEntireContent(n)||!wu(t.schema,n))do if(n=n.parent,!n)return;while(!wu(t.schema,n));t.change(i=>{i.setSelection(n,"in")})}}function wu(o,t){return o.isLimit(t)&&(o.checkChild(t,"$text")||o.checkChild(t,"paragraph"))}let UC=rr("Ctrl+A");class HC extends S{static get pluginName(){return"SelectAllEditing"}init(){let t=this.editor,e=t.editing.view.document;t.commands.add("selectAll",new VC(t)),this.listenTo(e,"keydown",(n,i)=>{se(i)===UC&&(t.execute("selectAll"),i.preventDefault())})}}class KC extends S{static get pluginName(){return"SelectAllUI"}init(){let t=this.editor;t.ui.componentFactory.add("selectAll",e=>{let n=t.commands.get("selectAll"),i=new X(e),r=e.t;return i.set({label:r("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),i.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(i,"execute",()=>{t.execute("selectAll"),t.editing.view.focus()}),i})}}class GC extends S{static get requires(){return[HC,KC]}static get pluginName(){return"SelectAll"}}class Cu extends H{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(t.data,"set",()=>this.clearStack())}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){let e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){let i=this.editor.model,r=i.document,s=[],a=t.map(l=>l.getTransformedByOperations(n)),c=a.flat();for(let l of a){let d=l.filter(u=>u.root!=r.graveyard).filter(u=>!WC(u,c));d.length&&(qC(d),s.push(d[0]))}s.length&&i.change(l=>{l.setSelection(s,{backward:e})})}_undo(t,e){let n=this.editor.model,i=n.document;this._createdBatches.add(e);let r=t.operations.slice().filter(s=>s.isDocumentOperation);r.reverse();for(let s of r){let a=s.baseVersion+1,c=Array.from(i.history.getOperations(a)),l=yw([s.getReversed()],c,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(let d of l)e.addOperation(d),n.applyOperation(d),i.history.setOperationAsUndone(s,d)}}}function qC(o){o.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<o.length;t++){let e=o[t-1].getJoined(o[t],!0);e&&(t--,o.splice(t,2,e))}}function WC(o,t){return t.some(e=>e!==o&&e.containsRange(o,!0))}class YC extends Cu{execute(t=null){let e=t?this._stack.findIndex(r=>r.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],i=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(i,()=>{this._undo(n.batch,i);let r=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,r),this.fire("revert",n.batch,i)}),this.refresh()}}class QC extends Cu{execute(){let t=this._stack.pop(),e=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(e,()=>{let n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,i=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class $C extends S{static get pluginName(){return"UndoEditing"}constructor(t){super(t),this._batchRegistry=new WeakSet}init(){let t=this.editor;this._undoCommand=new YC(t),this._redoCommand=new QC(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(e,n)=>{let i=n[0];if(!i.isDocumentOperation)return;let r=i.batch,s=this._redoCommand._createdBatches.has(r),a=this._undoCommand._createdBatches.has(r);this._batchRegistry.has(r)||r.type=="transparent"&&!s&&!a||(s?this._undoCommand.addBatch(r):a||(this._undoCommand.addBatch(r),this._redoCommand.clearStack()),this._batchRegistry.add(r))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(e,n,i)=>{this._redoCommand.addBatch(i)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}var Au='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',_u='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class JC extends S{static get pluginName(){return"UndoUI"}init(){let t=this.editor,e=t.locale,n=t.t,i=e.uiLanguageDirection=="ltr"?Au:_u,r=e.uiLanguageDirection=="ltr"?_u:Au;this._addButton("undo",n("Undo"),"CTRL+Z",i),this._addButton("redo",n("Redo"),"CTRL+Y",r)}_addButton(t,e,n,i){let r=this.editor;r.ui.componentFactory.add(t,s=>{let a=r.commands.get(t),c=new X(s);return c.set({label:e,icon:i,keystroke:n,tooltip:!0}),c.bind("isEnabled").to(a,"isEnabled"),this.listenTo(c,"execute",()=>{r.execute(t),r.editing.view.focus()}),c})}}class vu extends S{static get requires(){return[$C,JC]}static get pluginName(){return"Undo"}}class hi extends H{constructor(t,e){super(t),this.attributeKey=e}refresh(){let t=this.editor.model,e=t.document;this.value=e.selection.getAttribute(this.attributeKey),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){let e=this.editor.model,n=e.document.selection,i=t.value;e.change(r=>{if(n.isCollapsed)i?r.setSelectionAttribute(this.attributeKey,i):r.removeSelectionAttribute(this.attributeKey);else{let s=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(let a of s)i?r.setAttribute(this.attributeKey,i,a):r.removeAttribute(this.attributeKey,a)}})}}class yu extends xt{constructor(t){super(t),this.set("isEmpty",!0),this.on("change",()=>{this.set("isEmpty",this.length===0)})}add(t,e){this.find(n=>n.color===t.color)||super.add(t,e)}hasColor(t){return!!this.find(e=>e.color===t)}}L(yu,rt);var xu=g(40),ZC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(xu.a,ZC),xu.a.locals;class XC extends j{constructor(t,{colors:e,columns:n,removeButtonLabel:i,documentColorsLabel:r,documentColorsCount:s}){super(t),this.items=this.createCollection(),this.colorDefinitions=e,this.focusTracker=new zt,this.keystrokes=new $t,this.set("selectedColor"),this.removeButtonLabel=i,this.columns=n,this.documentColors=new yu,this.documentColorsCount=s,this._focusCycler=new ve({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this._documentColorsLabel=r,this.setTemplate({tag:"div",attributes:{class:["ck","ck-color-table"]},children:this.items}),this.items.add(this._removeColorButton())}updateDocumentColors(t,e){let n=t.document,i=this.documentColorsCount;this.documentColors.clear();for(let r of n.getRootNames()){let s=n.getRoot(r),a=t.createRangeIn(s);for(let c of a.getItems())if(c.is("$textProxy")&&c.hasAttribute(e)&&(this._addColorToDocumentColors(c.getAttribute(e)),this.documentColors.length>=i))return}}updateSelectedColors(){let t=this.documentColorsGrid,e=this.staticColorsGrid,n=this.selectedColor;e.selectedColor=n,t&&(t.selectedColor=n)}render(){super.render();for(let t of this.items)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element)}appendGrids(){if(!this.staticColorsGrid&&(this.staticColorsGrid=this._createStaticColorsGrid(),this.items.add(this.staticColorsGrid),this.documentColorsCount)){let t=Lt.bind(this.documentColors,this.documentColors),e=new Vr(this.locale);e.text=this._documentColorsLabel,e.extendTemplate({attributes:{class:["ck","ck-color-grid__label",t.if("isEmpty","ck-hidden")]}}),this.items.add(e),this.documentColorsGrid=this._createDocumentColorsGrid(),this.items.add(this.documentColorsGrid)}}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}_removeColorButton(){let t=new X;return t.set({withText:!0,icon:fb,tooltip:!0,label:this.removeButtonLabel}),t.class="ck-color-table__remove-color",t.on("execute",()=>{this.fire("execute",{value:null})}),t}_createStaticColorsGrid(){let t=new Kl(this.locale,{colorDefinitions:this.colorDefinitions,columns:this.columns});return t.delegate("execute").to(this),t}_createDocumentColorsGrid(){let t=Lt.bind(this.documentColors,this.documentColors),e=new Kl(this.locale,{columns:this.columns});return e.delegate("execute").to(this),e.extendTemplate({attributes:{class:t.if("isEmpty","ck-hidden")}}),e.items.bindTo(this.documentColors).using(n=>{let i=new Ul;return i.set({color:n.color,hasBorder:n.options&&n.options.hasBorder}),n.label&&i.set({label:n.label,tooltip:!0}),i.on("execute",()=>{this.fire("execute",{value:n.color})}),i}),this.documentColors.on("change:isEmpty",(n,i,r)=>{r&&(e.selectedColor=null)}),e}_addColorToDocumentColors(t){let e=this.colorDefinitions.find(n=>n.color===t);e?this.documentColors.add(Object.assign({},e)):this.documentColors.add({color:t,label:t,options:{hasBorder:!1}})}}let Gt="fontSize",qt="fontFamily",de="fontColor",ye="fontBackgroundColor";function Du(o,t){let e={model:{key:o,values:[]},view:{},upcastAlso:{}};for(let n of t)e.model.values.push(n.model),e.view[n.model]=n.view,n.upcastAlso&&(e.upcastAlso[n.model]=n.upcastAlso);return e}function Eu(o){return t=>t.getStyle(o).replace(/\s/g,"")}function Mu(o){return(t,{writer:e})=>e.createAttributeElement("span",{style:`${o}:${t}`},{priority:7})}class tA extends hi{constructor(t){super(t,ye)}}class eA extends S{static get pluginName(){return"FontBackgroundColorEditing"}constructor(t){super(t),t.config.define(ye,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),t.data.addStyleProcessorRules(Gw),t.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{"background-color":/[\s\S]+/}},model:{key:ye,value:Eu("background-color")}}),t.conversion.for("downcast").attributeToElement({model:ye,view:Mu("background-color")}),t.commands.add(ye,new tA(t)),t.model.schema.extend("$text",{allowAttributes:ye}),t.model.schema.setAttributeProperties(ye,{isFormatting:!0,copyOnEnter:!0})}}class Tu extends S{constructor(t,{commandName:e,icon:n,componentName:i,dropdownLabel:r}){super(t),this.commandName=e,this.componentName=i,this.icon=n,this.dropdownLabel=r,this.columns=t.config.get(`${this.componentName}.columns`),this.colorTableView=void 0}init(){let t=this.editor,e=t.locale,n=e.t,i=t.commands.get(this.commandName),r=function(a,c){let l=a.t,d={Black:l("Black"),"Dim grey":l("Dim grey"),Grey:l("Grey"),"Light grey":l("Light grey"),White:l("White"),Red:l("Red"),Orange:l("Orange"),Yellow:l("Yellow"),"Light green":l("Light green"),Green:l("Green"),Aquamarine:l("Aquamarine"),Turquoise:l("Turquoise"),"Light blue":l("Light blue"),Blue:l("Blue"),Purple:l("Purple")};return c.map(u=>{let h=d[u.label];return h&&h!=u.label&&(u.label=h),u})}(e,t.config.get(this.componentName).colors.map(Fb).filter(a=>!!a)),s=t.config.get(`${this.componentName}.documentColors`);t.ui.componentFactory.add(this.componentName,a=>{let c=Zt(a);return this.colorTableView=function({dropdownView:l,colors:d,columns:u,removeButtonLabel:h,documentColorsLabel:m,documentColorsCount:p}){let k=l.locale,f=new XC(k,{colors:d,columns:u,removeButtonLabel:h,documentColorsLabel:m,documentColorsCount:p});return l.colorTableView=f,l.panelView.children.add(f),f.delegate("execute").to(l,"execute"),f}({dropdownView:c,colors:r.map(l=>({label:l.label,color:l.model,options:{hasBorder:l.hasBorder}})),columns:this.columns,removeButtonLabel:n("Remove color"),documentColorsLabel:s!==0?n("Document colors"):void 0,documentColorsCount:s===void 0?this.columns:s}),this.colorTableView.bind("selectedColor").to(i,"value"),c.buttonView.set({label:this.dropdownLabel,icon:this.icon,tooltip:!0}),c.extendTemplate({attributes:{class:"ck-color-ui-dropdown"}}),c.bind("isEnabled").to(i),c.on("execute",(l,d)=>{t.execute(this.commandName,d),t.editing.view.focus()}),c.on("change:isOpen",(l,d,u)=>{c.colorTableView.appendGrids(),u&&(s!==0&&this.colorTableView.updateDocumentColors(t.model,this.componentName),this.colorTableView.updateSelectedColors())}),c})}}class nA extends Tu{constructor(t){let e=t.locale.t;super(t,{commandName:ye,componentName:ye,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>',dropdownLabel:e("Font Background Color")})}static get pluginName(){return"FontBackgroundColorUI"}}class oA extends hi{constructor(t){super(t,de)}}class iA extends S{static get pluginName(){return"FontColorEditing"}constructor(t){super(t),t.config.define(de,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),t.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{color:/[\s\S]+/}},model:{key:de,value:Eu("color")}}),t.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{color:/^#?\w+$/}},model:{key:de,value:e=>e.getAttribute("color")}}),t.conversion.for("downcast").attributeToElement({model:de,view:Mu("color")}),t.commands.add(de,new oA(t)),t.model.schema.extend("$text",{allowAttributes:de}),t.model.schema.setAttributeProperties(de,{isFormatting:!0,copyOnEnter:!0})}}class rA extends Tu{constructor(t){let e=t.locale.t;super(t,{commandName:de,componentName:de,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>',dropdownLabel:e("Font Color")})}static get pluginName(){return"FontColorUI"}}class sA extends hi{constructor(t){super(t,qt)}}function Su(o){return o.map(aA).filter(t=>!!t)}function aA(o){return typeof o=="object"?o:o==="default"?{title:"Default",model:void 0}:typeof o=="string"?function(t){let e=t.replace(/"|'/g,"").split(","),n=e[0],i=e.map(cA).join(", ");return{title:n,model:i,view:{name:"span",styles:{"font-family":i},priority:7}}}(o):void 0}function cA(o){return(o=o.trim()).indexOf(" ")>0&&(o=`'${o}'`),o}class lA extends S{static get pluginName(){return"FontFamilyEditing"}constructor(t){super(t),t.config.define(qt,{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!1})}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:qt}),t.model.schema.setAttributeProperties(qt,{isFormatting:!0,copyOnEnter:!0});let e=Su(t.config.get("fontFamily.options")).filter(i=>i.model),n=Du(qt,e);t.config.get("fontFamily.supportAllValues")?(this._prepareAnyValueConverters(),this._prepareCompatibilityConverter()):t.conversion.attributeToElement(n),t.commands.add(qt,new sA(t))}_prepareAnyValueConverters(){let t=this.editor;t.conversion.for("downcast").attributeToElement({model:qt,view:(e,{writer:n})=>n.createAttributeElement("span",{style:"font-family:"+e},{priority:7})}),t.conversion.for("upcast").elementToAttribute({model:{key:qt,value:e=>e.getStyle("font-family")},view:{name:"span",styles:{"font-family":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{face:/.*/}},model:{key:qt,value:t=>t.getAttribute("face")}})}}class dA extends S{static get pluginName(){return"FontFamilyUI"}init(){let t=this.editor,e=t.t,n=this._getLocalizedOptions(),i=t.commands.get(qt);t.ui.componentFactory.add(qt,r=>{let s=Zt(r);return no(s,function(a,c){let l=new xt;for(let d of a){let u={type:"button",model:new wn({commandName:qt,commandParam:d.model,label:d.title,withText:!0})};u.model.bind("isOn").to(c,"value",h=>h===d.model||!(!h||!d.model)&&h.split(",")[0].replace(/'/g,"").toLowerCase()===d.model.toLowerCase()),d.view&&d.view.styles&&u.model.set("labelStyle",`font-family: ${d.view.styles["font-family"]}`),l.add(u)}return l}(n,i)),s.buttonView.set({label:e("Font Family"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>',tooltip:!0}),s.extendTemplate({attributes:{class:"ck-font-family-dropdown"}}),s.bind("isEnabled").to(i),this.listenTo(s,"execute",a=>{t.execute(a.source.commandName,{value:a.source.commandParam}),t.editing.view.focus()}),s})}_getLocalizedOptions(){let t=this.editor,e=t.t;return Su(t.config.get(qt).options).map(n=>(n.title==="Default"&&(n.title=e("Default")),n))}}class uA extends hi{constructor(t){super(t,Gt)}}function Iu(o){return o.map(t=>function(e){if(n=e,typeof n=="object"&&n.title&&n.model&&n.view)return rs(e);var n;let i=function(r){return Nu[r]||Nu[r.model]}(e);if(i)return rs(i);if(e==="default")return{model:void 0,title:"Default"};if(!function(r){let s;if(typeof r=="object"){if(!r.model)throw new b.a("font-size-invalid-definition",null,r);s=parseFloat(r.model)}else s=parseFloat(r);return isNaN(s)}(e))return function(r){return typeof r!="number"&&typeof r!="string"||(r={title:String(r),model:`${parseFloat(r)}px`}),r.view={name:"span",styles:{"font-size":r.model}},rs(r)}(e)}(t)).filter(t=>!!t)}let Nu={get tiny(){return{title:"Tiny",model:"tiny",view:{name:"span",classes:"text-tiny",priority:7}}},get small(){return{title:"Small",model:"small",view:{name:"span",classes:"text-small",priority:7}}},get big(){return{title:"Big",model:"big",view:{name:"span",classes:"text-big",priority:7}}},get huge(){return{title:"Huge",model:"huge",view:{name:"span",classes:"text-huge",priority:7}}}};function rs(o){return o.view.priority||(o.view.priority=7),o}let Bu=["x-small","x-small","small","medium","large","x-large","xx-large","xxx-large"];class hA extends S{static get pluginName(){return"FontSizeEditing"}constructor(t){super(t),t.config.define(Gt,{options:["tiny","small","default","big","huge"],supportAllValues:!1})}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:Gt}),t.model.schema.setAttributeProperties(Gt,{isFormatting:!0,copyOnEnter:!0});let e=t.config.get("fontSize.supportAllValues"),n=Iu(this.editor.config.get("fontSize.options")).filter(r=>r.model),i=Du(Gt,n);e?(this._prepareAnyValueConverters(i),this._prepareCompatibilityConverter()):t.conversion.attributeToElement(i),t.commands.add(Gt,new uA(t))}_prepareAnyValueConverters(t){let e=this.editor,n=t.model.values.filter(i=>{return!zw(String(i))&&(r=String(i),!Lw.test(r));var r});if(n.length)throw new b.a("font-size-invalid-use-of-named-presets",null,{presets:n});e.conversion.for("downcast").attributeToElement({model:Gt,view:(i,{writer:r})=>{if(i)return r.createAttributeElement("span",{style:"font-size:"+i},{priority:7})}}),e.conversion.for("upcast").elementToAttribute({model:{key:Gt,value:i=>i.getStyle("font-size")},view:{name:"span",styles:{"font-size":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{size:/^[+-]?\d{1,3}$/}},model:{key:Gt,value:t=>{let e=t.getAttribute("size"),n=e[0]==="-"||e[0]==="+",i=parseInt(e,10);n&&(i=3+i);let r=Bu.length-1,s=Math.min(Math.max(i,0),r);return Bu[s]}}})}}var Pu=g(41),mA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Pu.a,mA),Pu.a.locals;class gA extends S{static get pluginName(){return"FontSizeUI"}init(){let t=this.editor,e=t.t,n=this._getLocalizedOptions(),i=t.commands.get(Gt);t.ui.componentFactory.add(Gt,r=>{let s=Zt(r);return no(s,function(a,c){let l=new xt;for(let d of a){let u={type:"button",model:new wn({commandName:Gt,commandParam:d.model,label:d.title,class:"ck-fontsize-option",withText:!0})};d.view&&d.view.styles&&u.model.set("labelStyle",`font-size:${d.view.styles["font-size"]}`),d.view&&d.view.classes&&u.model.set("class",`${u.model.class} ${d.view.classes}`),u.model.bind("isOn").to(c,"value",h=>h===d.model),l.add(u)}return l}(n,i)),s.buttonView.set({label:e("Font Size"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>',tooltip:!0}),s.extendTemplate({attributes:{class:["ck-font-size-dropdown"]}}),s.bind("isEnabled").to(i),this.listenTo(s,"execute",a=>{t.execute(a.source.commandName,{value:a.source.commandParam}),t.editing.view.focus()}),s})}_getLocalizedOptions(){let t=this.editor,e=t.t,n={Default:e("Default"),Tiny:e("Tiny"),Small:e("Small"),Big:e("Big"),Huge:e("Huge")};return Iu(t.config.get(Gt).options).map(i=>{let r=n[i.title];return r&&r!=i.title&&(i=Object.assign({},i,{title:r})),i})}}class pA extends H{refresh(){let t=this.editor.model,e=Pt(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("element","paragraph"),this.isEnabled=!!e&&zu(e,t.schema)}execute(t={}){let e=this.editor.model,n=e.document;e.change(i=>{let r=(t.selection||n.selection).getSelectedBlocks();for(let s of r)!s.is("element","paragraph")&&zu(s,e.schema)&&i.rename(s,"paragraph")})}}function zu(o,t){return t.checkChild(o.parent,"paragraph")&&!t.isObject(o)}class fA extends H{execute(t){let e=this.editor.model,n=t.position;e.change(i=>{let r=i.createElement("paragraph");if(!e.schema.checkChild(n.parent,r)){let s=e.schema.findAllowedParent(n,r);if(!s)return;n=i.split(n,s).position}e.insertContent(r,n),i.setSelection(r,"in")})}}class so extends S{static get pluginName(){return"Paragraph"}init(){let t=this.editor,e=t.model;t.commands.add("paragraph",new pA(t)),t.commands.add("insertParagraph",new fA(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(n,{writer:i})=>so.paragraphLikeElements.has(n.name)?n.isEmpty?null:i.createElement("paragraph"):null,view:/.+/,converterPriority:"low"})}}so.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);class kA extends H{constructor(t,e){super(t),this.modelElements=e}refresh(){let t=Pt(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>Lu(t,e,this.editor.model.schema))}execute(t){let e=this.editor.model,n=e.document,i=t.value;e.change(r=>{let s=Array.from(n.selection.getSelectedBlocks()).filter(a=>Lu(a,i,e.schema));for(let a of s)a.is("element",i)||r.rename(a,i)})}}function Lu(o,t,e){return e.checkChild(o.parent,t)&&!e.isObject(o)}let ss="paragraph";class bA extends S{static get pluginName(){return"HeadingEditing"}constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[so]}init(){let t=this.editor,e=t.config.get("heading.options"),n=[];for(let i of e)i.model!==ss&&(t.model.schema.register(i.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new kA(t,n))}afterInit(){let t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(i,r)=>{let s=t.model.document.selection.getFirstPosition().parent;n.some(a=>s.is("element",a.model))&&!s.is("element",ss)&&s.childCount===0&&r.writer.rename(s,ss)})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:P.get("low")+1})}}var Ou=g(42),wA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Ou.a,wA),Ou.a.locals;class CA extends S{static get pluginName(){return"HeadingUI"}init(){let t=this.editor,e=t.t,n=function(s){let a=s.t,c={Paragraph:a("Paragraph"),"Heading 1":a("Heading 1"),"Heading 2":a("Heading 2"),"Heading 3":a("Heading 3"),"Heading 4":a("Heading 4"),"Heading 5":a("Heading 5"),"Heading 6":a("Heading 6")};return s.config.get("heading.options").map(l=>{let d=c[l.title];return d&&d!=l.title&&(l.title=d),l})}(t),i=e("Choose heading"),r=e("Heading");t.ui.componentFactory.add("heading",s=>{let a={},c=new xt,l=t.commands.get("heading"),d=t.commands.get("paragraph"),u=[l];for(let m of n){let p={type:"button",model:new wn({label:m.title,class:m.class,withText:!0})};m.model==="paragraph"?(p.model.bind("isOn").to(d,"value"),p.model.set("commandName","paragraph"),u.push(d)):(p.model.bind("isOn").to(l,"value",k=>k===m.model),p.model.set({commandName:"heading",commandValue:m.model})),c.add(p),a[m.model]=m.title}let h=Zt(s);return no(h,c),h.buttonView.set({isOn:!1,withText:!0,tooltip:r}),h.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),h.bind("isEnabled").toMany(u,"isEnabled",(...m)=>m.some(p=>p)),h.buttonView.bind("label").to(l,"value",d,"value",(m,p)=>{let k=m||p&&"paragraph";return a[k]?a[k]:i}),this.listenTo(h,"execute",m=>{t.execute(m.source.commandName,m.source.commandValue?{value:m.source.commandValue}:void 0),t.editing.view.focus()}),h})}}class mi extends S{static get requires(){return[Zo]}static get pluginName(){return"WidgetToolbarRepository"}init(){let t=this.editor;if(t.plugins.has("BalloonToolbar")){let e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",n=>{(function(i){let r=i.getSelectedElement();return!(!r||!kt(r))})(t.editing.view.document.selection)&&n.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(let t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:i,balloonClassName:r="ck-toolbar-container"}){if(!n.length)return void Object(b.b)("widget-toolbar-no-items",{toolbarId:t});let s=this.editor,a=s.t,c=new Fr(s.locale);if(c.ariaLabel=e||a("Widget toolbar"),this._toolbarDefinitions.has(t))throw new b.a("widget-toolbar-duplicated",this,{toolbarId:t});c.fillFromConfig(n,s.ui.componentFactory),this._toolbarDefinitions.set(t,{view:c,getRelatedElement:i,balloonClassName:r})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(let i of this._toolbarDefinitions.values()){let r=i.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&r)if(this.editor.ui.focusTracker.isFocused){let s=r.getAncestors().length;s>t&&(t=s,e=r,n=i)}else this._isToolbarVisible(i)&&this._hideToolbar(i);else this._isToolbarInBalloon(i)&&this._hideToolbar(i)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?Ru(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:ju(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(let n of this._toolbarDefinitions.values())if(this._isToolbarVisible(n)){let i=n.getRelatedElement(this.editor.editing.view.document.selection);Ru(this.editor,i)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function Ru(o,t){let e=o.plugins.get("ContextualBalloon"),n=ju(o,t);e.updatePosition(n)}function ju(o,t){let e=o.editing.view,n=K.defaultPositions;return{target:e.domConverter.mapViewToDom(t),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,SC]}}class Fu{constructor(t){this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=t,this._referenceCoordinates=null}begin(t,e,n){let i=new $(e);this.activeHandlePosition=function(s){let a=["top-left","top-right","bottom-right","bottom-left"];for(let c of a)if(s.classList.contains(AA(c)))return c}(t),this._referenceCoordinates=function(s,a){let c=new $(s),l=a.split("-"),d={x:l[1]=="right"?c.right:c.left,y:l[0]=="bottom"?c.bottom:c.top};return d.x+=s.ownerDocument.defaultView.scrollX,d.y+=s.ownerDocument.defaultView.scrollY,d}(e,function(s){let a=s.split("-"),c={top:"bottom",bottom:"top",left:"right",right:"left"};return`${c[a[0]]}-${c[a[1]]}`}(this.activeHandlePosition)),this.originalWidth=i.width,this.originalHeight=i.height,this.aspectRatio=i.width/i.height;let r=n.style.width;r&&r.match(/^\d+(\.\d*)?%$/)?this.originalWidthPercents=parseFloat(r):this.originalWidthPercents=function(s,a){let c=s.parentElement,l=parseFloat(c.ownerDocument.defaultView.getComputedStyle(c).width);return a.width/l*100}(n,i)}update(t){this.proposedWidth=t.width,this.proposedHeight=t.height,this.proposedWidthPercents=t.widthPercents,this.proposedHandleHostWidth=t.handleHostWidth,this.proposedHandleHostHeight=t.handleHostHeight}}function AA(o){return`ck-widget__resizer__handle-${o}`}L(Fu,rt);class as{constructor(t){this._options=t,this._domResizerWrapper=null,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",e=>{this.state.proposedWidth||this.state.proposedWidthPercents||(this._cleanup(),e.stop())},{priority:"high"}),this.on("change:isEnabled",()=>{this.isEnabled&&this.redraw()})}attach(){let t=this,e=this._options.viewElement;this._options.editor.editing.view.change(n=>{let i=n.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},function(r){let s=this.toDomElement(r);return t._appendHandles(s),t._appendSizeUI(s),t._domResizerWrapper=s,t.on("change:isEnabled",(a,c,l)=>{s.style.display=l?"":"none"}),s.style.display=t.isEnabled?"":"none",s});n.insert(n.createPositionAt(e,"end"),i),n.addClass("ck-widget_with-resizer",e),this._viewResizerWrapper=i})}begin(t){this.state=new Fu(this._options),this._sizeUI.bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(t,this._getHandleHost(),this._getResizeHost())}updateSize(t){let e=this._proposeNewSize(t);this._options.editor.editing.view.change(s=>{let a=this._options.unit||"%",c=(a==="%"?e.widthPercents:e.width)+a;s.setStyle("width",c,this._options.viewElement)});let n=this._getHandleHost(),i=new $(n);e.handleHostWidth=Math.round(i.width),e.handleHostHeight=Math.round(i.height);let r=new $(n);e.width=Math.round(r.width),e.height=Math.round(r.height),this.redraw(i),this.state.update(e)}commit(){let t=this._options.unit||"%",e=(t==="%"?this.state.proposedWidthPercents:this.state.proposedWidth)+t;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(e)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(t){let e=this._domResizerWrapper;if(!((n=e)&&n.ownerDocument&&n.ownerDocument.contains(n)))return;var n;let i=e.parentElement,r=this._getHandleHost(),s=this._viewResizerWrapper,a=[s.getStyle("width"),s.getStyle("height"),s.getStyle("left"),s.getStyle("top")],c;if(i.isSameNode(r)){let l=t||new $(r);c=[l.width+"px",l.height+"px",void 0,void 0]}else c=[r.offsetWidth+"px",r.offsetHeight+"px",r.offsetLeft+"px",r.offsetTop+"px"];St(a,c)!=="same"&&this._options.editor.editing.view.change(l=>{l.setStyle({width:c[0],height:c[1],left:c[2],top:c[3]},s)})}containsHandle(t){return this._domResizerWrapper.contains(t)}static isResizeHandle(t){return t.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeUI.dismiss(),this._sizeUI.isVisible=!1,this._options.editor.editing.view.change(t=>{t.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(t){let e=this.state,n={x:(i=t).pageX,y:i.pageY};var i;let r=!this._options.isCentered||this._options.isCentered(this),s={x:e._referenceCoordinates.x-(n.x+e.originalWidth),y:n.y-e.originalHeight-e._referenceCoordinates.y};r&&e.activeHandlePosition.endsWith("-right")&&(s.x=n.x-(e._referenceCoordinates.x+e.originalWidth)),r&&(s.x*=2);let a={width:Math.abs(e.originalWidth+s.x),height:Math.abs(e.originalHeight+s.y)};a.dominant=a.width/e.aspectRatio>a.height?"width":"height",a.max=a[a.dominant];let c={width:a.width,height:a.height};return a.dominant=="width"?c.height=c.width/e.aspectRatio:c.width=c.height*e.aspectRatio,{width:Math.round(c.width),height:Math.round(c.height),widthPercents:Math.min(Math.round(e.originalWidthPercents/e.originalWidth*c.width*100)/100,100)}}_getResizeHost(){let t=this._domResizerWrapper.parentElement;return this._options.getResizeHost(t)}_getHandleHost(){let t=this._domResizerWrapper.parentElement;return this._options.getHandleHost(t)}_appendHandles(t){let e=["top-left","top-right","bottom-right","bottom-left"];for(let i of e)t.appendChild(new Lt({tag:"div",attributes:{class:"ck-widget__resizer__handle "+(n=i,`ck-widget__resizer__handle-${n}`)}}).render());var n}_appendSizeUI(t){let e=new _A;e.render(),this._sizeUI=e,t.appendChild(e.element)}}L(as,rt);class _A extends j{constructor(){super();let t=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-size-view",t.to("activeHandlePosition",e=>e?`ck-orientation-${e}`:"")],style:{display:t.if("isVisible","none",e=>!e)}},children:[{text:t.to("label")}]})}bindToState(t,e){this.bind("isVisible").to(e,"proposedWidth",e,"proposedHeight",(n,i)=>n!==null&&i!==null),this.bind("label").to(e,"proposedHandleHostWidth",e,"proposedHandleHostHeight",e,"proposedWidthPercents",(n,i,r)=>t.unit==="px"?`${n}\xD7${i}`:`${r}%`),this.bind("activeHandlePosition").to(e)}dismiss(){this.unbind(),this.isVisible=!1}}var Vu=g(43),vA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Vu.a,vA),Vu.a.locals;class gi extends S{static get pluginName(){return"WidgetResize"}init(){this.set("visibleResizer",null),this.set("_activeResizer",null),this._resizers=new Map;let t=lt.window.document;this.editor.model.schema.setAttributeProperties("width",{isFormatting:!0}),this.editor.editing.view.addObserver(ti),this._observer=Object.create(hn),this.listenTo(this.editor.editing.view.document,"mousedown",this._mouseDownListener.bind(this),{priority:"high"}),this._observer.listenTo(t,"mousemove",this._mouseMoveListener.bind(this)),this._observer.listenTo(t,"mouseup",this._mouseUpListener.bind(this));let e=()=>{this.visibleResizer&&this.visibleResizer.redraw()},n=hu(e,200);this.on("change:visibleResizer",e),this.editor.ui.on("update",n),this._observer.listenTo(lt.window,"resize",n);let i=this.editor.editing.view.document.selection;i.on("change",()=>{let r=i.getSelectedElement();this.visibleResizer=this.getResizerByViewElement(r)||null})}destroy(){this._observer.stopListening();for(let t of this._resizers.values())t.destroy()}attachTo(t){let e=new as(t),n=this.editor.plugins;if(e.attach(),n.has("WidgetToolbarRepository")){let r=n.get("WidgetToolbarRepository");e.on("begin",()=>{r.forceDisabled("resize")},{priority:"lowest"}),e.on("cancel",()=>{r.clearForceDisabled("resize")},{priority:"highest"}),e.on("commit",()=>{r.clearForceDisabled("resize")},{priority:"highest"})}this._resizers.set(t.viewElement,e);let i=this.editor.editing.view.document.selection.getSelectedElement();return this.getResizerByViewElement(i)==e&&(this.visibleResizer=e),e}getResizerByViewElement(t){return this._resizers.get(t)}_getResizerByHandle(t){for(let e of this._resizers.values())if(e.containsHandle(t))return e}_mouseDownListener(t,e){let n=e.domTarget;as.isResizeHandle(n)&&(this._activeResizer=this._getResizerByHandle(n),this._activeResizer&&(this._activeResizer.begin(n),t.stop(),e.preventDefault()))}_mouseMoveListener(t,e){this._activeResizer&&this._activeResizer.updateSize(e)}_mouseUpListener(){this._activeResizer&&(this._activeResizer.commit(),this._activeResizer=null)}}L(gi,rt);class yA extends H{refresh(){this.isEnabled=function(t){let e=t.schema,n=t.document.selection;return function(i,r,s){let a=function(c,l){let d=xn(c,l).parent;return d.isEmpty&&!d.is("element","$root")?d.parent:d}(i,s);return r.checkChild(a,"horizontalLine")}(n,e,t)&&!ui(n,e)}(this.editor.model)}execute(){let t=this.editor.model;t.change(e=>{let n=e.createElement("horizontalLine");t.insertContent(n);let i=n.nextSibling;!(i&&t.schema.checkChild(i,"$text"))&&t.schema.checkChild(n.parent,"paragraph")&&(i=e.createElement("paragraph"),t.insertContent(i,e.createPositionAfter(n))),i&&e.setSelection(i,0)})}}var Uu=g(44),xA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Uu.a,xA),Uu.a.locals;class DA extends S{static get pluginName(){return"HorizontalLineEditing"}init(){let t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;e.register("horizontalLine",{isObject:!0,allowWhere:"$block"}),i.for("dataDowncast").elementToElement({model:"horizontalLine",view:(r,{writer:s})=>s.createEmptyElement("hr")}),i.for("editingDowncast").elementToElement({model:"horizontalLine",view:(r,{writer:s})=>{let a=n("Horizontal line"),c=s.createContainerElement("div"),l=s.createEmptyElement("hr");return s.addClass("ck-horizontal-line",c),s.setCustomProperty("hr",!0,c),s.insert(s.createPositionAt(c,0),l),function(d,u,h){return u.setCustomProperty("horizontalLine",!0,d),di(d,u,{label:h})}(c,s,a)}}),i.for("upcast").elementToElement({view:"hr",model:"horizontalLine"}),t.commands.add("horizontalLine",new yA(t))}}class EA extends S{static get pluginName(){return"HorizontalLineUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add("horizontalLine",n=>{let i=t.commands.get("horizontalLine"),r=new X(n);return r.set({label:e("Horizontal line"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z"/></svg>',tooltip:!0}),r.bind("isEnabled").to(i,"isEnabled"),this.listenTo(r,"execute",()=>{t.execute("horizontalLine"),t.editing.view.focus()}),r})}}class Hu extends be{observe(t){this.listenTo(t,"load",(e,n)=>{let i=n.target;this.checkShouldIgnoreEventFromTarget(i)||i.tagName=="IMG"&&this._fireEvents(n)},{useCapture:!0})}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}}function Ku(o){return!!o.getCustomProperty("image")&&kt(o)}function cs(o){let t=o.getSelectedElement();return t&&Ku(t)?t:null}function Ye(o){return!!o&&o.is("element","image")}function Gu(o,t={},e=null){o.change(n=>{let i=n.createElement("image",t),r=e||xn(o.document.selection,o);o.insertContent(i,r),i.parent&&n.setSelection(i,"on")})}function qu(o){let t=o.schema,e=o.document.selection;return function(n,i,r){let s=function(a,c){let l=xn(a,c).parent;return l.isEmpty&&!l.is("element","$root")?l.parent:l}(n,r);return i.checkChild(s,"image")}(e,t,o)&&!ui(e,t)&&function(n){return[...n.focus.getAncestors()].every(i=>!i.is("element","image"))}(e)}function Qe(o){let t=[];for(let e of o.getChildren())t.push(e),e.is("element")&&t.push(...e.getChildren());return t.find(e=>e.is("element","img"))}function Wu(o){return e=>{e.on(`attribute:${o}:image`,t)};function t(e,n,i){if(!i.consumable.consume(n.item,e.name))return;let r=i.writer,s=Qe(i.mapper.toViewElement(n.item));r.setAttribute(n.attributeKey,n.attributeNewValue||"",s)}}class MA extends H{refresh(){this.isEnabled=qu(this.editor.model)}execute(t){let e=this.editor.model;for(let n of gt(t.source))Gu(e,{src:n})}}class TA extends S{static get pluginName(){return"ImageEditing"}init(){let t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;t.editing.view.addObserver(Hu),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),i.for("dataDowncast").elementToElement({model:"image",view:(s,{writer:a})=>Yu(a)}),i.for("editingDowncast").elementToElement({model:"image",view:(s,{writer:a})=>function(c,l,d){return l.setCustomProperty("image",!0,c),di(c,l,{label:function(){let u=Qe(c).getAttribute("alt");return u?`${u} ${d}`:d}})}(Yu(a),a,n("image widget"))}),i.for("downcast").add(Wu("src")).add(Wu("alt")).add(function(){return a=>{a.on("attribute:srcset:image",s)};function s(a,c,l){if(!l.consumable.consume(c.item,a.name))return;let d=l.writer,u=Qe(l.mapper.toViewElement(c.item));if(c.attributeNewValue===null){let h=c.attributeOldValue;h.data&&(d.removeAttribute("srcset",u),d.removeAttribute("sizes",u),h.width&&d.removeAttribute("width",u))}else{let h=c.attributeNewValue;h.data&&(d.setAttribute("srcset",h.data,u),d.setAttribute("sizes","100vw",u),h.width&&d.setAttribute("width",h.width,u))}}}()),i.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(s,{writer:a})=>a.createElement("image",{src:s.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:s=>{let a={data:s.getAttribute("srcset")};return s.hasAttribute("width")&&(a.width=s.getAttribute("width")),a}}}).add(function(){return a=>{a.on("element:figure",s)};function s(a,c,l){if(!l.consumable.test(c.viewItem,{name:!0,classes:"image"}))return;let d=Qe(c.viewItem);if(!d||!d.hasAttribute("src")||!l.consumable.test(d,{name:!0}))return;let u=Pt(l.convertItem(d,c.modelCursor).modelRange.getItems());u&&(l.convertChildren(c.viewItem,u),l.updateConversionResult(u,c))}}());let r=new MA(t);t.commands.add("insertImage",r),t.commands.add("imageInsert",r)}}function Yu(o){let t=o.createEmptyElement("img"),e=o.createContainerElement("figure",{class:"image"});return o.insert(o.createPositionAt(e,0),t),e}class SA extends H{refresh(){let t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Ye(t),Ye(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){let e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(i=>{i.setAttribute("alt",t.newValue,n)})}}class IA extends S{static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new SA(this.editor))}}var Qu=g(45),NA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0},$u=(z()(Qu.a,NA),Qu.a.locals,g(46)),BA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()($u.a,BA),$u.a.locals;class PA extends j{constructor(t){super(t);let e=this.locale.t;this.focusTracker=new zt,this.keystrokes=new $t,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("Save"),Ko,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("Cancel"),Ho,"ck-button-cancel","cancel"),this._focusables=new Ie,this._focusCycler=new ve({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form","ck-responsive-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),Br(this)}render(){super.render(),this.keystrokes.listenTo(this.element),Go({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,i){let r=new X(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),i&&r.delegate("execute").to(this,i),r}_createLabeledInputView(){let t=this.locale.t,e=new Qo(this.locale,$o);return e.label=t("Text alternative"),e}}function Ju(o){let t=o.editing.view,e=K.defaultPositions;return{target:t.domConverter.viewToDom(t.document.selection.getSelectedElement()),positions:[e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast,e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast]}}class zA extends S{static get requires(){return[Zo]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){let t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{let i=t.commands.get("imageTextAlternative"),r=new X(n);return r.set({label:e("Change image text alternative"),icon:kb,tooltip:!0}),r.bind("isEnabled").to(i,"isEnabled"),this.listenTo(r,"execute",()=>{this._showForm()}),r})}_createForm(){let t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new PA(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(n,i)=>{this._hideForm(!0),i()}),this.listenTo(t.ui,"update",()=>{cs(e.selection)?this._isVisible&&function(n){let i=n.plugins.get("ContextualBalloon");if(cs(n.editing.view.document.selection)){let r=Ju(n);i.updatePosition(r)}}(t):this._hideForm(!0)}),Nr({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;let t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:Ju(t)}),n.fieldView.value=n.fieldView.element.value=e.value||"",this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class LA extends S{static get requires(){return[IA,zA]}static get pluginName(){return"ImageTextAlternative"}}var Zu=g(47),OA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Zu.a,OA),Zu.a.locals;function ls(o){for(let t of o.getChildren())if(t&&t.is("element","caption"))return t;return null}function RA(o){let t=o.parent;return o.name=="figcaption"&&t&&t.name=="figure"&&t.hasClass("image")?{name:!0}:null}class jA extends S{static get pluginName(){return"ImageCaptionEditing"}init(){let t=this.editor,e=t.editing.view,n=t.model.schema,i=t.data,r=t.editing,s=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(c=>this._insertMissingModelCaptionElement(c)),t.conversion.for("upcast").elementToElement({view:RA,model:"caption"}),i.downcastDispatcher.on("insert:caption",Xu(c=>c.createContainerElement("figcaption"),!1));let a=function(c,l){return d=>{let u=d.createEditableElement("figcaption");return d.setCustomProperty("imageCaption",!0,u),wd({view:c,element:u,text:l}),is(u,d)}}(e,s("Enter image caption"));r.downcastDispatcher.on("insert:caption",Xu(a)),r.downcastDispatcher.on("insert",this._fixCaptionVisibility(c=>c.item),{priority:"high"}),r.downcastDispatcher.on("remove",this._fixCaptionVisibility(c=>c.position.parent),{priority:"high"}),e.document.registerPostFixer(c=>this._updateCaptionVisibility(c))}_updateCaptionVisibility(t){let e=this.editor.editing.mapper,n=this._lastSelectedCaption,i,r=this.editor.model.document.selection,s=r.getSelectedElement();if(s&&s.is("element","image")){let c=ls(s);i=e.toViewElement(c)}let a=th(r.getFirstPosition().parent);if(a&&(i=e.toViewElement(a)),i&&!this.editor.isReadOnly)return n?(n===i||(eh(n,t),this._lastSelectedCaption=i),nh(i,t)):(this._lastSelectedCaption=i,nh(i,t));if(n){let c=eh(n,t);return this._lastSelectedCaption=null,c}return!1}_fixCaptionVisibility(t){return(e,n,i)=>{let r=th(t(n)),s=this.editor.editing.mapper,a=i.writer;if(r){let c=s.toViewElement(r);c&&(r.childCount?a.removeClass("ck-hidden",c):a.addClass("ck-hidden",c))}}}_insertMissingModelCaptionElement(t){let e=this.editor.model,n=e.document.differ.getChanges(),i=[];for(let r of n)if(r.type=="insert"&&r.name!="$text"){let s=r.position.nodeAfter;if(s.is("element","image")&&!ls(s)&&i.push(s),!s.is("element","image")&&s.childCount)for(let a of e.createRangeIn(s).getItems())a.is("element","image")&&!ls(a)&&i.push(a)}for(let r of i)t.appendElement("caption",r);return!!i.length}}function Xu(o,t=!0){return(e,n,i)=>{let r=n.item;if((r.childCount||t)&&Ye(r.parent)){if(!i.consumable.consume(n.item,"insert"))return;let s=i.mapper.toViewElement(n.range.start.parent),a=o(i.writer),c=i.writer;r.childCount||c.addClass("ck-hidden",a),function(l,d,u,h){let m=h.writer.createPositionAt(u,"end");h.writer.insert(m,l),h.mapper.bindElements(d,l)}(a,n.item,s,i)}}}function th(o){let t=o.getAncestors({includeSelf:!0}).find(e=>e.name=="caption");return t&&t.parent&&t.parent.name=="image"?t:null}function eh(o,t){return!o.childCount&&!o.hasClass("ck-hidden")&&(t.addClass("ck-hidden",o),!0)}function nh(o,t){return!!o.hasClass("ck-hidden")&&(t.removeClass("ck-hidden",o),!0)}var oh=g(48),FA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(oh.a,FA),oh.a.locals;class VA extends j{constructor(t){super(t),this.buttonView=new X(t),this._fileInputView=new UA(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class UA extends j{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);let e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}function ih(o){let t=o.map(e=>e.replace("+","\\+"));return new RegExp(`^image\\/(${t.join("|")})$`)}function HA(o){return new Promise((t,e)=>{let n=o.getAttribute("src");fetch(n).then(i=>i.blob()).then(i=>{let r=rh(i,n),s=r.replace("image/",""),a=new File([i],`image.${s}`,{type:r});t(a)}).catch(i=>i&&i.name==="TypeError"?function(r){return function(s){return new Promise((a,c)=>{let l=lt.document.createElement("img");l.addEventListener("load",()=>{let d=lt.document.createElement("canvas");d.width=l.width,d.height=l.height,d.getContext("2d").drawImage(l,0,0),d.toBlob(u=>u?a(u):c())}),l.addEventListener("error",()=>c()),l.src=s})}(r).then(s=>{let a=rh(s,r),c=a.replace("image/","");return new File([s],`image.${c}`,{type:a})})}(n).then(t).catch(e):e(i))})}function rh(o,t){return o.type?o.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}class KA extends S{static get pluginName(){return"ImageUploadUI"}init(){let t=this.editor,e=t.t,n=i=>{let r=new VA(i),s=t.commands.get("uploadImage"),a=t.config.get("image.upload.types"),c=ih(a);return r.set({acceptedType:a.map(l=>`image/${l}`).join(","),allowMultipleFiles:!0}),r.buttonView.set({label:e("Insert image"),icon:vl,tooltip:!0}),r.buttonView.bind("isEnabled").to(s),r.on("done",(l,d)=>{let u=Array.from(d).filter(h=>c.test(h.type));u.length&&t.execute("uploadImage",{file:u})}),r};t.ui.componentFactory.add("uploadImage",n),t.ui.componentFactory.add("imageUpload",n)}}var sh=g(49),GA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0},ah=(z()(sh.a,GA),sh.a.locals,g(50)),qA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0},ch=(z()(ah.a,qA),ah.a.locals,g(51)),WA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ch.a,WA),ch.a.locals;class YA extends S{static get pluginName(){return"ImageUploadProgress"}constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>')}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){let i=this.editor,r=e.item,s=r.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;let a=i.plugins.get(Be),c=s?e.attributeNewValue:null,l=this.placeholder,d=i.editing.mapper.toViewElement(r),u=n.writer;if(c=="reading")return lh(d,u),void dh(l,d,u);if(c=="uploading"){let h=a.loaders.get(s);return lh(d,u),void(h?(uh(d,u),function(m,p,k,f){let C=function(x){let M=x.createUIElement("div",{class:"ck-progress-bar"});return x.setCustomProperty("progressBar",!0,M),M}(p);p.insert(p.createPositionAt(m,"end"),C),k.on("change:uploadedPercent",(x,M,N)=>{f.change(q=>{q.setStyle("width",N+"%",C)})})}(d,u,h,i.editing.view),function(m,p,k){if(k.data){let f=Qe(m);p.setAttribute("src",k.data,f)}}(d,u,h)):dh(l,d,u))}c=="complete"&&a.loaders.get(s)&&function(h,m,p){let k=m.createUIElement("div",{class:"ck-image-upload-complete-icon"});m.insert(m.createPositionAt(h,"end"),k),setTimeout(()=>{p.change(f=>f.remove(f.createRangeOn(k)))},3e3)}(d,u,i.editing.view),function(h,m){mh(h,m,"progressBar")}(d,u),uh(d,u),function(h,m){m.removeClass("ck-appear",h)}(d,u)}}function lh(o,t){o.hasClass("ck-appear")||t.addClass("ck-appear",o)}function dh(o,t,e){t.hasClass("ck-image-upload-placeholder")||e.addClass("ck-image-upload-placeholder",t);let n=Qe(t);n.getAttribute("src")!==o&&e.setAttribute("src",o,n),hh(t,"placeholder")||e.insert(e.createPositionAfter(n),function(i){let r=i.createUIElement("div",{class:"ck-upload-placeholder-loader"});return i.setCustomProperty("placeholder",!0,r),r}(e))}function uh(o,t){o.hasClass("ck-image-upload-placeholder")&&t.removeClass("ck-image-upload-placeholder",o),mh(o,t,"placeholder")}function hh(o,t){for(let e of o.getChildren())if(e.getCustomProperty(t))return e}function mh(o,t,e){let n=hh(o,e);n&&t.remove(t.createRangeOn(n))}class QA extends H{refresh(){let t=this.editor.model.document.selection.getSelectedElement(),e=t&&t.name==="image"||!1;this.isEnabled=qu(this.editor.model)||e}execute(t){let e=this.editor,n=e.model,i=e.plugins.get(Be);for(let r of gt(t.file))$A(n,i,r)}}function $A(o,t,e){let n=t.createLoader(e);n&&Gu(o,{uploadId:n.id})}class JA extends S{static get requires(){return[Be,dd,Pe]}static get pluginName(){return"ImageUploadEditing"}constructor(t){super(t),t.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}})}init(){let t=this.editor,e=t.model.document,n=t.model.schema,i=t.conversion,r=t.plugins.get(Be),s=ih(t.config.get("image.upload.types"));n.extend("image",{allowAttributes:["uploadId","uploadStatus"]});let a=new QA(t);t.commands.add("uploadImage",a),t.commands.add("imageUpload",a),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(c,l)=>{if(d=l.dataTransfer,Array.from(d.types).includes("text/html")&&d.getData("text/html")!=="")return;var d;let u=Array.from(l.dataTransfer.files).filter(h=>!!h&&s.test(h.type));u.length&&(c.stop(),t.model.change(h=>{l.targetRanges&&h.setSelection(l.targetRanges.map(m=>t.editing.mapper.toModelRange(m))),t.model.enqueueChange("default",()=>{t.execute("uploadImage",{file:u})})}))}),this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",(c,l)=>{let d=Array.from(t.editing.view.createRangeIn(l.content)).filter(h=>{return!(!(m=h.item).is("element","img")||!m.getAttribute("src"))&&(m.getAttribute("src").match(/^data:image\/\w+;base64,/g)||m.getAttribute("src").match(/^blob:/g))&&!h.item.getAttribute("uploadProcessed");var m}).map(h=>({promise:HA(h.item),imageElement:h.item}));if(!d.length)return;let u=new ei(t.editing.view.document);for(let h of d){u.setAttribute("uploadProcessed",!0,h.imageElement);let m=r.createLoader(h.promise);m&&(u.setAttribute("src","",h.imageElement),u.setAttribute("uploadId",m.id,h.imageElement))}}),t.editing.view.document.on("dragover",(c,l)=>{l.preventDefault()}),e.on("change",()=>{let c=e.differ.getChanges({includeChangesInGraveyard:!0});for(let l of c)if(l.type=="insert"&&l.name!="$text"){let d=l.position.nodeAfter,u=l.position.root.rootName=="$graveyard";for(let h of ZA(t,d)){let m=h.getAttribute("uploadId");if(!m)continue;let p=r.loaders.get(m);p&&(u?p.abort():p.status=="idle"&&this._readAndUpload(p,h))}}}),this.on("uploadComplete",(c,{imageElement:l,data:d})=>{let u=d.urls?d.urls:d;this.editor.model.change(h=>{h.setAttribute("src",u.default,l),this._parseAndSetSrcsetAttributeOnImage(u,l,h)})},{priority:"low"})}_readAndUpload(t,e){let n=this.editor,i=n.model,r=n.locale.t,s=n.plugins.get(Be),a=n.plugins.get(dd);return i.enqueueChange("transparent",l=>{l.setAttribute("uploadStatus","reading",e)}),t.read().then(()=>{let l=t.upload();if(Ct.isSafari){let d=Qe(n.editing.mapper.toViewElement(e));n.editing.view.once("render",()=>{if(!d.parent)return;let u=n.editing.view.domConverter.mapViewToDom(d.parent);if(!u)return;let h=u.style.display;u.style.display="none",u._ckHack=u.offsetHeight,u.style.display=h})}return i.enqueueChange("transparent",d=>{d.setAttribute("uploadStatus","uploading",e)}),l}).then(l=>{i.enqueueChange("transparent",d=>{d.setAttribute("uploadStatus","complete",e),this.fire("uploadComplete",{data:l,imageElement:e})}),c()}).catch(l=>{if(t.status!=="error"&&t.status!=="aborted")throw l;t.status=="error"&&l&&a.showWarning(l,{title:r("Upload failed"),namespace:"upload"}),c(),i.enqueueChange("transparent",d=>{d.remove(e)})});function c(){i.enqueueChange("transparent",l=>{l.removeAttribute("uploadId",e),l.removeAttribute("uploadStatus",e)}),s.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let i=0,r=Object.keys(t).filter(s=>{let a=parseInt(s,10);if(!isNaN(a))return i=Math.max(i,a),!0}).map(s=>`${t[s]} ${s}w`).join(", ");r!=""&&n.setAttribute("srcset",{data:r,width:i},e)}}function ZA(o,t){return Array.from(o.model.createRangeOn(t)).filter(e=>e.item.is("element","image")).map(e=>e.item)}class gh extends S{static get pluginName(){return"ImageUpload"}static get requires(){return[JA,KA,YA]}}var ph=g(52),XA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(ph.a,XA),ph.a.locals;class t_ extends j{constructor(t,e={}){super(t);let n=this.bindTemplate;this.set("class",e.class||null),this.children=this.createCollection(),e.children&&e.children.forEach(i=>this.children.add(i)),this.set("_role",null),this.set("_ariaLabelledBy",null),e.labelView&&this.set({_role:"group",_ariaLabelledBy:e.labelView.id}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__row",n.to("class")],role:n.to("_role"),"aria-labelledby":n.to("_ariaLabelledBy")},children:this.children})}}var fh=g(53),e_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(fh.a,e_),fh.a.locals;class n_ extends j{constructor(t,e){super(t);let{insertButtonView:n,cancelButtonView:i}=this._createActionButtons(t);if(this.insertButtonView=n,this.cancelButtonView=i,this.dropdownView=this._createDropdownView(t),this.set("imageURLInputValue",""),this.focusTracker=new zt,this.keystrokes=new $t,this._focusables=new Ie,this._focusCycler=new ve({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.set("_integrations",new xt),e)for(let[r,s]of Object.entries(e))r==="insertImageViaUrl"&&(s.fieldView.bind("value").to(this,"imageURLInputValue",a=>a||""),s.fieldView.on("input",()=>{this.imageURLInputValue=s.fieldView.element.value.trim()})),s.name=r,this._integrations.add(s);this.setTemplate({tag:"form",attributes:{class:["ck","ck-image-insert-form"],tabindex:"-1"},children:[...this._integrations,new t_(t,{children:[this.insertButtonView,this.cancelButtonView],class:"ck-image-insert-form__action-row"})]})}render(){super.render(),Go({view:this});let t=[...this._integrations,this.insertButtonView,this.cancelButtonView];t.forEach(n=>{this._focusables.add(n),this.focusTracker.add(n.element)}),this.keystrokes.listenTo(this.element);let e=n=>n.stopPropagation();this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e),this.listenTo(t[0].element,"selectstart",(n,i)=>{i.stopPropagation()},{priority:"high"})}getIntegration(t){return this._integrations.find(e=>e.name===t)}_createDropdownView(t){let e=t.t,n=Zt(t,Wl),i=n.buttonView,r=n.panelView;return i.set({label:e("Insert image"),icon:vl,tooltip:!0}),r.extendTemplate({attributes:{class:"ck-image-insert__panel"}}),n}_createActionButtons(t){let e=t.t,n=new X(t),i=new X(t);return n.set({label:e("Insert"),icon:Ko,class:"ck-button-save",type:"submit",withText:!0,isEnabled:this.imageURLInputValue}),i.set({label:e("Cancel"),icon:Ho,class:"ck-button-cancel",withText:!0}),n.bind("isEnabled").to(this,"imageURLInputValue",r=>!!r),n.delegate("execute").to(this,"submit"),i.delegate("execute").to(this,"cancel"),{insertButtonView:n,cancelButtonView:i}}focus(){this._focusCycler.focusFirst()}}function o_(o){let t=o.t,e=new Qo(o,$o);return e.set({label:t("Insert image via URL")}),e.fieldView.placeholder="https://example.com/image.png",e}class i_ extends S{static get pluginName(){return"ImageInsertUI"}init(){let t=this.editor,e=n=>this._createDropdownView(n);t.ui.componentFactory.add("insertImage",e),t.ui.componentFactory.add("imageInsert",e)}_createDropdownView(t){let e=this.editor,n=new n_(t,function(a){let c=a.config.get("image.insert.integrations"),l=a.plugins.get("ImageInsertUI"),d={insertImageViaUrl:o_(a.locale)};if(!c)return d;if(c.find(u=>u==="openCKFinder")&&a.ui.componentFactory.has("ckfinder")){let u=a.ui.componentFactory.create("ckfinder");u.set({withText:!0,class:"ck-image-insert__ck-finder-button"}),u.delegate("execute").to(l,"cancel"),d.openCKFinder=u}return c.reduce((u,h)=>(d[h]?u[h]=d[h]:a.ui.componentFactory.has(h)&&(u[h]=a.ui.componentFactory.create(h)),u),{})}(e)),i=e.commands.get("uploadImage"),r=n.dropdownView,s=r.buttonView;return s.actionView=e.ui.componentFactory.create("uploadImage"),s.actionView.extendTemplate({attributes:{class:"ck ck-button ck-splitbutton__action"}}),this._setUpDropdown(r,n,i)}_setUpDropdown(t,e,n){let i=this.editor,r=i.t,s=e.insertButtonView,a=e.getIntegration("insertImageViaUrl"),c=t.panelView;function l(){i.editing.view.focus(),t.isOpen=!1}return t.bind("isEnabled").to(n),t.buttonView.once("open",()=>{c.children.add(e)}),t.on("change:isOpen",()=>{let d=i.model.document.selection.getSelectedElement();t.isOpen&&(e.focus(),Ye(d)?(e.imageURLInputValue=d.getAttribute("src"),s.label=r("Update"),a.label=r("Update image URL")):(e.imageURLInputValue="",s.label=r("Insert"),a.label=r("Insert image via URL")))},{priority:"low"}),e.delegate("submit","cancel").to(t),this.delegate("cancel").to(t),t.on("submit",()=>{l(),function(){let d=i.model.document.selection.getSelectedElement();Ye(d)?i.model.change(u=>{u.setAttribute("src",e.imageURLInputValue,d),u.removeAttribute("srcset",d),u.removeAttribute("sizes",d)}):i.execute("insertImage",{source:e.imageURLInputValue})}()}),t.on("cancel",()=>{l()}),t}}class r_ extends H{refresh(){let t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Ye(t),t&&t.hasAttribute("width")?this.value={width:t.getAttribute("width"),height:null}:this.value=null}execute(t){let e=this.editor.model,n=e.document.selection.getSelectedElement();this.value={width:t.width,height:null},n&&e.change(i=>{i.setAttribute("width",t.width,n)})}}class kh extends S{static get pluginName(){return"ImageResizeEditing"}constructor(t){super(t),t.config.define("image",{resizeUnit:"%",resizeOptions:[{name:"resizeImage:original",value:null,icon:"original"},{name:"resizeImage:25",value:"25",icon:"small"},{name:"resizeImage:50",value:"50",icon:"medium"},{name:"resizeImage:75",value:"75",icon:"large"}]})}init(){let t=this.editor,e=new r_(t);this._registerSchema(),this._registerConverters(),t.commands.add("resizeImage",e),t.commands.add("imageResize",e)}_registerSchema(){this.editor.model.schema.extend("image",{allowAttributes:"width"}),this.editor.model.schema.setAttributeProperties("width",{isFormatting:!0})}_registerConverters(){let t=this.editor;t.conversion.for("downcast").add(e=>e.on("attribute:width:image",(n,i,r)=>{if(!r.consumable.consume(i.item,n.name))return;let s=r.writer,a=r.mapper.toViewElement(i.item);i.attributeNewValue!==null?(s.setStyle("width",i.attributeNewValue,a),s.addClass("image_resized",a)):(s.removeStyle("width",a),s.removeClass("image_resized",a))})),t.conversion.for("upcast").attributeToAttribute({view:{name:"figure",styles:{width:/.+/}},model:{key:"width",value:e=>e.getStyle("width")}})}}let ds={small:yb,medium:xb,large:vb,original:_b};class s_ extends S{static get requires(){return[kh]}static get pluginName(){return"ImageResizeButtons"}constructor(t){super(t),this._resizeUnit=t.config.get("image.resizeUnit")}init(){let t=this.editor,e=t.config.get("image.resizeOptions"),n=t.commands.get("resizeImage");this.bind("isEnabled").to(n);for(let i of e)this._registerImageResizeButton(i);this._registerImageResizeDropdown(e)}_registerImageResizeButton(t){let e=this.editor,{name:n,value:i,icon:r}=t,s=i?i+this._resizeUnit:null;e.ui.componentFactory.add(n,a=>{let c=new X(a),l=e.commands.get("resizeImage"),d=this._getOptionLabelValue(t,!0);if(!ds[r])throw new b.a("imageresizebuttons-missing-icon",e,t);return c.set({label:d,icon:ds[r],tooltip:d,isToggleable:!0}),c.bind("isEnabled").to(this),c.bind("isOn").to(l,"value",bh(s)),this.listenTo(c,"execute",()=>{e.execute("resizeImage",{width:s})}),c})}_registerImageResizeDropdown(t){let e=this.editor,n=e.t,i=t.find(s=>!s.value),r=s=>{let a=e.commands.get("resizeImage"),c=Zt(s,Rr),l=c.buttonView;return l.set({tooltip:n("Resize image"),commandValue:i.value,icon:ds.medium,isToggleable:!0,label:this._getOptionLabelValue(i),withText:!0,class:"ck-resize-image-button"}),l.bind("label").to(a,"value",d=>d&&d.width?d.width:this._getOptionLabelValue(i)),c.bind("isOn").to(a),c.bind("isEnabled").to(this),no(c,this._getResizeDropdownListItemDefinitions(t,a)),c.listView.ariaLabel=n("Image resize list"),this.listenTo(c,"execute",d=>{e.execute(d.source.commandName,{width:d.source.commandValue}),e.editing.view.focus()}),c};e.ui.componentFactory.add("resizeImage",r),e.ui.componentFactory.add("imageResize",r)}_getOptionLabelValue(t,e){let n=this.editor.t;return t.label?t.label:e?t.value?n("Resize image to %0",t.value+this._resizeUnit):n("Resize image to the original size"):t.value?t.value+this._resizeUnit:n("Original")}_getResizeDropdownListItemDefinitions(t,e){let n=new xt;return t.map(i=>{let r=i.value?i.value+this._resizeUnit:null,s={type:"button",model:new wn({commandName:"resizeImage",commandValue:r,label:this._getOptionLabelValue(i),withText:!0,icon:null})};s.model.bind("isOn").to(e,"value",bh(r)),n.add(s)}),n}}function bh(o){return t=>o===null&&t===o||t&&t.width===o}class a_ extends S{static get requires(){return[gi]}static get pluginName(){return"ImageResizeHandles"}init(){let t=this.editor.commands.get("resizeImage");this.bind("isEnabled").to(t),this._setupResizerCreator()}_setupResizerCreator(){let t=this.editor,e=t.editing.view;e.addObserver(Hu),this.listenTo(e.document,"imageLoaded",(n,i)=>{if(!i.target.matches("figure.image.ck-widget > img, figure.image.ck-widget > a > img"))return;let r=t.editing.view.domConverter.domToView(i.target).findAncestor("figure"),s=this.editor.plugins.get(gi).getResizerByViewElement(r);if(s)return void s.redraw();let a=t.editing.mapper.toModelElement(r);s=t.plugins.get(gi).attachTo({unit:t.config.get("image.resizeUnit"),modelElement:a,viewElement:r,editor:t,getHandleHost:c=>c.querySelector("img"),getResizeHost:c=>c,isCentered(){let c=a.getAttribute("imageStyle");return!c||c=="full"||c=="alignCenter"},onCommit(c){t.execute("resizeImage",{width:c})}}),s.on("updateSize",()=>{r.hasClass("image_resized")||e.change(c=>{c.addClass("image_resized",r)})}),s.bind("isEnabled").to(this)})}}var wh=g(54),c_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(wh.a,c_),wh.a.locals;class l_ extends H{constructor(t,e){super(t),this.defaultStyle=!1,this.styles=e.reduce((n,i)=>(n[i.name]=i,i.isDefault&&(this.defaultStyle=i.name),n),{})}refresh(){let t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Ye(t),t)if(t.hasAttribute("imageStyle")){let e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this.defaultStyle;else this.value=!1}execute(t){let e=t.value,n=this.editor.model,i=n.document.selection.getSelectedElement();n.change(r=>{this.styles[e].isDefault?r.removeAttribute("imageStyle",i):r.setAttribute("imageStyle",e,i)})}}function Ch(o,t){for(let e of t)if(e.name===o)return e}let pi={full:{name:"full",title:"Full size image",icon:Dl,isDefault:!0},side:{name:"side",title:"Side image",icon:Ir,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:yl,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:xl,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:Ir,className:"image-style-align-right"}},Ah={full:Dl,left:yl,right:Ir,center:xl};function _h(o=[]){return o.map(d_)}function d_(o){if(typeof o=="string"){let t=o;pi[t]?o=Object.assign({},pi[t]):(Object(b.b)("image-style-not-found",{name:t}),o={name:t})}else if(pi[o.name]){let t=pi[o.name],e=Object.assign({},o);for(let n in t)Object.prototype.hasOwnProperty.call(o,n)||(e[n]=t[n]);o=e}return typeof o.icon=="string"&&Ah[o.icon]&&(o.icon=Ah[o.icon]),o}class u_ extends S{static get pluginName(){return"ImageStyleEditing"}init(){let t=this.editor,e=t.model.schema,n=t.data,i=t.editing;t.config.define("image.styles",["full","side"]);let r=_h(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});let s=function(a){return(c,l,d)=>{if(!d.consumable.consume(l.item,c.name))return;let u=Ch(l.attributeNewValue,a),h=Ch(l.attributeOldValue,a),m=d.mapper.toViewElement(l.item),p=d.writer;h&&p.removeClass(h.className,m),u&&p.addClass(u.className,m)}}(r);i.downcastDispatcher.on("attribute:imageStyle:image",s),n.downcastDispatcher.on("attribute:imageStyle:image",s),n.upcastDispatcher.on("element:figure",function(a){let c=a.filter(l=>!l.isDefault);return(l,d,u)=>{if(!d.modelRange)return;let h=d.viewItem,m=Pt(d.modelRange.getItems());if(!m||u.schema.checkAttribute(m,"imageStyle"))for(let p of c)u.consumable.consume(h,{classes:p.className})&&u.writer.setAttribute("imageStyle",p.name,m)}}(r),{priority:"low"}),t.commands.add("imageStyle",new l_(t,r))}}var vh=g(55),h_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(vh.a,h_),vh.a.locals;class m_ extends S{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){let t=this.editor.t;return{"Full size image":t("Full size image"),"Side image":t("Side image"),"Left aligned image":t("Left aligned image"),"Centered image":t("Centered image"),"Right aligned image":t("Right aligned image")}}init(){let t=function(e,n){for(let i of e)n[i.title]&&(i.title=n[i.title]);return e}(_h(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(let e of t)this._createButton(e)}_createButton(t){let e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,i=>{let r=e.commands.get("imageStyle"),s=new X(i);return s.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),s.bind("isEnabled").to(r,"isEnabled"),s.bind("isOn").to(r,"value",a=>a===t.name),this.listenTo(s,"execute",()=>{e.execute("imageStyle",{value:t.name}),e.editing.view.focus()}),s})}}class g_ extends S{static get pluginName(){return"IndentEditing"}init(){let t=this.editor;t.commands.add("indent",new Js(t)),t.commands.add("outdent",new Js(t))}}var yh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',xh='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class p_ extends S{static get pluginName(){return"IndentUI"}init(){let t=this.editor,e=t.locale,n=t.t,i=e.uiLanguageDirection=="ltr"?yh:xh,r=e.uiLanguageDirection=="ltr"?xh:yh;this._defineButton("indent",n("Increase indent"),i),this._defineButton("outdent",n("Decrease indent"),r)}_defineButton(t,e,n){let i=this.editor;i.ui.componentFactory.add(t,r=>{let s=i.commands.get(t),a=new X(r);return a.set({label:e,icon:n,tooltip:!0}),a.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(a,"execute",()=>{i.execute(t),i.editing.view.focus()}),a})}}let Mn="italic";class f_ extends S{static get pluginName(){return"ItalicEditing"}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:Mn}),t.model.schema.setAttributeProperties(Mn,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:Mn,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(Mn,new Xd(t,Mn)),t.keystrokes.set("CTRL+I",Mn)}}let us="italic";class k_ extends S{static get pluginName(){return"ItalicUI"}init(){let t=this.editor,e=t.t;t.ui.componentFactory.add(us,n=>{let i=t.commands.get(us),r=new X(n);return r.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(r,"execute",()=>{t.execute(us),t.editing.view.focus()}),r})}}class b_{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(e=>this._definitions.add(e)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(e,n,i)=>{if(!i.consumable.test(n.item,"attribute:linkHref"))return;let r=i.writer,s=r.document.selection;for(let a of this._definitions){let c=r.createAttributeElement("a",a.attributes,{priority:5});r.setCustomProperty("link",!0,c),a.callback(n.attributeNewValue)?n.item.is("selection")?r.wrap(s.getFirstRange(),c):r.wrap(i.mapper.toViewRange(n.range),c):r.unwrap(i.mapper.toViewRange(n.range),c)}},{priority:"high"})}}getDispatcherForLinkedImage(){return t=>{t.on("attribute:linkHref:image",(e,n,i)=>{let r=i.mapper.toViewElement(n.item),s=Array.from(r.getChildren()).find(a=>a.name==="a");for(let a of this._definitions){let c=ke(a.attributes);if(a.callback(n.attributeNewValue))for(let[l,d]of c)l==="class"?i.writer.addClass(d,s):i.writer.setAttribute(l,d,s);else for(let[l,d]of c)l==="class"?i.writer.removeClass(d,s):i.writer.removeAttribute(l,s)}})}}}var w_=function(o,t,e){var n=o.length;return e=e===void 0?n:e,!t&&e>=n?o:Ia(o,t,e)},C_=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Dh=function(o){return C_.test(o)},A_=function(o){return o.split("")},__="[\\ud800-\\udfff]",hs="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ms="\\ud83c[\\udffb-\\udfff]",Eh="[^\\ud800-\\udfff]",Mh="(?:\\ud83c[\\udde6-\\uddff]){2}",Th="[\\ud800-\\udbff][\\udc00-\\udfff]",Sh="(?:"+hs+"|"+ms+")?",Ih="[\\ufe0e\\ufe0f]?",v_=Ih+Sh+("(?:\\u200d(?:"+[Eh,Mh,Th].join("|")+")"+Ih+Sh+")*"),y_="(?:"+[Eh+hs+"?",hs,Mh,Th,__].join("|")+")",x_=RegExp(ms+"(?="+ms+")|"+y_+v_,"g"),D_=function(o){return o.match(x_)||[]},E_=function(o){return Dh(o)?D_(o):A_(o)},M_=function(o){return function(t){t=Wi(t);var e=Dh(t)?E_(t):void 0,n=e?e[0]:t.charAt(0),i=e?w_(e,1).join(""):t.slice(1);return n[o]()+i}}("toUpperCase");let T_=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,S_=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,I_=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,N_=/^((\w+:(\/{2,})?)|(\W))/i,gs="Ctrl+K";function Nh(o,{writer:t}){let e=t.createAttributeElement("a",{href:o},{priority:5});return t.setCustomProperty("link",!0,e),e}function Bh(o){return function(t){return t.replace(T_,"").match(S_)}(o=String(o))?o:"#"}function ps(o,t){return!!o&&o.is("element","image")&&t.checkAttribute("image","linkHref")}function Ph(o,t){let e=(n=o,I_.test(n)?"mailto:":t);var n;let i=!!e&&!N_.test(o);return o&&i?e+o:o}class B_ extends H{constructor(t){super(t),this.manualDecorators=new xt,this.automaticDecorators=new b_}restoreManualDecoratorStates(){for(let t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){let t=this.editor.model,e=t.document,n=Pt(e.selection.getSelectedBlocks());ps(n,t.schema)?(this.value=n.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttribute(n,"linkHref")):(this.value=e.selection.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref"));for(let i of this.manualDecorators)i.value=this._getDecoratorStateFromModel(i.id)}execute(t,e={}){let n=this.editor.model,i=n.document.selection,r=[],s=[];for(let a in e)e[a]?r.push(a):s.push(a);n.change(a=>{if(i.isCollapsed){let c=i.getFirstPosition();if(i.hasAttribute("linkHref")){let l=vn(c,"linkHref",i.getAttribute("linkHref"),n);a.setAttribute("linkHref",t,l),r.forEach(d=>{a.setAttribute(d,!0,l)}),s.forEach(d=>{a.removeAttribute(d,l)}),a.setSelection(a.createPositionAfter(l.end.nodeBefore))}else if(t!==""){let l=ke(i.getAttributes());l.set("linkHref",t),r.forEach(u=>{l.set(u,!0)});let{end:d}=n.insertContent(a.createText(t,l),c);a.setSelection(d)}["linkHref",...r,...s].forEach(l=>{a.removeSelectionAttribute(l)})}else{let c=n.schema.getValidRanges(i.getRanges(),"linkHref"),l=[];for(let u of i.getSelectedBlocks())n.schema.checkAttribute(u,"linkHref")&&l.push(a.createRangeOn(u));let d=l.slice();for(let u of c)this._isRangeToUpdate(u,l)&&d.push(u);for(let u of d)a.setAttribute("linkHref",t,u),r.forEach(h=>{a.setAttribute(h,!0,u)}),s.forEach(h=>{a.removeAttribute(h,u)})}})}_getDecoratorStateFromModel(t){let e=this.editor.model,n=e.document,i=Pt(n.selection.getSelectedBlocks());return ps(i,e.schema)?i.getAttribute(t):n.selection.getAttribute(t)}_isRangeToUpdate(t,e){for(let n of e)if(n.containsRange(t))return!1;return!0}}class P_ extends H{refresh(){let t=this.editor.model,e=t.document,n=Pt(e.selection.getSelectedBlocks());ps(n,t.schema)?this.isEnabled=t.schema.checkAttribute(n,"linkHref"):this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(){let t=this.editor,e=this.editor.model,n=e.document.selection,i=t.commands.get("link");e.change(r=>{let s=n.isCollapsed?[vn(n.getFirstPosition(),"linkHref",n.getAttribute("linkHref"),e)]:e.schema.getValidRanges(n.getRanges(),"linkHref");for(let a of s)if(r.removeAttribute("linkHref",a),i)for(let c of i.manualDecorators)r.removeAttribute(c.id,a)})}}class zh{constructor({id:t,label:e,attributes:n,defaultValue:i}){this.id=t,this.set("value"),this.defaultValue=i,this.label=e,this.attributes=n}}L(zh,rt);var Lh=g(56),z_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Lh.a,z_),Lh.a.locals;let Oh="automatic",L_=/^(https?:)?\/\//;class O_ extends S{static get pluginName(){return"LinkEditing"}static get requires(){return[qd,Hd,Pe]}constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){let t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:Nh}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(n,i)=>Nh(Bh(n),i)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:n=>n.getAttribute("href")}}),t.commands.add("link",new B_(t)),t.commands.add("unlink",new P_(t));let e=function(n,i){let r={"Open in a new tab":n("Open in a new tab"),Downloadable:n("Downloadable")};return i.forEach(s=>(s.label&&r[s.label]&&(s.label=r[s.label]),s)),i}(t.t,function(n){let i=[];if(n)for(let[r,s]of Object.entries(n)){let a=Object.assign({},s,{id:`link${M_(r)}`});i.push(a)}return i}(t.config.get("link.decorators")));this._enableAutomaticDecorators(e.filter(n=>n.mode===Oh)),this._enableManualDecorators(e.filter(n=>n.mode==="manual")),t.plugins.get(qd).registerAttribute("linkHref"),function(n,i,r,s){let a=n.editing.view,c=new Set;a.document.registerPostFixer(l=>{let d=n.model.document.selection,u=!1;if(d.hasAttribute(i)){let h=vn(d.getFirstPosition(),i,d.getAttribute(i),n.model),m=n.editing.mapper.toViewRange(h);for(let p of m.getItems())p.is("element",r)&&!p.hasClass(s)&&(l.addClass(s,p),c.add(p),u=!0)}return u}),n.conversion.for("editingDowncast").add(l=>{function d(){a.change(u=>{for(let h of c.values())u.removeClass(s,h),c.delete(h)})}l.on("insert",d,{priority:"highest"}),l.on("remove",d,{priority:"highest"}),l.on("attribute",d,{priority:"highest"}),l.on("selection",d,{priority:"highest"})})}(t,"linkHref","a","ck-link_selected"),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(t){let e=this.editor,n=e.commands.get("link").automaticDecorators;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:Oh,callback:i=>L_.test(i),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;let e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(i=>{e.model.schema.extend("$text",{allowAttributes:i.id}),n.add(new zh(i)),e.conversion.for("downcast").attributeToElement({model:i.id,view:(r,{writer:s})=>{if(r){let a=n.get(i.id).attributes,c=s.createAttributeElement("a",a,{priority:5});return s.setCustomProperty("link",!0,c),c}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:n.get(i.id).attributes},model:{key:i.id}})})}_enableInsertContentSelectionAttributesFixer(){let t=this.editor,e=t.model,n=e.document.selection,i=t.commands.get("link");this.listenTo(e,"insertContent",()=>{let r=n.anchor.nodeBefore,s=n.anchor.nodeAfter;n.hasAttribute("linkHref")&&r&&r.hasAttribute("linkHref")&&(s&&s.hasAttribute("linkHref")||e.change(a=>{fs(a,i.manualDecorators)}))},{priority:"low"})}_enableClickingAfterLink(){let t=this.editor,e=t.commands.get("link");t.editing.view.addObserver(ti);let n=!1;this.listenTo(t.editing.view.document,"mousedown",()=>{n=!0}),this.listenTo(t.editing.view.document,"selectionChange",()=>{if(!n)return;n=!1;let i=t.model.document.selection;if(!i.isCollapsed||!i.hasAttribute("linkHref"))return;let r=i.getFirstPosition(),s=vn(r,"linkHref",i.getAttribute("linkHref"),t.model);(r.isTouching(s.start)||r.isTouching(s.end))&&t.model.change(a=>{fs(a,e.manualDecorators)})})}_enableTypingOverLink(){let t=this.editor,e=t.editing.view,n,i;this.listenTo(e.document,"delete",()=>{i=!0},{priority:"high"}),this.listenTo(t.model,"deleteContent",()=>{let r=t.model.document.selection;r.isCollapsed||(i?i=!1:Rh(t)&&function(s){let a=s.document.selection,c=a.getFirstPosition(),l=a.getLastPosition(),d=c.nodeAfter;if(!d||!d.is("$text")||!d.hasAttribute("linkHref"))return!1;let u=l.textNode||l.nodeBefore;return d===u?!0:vn(c,"linkHref",d.getAttribute("linkHref"),s).containsRange(s.createRange(c,l),!0)}(t.model)&&(n=r.getAttributes()))},{priority:"high"}),this.listenTo(t.model,"insertContent",(r,[s])=>{i=!1,Rh(t)&&n&&(t.model.change(a=>{for(let[c,l]of n)a.setAttribute(c,l,s)}),n=null)},{priority:"high"})}_handleDeleteContentAfterLink(){let t=this.editor,e=t.model,n=e.document.selection,i=t.editing.view,r=t.commands.get("link"),s=!1,a=!1;this.listenTo(i.document,"delete",(c,l)=>{a=l.domEvent.keyCode===G.backspace},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{s=!1;let c=n.getFirstPosition(),l=n.getAttribute("linkHref");if(!l)return;let d=vn(c,"linkHref",l,e);s=d.containsPosition(c)||d.end.isEqual(c)},{priority:"high"}),this.listenTo(e,"deleteContent",()=>{a&&(a=!1,s||t.model.enqueueChange(c=>{fs(c,r.manualDecorators)}))},{priority:"low"})}}function fs(o,t){o.removeSelectionAttribute("linkHref");for(let e of t)o.removeSelectionAttribute(e.id)}function Rh(o){return o.plugins.get("Input").isInput(o.model.change(t=>t.batch))}var jh=g(57),R_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(jh.a,R_),jh.a.locals;class j_ extends j{constructor(t,e){super(t);let n=t.t;this.focusTracker=new zt,this.keystrokes=new $t,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),Ko,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),Ho,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e.manualDecorators),this._focusables=new Ie,this._focusCycler=new ve({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});let i=["ck","ck-link-form","ck-responsive-form"];e.manualDecorators.length&&i.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:i,tabindex:"-1"},children:this.children}),Br(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),Go({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){let t=this.locale.t,e=new Qo(this.locale,$o);return e.label=t("Link URL"),e}_createButton(t,e,n,i){let r=new X(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),i&&r.delegate("execute").to(this,i),r}_createManualDecoratorSwitches(t){let e=this.createCollection();for(let n of t.manualDecorators){let i=new Lr(this.locale);i.set({name:n.id,label:n.label,withText:!0}),i.bind("isOn").toMany([n,t],"value",(r,s)=>s===void 0&&r===void 0?n.defaultValue:r),i.on("execute",()=>{n.set("value",!i.isOn)}),e.add(i)}return e}_createFormChildren(t){let e=this.createCollection();if(e.add(this.urlInputView),t.length){let n=new j;n.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(i=>({tag:"li",children:[i],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(n)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}var Fh=g(58),F_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Fh.a,F_),Fh.a.locals;class V_ extends j{constructor(t){super(t);let e=t.t;this.focusTracker=new zt,this.keystrokes=new $t,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(e("Edit link"),Db,"edit"),this.set("href"),this._focusables=new Ie,this._focusCycler=new ve({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){let i=new X(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.delegate("execute").to(this,n),i}_createPreviewButton(){let t=new X(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("Open link in new tab")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",i=>i&&Bh(i)),target:"_blank",rel:"noopener noreferrer"}}),t.bind("label").to(this,"href",i=>i||n("This link has no URL")),t.bind("isEnabled").to(this,"href",i=>!!i),t.template.tag="a",t.template.eventListeners={},t}}let ue="link-ui";class U_ extends S{static get requires(){return[Zo]}static get pluginName(){return"LinkUI"}init(){let t=this.editor;t.editing.view.addObserver(Dw),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(Zo),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),t.conversion.for("editingDowncast").markerToHighlight({model:ue,view:{classes:["ck-fake-link-selection"]}}),t.conversion.for("editingDowncast").markerToElement({model:ue,view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){let t=this.editor,e=new V_(t.locale),n=t.commands.get("link"),i=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(i),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(r,s)=>{this._hideUI(),s()}),e.keystrokes.set(gs,(r,s)=>{this._addFormView(),s()}),e}_createFormView(){let t=this.editor,e=t.commands.get("link"),n=t.config.get("link.defaultProtocol"),i=new j_(t.locale,e);return i.urlInputView.fieldView.bind("value").to(e,"value"),i.urlInputView.bind("isReadOnly").to(e,"isEnabled",r=>!r),i.saveButtonView.bind("isEnabled").to(e),this.listenTo(i,"submit",()=>{let{value:r}=i.urlInputView.fieldView.element,s=Ph(r,n);t.execute("link",s,i.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(i,"cancel",()=>{this._closeFormView()}),i.keystrokes.set("Esc",(r,s)=>{this._closeFormView(),s()}),i}_createToolbarLinkButton(){let t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(gs,(i,r)=>{r(),e.isEnabled&&this._showUI(!0)}),t.ui.componentFactory.add("link",i=>{let r=new X(i);return r.isEnabled=!0,r.label=n("Link"),r.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',r.keystroke=gs,r.tooltip=!0,r.isToggleable=!0,r.bind("isEnabled").to(e,"isEnabled"),r.bind("isOn").to(e,"value",s=>!!s),this.listenTo(r,"execute",()=>this._showUI(!0)),r})}_enableUserBalloonInteractions(){let t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(e,n)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),n())},{priority:"high"}),this.editor.keystrokes.set("Esc",(e,n)=>{this._isUIVisible&&(this._hideUI(),n())}),Nr({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;let t=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=t.value||""}_closeFormView(){let t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),t.value!==void 0?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(t=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;let t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){let t=this.editor,e=t.editing.view.document,n=this._getSelectedLinkElement(),i=s(),r=()=>{let a=this._getSelectedLinkElement(),c=s();n&&!a||!n&&c!==i?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=a,i=c};function s(){return e.selection.focus.getAncestors().reverse().find(a=>a.is("element"))}this.listenTo(t.ui,"update",r),this.listenTo(this._balloon,"change:visibleView",r)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){let t=this.editor.editing.view,e=this.editor.model,n=t.document,i=null;if(e.markers.has(ue)){let r=Array.from(this.editor.editing.mapper.markerNameToElements(ue)),s=t.createRange(t.createPositionBefore(r[0]),t.createPositionAfter(r[r.length-1]));i=t.domConverter.viewRangeToDom(s)}else{let r=this._getSelectedLinkElement(),s=n.selection.getFirstRange();i=r?t.domConverter.mapViewToDom(r):t.domConverter.viewRangeToDom(s)}return{target:i}}_getSelectedLinkElement(){let t=this.editor.editing.view,e=t.document.selection;if(e.isCollapsed)return ks(e.getFirstPosition());{let n=e.getFirstRange().getTrimmed(),i=ks(n.start),r=ks(n.end);return i&&i==r&&t.createRangeIn(i).getTrimmed().isEqual(n)?i:null}}_showFakeVisualSelection(){let t=this.editor.model;t.change(e=>{let n=t.document.selection.getFirstRange();if(t.markers.has(ue))e.updateMarker(ue,{range:n});else if(n.start.isAtEnd){let i=n.start.getLastMatchingPosition(({item:r})=>!t.schema.isContent(r),{boundaries:n});e.addMarker(ue,{usingOperation:!1,affectsData:!1,range:e.createRange(i,n.end)})}else e.addMarker(ue,{usingOperation:!1,affectsData:!1,range:n})})}_hideFakeVisualSelection(){let t=this.editor.model;t.markers.has(ue)&&t.change(e=>{e.removeMarker(ue)})}}function ks(o){return o.getAncestors().find(t=>{return(e=t).is("attributeElement")&&!!e.getCustomProperty("link");var e})}let H_=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class K_ extends S{static get pluginName(){return"AutoLink"}init(){let t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){let t=this.editor,e=new Qr(t.model,i=>{if(!function(s){return s.length>4&&s[s.length-1]===" "&&s[s.length-2]!==" "}(i))return;let r=Vh(i.substr(0,i.length-1));return r?{url:r}:void 0}),n=t.plugins.get("Input");e.on("matched:data",(i,r)=>{let{batch:s,range:a,url:c}=r;if(!n.isInput(s))return;let l=a.end.getShiftedBy(-1),d=l.getShiftedBy(-c.length),u=t.model.createRange(d,l);this._applyAutoLink(c,u)}),e.bind("isEnabled").to(this)}_enableEnterHandling(){let t=this.editor,e=t.model,n=t.commands.get("enter");n&&n.on("execute",()=>{let i=e.document.selection.getFirstPosition();if(!i.parent.previousSibling)return;let r=e.createRangeIn(i.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(r)})}_enableShiftEnterHandling(){let t=this.editor,e=t.model,n=t.commands.get("shiftEnter");n&&n.on("execute",()=>{let i=e.document.selection.getFirstPosition(),r=e.createRange(e.createPositionAt(i.parent,0),i.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(r)})}_checkAndApplyAutoLinkOnRange(t){let e=this.editor.model,{text:n,range:i}=Gd(t,e),r=Vh(n);if(r){let s=e.createRange(i.end.getShiftedBy(-r.length),i.end);this._applyAutoLink(r,s)}}_applyAutoLink(t,e){let n=this.editor.model;this.isEnabled&&function(i,r){return r.schema.checkAttributeInSelection(r.createSelection(i),"linkHref")}(e,n)&&n.enqueueChange(i=>{let r=this.editor.config.get("link.defaultProtocol"),s=Ph(t,r);i.setAttribute("linkHref",s,e)})}}function Vh(o){let t=H_.exec(o);return t?t[2]:null}class Uh extends H{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){let e=this.editor.model,n=e.document,i=Array.from(n.selection.getSelectedBlocks()).filter(s=>Kh(s,e.schema)),r=t.forceValue!==void 0?!t.forceValue:this.value;e.change(s=>{if(r){let a=i[i.length-1].nextSibling,c=Number.POSITIVE_INFINITY,l=[];for(;a&&a.name=="listItem"&&a.getAttribute("listIndent")!==0;){let d=a.getAttribute("listIndent");d<c&&(c=d);let u=d-c;l.push({element:a,listIndent:u}),a=a.nextSibling}l=l.reverse();for(let d of l)s.setAttribute("listIndent",d.listIndent,d.element)}if(!r){let a=Number.POSITIVE_INFINITY;for(let c of i)c.is("element","listItem")&&c.getAttribute("listIndent")<a&&(a=c.getAttribute("listIndent"));a=a===0?1:a,Hh(i,!0,a),Hh(i,!1,a)}for(let a of i.reverse())r&&a.name=="listItem"?s.rename(a,"paragraph"):r||a.name=="listItem"?r||a.name!="listItem"||a.getAttribute("listType")==this.type||s.setAttribute("listType",this.type,a):(s.setAttributes({listType:this.type,listIndent:0},a),s.rename(a,"listItem"));this.fire("_executeCleanup",i)})}_getValue(){let t=Pt(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("element","listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;let t=this.editor.model.document.selection,e=this.editor.model.schema,n=Pt(t.getSelectedBlocks());return!!n&&Kh(n,e)}}function Hh(o,t,e){let n=t?o[0]:o[o.length-1];if(n.is("element","listItem")){let i=n[t?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;i&&i.is("element","listItem")&&i.getAttribute("listIndent")>=e;)r>i.getAttribute("listIndent")&&(r=i.getAttribute("listIndent")),i.getAttribute("listIndent")==r&&o[t?"unshift":"push"](i),i=i[t?"previousSibling":"nextSibling"]}}function Kh(o,t){return t.checkChild(o.parent,"listItem")&&!t.isObject(o)}class Gh extends H{constructor(t,e){super(t),this._indentBy=e=="forward"?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){let t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks());t.change(i=>{let r=n[n.length-1],s=r.nextSibling;for(;s&&s.name=="listItem"&&s.getAttribute("listIndent")>r.getAttribute("listIndent");)n.push(s),s=s.nextSibling;this._indentBy<0&&(n=n.reverse());for(let a of n){let c=a.getAttribute("listIndent")+this._indentBy;c<0?i.rename(a,"paragraph"):i.setAttribute("listIndent",c,a)}this.fire("_executeCleanup",n)})}_checkEnabled(){let t=Pt(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("element","listItem"))return!1;if(this._indentBy>0){let e=t.getAttribute("listIndent"),n=t.getAttribute("listType"),i=t.previousSibling;for(;i&&i.is("element","listItem")&&i.getAttribute("listIndent")>=e;){if(i.getAttribute("listIndent")==e)return i.getAttribute("listType")==n;i=i.previousSibling}return!1}return!0}}function G_(o,t){let e=t.mapper,n=t.writer,i=o.getAttribute("listType")=="numbered"?"ol":"ul",r=function(a){let c=a.createContainerElement("li");return c.getFillerOffset=q_,c}(n),s=n.createContainerElement(i,null);return n.insert(n.createPositionAt(s,0),r),e.bindElements(o,r),r}function qh(o,t,e,n){let i=t.parent,r=e.mapper,s=e.writer,a=r.toViewPosition(n.createPositionBefore(o)),c=Yh(o.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:o.getAttribute("listIndent")}),l=o.previousSibling;if(c&&c.getAttribute("listIndent")==o.getAttribute("listIndent")){let d=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(d))}else if(l&&l.name=="listItem"){a=r.toViewPosition(n.createPositionAt(l,"end"));let d=r.findMappedViewAncestor(a),u=function(h){for(let m of h.getChildren())if(m.name=="ul"||m.name=="ol")return m;return null}(d);a=u?s.createPositionBefore(u):s.createPositionAt(d,"end")}else a=r.toViewPosition(n.createPositionBefore(o));if(a=Wh(a),s.insert(a,i),l&&l.name=="listItem"){let d=r.toViewElement(l),u=s.createRange(s.createPositionAt(d,0),a).getWalker({ignoreElementEnd:!0});for(let h of u)if(h.item.is("element","li")){let m=s.breakContainer(s.createPositionBefore(h.item)),p=h.item.parent,k=s.createPositionAt(t,"end");Xt(s,k.nodeBefore,k.nodeAfter),s.move(s.createRangeOn(p),k),u.position=m}}else{let d=i.nextSibling;if(d&&(d.is("element","ul")||d.is("element","ol"))){let u=null;for(let h of d.getChildren()){let m=r.toModelElement(h);if(!(m&&m.getAttribute("listIndent")>o.getAttribute("listIndent")))break;u=h}u&&(s.breakContainer(s.createPositionAfter(u)),s.move(s.createRangeOn(u.parent),s.createPositionAt(t,"end")))}}Xt(s,i,i.nextSibling),Xt(s,i.previousSibling,i)}function Xt(o,t,e){return!t||!e||t.name!="ul"&&t.name!="ol"||t.name!=e.name||t.getAttribute("class")!==e.getAttribute("class")?null:o.mergeContainers(o.createPositionAfter(t))}function Wh(o){return o.getLastMatchingPosition(t=>t.item.is("uiElement"))}function Yh(o,t){let e=!!t.sameIndent,n=!!t.smallerIndent,i=t.listIndent,r=o;for(;r&&r.name=="listItem";){let s=r.getAttribute("listIndent");if(e&&i==s||n&&i>s)return r;r=t.direction==="forward"?r.nextSibling:r.previousSibling}return null}function Qh(o,t,e,n){o.ui.componentFactory.add(t,i=>{let r=o.commands.get(t),s=new X(i);return s.set({label:e,icon:n,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{o.execute(t),o.editing.view.focus()}),s})}function q_(){let o=!this.isEmpty&&(this.getChild(0).name=="ul"||this.getChild(0).name=="ol");return this.isEmpty||o?0:Pa.call(this)}function $h(o){return(t,e,n)=>{let i=n.consumable;if(!i.test(e.item,"insert")||!i.test(e.item,"attribute:listType")||!i.test(e.item,"attribute:listIndent"))return;i.consume(e.item,"insert"),i.consume(e.item,"attribute:listType"),i.consume(e.item,"attribute:listIndent");let r=e.item;qh(r,G_(r,n),n,o)}}function W_(o,t,e){if(!e.consumable.consume(t.item,"attribute:listType"))return;let n=e.mapper.toViewElement(t.item),i=e.writer;i.breakContainer(i.createPositionBefore(n)),i.breakContainer(i.createPositionAfter(n));let r=n.parent,s=t.attributeNewValue=="numbered"?"ol":"ul";i.rename(s,r)}function Y_(o,t,e){let n=e.mapper.toViewElement(t.item).parent,i=e.writer;Xt(i,n,n.nextSibling),Xt(i,n.previousSibling,n);for(let r of t.item.getChildren())e.consumable.consume(r,"insert")}function Jh(o,t,e){if(t.item.name!="listItem"){let n=e.mapper.toViewPosition(t.range.start),i=e.writer,r=[];for(;(n.parent.name=="ul"||n.parent.name=="ol")&&(n=i.breakContainer(n),n.parent.name=="li");){let s=n,a=i.createPositionAt(n.parent,"end");if(!s.isEqual(a)){let c=i.remove(i.createRange(s,a));r.push(c)}n=i.createPositionAfter(n.parent)}if(r.length>0){for(let s=0;s<r.length;s++){let a=n.nodeBefore;if(n=i.insert(n,r[s]).end,s>0){let c=Xt(i,a,a.nextSibling);c&&c.parent==a&&n.offset--}}Xt(i,n.nodeBefore,n.nodeAfter)}}}function Q_(o,t,e){let n=e.mapper.toViewPosition(t.position),i=n.nodeBefore,r=n.nodeAfter;Xt(e.writer,i,r)}function $_(o,t,e){if(e.consumable.consume(t.viewItem,{name:!0})){let n=e.writer,i=n.createElement("listItem"),r=function(c){let l=0,d=c.parent;for(;d;){if(d.is("element","li"))l++;else{let u=d.previousSibling;u&&u.is("element","li")&&l++}d=d.parent}return l}(t.viewItem);n.setAttribute("listIndent",r,i);let s=t.viewItem.parent&&t.viewItem.parent.name=="ol"?"numbered":"bulleted";if(n.setAttribute("listType",s,i),!e.safeInsert(i,t.modelCursor))return;let a=function(c,l,d){let{writer:u,schema:h}=d,m=u.createPositionAfter(c);for(let p of l)if(p.name=="ul"||p.name=="ol")m=d.convertItem(p,m).modelCursor;else{let k=d.convertItem(p,u.createPositionAt(c,"end")),f=k.modelRange.start.nodeAfter;f&&f.is("element")&&!h.checkChild(c,f.name)&&(c=k.modelCursor.parent.is("element","listItem")?k.modelCursor.parent:X_(k.modelCursor),m=u.createPositionAfter(c))}return m}(i,t.viewItem.getChildren(),e);t.modelRange=n.createRange(t.modelCursor,a),e.updateConversionResult(i,t)}}function Zh(o,t,e){if(e.consumable.test(t.viewItem,{name:!0})){let n=Array.from(t.viewItem.getChildren());for(let i of n)!(i.is("element","li")||$e(i))&&i._remove()}}function J_(o,t,e){if(e.consumable.test(t.viewItem,{name:!0})){if(t.viewItem.childCount===0)return;let n=[...t.viewItem.getChildren()],i=!1,r=!0;for(let s of n)i&&!$e(s)&&s._remove(),s.is("$text")?(r&&(s._data=s.data.trimStart()),s.nextSibling&&!$e(s.nextSibling)||(s._data=s.data.trimEnd())):$e(s)&&(i=!0),r=!1}}function Xh(o){return(t,e)=>{if(e.isPhantom)return;let n=e.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){let i=e.mapper.toViewElement(n),r=i.getAncestors().find($e),s=o.createPositionAt(i,0).getWalker();for(let a of s){if(a.type=="elementStart"&&a.item.is("element","li")){e.viewPosition=a.previousPosition;break}if(a.type=="elementEnd"&&a.item==r){e.viewPosition=a.nextPosition;break}}}}}function Z_(o,[t,e]){let n,i=t.is("documentFragment")?t.getChild(0):t;if(n=e?this.createSelection(e):this.document.selection,i&&i.is("element","listItem")){let r=n.getFirstPosition(),s=null;if(r.parent.is("element","listItem")?s=r.parent:r.nodeBefore&&r.nodeBefore.is("element","listItem")&&(s=r.nodeBefore),s){let a=s.getAttribute("listIndent");if(a>0)for(;i&&i.is("element","listItem");)i._setAttribute("listIndent",i.getAttribute("listIndent")+a),i=i.nextSibling}}}function X_(o){let t=new we({startPosition:o}),e;do e=t.next();while(!e.value.item.is("element","listItem"));return e.value.item}function tm(o,t,e,n,i,r){let s=Yh(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:o,foo:"b"}),a=i.mapper,c=i.writer,l=s?s.getAttribute("listIndent"):null,d;if(s)if(l==o){let u=a.toViewElement(s).parent;d=c.createPositionAfter(u)}else{let u=r.createPositionAt(s,"end");d=a.toViewPosition(u)}else d=e;d=Wh(d);for(let u of[...n.getChildren()])$e(u)&&(d=c.move(c.createRangeOn(u),d).end,Xt(c,u,u.nextSibling),Xt(c,u.previousSibling,u))}function $e(o){return o.is("element","ol")||o.is("element","ul")}class tv extends S{static get pluginName(){return"ListEditing"}static get requires(){return[ii,io]}init(){let t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});let e=t.data,n=t.editing;var i;t.model.document.registerPostFixer(a=>function(c,l){let d=c.document.differ.getChanges(),u=new Map,h=!1;for(let f of d)if(f.type=="insert"&&f.name=="listItem")m(f.position);else if(f.type=="insert"&&f.name!="listItem"){if(f.name!="$text"){let C=f.position.nodeAfter;C.hasAttribute("listIndent")&&(l.removeAttribute("listIndent",C),h=!0),C.hasAttribute("listType")&&(l.removeAttribute("listType",C),h=!0),C.hasAttribute("listStyle")&&(l.removeAttribute("listStyle",C),h=!0);for(let x of Array.from(c.createRangeIn(C)).filter(M=>M.item.is("element","listItem")))m(x.previousPosition)}m(f.position.getShiftedBy(f.length))}else f.type=="remove"&&f.name=="listItem"?m(f.position):(f.type=="attribute"&&f.attributeKey=="listIndent"||f.type=="attribute"&&f.attributeKey=="listType")&&m(f.range.start);for(let f of u.values())p(f),k(f);return h;function m(f){let C=f.nodeBefore;if(C&&C.is("element","listItem")){let x=C;if(u.has(x))return;for(let M=x.previousSibling;M&&M.is("element","listItem");M=x.previousSibling)if(x=M,u.has(x))return;u.set(C,x)}else{let x=f.nodeAfter;x&&x.is("element","listItem")&&u.set(x,x)}}function p(f){let C=0,x=null;for(;f&&f.is("element","listItem");){let M=f.getAttribute("listIndent");if(M>C){let N;x===null?(x=M-C,N=C):(x>M&&(x=M),N=M-x),l.setAttribute("listIndent",N,f),h=!0}else x=null,C=f.getAttribute("listIndent")+1;f=f.nextSibling}}function k(f){let C=[],x=null;for(;f&&f.is("element","listItem");){let M=f.getAttribute("listIndent");if(x&&x.getAttribute("listIndent")>M&&(C=C.slice(0,M+1)),M!=0)if(C[M]){let N=C[M];f.getAttribute("listType")!=N&&(l.setAttribute("listType",N,f),h=!0)}else C[M]=f.getAttribute("listType");x=f,f=f.nextSibling}}}(t.model,a)),n.mapper.registerViewToModelLength("li",bs),e.mapper.registerViewToModelLength("li",bs),n.mapper.on("modelToViewPosition",Xh(n.view)),n.mapper.on("viewToModelPosition",(i=t.model,(a,c)=>{let l=c.viewPosition,d=l.parent,u=c.mapper;if(d.name=="ul"||d.name=="ol"){if(l.isAtEnd){let h=u.toModelElement(l.nodeBefore),m=u.getModelLength(l.nodeBefore);c.modelPosition=i.createPositionBefore(h).getShiftedBy(m)}else{let h=u.toModelElement(l.nodeAfter);c.modelPosition=i.createPositionBefore(h)}a.stop()}else if(d.name=="li"&&l.nodeBefore&&(l.nodeBefore.name=="ul"||l.nodeBefore.name=="ol")){let h=u.toModelElement(d),m=1,p=l.nodeBefore;for(;p&&$e(p);)m+=u.getModelLength(p),p=p.previousSibling;c.modelPosition=i.createPositionBefore(h).getShiftedBy(m),a.stop()}})),e.mapper.on("modelToViewPosition",Xh(n.view)),t.conversion.for("editingDowncast").add(a=>{a.on("insert",Jh,{priority:"high"}),a.on("insert:listItem",$h(t.model)),a.on("attribute:listType:listItem",W_,{priority:"high"}),a.on("attribute:listType:listItem",Y_,{priority:"low"}),a.on("attribute:listIndent:listItem",function(c){return(l,d,u)=>{if(!u.consumable.consume(d.item,"attribute:listIndent"))return;let h=u.mapper.toViewElement(d.item),m=u.writer;m.breakContainer(m.createPositionBefore(h)),m.breakContainer(m.createPositionAfter(h));let p=h.parent,k=p.previousSibling,f=m.createRangeOn(p);m.remove(f),k&&k.nextSibling&&Xt(m,k,k.nextSibling),tm(d.attributeOldValue+1,d.range.start,f.start,h,u,c),qh(d.item,h,u,c);for(let C of d.item.getChildren())u.consumable.consume(C,"insert")}}(t.model)),a.on("remove:listItem",function(c){return(l,d,u)=>{let h=u.mapper.toViewPosition(d.position).getLastMatchingPosition(x=>!x.item.is("element","li")).nodeAfter,m=u.writer;m.breakContainer(m.createPositionBefore(h)),m.breakContainer(m.createPositionAfter(h));let p=h.parent,k=p.previousSibling,f=m.createRangeOn(p),C=m.remove(f);k&&k.nextSibling&&Xt(m,k,k.nextSibling),tm(u.mapper.toModelElement(h).getAttribute("listIndent")+1,d.position,f.start,h,u,c);for(let x of m.createRangeIn(C).getItems())u.mapper.unbindViewElement(x);l.stop()}}(t.model)),a.on("remove",Q_,{priority:"low"})}),t.conversion.for("dataDowncast").add(a=>{a.on("insert",Jh,{priority:"high"}),a.on("insert:listItem",$h(t.model))}),t.conversion.for("upcast").add(a=>{a.on("element:ul",Zh,{priority:"high"}),a.on("element:ol",Zh,{priority:"high"}),a.on("element:li",J_,{priority:"high"}),a.on("element:li",$_)}),t.model.on("insertContent",Z_,{priority:"high"}),t.commands.add("numberedList",new Uh(t,"numbered")),t.commands.add("bulletedList",new Uh(t,"bulleted")),t.commands.add("indentList",new Gh(t,"forward")),t.commands.add("outdentList",new Gh(t,"backward"));let r=n.view.document;this.listenTo(r,"enter",(a,c)=>{let l=this.editor.model.document,d=l.selection.getLastPosition().parent;l.selection.isCollapsed&&d.name=="listItem"&&d.isEmpty&&(this.editor.execute("outdentList"),c.preventDefault(),a.stop())},{context:"li"}),this.listenTo(r,"delete",(a,c)=>{if(c.direction!=="backward")return;let l=this.editor.model.document.selection;if(!l.isCollapsed)return;let d=l.getFirstPosition();if(!d.isAtStart)return;let u=d.parent;u.name==="listItem"&&(u.previousSibling&&u.previousSibling.name==="listItem"||(this.editor.execute("outdentList"),c.preventDefault(),a.stop()))},{context:"li"});let s=a=>(c,l)=>{this.editor.commands.get(a).isEnabled&&(this.editor.execute(a),l())};t.keystrokes.set("Tab",s("indentList")),t.keystrokes.set("Shift+Tab",s("outdentList"))}afterInit(){let t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function bs(o){let t=1;for(let e of o.getChildren())if(e.name=="ul"||e.name=="ol")for(let n of e.getChildren())t+=bs(n);return t}class ev extends S{static get pluginName(){return"ListUI"}init(){let t=this.editor.t;Qh(this.editor,"numberedList",t("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),Qh(this.editor,"bulletedList",t("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function em(o,t){return n=>{n.on("attribute:url:media",e)};function e(n,i,r){if(!r.consumable.consume(i.item,n.name))return;let s=i.attributeNewValue,a=r.writer,c=r.mapper.toViewElement(i.item),l=[...c.getChildren()].find(u=>u.getCustomProperty("media-content"));a.remove(l);let d=o.getMediaViewElement(a,s,t);a.insert(a.createPositionAt(c,0),d)}}function nm(o,t,e,n){let i=o.createContainerElement("figure",{class:"media"});return o.insert(o.createPositionAt(i,0),t.getMediaViewElement(o,e,n)),i}function om(o){let t=o.getSelectedElement();return t&&t.is("element","media")?t:null}function im(o,t,e){o.change(n=>{let i=n.createElement("media",{url:t});o.insertContent(i,e),n.setSelection(i,"on")})}class nv extends H{refresh(){let t=this.editor.model,e=t.document.selection,n=t.schema,i=om(e);this.value=i?i.getAttribute("url"):null,this.isEnabled=function(r){let s=r.getSelectedElement();return!!s&&s.name==="media"}(e)||function(r,s){let a=xn(r,s).parent;return a.isEmpty&&!s.schema.isLimit(a)&&(a=a.parent),s.schema.checkChild(a,"media")}(e,t)&&!ui(e,n)}execute(t){let e=this.editor.model,n=e.document.selection,i=om(n);if(i)e.change(r=>{r.setAttribute("url",t,i)});else{let r=xn(n,e);im(e,t,r)}}}class ov{constructor(t,e){let n=e.providers,i=e.extraProviders||[],r=new Set(e.removeProviders),s=n.concat(i).filter(a=>{let c=a.name;return c?!r.has(c):(Object(b.b)("media-embed-no-provider-name",{provider:a}),!1)});this.locale=t,this.providerDefinitions=s}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new rm(this.locale);t=t.trim();for(let e of this.providerDefinitions){let n=e.html,i=gt(e.url);for(let r of i){let s=this._getUrlMatches(t,r);if(s)return new rm(this.locale,t,s,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let i=t.replace(/^https?:\/\//,"");return n=i.match(e),n||(i=i.replace(/^www\./,""),n=i.match(e),n||null)}}class rm{constructor(t,e,n,i){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=i}getViewElement(t,e){let n={},i;if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");let r=this._getPreviewHtml(e);i=t.createRawElement("div",n,function(s){s.innerHTML=r})}else this.url&&(n.url=this.url),i=t.createEmptyElement(e.elementName,n);return t.setCustomProperty("media-content",!0,i),i}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){let t=new jl,e=new Yo;return t.text=this._t("Open media in new tab"),e.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',e.viewBox="0 0 64 42",new Lt({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}var sm=g(59),iv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(sm.a,iv),sm.a.locals;class fi extends S{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{elementName:"oembed",providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new ov(t.locale,t.config.get("mediaEmbed"))}init(){let t=this.editor,e=t.model.schema,n=t.t,i=t.conversion,r=t.config.get("mediaEmbed.previewsInData"),s=t.config.get("mediaEmbed.elementName"),a=this.registry;t.commands.add("mediaEmbed",new nv(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),i.for("dataDowncast").elementToElement({model:"media",view:(c,{writer:l})=>{let d=c.getAttribute("url");return nm(l,a,d,{elementName:s,renderMediaPreview:d&&r})}}),i.for("dataDowncast").add(em(a,{elementName:s,renderMediaPreview:r})),i.for("editingDowncast").elementToElement({model:"media",view:(c,{writer:l})=>{let d=c.getAttribute("url");return function(u,h,m){return h.setCustomProperty("media",!0,u),di(u,h,{label:m})}(nm(l,a,d,{elementName:s,renderForEditingView:!0}),l,n("media widget"))}}),i.for("editingDowncast").add(em(a,{elementName:s,renderForEditingView:!0})),i.for("upcast").elementToElement({view:c=>["oembed",s].includes(c.name)&&c.getAttribute("url")?{name:!0}:null,model:(c,{writer:l})=>{let d=c.getAttribute("url");if(a.hasMedia(d))return l.createElement("media",{url:d})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(c,{writer:l})=>{let d=c.getAttribute("data-oembed-url");if(a.hasMedia(d))return l.createElement("media",{url:d})}})}}let rv=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class sv extends S{static get requires(){return[bu,vu]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){let t=this.editor,e=t.model.document;this.listenTo(t.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{let n=e.selection.getFirstRange(),i=Dt.fromPosition(n.start);i.stickiness="toPrevious";let r=Dt.fromPosition(n.end);r.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(i,r),i.detach(),r.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(lt.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){let n=this.editor,i=n.plugins.get(fi).registry,r=new ce(t,e),s=r.getWalker({ignoreElementEnd:!0}),a="";for(let c of s)c.item.is("$textProxy")&&(a+=c.item.data);if(a=a.trim(),!a.match(rv)||!i.hasMedia(a))return void r.detach();n.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=Dt.fromPosition(t),this._timeoutId=lt.window.setTimeout(()=>{n.model.change(c=>{let l;this._timeoutId=null,c.remove(r),r.detach(),this._positionToInsert.root.rootName!=="$graveyard"&&(l=this._positionToInsert),im(n.model,a,l),this._positionToInsert.detach(),this._positionToInsert=null})},100)):r.detach()}}var am=g(60),av={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(am.a,av),am.a.locals;class cv extends j{constructor(t,e){super(e);let n=e.t;this.focusTracker=new zt,this.keystrokes=new $t,this.set("mediaURLInputValue",""),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),Ko,"ck-button-save"),this.saveButtonView.type="submit",this.saveButtonView.bind("isEnabled").to(this,"mediaURLInputValue",i=>!!i),this.cancelButtonView=this._createButton(n("Cancel"),Ho,"ck-button-cancel","cancel"),this._focusables=new Ie,this._focusCycler=new ve({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form","ck-responsive-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),Br(this)}render(){super.render(),Go({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element);let t=e=>e.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(e,n)=>{n.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(t){this.urlInputView.fieldView.element.value=t.trim()}isValid(){this.resetFormStatus();for(let t of this._validators){let e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){let t=this.locale.t,e=new Qo(this.locale,$o),n=e.fieldView;return this._urlInputViewInfoDefault=t("Paste the media URL in the input."),this._urlInputViewInfoTip=t("Tip: Paste the URL into the content to embed faster."),e.label=t("Media URL"),e.infoText=this._urlInputViewInfoDefault,n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=n.element.value.trim()}),e}_createButton(t,e,n,i){let r=new X(this.locale);return r.set({label:t,icon:e,tooltip:!0}),r.extendTemplate({attributes:{class:n}}),i&&r.delegate("execute").to(this,i),r}}class lv extends S{static get requires(){return[fi]}static get pluginName(){return"MediaEmbedUI"}init(){let t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(fi).registry;t.ui.componentFactory.add("mediaEmbed",i=>{let r=Zt(i),s=new cv(function(a,c){return[l=>{if(!l.url.length)return a("The URL must not be empty.")},l=>{if(!c.hasMedia(l.url))return a("This media URL is not supported.")}]}(t.t,n),t.locale);return this._setUpDropdown(r,s,e,t),this._setUpForm(r,s,e),r})}_setUpDropdown(t,e,n){let i=this.editor,r=i.t,s=t.buttonView;function a(){i.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),s.set({label:r("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>',tooltip:!0}),s.on("open",()=>{e.disableCssTransitions(),e.url=n.value||"",e.urlInputView.fieldView.select(),e.focus(),e.enableCssTransitions()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(i.execute("mediaEmbed",e.url),a())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>a())}_setUpForm(t,e,n){e.delegate("submit","cancel").to(t),e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",i=>!i)}}var cm=g(61),dv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(cm.a,dv),cm.a.locals;function uv(o,t){if(!o.childCount)return;let e=new ei(o.document),n=function(s,a){let c=a.createRangeIn(s),l=new re({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),d=[];for(let u of c)if(u.type==="elementStart"&&l.match(u.item)){let h=mv(u.item);d.push({element:u.item,id:h.id,order:h.order,indent:h.indent})}return d}(o,e);if(!n.length)return;let i=null,r=1;n.forEach((s,a)=>{let c=function(p,k){if(!p)return!0;if(p.id!==k.id)return k.indent-p.indent!=1;let f=k.element.previousSibling;if(!f)return!0;return C=f,!(C.is("element","ol")||C.is("element","ul"));var C}(n[a-1],s),l=c?null:n[a-1],d=(h=s,(u=l)?h.indent-u.indent:h.indent-1);var u,h;if(c&&(i=null,r=1),!i||d!==0){let p=function(k,f){let C=new RegExp(`@list l${k.id}:level${k.indent}\\s*({[^}]*)`,"gi"),x=/mso-level-number-format:([^;]{0,100});/gi,M=C.exec(f),N="decimal",q="ol";if(M&&M[1]){let ut=x.exec(M[1]);if(ut&&ut[1]&&(N=ut[1].trim(),q=N!=="bullet"&&N!=="image"?"ol":"ul"),N==="bullet"){let tt=function(Vt){let Mt=function(Ut){if(Ut.getChild(0).is("$text"))return null;let Tt=Ut.getChild(0).getChild(0);return Tt.is("$text")?Tt:Tt.getChild(0)}(Vt);if(!Mt)return null;let yt=Mt._data;return yt==="o"?"circle":yt==="\xB7"?"disc":yt==="\xA7"?"square":null}(k.element);tt&&(N=tt)}}return{type:q,style:hv(N)}}(s,t);if(i){if(s.indent>r){let k=i.getChild(i.childCount-1),f=k.getChild(k.childCount-1);i=lm(p,f,e),r+=1}else if(s.indent<r){let k=r-s.indent;i=function(f,C){let x=f.getAncestors({parentFirst:!0}),M=null,N=0;for(let q of x)if(q.name!=="ul"&&q.name!=="ol"||N++,N===C){M=q;break}return M}(i,k),r=parseInt(s.indent)}}else i=lm(p,s.element,e);s.indent<=r&&(i.is("element",p.type)||(i=e.rename(p.type,i)))}let m=function(p,k){return function(f,C){let x=new re({name:"span",styles:{"mso-list":"Ignore"}}),M=C.createRangeIn(f);for(let N of M)N.type==="elementStart"&&x.match(N.item)&&C.remove(N.item)}(p,k),k.rename("li",p)}(s.element,e);e.appendChild(m,i)})}function hv(o){switch(o){case"arabic-leading-zero":return"decimal-leading-zero";case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return o;default:return null}}function lm(o,t,e){let n=t.parent,i=e.createElement(o.type),r=n.getChildIndex(t)+1;return e.insertChild(r,i,n),o.style&&e.setStyle("list-style-type",o.style,i),i}function mv(o){let t={},e=o.getStyle("mso-list");if(e){let n=e.match(/(^|\s{1,100})l(\d+)/i),i=e.match(/\s{0,100}lfo(\d+)/i),r=e.match(/\s{0,100}level(\d+)/i);n&&i&&r&&(t.id=n[2],t.order=i[1],t.indent=r[1])}return t}let gv=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class pv{constructor(t){this.document=t}isActive(t){return gv.test(t)}execute(t){let e=new ei(this.document);(function(n,i){for(let r of n.getChildren())if(r.is("element","b")&&r.getStyle("font-weight")==="normal"){let s=n.getChildIndex(r);i.remove(r),i.insertChild(s,r.getChildren(),n)}})(t.content,e),function(n,i){for(let r of i.createRangeIn(n)){let s=r.item;if(s.is("element","li")){let a=s.getChild(0);a&&a.is("element","p")&&i.unwrapElement(a)}}}(t.content,e)}}function dm(o){return o.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>e.length===1?" ":Array(e.length+1).join("\xA0 ").substr(0,e.length))}function fv(o,t){let e=new DOMParser,n=function(c){return dm(dm(c)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g,"\xA0</").replace(/ <o:p><\/o:p>/g,"\xA0<o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(c){let l="</body>",d="</html>",u=c.indexOf(l);if(u<0)return c;let h=c.indexOf(d,u+l.length);return c.substring(0,u+l.length)+(h>=0?c.substring(h):"")}(o=o.replace(/<!--\[if gte vml 1]>/g,""))),i=e.parseFromString(n,"text/html");(function(c){c.querySelectorAll("span[style*=spacerun]").forEach(l=>{let d=l.innerText.length||0;l.innerHTML=Array(d+1).join("\xA0 ").substr(0,d)})})(i);let r=i.body.innerHTML,s=function(c,l){let d=new Kn(l),u=new No(d,{blockFillerMode:"nbsp"}),h=c.createDocumentFragment(),m=c.body.childNodes;for(;m.length>0;)h.appendChild(m[0]);return u.domToView(h)}(i,t),a=function(c){let l=[],d=[],u=Array.from(c.getElementsByTagName("style"));for(let h of u)h.sheet&&h.sheet.cssRules&&h.sheet.cssRules.length&&(l.push(h.sheet),d.push(h.innerHTML));return{styles:l,stylesString:d.join(" ")}}(i);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function kv(o,t){if(!o.childCount)return;let e=new ei;(function(i,r,s){let a=s.createRangeIn(r),c=new re({name:"img"}),l=[];for(let d of a)if(c.match(d.item)){let u=d.item,h=u.getAttribute("v:shapes")?u.getAttribute("v:shapes").split(" "):[];h.length&&h.every(m=>i.indexOf(m)>-1)?l.push(u):u.getAttribute("src")||l.push(u)}for(let d of l)s.remove(d)})(function(i,r){let s=r.createRangeIn(i),a=new re({name:/v:(.+)/}),c=[];for(let l of s){let d=l.item,u=d.previousSibling&&d.previousSibling.name||null;a.match(d)&&d.getAttribute("o:gfxdata")&&u!=="v:shapetype"&&c.push(l.item.getAttribute("id"))}return c}(o,e),o,e),function(i,r){let s=r.createRangeIn(i),a=new re({name:/v:(.+)/}),c=[];for(let l of s)a.match(l.item)&&c.push(l.item);for(let l of c)r.remove(l)}(o,e);let n=function(i,r){let s=r.createRangeIn(i),a=new re({name:"img"}),c=[];for(let l of s)a.match(l.item)&&l.item.getAttribute("src").startsWith("file://")&&c.push(l.item);return c}(o,e);n.length&&function(i,r,s){if(i.length===r.length)for(let a=0;a<i.length;a++){let c=`data:${r[a].type};base64,${bv(r[a].hex)}`;s.setAttribute("src",c,i[a])}}(n,function(i){if(!i)return[];let r=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,s=new RegExp("(?:("+r.source+"))([\\da-fA-F\\s]+)\\}","g"),a=i.match(s),c=[];if(a)for(let l of a){let d=!1;l.includes("\\pngblip")?d="image/png":l.includes("\\jpegblip")&&(d="image/jpeg"),d&&c.push({hex:l.replace(r,"").replace(/[^\da-fA-F]/g,""),type:d})}return c}(t),e)}function bv(o){return btoa(o.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}let wv=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,Cv=/xmlns:o="urn:schemas-microsoft-com/i;class Av{constructor(t){this.document=t}isActive(t){return wv.test(t)||Cv.test(t)}execute(t){let{body:e,stylesString:n}=fv(t.dataTransfer.getData("text/html"),this.document.stylesProcessor);uv(e,n),kv(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function pt(o,t,e,n,i=1){t>i?n.setAttribute(o,t,e):n.removeAttribute(o,e)}function Je(o,t,e={}){let n=o.createElement("tableCell",e);return o.insertElement("paragraph",n),o.insert(n,t),n}function ws(o,t){let e=t.parent.parent,n=parseInt(e.getAttribute("headingColumns")||0),{column:i}=o.getCellLocation(t);return!!n&&i<n}function _v(){return o=>{o.on("element:table",(t,e,n)=>{let i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;let{rows:r,headingRows:s,headingColumns:a}=function(d){let u={headingRows:0,headingColumns:0},h=[],m=[],p;for(let k of Array.from(d.getChildren()))if(k.name==="tbody"||k.name==="thead"||k.name==="tfoot"){k.name!=="thead"||p||(p=k);let f=Array.from(k.getChildren()).filter(C=>C.is("element","tr"));for(let C of f)if(C.parent.name==="thead"&&C.parent===p)u.headingRows++,h.push(C);else{m.push(C);let x=vv(C);x>u.headingColumns&&(u.headingColumns=x)}}return u.rows=[...h,...m],u}(i),c={};a&&(c.headingColumns=a),s&&(c.headingRows=s);let l=n.writer.createElement("table",c);if(n.safeInsert(l,e.modelCursor)){if(n.consumable.consume(i,{name:!0}),r.forEach(d=>n.convertItem(d,n.writer.createPositionAt(l,"end"))),l.isEmpty){let d=n.writer.createElement("tableRow");n.writer.insert(d,n.writer.createPositionAt(l,"end")),Je(n.writer,n.writer.createPositionAt(d,"end"))}n.updateConversionResult(l,e)}})}}function um(o){return t=>{t.on(`element:${o}`,(e,n,i)=>{if(n.modelRange&&n.viewItem.isEmpty){let r=n.modelRange.start.nodeAfter,s=i.writer.createPositionAt(r,0);i.writer.insertElement("paragraph",s)}},{priority:"low"})}}function vv(o){let t=0,e=0,n=Array.from(o.getChildren()).filter(i=>i.name==="th"||i.name==="td");for(;e<n.length&&n[e].name==="th";){let i=n[e];t+=parseInt(i.getAttribute("colspan")||1),e++}return t}class J{constructor(t,e={}){this._table=t,this._startRow=e.row!==void 0?e.row:e.startRow||0,this._endRow=e.row!==void 0?e.row:e.endRow,this._startColumn=e.column!==void 0?e.column:e.startColumn||0,this._endColumn=e.column!==void 0?e.column:e.endColumn,this._includeAllSlots=!!e.includeAllSlots,this._skipRows=new Set,this._row=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){let t=this._table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};if(this._isOverEndColumn())return this._advanceToNextRow();let e=null,n=this._getSpanned();if(n)this._includeAllSlots&&!this._shouldSkipSlot()&&(e=this._formatOutValue(n.cell,n.row,n.column));else{let i=t.getChild(this._cellIndex);if(!i)return this._advanceToNextRow();let r=parseInt(i.getAttribute("colspan")||1),s=parseInt(i.getAttribute("rowspan")||1);(r>1||s>1)&&this._recordSpans(i,s,r),this._shouldSkipSlot()||(e=this._formatOutValue(i)),this._nextCellAtColumn=this._column+r}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,e||this.next()}skipRow(t){this._skipRows.add(t)}_advanceToNextRow(){return this._row++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return this._endRow!==void 0&&this._row>this._endRow}_isOverEndColumn(){return this._endColumn!==void 0&&this._column>this._endColumn}_formatOutValue(t,e=this._row,n=this._column){return{done:!1,value:new yv(this,t,e,n)}}_shouldSkipSlot(){let t=this._skipRows.has(this._row),e=this._row<this._startRow,n=this._column<this._startColumn,i=this._endColumn!==void 0&&this._column>this._endColumn;return t||e||n||i}_getSpanned(){let t=this._spannedCells.get(this._row);return t&&t.get(this._column)||null}_recordSpans(t,e,n){let i={cell:t,row:this._row,column:this._column};for(let r=this._row;r<this._row+e;r++)for(let s=this._column;s<this._column+n;s++)r==this._row&&s==this._column||this._markSpannedCell(r,s,i)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,n)}}class yv{constructor(t,e,n,i){this.cell=e,this.row=t._row,this.column=t._column,this.cellAnchorRow=n,this.cellAnchorColumn=i,this._cellIndex=t._cellIndex,this._table=t._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function hm(o={}){return t=>t.on("insert:table",(e,n,i)=>{let r=n.item;if(!i.consumable.consume(r,"insert"))return;i.consumable.consume(r,"attribute:headingRows:table"),i.consumable.consume(r,"attribute:headingColumns:table");let s=o&&o.asWidget,a=i.writer.createContainerElement("figure",{class:"table"}),c=i.writer.createContainerElement("table"),l;var d,u;i.writer.insert(i.writer.createPositionAt(a,0),c),s&&(d=a,(u=i.writer).setCustomProperty("table",!0,d),l=di(d,u,{hasSelectionHandle:!0}));let h=new J(r),m={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0},p=new Map;for(let f of h){let{row:C,cell:x}=f,M=r.getChild(C),N=p.get(C)||As(c,M,C,m,i);p.set(C,N),i.consumable.consume(x,"insert"),Cs(f,m,i.writer.createPositionAt(N,"end"),i,o)}for(let f of r.getChildren()){let C=f.index;p.has(C)||p.set(C,As(c,f,C,m,i))}let k=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(r,s?l:a),i.writer.insert(k,s?l:a)})}function xv(o,t){let{writer:e}=t;if(o.parent.is("element","tableCell"))return mm(o)?e.createContainerElement("span",{style:"display:inline-block"}):e.createContainerElement("p")}function mm(o){return o.parent.childCount===1&&!km(o)}function Dv(o,t,e){let{cell:n}=o,i=gm(o,t),r=e.mapper.toViewElement(n);r&&r.name!==i&&function(s,a,c){let l=c.writer,d=c.mapper.toViewElement(s),u=is(l.createEditableElement(a,d.getAttributes()),l);os(u,l,(h,m,p)=>p.addClass(gt(m.classes),h),(h,m,p)=>p.removeClass(gt(m.classes),h)),l.insert(l.createPositionAfter(d),u),l.move(l.createRangeIn(d),l.createPositionAt(u,0)),l.remove(l.createRangeOn(d)),c.mapper.unbindViewElement(d),c.mapper.bindElements(s,u)}(n,i,e)}function Cs(o,t,e,n,i){let r=i&&i.asWidget,s=gm(o,t),a=r?is(n.writer.createEditableElement(s),n.writer):n.writer.createContainerElement(s);r&&os(a,n.writer,(u,h,m)=>m.addClass(gt(h.classes),u),(u,h,m)=>m.removeClass(gt(h.classes),u));let c=o.cell,l=c.getChild(0),d=c.childCount===1&&l.name==="paragraph";if(n.writer.insert(e,a),n.mapper.bindElements(c,a),!r&&d&&!km(l)){let u=c.getChild(0);n.consumable.consume(u,"insert"),n.mapper.bindElements(u,a)}}function As(o,t,e,n,i){i.consumable.consume(t,"insert");let r=t.isEmpty?i.writer.createEmptyElement("tr"):i.writer.createContainerElement("tr");i.mapper.bindElements(t,r);let s=n.headingRows,a=function(d,u,h){return pm(d,u)||function(p,k,f){let C=f.writer.createContainerElement(p),x=f.writer.createPositionAt(k,p=="tbody"?"end":0);return f.writer.insert(x,C),C}(d,u,h)}(function(d,u){return d<u.headingRows?"thead":"tbody"}(e,n),o,i),c=s>0&&e>=s?e-s:e,l=i.writer.createPositionAt(a,c);return i.writer.insert(l,r),r}function gm(o,t){let{row:e,column:n}=o,{headingColumns:i,headingRows:r}=t;return r&&r>e||i&&i>n?"th":"td"}function pm(o,t){for(let e of t.getChildren())if(e.name==o)return e}function fm(o,t,e){let n=pm(o,t);n&&n.childCount===0&&e.writer.remove(e.writer.createRangeOn(n))}function km(o){return!![...o.getAttributeKeys()].length}class Ev extends H{refresh(){let t=this.editor.model,e=t.document.selection,n=t.schema;this.isEnabled=function(i,r){let s=i.getFirstPosition().parent,a=s===s.root?s:s.parent;return r.checkChild(a,"table")}(e,n)&&!ui(e,n)}execute(t={}){let e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),r=xn(n,e);e.change(s=>{let a=i.createTable(s,t);e.insertContent(a,r),s.setSelection(s.createPositionAt(a.getNodeByPath([0,0,0]),0))})}}function Tn(o){let t=[];for(let e of bm(o.getRanges())){let n=e.getContainedElement();n&&n.is("element","tableCell")&&t.push(n)}return t}function ao(o){let t=[];for(let e of o.getRanges()){let n=e.start.findAncestor("tableCell");n&&t.push(n)}return t}function Et(o){let t=Tn(o);return t.length?t:ao(o)}function Le(o){return wm(o.map(t=>t.parent.index))}function Sn(o){let t=o[0].findAncestor("table");return wm([...new J(t)].filter(e=>o.includes(e.cell)).map(e=>e.column))}function _s(o,t){if(o.length<2||!function(r){let s=r[0].findAncestor("table"),a=Le(r),c=parseInt(s.getAttribute("headingRows")||0);if(!Cm(a,c))return!1;let l=parseInt(s.getAttribute("headingColumns")||0);return Cm(Sn(r),l)}(o))return!1;let e=new Set,n=new Set,i=0;for(let r of o){let{row:s,column:a}=t.getCellLocation(r),c=parseInt(r.getAttribute("rowspan")||1),l=parseInt(r.getAttribute("colspan")||1);e.add(s),n.add(a),c>1&&e.add(s+c-1),l>1&&n.add(a+l-1),i+=c*l}return function(r,s){let a=Array.from(r.values()),c=Array.from(s.values()),l=Math.max(...a),d=Math.min(...a),u=Math.max(...c),h=Math.min(...c);return(l-d+1)*(u-h+1)}(e,n)==i}function bm(o){return Array.from(o).sort(Mv)}function wm(o){let t=o.sort((e,n)=>e-n);return{first:t[0],last:t[t.length-1]}}function Mv(o,t){let e=o.start,n=t.start;return e.isBefore(n)?-1:1}function Cm({first:o,last:t},e){return o<e==t<e}class Am extends H{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){let t=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!t}execute(){let t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=this.order==="above",r=Et(e),s=Le(r),a=i?s.first:s.last,c=r[0].findAncestor("table");n.insertRows(c,{at:i?a:a+1,copyStructureFromAbove:!i})}}class _m extends H{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){let t=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!t}execute(){let t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i=this.order==="left",r=Et(e),s=Sn(r),a=i?s.first:s.last,c=r[0].findAncestor("table");n.insertColumns(c,{columns:1,at:i?a:a+1})}}class vm extends H{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){let t=Et(this.editor.model.document.selection);this.isEnabled=t.length===1}execute(){let t=Et(this.editor.model.document.selection)[0],e=this.direction==="horizontally",n=this.editor.plugins.get("TableUtils");e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}function ym(o,t,e){let{startRow:n,startColumn:i,endRow:r,endColumn:s}=t,a=e.createElement("table"),c=r-n+1;for(let d=0;d<c;d++)e.insertElement("tableRow",a,"end");let l=[...new J(o,{startRow:n,endRow:r,startColumn:i,endColumn:s,includeAllSlots:!0})];for(let{row:d,column:u,cell:h,isAnchor:m,cellAnchorRow:p,cellAnchorColumn:k}of l){let f=d-n,C=a.getChild(f);if(m){let x=e.cloneElement(h);e.append(x,C),Tm(x,d,u,r,s,e)}else(p<n||k<i)&&Je(e,e.createPositionAt(C,"end"))}return function(d,u,h,m,p){let k=parseInt(u.getAttribute("headingRows")||0);k>0&&pt("headingRows",k-h,d,p,0);let f=parseInt(u.getAttribute("headingColumns")||0);f>0&&pt("headingColumns",f-m,d,p,0)}(a,o,n,i,e),a}function xm(o,t,e=0){let n=[],i=new J(o,{startRow:e,endRow:t-1});for(let r of i){let{row:s,cellHeight:a}=r,c=s+a-1;s<t&&t<=c&&n.push(r)}return n}function Dm(o,t,e){let n=o.parent,i=n.parent,r=n.index,s=t-r,a={},c=parseInt(o.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);let l=parseInt(o.getAttribute("colspan")||1);l>1&&(a.colspan=l);let d=r+s,u=[...new J(i,{startRow:r,endRow:d,includeAllSlots:!0})],h,m=null;for(let p of u){let{row:k,column:f,cell:C}=p;C===o&&h===void 0&&(h=f),h!==void 0&&h===f&&k===d&&(m=Je(e,p.getPositionBefore(),a))}return pt("rowspan",s,o,e),m}function Em(o,t){let e=[],n=new J(o);for(let i of n){let{column:r,cellWidth:s}=i,a=r+s-1;r<t&&t<=a&&e.push(i)}return e}function Mm(o,t,e,n){let i=e-t,r={},s=parseInt(o.getAttribute("colspan"))-i;s>1&&(r.colspan=s);let a=parseInt(o.getAttribute("rowspan")||1);a>1&&(r.rowspan=a);let c=Je(n,n.createPositionAfter(o),r);return pt("colspan",i,o,n),c}function Tm(o,t,e,n,i,r){let s=parseInt(o.getAttribute("colspan")||1),a=parseInt(o.getAttribute("rowspan")||1);e+s-1>i&&pt("colspan",i-e+1,o,r,1),t+a-1>n&&pt("rowspan",n-t+1,o,r,1)}function vs(o,t){let e=t.getColumns(o),n=new Array(e).fill(0);for(let{column:r}of new J(o))n[r]++;let i=n.reduce((r,s,a)=>s?r:[...r,a],[]);if(i.length>0){let r=i[i.length-1];return t.removeColumns(o,{at:r}),!0}return!1}function ys(o,t){let e=[];for(let n=0;n<o.childCount;n++)o.getChild(n).isEmpty&&e.push(n);if(e.length>0){let n=e[e.length-1];return t.removeRows(o,{at:n}),!0}return!1}function xs(o,t){vs(o,t)||ys(o,t)}function Sm(o,t){let e=Array.from(new J(o,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(e.every(({cellHeight:i})=>i===1))return t.lastRow;let n=e[0].cellHeight-1;return t.lastRow+n}function Im(o,t){let e=Array.from(new J(o,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(e.every(({cellWidth:i})=>i===1))return t.lastColumn;let n=e[0].cellWidth-1;return t.lastColumn+n}class ki extends H{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal=this.direction=="right"||this.direction=="left"}refresh(){let t=this._getMergeableCell();this.value=t,this.isEnabled=!!t}execute(){let t=this.editor.model,e=ao(t.document.selection)[0],n=this.value,i=this.direction;t.change(r=>{let s=i=="right"||i=="down",a=s?e:n,c=s?n:e,l=c.parent;(function(p,k,f){Nm(p)||(Nm(k)&&f.remove(f.createRangeIn(k)),f.move(f.createRangeIn(p),f.createPositionAt(k,"end"))),f.remove(p)})(c,a,r);let d=this.isHorizontal?"colspan":"rowspan",u=parseInt(e.getAttribute(d)||1),h=parseInt(n.getAttribute(d)||1);r.setAttribute(d,u+h,a),r.setSelection(r.createRangeIn(a));let m=this.editor.plugins.get("TableUtils");xs(l.findAncestor("table"),m)})}_getMergeableCell(){let t=ao(this.editor.model.document.selection)[0];if(!t)return;let e=this.editor.plugins.get("TableUtils"),n=this.isHorizontal?function(s,a,c){let l=s.parent.parent,d=a=="right"?s.nextSibling:s.previousSibling,u=(l.getAttribute("headingColumns")||0)>0;if(!d)return;let h=a=="right"?s:d,m=a=="right"?d:s,{column:p}=c.getCellLocation(h),{column:k}=c.getCellLocation(m),f=parseInt(h.getAttribute("colspan")||1),C=ws(c,h),x=ws(c,m);if(!(u&&C!=x))return p+f===k?d:void 0}(t,this.direction,e):function(s,a){let c=s.parent,l=c.parent,d=l.getChildIndex(c);if(a=="down"&&d===l.childCount-1||a=="up"&&d===0)return;let u=parseInt(s.getAttribute("rowspan")||1),h=l.getAttribute("headingRows")||0,m=a=="down"&&d+u===h,p=a=="up"&&d===h;if(h&&(m||p))return;let k=parseInt(s.getAttribute("rowspan")||1),f=a=="down"?d+k:d,C=[...new J(l,{endRow:f})],x=C.find(N=>N.cell===s).column,M=C.find(({row:N,cellHeight:q,column:ut})=>ut===x&&(a=="down"?N===f:f===N+q));return M&&M.cell}(t,this.direction);if(!n)return;let i=this.isHorizontal?"rowspan":"colspan",r=parseInt(t.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===r?n:void 0}}function Nm(o){return o.childCount==1&&o.getChild(0).is("element","paragraph")&&o.getChild(0).isEmpty}class Tv extends H{refresh(){let t=Et(this.editor.model.document.selection),e=t[0];if(e){let n=e.findAncestor("table"),i=this.editor.plugins.get("TableUtils").getRows(n)-1,r=Le(t),s=r.first===0&&r.last===i;this.isEnabled=!s}else this.isEnabled=!1}execute(){let t=this.editor.model,e=Et(t.document.selection),n=Le(e),i=e[0],r=i.findAncestor("table"),s=this.editor.plugins.get("TableUtils").getCellLocation(i).column;t.change(a=>{let c=n.last-n.first+1;this.editor.plugins.get("TableUtils").removeRows(r,{at:n.first,rows:c});let l=function(d,u,h){let m=d.getChild(u)||d.getChild(d.childCount-1),p=m.getChild(0),k=0;for(let f of m.getChildren()){if(k>h)return p;p=f,k+=parseInt(f.getAttribute("colspan")||1)}return p}(r,n.first,s);a.setSelection(a.createPositionAt(l,0))})}}class Sv extends H{refresh(){let t=Et(this.editor.model.document.selection),e=t[0];if(e){let n=e.findAncestor("table"),i=this.editor.plugins.get("TableUtils").getColumns(n),{first:r,last:s}=Sn(t);this.isEnabled=s-r<i-1}else this.isEnabled=!1}execute(){let[t,e]=function(a){let c=Et(a),l=c[0],d=c.pop(),u=[l,d];return l.isBefore(d)?u:u.reverse()}(this.editor.model.document.selection),n=t.parent.parent,i=[...new J(n)],r={first:i.find(a=>a.cell===t).column,last:i.find(a=>a.cell===e).column},s=function(a,c,l,d){return parseInt(l.getAttribute("colspan")||1)>1?l:c.previousSibling||l.nextSibling?l.nextSibling||c.previousSibling:d.first?a.reverse().find(({column:u})=>u<d.first).cell:a.reverse().find(({column:u})=>u>d.last).cell}(i,t,e,r);this.editor.model.change(a=>{let c=r.last-r.first+1;this.editor.plugins.get("TableUtils").removeColumns(n,{at:r.first,columns:c}),a.setSelection(a.createPositionAt(s,0))})}}class Iv extends H{refresh(){let t=Et(this.editor.model.document.selection),e=t.length>0;this.isEnabled=e,this.value=e&&t.every(n=>this._isInHeading(n,n.parent.parent))}execute(t={}){if(t.forceValue===this.value)return;let e=this.editor.model,n=Et(e.document.selection),i=n[0].findAncestor("table"),{first:r,last:s}=Le(n),a=this.value?r:s+1,c=i.getAttribute("headingRows")||0;e.change(l=>{if(a){let d=xm(i,a,a>c?c:0);for(let{cell:u}of d)Dm(u,a,l)}pt("headingRows",a,i,l,0)})}_isInHeading(t,e){let n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}class Nv extends H{refresh(){let t=Et(this.editor.model.document.selection),e=this.editor.plugins.get("TableUtils"),n=t.length>0;this.isEnabled=n,this.value=n&&t.every(i=>ws(e,i))}execute(t={}){if(t.forceValue===this.value)return;let e=this.editor.model,n=Et(e.document.selection),i=n[0].findAncestor("table"),{first:r,last:s}=Sn(n),a=this.value?r:s+1;e.change(c=>{if(a){let l=Em(i,a);for(let{cell:d,column:u}of l)Mm(d,u,a,c)}pt("headingColumns",a,i,c,0)})}}class In extends S{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(t){let e=t.parent,n=e.parent,i=n.getChildIndex(e),r=new J(n,{row:i});for(let{cell:s,row:a,column:c}of r)if(s===t)return{row:a,column:c}}createTable(t,e){let n=t.createElement("table");return Ds(t,n,0,parseInt(e.rows)||2,parseInt(e.columns)||2),e.headingRows&&pt("headingRows",e.headingRows,n,t,0),e.headingColumns&&pt("headingColumns",e.headingColumns,n,t,0),n}insertRows(t,e={}){let n=this.editor.model,i=e.at||0,r=e.rows||1,s=e.copyStructureFromAbove!==void 0,a=e.copyStructureFromAbove?i-1:i,c=this.getRows(t),l=this.getColumns(t);n.change(d=>{let u=t.getAttribute("headingRows")||0;if(u>i&&pt("headingRows",u+r,t,d,0),!s&&(i===0||i===c))return void Ds(d,t,i,r,l);let h=s?Math.max(i,a):i,m=new J(t,{endRow:h}),p=new Array(l).fill(1);for(let{row:k,column:f,cellHeight:C,cellWidth:x,cell:M}of m){let N=k+C-1,q=k<=a&&a<=N;k<i&&i<=N?(d.setAttribute("rowspan",C+r,M),p[f]=-x):s&&q&&(p[f]=x)}for(let k=0;k<r;k++){let f=d.createElement("tableRow");d.insert(f,t,i);for(let C=0;C<p.length;C++){let x=p[C],M=d.createPositionAt(f,"end");x>0&&Je(d,M,x>1?{colspan:x}:null),C+=Math.abs(x)-1}}})}insertColumns(t,e={}){let n=this.editor.model,i=e.at||0,r=e.columns||1;n.change(s=>{let a=t.getAttribute("headingColumns");i<a&&s.setAttribute("headingColumns",a+r,t);let c=this.getColumns(t);if(i===0||c===i){for(let d of t.getChildren())Nn(r,s,s.createPositionAt(d,i?"end":0));return}let l=new J(t,{column:i,includeAllSlots:!0});for(let d of l){let{row:u,cell:h,cellAnchorColumn:m,cellAnchorRow:p,cellWidth:k,cellHeight:f}=d;if(m<i){s.setAttribute("colspan",k+r,h);let C=p+f-1;for(let x=u;x<=C;x++)l.skipRow(x)}else Nn(r,s,d.getPositionBefore())}})}removeRows(t,e){let n=this.editor.model,i=e.rows||1,r=e.at,s=r+i-1;n.change(a=>{let{cellsToMove:c,cellsToTrim:l}=function(d,u,h){let m=new Map,p=[];for(let{row:k,column:f,cellHeight:C,cell:x}of new J(d,{endRow:h})){let M=k+C-1;if(k>=u&&k<=h&&M>h){let N=C-(h-k+1);m.set(f,{cell:x,rowspan:N})}if(k<u&&M>=u){let N;N=M>=h?h-u+1:M-u+1,p.push({cell:x,rowspan:C-N})}}return{cellsToMove:m,cellsToTrim:p}}(t,r,s);c.size&&function(d,u,h,m){let p=[...new J(d,{includeAllSlots:!0,row:u})],k=d.getChild(u),f;for(let{column:C,cell:x,isAnchor:M}of p)if(h.has(C)){let{cell:N,rowspan:q}=h.get(C),ut=f?m.createPositionAfter(f):m.createPositionAt(k,0);m.move(m.createRangeOn(N),ut),pt("rowspan",q,N,m),f=N}else M&&(f=x)}(t,s+1,c,a);for(let d=s;d>=r;d--)a.remove(t.getChild(d));for(let{rowspan:d,cell:u}of l)pt("rowspan",d,u,a);(function(d,u,h,m){let p=d.getAttribute("headingRows")||0;u<p&&pt("headingRows",h<p?p-(h-u+1):u,d,m,0)})(t,r,s,a),vs(t,this)||ys(t,this)})}removeColumns(t,e){let n=this.editor.model,i=e.at,r=e.columns||1,s=e.at+r-1;n.change(a=>{(function(c,l,d){let u=c.getAttribute("headingColumns")||0;if(u&&l.first<u){let h=Math.min(u-1,l.last)-l.first+1;d.setAttribute("headingColumns",u-h,c)}})(t,{first:i,last:s},a);for(let c=s;c>=i;c--)for(let{cell:l,column:d,cellWidth:u}of[...new J(t)])d<=c&&u>1&&d+u>c?pt("colspan",u-1,l,a):d===c&&a.remove(l);ys(t,this)||vs(t,this)})}splitCellVertically(t,e=2){let n=this.editor.model,i=t.parent.parent,r=parseInt(t.getAttribute("rowspan")||1),s=parseInt(t.getAttribute("colspan")||1);n.change(a=>{if(s>1){let{newCellsSpan:c,updatedSpan:l}=Bm(s,e);pt("colspan",l,t,a);let d={};c>1&&(d.colspan=c),r>1&&(d.rowspan=r),Nn(s>e?e-1:s-1,a,a.createPositionAfter(t),d)}if(s<e){let c=e-s,l=[...new J(i)],{column:d}=l.find(({cell:p})=>p===t),u=l.filter(({cell:p,cellWidth:k,column:f})=>p!==t&&f===d||f<d&&f+k>d);for(let{cell:p,cellWidth:k}of u)a.setAttribute("colspan",k+c,p);let h={};r>1&&(h.rowspan=r),Nn(c,a,a.createPositionAfter(t),h);let m=i.getAttribute("headingColumns")||0;m>d&&pt("headingColumns",m+c,i,a)}})}splitCellHorizontally(t,e=2){let n=this.editor.model,i=t.parent,r=i.parent,s=r.getChildIndex(i),a=parseInt(t.getAttribute("rowspan")||1),c=parseInt(t.getAttribute("colspan")||1);n.change(l=>{if(a>1){let d=[...new J(r,{startRow:s,endRow:s+a-1,includeAllSlots:!0})],{newCellsSpan:u,updatedSpan:h}=Bm(a,e);pt("rowspan",h,t,l);let{column:m}=d.find(({cell:k})=>k===t),p={};u>1&&(p.rowspan=u),c>1&&(p.colspan=c);for(let k of d){let{column:f,row:C}=k,x=f===m,M=(C+s+h)%u==0;C>=s+h&&x&&M&&Nn(1,l,k.getPositionBefore(),p)}}if(a<e){let d=e-a,u=[...new J(r,{startRow:0,endRow:s})];for(let{cell:p,cellHeight:k,row:f}of u)if(p!==t&&f+k>s){let C=k+d;l.setAttribute("rowspan",C,p)}let h={};c>1&&(h.colspan=c),Ds(l,r,s+1,d,1,h);let m=r.getAttribute("headingRows")||0;m>s&&pt("headingRows",m+d,r,l)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((e,n)=>e+parseInt(n.getAttribute("colspan")||1),0)}getRows(t){return t.childCount}}function Ds(o,t,e,n,i,r={}){for(let s=0;s<n;s++){let a=o.createElement("tableRow");o.insert(a,t,e),Nn(i,o,o.createPositionAt(a,"end"),r)}}function Nn(o,t,e,n={}){for(let i=0;i<o;i++)Je(t,e,n)}function Bm(o,t){if(o<t)return{newCellsSpan:1,updatedSpan:1};let e=Math.floor(o/t);return{newCellsSpan:e,updatedSpan:o-e*t+e}}class Bv extends H{refresh(){let t=Tn(this.editor.model.document.selection);this.isEnabled=_s(t,this.editor.plugins.get(In))}execute(){let t=this.editor.model,e=this.editor.plugins.get(In);t.change(n=>{let i=Tn(t.document.selection),r=i.shift(),{mergeWidth:s,mergeHeight:a}=function(c,l,d){let u=0,h=0;for(let k of l){let{row:f,column:C}=d.getCellLocation(k);u=zm(k,C,u,"colspan"),h=zm(k,f,h,"rowspan")}let{row:m,column:p}=d.getCellLocation(c);return{mergeWidth:u-p,mergeHeight:h-m}}(r,i,e);pt("colspan",s,r,n),pt("rowspan",a,r,n);for(let c of i)Pv(c,r,n);xs(r.findAncestor("table"),e),n.setSelection(r,"in")})}}function Pv(o,t,e){Pm(o)||(Pm(t)&&e.remove(e.createRangeIn(t)),e.move(e.createRangeIn(o),e.createPositionAt(t,"end"))),e.remove(o)}function Pm(o){return o.childCount==1&&o.getChild(0).is("element","paragraph")&&o.getChild(0).isEmpty}function zm(o,t,e,n){let i=parseInt(o.getAttribute(n)||1);return Math.max(e,t+i)}class zv extends H{refresh(){let t=Et(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){let t=this.editor.model,e=Et(t.document.selection),n=Le(e),i=e[0].findAncestor("table"),r=[];for(let s=n.first;s<=n.last;s++)for(let a of i.getChild(s).getChildren())r.push(t.createRangeOn(a));t.change(s=>{s.setSelection(r)})}}class Lv extends H{refresh(){let t=Et(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){let t=this.editor.model,e=Et(t.document.selection),n=e[0],i=e.pop(),r=n.findAncestor("table"),s=this.editor.plugins.get("TableUtils"),a=s.getCellLocation(n),c=s.getCellLocation(i),l=Math.min(a.column,c.column),d=Math.max(a.column,c.column),u=[];for(let h of new J(r,{startColumn:l,endColumn:d}))u.push(t.createRangeOn(h.cell));t.change(h=>{h.setSelection(u)})}}function Ov(o){o.document.registerPostFixer(t=>function(e,n){let i=n.document.differ.getChanges(),r=!1,s=new Set;for(let a of i){let c;a.name=="table"&&a.type=="insert"&&(c=a.position.nodeAfter),a.name!="tableRow"&&a.name!="tableCell"||(c=a.position.findAncestor("table")),Fv(a)&&(c=a.range.start.findAncestor("table")),c&&!s.has(c)&&(r=Rv(c,e)||r,r=jv(c,e)||r,s.add(c))}return r}(t,o))}function Rv(o,t){let e=!1,n=function(i){let r=parseInt(i.getAttribute("headingRows")||0),s=i.childCount,a=[];for(let{row:c,cell:l,cellHeight:d}of new J(i)){if(d<2)continue;let u=c<r?r:s;if(c+d>u){let h=u-c;a.push({cell:l,rowspan:h})}}return a}(o);if(n.length){e=!0;for(let i of n)pt("rowspan",i.rowspan,i.cell,t,1)}return e}function jv(o,t){let e=!1,n=function(s){let a=new Array(s.childCount).fill(0);for(let{row:c}of new J(s,{includeAllSlots:!0}))a[c]++;return a}(o),i=[];for(let[s,a]of n.entries())a||i.push(s);if(i.length){e=!0;for(let s of i.reverse())t.remove(o.getChild(s)),n.splice(s,1)}let r=n[0];if(!n.every(s=>s===r)){let s=n.reduce((a,c)=>c>a?c:a,0);for(let[a,c]of n.entries()){let l=s-c;if(l){for(let d=0;d<l;d++)Je(t,t.createPositionAt(o.getChild(a),"end"));e=!0}}}return e}function Fv(o){let t=o.type==="attribute",e=o.attributeKey;return t&&(e==="headingRows"||e==="colspan"||e==="rowspan")}function Vv(o){o.document.registerPostFixer(t=>function(e,n){let i=n.document.differ.getChanges(),r=!1;for(let s of i)s.type=="insert"&&s.name=="table"&&(r=Uv(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableRow"&&(r=Lm(s.position.nodeAfter,e)||r),s.type=="insert"&&s.name=="tableCell"&&(r=Es(s.position.nodeAfter,e)||r),Hv(s)&&(r=Es(s.position.parent,e)||r);return r}(t,o))}function Uv(o,t){let e=!1;for(let n of o.getChildren())e=Lm(n,t)||e;return e}function Lm(o,t){let e=!1;for(let n of o.getChildren())e=Es(n,t)||e;return e}function Es(o,t){if(o.childCount==0)return t.insertElement("paragraph",o),!0;let e=Array.from(o.getChildren()).filter(n=>n.is("$text"));for(let n of e)t.wrap(t.createRangeOn(n),"paragraph");return!!e.length}function Hv(o){return!(!o.position||!o.position.parent.is("element","tableCell"))&&(o.type=="insert"&&o.name=="$text"||o.type=="remove")}function Kv(o,t){o.document.registerPostFixer(()=>function(e,n){let i=new Set;for(let r of e.getChanges()){let s=r.type=="attribute"?r.range.start.parent:r.position.parent;s.is("element","tableCell")&&i.add(s)}for(let r of i.values())for(let s of[...r.getChildren()].filter(a=>Gv(a,n)))e.refreshItem(s);return!1}(o.document.differ,t))}function Gv(o,t){if(!o.is("element","paragraph"))return!1;let e=t.toViewElement(o);return!!e&&mm(o)!==e.is("element","span")}function qv(o){o.document.registerPostFixer(()=>function(t){let e=t.document.differ,n=new Set;for(let i of e.getChanges()){if(i.type!="attribute")continue;let r=i.range.start.nodeAfter;r&&r.is("element","table")&&i.attributeKey=="headingRows"&&n.add(r)}if(n.size){for(let i of n.values())e.refreshItem(i);return!0}return!1}(o))}var Om=g(62),Wv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Om.a,Wv),Om.a.locals;class Yv extends S{static get pluginName(){return"TableEditing"}init(){let t=this.editor,e=t.model,n=e.schema,i=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isObject:!0,isBlock:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),n.extend("$block",{allowIn:"tableCell"}),i.for("upcast").add(_v()),i.for("editingDowncast").add(hm({asWidget:!0})),i.for("dataDowncast").add(hm()),i.for("upcast").elementToElement({model:"tableRow",view:"tr"}),i.for("upcast").add(r=>{r.on("element:tr",(s,a)=>{a.viewItem.isEmpty&&a.modelCursor.index==0&&s.stop()},{priority:"high"})}),i.for("editingDowncast").add(r=>r.on("insert:tableRow",(s,a,c)=>{let l=a.item;if(!c.consumable.consume(l,"insert"))return;let d=l.parent,u=function(f){for(let C of f.getChildren())if(C.name==="table")return C}(c.mapper.toViewElement(d)),h=d.getChildIndex(l),m=new J(d,{row:h}),p={headingRows:d.getAttribute("headingRows")||0,headingColumns:d.getAttribute("headingColumns")||0},k=new Map;for(let f of m){let C=k.get(h)||As(u,l,h,p,c);k.set(h,C),c.consumable.consume(f.cell,"insert"),Cs(f,p,c.writer.createPositionAt(C,"end"),c,{asWidget:!0})}})),i.for("editingDowncast").add(r=>r.on("remove:tableRow",(s,a,c)=>{s.stop();let l=c.writer,d=c.mapper,u=d.toViewPosition(a.position).getLastMatchingPosition(k=>!k.item.is("element","tr")).nodeAfter,h=u.parent.parent,m=l.createRangeOn(u),p=l.remove(m);for(let k of l.createRangeIn(p).getItems())d.unbindViewElement(k);fm("thead",h,c),fm("tbody",h,c)},{priority:"higher"})),i.for("upcast").elementToElement({model:"tableCell",view:"td"}),i.for("upcast").elementToElement({model:"tableCell",view:"th"}),i.for("upcast").add(um("td")),i.for("upcast").add(um("th")),i.for("editingDowncast").add(r=>r.on("insert:tableCell",(s,a,c)=>{let l=a.item;if(!c.consumable.consume(l,"insert"))return;let d=l.parent,u=d.parent,h=u.getChildIndex(d),m=new J(u,{row:h}),p={headingRows:u.getAttribute("headingRows")||0,headingColumns:u.getAttribute("headingColumns")||0};for(let k of m)if(k.cell===l){let f=c.mapper.toViewElement(d);return void Cs(k,p,c.writer.createPositionAt(f,d.getChildIndex(l)),c,{asWidget:!0})}})),t.conversion.for("editingDowncast").elementToElement({model:"paragraph",view:xv,converterPriority:"high"}),i.attributeToAttribute({model:"colspan",view:"colspan"}),i.attributeToAttribute({model:"rowspan",view:"rowspan"}),i.for("editingDowncast").add(r=>r.on("attribute:headingColumns:table",(s,a,c)=>{let l=a.item;if(!c.consumable.consume(a.item,s.name))return;let d={headingRows:l.getAttribute("headingRows")||0,headingColumns:l.getAttribute("headingColumns")||0},u=a.attributeOldValue,h=a.attributeNewValue,m=(u>h?u:h)-1;for(let p of new J(l,{endColumn:m}))Dv(p,d,c)})),t.commands.add("insertTable",new Ev(t)),t.commands.add("insertTableRowAbove",new Am(t,{order:"above"})),t.commands.add("insertTableRowBelow",new Am(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new _m(t,{order:"left"})),t.commands.add("insertTableColumnRight",new _m(t,{order:"right"})),t.commands.add("removeTableRow",new Tv(t)),t.commands.add("removeTableColumn",new Sv(t)),t.commands.add("splitTableCellVertically",new vm(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new vm(t,{direction:"horizontally"})),t.commands.add("mergeTableCells",new Bv(t)),t.commands.add("mergeTableCellRight",new ki(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new ki(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new ki(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new ki(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new Nv(t)),t.commands.add("setTableRowHeader",new Iv(t)),t.commands.add("selectTableRow",new zv(t)),t.commands.add("selectTableColumn",new Lv(t)),qv(e),Ov(e),Kv(e,t.editing.mapper),Vv(e)}static get requires(){return[In]}}var Rm=g(63),Qv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Rm.a,Qv),Rm.a.locals;class $v extends j{constructor(t){super(t);let e=this.bindTemplate;this.items=this._createGridCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(n,i)=>`${i} \xD7 ${n}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":e.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(n=>{n.preventDefault()}),click:e.to(()=>{this.fire("execute")})}}),this.on("boxover",(n,i)=>{let{row:r,column:s}=i.target.dataset;this.set({rows:parseInt(r),columns:parseInt(s)})}),this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){let t=this.rows,e=this.columns;this.items.map((n,i)=>{let r=Math.floor(i/10)<t&&i%10<e;n.set("isOn",r)})}_createGridCollection(){let t=[];for(let e=0;e<100;e++){let n=Math.floor(e/10),i=e%10;t.push(new Jv(this.locale,n+1,i+1))}return this.createCollection(t)}}class Jv extends j{constructor(t,e,n){super(t);let i=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",i.if("isOn","ck-on")],"data-row":e,"data-column":n}})}}class Zv extends S{static get pluginName(){return"TableUI"}init(){let t=this.editor,e=this.editor.t,n=t.locale.contentLanguageDirection==="ltr";t.ui.componentFactory.add("insertTable",i=>{let r=t.commands.get("insertTable"),s=Zt(i),a;return s.bind("isEnabled").to(r),s.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:e("Insert table"),tooltip:!0}),s.on("change:isOpen",()=>{a||(a=new $v(i),s.panelView.children.add(a),a.delegate("execute").to(s),s.buttonView.on("open",()=>{a.rows=0,a.columns=0}),s.on("execute",()=>{t.execute("insertTable",{rows:a.rows,columns:a.columns}),t.editing.view.focus()}))}),s}),t.ui.componentFactory.add("tableColumn",i=>{let r=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:n?"insertTableColumnLeft":"insertTableColumnRight",label:e("Insert column left")}},{type:"button",model:{commandName:n?"insertTableColumnRight":"insertTableColumnLeft",label:e("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:e("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:e("Select column")}}];return this._prepareDropdown(e("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',r,i)}),t.ui.componentFactory.add("tableRow",i=>{let r=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:e("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:e("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:e("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:e("Select row")}}];return this._prepareDropdown(e("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',r,i)}),t.ui.componentFactory.add("mergeTableCells",i=>{let r=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("Merge cell up")}},{type:"button",model:{commandName:n?"mergeTableCellRight":"mergeTableCellLeft",label:e("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("Merge cell down")}},{type:"button",model:{commandName:n?"mergeTableCellLeft":"mergeTableCellRight",label:e("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(e("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',r,i)})}_prepareDropdown(t,e,n,i){let r=this.editor,s=Zt(i),a=this._fillDropdownWithListOptions(s,n);return s.buttonView.set({label:t,icon:e,tooltip:!0}),s.bind("isEnabled").toMany(a,"isEnabled",(...c)=>c.some(l=>l)),this.listenTo(s,"execute",c=>{r.execute(c.source.commandName),r.editing.view.focus()}),s}_prepareMergeSplitButtonDropdown(t,e,n,i){let r=this.editor,s=Zt(i,Wl);return this._fillDropdownWithListOptions(s,n),s.buttonView.set({label:t,icon:e,tooltip:!0,isEnabled:!0}),this.listenTo(s.buttonView,"execute",()=>{r.execute("mergeTableCells"),r.editing.view.focus()}),this.listenTo(s,"execute",a=>{r.execute(a.source.commandName),r.editing.view.focus()}),s}_fillDropdownWithListOptions(t,e){let n=this.editor,i=[],r=new xt;for(let s of e)Xv(s,n,i,r);return no(t,r,n.ui.componentFactory),i}}function Xv(o,t,e,n){let i=o.model=new wn(o.model),{commandName:r,bindIsOn:s}=o.model;if(o.type==="button"||o.type==="switchbutton"){let a=t.commands.get(r);e.push(a),i.set({commandName:r}),i.bind("isEnabled").to(a),s&&i.bind("isOn").to(a,"value")}i.set({withText:!0}),n.add(o)}var jm=g(64),t0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(jm.a,t0),jm.a.locals;class Ze extends S{static get pluginName(){return"TableSelection"}static get requires(){return[In]}init(){let t=this.editor.model;this.listenTo(t,"deleteContent",(e,n)=>this._handleDeleteContent(e,n),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){let t=Tn(this.editor.model.document.selection);return t.length==0?null:t}getSelectionAsFragment(){let t=this.getSelectedTableCells();return t?this.editor.model.change(e=>{let n=e.createDocumentFragment(),i=this.editor.plugins.get("TableUtils"),{first:r,last:s}=Sn(t),{first:a,last:c}=Le(t),l=t[0].findAncestor("table"),d=c,u=s;if(_s(t,i)){let m={firstColumn:r,lastColumn:s,firstRow:a,lastRow:c};d=Sm(l,m),u=Im(l,m)}let h=ym(l,{startRow:a,startColumn:r,endRow:d,endColumn:u},e);return e.insert(h,n,0),n}):null}setCellSelection(t,e){let n=this._getCellsToSelect(t,e);this.editor.model.change(i=>{i.setSelection(n.cells.map(r=>i.createRangeOn(r)),{backward:n.backward})})}getFocusCell(){let t=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return t&&t.is("element","tableCell")?t:null}getAnchorCell(){let t=Pt(this.editor.model.document.selection.getRanges()).getContainedElement();return t&&t.is("element","tableCell")?t:null}_defineSelectionConverter(){let t=this.editor,e=new Set;t.conversion.for("editingDowncast").add(n=>n.on("selection",(i,r,s)=>{let a=s.writer;(function(d){for(let u of e)d.removeClass("ck-editor__editable_selected",u);e.clear()})(a);let c=this.getSelectedTableCells();if(!c)return;for(let d of c){let u=s.mapper.toViewElement(d);a.addClass("ck-editor__editable_selected",u),e.add(u)}let l=s.mapper.toViewElement(c[c.length-1]);a.setSelection(l,0)},{priority:"lowest"}))}_enablePluginDisabling(){let t=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){let e=this.getSelectedTableCells();if(!e)return;t.model.change(n=>{let i=n.createPositionAt(e[0],0),r=t.model.schema.getNearestSelectionRange(i);n.setSelection(r)})}})}_handleDeleteContent(t,e){let[n,i]=e,r=this.editor.model,s=!i||i.direction=="backward",a=Tn(n);a.length&&(t.stop(),r.change(c=>{let l=a[s?a.length-1:0];r.change(u=>{for(let h of a)r.deleteContent(u.createSelection(h,"in"))});let d=r.schema.getNearestSelectionRange(c.createPositionAt(l,0));n.is("documentSelection")?c.setSelection(d):n.setTo(d)}))}_getCellsToSelect(t,e){let n=this.editor.plugins.get("TableUtils"),i=n.getCellLocation(t),r=n.getCellLocation(e),s=Math.min(i.row,r.row),a=Math.max(i.row,r.row),c=Math.min(i.column,r.column),l=Math.max(i.column,r.column),d=new Array(a-s+1).fill(null).map(()=>[]),u={startRow:s,endRow:a,startColumn:c,endColumn:l};for(let{row:p,cell:k}of new J(t.findAncestor("table"),u))d[p-s].push(k);let h=r.row<i.row,m=r.column<i.column;return h&&d.reverse(),m&&d.forEach(p=>p.reverse()),{cells:d.flat(),backward:h||m}}}class e0 extends S{static get pluginName(){return"TableClipboard"}static get requires(){return[Ze,In]}init(){let t=this.editor,e=t.editing.view.document;this.listenTo(e,"copy",(n,i)=>this._onCopyCut(n,i)),this.listenTo(e,"cut",(n,i)=>this._onCopyCut(n,i)),this.listenTo(t.model,"insertContent",(n,i)=>this._onInsertContent(n,...i),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(t,e){let n=this.editor.plugins.get(Ze);if(!n.getSelectedTableCells()||t.name=="cut"&&this.editor.isReadOnly)return;e.preventDefault(),t.stop();let i=this.editor.data,r=this.editor.editing.view.document,s=i.toView(n.getSelectionAsFragment());r.fire("clipboardOutput",{dataTransfer:e.dataTransfer,content:s,method:t.name})}_onInsertContent(t,e,n){if(n&&!n.is("documentSelection"))return;let i=this.editor.model,r=this.editor.plugins.get(In),s=function(c,l){if(!c.is("documentFragment")&&!c.is("element"))return null;if(c.is("element","table"))return c;if(c.childCount==1&&c.getChild(0).is("element","table"))return c.getChild(0);let d=l.createRangeIn(c);for(let u of d.getItems())if(u.is("element","table")){let h=l.createRange(d.start,l.createPositionBefore(u));if(l.hasContent(h,{ignoreWhitespaces:!0}))return null;let m=l.createRange(l.createPositionAfter(u),d.end);return l.hasContent(m,{ignoreWhitespaces:!0})?null:u}return null}(e,i);if(!s)return;let a=Et(i.document.selection);a.length?(t.stop(),i.change(c=>{let l={width:r.getColumns(s),height:r.getRows(s)},d=function(f,C,x,M){let N=f[0].findAncestor("table"),q=Sn(f),ut=Le(f),tt={firstColumn:q.first,lastColumn:q.last,firstRow:ut.first,lastRow:ut.last},Vt=f.length===1;return Vt&&(tt.lastRow+=C.height-1,tt.lastColumn+=C.width-1,function(Mt,yt,Ut,Tt){let oe=Tt.getColumns(Mt),xe=Tt.getRows(Mt);Ut>oe&&Tt.insertColumns(Mt,{at:oe,columns:Ut-oe}),yt>xe&&Tt.insertRows(Mt,{at:xe,rows:yt-xe})}(N,tt.lastRow+1,tt.lastColumn+1,M)),Vt||!_s(f,M)?function(Mt,yt,Ut){let{firstRow:Tt,lastRow:oe,firstColumn:xe,lastColumn:co}=yt,lo={first:Tt,last:oe},Gm={first:xe,last:co};Ts(Mt,xe,lo,Ut),Ts(Mt,co+1,lo,Ut),Ms(Mt,Tt,Gm,Ut),Ms(Mt,oe+1,Gm,Ut,Tt)}(N,tt,x):(tt.lastRow=Sm(N,tt),tt.lastColumn=Im(N,tt)),tt}(a,l,c,r),u=d.lastRow-d.firstRow+1,h=d.lastColumn-d.firstColumn+1,m={startRow:0,startColumn:0,endRow:Math.min(u,l.height)-1,endColumn:Math.min(h,l.width)-1};s=ym(s,m,c);let p=a[0].findAncestor("table"),k=this._replaceSelectedCellsWithPasted(s,l,p,d,c);if(this.editor.plugins.get("TableSelection").isEnabled){let f=bm(k.map(C=>c.createRangeOn(C)));c.setSelection(f)}else c.setSelection(k[0],0)})):xs(s,r)}_replaceSelectedCellsWithPasted(t,e,n,i,r){let{width:s,height:a}=e,c=function(f,C,x){let M=new Array(x).fill(null).map(()=>new Array(C).fill(null));for(let{column:N,row:q,cell:ut}of new J(f))M[q][N]=ut;return M}(t,s,a),l=[...new J(n,{startRow:i.firstRow,endRow:i.lastRow,startColumn:i.firstColumn,endColumn:i.lastColumn,includeAllSlots:!0})],d=[],u;for(let f of l){let{row:C,column:x}=f;x===i.firstColumn&&(u=f.getPositionBefore());let M=C-i.firstRow,N=x-i.firstColumn,q=c[M%a][N%s],ut=q?r.cloneElement(q):null,tt=this._replaceTableSlotCell(f,ut,u,r);tt&&(Tm(tt,C,x,i.lastRow,i.lastColumn,r),d.push(tt),u=r.createPositionAfter(tt))}let h=parseInt(n.getAttribute("headingRows")||0),m=parseInt(n.getAttribute("headingColumns")||0),p=i.firstRow<h&&h<=i.lastRow,k=i.firstColumn<m&&m<=i.lastColumn;if(p){let f=Ms(n,h,{first:i.firstColumn,last:i.lastColumn},r,i.firstRow);d.push(...f)}if(k){let f=Ts(n,m,{first:i.firstRow,last:i.lastRow},r);d.push(...f)}return d}_replaceTableSlotCell(t,e,n,i){let{cell:r,isAnchor:s}=t;return s&&i.remove(r),e?(i.insert(e,n),e):null}}function Ms(o,t,e,n,i=0){if(!(t<1))return xm(o,t,i).filter(({column:r,cellWidth:s})=>Fm(r,s,e)).map(({cell:r})=>Dm(r,t,n))}function Ts(o,t,e,n){if(!(t<1))return Em(o,t).filter(({row:i,cellHeight:r})=>Fm(i,r,e)).map(({cell:i,column:r})=>Mm(i,r,t,n))}function Fm(o,t,e){let n=o+t-1,{first:i,last:r}=e;return o>=i&&o<=r||o<i&&n>=i}class n0 extends S{static get pluginName(){return"TableKeyboard"}static get requires(){return[Ze]}init(){let t=this.editor.editing.view.document;this.editor.keystrokes.set("Tab",(...e)=>this._handleTabOnSelectedTable(...e),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"}),this.listenTo(t,"arrowKey",(...e)=>this._onArrowKey(...e),{context:"table"})}_handleTabOnSelectedTable(t,e){let n=this.editor,i=n.model.document.selection.getSelectedElement();i&&i.is("element","table")&&(e(),n.model.change(r=>{r.setSelection(r.createRangeIn(i.getChild(0).getChild(0)))}))}_getTabHandler(t){let e=this.editor;return(n,i)=>{let r=ao(e.model.document.selection)[0];if(r||(r=this.editor.plugins.get("TableSelection").getFocusCell()),!r)return;i();let s=r.parent,a=s.parent,c=a.getChildIndex(s),l=s.getChildIndex(r),d=l===0;if(!t&&d&&c===0)return void e.model.change(p=>{p.setSelection(p.createRangeOn(a))});let u=l===s.childCount-1,h=c===a.childCount-1;if(t&&h&&u&&(e.execute("insertTableRowBelow"),c===a.childCount-1))return void e.model.change(p=>{p.setSelection(p.createRangeOn(a))});let m;if(t&&u)m=a.getChild(c+1).getChild(0);else if(!t&&d){let p=a.getChild(c-1);m=p.getChild(p.childCount-1)}else m=s.getChild(l+(t?1:-1));e.model.change(p=>{p.setSelection(p.createRangeIn(m))})}}_onArrowKey(t,e){let n=this.editor,i=ja(e.keyCode,n.locale.contentLanguageDirection);this._handleArrowKeys(i,e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),t.stop())}_handleArrowKeys(t,e){let n=this.editor.model.document.selection,i=["right","down"].includes(t),r=Tn(n);if(r.length){let a;return a=e?this.editor.plugins.get("TableSelection").getFocusCell():i?r[r.length-1]:r[0],this._navigateFromCellInDirection(a,t,e),!0}let s=n.focus.findAncestor("tableCell");return!!s&&!(e&&!n.isCollapsed&&n.isBackward==i)&&!!this._isSelectionAtCellEdge(n,s,i)&&(this._navigateFromCellInDirection(s,t,e),!0)}_isSelectionAtCellEdge(t,e,n){let i=this.editor.model,r=this.editor.model.schema,s=n?t.getLastPosition():t.getFirstPosition();if(!r.getLimitElement(s).is("element","tableCell"))return i.createPositionAt(e,n?"end":0).isTouching(s);let a=i.createSelection(s);return i.modifySelection(a,{direction:n?"forward":"backward"}),s.isEqual(a.focus)}_navigateFromCellInDirection(t,e,n=!1){let i=this.editor.model,r=t.findAncestor("table"),s=[...new J(r,{includeAllSlots:!0})],{row:a,column:c}=s[s.length-1],l=s.find(({cell:k})=>k==t),{row:d,column:u}=l;switch(e){case"left":u--;break;case"up":d--;break;case"right":u+=l.cellWidth;break;case"down":d+=l.cellHeight}if(d<0||d>a||u<0&&d<=0||u>c&&d>=a)return void i.change(k=>{k.setSelection(k.createRangeOn(r))});u<0?(u=n?0:c,d--):u>c&&(u=n?c:0,d++);let h=s.find(k=>k.row==d&&k.column==u).cell,m=["right","down"].includes(e),p=this.editor.plugins.get("TableSelection");if(n&&p.isEnabled){let k=p.getAnchorCell()||t;p.setCellSelection(k,h)}else{let k=i.createPositionAt(h,m?0:"end");i.change(f=>{f.setSelection(k)})}}}class o0 extends Se{constructor(t){super(t),this.domEventType=["mousemove","mouseleave"]}onDomEvent(t){this.fire(t.type,t)}}class i0 extends S{static get pluginName(){return"TableMouse"}static get requires(){return[Ze]}init(){this.editor.editing.view.addObserver(o0),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){let t=this.editor,e=!1,n=t.plugins.get(Ze);this.listenTo(t.editing.view.document,"mousedown",(i,r)=>{if(!this.isEnabled||!n.isEnabled||!r.domEvent.shiftKey)return;let s=n.getAnchorCell()||ao(t.model.document.selection)[0];if(!s)return;let a=this._getModelTableCellFromDomEvent(r);a&&Vm(s,a)&&(e=!0,n.setCellSelection(s,a),r.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{e=!1}),this.listenTo(t.editing.view.document,"selectionChange",i=>{e&&i.stop()},{priority:"highest"})}_enableMouseDragSelection(){let t=this.editor,e,n,i=!1,r=!1,s=t.plugins.get(Ze);this.listenTo(t.editing.view.document,"mousedown",(a,c)=>{this.isEnabled&&s.isEnabled&&(c.domEvent.shiftKey||c.domEvent.ctrlKey||c.domEvent.altKey||(e=this._getModelTableCellFromDomEvent(c)))}),this.listenTo(t.editing.view.document,"mousemove",(a,c)=>{if(!c.domEvent.buttons||!e)return;let l=this._getModelTableCellFromDomEvent(c);l&&Vm(e,l)&&(n=l,i||n==e||(i=!0)),i&&(r=!0,s.setCellSelection(e,n),c.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{i=!1,r=!1,e=null,n=null}),this.listenTo(t.editing.view.document,"selectionChange",a=>{r&&a.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(t){let e=t.target,n=this.editor.editing.view.createPositionAt(e,0);return this.editor.editing.mapper.toModelPosition(n).parent.findAncestor("tableCell",{includeSelf:!0})}}function Vm(o,t){return o.parent.parent==t.parent.parent}var Um=g(65),r0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};z()(Um.a,r0),Um.a.locals;function s0(o){let t=o.getSelectedElement();return t&&Hm(t)?t:null}function a0(o){let t=function(e,n){let i=n.parent;for(;i;){if(i.name===e)return i;i=i.parent}}("table",o.getFirstPosition());return t&&Hm(t.parent)?t.parent:null}function Hm(o){return!!o.getCustomProperty("table")&&kt(o)}class Km extends ni{}Km.builtinPlugins=[class extends S{static get requires(){return[Jw,Zw]}static get pluginName(){return"Alignment"}},class extends S{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){let o=this.editor.commands;o.get("bulletedList")&&Ne(this.editor,this,/^[*-]\s$/,"bulletedList"),o.get("numberedList")&&Ne(this.editor,this,/^1[.|)]\s$/,"numberedList"),o.get("todoList")&&Ne(this.editor,this,/^\[\s?\]\s$/,"todoList"),o.get("checkTodoList")&&Ne(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){let o=this.editor.commands;if(o.get("bold")){let t=oi(this.editor,"bold");An(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,t),An(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,t)}if(o.get("italic")){let t=oi(this.editor,"italic");An(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,t),An(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,t)}if(o.get("code")){let t=oi(this.editor,"code");An(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(o.get("strikethrough")){let t=oi(this.editor,"strikethrough");An(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){let o=this.editor.commands.get("heading");o&&o.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{let e=t[7],n=new RegExp(`^(#{${e}})\\s$`);Ne(this.editor,this,n,()=>{if(!o.isEnabled||o.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&Ne(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){this.editor.commands.get("codeBlock")&&Ne(this.editor,this,/^```$/,"codeBlock")}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&Ne(this.editor,this,/^---$/,"horizontalLine")}},class extends S{static get requires(){return[Be]}static get pluginName(){return"Base64UploadAdapter"}init(){this.editor.plugins.get(Be).createUploadAdapter=o=>new Xw(o)}},class extends S{static get requires(){return[fC,bC]}static get pluginName(){return"BlockQuote"}},class extends S{static get requires(){return[wC,CC]}static get pluginName(){return"Bold"}},class extends Un{static get pluginName(){return"CloudServices"}static get requires(){return[vC]}init(){let o=this.context.config.get("cloudServices")||{};for(let t in o)this[t]=o[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(o){if(this._tokens.has(o))return Promise.resolve(this.getTokenFor(o));let t=this.context.plugins.get("CloudServicesCore").createToken(o);return this._tokens.set(o,t),t.init()}getTokenFor(o){let t=this._tokens.get(o);if(!t)throw new b.a("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(let o of this._tokens.values())o.destroy()}},class extends S{static get requires(){return[bu,ii,GC,nC,aC,vu]}static get pluginName(){return"Essentials"}},class extends S{static get requires(){return[eA,nA]}static get pluginName(){return"FontBackgroundColor"}},class extends S{static get requires(){return[iA,rA]}static get pluginName(){return"FontColor"}},class extends S{static get requires(){return[lA,dA]}static get pluginName(){return"FontFamily"}},class extends S{static get requires(){return[hA,gA]}static get pluginName(){return"FontSize"}},class extends S{static get requires(){return[bA,CA]}static get pluginName(){return"Heading"}},class extends S{static get requires(){return[DA,EA,ro]}static get pluginName(){return"HorizontalLine"}},class extends S{static get requires(){return[TA,ro,LA]}static get pluginName(){return"Image"}isImageWidget(o){return Ku(o)}},class extends S{static get requires(){return[jA]}static get pluginName(){return"ImageCaption"}},class extends S{static get requires(){return[kh,a_,s_]}static get pluginName(){return"ImageResize"}},class extends S{static get requires(){return[u_,m_]}static get pluginName(){return"ImageStyle"}},class extends S{static get requires(){return[mi]}static get pluginName(){return"ImageToolbar"}afterInit(){let o=this.editor,t=o.t;o.plugins.get(mi).register("image",{ariaLabel:t("Image toolbar"),items:o.config.get("image.toolbar")||[],getRelatedElement:cs})}},gh,class extends S{static get pluginName(){return"ImageInsert"}static get requires(){return[gh,i_]}},class extends S{static get pluginName(){return"Indent"}static get requires(){return[g_,p_]}},class extends S{static get requires(){return[f_,k_]}static get pluginName(){return"Italic"}},class extends S{static get requires(){return[O_,U_,K_]}static get pluginName(){return"Link"}},class extends S{static get requires(){return[tv,ev]}static get pluginName(){return"List"}},class extends S{static get requires(){return[fi,lv,sv,ro]}static get pluginName(){return"MediaEmbed"}},so,class extends S{static get pluginName(){return"PasteFromOffice"}static get requires(){return[Pe]}init(){let o=this.editor,t=o.editing.view.document,e=[];e.push(new Av(t)),e.push(new pv(t)),o.plugins.get("ClipboardPipeline").on("inputTransformation",(n,i)=>{if(i.isTransformedWithPasteFromOffice)return;let r=i.dataTransfer.getData("text/html"),s=e.find(a=>a.isActive(r));s&&(s.execute(i),i.isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends S{static get requires(){return[Yv,Zv,Ze,i0,n0,e0,ro]}static get pluginName(){return"Table"}},class extends S{static get requires(){return[mi]}static get pluginName(){return"TableToolbar"}afterInit(){let o=this.editor,t=o.t,e=o.plugins.get(mi),n=o.config.get("table.contentToolbar"),i=o.config.get("table.tableToolbar");n&&e.register("tableContent",{ariaLabel:t("Table toolbar"),items:n,getRelatedElement:a0}),i&&e.register("table",{ariaLabel:t("Table toolbar"),items:i,getRelatedElement:s0})}},class extends S{static get pluginName(){return"TextTransformation"}constructor(o){super(o),o.config.define("typing",{transformations:{include:uC}})}init(){let o=this.editor.model.document.selection;o.on("change:range",()=>{this.isEnabled=!o.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){let o=this.editor,t=o.model,e=o.plugins.get("Input"),n=function(r){let s=r.extra||[],a=r.remove||[],c=l=>!a.includes(l);return function(l){let d=new Set;for(let u of l)if(Yd[u])for(let h of Yd[u])d.add(h);else d.add(u);return Array.from(d)}(r.include.concat(s).filter(c)).filter(c).map(l=>dC[l]||l).map(l=>({from:hC(l.from),to:mC(l.to)}))}(o.config.get("typing.transformations")),i=new Qr(o.model,r=>{for(let s of n)if(s.from.test(r))return{normalizedTransformation:s}});i.on("matched:data",(r,s)=>{if(!e.isInput(s.batch))return;let{from:a,to:c}=s.normalizedTransformation,l=a.exec(s.text),d=c(l.slice(1)),u=s.range,h=l.index;t.enqueueChange(m=>{for(let p=1;p<l.length;p++){let k=l[p],f=d[p-1];if(f==null){h+=k.length;continue}let C=u.start.getShiftedBy(h),x=t.createRange(C,C.getShiftedBy(k.length)),M=gC(C);t.insertContent(m.createText(f,M),x),h+=f.length}})}),i.bind("isEnabled").to(this)}}],ni.defaultConfig={toolbar:["undo","redo","|","bold","italic","|","fontSize","fontColor","fontBackgroundColor","fontFamily","|","heading","insertTable","|","alignment","bulletedList","numberedList","blockQuote","|","outdent","indent","|","link","mediaEmbed","imageInsert"],language:"en",image:{toolbar:["imageTextAlternative","imageStyle:full","imageStyle:side"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},licenseKey:""},_.default=Km}]).default})});var Bs=l0(_g());var Bn=class D{data;dataChanged=new Ym;config;editor;oldLang;constructor(){this.setDefaultValue()}ngOnInit(){}ngAfterContentChecked(){let _=this.getFirstLang("en");this.config=Wm(qm({},this.config),{language:{ui:_.toLowerCase()}}),this.editor=Bs.default,this.oldLang="en"}onChange({editor:_}){this.dataChanged.observers.length===0&&this.dataChanged.pipe(Qm(700),$m()).subscribe(g=>{this.data.content=g}),this.dataChanged.next(_.getData())}getFirstLang(_){return"en"}setDefaultValue(){this.editor=Bs.default;let _=this.getFirstLang("en");this.config={language:{ui:_.toLowerCase()},removePlugins:["MediaEmbed"],htmlEditorConfig:{mediaEmbed:{previewsInData:!0}},fontColor:{colors:[{color:"#000000",label:"Black"},{color:"#4d4d4d",label:"Dim grey"},{color:"#999999",label:"Grey"},{color:"#e6e6e6",label:"Light grey"},{color:"#ffffff",label:"White"},{color:"#e64c4c",label:"Red"},{color:"#e6994c",label:"Orange"},{color:"#e6e64c",label:"Yellow"},{color:"#99e64c",label:"Light green"},{color:"#4ce64c",label:"Green"},{color:"#4be699",label:"Aquamarine"},{color:"#4be6e6",label:"Turquoise"},{color:"#4c99e6",label:"Light blue"},{color:"#4c4de6",label:"Blue"},{color:"#994ce6",label:"Purple"},{color:"#00994e",label:"L\u1EE5c \u0111\u1EADm"},{color:"#2fb04a",label:"Xanh t\u01B0\u01A1i"},{color:"#6cbd45",label:"Xanh s\xE1ng"},{color:"#00a850",label:"Xanh"},{color:"#CFF4D2",label:"Pastel"},{color:"#042956",label:"Sapphire"},{color:"#0F4C81",label:"Classic Blue"},{color:"#236899",label:"Denim"},{color:"#F5A72C",label:"Lightning Yellow"},{color:"#D26E2A",label:"Gold Drop"},{color:"#F7C668",label:"Golden Sand"},{color:"#F79489",label:"Apricot"},{color:"#FADCD9",label:"Azalea"},{color:"#EEB2ED",label:"Light Orchid"},{color:"#FFD0EA",label:"Pink Lace"},{color:"#F04393",label:"H\u1ED3ng \u0111\u1EADm"},{color:"#851C15",label:"Cherrywood"},{color:"#D83E38",label:"Brick red"}]},fontBackgroundColor:{colors:[{color:"#000000",label:"Black"},{color:"#4d4d4d",label:"Dim grey"},{color:"#999999",label:"Grey"},{color:"#e6e6e6",label:"Light grey"},{color:"#ffffff",label:"White"},{color:"#e64c4c",label:"Red"},{color:"#e6994c",label:"Orange"},{color:"#e6e64c",label:"Yellow"},{color:"#99e64c",label:"Light green"},{color:"#4ce64c",label:"Green"},{color:"#4be699",label:"Aquamarine"},{color:"#4be6e6",label:"Turquoise"},{color:"#4c99e6",label:"Light blue"},{color:"#4c4de6",label:"Blue"},{color:"#994ce6",label:"Purple"},{color:"#00994e",label:"L\u1EE5c \u0111\u1EADm"},{color:"#2fb04a",label:"Xanh t\u01B0\u01A1i"},{color:"#6cbd45",label:"Xanh s\xE1ng"},{color:"#00a850",label:"Xanh"},{color:"#CFF4D2",label:"Pastel"},{color:"#042956",label:"Sapphire"},{color:"#0F4C81",label:"Classic Blue"},{color:"#236899",label:"Denim"},{color:"#F5A72C",label:"Lightning Yellow"},{color:"#D26E2A",label:"Gold Drop"},{color:"#F7C668",label:"Golden Sand"},{color:"#F79489",label:"Apricot"},{color:"#FADCD9",label:"Azalea"},{color:"#EEB2ED",label:"Light Orchid"},{color:"#FFD0EA",label:"Pink Lace"},{color:"#F04393",label:"H\u1ED3ng \u0111\u1EADm"},{color:"#851C15",label:"Cherrywood"},{color:"#D83E38",label:"Brick red"}]},link:{addTargetToExternalLinks:!0}}}static \u0275fac=function(g){return new(g||D)};static \u0275cmp=Ci({type:D,selectors:[["app-editor"]],inputs:{data:"data"},standalone:!1,decls:2,vars:3,consts:[["ckeditor",""],[3,"ngModelChange","editor","config","ngModel"]],template:function(g,A){if(g&1){let y=Ai();he(0,"ckeditor",1,0),cg("ngModelChange",function(w){return bi(y),ag(A.data.content,w)||(A.data.content=w),wi(w)}),De()}g&2&&(uo("editor",A.editor)("config",A.config),sg("ngModel",A.data.content))},dependencies:[_i,vi,Cg],styles:["[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:400px}  figure:not(.image_resized){width:20%;height:auto}"]})};var yi=class D{constructor(_){this.sanitizer=_}transform(_){return this.sanitizer.bypassSecurityTrustHtml(_)}static \u0275fac=function(g){return new(g||D)(Zm(hg,16))};static \u0275pipe=Xm({name:"htmlTransform",type:D,pure:!0,standalone:!1})};var xi=class D extends mg{editor;tasks=[];editorData={content:""};onsubmit(_){console.log({test:_.value})}constructor(){super()}initialize(){}ngOnDestroy(){super.ngOnDestroy()}addSubscription(_){super.addSubscription(_)}ngOnInit(){super.ngOnInit(),console.log("first"),this.loadTasks()}loadTasks(){this.tasks=[{title:"Task 1",completed:!1},{title:"Task 2",completed:!0},{title:"Task 3",completed:!1}]}addTask(_){this.tasks.push({title:_,completed:!1})}toggleTaskCompletion(_){this.tasks[_].completed=!this.tasks[_].completed}deleteTask(_){this.tasks.splice(_,1)}static \u0275fac=function(g){return new(g||D)};static \u0275cmp=Ci({type:D,selectors:[["app-task"]],viewQuery:function(g,A){if(g&1&&ng(Bn,5),g&2){let y;og(y=ig())&&(A.editor=y.first)}},features:[tg],decls:20,vars:4,consts:[["form","ngForm"],[3,"ngSubmit"],["type","text","name","name","ngModel","","required","",1,"bg-amber-400","rounded-3xl","border-2","border-amber-950","p-4"],["type","submit"],[1,"task","bg-red-400"],[1,"task-title"],[1,"task-description"],[1,"task-actions"],[1,"task-complete"],[1,"task-delete"],[3,"data"],[1,"ck-content","view-content",3,"innerHTML"]],template:function(g,A){if(g&1){let y=Ai();he(0,"form",1,0),eg("ngSubmit",function(){bi(y);let w=rg(1);return wi(A.onsubmit(w))}),Is(2,"input",2),he(3,"button",3),Xe(4,"Submit"),De()(),he(5,"div",4)(6,"h2",5),Xe(7,"Task Title"),De(),he(8,"p",6),Xe(9,"Task description goes here..."),De(),he(10,"div",7)(11,"button",8),Xe(12,"Complete"),De(),he(13,"button",9),Xe(14,"Delete"),De()()(),he(15,"h1"),Xe(16,` hello
`),De(),Is(17,"app-editor",10)(18,"div",11),lg(19,"htmlTransform")}g&2&&(Ss(17),uo("data",A.editorData),Ss(),uo("innerHTML",dg(19,2,A.editorData.content),Jm))},dependencies:[ug,wg,kg,gg,_i,pg,bg,vi,fg,Ag,Bn,yi],encapsulation:2})};var iy=[{path:"",component:xi}];export{iy as tasksRoutes};
