(this.webpackJsonpreact_todo_application=this.webpackJsonpreact_todo_application||[]).push([[0],{34:function(t,e,a){t.exports=a(80)},39:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},76:function(t,e,a){},77:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(21),r=a.n(c),l=(a(39),a(4)),s=a(5),u=a(7),i=a(6),d=a(8),m=a(9),h=a.n(m),p=a(22),b=a.n(p),f=(a(42),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"col- top-image"},o.a.createElement("div",{className:"logo image"}))}}]),e}(n.Component)),y=(a(43),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-12 title input-group mb-3 col- col-sm-"},o.a.createElement("h4",null,"Make your Shopping List"))}}]),e}(n.Component)),g=a(31),v=a.n(g),E=a(32),w=a.n(E),N=(a(76),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={newItemText:"",date:new Date,qty:0},a.updateNewItemText=function(t){a.setState({newItemText:t.target.value})},a.handleDateChange=function(t){console.log(t),a.setState({date:t})},a.handleQuantity=function(t){console.log(t),a.setState({qty:t})},a.handleKeyPress=function(t){"Enter"===t.key&&(a.state.qty<=0||a.state.newItemText.length<=0?alert("Add at least one product"):null===a.state.date?alert("Date required"):(a.props.addNewProductFunc(a.state.newItemText,a.state.date,a.state.qty),a.setState({newItemText:"",qty:0,date:new Date})))},a.handleClick=function(t){t.preventDefault(),a.state.qty<=0?alert("Add at least one product"):null===a.state.date?alert("Date required"):(a.props.addNewProductFunc(a.state.newItemText,a.state.date,a.state.qty),a.setState({newItemText:"",qty:0,date:new Date}))},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"input-group input"},o.a.createElement("div",{className:"form-group mx-sm-3 mb-2 d-flex justify-content-center flex-wrap"},o.a.createElement("input",{className:"form-control input-bar",type:"text",placeholder:"Product name",value:this.state.newItemText,onChange:this.updateNewItemText,onKeyPress:this.handleKeyPress}),o.a.createElement(w.a,{className:"form-control",onChange:this.handleQuantity,onKeyPress:this.handleKeyPress,value:this.state.qty,min:0,inputMode:"numeric",mobile:"true",style:{btnDown:{background:"#f04048"},btnUp:{background:"#f04048"},minus:{background:"#ffff"},plus:{background:"#ffff"},"btn:hover":{background:"#929292"}}}),o.a.createElement("div",{className:"calendar"},o.a.createElement(v.a,{onChange:this.handleDateChange,onKeyPress:this.handleKeyPress,value:this.state.date,format:"dd-MM-y",required:"true"}))),o.a.createElement("div",{className:"button d-flex justify-content-center"},o.a.createElement("button",{type:"button",className:"buttons show",onClick:this.handleClick,disabled:0===this.state.newItemText.length},o.a.createElement("i",{className:"fas fa-cart-plus add-icon"}))),o.a.createElement("div",{className:"button d-none d-md-block "},o.a.createElement("button",{type:"button",className:"add-button",onClick:this.handleClick,disabled:0===this.state.newItemText.length},"Add")))}}]),e}(n.Component)),x=(a(77),a(33)),k=a.n(x),j=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t={color:k()(),fontSize:"32px",border:"5px solid",borderRadius:"50%",padding:"0.5% 1.5%",marginLeft:"30%"};return o.a.createElement("div",{className:"row d-none d-md-block"},o.a.createElement("div",{className:"col intro-component"},o.a.createElement("h4",null,o.a.createElement("span",{style:t},this.props.count)," Products to buy from the list:")))}}]),e}(n.Component),O=(a(78),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).handleDelete=function(t){console.log("button was clicked",t),a.props.deleteProductFunc(a.props.id)},a.handleBought=function(t){a.props.boughtProductFunc(a.props.id)},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"row d-flex justify-content-center text"},o.a.createElement("div",{className:"col-1 arrow-align"},o.a.createElement("p",null," ",o.a.createElement("i",{className:"fas fa-angle-right arrow"}))),o.a.createElement("div",{className:this.props.bought?"d-none d-md-block":"col-3 col-sm-1 d-flex align-self-center text-product-buy"},o.a.createElement("p",null,!this.props.bought&&this.props.text)),o.a.createElement("div",{className:this.props.bought?"col-3 col-sm-2":"col-3 col-sm-2 d-flex justify-content-center"},o.a.createElement("p",null," ",this.props.bought?this.props.text:"Qty: ".concat(this.props.quantity))),o.a.createElement("div",{className:this.props.bought?"d-none d-md-block":"col-5 col-sm-2 d-flex align-self-center"},o.a.createElement("p",null," ",!this.props.bought&&"Buy: ".concat(this.props.dueBy))),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",{className:"col-6 show left"},!this.props.bought&&o.a.createElement("button",{type:"button",className:"buttons",onClick:this.handleBought},o.a.createElement("i",{className:"fas fa-check-circle check-icon"}))),o.a.createElement("div",{className:this.props.bought?"col-12 show right":"col-6 show"},o.a.createElement("button",{type:"button",className:"buttons",onClick:this.handleDelete},o.a.createElement("i",{className:"fas fa-times-circle cruz-icon"})))),o.a.createElement("div",{className:"col-2 d-none d-md-block"},!this.props.bought&&o.a.createElement("button",{type:"button",className:"done-button",onClick:this.handleBought},"Done ")),o.a.createElement("div",{className:" col-2 d-none d-md-block"},o.a.createElement("button",{type:"button",className:"del-button",onClick:this.handleDelete},"Delete")))}}]),e}(n.Component)),P=(a(79),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={products:[{text:"Tomato",quantity:2,bought:!0,date:"2019-10-27",id:h()(),dueBy:"2019-11-30"},{text:"Avocado",quantity:3,bought:!0,date:"2019-10-28",id:h()(),dueBy:"28-12-2019"},{text:"Bread",quantity:1,bought:!1,date:"2019-11-03",id:h()(),dueBy:"01-12-2019"},{text:"Water",quantity:3,bought:!1,date:"2019-10-29",id:h()(),dueBy:"08-12-2019"},{text:"Beer",quantity:6,bought:!0,date:"2019-10-21",id:h()(),dueBy:"20-12-2019"},{text:"Pizza",quantity:1,bought:!1,date:"2019-10-22",id:h()(),dueBy:"21-12-2019"}]},a.addNewProduct=function(t,e,n){var o=a.state.products.slice(),c={text:t,bought:!1,date:b()().format("YYYY-MM-DD"),id:h()(),dueBy:b()(e).format("DD-MM-YYYY"),quantity:n};o.push(c),a.setState({products:o})},a.deleteProduct=function(t){console.log(t);var e=a.state.products.filter((function(e){return e.id!==t}));console.log(e),a.setState({products:e})},a.boughtProduct=function(t){console.log("This id is "+t);var e=a.state.products.map((function(e){return e.id===t&&(e.bought=!0),e}));a.setState({products:e})},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.products.filter((function(t){return t.bought})),a=this.state.products.filter((function(t){return!t.bought}));return console.log(e),console.log(a),o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement(N,{addNewProductFunc:this.addNewProduct}),o.a.createElement(j,{count:a.length}),a.map((function(e){return o.a.createElement(O,{text:e.text,bought:e.bought,quantity:e.quantity,key:e.id,id:e.id,deleteProductFunc:t.deleteProduct,boughtProductFunc:t.boughtProduct,dueBy:e.dueBy})})),o.a.createElement("h5",{className:"title"},"You have bought ",e.length," products: "),e.map((function(e){return o.a.createElement(O,{text:e.text,bought:e.bought,key:e.id,id:e.id,deleteProductFunc:t.deleteProduct,dueBy:e.dueBy})})))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.e2d2f335.chunk.js.map