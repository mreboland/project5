(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),i=(a(27),a(19)),l=a(16),c=a(17),u=a(21),m=a(20),p=a(2),h=a.n(p),f=a(3),d=a.n(f),E=function(e){return h()({url:"https://proxy.hackeryou.com",responseType:"json",method:"GET",paramsSerializer:function(e){return d.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://tastedive.com/api/similar",params:{k:"366898-NA-YOHJFJWV",q:e,verbose:1,limit:18},xmlToJSON:!1}})},v=function(e){var t="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(e);return h()({method:"GET",url:t,params:{format:"json"}})},b=a(18),y=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,e.genres.map((function(e,t){var a=function(){if(e)return null===e.yUrl?n():e.yUrl},n=function(){return"hidden"};return r.a.createElement("li",{className:"relative",key:t},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:e.extraInfo?e.extraInfo[0].strArtistThumb:"loading",alt:e.Name})),r.a.createElement("div",{className:"absolute"},r.a.createElement("h2",null,e.Name),r.a.createElement("p",null,"Genre: ",e.Type),r.a.createElement("a",{href:a(),target:"_blank",className:a(),rel:"noopener noreferrer"},"YouTube"),r.a.createElement(b.a,{trigger:r.a.createElement("button",null,"About"),position:"center center"},r.a.createElement("div",{className:"about"},e.extraInfo?""===e.extraInfo[0].strBiographyEN?e.wTeaser:e.extraInfo[0].strBiographyEN:e.wTeaser))))}))))},k=function(){return r.a.createElement("section",{className:"wrapper"},r.a.createElement("div",{className:"introInner"},r.a.createElement("h1",null,"Welcome to the Taste Finder!"),r.a.createElement("h2",null,"This app works by taking genres you like (i.e artists, movies, books, etc) and will generate a list of similar genres to help you find more things to enjoy!"),r.a.createElement("h2",null,"Try me!"),r.a.createElement("p",null,"For example: AC/DC")))},g=(a(47),function(e){return h()({url:"https://proxy.hackeryou.com",responseType:"jsonp",method:"GET",paramsSerializer:function(e){return d.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://www.goodreads.com/search/index.xml",params:{key:"kIJlbpC9jOud3psLARUQQ",q:e},xmlToJSON:!1}})}),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),""!==e.state.userInput?E(e.state.userInput).then((function(t){e.setState({tastes:t.data.Similar.Results,bookInfo:t.data.Similar.Results},(function(){Object(i.a)(e.state.tastes).map((function(t){"music"===t.Type?v(t.Name).then((function(a){t.extraInfo=a.data.artists;var n=e.state.tastes;null===a.data.artists&&(n=e.state.tastes.filter((function(e){return e.Name!==t.Name}))),e.setState({artistInfo:a.data.artists,tastes:n},(function(){e.setState({userInput:""})}))})):"book"===t.Type?g(t.Name).then((function(a){t.bookInfo=a.data,e.setState({userInput:""})})):"movie"===t.Type&&e.setState({userInput:""})}))}))})):alert("Please input a choice")},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.onClickEvent=function(t){e.myDivToFocus.current&&e.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},e.handleOnSubmit=function(t){e.handleSubmit(t),setTimeout((function(){e.onClickEvent()}),1e3)},e.state={tastes:[],artistInfo:[],bookInfo:[],userInput:""},e.myDivToFocus=r.a.createRef(),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"start"},r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("form",{action:"",onSubmit:this.handleOnSubmit,className:"wrapper"},r.a.createElement("input",{type:"text",value:this.state.userInput,onChange:this.handleUserInput}),r.a.createElement("button",{type:"submit",onClick:this.onClickEvent},"Search")),r.a.createElement("p",{className:"note wrapper"},"Do note, the app will generate a list for all searches, however detailed info only works on music so far"))),r.a.createElement("section",{className:"list",ref:this.myDivToFocus},r.a.createElement(y,{genres:this.state.tastes})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9908dbb0.chunk.js.map