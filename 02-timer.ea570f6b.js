!function(){Notiflix.Notify.init({width:"280px",position:"center-top",distance:"30px",opacity:1});var t={startBtn:document.querySelector("[data-start]"),pickInput:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.startBtn.disabled=!0;var e=null,n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(n){return e=n[0],n[0].getTime()<=this.now.getTime()?Notiflix.Notify.failure("Please choose a date in the future"):t.startBtn.disabled=!1,n[0]}};flatpickr(t.pickInput,n);var i={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var n,i,a,r,s,u,c,d,l,f=e.getTime()-Date.now();!function(e){var n=e.days,i=e.hours,a=e.minutes,r=e.seconds;t.days.textContent=o(n),t.hours.textContent=o(i),t.minutes.textContent=o(a),t.seconds.textContent=o(r)}((n=f,s=24*(r=60*(a=60*(i=1e3))),u=Math.floor(n/s),c=Math.floor(n%s/r),d=Math.floor(n%s%r/a),l=Math.floor(n%s%r%a/i),{days:u,hours:c,minutes:d,seconds:l}))}),1e3))}};function o(t){return String(t).padStart(2,"0")}t.startBtn.addEventListener("click",(function(){i.start()}))}();
//# sourceMappingURL=02-timer.ea570f6b.js.map
