function t(t,e){return new Promise(((n,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:t,delay:e}):i({position:t,delay:e})}),e)}))}Notiflix.Notify.init({width:"280px",position:"center-top",distance:"30px",opacity:1});const e={startBtn:document.querySelector('button[type="submit"]'),delayInput:document.querySelector('input[name="delay"]').value,stepInput:document.querySelector('input[name="step"]').value,amountInput:document.querySelector('input[name="amount"]').value};e.startBtn.addEventListener("click",(()=>{for(let n=1;n<=e.amountInput;n+=1)t(n,e.delayInput).then((({position:t,delay:e})=>{Notiflix.Notify.success(`Fulfilled promise ${t} in ${e}ms`)})).catch((({position:t,delay:e})=>{Notiflix.Notify.failure(`Rejected promise ${t} in ${e}ms`)}))}));
//# sourceMappingURL=03-promises.428930ac.js.map