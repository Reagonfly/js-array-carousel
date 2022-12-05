//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo il cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo
    const lastActiveItem = items[itemActive];
    const lastCircleActive = circles[itemActive];
    
    //incremento il suo valore di 1
    if (itemActive == (items.length - 1)) {
        itemActive = 0;
    }
    else {
        itemActive++;
    }
    
    const activeItem = items[itemActive];
    const circleActive = circles[itemActive];

    //aggiungo la class active al nuovo elemento dell'array items e lo rimuovo da quello precedente
    lastActiveItem.classList.remove('active');
    activeItem.classList.add('active');

    //stessa cosa per i cerchi
    lastCircleActive.classList.remove('active');
    circleActive.classList.add('active');
});

prev.addEventListener('click', function(){
    //verifico l'elemento attivo
    const lastActiveItem = items[itemActive];
    const lastCircleActive = circles[itemActive];

    //decremento il suo valore di 1
    if (itemActive == 0) {
        itemActive = (items.length - 1);
    }
    else {
        itemActive--;
    }

    const activeItem = items[itemActive];
    const circleActive = circles[itemActive];
    //aggiungo la class active al nuovo elemento dell'array items e lo rimuovo da quello precedente
    lastActiveItem.classList.remove('active');
    activeItem.classList.add('active');

    lastCircleActive.classList.remove('active');
    circleActive.classList.add('active');
})