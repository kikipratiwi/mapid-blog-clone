(this["webpackJsonpmapid-blog-clone"]=this["webpackJsonpmapid-blog-clone"]||[]).push([[0],{124:function(e,t,n){e.exports=n(256)},136:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),o=n.n(c),l=n(34),i=n(24),s=n(16),u=n(57),b=(n(133),n(119)),m=n.n(b),p=n(32),d={SET_CURRENT_BLOG:"SET_CURRENT_BLOG",SET_BLOG_DATA:"SET_BLOG_DATA",SET_DEFAULT_BLOG:"SET_DEFAULT_BLOG"},g=function(e,t){return document.title=t.title,t},f={blogData:null,defaultBlog:null,currentBlog:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_CURRENT_BLOG:return Object(p.a)(Object(p.a)({},e),{},{currentBlog:g(e.currentBlog,t.payload)});case d.SET_BLOG_DATA:return Object(p.a)(Object(p.a)({},e),{},{blogData:t.payload});case d.SET_DEFAULT_BLOG:return Object(p.a)(Object(p.a)({},e),{},{defaultBlog:t.payload});default:return e}},O={key:"root",storage:m.a,whitelist:["blog"]},E=Object(s.c)({blog:h}),v=Object(u.a)(O,E);var B=Object(s.d)(v,s.a.apply(void 0,[])),y=(Object(u.b)(B),B),j=n(5),_=(n(136),n(25)),k=n.n(_),S=n(43),D=n(22),T=n(23),w=n(36),N=n(35),L=n(18),C=function(e){return e.blog},U=Object(L.a)([C],(function(e){return e.currentBlog})),A=Object(L.a)([C],(function(e){return e.defaultBlog})),G=Object(L.a)([C],(function(e){return e.blogData})),R=function(e){return{type:d.SET_CURRENT_BLOG,payload:e}},x=n(44),F=n(120),I=n.n(F),q=(n(138),Object(L.b)({currentBlog:U})),P=Object(i.b)(q,(function(e){return{setCurrentBlog:function(t){return e(R(t))}}}))((function(e){var t=e.item,n=e.setCurrentBlog,a=e.currentBlog,c=I()("text-table-of-content",{activated:t._id===a._id});return r.a.createElement(l.b,{className:"button-table-of-content item-table-of-content",to:"/mapid-blog-clone/blog/".concat(t.link),onClick:function(){return n(t)}},r.a.createElement("span",{className:c},t.title))})),M=(n(140),function(e){switch(e){case"teknis_kompetisi_mapid":return"Kompetisi MAPID";case"seminar":return"SEMINAR & WORKSHOP";default:return e.replace(/_/g," ").toUpperCase()}}),J=function(e){var t=e.subBracketTitle,n=e.items;return r.a.createElement("div",{className:"sub-bracket-collection"},r.a.createElement("div",{className:"button-table-of-content parent-table-of-content"},r.a.createElement("span",{className:"text-table-of-content"},M(t))),r.a.createElement("div",{className:"collection-item"},Object.keys(n).map((function(e){return r.a.createElement(P,{key:e,item:n[e]})}))))},K=(n(141),function(e){Object(w.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).state={isBtnOpen:!0,isOnScroll:!1},a.toggleSidebarOpenbtn=a.toggleSidebarOpenbtn.bind(Object(x.a)(a)),a.handleScroll=a.handleScroll.bind(Object(x.a)(a)),a}return Object(T.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.scrollY>=300?this.setState({isOnScroll:!0}):this.setState({isOnScroll:!1})}},{key:"toggleSidebarOpenbtn",value:function(){this.setState((function(e){return{isBtnOpen:!e.isBtnOpen}}))}},{key:"render",value:function(){var e=this,t=this.props.blogCollection;return r.a.createElement("div",{className:"side-bar-container"},r.a.createElement("div",{className:"\n          sidebar \n          ".concat(this.state.isOnScroll?"sticky-sidebar":"scroll-sidebar"," \n          ").concat(this.state.isBtnOpen?"l-toggle-on":"l-toggle-off")},r.a.createElement("div",{className:"flex-mb-500"},r.a.createElement("div",{className:"button-shadow"},"BLOG"),t?Object.keys(t).map((function(n){return r.a.createElement(J,{key:n,subBracketTitle:n,items:t[n],onClick:function(){return e.props.setContent(t[n])}})})):null)),r.a.createElement("div",{className:"\n            openbtn \n            ".concat(this.state.isOnScroll?"sticky-openbtn":"scroll-openbtn","  \n            ").concat(this.state.isBtnOpen?"ml-toggle-on":"ml-toggle-off"),id:"buttonSlider-js",onClick:function(){return e.toggleSidebarOpenbtn()}},r.a.createElement("span",null,this.state.isBtnOpen?"<":">")))}}]),n}(r.a.Component)),W=n(122),z=n(45),H=(n(236),function(e){var t=e.imageUrl,n=e.title;return r.a.createElement("div",{className:"hero-title-container",style:{background:"linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)) repeat scroll 0% 0%, rgba(0, 0, 0, 0) url(".concat(t,") no-repeat scroll center 38% / cover")}},r.a.createElement("div",{className:"dashboard-special"},r.a.createElement("div",{className:"title-document"},r.a.createElement("strong",null,n))))}),Y=(n(237),function(e){var t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("en",{month:"short"}).format(t),r=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(a," ").concat(r," ").concat(n)}),Q=function(e){var t=e.imageUrl,n=e.name,a=e.date;return r.a.createElement("div",{className:"mt-30"},r.a.createElement("div",{className:"author-profile-image",style:{background:"url(".concat(t,") no-repeat center center/ cover")}}),r.a.createElement("div",{className:"profile-detail"},n,r.a.createElement("br",null),r.a.createElement("div",{className:"date"},Y(a))))},V=(n(238),Object(L.b)({currentBlog:U,defaultBlog:A})),X=Object(i.b)(V)((function e(t){var n=t.defaultBlog,a=t.currentBlog,c=(Object(W.a)(t,["defaultBlog","currentBlog"]),new z.CompositeDecorator([{strategy:function(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"LINK"===n.getEntity(t).getType()}),t)},component:e}])),o="https://doc.mapid.io/static/media/profile_pic_comment.2a6f2a32.svg",l="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1601430916.png",i=Object(j.g)().blogLink?a:n,s=function(e){var t=Object(z.convertFromRaw)(JSON.parse(e.editorState));return z.EditorState.createWithContent(t,c)}(i);return r.a.createElement("div",{className:"mb-200"},r.a.createElement(H,{imageUrl:l,title:i.title}),r.a.createElement("div",{className:"content-container"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{imageUrl:i.authors[0].user?i.authors[0].user.profile_picture.url:o,name:i.authors[0].user?i.authors[0].user.full_name:"",date:i.date}),r.a.createElement("div",{className:"content"},r.a.createElement(z.Editor,{editorState:s,readOnly:!0}))):null))})),Z=n(123),$=n(31),ee=n(121),te=n.n(ee),ne={API_URL:"http://api.mapid.io/blog/get_list_docs_public/blog"},ae=function(e){Object(w.a)(n,e);var t=Object(N.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"getBlogData",value:function(){var e=Object(S.a)(k.a.mark((function e(){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.a)(Object($.a)(n.prototype),"sendGetRequest",this).call(this,"".concat(this.baseUrl),{});case 3:return t=e.sent,a=t.data,r={},a.forEach((function(e){r[e.sub_bracket]||(r[e.sub_bracket]={}),!r[e.sub_bracket][e._id]&&e.isPublish&&(r[e.sub_bracket][e._id]=e)})),e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Get blog data: ".concat(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()}]),n}(function(){function e(){Object(D.a)(this,e),this.baseUrl=ne.API_URL;this.reqClient=te.a.create({headers:{"Content-Type":"application/json"}}),this.reqClient.interceptors.response.use((function(e){return e}),(function(e){throw e.response&&console.error(e),e}))}return Object(T.a)(e,[{key:"sendGetRequest",value:function(e,t){return this.reqClient.get(e,{params:t})}}]),e}()),re=function(e){Object(w.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).mapidService=new ae,a}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBlogData();case 2:this.initDefaultStyle();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBlogData",value:function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.mapidService.getBlogData();case 3:return t=e.sent,n=t[Object.keys(t)[0]],a=n[Object.keys(n)[0]],e.next=8,this.props.setBlogData(t);case 8:return e.next=10,this.props.setDefaultBlog(a);case 10:return e.next=12,this.props.setCurrentBlog(a);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"initDefaultStyle",value:function(){this.props.defaultBlog&&(document.title=this.props.defaultBlog.title)}},{key:"render",value:function(){return r.a.createElement("div",{className:"blog-page"},this.props.currentBlog?r.a.createElement(K,{blogCollection:this.props.blogData}):null,this.props.blogData?r.a.createElement(X,null):null)}}]),n}(r.a.Component),ce=Object(L.b)({blogData:G,defaultBlog:A,currentBlog:U}),oe=Object(i.b)(ce,(function(e){return{setBlogData:function(t){return e({type:d.SET_BLOG_DATA,payload:t})},setDefaultBlog:function(t){return e({type:d.SET_DEFAULT_BLOG,payload:t})},setCurrentBlog:function(t){return e(R(t))}}}))(re);var le=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/mapid-blog-clone/blog/:blogLink",children:r.a.createElement(oe,null)}),r.a.createElement(j.b,{path:"/mapid-blog-clone/blog",children:r.a.createElement(oe,null)}),r.a.createElement(j.b,{exact:!0,path:"/",render:function(){return r.a.createElement(j.a,{to:"/mapid-blog-clone/blog"})}})))};n(255);o.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(l.a,null,r.a.createElement(le,null))),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.65b812f5.chunk.js.map