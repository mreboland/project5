(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),i=(a(27),a(19)),c=a(16),l=a(17),u=a(21),m=a(20),p=a(2),f=a.n(p),h=a(3),d=a.n(h),v=function(e){return f()({url:"https://proxy.hackeryou.com",responseType:"json",method:"GET",paramsSerializer:function(e){return d.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://tastedive.com/api/similar",params:{k:"366898-NA-YOHJFJWV",q:e},xmlToJSON:!1}})},y=function(e){var t="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(e);return f()({method:"GET",url:t,params:{format:"json"}})},E=function(e){return f()({url:"https://proxy.hackeryou.com",responseType:"json",method:"GET",paramsSerializer:function(e){return d.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"http://www.omdbapi.com/",params:{apikey:"f6bf7cc4",t:e},xmlToJSON:!1}})},b=a(18),I=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,e.genres.map((function(e,t){var a=function(){if(e)return null===e.yUrl||e.movieInfo,n()},n=function(){return"hidden"};return r.a.createElement("li",{className:"relative",key:t},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:e?e.extraInfo?e.extraInfo[0].strArtistThumb:e.movieInfo?e.movieInfo.Poster:void 0:"loading",alt:e.Name})),r.a.createElement("div",{className:"absolute"},r.a.createElement("h2",null,e.Name),r.a.createElement("p",null,"Genre: ",e.Type),r.a.createElement("a",{href:a(),target:"_blank",className:a(),rel:"noopener noreferrer"},"YouTube"),r.a.createElement(b.a,{trigger:r.a.createElement("button",null,"About"),position:"center center"},r.a.createElement("div",{className:"about"},e.extraInfo?""===e.extraInfo[0].strBiographyEN?e.wTeaser:e.extraInfo[0].strBiographyEN:e.movieInfo?e.movieInfo.Plot:e.Name))))}))))},k=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"introInner"},r.a.createElement("h1",null,"Welcome to the Taste Finder!"),r.a.createElement("h2",null,"This app works by taking genres you like (i.e artists or movies) and will generate a list of similar genres to help you find more things to enjoy!"),r.a.createElement("h2",null,"Try me!"),r.a.createElement("p",null,"For example: Rush")))},g=(a(47),function(e){return f()({url:"https://proxy.hackeryou.com",responseType:"jsonp",method:"GET",paramsSerializer:function(e){return d.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://www.goodreads.com/search/index.xml",params:{key:"kIJlbpC9jOud3psLARUQQ",q:e},xmlToJSON:!1}})}),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),""!==e.state.userInput?v(e.state.userInput).then((function(t){e.setState({tastes:t.data.Similar.Results,bookInfo:t.data.Similar.Results},(function(){Object(i.a)(e.state.tastes).map((function(t){"music"===t.Type?y(t.Name).then((function(a){t.extraInfo=a.data.artists;var n=e.state.tastes;null===a.data.artists&&(n=e.state.tastes.filter((function(e){return e.Name!==t.Name}))),e.setState({artistInfo:a.data.artists,tastes:n},(function(){e.setState({userInput:""})}))})):"book"===t.Type?g(t.Name).then((function(a){t.bookInfo=a.data,e.setState({userInput:""})})):"movie"===t.Type&&E(t.Name).then((function(a){t.movieInfo=a.data;var n=e.state.tastes;null===a.data&&(n=e.state.tastes.filter((function(e){return e.Name!==t.Name}))),e.setState({tastes:n},(function(){e.setState({userInput:""})}))}))}))}))})):alert("Please input a choice")},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.onClickEvent=function(t){e.myDivToFocus.current&&e.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},e.handleOnSubmit=function(t){e.handleSubmit(t),setTimeout((function(){e.onClickEvent()}),1e3)},e.state={tastes:[],artistInfo:[],bookInfo:[],userInput:"",movies:[]},e.myDivToFocus=r.a.createRef(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"start"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(k,null),r.a.createElement("form",{action:"",onSubmit:this.handleOnSubmit},r.a.createElement("input",{type:"text",value:this.state.userInput,onChange:this.handleUserInput}),r.a.createElement("button",{type:"submit",onClick:this.onClickEvent},"Search")),r.a.createElement("p",{className:"note"},"API recently lost some functionality (no Youtube/trailers, books no longer work). This loss of functionality results in empty searches on occasion as the API doesn't generate a list."))),r.a.createElement("section",{className:"list",ref:this.myDivToFocus},r.a.createElement(I,{genres:this.state.tastes,movies:this.state.movies})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.57ca32e9.chunk.js.map