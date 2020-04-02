(this["webpackJsonpworkout-tracker"]=this["webpackJsonpworkout-tracker"]||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(56),o=a.n(r),i=(a(66),a(67),a(10)),u=a(1),l=a(18);a(68);var s=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1];function i(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")}function s(){o("")}return c.a.createElement(l.b,{to:e.link},c.a.createElement("button",{className:"navButton ".concat(r),onMouseEnter:i,onMouseLeave:s,onTouchStart:i,onTouchEnd:s},e.text))};a(73);var m=function(){return c.a.createElement("div",{className:"header"},c.a.createElement(s,{text:"HISTORY",link:"/history"}),c.a.createElement(s,{text:"CURRENT",link:"/"}),c.a.createElement(s,{text:"WEIGHT",link:"/weight"}))},f=a(9),d=a(14),E=a(25);a(74);var v=c.a.forwardRef((function(e,t){var a=Object(n.useState)(""),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){e.addToLift(e.name,o)}),[o]),c.a.createElement("div",{className:"inputBox"},c.a.createElement("label",{htmlFor:e.name},e.name),c.a.createElement("div",{className:"inputContainer",id:e.name+"Container"},c.a.createElement("input",{type:"text",id:e.name,value:o,onChange:function(e){i(e.target.value)},ref:t})))}));a(75);var b=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1];function i(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")}function l(){o("")}return c.a.createElement("button",{className:"button ".concat(r),id:e.id,onMouseEnter:i,onMouseLeave:l,onTouchStart:i,onTouchEnd:l,onClick:e.onClick},e.text)};a(76);var g=c.a.forwardRef((function(e,t){var a=Object(n.useState)([1]),r=Object(u.a)(a,2),o=r[0],i=r[1],l=Object(n.useState)({id:e.id}),s=Object(u.a)(l,2),m=s[0],g=s[1],h=Object(n.useRef)(null);function O(e,t){g(Object(E.a)({},m,Object(f.a)({},e,t)))}Object(n.useEffect)((function(){h.current.focus()}),[o]),Object(n.useEffect)((function(){e.addToWorkout(m)}),[m]);var p=o.map((function(e){return c.a.createElement(v,{name:"Set ".concat(e),key:e,ref:h,addToLift:O})}));return c.a.createElement("div",{className:"liftBox"},c.a.createElement(v,{name:"Lift",addToLift:O,ref:t}),c.a.createElement(v,{name:"Weight",addToLift:O}),p,c.a.createElement(b,{text:"ADD SET",id:"addSetButton",onClick:function(){var e=o.length+1;i((function(t){return[].concat(Object(d.a)(t),[e])}))}}))}));a(77);var h=function(e){function t(e){return e<10?"0".concat(e):e}for(var a=[],n=0;n<=59;n++)a.push(n);for(var r=a.map((function(e){return c.a.createElement("option",{key:e},t(e))})),o=[],i=0;i<=59;i++)o.push(i);var u=o.map((function(e){return c.a.createElement("option",{key:e},t(e))}));return c.a.createElement("form",null,c.a.createElement("select",{className:"timerInput",value:e.minutes,onChange:function(t){e.setMinutes(t.target.value)}},r),c.a.createElement("select",{className:"timerInput",value:e.seconds,onChange:function(t){e.setSeconds(t.target.value)}},u))};a(78);var O=function(e){var t=Object(n.useState)(e.minutes),a=Object(u.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(e.seconds),l=Object(u.a)(i,2),s=l[0],m=l[1],f=Date.now()+(6e4*e.minutes+1e3*e.seconds);function d(e){return e<10&&e>=0?"0".concat(e):e}function E(){m(d(Math.floor((f-Date.now())/1e3%60))),o(d(Math.floor((f-Date.now())/6e4%60)))}return Object(n.useEffect)((function(){var e;return E(),e=setInterval(E,1e3),function(){return clearInterval(e)}}),[]),c.a.createElement("div",{className:"timerDisplay"},c.a.createElement("p",null,"".concat(r," : ").concat(s)),void("00"===r&&"00"===s&&(alert("Times Up!"),e.setTimerIsRunning(!1))))};a(79);var p=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("00"),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)("00"),f=Object(u.a)(m,2),d=f[0],E=f[1],v=c.a.createElement(b,{text:"START",id:"startButton",onClick:function(){r(!0)}}),g=c.a.createElement(b,{text:"STOP",id:"stopButton",onClick:function(){r(!1)}});return c.a.createElement("div",{className:"timer"},a?c.a.createElement(O,{minutes:l,seconds:d,setTimerIsRunning:r}):c.a.createElement(h,{minutes:l,setMinutes:s,seconds:d,setSeconds:E}),a?g:v)};a(80);var j=function(){var e=Object(n.useState)([1]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(n.useRef)(null);function E(e){l.some((function(t){return t.id===e.id}))?s(l.map((function(t){return t.id===e.id?e:t}))):s([].concat(Object(d.a)(l),[e]))}Object(n.useEffect)((function(){m.current.focus()}),[a]);var v=a.map((function(e){return c.a.createElement(g,{key:e,id:e,ref:m,addToWorkout:E})}));return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"liftsContainer"},v,c.a.createElement(b,{text:"ADD LIFT",onClick:function(){var e=a.length+1;r((function(t){return[].concat(Object(d.a)(t),[e])}))}})),c.a.createElement(b,{text:"SAVE WORKOUT",id:"saveButton",onClick:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear(),c="".concat(t,"-").concat(a,"-").concat(n),r=Object(f.a)({},c,l),o=JSON.parse(localStorage.getItem("workoutHistory"))||[],i=[].concat(Object(d.a)(o),[r]);localStorage.setItem("workoutHistory",JSON.stringify(i))}}),c.a.createElement(p,null))};a(81),a(82),a(83);var S=function(e){return c.a.createElement("div",{className:"pastLift"},c.a.createElement("p",null,c.a.createElement("span",{className:"boldText"},"Lift:")," ",e.lift),c.a.createElement("p",null,c.a.createElement("span",{className:"boldText"},"Weight:")," ",e.weight,"lbs"),e.reps)};var k=function(e){var t=e.workoutArr.map((function(e){var t,a=[],n=Object.keys(e).length-2;for(t=1;t<n;t++)a.push(c.a.createElement("p",null,c.a.createElement("span",{className:"boldText"},"Set ",t,":")," ",e["Set ".concat(t)]," reps"));return c.a.createElement(S,{lift:e.Lift,weight:e.Weight,reps:a})}));return c.a.createElement("div",{className:"pastWorkout"},c.a.createElement("p",{className:"dateText"},e.date),c.a.createElement("div",{className:"pastLiftsContainer"},t))};var w=function(){var e=JSON.parse(localStorage.getItem("workoutHistory")),t=e?e.map((function(e){var t=Object.keys(e);return c.a.createElement(k,{date:t,workoutArr:e[t]})})):c.a.createElement("h1",null,"No workout history yet!");return c.a.createElement("div",{className:"history"},t)};a(84);var y=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],o=a[1],i=new Date,l=i.getMonth()+1,s=i.getDate(),m=i.getFullYear(),d="".concat(l,"-").concat(s,"-").concat(m);return c.a.createElement("div",{className:"inputBox"},c.a.createElement("label",{for:"weight"},"Current Weight"),c.a.createElement("div",{className:"inputContainer",id:"currentWeightContainer"},c.a.createElement("input",{type:"text",id:"weight",value:r,onChange:function(e){o(e.target.value)}})),c.a.createElement(b,{text:"SAVE",onClick:function(){var t=JSON.parse(localStorage.getItem("weightHistory"))||{},a=Object(E.a)({},t,Object(f.a)({},d,r));localStorage.setItem("weightHistory",JSON.stringify(a)),e.setWeightHistory(a)}}))},N=a(59);a(177);var T=function(e){var t={labels:Object.keys(e.weightHistory)||[],datasets:[{label:"Weight",data:Object.values(e.weightHistory)||[],borderColor:"rgb(100, 100, 100)",borderWidth:3,pointBackgroundColor:"rgb(100, 100, 100)"}]};return c.a.createElement("div",{className:"weightChart"},c.a.createElement(N.a,{data:t,options:{legend:{display:!1},scales:{xAxes:[{gridLines:{lineWidth:1,color:"rgb(0, 0, 0)"},ticks:{fontColor:"rgb(100, 100, 100)",fontSize:12,fontStyle:"bold"}}],yAxes:[{gridLines:{lineWidth:1,color:"rgb(0, 0, 0)"},ticks:{fontColor:"rgb(100, 100, 100)",fontSize:12,fontStyle:"bold",lineHeight:2}}]}}}))};a(178);var x=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("weightHistory"))||{}),t=Object(u.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"weightContainer"},c.a.createElement(y,{setWeightHistory:r}),c.a.createElement(T,{weightHistory:a}))};var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(j,null)),c.a.createElement(i.a,{path:"/history"},c.a.createElement(w,null)),c.a.createElement(i.a,{path:"/weight"},c.a.createElement(x,null))))};o.a.render(c.a.createElement(l.a,null,c.a.createElement(C,null)),document.getElementById("root"))},61:function(e,t,a){e.exports=a(179)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.45881607.chunk.js.map