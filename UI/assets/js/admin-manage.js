let modal = document.getElementById('myModal5');
let btn = document.getElementsByClassName("mod");
let span = document.getElementsByClassName("close5");

for(let i=0; i<btn.length; i++){
    btn[i].onclick = ()=>{
        modal.style.display = "block"
    }
}
for(let i=0; i<span.length; i++){
span[i].onclick = ()=>{
    modal.style.display = "none"
}
}
let modbtn = document.getElementById("modBtn");
let modal6 = document.getElementById("myModal6")
let span6 = document.getElementsByClassName("close6")[0];
modbtn.onclick = ()=>{
  modal.style.display = "none";
  modal6.style.display = "block"
}
span6.onclick = () =>{
  modal6.style.display = "none";
  }
let delbttn = document.getElementsByClassName("del");
let modal1 = document.getElementById('myModal1');
let span1 = document.getElementsByClassName("close1")[0];
for(let i=0; i<delbttn.length; i++){
  delbttn[i].onclick = ()=>{
    modal1.style.display = "block";
   }
}
span1.onclick = ()=>{
    modal1.style.display = "none"
}
let modal2 = document.getElementById('myModal2')
let canbtn = document.getElementById("cancel");
let delbtn = document.getElementById("delete");
let span2 = document.getElementsByClassName("close2")[0];
canbtn.onclick = ()=>{
  modal1.style.display = "none"
}
delbtn.onclick = ()=>{
  modal1.style.display = "none"
  modal2.style.display = "block";
}
span2.onclick = ()=>{
    modal2.style.display = "none"
}

let addbtn = document.getElementById("addBtn");
let modal3 = document.getElementById("myModal3");
let span3 = document.getElementsByClassName("close3")[0];

addbtn.onclick = ()=>{
  modal3.style.display = "block"
}
span3.onclick = () =>{
  modal3.style.display = "none";
}
let addbtn1 = document.getElementById("addBtn1");
let modal4 = document.getElementById("myModal4");
let span4 = document.getElementsByClassName("close4")[0];
addbtn1.onclick = ()=>{
  modal3.style.display = "none";
  modal4.style.display = "block"
}
span4.onclick = () =>{
  modal4.style.display = "none";
}

// let rem2 = document.getElementById("remove2");


// let span7 = document.getElementsByClassName("close7")[0];
// let span = document.getElementsByClassName("close8")[0];
// let changemodal = document.getElementById("changeModal")
// let canc5 = document.getElementById("cancel5");
// let rem2 = document.getElementById("remove2")
// let changemodal1 = document.getElementById("setmodal")

// for(let i=0; i<change.length; i++){
//   change[i].onclick = ()=>{
//     changemodal.style.display = "block"
//   }
// }



// for(let i=0; i<span7.length; i++){
//   span7[i].onclick = () =>{
//     changemodal.style.display = "none";
//   }
// }

// canc5.onclick = ()=>{
//   changemodal.style.display = "none"
// }
// for(let i=0; i<bttn.length; i++){
// bttn[i].onclick =  ()=>{
//   modal1.style.display = "block"
// }
// }

// span1.onclick = () =>{
//   modal1.style.display = "none";
// }
// span2.onclick = () =>{
//   modal2.style.display = "none";
// }




// let arr5 = [modal, modal1, modal2,modal3,modal4,modal6]
// window.onclick = (event) =>{
//   for(let i=0; i<arr5.length; i++){
//   if (event.target == arr5[i]) {
//     arr5[i].style.display = "none";
//   }
// }
// }




