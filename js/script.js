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
        //una volta accertati che questo funziona, possiamo iniziare a scrivere il codice per accendere la lampadina
    //per accendere la lampadina dobbiamo cambiare l'attributo src dell'immagine
    //lampadina.src="./img/yellow_lamp.png";
    //ora che abbiamo visto che funziona, commento il tutto per trovare il modo di farla amche spegnere
    if(lampadina.src.includes('white')){
        lampadina.src="./img/yellow_lamp.png";
        button.innerHTML="Spegni";
    }
    else{
        lampadina.src="./img/white_lamp.png";
        button.innerHTML="Accendi";
    }
})