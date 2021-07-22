//------------------------------- handeling page 1 ----------------
const username = document.getElementById('username');
const intpass = document.getElementById('password');
const cnfrmpass = document.getElementById('confirm-password');
const next = document.getElementById('next');
const p1 = document.getElementById('page1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

function valid1(){
    if(((username.value).length < 6) || intpass.value !== cnfrmpass.value){
        if((username.value).length < 6) console.log(1);
        if(intpass.value !== cnfrmpass) console.log(2);
        alert("somthing went wrong");
    }else{
        console.log(username.value);
        console.log(intpass.value);
        console.log(cnfrmpass.value);
        p1.classList.remove('show');
        p2.classList.add('show');

    }
}

next.addEventListener('click',valid1)





//---------------------- page 1 ------------------


//------------------------------------ handeling page 2 ------------------------
const previous = document.getElementById('prevbtn');
const next2 = document.getElementById('n2');

previous.addEventListener('click', () =>{
    p2.classList.remove('show');
    p1.classList.add('show');
})

next2.addEventListener('click', ()=>{
    p2.classList.remove('show');
    p3.classList.add('show');
})



//-----------------------------------page 2 ----------------------------