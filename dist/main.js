(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),s=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),c=()=>{let e=(new Date("1 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},l=(e,t)=>{e.textContent=t<10?`0${t}`:t};setInterval((()=>{c().timeRemaining>0&&(l(t,c().days),l(o,c().hours),l(s,c().minutes),l(n,c().seconds))}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")},o=e=>{e.scrollIntoView({behavior:"smooth",block:"start"})};document.addEventListener("click",(s=>{const n=s.target;if(e.classList.contains("active-menu")&&(n.classList.contains("close-btn")&&t(),n.closest("menu")||t()),(n.classList.contains("menu")||n.closest(".menu"))&&t(),n.classList.contains("menu-item")){s.preventDefault();const e=n.getAttribute("href").substr(1);o(document.getElementById(e)),t()}("mouse-scroll"==n.id||n.closest("#mouse-scroll"))&&(s.preventDefault(),o(document.getElementById("service-block")))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");e.querySelector(".popup-close"),document.documentElement.clientWidth<=768?(t.forEach((t=>{t.addEventListener("click",(t=>{e.style.display="block"}))})),e.addEventListener("click",(t=>{const o=t.target;console.log(o),o.closest(".popup-content")&&!o.classList.contains("popup-close")||(e.style.display="none")}))):(e.style.cssText="\n                            display: block;\n                            opacity: 0;\n                            transition: opacity .3s;\n                            transform: translateX(9999px);\n                        ",t.forEach((t=>{t.addEventListener("click",(t=>{e.style.transform="translateX(0)",e.style.opacity="1"}))})),e.addEventListener("click",(t=>{const o=t.target;console.log(o),o.closest(".popup-content")&&!o.classList.contains("popup-close")||(e.style.transform="translateX(9999px)",e.style.opacity="0")})))})(),document.body.addEventListener("input",(e=>{const t=e.target;"text"==t.type&&(t.value=t.value.replace(/[^а-яА-Я()-\s]/,"")),"tel"==t.type&&(t.value=t.value.replace(/[^0-9()-]/,"")),"email"==t.type&&(t.value=t.value.replace(/[^a-zA-Z@-_.!~*']/,""))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const s=e.target;if(s.closest(".service-header-tab")){const e=s.closest(".service-header-tab");t.forEach(((t,s)=>{t===e?(t.classList.add("active"),o[s].classList.remove("d-none")):(t.classList.remove("active"),o[s].classList.add("d-none"))}))}}))})(),((e,t,o,s,n="portfolio-item-active",c="dot-active")=>{const l=document.querySelector(e),a=document.querySelectorAll(t),r=document.querySelector(o),i=document.getElementsByClassName(s);let d,u=0;for(let e of[l,a,r,i])if(null===e||0==a.length)return;a.forEach((()=>{r.insertAdjacentHTML("beforeend",'<li class="dot"></li>')}));const m=(e,t,o)=>{e[u].classList.remove(o)},p=(e,t,o)=>{e[u].classList.add(o)},v=()=>{m(a,0,n),m(i,0,c),u++,u>=a.length&&(u=0),p(a,0,n),p(i,0,c)},y=()=>{d=setInterval(v,2e3)};l.addEventListener("click",(e=>{e.preventDefault();const t=e.target;if(t.matches(".dot, .portfolio-btn")){if(m(a,0,n),m(i,0,c),t.matches("#arrow-right"))u++;else if(t.matches("#arrow-left"))u--;else if(t.classList.contains("dot"))for(let e in i)t===i[e]&&(u=e);u>=a.length&&(u=0),u<0&&(u=a.length-1),p(a,0,n),p(i,0,c)}})),l.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(d)}),!0),l.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&y()}),!0),y()})(".portfolio-content",".portfolio-item",".portfolio-dots","dot","portfolio-item-active","dot-active")})();