(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,10],{262:function(t,e,r){"use strict";r.r(e);r(263),r(269),r(87);var n={props:{round:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},uppercase:{type:Boolean,default:!1},type:{type:String,default:"primary"},textType:{type:String,default:"light-text"},border:{type:Boolean,default:!1},borderType:{type:String,default:""},borderThickness:{type:Number},tailwind:{type:Boolean,default:!1},tailwindBackgroundOpacity:{type:Number,default:900}},computed:{btnClass:function(){var t=[];return this.round&&t.push("rounded-full"),this.uppercase&&t.push("uppercase"),this.bold&&t.push("font-bold"),this.border&&(this.borderThickness?t.push("border-"+this.borderThickness):t.push("border"),this.borderType&&t.push("border-"+this.borderType)),t.push("text-"+this.textType),"white"===this.type&&t.push("bg-white"),"black"===this.type&&t.push("bg-black"),"primary"===this.type&&t.push("bg-primary"),"secondary"===this.type&&t.push("bg-secondary"),"tertiary"===this.type&&t.push("bg-tertiary"),"accent"===this.type&&t.push("bg-accent"),"success"===this.type&&t.push("bg-success"),"warning"===this.type&&t.push("bg-warning"),"danger"===this.type&&t.push("bg-danger"),"primary"===this.textType&&t.push("text-primary"),"secondary"===this.textType&&t.push("text-secondary"),"tertiary"===this.textType&&t.push("text-tertiary"),"accent"===this.textType&&t.push("text-accent"),"success"===this.textType&&t.push("text-success"),"warning"===this.textType&&t.push("text-warning"),"danger"===this.textType&&t.push("text-danger"),"light-text"===this.textType&&t.push("text-light-text"),"dark-text"===this.textType&&t.push("text-dark-text"),t.join(" ")}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"py-2 rounded px-4 hover:shadow-xl focus:shadow-xl",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,r){"use strict";var n=r(10),o=r(4),l=r(88),c=r(16),d=r(12),h=r(46),m=r(188),f=r(67),x=r(5),y=r(69),v=r(68).f,w=r(34).f,_=r(15).f,C=r(264).trim,N="Number",T=o.Number,k=T.prototype,A=h(y(k))==N,I=function(t){var e,r,n,o,l,c,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=C(h)).charCodeAt(0))||45===e){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+h};if(l(N,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var E,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(A?x((function(){k.valueOf.call(r)})):h(r)!=N)?m(new T(I(e)),r,S):I(e)},M=n?v(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;M.length>P;P++)d(T,E=M[P])&&!d(S,E)&&_(S,E,w(T,E));S.prototype=k,k.constructor=S,c(o,N,S)}},264:function(t,e,r){var n=r(19),o="["+r(265)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},265:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},267:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-sm uppercase text-light-text text-opacity-70 tracking-wide justify-end pr-4 font-light flex flex-row items-center"},[t._v("Powered by Astutely Canary "),n("img",{staticClass:"ml-2",attrs:{src:r(268),width:"20"}})])])}],o=r(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},268:function(t,e,r){t.exports=r.p+"img/Astute-Canary-Logo.d999f71.svg"},269:function(t,e,r){"use strict";var n=r(2),o=r(270);n({target:"String",proto:!0,forced:r(271)("bold")},{bold:function(){return o(this,"b","","")}})},270:function(t,e,r){var n=r(19),o=/"/g;t.exports=function(t,e,r,l){var c=String(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+e+">"}},271:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},285:function(t,e,r){t.exports=r.p+"img/Logo.d999f71.svg"},306:function(t,e,r){"use strict";r.r(e);var n=r(262),o=r(267),l={head:function(){return{title:this.$store.state.general.appName+" | Home"}},layout:"login",data:function(){return{username:void 0,password:void 0,rememberMe:!1,appName:""}},components:{AppButton:n.default,AppPoweredByStatement:o.default},methods:{login:function(){this.$router.push("/")},register:function(){this.$router.push("/register")}},mounted:function(){this.appName=this.$store.state.general.appName}},c=r(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-page-pattern bg-no-repeat bg-cover bg-right-top w-full min-h-screen flex flex-col items-center pb-24"},[n("div",{staticClass:"my-auto max-w-sm text-center"},[n("img",{staticClass:"mx-auto opacity-75 mb-8",attrs:{src:r(285),width:"100"}}),t._v(" "),n("h1",{staticClass:"uppercase text-3xl text-light-text font-medium tracking-widest"},[t._v(t._s(t.appName))]),t._v(" "),n("h2",{staticClass:"text-light-text font-thin"},[t._v("Welcome back! Please login to your account")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-transparent border-b w-full mt-8 pb-4 text-light-text text-sm focus:outline-none",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("div",{staticClass:"flex flex-row justify-between mt-4"},[n("div",{staticClass:"flex flex-row items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rememberMe,expression:"rememberMe"}],attrs:{type:"checkbox",name:"remember"},domProps:{checked:Array.isArray(t.rememberMe)?t._i(t.rememberMe,null)>-1:t.rememberMe},on:{change:function(e){var r=t.rememberMe,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.rememberMe=r.concat([null])):l>-1&&(t.rememberMe=r.slice(0,l).concat(r.slice(l+1)))}else t.rememberMe=o}}}),t._v(" "),n("label",{staticClass:"text-light-text ml-2 text-sm",attrs:{for:"remember"}},[t._v("Remember me")])]),t._v(" "),n("a",{staticClass:"text-light-text underline font-thin text-sm",attrs:{href:"#"}},[t._v("Forgot Password")])]),t._v(" "),n("div",{staticClass:"flex flex-row w-full justify-center mt-8"},[n("app-button",{staticClass:"w-full",attrs:{type:"secondary"},on:{clicked:t.login}},[t._v("Login")])],1),t._v(" "),n("div",{staticClass:"flex flex-row w-full justify-center items-center mt-8"},[n("span",{staticClass:"text-sm text-light-text"},[t._v("Don't have an account?")]),t._v(" "),n("app-button",{staticClass:"ml-2",attrs:{textType:"light-text",type:"",border:"true",borderType:"secondary"},on:{clicked:t.register}},[t._v("Sign Up")])],1),t._v(" "),n("div",{staticClass:"mt-8"},[n("app-powered-by-statement")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:r(262).default,AppPoweredByStatement:r(267).default})}}]);