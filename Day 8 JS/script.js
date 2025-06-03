let countv=0;
let a=document.getElementById("count");
a.innerHTML=countv;

function updateVal(countv){
    document.getElementById("count").innerHTML=countv;
}

function incre(){
    countv+=1;
    updateVal(countv);
    console.log("The value is : ", countv)
}

function decre(){
    countv-=1;
    updateVal(countv);
    console.log("The value is : ", countv)
}

let reset=document.getElementById("reset");

reset.addEventListener("click",()=>{
    countv=0;
    updateVal(countv);
})