
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
let menumodal1 = document.getElementById("setModal1");
let menuspan1 = document.getElementsByClassName("closer2");
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
let cancel = document.getElementById("cancel1");
cancel.onclick= ()=>{
    menumodal1.style.display = "none"
}
let remove = document.getElementById("remove");
let remModal= document.getElementById("setModal2");
let menuspan2 = document.getElementsByClassName("closer3")[0];
remove.onclick= ()=>{
    remModal.style.display = "block";
    menumodal1.style.display = "none"
    menumodal.style.display = "none"
}
menuspan2.onclick = ()=>{
    remModal.style.display = "none"
}
let yestbttn = document.getElementById("yestMenu");
let menuspan3 = document.getElementsByClassName("closer4")[0];
let yestmodal = document.getElementById("setModal3");

yestbttn.onclick = ()=>{
    yestmodal.style.display = "block"
}
menuspan3.onclick = ()=>{
    yestmodal.style.display = "none"
}
let setmodal  = document.getElementById("setModal4");
let menuspan4 = document.getElementsByClassName("closer5")[0];
let setbttn = document.getElementById("todMenu1");

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
for(let i=0; i<imgbttn.length; i++){
    imgbttn[i].onclick = ()=>{
        addmodal.style.display= "block"
    }
}
for(let i=0; i<menuspan5.length; i++){
menuspan5[i].onclick = ()=>{
    addmodal.style.display = "none"
}
}
let cancelled = document.getElementById("cancel");
cancelled.onclick=()=>{
    addmodal.style.display = "none"
  }
let added = document.getElementById("add");
let addModal = document.getElementById("setModal6");
let menuspan6 = document.getElementsByClassName("closer7")[0];

added.onclick = ()=>{
    addModal.style.display = "block";
    addmodal.style.display = "none"
  }

 menuspan6.onclick = ()=>{
        addModal.style.display = "none"
    }

//  let change = document.getElementsByClassName("foods");
//  let changemodal = document.getElementById("changeModal");
//  let span7 = document.getElementsByClassName("close7")[0];
 
//  for(let i=0; i<change.length; i++){
//      change[i].onclick = ()=>{
//        changemodal.style.display = "block"
//      }
//    }
 
//    span7.onclick = () =>{
//      changemodal.style.display = "none";
//    }
//  let canc5 = document.getElementById("cancel5");
//  canc5.onclick = ()=>{
//      changemodal.style.display = "none"
//    }


