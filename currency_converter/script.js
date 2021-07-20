const cur1 = document.getElementById("currency_1");
const cur2 = document.getElementById("currency_2");
const amount = document.getElementById('amount1');
const amt2 = document.getElementById('amount2');

let c1 = cur1.value; // first currency
let c2 = cur2.value; // second currency
let a = amount.value  // amoount in 1st input (in first currency)

// adding event listners
cur1.addEventListener('change', ()=>{
    c1 = cur1.value
    apirequest()
    // console.log(c1);
})

cur2.addEventListener('change', ()=>{
    c2 = cur2.value
    apirequest()
    // console.log(c2);
})

amount.addEventListener('change', () =>{
    a = amount.value;
    apirequest()
    // console.log(a);
})
// console.log(a);
// console.log(c1);
// console.log(c2);



const apirequest = async() =>{
    const resp = await fetch(`https://v6.exchangerate-api.com/v6/9eb13cec034bcf7118d8275b/pair/${c1}/${c2}`);
    const obj = await resp.json();
    amt2.value = a * obj.conversion_rate;
    // console.log(obj);
}



