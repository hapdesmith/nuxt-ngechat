(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{222:function(e,t,n){"use strict";(function(e){n(151),n(15),n(76),n(77);var r=n(223);t.a={name:"message",components:{WordType:r.default},props:{message:{type:Object,default:function(){}},isMe:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},isSystem:{type:Boolean,default:!1}},computed:{isText:function(){return"text"===this.message.type},isImage:function(){return"image"===this.message.type},isDocument:function(){return"pdf"===this.message.type},getWords:function(){if(this.isText)return this.message.content.split(" ")},getBufferString:function(){return{image:"data:image/jpeg;base64,",pdf:"data:application/pdf;base64,"}[String(this.message.type)]+e.from(this.message.content,"binary").toString("base64")},getClass:function(){return this.isMe?{wrapper:"items-start",text:"bg-white shadow-lg shadow-slate-200 text-slate-600 rounded-bl-none",name:"text-slate-300"}:{wrapper:"items-end text-right self-end",text:"bg-sky-600 shadow-lg shadow-sky-300 text-slate-100 rounded-br-none",name:"text-sky-600"}}},methods:{deleteMessage:function(){this.$emit("onDeleteMsg",this.message.content)}}}}).call(this,n(78).Buffer)},223:function(e,t,n){"use strict";n.r(t);var r=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,o=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,l={name:"wordType",props:{word:{type:String,required:!0},isMe:{type:Boolean,required:!0}},computed:{isMsgUrl:function(){return r.test(this.word)},isMsgEmail:function(){return o.test(this.word)}}},c=n(31),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inline"},[e.isMsgUrl?n("a",{class:"decoration-solid underline "+(e.isMe?"text-sky-600 decoration-sky-600":"text-sky-200 decoration-sky-200"),attrs:{href:e.word,target:"_blank"}},[e._v(e._s(e.word)+"\n    "),n("svg",{staticClass:"h-4 w-4 align-text-bottom inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])]):e.isMsgEmail?n("a",{class:"decoration-solid underline "+(e.isMe?"text-rose-600 decoration-rose-600":"text-rose-200 decoration-rose-200"),attrs:{href:"mailto:"+e.word,target:"_blank"}},[e._v(e._s(e.word)+"\n    "),n("svg",{staticClass:"h-4 w-4 align-text-bottom inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])]):[e._v("\n    "+e._s(e.word)+"\n  ")]],2)}),[],!1,null,null,null);t.default=component.exports},224:function(e,t,n){"use strict";var r=n(5),o=n(24),l=n(25),c=n(150),d=n(75),f=n(8),m=n(55).f,h=n(56).f,v=n(10).f,w=n(225).trim,x="Number",k=r.Number,y=k,C=k.prototype,_=l(n(101)(C))==x,M="trim"in String.prototype,j=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=M?t.trim():w(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+t};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(_?f((function(){C.valueOf.call(n)})):l(n)!=x)?c(new y(j(t)),n,k):j(t)};for(var S,T=n(7)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;T.length>O;O++)o(y,S=T[O])&&!o(k,S)&&v(k,S,h(y,S));k.prototype=C,C.constructor=k,n(12)(r,x,k)}},225:function(e,t,n){var r=n(4),o=n(32),l=n(8),c=n(226),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e,t,n){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=o[e]=d?t(v):c[e];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},226:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},227:function(e,t,n){"use strict";n.r(t);n(224);var r={name:"chatHeader",props:{username:{type:String,required:!0},users:{type:Number,required:!0}},methods:{onLeave:function(){this.$emit("onLeave")}}},o=n(31),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed top-0 left-0 right-0 w-full p-4 bg-white shadow-lg shadow-slate-100 flex flex-row justify-between items-center"},[n("div",[n("h1",{staticClass:"text-sky-600 font-black text-xl"},[e._v("RUANG NGECHAT")]),e._v(" "),n("svg",{staticClass:"h-5 w-5 text-slate-400 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]),e._v(" "),n("span",{staticClass:"border-2 border-amber-400 px-3 py-0 text-slate-100 rounded-2xl bg-amber-400 text-sm font-medium"},[e._v(e._s(e.username))]),e._v(" "),n("span",{staticClass:"text-slate-400 text-sm"},[e._v("·")]),e._v(" "),n("svg",{staticClass:"h-5 w-5 text-slate-400 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}})]),e._v(" "),n("span",{staticClass:"border-2 border-amber-400 px-3 py-0 text-slate-100 rounded-2xl bg-amber-400 text-sm font-medium"},[e._v(e._s(e.users))])]),e._v(" "),n("button",{on:{click:e.onLeave}},[n("svg",{staticClass:"h-6 w-6 text-slate-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])])])}),[],!1,null,null,null);t.default=component.exports},228:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(33),{name:"chatFooter",data:function(){return{newMessage:"",activeTabs:"chat",imgFile:null,pdfFile:null}},methods:{onSend:function(){this.newMessage&&this.$emit("onSend",this.newMessage),this.newMessage=""},onChangeImg:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((r=e.target.files||e.dataTransfer.files).length){n.next=3;break}return n.abrupt("return");case 3:(o=new FileReader).onload=function(e){t.imgFile=e.target.result},o.readAsArrayBuffer(r[0]);case 6:case"end":return n.stop()}}),n)})))()},onChangePdf:function(e){var t=this,n=e.target.files||e.dataTransfer.files;if(n.length){var r=new FileReader;r.onload=function(e){t.pdfFile=e.target.result},r.readAsArrayBuffer(n[0])}},onSendImg:function(){this.imgFile&&this.$emit("onSendImg",this.imgFile),this.imgFile=""},onSendPDF:function(){this.pdfFile&&this.$emit("onSendPdf",this.pdfFile),this.pdfFile=""}}}),l=n(31),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed bottom-0 left-0 right-0 flex flex-col border-t-2 border-slate-100 p-4 bg-white shadow-lg shadow-slate-100"},[n("div",{staticClass:"grid grid-cols-3 gap-3 mb-2"},[n("button",{class:"px-2 py-1 border-2 border-slate-300 rounded-lg text-center "+("chat"===e.activeTabs?"border-sky-300 text-sky-300":"text-slate-300"),on:{click:function(t){e.activeTabs="chat"}}},[n("svg",{staticClass:"h-6 w-6 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}})])]),e._v(" "),n("button",{class:"px-2 py-1 border-2 border-slate-300 rounded-lg text-center "+("img"===e.activeTabs?"border-sky-300 text-sky-300":"text-slate-300"),on:{click:function(t){e.activeTabs="img"}}},[n("svg",{staticClass:"h-6 w-6 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}})])]),e._v(" "),n("button",{class:"px-2 py-1 border-2 border-slate-300 rounded-lg text-center "+("pdf"===e.activeTabs?"border-sky-300 text-sky-300":"text-slate-300"),on:{click:function(t){e.activeTabs="pdf"}}},[n("svg",{staticClass:"h-6 w-6 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"}})])])]),e._v(" "),"chat"===e.activeTabs?n("div",{staticClass:"flex flex-col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticClass:"mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 focus:outline-none hover:border-sky-300 transition ease-in-out duration-300",attrs:{placeholder:"type your message...",type:"text"},domProps:{value:e.newMessage},on:{input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),n("button",{staticClass:"bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium",on:{click:e.onSend}},[e._v("\n      SEND\n      "),n("svg",{staticClass:"h-4 w-4 align-text-bottom inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}})])])]):"img"===e.activeTabs?n("div",[n("label",{staticClass:"block",attrs:{for:"file"}},[n("input",{staticClass:"block w-full text-sm text-slate-500 mb-2\n        file:mr-4 file:py-2 file:px-4\n        file:rounded-lg file:border-0\n        file:text-sm file:font-semibold\n        file:bg-sky-50 file:text-sky-300\n        file:border-sky-300\n        hover:file:bg-sky-100",attrs:{type:"file",id:"file",accept:"image/*"},on:{change:e.onChangeImg}})]),e._v(" "),n("button",{staticClass:"w-full bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium",on:{click:e.onSendImg}},[e._v("\n      SEND\n      "),n("svg",{staticClass:"h-4 w-4 align-text-bottom inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}})])])]):n("div",[n("label",{staticClass:"block",attrs:{for:"pdf"}},[n("input",{staticClass:"block w-full text-sm text-slate-500 mb-2\n        file:mr-4 file:py-2 file:px-4\n        file:rounded-lg file:border-0\n        file:text-sm file:font-semibold\n        file:bg-sky-50 file:text-sky-300\n        file:border-sky-300\n        hover:file:bg-sky-100",attrs:{type:"file",id:"pdf",accept:"application/pdf"},on:{change:e.onChangePdf}})]),e._v(" "),n("button",{staticClass:"w-full bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium",on:{click:e.onSendPDF}},[e._v("\n      SEND  \n      "),n("svg",{staticClass:"h-4 w-4 align-text-bottom inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"}})])])])])}),[],!1,null,null,null);t.default=component.exports},229:function(e,t,n){"use strict";n.r(t);var r=n(222).a,o=n(31),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isSystem?n("div",{staticClass:"flex flex-row justify-center italic text-slate-300 mb-2 text-sm"},[e._v("\n  "+e._s(e.message.content)+" - "+e._s(e.message.time)+"\n")]):e.isAdmin?n("div",{staticClass:"w-[80%] flex flex-col text-slate-300 mb-2 items-end text-right self-end"},[n("div",{staticClass:"w-full py-2 px-4 rounded-lg break-words bg-emerald-600 shadow-lg shadow-emerald-300 text-slate-100 rounded-br-none"},e._l(e.getWords,(function(e,t){return n("WordType",{key:t,attrs:{word:e,isMe:!1}})})),1),e._v(" "),n("div",{staticClass:"w-full text-right"},[n("span",{class:"text-sm text-emerald-600"},[e._v(e._s(e.message.name))]),e._v(" "),n("span",{staticClass:"text-xs text-slate-300 italic"},[e._v("- "+e._s(e.message.time))])])]):n("div",{class:"w-[80%] flex flex-col mb-2 "+e.getClass.wrapper},[n("div",{class:"w-full py-2 px-4 rounded-lg break-words "+e.getClass.text},[e.isText?e._l(e.getWords,(function(t,r){return n("WordType",{key:r,attrs:{word:t,isMe:e.isMe}})})):e.isImage?n("img",{staticClass:"w-full",attrs:{src:e.getBufferString}}):n("embed",{staticClass:"w-full h-[30vh]",attrs:{src:e.getBufferString}})],2),e._v(" "),n("div",{staticClass:"w-full text-right"},[n("span",{class:"text-sm "+e.getClass.name},[e._v(e._s(e.message.name))]),e._v(" "),n("span",{staticClass:"text-xs text-slate-300 italic"},[e._v("- "+e._s(e.message.time))])]),e._v(" "),n("button",{on:{click:e.deleteMessage}},[e._v("x")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WordType:n(223).default})},230:function(e,t,n){var content=n(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("4056c74a",content,!0,{sourceMap:!1})},231:function(e,t,n){"use strict";n(230)},232:function(e,t,n){var r=n(79)((function(i){return i[1]}));r.push([e.i,".chat-wrapper[data-v-76179e12]{margin-top:84px;overflow:auto;height:calc(100vh - 244px)}",""]),r.locals={},e.exports=r},233:function(e,t,n){"use strict";n.r(t);n(27),n(19),n(26),n(40),n(41);var r=n(14),o=n(53),l=n(229),c=n(227),d=n(228);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"chat",components:{Message:l.default,ChatHeader:c.default,ChatFooter:d.default},data:function(){return{username:"",shouldLogin:!0}},computed:m({},Object(o.c)(["user","users","messages"])),methods:m(m({},Object(o.b)(["createUser","createMessage","leaveRoom","createImg","createPdf","deleteMsg"])),{},{send:function(e){this.createMessage(e),this.scrollToBot()},sendImg:function(img){this.createImg(img),this.scrollToBot()},sendPdf:function(e){this.createPdf(e),this.scrollToBot()},deleteMsg:function(content){this.deleteMsg(content)},join:function(){this.username&&(this.createUser({name:this.username}),this.shouldLogin=!1)},leave:function(){this.leaveRoom(),this.username="",this.shouldLogin=!0},scrollToBot:function(){var e=this.$refs.body;console.log(e),window.scrollTo(0,e)}})},v=h,w=(n(231),n(31)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col w-screen font-sans text-slate-600"},[e.shouldLogin?n("div",{staticClass:"p-4 flex flex-col justify-center w-screen h-screen"},[n("h1",{staticClass:"bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-5xl font-black mb-4"},[e._v("\n      NGECHAT\n    ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 focus:outline-none hover:border-sky-300 transition ease-in-out duration-300",attrs:{placeholder:"your username...",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("button",{staticClass:"bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium",on:{click:e.join}},[e._v("\n      ENTER CHAT ROOM\n    ")])]):n("div",{ref:"body",staticClass:"flex flex-col w-screen h-screen bg-slate-50"},[n("ChatHeader",{attrs:{username:e.username,users:e.users.length},on:{onLeave:e.leave}}),e._v(" "),n("div",{ref:"messageBox",staticClass:"p-4 chat-wrapper flex flex-col"},e._l(e.messages,(function(t,r){return n("Message",{key:"message-"+r,attrs:{message:t,isMe:t.id===e.user.id,isSystem:"system"===t.name,isAdmin:"admin"===t.name},on:{onDeleteMsg:e.deleteMsg}})})),1),e._v(" "),n("ChatFooter",{on:{onSend:e.send,onSendImg:e.sendImg,onSendPdf:e.sendPdf}})],1)])}),[],!1,null,"76179e12",null);t.default=component.exports;installComponents(component,{ChatHeader:n(227).default,Message:n(229).default,ChatFooter:n(228).default})}}]);