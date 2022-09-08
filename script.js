
//NAVBAR//
let toggleBtn = document.getElementsByClassName('toggle-btn')[0];
let links = document.getElementsByClassName('menu')[0];
let nav = document.getElementById('navbar');


toggleBtn.addEventListener("click", function(){
	links.classList.toggle('active');
	nav.classList.add('sticky');
	if (this.scrollY < 50 ) {
    	nav.classList.remove('sticky');
    }
   

})

window.addEventListener("scroll", function(e){
	if (this.scrollY > 50 ) {
    	nav.classList.add('sticky');
    }
    else{
    	nav.classList.remove('sticky');
    }
})





                                                                   //GALERIE//

let fullImgBox = document.getElementById("fullImgBoxx");
let fullImg = document.getElementById("fullImg");


function openFullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display="none";
}





                                               // CONTACT//


const nomInput=document.querySelector("#nom");
const emailInput=document.querySelector("#email");
const messageInput=document.querySelector("#message");
const errorInput=document.querySelector("#error");
const successInput=document.querySelectorAll("#success");

function validateForm(){
    
    if(nomInput.value.lenght<2){
        errorNodes[0].innerText="Ce champs ne peut pas être vide";
        nomInput.classList.add("error-border");
    }
   
}











