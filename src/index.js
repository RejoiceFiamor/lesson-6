
// let age= 18
// let hometown= Abor
// // alert(' I love singing');
// let name = prompt('What is your name');
// alert("Hi " + name + ", welcome to our website.");
// alert(`Hi ${name}, welcome to our website`)

// let title= prompt("What title do you prefer?");
// let name= prompt("What your name?");
// let product= prompt("What is your kind prefer product?");
// // alert("name");
// // alert("Hi + name +", welcome to our website.); 
// alert(`Hi ${title}, ${name} do you like ${product}`);


console.log(5);
let Rejoice = 7;
 

 let name2 = "Mawusi is my name";
 let sentence = "Hello viwers, " + name2;
 let sentence1 = `Hi ✌ ${name2}`;
 console.log(sentence)

 function findMe(){ // creating a function that executes when the 
    let pfour = document.getElementById("pfour")
    pfour.style.display ="block";
    pfour.style.backgroundColor ="black";
    pfour.style.color ="white";
 }
 let pthree = document.getElementById("pthree");
 pthree.addEventListener("dblclick", findMe);

function changeColor(){
    let ptwo = document.querySelector("#ptwo");
    ptwo.style.backgroundColor ="purple";
    ptwo.style.width = "400px"
    ptwo.style.changeNormal ="display"
    pone.style.backgroundColor ="pink";
   }

let pone = document.querySelector("#pone");
pone.addEventListener('click', changeColor );

function changeWidth(){
    ptwo.style.width ="400px";
    ptwo.style.backgroundColor="purple"; 

    function changeNormal(){
        ptwo.style.width = "";
    }
    ptwo.addEventListener("mouseenter", changeNormal);
}
ptwo.addEventListener("mouseleave", changeWidth);


 


 



