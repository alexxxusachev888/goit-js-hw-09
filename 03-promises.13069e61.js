!function(){function t(t,n){return new Promise((function(e,o){var i=Math.random()>.3;setTimeout((function(){i?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))}Notiflix.Notify.init({width:"280px",position:"center-top",distance:"30px",opacity:1});var n={startBtn:document.querySelector('button[type="submit"]'),delayInput:document.querySelector('input[name="delay"]').value,stepInput:document.querySelector('input[name="step"]').value,amountInput:document.querySelector('input[name="amount"]').value};n.startBtn.addEventListener("click",(function(){for(var e=1;e<=n.amountInput;e+=1)t(e,n.delayInput).then((function(t){var n=t.position,e=t.delay;Notiflix.Notify.success("Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(t){var n=t.position,e=t.delay;Notiflix.Notify.failure("Rejected promise ".concat(n," in ").concat(e,"ms"))}))}))}();
//# sourceMappingURL=03-promises.13069e61.js.map
