(this["webpackJsonppoke-api-useeffect"]=this["webpackJsonppoke-api-useeffect"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),i=(n(19),n(2)),l=(n(20),n(3)),u=n.n(l),s=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){l(e.pokeName)}),[e.pokeName]);var l=function(e){console.log(e),u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))};return o.a.createElement("div",null,o.a.createElement("p",null,c.name),o.a.createElement("p",null,c.weight," Kg"),c.types&&o.a.createElement("p",null,c.types[0].type.name),c.sprites&&o.a.createElement("img",{src:c.sprites.front_default,alt:c.name}))},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),p=l[0],m=l[1];Object(a.useEffect)((function(){u.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){c(e.data.results)})).catch((function(e){console.log("err")}))}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("select",{onChange:function(e){m(e.target.value)}},o.a.createElement("option",{value:""},"Nenhum"),n.map((function(e){return o.a.createElement("option",{key:e.name,value:e.name},e.name)}))),p&&o.a.createElement(s,{pokeName:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.78999c31.chunk.js.map