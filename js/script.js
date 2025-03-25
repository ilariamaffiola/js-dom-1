//dichiaro le variabili recuoerando quindi gli elementi del DOM
let button = document.querySelector('button');
console.log(button);
let lampadina = document.querySelector('img');
console.log(lampadina);
//CORPO DEL PROGRAMMA
//aggiungo un event listener al bottone
button.addEventListener('click', function(){
    //con il click sul bottone dovrei accendere la lampadina, quindi controllo prima se col click funziona con un console.log
    console.log('CLICCATO');

})