(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),u=n(1),i=n.n(u),l=n(4),s=n(5),d=n(6),f=n(8),m=n(7);n(15);function p(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))}function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){return g().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},y=function(){return g().then((function(t){return t.filter((function(t){return"red"===t.color}))}))};function b(t){var e=t.addGoods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return e(g)}},"Load All goods"),r.a.createElement("button",{type:"button",onClick:function(){return e(h)}},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:function(){return e(y)}},"Load red goods"))}var v=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:null},t.addGoods=function(){var e=Object(l.a)(i.a.mark((function e(n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,t.setState({goods:o});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.goods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement(b,{addGoods:this.addGoods}),r.a.createElement("div",null,t&&r.a.createElement(p,{goods:t})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3727f8a4.chunk.js.map