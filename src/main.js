import "./css/index.css"

// function onScroll() {
//   if(scrollY > 41) {
//       navgation.classList.add('scroll')
//   } else {
//       navgation.classList.remove('scroll')
//   }
// }
// onScroll();
/*** text circular logo ***/

let text = document.querySelector('.text p');

text.innerHTML = text.innerText.split("").map((char, i) => `<b style="transform:rotate(${i * 16.7}deg">${char}</b>`).join("");

/*** text circular logo ***/

/*** enviar form whats ***/

document.querySelector('#submit').addEventListener('click',function(){
    let cliente = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let email = document.querySelector('#email').value;
    let dateId = document.querySelector('#dateId').value;
    let dateVt = document.querySelector('#dateVt').value;
    let telefone = document.querySelector('#telefone').value;
    let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;
    
   let url = "https://api.whatsapp.com/send?phone=5585997327029&text= Bem vindo a Passagens no precinho!" + "%0A%0A Qual é o seu nome? %0A*" + cliente + "* %0A%0A Qual o seu sobrenome ?%0A*" + sobrenome + "*%0A%0A Qual o seu e-mail %0A*" + email + "*%0A%0A Data de Ida ? %0A*" + dateId + "*%0A%0A Data de Volta ? %0A*" + dateVt + "*%0A%0A Qual é o seu telefone ? %0A*" + telefone + "*%0A%0A Quantidade de pessoas ? %0A*" + exampleFormControlSelect1 + "*%0A"; 
   
   window.open(url);
   
   });

 /*** enviar form whats ***/

// document.querySelector('#app').innerHTML = ``

