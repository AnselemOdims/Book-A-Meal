

let todmenu = document.getElementById("todMenu");
let menumodal = document.getElementById("setModal");
var menuspan = document.getElementsByClassName("closer1")[0];

todmenu.onclick = ()=>{
    menumodal.style.display = "block"
}
menuspan.onclick = ()=>{
    menumodal.style.display = "none"
}
window.onclick = (event)=>{
    if(event.target == menumodal){
    menumodal.style.display = "none"
    }
}
let menuBtn = document.getElementsByClassName("foodie");

let menuspan1 = document.getElementsByClassName("closer2");
let menumodal1 = document.getElementById("setModal1");
let cancel = document.getElementById("cancel1")
let remove = document.getElementById("remove")
let remModal= document.getElementById("setModal2")
let menuspan2 = document.getElementsByClassName("closer3")[0];

for(let i=0; i<menuBtn.length; i++){
    menuBtn[i].onclick = ()=>{
    menumodal1.style.display = "block"
}
}

for(let i=0; i<menuspan1.length; i++){
     menuspan1[i].onclick = ()=>{
    menumodal1.style.display = "none"
}
}
cancel.onclick= ()=>{
    menumodal1.style.display = "none"
}
remove.onclick= ()=>{
    remModal.style.display = "block";
    menumodal1.style.display = "none"
    menumodal.style.display = "none"
}
menuspan2.onclick = ()=>{
    remModal.style.display = "none"
}

let yestbttn = document.getElementById("yestMenu");
let setbttn = document.getElementById("todMenu1")
let yestmodal = document.getElementById("setModal3");
let setmodal  = document.getElementById("setModal4")
let menuspan3 = document.getElementsByClassName("closer4")[0];
let menuspan4 = document.getElementsByClassName("closer5")[0];


yestbttn.onclick = ()=>{
    yestmodal.style.display = "block"
}
menuspan3.onclick = ()=>{
    yestmodal.style.display = "none"
}
window.onclick = (event)=>{
    if(event.target == yestmodal){
    yestmodal.style.display = "none"
    }
}
setbttn.onclick = ()=>{
    setmodal.style.display = "block";
    yestmodal.style.display = "none"
}
menuspan4.onclick = ()=>{
    setmodal.style.display = "none"
}

let imgbttn = document.getElementsByClassName("food");
let addmodal = document.getElementById("setModal5")
let menuspan5 = document.getElementsByClassName("closer6")[0];
let menuspan6 = document.getElementsByClassName("closer7")[0];

let cancelled = document.getElementById("cancel");
let added = document.getElementById("add");
let addModal = document.getElementById("setModal6");

for(let i=0; i<imgbttn.length; i++){
    imgbttn[i].onclick = ()=>{
        addmodal.style.display= "block"
    }
}
menuspan5.onclick = ()=>{
    addmodal.style.display = "none"
}
cancelled.onclick=()=>{
  addmodal.style.display = "none"
}
added.onclick = ()=>{
  addModal.style.display = "block";
  addmodal.style.display = "none"
}
menuspan6.onclick = ()=>{
    addModal.style.display = "none"
}