(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{28:function(a,e,t){},53:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(20),s=t.n(r),i=(t(28),t(10),t(23)),l=t(21),b=t.n(l),o=t(5),d=t(1);var j=function(){var a=Object(n.useState)([]),e=Object(i.a)(a,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(a){c(a.data)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:t.map((function(a){return Object(d.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},children:a.name})}))})})]})})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsx)(j,{})})})},p=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),p()}},[[53,1,2]]]);
//# sourceMappingURL=main.597ce29a.chunk.js.map