(function(t){function e(e){for(var i,o,a=e[0],l=e[1],c=e[2],u=0,d=[];u<a.length;u++)o=a[u],n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,a=1;a<r.length;a++){var l=r[a];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},n={index:0},s=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="http://thecapsule.email/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0913":function(t,e,r){},"09fa":function(t,e,r){"use strict";var i=r("a8c5"),n=r.n(i);n.a},"2a4c":function(t,e,r){"use strict";var i=r("7d91"),n=r.n(i);n.a},3419:function(t,e,r){"use strict";var i=r("70da"),n=r.n(i);n.a},"426e":function(t,e,r){"use strict";var i=r("0913"),n=r.n(i);n.a},"473f":function(t,e,r){},5589:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("editor",[i("template",{slot:"modal"},[i("img",{staticClass:"capsule-editor-modal-logo",attrs:{src:r("9d0d")}}),i("div",{staticClass:"text-center"},[i("h1",{staticClass:"font-weight-light"},[t._v("Success!")]),i("h5",{staticClass:"font-weight-light mb-5"},[t._v("Your document has been fixed.")])])]),i("textarea",[t._v('<div>\n    <a href=""></a>\n    <img src="" />\n    http://google.com\n</div>\n')])],2)],1)},s=[],o=r("bc3a"),a=r.n(o),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor",class:{footer:t.showFooter}},[t.globalErrors?r("alert",{staticClass:"mt-3 mx-3",attrs:{variant:"danger"}},[r("div",{staticClass:"d-flex"},[r("icon",{staticClass:"mt-1 mr-4",attrs:{icon:"exclamation-triangle",size:"2x"}}),r("div",[r("h3",[t._v("Ooops!")]),r("p",{staticClass:"mb-2"},[t._v("The following errors occurred when your tried to save the document:")]),r("ul",{staticClass:"pl-0"},[t._l(t.globalErrors,function(e){return t._l(e,function(e){return r("li",{key:e},[t._v(t._s(e))])})})],2)])],1)]):t._e(),r("editor-toolbar",{ref:"toolbar",attrs:{value:t.value,"demo-mode":t.demoMode,activity:t.isLinting,errors:t.currentErrors,title:t.currentFilename,"page-controls":!t.demoMode&&t.pageControls},on:{"update:title":function(e){t.currentFilename=e},input:t.onToolbarInput,lint:t.onClickLint,new:t.onClickNew,save:t.onClickSave,open:t.onClickOpen,close:t.onClickClose,"save-as":t.onClickSaveAs,convert:t.onClickConvert,"export-errors":t.onExportErrors,"demo-modal":function(e){t.demoModalCleared=!1}}}),r("div",{staticClass:"editor-field-container"},[r("editor-field",t._b({ref:"editor",on:{input:t.onEditorInput},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},"editor-field",t.mergedOptions,!1)),r("input",{ref:"file",staticClass:"d-none",attrs:{type:"file"},on:{input:t.onFileSelected}})],1),!t.$refs.editor||t.demoMode&&!t.demoModalCleared?t._e():r("editor-footer",{ref:"footer",attrs:{cm:t.$refs.editor.cm,"demo-mode":t.demoMode},on:{finish:function(e){return t.$emit("finish")},"finish-popup":function(e){t.showFinishPopup=!0}}}),r("animate-css",{attrs:{name:"fade"},on:{leave:t.onLeave}},[t.demoMode&&!t.demoModalCleared?r("editor-demo-modal",{on:{clear:t.onClear}}):t._e()],1),r("animate-css",{attrs:{name:"tada",special:""}},[t.showFinishPopup?r("editor-modal",[t._t("modal")],2):t._e()],1)],1)},c=[],h=r("56b3"),u=r.n(h),d=r("2ef0");function m({line:t,ch:e},r,i){return!(r.line>t||i.line<t)&&(!(r.line===t&&r.ch>e)&&!(i.line===t&&i.ch<e))}function f(t,e,r){return t.to&&m(t.to,e,r)||t.from&&m(t.from,e,r)}var p=r("cb5b"),g=r("c074");const v=Object(d["debounce"])(t=>t(),500),b="CodeMirror-lint-error-underline";let k=0;class C{constructor(t,e){this.id=k++,this.cm=t,this.msg=e.msg,this.code=e.code,this.rule=e.rule,this.match=e.match,this.ch=e.column-1,this.line=e.line-1,this.gutter=this.createGutter(),this.bookmark=this.createBookmark(),(this.open&&m(this.cm.getCursor(),this.open.from,this.open.to)||this.close&&m(this.cm.getCursor(),this.close.from,this.close.to))&&this.show(),this.on("change",this.onChange),this.on("changes",this.onChanges),this.on("beforeChange",this.onBeforeChange),this.on("cursorActivity",this.onCursorActivity),this.cm.state.lint.errors.push(this)}set bookmark(t){this.$bookmark=t,this.$bookmark.on("clear",()=>{const t=this.cm.state.lint.getErrorIndex(this);-1!==t&&this.cm.state.lint.errors.splice(this.cm.state.lint.getErrorIndex(this),1),this.clearGutter()}),this.open&&(this.$bookmark.open=this.markText(this.open)),this.close&&(this.$bookmark.close=this.markText(this.close))}get bookmark(){return this.$bookmark}set ch(t){this.$ch=t}get ch(){return this.open?this.ch=this.open.from.ch:this.close?this.ch=this.close.from.ch:this.$ch}get close(){return this.tag&&this.tag.close}set cm(t){this.$cm=t}get cm(){return this.$cm}set lastChange(t){this.$lastChange=t}get lastChange(){return this.$lastChange}set line(t){this.$line=t}get line(){return this.open?this.line=this.open.from.line:this.close?this.line=this.close.from.line:this.$line}get open(){return this.tag&&this.tag.open}set markText(t){this.$markedText=t||{}}get markText(){return this.$markedText}set match(t){this.$match=t}get match(){return this.$match}set msg(t){this.$msg=t}get msg(){return this.$msg}get formattedMsg(){return`${p["a"].icon(g["c"]).html} <span>${this.line+1},${this.ch+1} :: ${this.rule} ${this.msg} (${this.code})</span>`}get isActive(){return this.nearby(this.cm.getCursor())}get isCursorInsideTag(){const{line:t,ch:e}=this.cm.getCursor();return this.nearby({line:t,ch:e-1})}get isAttachedToDom(){return this.bookmark&&this.bookmark.widgetNode&&document.body.contains(this.bookmark.widgetNode)}get isNotVisible(){return this.isAttachedToDom&&!this.bookmark.widgetNode.classList.contains("show")}get isVisible(){return this.isAttachedToDom&&this.bookmark.widgetNode.classList.contains("show")}set rule(t){this.$rule=t}get rule(){return this.$rule}get tag(){return this.bookmark&&this.findMatchingTag(this.bookmark.find())}clearGutter(t){void 0===t&&(t=this.line),this.cm.state.lint.findErrorsOnLine(t).length||this.cm.setGutterMarker(t,this.cm.state.lint.id,null)}createGutter(){return this.cm.setGutterMarker(this.line,this.cm.state.lint.id,this.createGutterIcon())}createGutterIcon(){const t=document.createElement("div");return t.className="CodeMirror-lint-error-icon",t.innerHTML=p["a"].icon(g["a"]).html,t.title=this.formattedMsg,t.error=this,t}createBookmark(){const t=this.findMatchingTag({line:this.line,ch:this.ch}),e=t&&(t.open||t.close);return e&&this.cm.setBookmark(e.from,{insertLeft:!!t.open,widget:this.createWidgetNode()})}createWidgetNode(){const t=document.createElement("div");return t.className="CodeMirror-lint-error-bookmark",t.innerHTML=`<div class="CodeMirror-lint-error-bookmark-text">${this.formattedMsg}</div>`,t.addEventListener("click",t=>this.hide()),document.documentElement.appendChild(t),t}findMatchingTag(t){return t&&u.a.findMatchingTag(this.cm,t,this.cm.getViewport())}markText({from:t,to:e}){return this.cm.markText(t,e,{title:this.msg,className:b})}nearby(t){return this.open?m(t,this.open.from,this.open.to):!!this.close&&m(t,this.close.from,this.close.to)}redraw(){this.bookmark.widgetNode.querySelector(".CodeMirror-lint-error-bookmark-text").innerHTML=this.formattedMsg}inRange(t,e){return this.tag&&f(this.tag,t,e)}hide(){this.isVisible&&this.bookmark.widgetNode.classList.remove("show")}show(){this.redraw(),this.isNotVisible&&this.bookmark.widgetNode.classList.add("show")}clear(){this.bookmark&&(this.bookmark.open&&this.bookmark.open.clear(),this.bookmark.close&&this.bookmark.close.clear(),this.cm.state.lint.$nextTick(()=>{this.bookmark.clear()}))}lint(){v(()=>this.cm.lint())}on(t,e){const r=(...i)=>{this.isAttachedToDom?e.apply(this,i):this.cm.off(t,r)};this.cm.on(t,r)}onChange(t,e){const r=this.cm.state.lint.isNonClosingTagOpened(this.tag);this.close&&(this.$bookmark.close&&this.$bookmark.close.clear(),this.$bookmark.close=this.markText(this.close)),this.isCursorInsideTag&&(this.close&&this.lastChange.close||r)&&this.lint(),this.isVisible&&this.redraw(),this.lastChange.open&&!this.open&&this.clear(),this.open||this.close?this.lastChange&&this.lastChange.change.from.line!==this.line&&(this.clearGutter(this.lastChange.change.from.line),this.createGutter()):this.clearGutter(this.lastChange.change.from.line)}onChanges(t,e){this.tag||this.clear()}onBeforeChange(t,e){this.lastChange={change:e,open:this.open,close:this.close}}onCursorActivity(t){this.bookmark.widgetNode&&this.bookmark.widgetNode.classList[this.isActive?"add":"remove"]("show")}static compare(t,e){return t&&t.id===e&&e.id||(t&&t.line)===(e&&e.line)&&(t&&t.ch)===(e&&e.ch)&&(t&&t.code)===(e&&e.code)}}var $=r("ca14");const y="CodeMirror-lint-errors";class x{constructor(t,e){if("object"!==typeof e)throw new Error("The options must be a JSON object.");const r=e.errors||[];delete e.errors,this.cm=t,this.errors=r,this.options=e}value(t,...e){const r=this.option(t);return"function"===typeof r?r(this.cm,...e):r}option(t,e){return this.getOption(t,e)}callback(t,...e){const r=this.option(t);if("function"===typeof r)return r(this.cm,...e)}setOption(t,e){this.options[t]=e}getOption(t,e){const r=this.options[t];return void 0===r?e:r}send(t,e){return this.callback("onLintStart"),new Promise((r,i)=>{const{token:n,cancel:s}=a.a.CancelToken.source();e=e||this.value("options")||this.options||{},Object.assign(e,{cancelToken:n}),this.abort&&this.abort(),this.abort=s,this.request=a.a.post(this.value("url"),t||this.value("data"),e).then(t=>{this.errors=[],this.response=t=this.option("transformResponse")?this.callback("transformResponse",t):t.data,this.callback("onLintSuccess",t),this.callback("onLintComplete",!0,t),r(t)},t=>{if(!a.a.isCancel(t)){this.response=null;const e=this.option("transformResponseError")?this.callback("transformResponseError",t):t.response.data.errors||t.response.data;Object($["f"])(e)&&(this.errors=e),this.callback("onLintError",t),this.callback("onLintComplete",!1,t)}i(t)}).finally(()=>{this.request=null})})}isOpenedTagClosing(t){return t&&t.open&&t.close}isNonClosingTagOpened(t){return t&&t.open&&"img"===t.open.tag}findNearbyErrors(t){return this.errors.filter(e=>{return e.nearby(t)})}findErrorsInRange(t,e){return this.errors.filter(r=>{return r.inRange(t,e)})}findErrorsOnLine(t){return this.errors.filter(e=>e.line===t)}createIcon(t){const e=document.createElement("div");return e.className="CodeMirror-lint-error-icon",e.innerHTML=p["a"].icon(g["a"]).html,e.title=`${t.line},${t.column} :: ${t.code} ${t.msg} (${t.rule})`,e.error=t,e}setCursorOnError(t){if(!t&&this.errors.length&&(t=this.errors[0]),t){const e=t.match.open||t.match.close;this.cm.scrollIntoView(e,this.cm.getScrollInfo().clientHeight/2),setTimeout(()=>{this.cm.setCursor(t.line-1,t.column)})}}getErrorIndex(t){return this.errors.findIndex(e=>t===e)}createTooltip(t){const e=document.createElement("div");return e.className="CodeMirror-lint-tooltip",e.innerHTML=t,e}createErrorBookmark(t){const e=document.createElement("div");return e.error=t,e.className="CodeMirror-lint-error-bookmark",e.innerHTML=`\n            <div class="CodeMirror-lint-error-bookmark-text">\n                ${p["a"].icon(g["c"]).html} ${t.line},${t.column} :: ${t.code} ${t.msg} (${t.rule})\n            </div>\n        `,document.documentElement.appendChild(e),e}removeErrors(){this.errors.forEach(t=>t.clear()),this.cm.clearGutter(this.cm.state.lint.id)}get id(){return this.constructor.id}get abort(){return this.$abort}set abort(t){this.$abort=t}get cm(){return this.$cm}set cm(t){this.$cm=t}get options(){return this.$options}set options(t){this.$options=t}set request(t){this.$request=t}get request(){return this.$request}get response(){return this.$response}set response(t){this.$response=t}get errors(){return this.$errors||[]}get $nextTick(){return this.options.nextTick}set errors(t){let e=this.errors.filter(t=>t.isVisible).reverse().pop();if(this.errors.forEach(t=>t.clear()),!Object($["f"])(t))return this.$errors=[];this.$errors=t.map(t=>{return t=new C(this.cm,t),e&&C.compare(t,e)&&t.show(),t})}get hasGutter(){const t=this.cm.getOption("gutters");for(var e=0;e<t.length;++e)if(t[e]===y)return!0;return!1}static get id(){return y}}function w(t,e){"undo"===e.origin&&t.lint()}function E(t,e){let{line:r,ch:i}=t.getCursor();const n=u.a.findMatchingTag(t,{line:r,ch:i-1},t.getViewport());e.open=n&&n.open,e.close=n&&n.close,t.state.lint.findNearbyErrors(t.getCursor()).length||!t.state.lint.isOpenedTagClosing(n)&&!t.state.lint.isNonClosingTagOpened(n)||t.lint(),t.getValue()||t.state.lint.removeErrors()}function _(t,e){"paste"===e.origin&&(t.state.lint.errors.filter(t=>t.isActive).length||t.lint())}u.a.defineOption("lint",!1,function(t,e,r){r&&r!==u.a.Init&&(t.state.removeErrors(),t.off("change",w),t.off("changes",E),t.off("inputRead",_),delete t.state.lint),e&&(t.state.lint=new x(t,e||(e={})),t.on("change",w),t.on("changes",E),t.on("inputRead",_),e.errors&&e.errors.length&&(t.state.lint.errors=e.errors))}),u.a.defineExtension("lint",function(t,e){return new Promise((r,i)=>{this.state.lint.cm.getValue()?this.state.lint.send(t,e).then(t=>{r(this.state.lint)},t=>{this.state.lint.cm.operation(()=>{i(t)})}):(this.state.lint.removeErrors(),this.state.lint.callback("onLintSuccess"),r(this.state.lint))})});var T=function(){var t=this,e=this,r=e.$createElement,i=e._self._c||r;return i("transition",{attrs:{"enter-class":e.enterClass,"enter-to-class":e.enterToClass,"enter-active-class":e.enterActiveClassName,"leave-class":e.leaveClass,"leave-to-class":e.leaveToClass,"leave-active-class":e.leaveActiveClassName},on:{"before-enter":function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["before-enter"].concat(r))},enter:function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["enter"].concat(r))},"after-enter":function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["after-enter"].concat(r))},"before-leave":function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["before-leave"].concat(r))},leave:function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["leave"].concat(r))},"after-leave":function(){var e,r=[],i=arguments.length;while(i--)r[i]=arguments[i];return(e=t).$emit.apply(e,["after-leave"].concat(r))}}},[e._t("default")],2)},O=[],M={props:{enterClass:String,enterToClass:String,enterActiveClass:String,leaveClass:String,leaveToClass:String,leaveActiveClass:String,animated:{type:Boolean,default:!0},big:Boolean,name:{type:[Array,String],required:!0},up:Boolean,down:Boolean,left:Boolean,right:Boolean,special:Boolean,direction:{type:String,default(){return(this.up?"up":this.down&&"down")||this.left&&"left"||this.right&&"right"||void 0},validate(t){return-1!==["up","down","left","right"].indexOf(t.toLowerCase())}}},computed:{enterActiveClassName(){const t=this.name instanceof Array&&this.name||[this.name];return t.map(t=>{return Object(d["camelCase"])([t,!this.special&&"in",this.direction,this.big&&"big"].filter(t=>!!t).join(" "))}).concat([this.animated&&"animated",this.enterActiveClass]).join(" ")},leaveActiveClassName(){const t=this.name instanceof Array&&this.name||[this.name];return t.map(t=>{return Object(d["camelCase"])([t,!this.special&&"out",this.direction,this.big&&"big"].filter(t=>!!t).join(" "))}).concat([this.animated&&"animated",this.leaveActiveClass]).join(" ")}}},S=M,A=(r("6239"),r("2877")),j=Object(A["a"])(S,T,O,!1,null,null,null),N=j.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"capsule-editor-modal"},[r("div",{staticClass:"capsule-editor-modal-content"},[t._t("default")],2)])},F=[],D={data(){return{}}},I=D,B=(r("7fa4"),Object(A["a"])(I,L,F,!1,null,null,null)),V=B.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("textarea",{domProps:{value:t.value}})},G=[],P=(r("f0df"),r("a7be"),r("bb47"),r("697e"),r("d2e8"),r("0109"),r("f6b6"),r("d69f"),r("8f0a"),r("10b2"),r("4895"),r("cbc8"),r("aedd"),r("a2c1"),r("8d70"),r("9f09"),r("164b"),r("9b74"),r("2768"),r("92f1"),r("c885"),r("0ab3")),z={inheritAttrs:!1,name:"editor-field",mixins:[P["a"]],props:{defaultOptions:{type:Object,default(){return{indentUnit:4,indentAuto:!0,theme:"dracula",mode:"htmlmixed",lineNumbers:!0,lineWrapping:!0,newlineAndIndent:!0}}},height:{type:String,default:"100%"},width:{type:String,default:"100%"}},computed:{options(){return Object($["a"])({},this.defaultOptions,this.$attrs)}},mounted(){this.cm=u.a.fromTextArea(this.$el,this.options),this.cm.on("change",()=>this.$emit("input",this.cm.getValue())),this.cm.on("cursorActivity",(...t)=>this.$emit("cursor-activity",...t)),this.cm.setSize(this.width,this.height)},data(){return{cm:null}}},R=z,H=(r("09fa"),Object(A["a"])(R,q,G,!1,null,null,null)),W=H.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"editor-footer"},[r("div",{staticClass:"editor-footer-pager"},[r("animate-css",{attrs:{name:"fade"}},[t.totalErrors?r("div",[r("btn",{attrs:{variant:"link"},on:{click:function(e){return e.preventDefault(),t.goto(t.index-1)}}},[r("icon",{attrs:{icon:"caret-left"}})],1),r("span",[t._v(t._s(t.index+1)+" of "+t._s(t.errors.length)+" ")]),r("btn",{attrs:{variant:"link"},on:{click:function(e){return e.preventDefault(),t.goto(t.index+1)}}},[r("icon",{attrs:{icon:"caret-right"}})],1)],1):t._e()])],1),r("div",{staticClass:"editor-footer-error"},[r("animate-css",{attrs:{name:"fade",direction:t.direction,"leave-active-class":"position-absolute"}},[t.error?r("editor-error",{key:t.index,attrs:{error:t.error}}):t._e()],1)],1),r("animate-css",{attrs:{name:"fade"}},[t.showFinishButton?r("btn",{attrs:{type:"button",size:"lg",disabled:!!t.error},on:{click:function(e){return t.$emit("finish")}}},[t._v("Finish")]):t._e()],1)],1)},K=[],U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"capsule-editor-error"},[r("icon",{attrs:{icon:"exclamation-triangle"}}),t._v(" "+t._s(t.error.line+1)+","+t._s(t.error.ch+1)+" :: "+t._s(t.error.rule)+" "+t._s(t.error.msg)+" ("+t._s(t.error.code)+")\n")],1)},Q=[],X=r("ecee"),Y=r("ad3d");X["c"].add(g["d"]);var Z={components:{Icon:Y["a"]},props:{error:{type:Object,required:!0}}},tt=Z,et=(r("2a4c"),Object(A["a"])(tt,U,Q,!1,null,null,null)),rt=et.exports,it=r("9719"),nt=r("2dba"),st=r("717a");X["c"].add(nt["faCaretLeft"]),X["c"].add(st["faCaretRight"]);var ot={name:"editor-footer",components:{Btn:it["a"],Icon:Y["a"],AnimateCss:N,EditorError:rt},props:{cm:{type:Object,required:!0},demoMode:Boolean},watch:{["cm.state.lint.errors"](t,e){!this.error&&this.errors.length?this.error=this.errors[0]:this.errors.length||(this.error=null),this.cm.getValue()&&!t.length&&this.totalErrors&&this.demoMode&&this.$emit("finish-popup"),this.totalErrors=t.length}},computed:{errors(){return this.cm.state.lint.errors},index(){return Math.max(0,this.errors.indexOf(this.error))}},methods:{findActiveError(){return this.errors.filter(t=>t.isActive).pop()},goto(t){t<0?t=this.errors.length-1:t>this.errors.length-1&&(t=0);const{line:e,ch:r}=this.errors[t]||{ch:this.ch,line:this.line};this.cm.setCursor(e,r),this.cm.focus()},onCursorActivity(t){const{line:e,ch:r}=t.getCursor(),i=this.findActiveError()||this.error;this.ch=r,this.line=e,this.direction=this.index>this.errors.indexOf(i)?"down":"up",this.error=i}},mounted(){this.$parent.$refs.editor&&(this.$parent.$refs.editor.$on("cursor-activity",this.onCursorActivity),this.$nextTick(()=>this.totalErrors=this.errors.length))},beforeDestroy(){this.$parent.$refs.editor&&this.$parent.$refs.editor.$off("cursor-activity",this.onCursorActivity)},data(){return{ch:0,line:0,error:null,totalErrors:0,direction:"up",showFinishButton:!1}}},at=ot,lt=(r("631a"),Object(A["a"])(at,J,K,!1,null,null,null)),ct=lt.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("navbar",{staticClass:"editor-toolbar",attrs:{variant:"dark","bg-dark":""}},[r("btn-activity",{ref:"lint",staticClass:"mr-auto",attrs:{size:"sm",variant:"light",disabled:t.isLintingDisabled(),activity:t.activity},on:{click:function(e){return e.preventDefault(),t.onClickLint(e)}}},[r("icon",{attrs:{icon:"bug"}}),t.errors.length?r("badge",{staticClass:"position-absolute",attrs:{label:t.errors.length,variant:"danger",pill:""}}):t._e()],1),r("div",{staticClass:"editor-toolbar-title"},[r("input",{attrs:{type:"text",placeholder:"Untitled Document"},domProps:{value:t.title},on:{input:t.onInput}})]),t.pageControls?r("btn-dropdown",{staticClass:"editor-toolbar-actions ml-auto",attrs:{size:"sm",variant:"light",align:"right"}},[r("icon",{attrs:{slot:"label",icon:"cog"},slot:"label"}),r("editor-toolbar-menu-item",{attrs:{label:"New File",hotkeys:["ctrl","N"]},on:{click:function(e){return e.preventDefault(),t.$emit("new")}}}),r("editor-toolbar-menu-item",{attrs:{label:"Open",hotkeys:["ctrl","O"]},on:{click:function(e){return e.preventDefault(),t.$emit("open")}}}),r("editor-toolbar-menu-item",{attrs:{label:"Save",hotkeys:["ctrl","S"]},on:{click:function(e){return e.preventDefault(),t.$emit("save")}}}),r("editor-toolbar-menu-item",{attrs:{label:"Save As...",hotkeys:["shift","ctrl","S"]},on:{click:function(e){return e.preventDefault(),t.$emit("save-as")}}}),r("editor-toolbar-menu-item",{attrs:{label:"Close",hotkeys:["ctrl","Q"]},on:{click:function(e){return e.preventDefault(),t.$emit("close")}}}),t.errors.length?[r("dropdown-menu-divider"),r("editor-toolbar-menu-item",{attrs:{label:"Export Errors",hotkeys:["ctrl","X"]},on:{click:function(e){return e.preventDefault(),t.$emit("export-errors")}}})]:t.isLintingDisabled()||0!==t.errors.length?t._e():[r("dropdown-menu-divider"),r("editor-toolbar-menu-item",{attrs:{label:"Convert Document",hotkeys:["ctrl","C"]},on:{click:function(e){return e.preventDefault(),t.$emit("convert")}}})]],2):t._e(),t.demoMode?r("btn",{staticClass:"editor-help",attrs:{size:"sm",variant:"link"},on:{click:function(e){return t.$emit("demo-modal")}}},[r("icon",{attrs:{icon:["far","question-circle"]}})],1):t._e()],1)},ut=[],dt={prefix:"fas",iconName:"alt",icon:[20,18,[],null,"M.027.656h6.773l7.805 15.609h5.379v1.734h-6.785l-7.805-15.609h-5.367v-1.734zm11.848 0h8.109v1.734h-8.109v-1.734z"]},mt={prefix:"fas",iconName:"ctrl",icon:[15,9,[],null,"M.602 7.594l6.938-6.938 6.949 6.938-1.23 1.23-5.719-5.719-5.707 5.719-1.23-1.23z"]},ft={prefix:"fas",iconName:"shift",icon:[20,19,[],null,"M.027 10.176l9.973-9.973 9.984 9.973h-4.992v8.824h-9.973v-8.824h-4.992zm9.973-7.922l-6.621 6.621h3.082v8.684h7.09v-8.684h3.07l-6.621-6.621z"]},pt=r("e6b4"),gt=r("3b06"),vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dropdown-menu-item",{on:{click:function(e){return t.$emit("click",e)}}},[r("span",[t._t("default",[t._v(t._s(t.label))])],2),t.hotkeys?r("code",t._l(t.hotkeys,function(t,e){return r("editor-hotkey",{key:e,attrs:{icon:t.length>1?t:null,label:1===t.length?t:null}})}),1):t._e()])},bt=[],kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("kbd",[t._t("default",[t._v(t._s(t.label))]),t.icon?r("icon",{attrs:{icon:t.icon}}):t._e()],2)},Ct=[],$t={name:"editor-hotkey",components:{Icon:Y["a"]},props:{label:[Number,String],icon:[Array,String]}},yt=$t,xt=(r("fb31"),Object(A["a"])(yt,kt,Ct,!1,null,null,null)),wt=xt.exports,Et=r("0189"),_t={name:"editor-toolbar-menu-item",props:{label:String,hotkeys:Array},components:{EditorHotkey:wt,DropdownMenuItem:Et["a"]}},Tt=_t,Ot=(r("d042"),Object(A["a"])(Tt,vt,bt,!1,null,null,null)),Mt=Ot.exports,St=r("9863"),At=r("32e4"),jt=r("7f93"),Nt=r("b702");X["c"].add(g["a"]),X["c"].add(g["b"]),X["c"].add(dt),X["c"].add(mt),X["c"].add(ft),X["c"].add(Nt["a"]);var Lt={name:"editor-toolbar",components:{Btn:it["a"],Icon:Y["a"],Badge:pt["a"],Navbar:gt["a"],BtnActivity:St["a"],BtnDropdown:At["a"],DropdownMenuDivider:jt["a"],EditorToolbarMenuItem:Mt},props:{activity:Boolean,demoMode:Boolean,errors:Array,pageControls:{type:Boolean,default:!0},value:String,title:{type:String,default:null}},methods:{isLintingDisabled(){return!this.value||""===this.value},onInput(t){this.$emit("input",t.target.value),this.$emit("update:title",t.target.value)},onClickLint(t){this.isLintingDisabled()||this.$emit("lint",t)}}},Ft=Lt,Dt=(r("3419"),Object(A["a"])(Ft,ht,ut,!1,null,null,null)),It=Dt.exports,Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("editor-modal",{staticClass:"capsule-editor-demo-modal",class:"step-"+(t.active+1)},[i("slide-deck",{ref:"slides",attrs:{active:t.active,controls:t.active>0},on:{enter:t.onEnter}},[i("div",{key:0},[i("div",[i("animate-css",{attrs:{name:"zoom",in:"",left:""}},[t.loaded?i("img",{staticClass:"capsule-editor-modal-logo",attrs:{src:r("9d0d")}}):t._e()]),i("h1",{staticClass:"text-center font-weight-light"},[t._v("Capsule Editor")]),i("p",{staticClass:"mx-3 py-2"},[t._v("\n                    Capsule Editor will step you through each error to help you quickly find the correct solution.\n                    Would like to learn more about Capsule Editor?\n                ")]),i("div",{staticClass:"text-center"},[i("div",{staticClass:"mb-3"},[i("btn",{attrs:{type:"button"},on:{click:function(e){t.active=1}}},[t._v("Learn More")])],1),i("small",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("clear")}}},[t._v("No, I just want to fix the errors.")])])])],1)]),i("div",{key:1},[i("div",[i("h1",{staticClass:"text-center font-weight-light"},[t._v("Fixing Errors")]),i("p",[t._v("\n                    Capsule Editor will check for errors automatically as you type.\n                    The errors will appear highlighted in red next to a bug icon and \n                    will have a brief description of what is most likely causing the error.\n                ")]),i("img",{staticClass:"screenshot img-fluid mb-3",attrs:{src:r("77b8")}}),i("div",{staticClass:"text-center"},[i("div",{staticClass:"mb-3"},[i("btn",{attrs:{type:"button"},on:{click:function(e){t.active=2}}},[t._v("Next "),i("icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),i("small",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("clear")}}},[t._v("Skip Tutorial")])])])])]),i("div",{key:2},[i("h1",{staticClass:"text-center font-weight-light"},[t._v("Paginating")]),i("p",[t._v("\n                Finding errors can take a little time in a large document or if the HTML isn't properly indented.\n                Capsule Editor provides an interface to paginate through the errors to quickly find them in\n                the document.\n            ")]),i("img",{staticClass:"screenshot img-fluid mb-3",attrs:{src:r("7b75")}}),i("div",{staticClass:"text-center"},[i("div",{staticClass:"mb-3"},[i("btn",{attrs:{type:"button"},on:{click:function(e){t.active=3}}},[t._v("Next "),i("icon",{attrs:{icon:"long-arrow-alt-right"}})],1)],1),i("small",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("clear")}}},[t._v("Skip Tutorial")])])])]),i("div",{key:3},[i("h1",{staticClass:"text-center font-weight-light"},[t._v("Almost Ready!")]),i("p",[t._v("\n                If you ever need to return to this tutorial, just click the question mark in the top right corner.\n            ")]),i("img",{staticClass:"screenshot img-fluid mb-3",attrs:{src:r("65ce")}}),i("div",{staticClass:"text-center"},[i("btn",{attrs:{variant:"success",type:"button"},on:{click:function(e){return t.$emit("clear")}}},[t._v("Get Started!")])],1)])])],1)},Vt=[],qt=r("a6f4");X["c"].add(g["e"]);var Gt={components:{Btn:it["a"],Icon:Y["a"],SlideDeck:qt["a"],AnimateCss:N,EditorModal:V},methods:{onEnter(t){this.active=t.key}},data(){return{active:0,loaded:!1}},mounted(){this.loaded=!0}},Pt=Gt,zt=(r("426e"),Object(A["a"])(Pt,Bt,Vt,!1,null,null,null)),Rt=zt.exports,Ht=r("3259"),Wt=r("46d8"),Jt=r("8560");X["c"].add(Jt["faExclamationTriangle"]);var Kt={name:"editor",components:{Alert:Ht["a"],AnimateCss:N,EditorModal:V,EditorField:W,EditorFooter:ct,EditorToolbar:It,EditorDemoModal:Rt},props:{globalErrors:Object,contents:String,demoMode:Boolean,extraKeys:Object,filename:String,gutters:Array,lint:Object,matchTags:Object,options:Object,errors:{type:Array,default:()=>[]},pageControls:{type:Boolean,default:!0}},watch:{currentErrors(t){!this.showFooter&&t.length&&(this.showFooter=!0)}},computed:{mergedOptions(){return Object($["a"])({tabSize:4,indentUnit:4,foldGutter:!0,smartIndent:!0,lineNumbers:!0,lineWrapping:!0,indentWithTabs:!0,clearOnEnter:!0,matchTags:Object.assign({bothTags:!0},this.matchTags),gutters:this.gutters||["CodeMirror-linenumbers",x.id,"CodeMirror-foldgutter"],extraKeys:Object.assign({"Ctrl-N":this.onClickNew,"Ctrl-O":this.onClickOpen,"Ctrl-S":this.onClickSave,"Ctrl-Q":this.onClickClose,"Ctrl-C":this.onClickConvert,"Shift-Ctrl-S":this.onClickSaveAs,"Ctrl-J":"toMatchingTag","Ctrl-Space":"autocomplete","Ctrl-V":()=>{this.$refs.toolbar.$refs.lint.$el.click()}},this.extraKeys),lint:Object.assign({nextTick:this.$nextTick,url:"http://api.thecapsule.email/v1/lint",errors:this.currentErrors,data:t=>{return{html:t.getValue()}},onLintStart:()=>{this.isLinting=!0},onLintComplete:()=>{this.isLinting=!1},onLintSuccess:()=>{this.currentErrors=[],this.$emit("lint-success")},onRemoveError:(t,e)=>{console.log(e),this.$nextTick(()=>{this.currentErrors=t.state.lint.errors.splice(t.state.lint.getErrorIndex(e),1)}),this.$emit("remove-error",e,this.currentErrors)},onLintError:(t,e)=>{406===e.response.status&&(this.currentErrors=e.response.data.errors,this.$emit("lint-error",e,this.currentErrors))}},this.lint)},this.options)}},methods:{getSlotContents(){return this.$slots.default?this.$slots.default.filter(t=>{return"textarea"===t.tag.toLowerCase()}).reduce((t,e)=>{return t+e.children.map(t=>{return t.text}).join("")},""):null},onLeave(){this.$refs.editor.cm.state.lint.errors.length&&this.$refs.editor.cm.setCursor(this.$refs.editor.cm.state.lint.errors[0])},onClear(){this.demoModalCleared=!0},onClickConvert(){this.$emit("convert",this.value,this.currentFilename)},onToolbarInput(){this.onEditorInput()},onEditorInput(){this.$nextTick(()=>{this.$emit("input",{contents:this.value,filename:this.currentFilename})})},onExportErrors(){this.$emit("export",this.value,this.currentFilename)},onFileSelected(t){const e=new FileReader;e.onload=(t=>{this.$refs.editor.cm.setValue(t.target.result),this.$refs.editor.cm.lint()}),e.readAsText(t.target.files[0]),this.currentFilename=t.target.files[0].name},onClickNew(){this.currentFilename=null,this.$refs.editor.cm.setValue(this.value=""),this.$refs.editor.cm.focus(),this.$emit("new")},onClickSave(){this.currentFilename?(this.$emit("download",this.value,this.currentFilename),this.$emit("save",this.value,this.currentFilename)):this.onClickSaveAs()},onClickSaveAs(){let t=this.currentFilename;this.$prompt("Save File As",Wt["a"],{content:{on:{keypress:e=>{13===e.keyCode?(e.target.closest(".modal-dialog").querySelector(".btn-primary").click(),e.preventDefault()):t=e.target.value}},propsData:{label:"Enter the name of the file",value:this.currentFilename}}}).then(e=>{this.currentFilename=t,this.$emit("download",this.value,t),this.$emit("save-as",this.value,t),this.$emit("save",this.value,t)})},onClickOpen(t){this.$refs.file.click()},onClickClose(){this.$emit("close")},onClickLint(t){this.$refs.editor.cm.lint()}},data(){return{isLinting:!1,showFooter:!1,showFinishPopup:!1,demoModalCleared:!1,currentErrors:this.errors,currentFilename:this.filename,value:this.contents||this.getSlotContents()}},mounted(){this.$nextTick(()=>{this.$refs.editor.cm.focus(),this.$refs.editor.cm.getValue()&&!this.currentErrors.length&&this.$refs.editor.cm.lint()})}},Ut=Kt,Qt=(r("cc5c"),Object(A["a"])(Ut,l,c,!1,null,null,null)),Xt=Qt.exports;a.a.defaults.headers={Accept:"application/json",Authorization:"Bearer hHw2PWSfpx9lVvuyMRkwMFeS"};var Yt={components:{Editor:Xt},data(){return{}}},Zt=Yt,te=(r("5c0b"),Object(A["a"])(Zt,n,s,!1,null,null,null)),ee=te.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(ee)}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var i=r("5e27"),n=r.n(i);n.a},"5e27":function(t,e,r){},6239:function(t,e,r){"use strict";var i=r("5589"),n=r.n(i);n.a},"631a":function(t,e,r){"use strict";var i=r("bfb1"),n=r.n(i);n.a},"65ce":function(t,e,r){t.exports=r.p+"src/assets/img/show-help-modal.a1c2d167.gif"},"70da":function(t,e,r){},"77b8":function(t,e,r){t.exports=r.p+"src/assets/img/fixing-errors.7728d3ab.gif"},"7b75":function(t,e,r){t.exports=r.p+"src/assets/img/error-paginating.80a84b23.gif"},"7d91":function(t,e,r){},"7fa4":function(t,e,r){"use strict";var i=r("deba"),n=r.n(i);n.a},9884:function(t,e,r){},"9d0d":function(t,e,r){t.exports=r.p+"src/assets/img/logo-no-text-1028x1028.8aa291ba.png"},a8c5:function(t,e,r){},bfb1:function(t,e,r){},cc5c:function(t,e,r){"use strict";var i=r("9884"),n=r.n(i);n.a},d042:function(t,e,r){"use strict";var i=r("daf3"),n=r.n(i);n.a},daf3:function(t,e,r){},deba:function(t,e,r){},fb31:function(t,e,r){"use strict";var i=r("473f"),n=r.n(i);n.a}});
//# sourceMappingURL=index.ef85554b.js.map