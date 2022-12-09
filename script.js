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