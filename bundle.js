(()=>{"use strict";var n={71:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),s=t.n(o),a=t(667),c=t.n(a),l=new URL(t(847),t.b),d=s()(i()),u=c()(l);d.push([n.id,"* {\n  box-sizing: border-box !important;\n}\n\nbody {\n  font-size: 14px;\n  background-color: #222222;\n  color: #fff;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#app {\n  padding-bottom: 48px;\n}\n\n*:focus {\n  outline: none;\n}\n.item-view,\n.item-test {\n  width: 100%;\n}\n\n.item-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.item-view h2 {\n  font-size: 2rem;\n  font-weight: bold;\n  user-select: none;\n}\n\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\n\n.item-list {\n  display: grid;\n  margin: 48px 0;\n  grid-template-columns: repeat(4, 180px);\n  grid-column-gap: 160px;\n  grid-row-gap: 48px;\n}\n\n#skeleton-list {\n  margin: 0;\n}\n\n.item-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-thumbnail:hover {\n  transform: scale(1.3);\n}\n\n.item-thumbnail {\n  border-radius: 8px;\n  width: 180px;\n  height: 270px;\n  background-size: contain;\n}\n\n.item-title {\n  margin-top: 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.item-score {\n  margin-top: 16px;\n  font-size: 1.2rem;\n}\n\n.item-score::after {\n  margin-left: 8px;\n}\n\n.item-title.skeleton::after,\n.item-score.skeleton::after {\n  font-size: 0;\n  content: 'loading';\n}\n\n.full-width {\n  width: 100%;\n}\n\n.last-item {\n  margin-top: 48px;\n}\n\nbutton.btn {\n  border: 0;\n  border-radius: 8px;\n  height: 30px;\n  color: #fff;\n}\n\nbutton.primary {\n  background: #f33f3f;\n}\n\n.item-card .skeleton {\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n  background-size: 400%;\n  animation: skeleton-animation 5s infinite ease-out;\n  border-radius: 8px;\n}\n\n@keyframes skeleton-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\nheader {\n  width: 100%;\n  min-width: 1200px;\n  height: 72px;\n  background-color: #222;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid white;\n  margin-bottom: 48px;\n}\n\nheader h1 {\n  cursor: pointer;\n  user-select: none;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: -0.1rem;\n  color: #f33f3f;\n}\n\nheader > .search-box {\n  background: #fff;\n  padding: 8px;\n  border-radius: 4px;\n}\n\nheader .search-box > input {\n  border: 0;\n}\n\nheader .search-box > .search-button {\n  width: 14px;\n  border: 0;\n  text-indent: -1000rem;\n  background: url("+u+") transparent no-repeat 0 1px;\n  background-size: contain;\n}\n",""]);const p=d},538:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),i=t.n(r),o=t(645),s=t.n(o)()(i());s.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const a=s},978:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),i=t.n(r),o=t(645),s=t.n(o)()(i());s.push([n.id,".hide {\n  display: none;\n}\n",""]);const a=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},s=[],a=0;a<n.length;a++){var c=n[a],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=i(h,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var a=t(o[s]);e[a].references--}for(var c=r(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},847:(n,e,t)=>{n.exports=t.p+"f1bd4269f4446ceae306.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),s=t.n(o),a=t(565),c=t.n(a),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(538),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=t(71),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var b=t(978),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),e()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;const y=t.p+"2e162b4fefb34cd7ed8d.png",x=(n,e,t=null)=>{const r=new CustomEvent(e,{bubbles:!0,detail:t});n.dispatchEvent(r)},w=n=>document.querySelector(n);class k extends HTMLElement{constructor(){super(),this.handleSubmit=n=>{n.preventDefault();const[e]=n.target;e.value.trim()?x(this,"search",e.value):alert("검색어를 입력해 주세요.")},this.innerHTML=`\n      <header>\n        <h1><img src="${y}" alt="MovieList 로고" /></h1>\n        <form class="search-box">\n          <input id="search-input" type="text" placeholder="검색" required />\n          <button class="search-button">검색</button>\n        </form>\n      </header>\n    `}connectedCallback(){this.querySelector("form").addEventListener("submit",this.handleSubmit),this.querySelector("h1").addEventListener("click",(()=>x(this,"home")))}}const M=k;class E extends HTMLElement{constructor(){super(),this.innerHTML=`\n      <section class="item-view">\n        <h2 id="movie-list-title">지금 인기 있는 영화</h2>\n        <ul class="item-list"></ul>\n        <ul class="item-list" id="skeleton-list">\n        ${Array(20).fill().map((()=>'\n            <li>\n              <a href="#">\n                <div class="item-card">\n                  <div class="item-thumbnail skeleton"></div>\n                  <div class="item-title skeleton"></div>\n                  <div class="item-score skeleton"></div>\n                </div>\n              </a>\n            </li>\n            ')).join("")}\n        </ul>\n        <button id="load-more" class="btn primary full-width">더 보기</button>\n      </section>\n    `}connectedCallback(){this.querySelector("#load-more").addEventListener("click",(()=>x(this,"loadMore")))}}const T=E,P=t.p+"6328741810b732410eec.png",S=t.p+"9f8d716f03770d21e7b7.png";class $ extends HTMLElement{constructor(){super();const n=this.getAttribute("poster-path");this.innerHTML=`\n      <li>\n        <a href="#">\n          <div class="item-card">\n            <img\n              class="item-thumbnail"\n              src=${"null"===n?S:`https://image.tmdb.org/t/p/w220_and_h330_face${n}`}\n              loading="lazy"\n              alt="${this.getAttribute("title")}"\n            />\n            <p class="item-title">${this.getAttribute("title")}</p>\n            <p class="item-score"><img src="${P}" alt="별점" /> ${this.getAttribute("vote-average")}</p>\n          </div>\n        </a>\n      </li>\n    `}}const L=$;var q=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function s(n){try{c(r.next(n))}catch(n){o(n)}}function a(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(s,a)}c((r=r.apply(n,e||[])).next())}))};const A="MISSING_ENV_VAR".API_KEY,Z="https://api.themoviedb.org/3",_=n=>q(void 0,void 0,void 0,(function*(){const e=yield fetch(`${Z}/movie/popular?api_key=${A}&language=ko-KR&page=${n}`);if(!e.ok)throw new Error("인기 영화 불러오기 실패");return e.json()})),j=(n,e)=>q(void 0,void 0,void 0,(function*(){const t=yield fetch(`${Z}/search/movie?api_key=${A}&language=ko-KR&query=${n}&page=${e}`);if(!t.ok)throw new Error("검색된 영화 불러오기 실패");return t.json()})),C="지금 인기 있는 영화",z=n=>w(n).classList.add("hide"),I=n=>w(n).classList.remove("hide"),H=n=>{w("#movie-list-title").textContent=n},N={movies:[],resultsToMovies:n=>n.map((({title:n,poster_path:e,vote_average:t})=>({title:n,posterPath:e,voteAverage:t}))),concatMovies(n){this.movies=[...this.movies,...n]},resetMovies(){this.movies=[]}};var R=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function s(n){try{c(r.next(n))}catch(n){o(n)}}function a(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(s,a)}c((r=r.apply(n,e||[])).next())}))};const O={currentPage:1,query:"",init(){this.bindEvents(),this.renderPopularMovies()},bindEvents(){w("movie-header").addEventListener("home",(()=>{this.refresh(),N.resetMovies(),H(C),this.renderPopularMovies()})),w("movie-header").addEventListener("search",(({detail:n})=>{this.query=n,this.refresh(),H(`"${this.query}" 검색 결과`),this.renderSearchMovies()})),w("movie-list-section").addEventListener("loadMore",(()=>{w("#movie-list-title").textContent===C?this.renderPopularMovies():this.renderSearchMovies()}))},renderPopularMovies(){return R(this,void 0,void 0,(function*(){const n=yield this.loadMovies(_,[this.currentPage]);this.updatePage(n)}))},renderSearchMovies(){return R(this,void 0,void 0,(function*(){const n=yield this.loadMovies(j,[this.query,this.currentPage]);this.updatePage(n)}))},updatePage(n){var e;n.length<20&&z("#load-more"),this.currentPage+=1,e=n,w(".item-list").insertAdjacentHTML("beforeend",` ${e.map((({title:n,posterPath:e,voteAverage:t})=>`\n            <movie-list-item \n              title="${n}" \n              poster-path="${e}" \n              vote-average="${t}"\n            ></movie-list-item>\n          `)).join("")}\n    `)},loadMovies(n,e){return R(this,void 0,void 0,(function*(){I("#skeleton-list");try{const{results:t}=yield n(...e);return N.concatMovies(N.resultsToMovies(t)),z("#skeleton-list"),N.movies.slice(-t.length)}catch(n){z("#skeleton-list"),alert(n.message)}}))},refresh(){this.currentPage=1,w(".item-list").replaceChildren(),w(".search-box").reset(),I("#load-more")}};customElements.define("movie-header",M),customElements.define("movie-list-section",T),customElements.define("movie-list-item",L),O.init()})()})();