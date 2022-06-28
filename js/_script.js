//nuovo foglio di stile aggiornato dopo la correzzione con aggiunta di thumbnail
//array con link delle foto
const contentCarousel = ['img/01.jpg', 'img/04.jpg', 'img/08.jpg', 'img/09.jpg', 'img/10.jpg'];

//variabile contenitore dove metterò la lista 
const carousel = document.getElementById('carousel-list');
//costante nuova per collegare il thumbnail
const thumbnails = document.querySelector('.thumbnails-list')
//variabile flag dove stamperò gli elementi del mio array in seguito, a cui attribuisco valore '' affinchè non venga stampato poi anche 'undefined'
let carouselElement = '';
//costruisco nuovamente flag per differenziare le due, non riuscendo a gestire __anche__ la lista nella nodelist
let thumbElement = '';

//generazione dinamica immagini nella lista 
for (let i = 0; i < contentCarousel.length; i++) {
    //inserisco nella variabile flag ad ogni giro del ciclo la stringa di codice che metterò nell' ul
    carouselElement += `<li><img src="${contentCarousel[i]}" alt="landscape-${i + 1}"></li>`
    //inserisco nuovamente nella flag ad ogni ciclo le mie immagini ma senza '<li></li>'
    thumbElement += `<img src="${contentCarousel[i]}" alt="landscape-${i + 1}">`
}
carousel.innerHTML = carouselElement;
thumbnails.innerHTML = thumbElement;

// recupero li dal DOM
const listItemsImages = document.querySelectorAll('#carousel-list li');
const thumbListImages = document.querySelectorAll('.thumbnails-list img');

// creo variabile per monitorare li a cui darò/leverò classe active
let currentActiveIndex = 0;

//attivo classe active alla prima immagine della galleria
listItemsImages[currentActiveIndex].classList.add('active')
//attivo classe active alla prima immagine del thumbnails
thumbListImages[currentActiveIndex].classList.add('active')


//attivazione next e prev al click, come in script.js
//  connetto variabili al DOM e aggiungo event listener al click delle freccie

const nextPhoto = document.getElementById('next');
const prevPhoto = document.getElementById('prev');

nextPhoto.addEventListener('click', function () {
    //rimuovo la classe
    listItemsImages[currentActiveIndex].classList.remove('active');
    //rimuovo la classe anche dalla thumb
    thumbListImages[currentActiveIndex].classList.remove('active');
    //incremento la variabile della lista per selezionare gli elementi successivi MA
    //deve tornare a 4 quando raggiunge 0
    currentActiveIndex++;
    if (currentActiveIndex >= listItemsImages.length) {
        currentActiveIndex = 0
    }
    //aggiungo la classe active
    listItemsImages[currentActiveIndex].classList.add('active');
    //aggiungo la classe active anche alla thumb
    thumbListImages[currentActiveIndex].classList.add('active');
})

//lavoro sul prev
prevPhoto.addEventListener('click', function () {
    //rimuovo la classe active dal primo elemento del nodo
    listItemsImages[currentActiveIndex].classList.remove('active');
    //rimuovo la classe active dal primo elemento del nodo
    thumbListImages[currentActiveIndex].classList.remove('active');
    //decremento la variabile della lista per selezionare gli elementi successivi MA
    //deve tornare a 0 quando raggiunge 4
    currentActiveIndex--;
    if (currentActiveIndex < 0) {
        currentActiveIndex = listItemsImages.length - 1;
    }
    //aggiungo la classe active
    listItemsImages[currentActiveIndex].classList.add('active');
    //aggiungo la classe active alla thumbnail
    thumbListImages[currentActiveIndex].classList.add('active');
})
