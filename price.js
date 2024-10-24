
let step1 = prompt(`Enter your price`);
let step2 = step1.slice(1);
let step3 = parseFloat(step2);
let step4 = step3*0.9;
let step5 = step4.toString();
let step6 = step5.slice(0,5);


console.log(`New price is ${step6}$.`);

