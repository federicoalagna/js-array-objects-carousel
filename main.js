'use strict'

// array con immagini e oggetti
const immagini = [
    {
      src: '01.webp',
      title: 'Miles Morales',
      description: 'Descrizione 1'
    },
    {
      src: '02.webp',
      title: 'Ratchet',
      description: 'Descrizione 2'
    },
    {
      src: '03.webp',
      title: 'Fortnite',
      description: 'Descrizione 3'
    },
    {
      src: '04.webp',
      title: 'Stray',
      description: 'Descrizione 4'
    },
    {
      src: '05.webp',
      title: 'Avengers',
      description: 'Descrizione 5'
    }
  ];

console.log(immagini)
  
  // seleziono gli elementi HTML necessari
const itemsContainer = document.querySelector('.items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const titleElement = document.querySelector('.title');
const descriptionElement = document.querySelector('.description');

// immagine visualizzata
let currentIndex = 0;

// funzione per visualizzare un'immagine
function displayImage(index) {
    console.log('Displaying image at index:', index);

    // estraggo i dati dell'immagine dall'array
  const { src, title, description } = images[index];

    // creo un elemento img 
    const img = document.createElement('img');
    img.src = src;
    img.alt = title;

    // svuoto il contenitore degli elementi e aggiungo l'immagine
    itemsContainer.innerHTML = '';
    itemsContainer.appendChild(img);

    // aggionro il titolo e la descrizione
    titleElement.textContent = title;
    descriptionElement.textContent = description;
}