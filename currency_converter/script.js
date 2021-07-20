const cur1 = document.getElementById("currency_1");
const cur2 = document.getElementById("currency_2");
const amount = document.getElementById('amount1');
const amt2 = document.getElementById('amount2');
const swap = document.getElementById('swap');

let a = amount.value  // amoount in 1st input (in first currency)

// adding event listners
cur1.addEventListener('change', ()=>{
    apirequest()
})

cur2.addEventListener('change', ()=>{
    apirequest()
})

amount.addEventListener('change', () =>{
    a = amount.value;
    apirequest()
})
amount.addEventListener('keyup', (e) =>{
    amount.value = e.target.value
    a = (amount.value);
    apirequest();
})

swap.addEventListener('click', () =>{
    let val = cur1.value;
    cur1.value = cur2.value;
    cur2.value = val;
    apirequest();
})





const apirequest = async() =>{
    const resp = await fetch(`https://v6.exchangerate-api.com/v6/9eb13cec034bcf7118d8275b/pair/${cur1.value}/${cur2.value}`);
    const obj = await resp.json();

    amt2.value = a * obj.conversion_rate;
}



