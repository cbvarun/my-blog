(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/landing.2433c62c.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/about.e740a0ff.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/contactus.aaa47e84.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/honey-art.6ccace7f.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/CLogo.605580e3.PNG"},49:function(e,t,a){e.exports=a.p+"static/media/card-cart.8b0e9c4f.png"},58:function(e,t,a){e.exports=a(88)},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){var n={"./CLogo.PNG":41,"./CompanyLogo.png":80,"./about.jpg":37,"./card-cart.png":49,"./card-company.png":81,"./card-contact.png":82,"./cart.jpg":83,"./contactus.jpg":38,"./honey-art.jpg":39,"./landing.jpg":36};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=79},80:function(e,t,a){e.exports=a.p+"static/media/CompanyLogo.c82d014c.png"},81:function(e,t,a){e.exports=a.p+"static/media/card-company.9a636fd8.png"},82:function(e,t,a){e.exports=a.p+"static/media/card-contact.ab54ccfd.png"},83:function(e,t,a){e.exports=a.p+"static/media/cart.da3147f9.jpg"},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);a(59),a(60);var n=a(0),c=a.n(n),o=a(18),r=a.n(o),l=(a(65),a(19)),s=a(7),m=(a(66),a(36)),i=a.n(m),u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"c-home-section"},c.a.createElement("div",{className:"c-home-section-top",style:{opacity:1,transform:"translate(0px, 0px)"}},c.a.createElement("div",{className:"c-home-section-top-imgParent"},c.a.createElement("img",{alt:"home Us",className:"c-home-section-img",src:i.a}))),c.a.createElement("div",{className:"c-home-section-bottom"},c.a.createElement("div",{className:"c-home-bg-white",style:{transform:"translate(0px, 0%)"}}),c.a.createElement("div",{className:"c-home-section-text"},c.a.createElement("div",null,c.a.createElement("p",{className:"c-home-section-p"},"We do our part for every 100 transactions!!! ",c.a.createElement("br",null))),c.a.createElement("div",{className:"c-home-section-botton-btn"},c.a.createElement(l.b,{className:"btn btn-primary",to:"/products-list"},"Discover Products"))))))},p=(a(72),a(37)),d=a.n(p),f=a(38),E=a.n(f),g=a(44),h=a.n(g),b=a(51),v=a(15),y=a(101),N=a(104),x=(a(74),function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),l=Object(v.a)(r,2),s=l[0],m=l[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)(!1),E=Object(v.a)(f,2),g=E[0],x=E[1],w=Object(n.useState)(""),j=Object(v.a)(w,2),C=j[0],O=j[1],k=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/enquiry",{method:"post",body:JSON.stringify({name:a,email:s,message:p}),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent.status,o(""),m(""),d(""),O("Thanks for contacting us, we will get back to you shortly."),x(!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"c-contact-form"},c.a.createElement("form",{id:"contact-form",method:"POST"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){return o(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),c.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:s,onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{className:"form-control",rows:"5",value:p,onChange:function(e){return d(e.target.value)}})),c.a.createElement(y.a,{onClick:function(){return k()}},"Submit"),c.a.createElement(N.a,{show:g,onClose:function(){return x(!g)},delay:5e3,autohide:!0,style:{position:"absolute",top:0,right:0}},c.a.createElement(N.a.Header,null,c.a.createElement("strong",{className:"mr-auto"},"Notification")),c.a.createElement(N.a.Body,null,C))))}),w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"c-about-section"},c.a.createElement("div",{className:"c-about-section-top",style:{opacity:1,transform:"translate(0px, 0px)"}},c.a.createElement("div",{className:"c-about-section-top-imgParent"},c.a.createElement("img",{alt:"About Us",className:"c-about-section-img",src:d.a}))),c.a.createElement("div",{className:"c-about-section-bottom"},c.a.createElement("div",{className:"c-about-bg-white",style:{transform:"translate(0px, 0%)"}}),c.a.createElement("div",{className:"c-about-section-text"},c.a.createElement("div",null,c.a.createElement("h3",{className:"c-about-section-h3"},"Behon3st Group"),c.a.createElement("p",{className:"c-about-section-p"},"Behon3st group is an Indian company producing export quality food items. We are a group of like minded and dedicated individuals, trying to make a change in all aspects of food related business."))))),c.a.createElement("section",{className:"c-about-section"},c.a.createElement("div",{className:"c-about-section-top",style:{opacity:1,transform:"translate(0px, 0px)"}},c.a.createElement("div",{className:"c-about-section-top-imgParent"},c.a.createElement("img",{alt:"Contact Us",className:"c-about-section-img",src:E.a}))),c.a.createElement("div",{className:"c-about-section-bottom-contact"},c.a.createElement("div",{className:"c-about-bg-white",style:{transform:"translate(0px, 0%)"}}),c.a.createElement("div",{className:"c-about-section-text"},c.a.createElement("div",null,c.a.createElement("h3",{className:"c-about-section-h3"},"Contact Us"),c.a.createElement(x,null))))))},j=a(35),C=a(39),O=a.n(C),k=(a(75),function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],o=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{activeIndex:a,onSelect:function(e,t){o(e)},className:"c-products-page",indicators:!1},c.a.createElement(j.a.Item,null,c.a.createElement("img",{width:"800",height:"800",className:"d-block w-100",src:O.a,alt:"Home"}),c.a.createElement(j.a.Caption,null,c.a.createElement("p",null,"Honey (Madhu) is one of the five elixirs of life (Panchamrita).",c.a.createElement("br",null),"The food of Zeus and the twelve Gods of Olympus was honey in the form of nectar and ambrosia.",c.a.createElement("br",null),"John the Baptist lived for a long of time in the wilderness on a diet of locusts and honey.",c.a.createElement("br",null),"According to an-Nahl (the Bees), Muhammad strongly recommended honey for healing purposes.")))))}),S=(a(76),a(53)),B=a.n(S),F=a(103),P=a(102),T=a(105),H=(a(49),function(e){var t=e.company,o=e.navCls,r=(e.navRole,e.tabs),s=Object(n.useState)(!1),m=Object(v.a)(s,2),i=m[0],u=m[1];return c.a.createElement(c.a.Fragment,null,t,c.a.createElement("div",{className:o},c.a.createElement(B.a,{style:{color:"ivory"},onClick:function(){return u(!0)}})),i?c.a.createElement("div",{onClick:function(){return u(!1)},onKeyDown:function(){return u(!1)}},c.a.createElement(F.a,{centered:!0,show:i,onHide:function(){return u(!1)},dialogClassName:"c-drawer-modal-size"},c.a.createElement(F.a.Body,null,c.a.createElement(P.a,null,r.map((function(e,t){return c.a.createElement(T.a,{key:t},c.a.createElement(T.a.Img,{variant:"top",src:a(79)("./".concat(e.image))}),c.a.createElement(T.a.Body,null,c.a.createElement(T.a.Title,null,e.title),c.a.createElement(T.a.Text,null,e.description)),c.a.createElement(T.a.Footer,null,c.a.createElement("div",{className:"c-drawer-navlink-parent"},c.a.createElement(l.c,{className:e.cls,to:e.to,activeStyle:{fontWeight:"900"},onClick:function(){return u(!1)},onKeyDown:function(){return u(!1)},exact:!0},e.name))))})))))):"")}),I=function(){return c.a.createElement("h1",null,"404: Page Not Found")},U=(a(84),function(e){var t=e.imgCls,a=e.img,n=e.titleCls,o=e.title,r=e.titleParentCls;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"logo-top"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{alt:"Behon3st Group",className:t,src:a})),o?c.a.createElement("div",{className:r},c.a.createElement("h1",{className:n},o)):""))}),D=a(41),G=a.n(D),L=(a(85),[{name:"Home",cls:"c-nav-item",to:"/",role:"menuitem",image:"card-company.png"},{name:"Products",cls:"c-nav-item",to:"/products-list",role:"menuitem",image:"card-cart.png"},{name:"About",cls:"c-nav-item",to:"/about",role:"menuitem",image:"card-contact.png"}]);var M=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"c-tb-content"},c.a.createElement(H,{company:c.a.createElement(U,{imgCls:"c-company-logo",img:G.a}),navCls:"c-main-navigation",tabs:L})),c.a.createElement("div",null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",component:u,exact:!0}),c.a.createElement(s.a,{path:"/about",component:w}),c.a.createElement(s.a,{path:"/products-list",component:k}),c.a.createElement(s.a,{component:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);var W=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"@Behon3st. All Rights Reserved."))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,{key:"1"})," ",c.a.createElement(W,{key:"2"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.cb88791c.chunk.js.map