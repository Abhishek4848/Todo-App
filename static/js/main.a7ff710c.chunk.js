(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(25),a(7));a(26);var s=function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"My Todo")),l.a.createElement("span",{className:"btn"},l.a.createElement(o.b,{to:"/Todo"},l.a.createElement("button",{className:"button"},"See my TODO list"))))},m=a(11),u=a(12);a(32);var i=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],E=s[1],d=Object(n.useState)(!1),b=Object(u.a)(d,2),p=b[0],h=b[1];return Object(n.useEffect)((function(){i.length>25?h(!0):h(!1)}),[i]),l.a.createElement("div",null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"TODO")),l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"button"},"Click here to go to Home page")),l.a.createElement("div",{className:"inp"},l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!p){var t=Object(m.a)(a);t.push(i),c(t),E("")}}},l.a.createElement("label",{className:"inputLabel"},"Add Item:",l.a.createElement("input",{type:"text",value:i,onChange:function(e){return E(e.target.value)},placeholder:"Enter task",className:"inputfield"})),l.a.createElement("input",{type:"submit",value:"submit",className:"submitbtn"}))),p?alert("Enter a short task name !!"):null,a.map((function(e,t){return l.a.createElement("section",{class:"card-list"},l.a.createElement("article",{class:"card",key:t},l.a.createElement("header",{class:"card-header"},l.a.createElement("p",null,(new Date).toLocaleString()),l.a.createElement("h2",null,e)),l.a.createElement("div",{class:"author-name"},l.a.createElement("div",{class:"author-name-prefix"},"Author"),"Jeff Delaney"),l.a.createElement("div",{class:"tags"},l.a.createElement("button",{onClick:function(){return function(e){if(!p){var t=Object(m.a)(a);t[e]=i,c(t)}}(t)},className:"editbtn"},"Edit"),l.a.createElement("button",{onClick:function(){return function(e){var t=Object(m.a)(a);t.splice(e,1),c(t)}(t)},className:"deletebtn"},"Delete"))))})))},E=a(1);var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/",exact:!0},l.a.createElement(s,null)),l.a.createElement(E.a,{path:"/Todo"},l.a.createElement(i,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a7ff710c.chunk.js.map