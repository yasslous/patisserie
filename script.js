//toggle
var small_menu = document.querySelector('.toggle_menu') ;
var menu = document.querySelector('.menu') ;
small_menu.onclick = function () {
   small_menu.classList.toggle('active') ;
   menu.classList.toggle('responsive') ;
}
//chatbot
var question = document.getElementById("question") ;
var reponse = document.getElementById("reponse") ;



function afficherReponse() {
   if(question.value == "bonjour" ) {
    reponse.innerHTML =  "Bonjour ! vous pouvez nous poser des questions "   ;
   } else if (question.value == "quelle est votre adresse ?") {
      reponse.innerHTML = "Avenue Mohamed El Hedi Khafcha Dar Chaabane El Fehri Nabeul" ;
   } else if (question.value == "quelle est votre numéro de téléphone ?") {
      reponse.innerHTML = "+216 97629449" ;
   } else if ( question.value == "quand vous étes disponibles  ?") {
      reponse.innerHTML = "De 8h jusqu ' à 16h ";

   } else {
      reponse.innerHTML =  "Desolè j'ai pas compris ";
   }
}
//formulaire
var nom = document.getElementById("nom") ;
var email = document.getElementById("email") ;
var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const numbers = [1,2,3,4,5,6,7,8,9] ;

var numTel = document.getElementById("numTel") ;

function verifier() {
   if ( nom.value.length == 0) {
      nom.style.outline = "1px solid red" ;
   }
   if (!expressionReguliere.test(email.value))  {
      email.style.outline = "1px solid red" ;
   }
   for (var i = 0 ; i< numbers.length ; i++) {
      if(numTel != numbers[i].toString() || numTel.value.length == 0) {
         numTel.style.outline = "1px solid red" ;
      }
   }

   
}




