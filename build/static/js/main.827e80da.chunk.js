(this["webpackJsonpphoto-viewer"]=this["webpackJsonpphoto-viewer"]||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),o=n(14),i=n(2),u=function(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h2",{className:"photo-header"},"Photo Viewer")),r.a.createElement(o.b,{to:"/add"},r.a.createElement("i",{className:"ri-add-line"})))},s=n(4),m=n(20),p=n(1),d=n.n(p),f=n(5),h=n(16),E=n.n(h),v=r.a.createContext(),b=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){i()}),[]);var o={headers:{"Content-Type":"application/json"}},i=function(){var e=Object(f.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/photos/",o);case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,l(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{isfavorite:!e.isfavorite}):e})),l(n),e.next=5,E.a.put("/api/photo/update/".concat(t),o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=4,E.a.delete("/api/photo/delete/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/api/photos/add",t,o);case 3:return e.next=5,i();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{getImages:c,toggleFavorite:u,deletePhoto:p,addPhoto:h}},e.children)},g=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null),l=function(){return r(!0)},o=function(){return r(!1)};return Object(a.useEffect)((function(){return c.current.addEventListener("mouseenter",l),c.current.addEventListener("mouseleave",o),function(){c.current.removeEventListener("mouseenter",l),c.current.removeEventListener("mouseleave",o)}}),[]),[n,c]},O=function(e){var t=g(),n=Object(s.a)(t,2),c=n[0],l=n[1],o=Object(a.useContext)(v),i=!0===e.img.isfavorite?"ri-heart-fill":"ri-heart-add-line",u=c&&r.a.createElement("i",{className:"".concat(i," favorite"),onClick:function(){return o.toggleFavorite(e.img.id)}}),m=Object(a.useState)("ri-delete-bin-line"),p=Object(s.a)(m,2),d=p[0],f=p[1],h=c&&r.a.createElement("i",{className:"".concat(d," trash"),onClick:function(){f("ri-delete-bin-fill"),o.deletePhoto(e.img.id)}});return r.a.createElement("div",{className:"".concat(e.className," image-container"),ref:l},r.a.createElement("img",{src:e.img.url,alt:e.img.description,className:"image-grid",tag:e.img.tag}),u,h)},j=function(e){return e>2?e%3===0?"big":e%2===0?"wide":"thumb":"big"},x=function(){var e=Object(a.useContext)(v).getImages,t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],l=n[1],o="";Object(a.useEffect)((function(){var t=e.map((function(e){return e}));l(t)}),[e]);var i=function(t){o=t.target.id,l("all"===o?e.map((function(e){return e})):e.filter((function(e){return e.tag===o})))},u=r.a.createElement("div",{className:"tag-header"},r.a.createElement("h1",{id:"all",onClick:i},"#All"),r.a.createElement("h1",{id:"other",onClick:i},"#Other"),r.a.createElement("h1",{id:"nature",onClick:i},"#Nature"),r.a.createElement("h1",{id:"city",onClick:i},"#City"));return r.a.createElement(r.a.Fragment,null,u,r.a.createElement("main",{className:"photos"},null!==c?c.map((function(e,t){return r.a.createElement(O,{key:e.id,img:e,className:j(t)})})):r.a.createElement("h1",null,"Loading...")))},y=n(33),k=function(){var e=Object(a.useContext)(v).addPhoto,t=Object(y.a)(),n=t.register,c=t.handleSubmit,l=t.errors;return r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",null,"Add A Photo"),r.a.createElement("p",null,"Simply enter the URL of a Photo you would like to add to library and click Submit."),r.a.createElement("form",{onSubmit:c((function(t,n){e(t),n.target.reset()}))},r.a.createElement("input",{type:"url",name:"url",placeholder:"Enter Picture URL",ref:n({required:!0,minLength:12})}),r.a.createElement("br",null),l.url&&r.a.createElement("span",{style:{color:"red"}},"You must enter a Photo URL."),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"description",placeholder:"Enter Picture Description",ref:n({required:!0,minLength:4,maxLength:24})}),r.a.createElement("br",null),l.description&&r.a.createElement("span",{style:{color:"red"}},"You must enter a Photo Description."),r.a.createElement("br",null),r.a.createElement("select",{name:"tag",ref:n({required:!0})},r.a.createElement("option",{value:""},"-- Select a Category ---"),r.a.createElement("option",{value:"other"},"Other"),r.a.createElement("option",{value:"nature"},"Nature"),r.a.createElement("option",{value:"city"},"City")),r.a.createElement("br",null),l.tag&&r.a.createElement("span",{style:{color:"red"}},"You must select a Photo Tag."),r.a.createElement("br",null),r.a.createElement("button",null,"Submit")))};var w=function(){return r.a.createElement(b,null,r.a.createElement(o.a,null,r.a.createElement(u,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(x,null)),r.a.createElement(i.a,{path:"/add"},r.a.createElement(k,null)))))};n(62);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.827e80da.chunk.js.map