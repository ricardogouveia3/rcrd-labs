(this["webpackJsonprcrd-labs"]=this["webpackJsonprcrd-labs"]||[]).push([[0],{13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(7),o=t.n(i),c=(t(18),t(1)),l=t(2),u=t(8),d=t.n(u);function f(){var n=Object(c.a)(["\n  color: #fff;\n  font-size: 6vw;\n  margin: 0;\n  line-height: .9;\n\n  span {\n    display: block;\n    color: #11d3b6;\n    letter-spacing: 4px;\n  }\n\n  @media screen and (max-width: 700px) {\n    font-size: 5em;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 80px;\n\n  p {\n    color: #fff;\n    text-align: left;\n    max-width: 37%;\n    font-weight: 300;\n    font-size: 14px;\n\n    @media screen and (max-width: 700px) {\n      max-width: unset;\n      text-align: center;\n    }\n  }\n\n  @media screen and (max-width: 700px) {\n    margin-top: 40px;\n    align-items: center;\n    flex-direction: column;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(c.a)(["\n  margin: 0 auto;\n  max-width: 1100px;\n\n  hr {\n    border: .5px solid #efefef;\n    margin-bottom: 20px;\n\n    @media screen and (max-width: 700px) {\n      width: 100%\n    }\n  }\n\n  img {\n    width: 70px;\n  }\n\n  @media screen and (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return m=function(){return n},n}function s(){var n=Object(c.a)(["\n  background-color: #4f4f4f;\n  padding: 40px;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n"]);return s=function(){return n},n}var x=l.a.header(s()),h=l.a.div(m()),g=l.a.div(p()),b=l.a.h1(f()),v=function(){return r.a.createElement(x,null,r.a.createElement(h,null,r.a.createElement("hr",null),r.a.createElement("img",{src:d.a,alt:""}),r.a.createElement(g,null,r.a.createElement(b,null,"RCRD",r.a.createElement("span",null,"LABS")),r.a.createElement("p",null,"Estes s\xe3o projetos experimentais e podem conter falhas de responsividade, acessibilidade e qualidade de software em geral. Tamb\xe9m podem fazer uso de tecnologias pouco suportadas sem oferecer fallback."))))},w=t(12);function E(){var n=Object(c.a)(["\n  margin: 0;\n  color: #ffffff;\n  line-height: 1.5;\n"]);return E=function(){return n},n}function j(){var n=Object(c.a)(["\n  font-size: 5vw;\n  color: #ffffff;\n  margin: 0;\n"]);return j=function(){return n},n}function y(){var n=Object(c.a)(["\n  transition: padding 0.3s ease;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 20px;\n\n  &:hover { padding-bottom: 40px; }\n"]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n  min-height: 50vh;\n  transition: opacity 0.3s ease;\n\n  &:hover { opacity: 0.9; }\n\n  @media screen and (max-width: 700px) { min-height: 30vh; }\n"]);return O=function(){return n},n}var k=l.a.li(O()),z=l.a.a(y()),B=l.a.h2(j()),A=l.a.p(E()),C=function(n){return r.a.createElement(k,{style:{backgroundColor:n.item.color}},r.a.createElement(z,{href:n.item.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(B,null,n.item.title),r.a.createElement(A,null,n.item.description)))};function F(){var n=Object(c.a)(["\n  display: flex;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px;\n  font-size: 16px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  min-width: 50px;\n  background-color: #11d3b6;\n  cursor: pointer;\n\n  @media (max-width: 700px) {\n    height: 40px;\n    width: 100%;\n    display: block;\n    font-size: 10px;\n  }\n"]);return F=function(){return n},n}function T(){var n=Object(c.a)(["\n  background-color: #F2F5F8;\n  border: none;\n  width: 100%;\n  height: 40px;\n  padding: 0 10px;\n  font-size: 16px;\n\n  ::placeholder {\n    font-weight: bold;\n    color: rgba(0, 0, 0, .4);\n\n    @media (max-width: 500px) {\n      font-size: 10px;\n    }\n  }\n"]);return T=function(){return n},n}function I(){var n=Object(c.a)(["\n  width: 100%;\n  position: relative;\n  display: flex;\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"]);return I=function(){return n},n}var J=l.a.div(I()),R=l.a.input(T()),S=l.a.button(F()),W=function(){return r.a.createElement(J,null,r.a.createElement(R,{placeholder:"Procure por t\xedtulo ou descri\xe7\xe3o de projetos"}),r.a.createElement(S,null,"Buscar"))};function q(){var n=Object(c.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, .75);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    color: #fff;\n    opacity: .6;\n    font-weight: bold;\n    text-align: center;\n  }\n"]);return q=function(){return n},n}var D=l.a.div(q()),L=function(){return r.a.createElement(D,null,r.a.createElement("p",null,"Essa funcionalidade est\xe1 em desenvolvimento"))};function M(){var n=Object(c.a)(["\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]);return M=function(){return n},n}function N(){var n=Object(c.a)(["\n  background-color: #fff;\n  padding: 40px;\n  box-shadow: 0 6px 15px -7px rgba(0,0,0,0.22);\n  position: relative;\n\n  @media (max-width: 500px) {\n    padding: 25px;\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(c.a)(["\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 40px;\n  padding: 40px 0;\n"]);return P=function(){return n},n}var $=l.a.main(P()),_=l.a.div(N()),G=l.a.ul(M()),H=function(){var n=Object(a.useState)([]),e=Object(w.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)((function(){fetch("https://api.rcrd.me/labs").then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]),r.a.createElement($,null,r.a.createElement(_,null,r.a.createElement(L,null),r.a.createElement(W,null)),r.a.createElement(_,null,r.a.createElement(G,null,t.map((function(n,e){return r.a.createElement(C,{item:n,key:e})})))))};function K(){var n=Object(c.a)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1100px;\n\n  hr {\n    border: .5px solid #efefef;\n    margin-bottom: 20px;\n\n    @media screen and (max-width: 700px) {\n      width: 100%\n    }\n  }\n\n  p {\n    color: #fff;\n    text-align: left;\n    font-weight: 300;\n    font-size: 14px;\n\n    @media screen and (max-width: 700px) { text-align: center; }\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(c.a)(["\n  background-color: #4f4f4f;\n  padding: 40px;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n"]);return Q=function(){return n},n}var U=l.a.footer(Q()),V=l.a.div(K()),X=function(){return r.a.createElement(U,null,r.a.createElement(V,null,r.a.createElement("hr",null),r.a.createElement("p",null,"Todo conte\xfado deste site est\xe1 sob licen\xe7a MIT.")))},Y=function(){return r.a.createElement("div",{className:"App",style:{backgroundColor:"#E8EAEE"}},r.a.createElement(v,null),r.a.createElement(H,null),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n,e,t){n.exports=t.p+"static/media/logo-w.204e3878.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.a7f655a8.chunk.js.map