(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},a={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f81a94d3"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1333e36b"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete s[t],h.parentNode.removeChild(h),n(i)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){s[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}a[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/where-to-watch-2/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"144c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._m(0),n("router-view"),n("div",{staticClass:"footer"},[t._t("footer",[t._m(1),t._m(2)])],2)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"WTW logo",src:n("cf05")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n        Site created by\n        "),n("a",{attrs:{href:"mailto:simon.wolf.lobo@gmail.com"}},[t._v("Simon Lobo")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n        Content licensed under\n        "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC 4.0")])])}],i=(n("5c0b"),n("2877")),o={},c=Object(i["a"])(o,s,a,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("MainPage")],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",[t._v("Movies")]),n("b-container",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{staticClass:"big"},[t._v("Search Movies")])]),n("b-col",{attrs:{sm:"6"}},[n("b-form-input",{attrs:{type:"text",placeholder:"Title, Actor, Director or Genre"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v("\n        Sort by / Ordenar por\n        "),n("b-form-select",{attrs:{options:t.sortBy,size:"small"},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}}),t.popular?n("b-form-select",{attrs:{options:t.descend},model:{value:t.asc,callback:function(e){t.asc=e},expression:"asc"}}):t._e()],1)],1),n("br"),n("b-row",{staticClass:"center"},[n("b-form-group",[n("b-form-checkbox-group",{attrs:{id:"servicebox",name:"service",options:t.options},model:{value:t.service,callback:function(e){t.service=e},expression:"service"}})],1)],1)],1),n("b-card-group",t._l(t.searchedMovies,function(e,r){return n("div",{key:r,staticClass:"movie"},[n("span",{staticStyle:{},attrs:{hidden:""}},[t._v(t._s(e["imdbScore"]=t.getScore(e.title,e.year)))]),n("b-card",{attrs:{"no-body":"","img-src":t.getPoster(e.title,e.year),"img-alt":"Movie poster","img-top":""}},[n("h4",{staticClass:"view-item",attrs:{slot:"header"},on:{click:function(n){t.showHide(e)}},slot:"header"},[t._v(t._s(e.title))]),e.visible?n("b-card-body",[n("p",{staticClass:"card-text"},[t._v(t._s(e.desc))])]):t._e(),e.visible?n("b-list-group",{attrs:{flush:""}},[t._l(e.starring,function(e,r){return n("b-list-group-item",{key:r},[n("span",{staticClass:"clickable",on:{click:function(n){t.searchAll(e)}}},[t._v(t._s(e))])])}),n("b-list-group-item",[n("span",{staticClass:"bold"},[t._v("Released:")]),t._v("\n            "+t._s(e.year)+"\n          ")]),n("b-list-group-item",[n("span",{staticClass:"bold"},[t._v("Director:")]),n("span",{staticClass:"clickable",on:{click:function(n){t.searchAll(e.director)}}},[t._v(t._s(" "+e.director))])])],2):t._e(),n("b-list-group",[null!=e.available[0]?n("b-list-group-item",{staticStyle:{"background-color":"#46bf68"}},[n("span",{staticClass:"bold"},[t._v("Available:")]),t._l(e.available,function(e,r){return n("span",{key:r},[1==r?n("span",{on:{click:function(n){t.searchAll(e)}}},[t._v("\n                ,\n                "),n("span",{staticClass:"stream"},[t._v(t._s(e))])]):n("span",{staticClass:"stream",on:{click:function(n){t.searchAll(e)}}},[t._v(t._s(" "+e))])])})],2):n("b-list-group-item",{staticStyle:{"background-color":"#bf464c"}},[n("span",{staticClass:"bold"},[t._v("Not available")])])],1),e.visible?n("b-card-body",[t._v("\n          IMBb:\n          "),n("a",{staticClass:"card-link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))]),n("p",[t._v("Tomato score:\n            "),n("span",{staticClass:"rating"},[t._v(t._s(t.getRating(e.title,e.year)))])]),n("p",[t._v("\n            IMDb Score:\n            "+t._s(e.imdbScore)+"\n          ")])]):t._e(),e.visible?n("b-card-footer",t._l(e.genre,function(r,s){return n("div",{key:s},[s!=e.genre.length-1?n("span",[n("span",{staticClass:"clickable",on:{click:function(e){t.searchAll(r)}}},[t._v(t._s(r))]),t._v(",\n            ")]):n("span",{staticClass:"clickable",on:{click:function(e){t.searchAll(r)}}},[t._v(t._s(r))])])}),0):t._e()],1)],1)}),0)],1)},f=[],v=(n("28a5"),n("a481"),n("6762"),n("2fdb"),n("ac6a"),n("55dd"),n("4917"),n("386d"),n("3b2b"),n("bc3a")),b=n.n(v),m={name:"MainPage",data:function(){return{service:[],sortBy:[{value:"pop",text:"High rated /Puntaje Alto"},{value:"_id",text:"Date Added / Fecha Agregada"},{value:"title",text:"Title / Título"},{value:"year",text:"Year / Año"}],sort:"_id",asc:-1,descend:[{value:1,text:"Ascending / Ascendiendo"},{value:-1,text:"Descending / Descendiendo"}],options:["Netflix","Amazon Prime"],movies:[],search:"",poster:[],ratings:[],imdb:[],popular:!0}},mounted:function(){this.init()},computed:{searchedMovies:function(){var t,e=new RegExp(this.search,"i");return""==this.search?this.movies.filter(function(n){return t=n.title.match(e),t}):this.movies.filter(function(n){t=n.title.match(e),t+=n.director.match(e);for(var r=0;r<n.starring.length;r++)t+=n.starring[r].match(e);for(var s=0;s<n.genre.length;s++)t+=n.genre[s].match(e);return t})}},watch:{service:{handler:function(){this.updateMovies()},deep:!0},sort:{handler:function(){this.updateMovies()},deep:!0},asc:{handler:function(){this.updateMovies()},deep:!0}},methods:{init:function(){var t=this;b()({method:"GET",url:"https://lobonode.ddns.net/api/"+this.sort+"/"+this.asc}).then(function(e){t.movies=e.data,t.movies.forEach(function(e){if(e.title.includes("&")){var n=e.title.replace("&","%26");t.fillIMDb(n,e.year)}else t.fillIMDb(e.title,e.year);e["visible"]=!1})})},fillIMDb:function(t,e){var n=this;b()({method:"GET",url:"https://www.omdbapi.com/?t="+t+"&apikey=dabd7b02&y="+e}).then(function(r){t.includes("%26")&&(t=t.replace("%26","&")),n.poster.push(t+" "+e+" "+r.data.Poster);try{n.ratings.push(t+" "+e+" "+r.data.Ratings[1].Value)}catch(s){n.ratings.push(t+" "+e+"   N/A")}n.imdb.push(t+" "+e+" "+r.data.imdbRating)})},getPoster:function(t,e){var n;return"Natalies Crazy Cats"==t?n="https://placekitten.com/g/300/450":this.poster.forEach(function(r){r.includes(t+" "+e)&&(n=r.split(t+" "+e+" ").pop())}),n},updateMovies:function(){var t=this;function e(t,e){return t.imdbScore<e.imdbScore?1:t.imdbScore>e.imdbScore?-1:0}"pop"==this.sort?(this.popular=!1,this.movies.sort(e)):this.service.length<1?b()({method:"GET",url:"https://lobonode.ddns.net/api/"+this.sort+"/"+this.asc}).then(function(e){t.movies=e.data}):1==this.service.length?b()({method:"GET",url:"https://lobonode.ddns.net/api/movies/"+this.service[0]+"/"+this.sort+"/"+this.asc}).then(function(e){t.movies=e.data}):2==this.service.length&&b()({method:"GET",url:"https://lobonode.ddns.net/api/movies/"+this.service[0]+"/"+this.service[1]+"/"+this.sort+"/"+this.asc}).then(function(e){t.movies=e.data}),this.search=this.search+" ",this.search=this.search.slice(0,-1)},getRating:function(t,e){var n;return"Natalies Crazy Cats"==t?n="100%":this.ratings.forEach(function(r){r.includes(t+" "+e)&&(n=r.split(t+" "+e+" ").pop())}),n},getScore:function(t,e){var n;return"Natalies Crazy Cats"==t?n="10.0":this.imdb.forEach(function(r){r.includes(t+" "+e)&&(n=r.split(t+" "+e+" ").pop())}),"N/A"==n&&(n="5.0"),n},searchAll:function(t){this.movies.forEach(function(t){t.visible=!1}),this.search=t,window.scrollTo(0,0)},showHide:function(t){t.visible=!t.visible,this.search=this.search+" ",this.search=this.search.slice(0,-1)}}},g=m,_=(n("905c"),Object(i["a"])(g,p,f,!1,null,"39012b28",null)),y=_.exports,k={name:"home",components:{MainPage:y}},C=k,w=Object(i["a"])(C,d,h,!1,null,null,null),x=w.exports;r["a"].use(u["a"]);var E=new u["a"]({mode:"history",base:"/where-to-watch-2/",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),A=n("9f7b");n("f9e3"),n("2dd8");r["a"].use(A["a"]),r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},"905c":function(t,e,n){"use strict";var r=n("144c"),s=n.n(r);s.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.55708e41.png"}});
//# sourceMappingURL=app.9b149dbb.js.map