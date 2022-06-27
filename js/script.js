/*
Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi su questo, date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/
/* steps
1.creo array con imgs dentro
2. scelgo approccio, creo variabile flag
3.connetto una variabile nuova al DOM su cui andrò a stampare
4. ciclo con for per ricostruire lista
5. al click scala la foto visibile
*/
//creo array con immagini dentro

const contentCarousel = ['img/01.jpg', 'img/04.jpg', 'img/08.jpg', 'img/09.jpg', 'img/10.jpg'];
console.log(contentCarousel)
//variabile contenitore
const carousel = document.getElementById('carousel-list');
//variabile flag dove stamperò la mia lista in seguito
let carouselElement;
//ciclo per caricare le immagini come prima della rimozione
for (let i = 0; i < 5; i++) {
    carouselElement = contentCarousel[`${i}`];
    carousel.innerHTML +=
        `<li class="carousel-element">
     <img class="img-fluid" src="${carouselElement}" alt="carousel-landscape" >
     </li>`;
}

// creo variabile per monitorare li a cui darò/leverò classe active
let currentActiveIndex = 0;
// recupero li dal DOM
const listItems = document.querySelectorAll('#carousel-list li');
console.log(listItems)

//attivo classe active alla prima immagine
listItems[currentActiveIndex].classList.add('active')


//  connetto variabili al DOM e aggiungo event listener al click delle freccie

const nextPhoto = document.getElementById('next');
const prevPhoto = document.getElementById('prev');

nextPhoto.addEventListener('click', function () {
    //rimuovo la classe
    listItems[currentActiveIndex].classList.remove('active')
    //incremento la variabile della lista per selezionare gli elementi successivi
    currentActiveIndex++;
    //aggiungo la classe active
    listItems[currentActiveIndex].classList.add('active')

    console.log()
})

