(this["webpackJsonpconcept-to-cloud"]=this["webpackJsonpconcept-to-cloud"]||[]).push([[0],{29:function(e,t,a){},56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),i=(a(61),a(8)),c=a(9),s=a(11),m=a(10),u=a(53),d=a(12),h=(a(29),a(35)),E=a.n(h),p=(a(47),a(30),a(49)),f=a(20),g=a(79),b=a(7),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:e.title,productId:e.productId,isVisible:!0},n}return Object(c.a)(a,[{key:"setVisibility",value:function(e){this.setState({isVisible:e})}},{key:"componentDidUpdate",value:function(e,t){this.props.productId===e.productId&&t.isVisible||this.setState({title:this.props.title,productId:this.props.productId,isVisible:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(g.a,{direction:"right",in:this.state.isVisible,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},l.a.createElement(p.a,{fluid:!0,className:"c2cWhite"},l.a.createElement(f.a,null,l.a.createElement("h2",null,this.state.title),l.a.createElement("div",null,a.packageDescription[this.state.productId])),l.a.createElement("hr",null),l.a.createElement(b.a,{className:"c2cIndigo",onClick:function(){return e.setVisibility(!1)}},"Hide")))}}]),a}(n.Component);y.packageDescription={default:"Default package description. Should never be visible, in theory",oneTime:"Initial site creation, no support moving forward",annual:"Initial site creation, monthly charge for 24/7 support",payAsYouGo:"Initial site creation, a fee charged for each alteration moving forward"};var v=a(15),w=a(6),k=a(27),C=a(51),j=a(3),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).jumbo=void 0,n.state={product:{id:"default",title:"Test Product Name"}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:1800})}},{key:"setProductData",value:function(e){this.setState({product:e}),this.jumbo=l.a.createElement(y,{title:e.title,productId:e.id})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("header",{className:"App-header"},l.a.createElement(k.a,{src:"/assets/techTable.jpg",fluid:!0}),l.a.createElement("div",{className:"onImage"},l.a.createElement("h1",null,"We Build the Tools, You Build the Business"),l.a.createElement(b.a,{variant:"info",size:"lg",href:"/#/support"},"Book A Consultation Today"))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement("div",{className:"centerBlock"},l.a.createElement("i",null," ",l.a.createElement("h1",null,"In a world that lives on the internet why not put your best foot forward?")),l.a.createElement(b.a,{variant:"info",size:"lg",href:"/#/support"},"Explore Our Mission"))),l.a.createElement(w.a,null,l.a.createElement(k.a,{src:"/assets/happyCustomer.jpg",height:"100%",width:"100%"}))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(k.a,{src:"/assets/happyCustomer2.jpg",height:"100%",width:"100%"})),l.a.createElement(w.a,null,l.a.createElement(f.a,null,l.a.createElement("p",{style:{marginTop:"4em"}},l.a.createElement("i",null,l.a.createElement("h1",null," Often in today's soceity a business's first interaction with a customer, whether they know it or not is online. Having an online precence is a necessity for a modern business in order to convey precise and essential information to their clientel.")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"home"},l.a.createElement("h1",null,"Choose the plan that is right for YOUR needs.")),l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(j.a,null,l.a.createElement(j.a.Img,{variant:"top",src:"/assets/products.jpg"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"A Service for You"),l.a.createElement(j.a.Text,null,"We offer service plans that accomodate how much attention your business needs regarding its online presence.")),l.a.createElement(j.a.Footer,null,l.a.createElement(b.a,{variant:"info",href:"/#/pricing"},"Explore Services"))),l.a.createElement(j.a,null,l.a.createElement(j.a.Img,{variant:"top",src:"/assets/glassesLaptop.jpg"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"Who We Are"),l.a.createElement(j.a.Text,null,"Come check out our mission and find out a little bit about who we are.")),l.a.createElement(j.a.Footer,null,l.a.createElement(b.a,{variant:"info",href:"/#/about"},"Learn About Us"))),l.a.createElement(j.a,null,l.a.createElement(j.a.Img,{variant:"top",src:"/assets/transaction.jpg"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"Easy Integration"),l.a.createElement(j.a.Text,null,"We offer a wide variety of products that can serve as standalone tools, or features that will seemlessly integrate into your business.")),l.a.createElement(j.a.Footer,null,l.a.createElement(b.a,{variant:"info",href:"/#/pricing"},"Explore Our Products")))))),this.jumbo)}}]),a}(n.Component),x=a(52),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={product:{id:"default",title:"Test Product Name"}},n}return Object(c.a)(a,[{key:"setProductData",value:function(e){this.setState({product:e}),console.log("Current State: "+JSON.stringify(this.state))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"About-header"},l.a.createElement(k.a,{src:"/assets/glassesLaptop.jpg",fluid:!0}),l.a.createElement("div",{className:"onImageAbout"},l.a.createElement("h1",null,"From Concept to Cloud"))),l.a.createElement(f.a,{className:"contact"},l.a.createElement(v.a,null,l.a.createElement(j.a,null,l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Text,null,l.a.createElement("h1",null,"A Local Business for Local Businesses"),l.a.createElement("h2",null,"Our mission at Concept to Cloud is to give small businesses the tools necessary to compete in a world full of big businesses and chains. Being Brooklyn natives, we strive to serve our neighborhood by working with small business owners to better focus on their needs to build out their brand."))),l.a.createElement(j.a.Img,{variant:"bottom",src:"/assets/dumboBridge.jpg"}))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}})),l.a.createElement(w.a,null,l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}})),l.a.createElement(w.a,null,l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}})),l.a.createElement(w.a,null,l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}})),l.a.createElement(w.a,null,l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}}))),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement("h1",null," What we Stand for  "))),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Custom Made"),l.a.createElement("td",null,"Affordable"),l.a.createElement("td",null,"Flexible Schedule"),l.a.createElement("td",null,"Community")),l.a.createElement("tr",null,l.a.createElement("td",null,"Creative"),l.a.createElement("td",null,"Accomodating"),l.a.createElement("td",null,"Personable"),l.a.createElement("td",null,"Integrity")),l.a.createElement("tr",null,l.a.createElement("td",null,"One of a Kind"),l.a.createElement("td",null,"Intuitive"),l.a.createElement("td",null,"Aesthetic"),l.a.createElement("td",null,"Quality"))))))))}}]),a}(n.Component),N=a(22),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).mailFields={},e}return Object(c.a)(a,[{key:"updateFields",value:function(){var e=document.getElementsByClassName("form-control");this.mailFields.email=e[0].value,this.mailFields.subject=e[1].value,this.mailFields.body=e[2].value,console.log(this.mailFields)}},{key:"sendEmail",value:function(){window.location.href="mailto:concepttocloud@gmail.com?subject=".concat(this.mailFields.subject,"&body=").concat(this.mailFields.body,"&cc=").concat(this.mailFields.email)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"Contact-header"},l.a.createElement("h1",{className:"contact"},"Contact Us")),l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement("div",{style:{width:"70%",margin:"auto"}},l.a.createElement(N.a,{onChange:function(){return e.updateFields()}},l.a.createElement(N.a.Group,{controlId:"contactForm.email"},l.a.createElement(N.a.Label,null,"Your contact email:"),l.a.createElement(N.a.Control,{type:"email",placeholder:"name@example.com"})),l.a.createElement(N.a.Group,{controlId:"contactForm.subject"},l.a.createElement(N.a.Label,null,"I am looking to:"),l.a.createElement(N.a.Control,{as:"select"},l.a.createElement("option",null,"Book a consultation"),l.a.createElement("option",null,"Make an update to my site"),l.a.createElement("option",null,"Change my plan"))),l.a.createElement(N.a.Group,{controlId:"contactForm.body"},l.a.createElement(N.a.Label,null,"Provide some detail and we'll get back to you shortly:"),l.a.createElement(N.a.Control,{as:"textarea"})),l.a.createElement(b.a,{variant:"info",onClick:function(){return e.sendEmail()}},"Submit")))),l.a.createElement(w.a,null,l.a.createElement(f.a,null,l.a.createElement("u",null,l.a.createElement("h1",null,"How Can We Help? ")),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,{as:"h5"},"Explore our Products"),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"Pick the Tools that Suit your needs"),l.a.createElement(j.a.Text,null,"Pay for what you need and not the extras. We offer an array of products and services that can help build a business from the ground up or fit in to your current workflow."),l.a.createElement(b.a,{variant:"info",href:"/#/templates"},"Our Products")))))))}}]),a}(n.Component),T=a(16),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"Faq-header"},l.a.createElement("h1",{className:"contact"},"Frequently Asked Questions")),l.a.createElement(T.a,null,l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"0"},"How can I contact the C2C team with an emergency issue?")),l.a.createElement(T.a.Collapse,{eventKey:"0"},l.a.createElement(j.a.Body,null,"Send us an email at : concepttocloud@gmail.com"))),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"1"},"Is it possible to upgrade my account after creating my site ?")),l.a.createElement(T.a.Collapse,{eventKey:"1"},l.a.createElement(j.a.Body,null,"YES, we understand that our users' needs are always growing just like our product."))),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"2"},"Can I use my old or existing site as a template ?")),l.a.createElement(T.a.Collapse,{eventKey:"2"},l.a.createElement(j.a.Body,null,"Yes, we are welcome to any premade concept designs or existing code a user may have."))),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"3"},"Is it possible to get a free consultation ?")),l.a.createElement(T.a.Collapse,{eventKey:"3"},l.a.createElement(j.a.Body,null,"Of course, feel free to send a link to your current website to : concepttocloud@gmail.com"))),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"4"},"How long does it take to get my site live ?")),l.a.createElement(T.a.Collapse,{eventKey:"4"},l.a.createElement(j.a.Body,null,"Due to every client's needs being different we can not always guarantee a time frame until an initial consultation is had."))),l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(T.a.Toggle,{as:b.a,variant:"link",eventKey:"5"},"Can I buy a site without commitment?")),l.a.createElement(T.a.Collapse,{eventKey:"5"},l.a.createElement(j.a.Body,null,"We offer a multitude of plans that give our customers the freedom to commit to as long as they want or need.")))))}}]),a}(n.Component),P=(a(65),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).title=void 0,n.text=void 0,n.id=void 0,n.title=e.title,n.text=e.text,n.id=e.id,n}return Object(c.a)(a,[{key:"setBorderColor",value:function(e){this.setState({borderColor:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(j.a,{border:"light",style:{width:"18rem"},className:"shadow"},l.a.createElement(j.a.Img,{variant:"top",src:"/assets/mobile.jpg"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,void 0===this.title?"Card Title":this.title),l.a.createElement(j.a.Text,{style:{height:"5rem"}},void 0===this.text?"Sample Text to get Overwritten":this.text),l.a.createElement(b.a,{className:"c2cIndigo",onClick:function(){e.props.handleButton({id:e.id,title:e.title})}}," Learn More")))}}]),a}(n.Component)),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{"data-aos":"fade-"+this.props.fade,className:"slide-header-"+this.props.slide},this.props.title)}}]),a}(n.Component),A=(a(66),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).jumbo=void 0,n.state={product:{id:"default",title:"Test Product Name"}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:1800})}},{key:"setProductData",value:function(e){this.setState({product:e}),this.jumbo=l.a.createElement(y,{title:e.title,productId:e.id})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("header",{className:"Pricing-header"},l.a.createElement("h1",null," Finding the Right Plan for You. ")),l.a.createElement(F,{fade:"right",slide:"left",title:"Pricing Packages"},l.a.createElement("div",{className:"c2cIndigo"})),l.a.createElement(f.a,{style:{marginTop:"4.5em"}},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(j.a,{border:"light",style:{width:"18rem"},className:"shadow"},l.a.createElement(j.a.Header,{as:"h5"},"Entry Level : One Time Payment"),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"One time Flat Fee"),l.a.createElement(j.a.Text,null,"Initial site creation, no support moving forward"),l.a.createElement(b.a,{variant:"info",href:"/#/support"},"Book Appointment")))),l.a.createElement(w.a,null,l.a.createElement(j.a,{border:"light",style:{width:"18rem"},className:"shadow"},l.a.createElement(j.a.Header,{as:"h5"},"Intermediate : Pay As You Go "),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"Fee For the initial Site + $20/month"),l.a.createElement(j.a.Text,null,"Initial site creation, monthly charge for 24/7 support, pay per implementation outside initial setup"),l.a.createElement(b.a,{variant:"info",href:"/#/support"},"Book Appointment")))),l.a.createElement(w.a,null,l.a.createElement(j.a,{border:"light",style:{width:"18rem"},className:"shadow"},l.a.createElement(j.a.Header,{as:"h5"},"Premium : Unlimited Package"),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,"Fee For the initial Site + $50/month"),l.a.createElement(j.a.Text,null,"Initial site creation, 24/7 support, any two of the products listed below, and unlimited implementation outside initial setup"),l.a.createElement(b.a,{variant:"info",href:"/#/support"},"Book Appointment")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(F,{fade:"left",slide:"right",title:"Standalone Products"},l.a.createElement("div",{className:"c2cIndigo"},"Hello WOrld")),l.a.createElement(f.a,{style:{marginTop:"7em"}},l.a.createElement(v.a,null,l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"mobile",title:"Mobile",text:"Easy access to infrastructure tools from mobile devices"})),l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"qr",title:"QR Integration",text:"Integrate QR codes into the everyday needs of your business"})),l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"menu",title:"Contactless Ordering",text:"Online menu for zero contact ordering and seating"})),l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"intranet",title:"Intranet/Infrastructure",text:"A way to track employee clock ins, shift schedules, and day to day tasks"})),l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"analytics",title:"Internal Analytics",text:"Internal analytics based on inventory, sales, and other customizable variables taylored to your business"})),l.a.createElement(w.a,null,l.a.createElement(P,{handleButton:this.setProductData.bind(this),id:"diy",title:"Create Your Own",text:"If you have an idea for an infrastructure tool we will work with you to bring that idea to life"})))),this.jumbo)}}]),a}(n.Component)),S=a(32),H=a(28),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).title=void 0,n.text=void 0,n.title=e.title,n.text=e.text,n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{fixed:"top",bg:"light",expand:"lg"},l.a.createElement(S.a.Brand,{href:"/"},l.a.createElement("img",{src:"/assets/logo-min.png",width:"40",height:"40",className:"logo",alt:"C2C Logo",style:{borderRadius:"20px"}}),"Concept To Cloud"),l.a.createElement("br",null),l.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(H.a,{className:"mr-auto"},l.a.createElement(H.a.Link,{href:"/#/pricing"},"Services"),l.a.createElement(H.a.Link,{href:"/#/support"},"Contact"),l.a.createElement(H.a.Link,{href:"/#/about"},"About"),l.a.createElement(H.a.Link,{href:"/#/faq"},"FAQ"))))}}]),a}(n.Component),K=(a(67),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"pv4 ph3 ph5-ns tc"},l.a.createElement("hr",null),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link dim gray dib br-100 h2 w2 mr3 ",href:"https://www.instagram.com/concepttocloud/",title:""},l.a.createElement("svg",{"data-icon":"instagram",viewBox:"0 0 16 16",style:{fill:"currentcolor"}},l.a.createElement("title",null,"instagram icon"),l.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}))),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link dim gray dib h2 w2 br-100 mr3 ",href:"https://www.facebook.com/Concept-to-Cloud-102186205039935/",title:""},l.a.createElement("svg",{"data-icon":"facebook",viewBox:"0 0 32 32",style:{fill:"currentcolor"}},l.a.createElement("title",null,"facebook icon"),l.a.createElement("path",{d:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"}))),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link dim gray dib h2 w2 br-100 mr3 ",href:"mailto:concepttocloud@gmail.com",title:""},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:{fill:"currentcolor"}},l.a.createElement("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"}))),l.a.createElement("div",{className:"mt4"},l.a.createElement("a",{href:"/faq",className:"f6 link dim gray dib mr3 mr4-ns"},"Help"),l.a.createElement("a",{href:"/contact",className:"f6 link dim gray dib mr3 mr4-ns"},"Send feedback"),l.a.createElement("a",{href:"/faq",className:"f6 link dim gray dib mr3 mr4-ns"},"Privacy")))}}]),a}(n.Component)),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(D,null),l.a.createElement("div",null,l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",component:O,exact:!0}),l.a.createElement(d.a,{path:"/about",component:I}),l.a.createElement(d.a,{path:"/support",component:B}),l.a.createElement(d.a,{path:"/faq",component:L}),l.a.createElement(d.a,{path:"/pricing",component:A}))),l.a.createElement(K,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.abc90ee3.chunk.js.map