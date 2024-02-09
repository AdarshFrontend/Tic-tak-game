let boxes= document.querySelectorAll(".box");
let restbtn=document.querySelector("#rest");
let newbtn=document.querySelector(".new");
let msgcont=document.querySelector(".msgcont");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {

box.addEventListener("click",()=>{
if(turnO){
    box.innerText="O";
    turnO=false;
}
else{
    box.innerText="X"
    turnO=true;
}
box.disabled=true;
checkWinner();
});
});


const checkWinner = ()=>{
for(pattern of winPatterns){
    let pat1Val=boxes[pattern[0]].innerText;
let pat2Val=boxes[pattern[1]].innerText;
let pat3Val=boxes[pattern[2]].innerText;
if(pat1Val!=""&&pat2Val!=""&&pat3Val!=""){
    if(pat1Val===pat2Val&&pat2Val===pat3Val){
        console.log("win");
        showWinner(pat1Val);
    }
}
}
};
const disable =() => {
    for(let box of boxes){
box.disabled=true;
    }
}
const enable =() => {
    for(let box of boxes){
box.disabled=false;
box.innerText="";
    }
}
const reset=() => {
    turnO=true;
    enable();
    
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation ${winner} you win`;
  msg.style.color="red";

};

restbtn.addEventListener("click",reset)
newbtn.addEventListener("click",reset)