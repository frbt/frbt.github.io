(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a161628"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e),a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,l.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"1aec":function(e,t,n){},"1b15":function(e,t,n){"use strict";var o=n("1aec"),r=n.n(o);r.a},"2fb5":function(e,t,n){},"34cb":function(e,t,n){"use strict";var o=n("ec2c"),r=n.n(o);r.a},4616:function(e,t,n){},"539e":function(e,t,n){"use strict";var o=n("9dab"),r=n.n(o);r.a},5610:function(e,t,n){"use strict";var o=n("bb4d"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/practice"}},[e._v("Practice")]),e._v(" |\n    ")],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},l=Object(s["a"])(i,r,a,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n        check out the\n        "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},h=v,b=(n("539e"),Object(s["a"])(h,f,m,!1,null,"6f50b7fe",null));b.options.__file="HelloWorld.vue";var g=b.exports,_={name:"home",components:{HelloWorld:g}},y=_,w=Object(s["a"])(y,p,d,!1,null,null,null);w.options.__file="Home.vue";var x=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-6",staticStyle:{"text-align":"left"}},[n("h5",{staticClass:"my-2"},[e._v("UNIT 12. GRAMAR BOOSTER 1: Focusing adverbs only, just, even, too, as well, also")]),n("h6",{staticClass:"my-2"},[e._v("I. Circle the best option.")]),n("mod1",{attrs:{list:e.lista1}}),n("h6",{staticClass:"my-2"},[e._v("II. MULTIPLE CHOICE")]),n("mod2",{attrs:{list:e.lista2}}),n("h5",{staticClass:"my-6"},[e._v("UNIT 12. VOCABULARY BOOSTER")]),n("h6",{staticClass:"my-3"},[e._v("I. Cross out the word that does not belong in each group..")]),n("mod3",{attrs:{list:e.lista3}}),n("h6",{attrs:{CLASS:"my-3"}},[e._v("II. SORTING: Complete the chart with words from the box.")]),n("mod4",{attrs:{list:e.lista3}})],1)},k=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mod1 my-2"},[n("ol",{attrs:{type:"1"}},e._l(e.list,function(e,t){return n("li",{staticClass:"my-3"},[n("m1-item",{attrs:{sentence:e.sentence,options:e.options}})],1)}))])},S=[],I=(n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"inlineSelect"},e._l(e.options,function(t,o){return n("span",[n("span",{staticClass:"spanOption",class:{selectedClass:e.selectedIndex===o},on:{click:function(t){e.click(o)}}},[e._v(e._s(t))]),e._v("\n            "+e._s(o+1<e.options.length?" / ":"")+"\n    ")])}))}),O=[],E=(n("c5f6"),n("dc53"),n("6885"),{name:"M1Item",components:{},props:{options:Array,groupOptions:Number},data:function(){return{selectedIndex:-1}},computed:{replaced:function(){}},methods:{click:function(e){this.selectedIndex=e,this.$emit("changedIndexSelected",this.groupOptions,e)}},mounted:function(){}}),M=E,A=(n("ac1f"),Object(s["a"])(M,I,O,!1,null,"5d70ab5c",null));A.options.__file="InlineSelect.vue";var T,$,P=A.exports,R={name:"M1Item",components:{InlineSelect:P},render:function(e){var t=this,n=this.sentence.split(/(###)/g),o=0;return n=n.map(function(n){if(console.log(n),"###"===n){var r="inline-select",a={options:t.options[o],groupOptions:o};return o++,n=e(r,{props:a}),n}return n}),e("div",n)},props:{sentence:String,options:Array},data:function(){return{}}},H=R,L=(n("766d"),Object(s["a"])(H,T,$,!1,null,"0362053e",null));L.options.__file="M1Item.vue";var X=L.exports,N={name:"Mod1",components:{M1Item:X},props:{list:Array},data:function(){return{}},computed:{},methods:{},mounted:function(){}},W=N,B=(n("1b15"),Object(s["a"])(W,C,S,!1,null,"e97a9714",null));B.options.__file="Mod1.vue";var F=B.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mod2"},[n("ol",{attrs:{type:"1"}},e._l(e.list,function(e,t){return n("li",{staticClass:"my-3"},[n("m2-item",{attrs:{sentence:e.sentence,options:e.options,nameRadio:"m2"+t}})],1)}))])},U=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m2item"},[n("span",{domProps:{innerHTML:e._s(e.replaced)}}),n("ol",{attrs:{type:"a"}},e._l(e.options,function(t,o){return n("li",[n("label",[n("input",{attrs:{name:e.nameRadio,type:"radio"}}),n("span",{on:{click:function(t){e.click(o)}}},[e._v(e._s(e.concatenate(t)))])])])}))])},G=[],q=(n("a481"),n("ac6a"),{name:"M2Item",components:{},props:{options:Array,sentence:String,nameRadio:String},data:function(){return{toReplace:"________",newString:"",selectedIndex:-1}},computed:{replaced:function(){var e=this;return console.log("replaced"),this.newString=this.sentence,-1===this.selectedIndex?this.options[0].forEach(function(t){return e.newString=e.newString.replace("###",e.toReplace)}):this.options[this.selectedIndex].forEach(function(t){return e.newString=e.newString.replace("###",e.getSpan(t))}),this.newString}},methods:{click:function(e){this.selectedIndex=e},getSpan:function(e){return'<span class="bold">'+e+"</span>"},concatenate:function(e){var t="",n="";return e.forEach(function(e){n+=t+e,t=" - "}),n}},mounted:function(){console.log("mounted")}}),J=q,Y=(n("6dde"),Object(s["a"])(J,V,G,!1,null,"65b4acbe",null));Y.options.__file="M2Item.vue";var D=Y.exports,Q={name:"Mod2",components:{M2Item:D},props:{list:Array},data:function(){return{}},computed:{},methods:{actualizar:function(){}},mounted:function(){}},K=Q,Z=(n("34cb"),Object(s["a"])(K,z,U,!1,null,"4deb0a30",null));Z.options.__file="Mod2.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mod3"},[n("ol",{attrs:{type:"1"}},e._l(e.list,function(e,t){return n("li",{staticClass:"liMod3 my-1",attrs:{onmouseover:"this.style.backgroundColor='#EAEFF1'",onmouseleave:"this.style.backgroundColor='inherit'"}},[n("m3-item",{attrs:{options:e.options,nameRadio:"m3"+t}})],1)}))])},ne=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m3item"},e._l(e.options,function(t,o){return n("span",{staticClass:"labelOption",class:{selectedClass:e.selectedIndex===o},on:{click:function(t){e.click(o)}}},[e._v(e._s(t))])}))},re=[],ae={name:"M3Item",components:{},props:{options:Array,nameRadio:String},data:function(){return{toReplace:"________",newString:"",selectedIndex:-1}},computed:{replaced:function(){var e=this;return console.log("replaced"),this.newString=this.sentence,-1===this.selectedIndex?this.options[0].forEach(function(t){return e.newString=e.newString.replace("###",e.toReplace)}):this.options[this.selectedIndex].forEach(function(t){return e.newString=e.newString.replace("###",e.getSpan(t))}),this.newString}},methods:{click:function(e){this.selectedIndex=e},getSpan:function(e){return'<span class="bold">'+e+"</span>"}},mounted:function(){console.log("mounted")}},se=ae,ie=(n("8358"),Object(s["a"])(se,oe,re,!1,null,"e070dcee",null));ie.options.__file="M3Item.vue";var le=ie.exports,ce={name:"Mod3",components:{M3Item:le},props:{list:Array},data:function(){return{}},computed:{},methods:{actualizar:function(){}},mounted:function(){}},ue=ce,pe=(n("5610"),Object(s["a"])(ue,te,ne,!1,null,"4e2203b8",null));pe.options.__file="Mod3.vue";var de=pe.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mod4"},[n("div",{staticClass:"borderXXX border-red-lightXXX text-center p-1"},[n("draggable",{staticClass:"dragArea border border-green-light p-2",staticStyle:{"min-height":"8em","max-width":"45.5em",margin:"0 auto","text-align":"center"},attrs:{options:{group:"people"}},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},e._l(e.list,function(t){return n("div",{staticClass:"bg-blue-lightest border border-blue-light cursor-move we-14 inline-block text-center m-1"},[e._v(e._s(t.name)+"\n            ")])}))],1),n("hr"),n("div",{staticClass:"borderxxx border-indigoXXX text-center",staticStyle:{"vertical-align":"middle"}},[n("div",{staticClass:"inline-block text-center mx-1 we-15",staticStyle:{"vertical-align":"middle"}},[n("h6",[e._v("Things in the house")]),n("draggable",{staticClass:"dragArea border border-blue-green h-32 text-center",attrs:{options:{group:"people"}},model:{value:e.list2,callback:function(t){e.list2=t},expression:"list2"}},e._l(e.list2,function(t){return n("div",{staticClass:"bg-blue-lightest border border-blue-light cursor-move we-14 inline-block text-center m-1"},[e._v(e._s(t.name)+"\n                ")])}))],1),n("div",{staticClass:"inline-block text-center mx-1 we-15",staticStyle:{"vertical-align":"middle"}},[n("h6",[e._v("Things in the house")]),n("draggable",{staticClass:"dragArea border border-blue-green h-32 text-center",attrs:{options:{group:"people"}},model:{value:e.list3,callback:function(t){e.list3=t},expression:"list3"}},e._l(e.list3,function(t){return n("div",{staticClass:"bg-blue-lightest border border-blue-light cursor-move we-14 inline-block text-center m-1"},[e._v(e._s(t.name)+"\n                ")])}))],1),n("div",{staticClass:"inline-block text-center mx-1 we-15",staticStyle:{"vertical-align":"middle"}},[n("h6",[e._v("Things in the house")]),n("draggable",{staticClass:"dragArea border border-blue-green h-32 text-center",attrs:{options:{group:"people"}},model:{value:e.list4,callback:function(t){e.list4=t},expression:"list4"}},e._l(e.list4,function(t){return n("div",{staticClass:"bg-blue-lightest border border-blue-light cursor-move we-14 inline-block text-center m-1"},[e._v(e._s(t.name)+"\n                ")])}))],1)])])},me=[],ve=n("ade3"),he=[];function be(e){he.push({name:e})}be("loan"),be("grant"),be("carpet"),be("tap"),be("handyman"),be("maid"),be("caterer"),be("roof"),be("debt"),be("investment"),be("shelf"),be("au pair");var ge=he,_e=n("1516"),ye=n.n(_e),we={name:"Quiz12p2VB",components:{draggable:ye.a},props:{msg:String},data:function(){var e;return e={list:ge,list1:[],list3:[]},Object(ve["a"])(e,"list3",[]),Object(ve["a"])(e,"list4",[]),Object(ve["a"])(e,"list2",[]),e},computed:{dataParseada:function(){}},methods:{add:function(){console.log("aaaaaa"),this.list.push({name:"aaa"})},replace:function(){console.log("bbbbb"),this.list=[{name:"bbb"}]}},mounted:function(){}},xe=we,je=(n("b28e"),Object(s["a"])(xe,fe,me,!1,null,null,null));je.options.__file="Mod4.vue";var ke=je.exports,Ce=[];function Se(e,t){Ce.push({sentence:e,options:t})}Se("Laura was ### here a moment ago. Had you come earlier, you would have seen her.",[["only","just","even"]]),Se("I always get up early. I ### get up early on Sundays.",[["only","just","even"]]),Se("He is smart, and he is a diligent employee ###.",[["as well","also","only"]]),Se("They're from Italy. My friend is ### from Italy.",[["only","as well","also"]]),Se("I've ### finished a big project that I'd been working on for months.",[["only","just","even"]]);var Ie=Ce,Oe=[];function Ee(e,t){Oe.push({sentence:e,options:t,newSentence:"",selected:-1})}Ee("We are ### going away for two days. It's a short trip.",[["even"],["only"],["too"],["as well"]]),Ee("Give me some toast and the butter, ### please.",[["as well"],["only"],["just"],["also"]]),Ee("My wife is a diligent engineer. I am a diligent engineer ###.",[["just"],["also"],["only"],["too"]]),Ee("He always wears a coat, ### in summer when it's so hot.",[["only"],["too"],["just"],["even"]]),Ee("She not only sing; she ### plays the violin.",[["only"],["as well"],["also"],["just"]]);var Me=Oe,Ae=[];function Te(e,t){Ae.push({sentence:e,options:t})}Te("###",["hard up","poor","ubiquitous"]),Te("###",["take out money","lend","borrow"]),Te("###",["pricey","reasonable","cheap"]),Te("###",["earnings","raid","income"]),Te("###",["loaded","rich","bustling"]),Te("###",["gain","prospect","profit"]),Te("###",["accuracy","abundance","plenty"]),Te("###",["prompt","early","mutual"]),Te("###",["excess","greed","desire"]),Te("###",["hang","owe","plaster"]);var $e=Ae,Pe={name:"Practice",components:{Mod1:F,Mod2:ee,Mod3:de,Mod4:ke},data:function(){return{lista1:Ie,lista2:Me,lista3:$e}}},Re=Pe,He=(n("cb54"),Object(s["a"])(Re,j,k,!1,null,null,null));He.options.__file="Practice.vue";var Le=He.exports;o["a"].use(u["a"]);var Xe=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:x},{path:"/practice",name:"practice",component:Le},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("def6"),n("493b"),n("185b"),n("38a1"),n("a85e");o["a"].config.productionTip=!1,new o["a"]({router:Xe,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},"6dde":function(e,t,n){"use strict";var o=n("aa94"),r=n.n(o);r.a},"741b":function(e,t,n){},"766d":function(e,t,n){"use strict";var o=n("d878"),r=n.n(o);r.a},8358:function(e,t,n){"use strict";var o=n("2fb5"),r=n.n(o);r.a},"9dab":function(e,t,n){},aa94:function(e,t,n){},ac1f:function(e,t,n){"use strict";var o=n("4616"),r=n.n(o);r.a},b28e:function(e,t,n){"use strict";var o=n("741b"),r=n.n(o);r.a},bb4d:function(e,t,n){},bc93:function(e,t,n){},cb54:function(e,t,n){"use strict";var o=n("bc93"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d878:function(e,t,n){},def6:function(e,t,n){},ec2c:function(e,t,n){}});
//# sourceMappingURL=app.1f1b8ac4.js.map