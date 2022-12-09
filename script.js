//Quand on entre une lettre dans le 1er input, elle est recopiée en dessous de la zone d'insertion.

let displayFirstname = document.getElementById('display-firstname');
let displayFirstnameText = document.createTextNode("");
displayFirstname.appendChild(displayFirstnameText);
firstname.addEventListener('keyup', (e) => {
    displayFirstnameText.textContent = document.getElementById('firstname').value;
});