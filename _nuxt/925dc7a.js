(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{262:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("d00ffdb2",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);n(87);var o={props:{icon:{type:String,default:"syringe"},type:{type:String,default:"symptom"},text:{type:String,default:""},size:{type:String,default:"regular"}},computed:{btnClass:function(){var t=[];return"symptom"===this.type&&t.push("text-symptom"),"vaccination"===this.type&&t.push("text-vaccination"),"testing"===this.type&&t.push("text-testing"),"tertiary"===this.type&&t.push("text-tertiary"),"regular"===this.size&&t.push("icon-button"),"large"===this.size&&t.push("icon-button-large"),t.join(" ")}}},r=(n(272),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"rounded-2xl hover:bg-white focus:bg-white flex flex-col items-center justify-center",class:t.btnClass,on:{click:function(e){return t.$emit("clicked")}}},[n("div",[n("div",{staticClass:"rounded-full h-6 w-6 absolute flex items-center justify-center bg-tertiary bg-opacity-25 mt-4"}),t._v(" "),n("font-awesome-icon",{staticClass:"mx-auto text-5xl mb-2 relative",attrs:{icon:t.icon}})],1),t._v(" "),n("p",{staticClass:"text-dark-text text-sm"},[t._v(t._s(t.text))])])}),[],!1,null,"0af39274",null);e.default=component.exports},272:function(t,e,n){"use strict";n(262)},273:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".icon-button[data-v-0af39274]{\n  width:100px;\n  height:100px\n}\n.icon-button[data-v-0af39274],.icon-button-large[data-v-0af39274]{\n  box-shadow:2px 2px 25px rgba(0,0,0,.06),2px 2px 25px rgba(0,0,0,.06)\n}\n.icon-button-large[data-v-0af39274]{\n  width:125px;\n  height:125px\n}",""]),t.exports=o}}]);