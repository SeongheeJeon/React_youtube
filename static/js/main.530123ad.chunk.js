(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{22:function(e,t,a){e.exports={videos:"video_list_videos__3c9Zn"}},3:function(e,t,a){e.exports={container:"video_item_container__2Of_J",grid:"video_item_grid__2fGUY",list:"video_item_list__215CX",video:"video_item_video__1ggPQ",thumbnail:"video_item_thumbnail__24TPr",metadata:"video_item_metadata__24TM3",title:"video_item_title__1aSGT",channel:"video_item_channel__1kNgS"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__1wOxB",logo:"search_header_logo__3dx-W",input:"search_header_input__3GoWr",button:"search_header_button__17_wh",buttonImg:"search_header_buttonImg__ZjsxS"}},5:function(e,t,a){e.exports={app:"app_app__1mxHJ",content:"app_content__11dgh",detail:"app_detail__YzR2B",list:"app_list__s6dsW"}},52:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(21),s=a.n(c),r=(a(30),a(11)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),p=a(0),h=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{className:d.a.img,src:"/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(p.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(p.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){i()},children:Object(p.jsx)("img",{className:d.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),_=a(7),m=a.n(_),b=function(e){var t=e.video,a=e.video.snippet;return Object(p.jsxs)("section",{className:m.a.detail,children:[Object(p.jsx)("iframe",{title:"youtube video player",className:m.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullscreen:!0}),Object(p.jsx)("h2",{children:a.title}),Object(p.jsx)("h3",{children:a.channelTitle}),Object(p.jsx)("pre",{className:m.a.description,children:a.description})]})},j=a(3),v=a.n(j),O=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(p.jsxs)("div",{className:v.a.video,children:[Object(p.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:v.a.metadata,children:[Object(p.jsx)("p",{className:v.a.title,children:a.title}),Object(p.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})})),x=a(22),f=a.n(x),g=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(p.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(p.jsx)(O,{video:e,onVideoClick:a,display:n},e.id)}))})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1],m=Object(n.useCallback)((function(e){t.search(e).then((function(e){s(e),_(null)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:m}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(b,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(g,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},N=a(12),k=a(6),w=a.n(k),S=a(10),C=a(23),T=a(24),B=a(25),I=a.n(B),P=new(function(){function e(t){Object(C.a)(this,e),this.youtube=I.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:t}})}return Object(T.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:2}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:2,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyBWItBqeT5Vk8RDhP7QpRJBk2Y8VHeTE3A");s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{youtube:P})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__qOTd8",description:"video_detail_description__1WX_a"}}},[[52,1,2]]]);
//# sourceMappingURL=main.530123ad.chunk.js.map