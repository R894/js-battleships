(()=>{var t={426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([t.id,"html, body{\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.msg, .dir{\n    margin: 1rem;\n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    font-size: 2rem;\n    padding: 1rem;\n}\n\n.player-grid, .opponent-grid{\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    gap: 4px;\n    margin: 0;\n    width: 440px;\n    background-color: lightgray;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n    flex:1;\n}\n\n.wrapper{\n    display: flex;\n    align-items: center;\n    gap: 10%;\n}\n\n.footer{\n    display: flex;\n    margin-top: auto;\n    justify-content: center;\n}\n\n.cell{\n    background-color: blue;\n    width: 100%;\n    height: 100%;\n    border: 1px solid black;\n}\n\n.cell:hover{\n    background-color: cyan;\n    transform: scale(1.1);\n}",""]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);r&&s[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],p=o[l]||0,u="".concat(l," ").concat(p);o[l]=p+1;var h=n(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var f=i(d,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var c=r(t,i),l=0;l<o.length;l++){var p=n(o[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},951:t=>{t.exports=class{constructor(t,e){this.x=t,this.y=e,this.ship=null,this.hit=!1}containsShip(){return null!=this.ship}isHit(){return this.hit}hitCell(){return this.containsShip()&&this.ship.hit(),this.hit=!0,this.containsShip()?"hit":"miss"}addShip(t){this.ship=t}}},417:(t,e,n)=>{n(643),t.exports=class{constructor(t,e){this.player=t,this.opponent=e,this.currentTurn=1,this.winner=null}takeTurn(t,e,n){let r=null;return 1!=n||this.isOver()?2!=n||this.isOver()||2==this.currentTurn&&(r=this.opponent.makeMove(t,e),console.log("Opponent has taken their turn, swapping to player"),this.currentTurn=1):1!=this.currentTurn||this.player.gameboard.hasUnplacedShips()||(r=this.player.makeMove(t,e),console.log("Player has taken their turn, swapping to opponent"),this.currentTurn=2),r}isOver(){return this.player.gameboard.isGameOver()?(this.winner=this.opponent.name,!0):!!this.opponent.gameboard.isGameOver()&&(this.winner=this.player.name,!0)}}},498:(t,e,n)=>{const r=n(643),i=n(951);t.exports=class{constructor(){this.grid=this.initializeGrid(),this.ships=[],this.unplacedShips=[4,3,3,2]}initializeGrid(){const t=[];for(let e=0;e<10;e++){const n=[];for(let t=0;t<10;t++)n.push(new i(e,t));t.push(n)}return t}placeShip(t){if(null==t.getOccupiedCells())return!1;for(const e of t.getOccupiedCells()){if(e.y>9||e.y<0||e.x>9||e.x<0)return!1;if(this.grid[e.y][e.x].containsShip())return!1}return this.ships.push(t),t.getOccupiedCells().forEach((e=>{this.grid[e.y][e.x].addShip(t)})),!0}hasUnplacedShips(){return 0!=this.unplacedShips.length}placeUnplacedShip(t,e,n="vertical"){if(this.hasUnplacedShips()){const i=new r(Number(this.unplacedShips[0]),n,{x:parseInt(t),y:parseInt(e)});return!(null==i.getOccupiedCells||!this.placeShip(i)||(this.unplacedShips.shift(),0))}}recieveAttack(t,e){return this.grid[e][t].hitCell()}isGameOver(){if(this.hasUnplacedShips())return!1;let t=!0;return this.ships.forEach((e=>{0==e.isSunk()&&(t=!1)})),t}}},507:(t,e,n)=>{n(498),t.exports=class{constructor(t,e){this.gameboard=e,this.name=t,this.opponentGameboard}makeMove(t,e){return this.opponentGameboard.recieveAttack(t,e)}setOpponentGameboard(t){this.opponentGameboard=t}hasWon(){return this.opponentGameboard.isGameOver()}}},643:t=>{t.exports=class{constructor(t,e,n){this.length=t,this.direction=e,this.position=n,this.hits=0}hit(){console.log("hit"),this.hits+=1,this.isSunk()&&console.log("Ship has been sunk")}isSunk(){return this.hits>=this.length}getOccupiedCells(){if("horizontal"===this.direction){let t=[];for(let e=0;e<this.length;e++){const n={x:this.position.x+e,y:this.position.y};t.push(n)}return t}{let t=[];for(let e=0;e<this.length;e++){if(this.position.y+e>9)return null;t.push({x:this.position.x,y:this.position.y+e})}return t}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),i=n.n(r),o=n(569),s=n.n(o),a=n(565),c=n.n(a),l=n(216),p=n.n(l),u=n(589),h=n.n(u),d=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;const m=n(498),g=n(507),y=n(417),v=document.querySelector(".player-grid"),b=document.querySelector(".opponent-grid"),x=new m,S=new m,C=new g("Opponent",S),k=new g("Player 1",x);let w=document.querySelector(".msg");k.setOpponentGameboard(S),C.setOpponentGameboard(x);const O=new y(k,C),A=document.querySelector(".dir button");let T="vertical";function E(t){return Math.floor(Math.random()*t)}for(;S.hasUnplacedShips();){const t=E(10),e=E(10),n=["horizontal","vertical"];S.placeUnplacedShip(t,e,n[E(2)])}function G(t,e,n=!0){e.querySelectorAll(".cell").forEach((e=>{t.grid[e.getAttribute("data-y")][e.getAttribute("data-x")].containsShip()&&1==n&&(e.style.backgroundColor="green"),1==t.grid[e.getAttribute("data-y")][e.getAttribute("data-x")].hit&&(e.style.backgroundColor="gray"),1==t.grid[e.getAttribute("data-y")][e.getAttribute("data-x")].hit&&t.grid[e.getAttribute("data-y")][e.getAttribute("data-x")].containsShip()&&(e.style.backgroundColor="red")}))}A.addEventListener("click",(()=>{"horizontal"==T?(T="vertical",A.textContent="Dir: Y"):(T="horizontal",A.textContent="Dir: X")}));for(let t=0;t<=9;t++)for(let e=0;e<=9;e++){let n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-x",e),n.setAttribute("data-y",t),n.addEventListener("click",(()=>{if(k.gameboard.hasUnplacedShips())return w.textContent="Place your ships",void(k.gameboard.placeUnplacedShip(e,t,T)?(w.textContent=`Ship placed at (${e}, ${t})`,G(x,v)):w.textContent="Invalid placement, please choose another")})),v.appendChild(n)}for(let t=0;t<=9;t++)for(let e=0;e<=9;e++){let n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-x",e),n.setAttribute("data-y",t),n.addEventListener("click",(r=>{const i=O.takeTurn(e,t,1);"hit"==i?(n.style.backgroundColor="red",w.textContent="Hit",w.textContent=`Player has hit the opponent at (${e}, ${t})`):"miss"==i&&(n.style.backgroundColor="gray",w.textContent=`Player has missed the opponent at (${e}, ${t})`),null!=i&&("hit"==O.takeTurn(E(10),E(10),2)&&(w.textContent=`You've been hit at (${e}, ${t})`),O.isOver()&&(w.textContent=`Game is over! ${O.winner} has won!`),G(x,v))})),b.appendChild(n)}})()})();