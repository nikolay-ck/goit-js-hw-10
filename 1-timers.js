import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";let s=null;const e=document.querySelector("[data-start]"),u=document.getElementById("datetime-picker"),p=document.querySelector("[data-days]"),F=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let a;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<=new Date?(e.disabled=!0,i.error({position:"topRight",title:"Error",message:"Please choose a date in the future",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#ffffff"})):(e.disabled=!1,e.classList.add("is-active"),i.success({position:"topRight",title:"Success",message:"Date selected!",backgroundColor:"#59A10D",messageColor:"#FFFFFF",titleColor:"#ffffff"}))}};y("#datetime-picker",b);function r(t){return String(t).padStart(2,"0")}function d({days:t,hours:o,minutes:n,seconds:c}){p.textContent=t,F.textContent=r(o),C.textContent=r(n),g.textContent=r(c)}function v(){a=setInterval(()=>{const o=s-new Date;if(o<=0){clearInterval(a),d({days:0,hours:0,minutes:0,seconds:0}),u.disabled=!1,e.disabled=!0;return}const n=w(o);d(n)},1e3)}function w(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}e.addEventListener("click",()=>{s&&(e.classList.remove("is-active"),e.disabled=!0,u.disabled=!0,clearInterval(a),v())});
//# sourceMappingURL=1-timers.js.map