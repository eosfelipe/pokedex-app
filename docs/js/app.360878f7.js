(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3b17591b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pokedex-app/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0022":function(t,e,n){},"359c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="},"3a18":function(t,e,n){t.exports=n.p+"img/pikachu.213ea4ec.gif"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.loading?a("div",{staticClass:"loader text-center"},[a("div",{staticClass:"loader-inner"},[a("b-img",{attrs:{src:n("3a18"),fluid:"",alt:"pika-pika"}}),a("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("Loading...")])],1)]):t._e(),a("b-navbar",{attrs:{toggleable:"md",variant:"danger",type:"dark",fixed:"top"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v(" PokeDex App ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{to:"/about"}},[t._v("League")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"\nGotta Catch 'Em All"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),a("b-nav-item",[a("a",{attrs:{href:"https://github.com/eosfelipe/pokedex-app",target:"_blank"}},[a("b-img",{staticClass:"d-inline-block align-top",attrs:{src:n("359c"),fluid:"",alt:"pokeball"}})],1)])],1)],1)],1),a("router-view"),a("footer",{staticClass:"bg-danger text-white"},[a("div",{staticClass:"container py-5"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-6 col-md-6 .offset-md-6 text-center"},[a("b-img",{staticClass:"lugia",attrs:{src:n("e6ac"),fluid:"",alt:"lugia"}})],1)])]),a("div",{staticClass:"bg-light py-4"},[a("div",{staticClass:"container text-center"},[a("p",{staticClass:"text-muted mb-0 py-2"},[t._v(" © "+t._s(t.ano)+" @eosfelipe All rights reserved. ")])])])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-6 col-md-6"},[n("p",{staticClass:"font-italic text-center align-middle pt-70"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio tempora inventore dolorum distinctio sapiente sequi voluptatum, maxime fugiat reprehenderit vero blanditiis unde doloribus obcaecati cum magnam qui exercitationem deserunt. ")]),n("ul",{staticClass:"list-inline mt-4"},[n("li",{staticClass:"list-inline-item"},[n("a",{attrs:{href:"#",target:"_blank",title:"twitter"}},[n("i",{staticClass:"fa fa-twitter"})])])])])}],o={data:function(){return{loading:!1,ano:(new Date).getFullYear()}},methods:{start:function(){console.log("start"),this.loading=!0},finish:function(){var t=this;setTimeout((function(){t.loading=!1,console.log("finish")}),4e3)}},mounted:function(){this.start(),this.finish()}},s=o,c=(n("de59"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,"33ad5189",null),u=l.exports,d=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-5"},[n("div",{staticClass:"px-lg-5 pt-70"},[n("div",{staticClass:"row"},t._l(t.sortedArray,(function(e){return n("div",{key:e.id,staticClass:"col-xl-3 col-lg-4 col-md-6 mb-4"},[n("div",{staticClass:"bg-white rounded shadow"},[n("b-img",{attrs:{src:""+e.img,fluid:""}}),n("div",{staticClass:"p-4"},[n("h5",[t._v("#"+t._s(e.id))]),n("h5",[n("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(" "+t._s(t._f("capitalize")(e.name))+" ")])]),n("p",{staticClass:"small text-muted mb-0"},[t._v("Base EXP: "+t._s(e.base_experience))]),n("div",{staticClass:"d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"},t._l(e.types,(function(e,a){return n("div",{key:a,staticClass:"badge badge-info px-3 rounded-pill font-weight-normal"},[t._v(t._s(e.type.name))])})),0)])],1)])})),0)])])},m=[],b=(n("4160"),n("fb6a"),n("b0c0"),n("25f0"),n("159b"),n("96cf"),n("1da1")),f=n("bc3a"),g=n.n(f),v={name:"Home",components:{},data:function(){return{kantoPokemon:[],pokemon:{id:String,order:String,name:String,base_experience:String,img:String,types:[]}}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},computed:{sortedArray:function(){function t(t,e){return t.order<e.order?-1:t.order>e.order?1:0}return this.kantoPokemon.sort(t)}},mounted:function(){var t=this;this.$nextTick((function(){t.getKantoPokemon()}))},methods:{getKantoPokemon:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://pokeapi.co/api/v2/pokemon?limit=151");case 3:n=e.sent,n.data.results.forEach((function(e){t.getPokeData(e)})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0,"Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPokeData:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.url,n.prev=1,n.next=4,g.a.get(a);case 4:r=n.sent,e.pokemon=new Object,e.pokemon.id=r.data.id,e.pokemon.order=r.data.order,e.pokemon.name=r.data.name,e.pokemon.base_experience=r.data.base_experience,e.pokemon.img="https://pokeres.bastionbot.org/images/pokemon/"+r.data.id+".png",e.pokemon.types=r.data.types,e.kantoPokemon.push(e.pokemon),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](1),console.log(n.t0,"Something went wrong!");case 18:case"end":return n.stop()}}),n,null,[[1,15]])})))()}}},h=v,k=(n("cccb"),Object(c["a"])(h,p,m,!1,null,null,null)),A=k.exports;a["default"].use(d["a"]);var w=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new d["a"]({mode:"history",base:"/pokedex-app/",routes:w}),x=y,C=n("5f5b"),J=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(C["a"]),a["default"].use(J["a"]),a["default"].config.productionTip=!1,new a["default"]({router:x,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},cccb:function(t,e,n){"use strict";var a=n("5ced"),r=n.n(a);r.a},de59:function(t,e,n){"use strict";var a=n("0022"),r=n.n(a);r.a},e6ac:function(t,e,n){t.exports=n.p+"img/footer-lugia.6416edcf.png"}});
//# sourceMappingURL=app.360878f7.js.map