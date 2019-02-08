
          const openNav = () => {
            document.getElementById("mySidebar").style.width = "130px";
            document.getElementById("side").style.marginRight = "130px";
          }
          
          const closeNav = () => {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("side").style.marginRight= "0";
          }
                  
        
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
        // When the user clicks anywhere outside of the modal, close it
        
        
        let modal1 = document.getElementById('myModal1');
        let modal2 = document.getElementById('myModal2')
        let bttn = document.getElementsByClassName("del")
        
        let can = document.getElementById("cancel");
        let del = document.getElementById("delete")
        let span1 = document.getElementsByClassName("close1")[0];
        let span2 = document.getElementsByClassName("close2")[0];
        let span3 = document.getElementsByClassName("close3")[0];
        let span4 = document.getElementsByClassName("close4")[0];
        let span6 = document.getElementsByClassName("close6")[0];
        let span7 = document.getElementsByClassName("close7")[0];
        
        let addbtn = document.getElementById("addBtn")
        let modal4 = document.getElementById("myModal4")
        let modal6 = document.getElementById("myModal6")
        let addbtn1 = document.getElementById("addBtn1")
        let addbtn2 = document.getElementById("addBtn2")
        let modal3 = document.getElementById("myModal3")
        let change = document.getElementsByClassName("foods")
        let changemodal = document.getElementById("changeModal")
        let canc5 = document.getElementById("cancel5");
        let rem2 = document.getElementById("remove2")
        let changemodal1 = document.getElementById("setmodal")
        
        for(let i=0; i<change.length; i++){
          change[i].onclick = ()=>{
            changemodal.style.display = "block"
          }
        }
        addbtn2.onclick = ()=>{
          modal.style.display = "none";
          modal6.style.display = "block"
        }
        span6.onclick = () =>{
          modal6.style.display = "none";
          
        }
        span7.onclick = () =>{
          changemodal.style.display = "none";
        }
        canc5.onclick = ()=>{
          changemodal.style.display = "none"
        }
        for(let i=0; i<bttn.length; i++){
        bttn[i].onclick =  ()=>{
          modal1.style.display = "block"
        }
        }
        
        span1.onclick = () =>{
          modal1.style.display = "none";
        }
        span2.onclick = () =>{
          modal2.style.display = "none";
        }
        span3.onclick = () =>{
          modal3.style.display = "none";
        }
        span4.onclick = () =>{
          modal4.style.display = "none";
        }
        
        
        let arr5 = [modal, modal1, modal2,modal3,modal4,modal6]
        window.onclick = (event) =>{
          for(let i=0; i<arr5.length; i++){
          if (event.target == arr5[i]) {
            arr5[i].style.display = "none";
          }
        }
        }
        can.onclick = ()=>{
          modal1.style.display = "none"
        }
        del.onclick = ()=>{
          modal1.style.display = "none"
          modal2.style.display = "block";
        }
        addbtn.onclick = ()=>{
          modal3.style.display = "block"
        }
        addbtn1.onclick = ()=>{
          modal3.style.display = "none";
          modal4.style.display = "block"
        }
        
        