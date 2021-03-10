(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");let a;a=setInterval((()=>{const e=(()=>{const e=(new Date("11 march 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,seconds:Math.floor(e%60),minutes:Math.floor(e/60%60),hours:Math.floor(e/60/60)}})();t.textContent=e.hours<10?`0${e.hours}`:e.hours,o.textContent=e.minutes<10?`0${e.minutes}`:e.minutes,n.textContent=e.seconds<10?`0${e.seconds}`:e.seconds,e.timeRemaining<0&&(clearInterval(a),t.textContent=o.textContent=n.textContent="00")}))})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll('a[href*="#"]'),o=document.querySelector("body"),n=()=>{e.classList.toggle("active-menu")};o.addEventListener("click",(o=>{const a=o.target;a.closest(".menu")?n():a.closest("menu")?t.forEach((e=>{e===a&&("close"!==e.getAttribute("href").substring(1)?(n(),((e,t)=>{t.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})(e,o)):n())})):e.classList.contains("active-menu")&&n()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=()=>{let t,o=0;const n=document.documentElement.clientWidth;e.style.display="block",n>=768&&(t=setInterval((()=>{o+=.02,o<1?e.style.opacity=o:clearInterval(t)})))};t.forEach((e=>e.addEventListener("click",o))),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector('main>a[href = "#service-block"]');e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,a)=>{var r;e===n&&(r=a,o.forEach(((e,o)=>{r===o?(t[o].classList.add("active"),e.classList.remove("d-none")):(t[o].classList.remove("active"),e.classList.add("d-none"))})))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,a=0;t.forEach(((e,t)=>{const n=document.createElement("li");n.classList.add("dot"),0===t&&n.classList.add("dot-active"),o.append(n)}));const r=document.querySelectorAll(".dot"),s=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},c=()=>{s(t,a,"portfolio-item-active"),s(r,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(r,a,"dot-active")},i=(e=3e3)=>{n=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault();const o=e.target;o.matches(".portfolio-btn, .dot")&&(s(t,a,"portfolio-item-active"),s(r,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&r.forEach(((e,t)=>{e===o&&(a=t)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(r,a,"dot-active"))})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i()})(),(()=>{const e=document.querySelector(".calc-block");e.addEventListener("input",(e=>{"input"===e.target.tagName.toLowerCase&&(e.target.value=e.target.value.replace(/\D/,""))})),((t=100)=>{const o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),a=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),s=document.getElementById("total");let l;const c=e=>{const c=e.target,i=(()=>{let e=0,s=1,l=1;const c=o.options[o.selectedIndex].value,i=+n.value;return r.value>1&&(s+=(r.value-1)/10),a.value&&a.value<5?l*=2:a.value&&a.value<10&&(l*=1.5),c&&i&&(e=Math.floor(t*c*i*s*l)),e})();let m=s.textContent?+s.textContent:0;if(c.matches("select")||c.matches("input")){const e=(e,t)=>function(o){let n=this.lastCall;this.lastCall=Date.now(),n&&this.lastCall-n<=t&&clearTimeout(this.lastCallTimer),this.lastCallTimer=setTimeout((()=>e(o)),t)},t=()=>{cancelAnimationFrame(l);const e=()=>{l=requestAnimationFrame(e),m!==i?(m<i?i-m<20?m++:m+=Math.floor((i-m)/5):0===i?m=0:m-i<20?m--:m-=Math.floor((m-i)/5),s.textContent=m):cancelAnimationFrame(l)};l=requestAnimationFrame(e)};c.matches("input")?c.addEventListener("keyup",e(t,1e3)):t()}};e.addEventListener("change",(e=>{c(e)})),e.addEventListener("input",(e=>{c(e)}))})(100)})(),(()=>{document.querySelectorAll(".command__photo");const e=document.getElementById("command");e.addEventListener("mouseover",(e=>{e.target.classList.contains("command__photo")&&(e.target.src=e.target.dataset.img)})),e.addEventListener("mouseout",(e=>{e.target.classList.contains("command__photo")&&(e.target.src=e.target.dataset.img.replace(/\w(?=\.)/,""))}))})(),(()=>{const e=document.querySelector("body");e.querySelectorAll(".form-email").forEach((e=>e.required=!0)),e.addEventListener("input",(e=>{const t=e.target;t.classList.contains("form-name")?t.value=t.value.replace(/[^а-яё\s]/gi,""):t.classList.contains("form-email")?t.value=t.value.replace(/[^a-z@\-_.']/gi,""):t.classList.contains("form-phone")?t.value=t.value.replace(/[^\d\+]/gi,""):t.classList.contains("mess")&&(t.value=t.value.replace(/[^а-яё\s\d,.!?;:()]/gi,""))})),e.addEventListener("blur",(e=>{const t=e.target;t.closest("form")&&((e=>{e.value=e.value.trim(),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/^-+/g,""),e.value=e.value.replace(/-+$/g,""),e.value=e.value.trim()})(t),t.classList.contains("form-name")&&(t.value=t.value.toLowerCase(),t.value=t.value.replace(/(\s|^)[а-яё]/gi,(e=>e.toUpperCase()))))}),!0)})(),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),o=document.getElementById("form3"),n=document.createElement("div");n.style.cssText="font-size: 2rem; color: white;";const a=(e,t)=>{const o=e.firstChild;o.style.opacity=1;const n=setInterval((()=>{o.style.opacity=o.style.opacity-.05,o.style.opacity<=.05&&(clearInterval(n),o.style.display="none",e.textContent=t,setTimeout((()=>e.textContent=""),2500),e.closest(".popup")&&setTimeout((()=>e.closest(".popup").style.display="none"),5e3))}),30)},r=(e,t)=>{e.preventDefault(),t.appendChild(n),(e=>{e.textContent="";const t=document.createElement("div");t.style.cssText="\n            margin-left: auto;\n            margin-right: auto;\n            width: 70px;\n            height: 70px;\n            background: url(./images/preloader.png) center center no-repeat;",e.appendChild(t)})(n);const o=new FormData(t);let r={};o.forEach(((e,t)=>{r[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}))(r).then((e=>{if(200!==e.status)throw new Error("status network not 200");a(n,"Спасибо! Мы скоро с вами свяжемся!")})).catch((e=>{a(n,"Что-то пошло не так"),console.error(e)})),t.querySelectorAll("input").forEach((e=>e.value=""))},s=new Validator({selector:"#form1",pattern:{name:/^[а-яё\s]{2,}$/gi,email:/^[\w.-]+@[\w]+\.[\w]{2,}$/gi,phone:/^(\+)?\d{7,13}$/gi},method:{email:[["notEmpty"],["pattern","email"]],phone:[["notEmpty"],["pattern","phone"]],name:[["notEmpty"],["pattern","name"]]}}),l=new Validator({selector:"#form2",pattern:{name:/^[а-яё\s]{2,}$/gi,message:/^[а-яё\s]+$/gi,email:/^[\w.-]+@[\w]+\.[\w]{2,}$/gi,phone:/^(\+)?\d{7,13}$/gi},method:{message:[["notEmpty"],["pattern","message"]],email:[["notEmpty"],["pattern","email"]],phone:[["notEmpty"],["pattern","phone"]],name:[["notEmpty"],["pattern","name"]]}}),c=new Validator({selector:"#form3",pattern:{name:/^[а-яё\s]{2,}$/gi,email:/^[\w.-]+@[\w]+\.[\w]{2,}$/gi,phone:/^(\+)?\d{7,13}$/gi},method:{email:[["notEmpty"],["pattern","email"]],phone:[["notEmpty"],["pattern","phone"]],name:[["notEmpty"],["pattern","name"]]}});s.init(),l.init(),c.init(),e.addEventListener("submit",(t=>{0===s.error.size&&r(t,e)})),t.addEventListener("submit",(e=>{0===l.error.size&&r(e,t)})),o.addEventListener("submit",(e=>{0===c.error.size&&r(e,o)}))})()})();