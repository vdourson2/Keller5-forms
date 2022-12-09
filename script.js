//Quand on entre une lettre dans le 1er input, elle est recopiée en dessous de la zone d'insertion.
let firstname = document.getElementById('firstname');
let displayFirstname = document.getElementById('display-firstname');
let displayFirstnameText = document.createTextNode("");
displayFirstname.appendChild(displayFirstnameText);
firstname.addEventListener('keyup', (e) => {
    displayFirstnameText.textContent = firstname.value;
});

//Lorsque l'age est encodé dans le second input, si il est supérier ou égal à 18,
//le contenu de la section "a-hard-truth" est révélé.
let age = document.getElementById('age');
let truth = document.getElementById('a-hard-truth');
age.addEventListener('keyup', (e) => {
    if (age.value >= 18){
        truth.style.visibility = "visible";
    }
});

//Lorsqu'on encode un mot de passe dans le 3ème input, 
//si il fait moins de 6 caractères: afficher la zone en rouge
let pwd = document.getElementById('pwd');
pwd.addEventListener('keyup', (e) => {
    if (pwd.value.length<6){
        pwd.style.backgroundColor = "red";
    }
    else {
        pwd.style.backgroundColor = "white";
    }
})

//Lorsqu'on encode à nouveau le mot de passe dans le 4ème input, 
//si il ne correspond pas au précédent : afficher la zone en rouge
let pwdConfirm = document.getElementById('pwd-confirm');
pwdConfirm.addEventListener('keyup', (e) => {
    if (pwd.value != pwdConfirm.value){
        pwdConfirm.style.backgroundColor = "red";
    }
    else {
        pwdConfirm.style.backgroundColor = "white";
    }
})