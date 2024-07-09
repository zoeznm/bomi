import imgSrc1 from '../assets/img/eyes@3x.png';
import imgSrc2 from '../assets/img/eyes@3x.png';
import imgSrc3 from '../assets/img/dream@3x.png';
import imgSrc4 from '../assets/img/dream@3x.png';
import imgSrc5 from '../assets/img/star@3x.png';
import imgSrc6 from '../assets/img/star@3x.png';
import imgSrc7 from '../assets/img/circle@3x.png';
import imgSrc8 from '../assets/img/circle@3x.png';
import imgSrc9 from '../assets/img/frontcard1@3x.png';
import imgSrc10 from '../assets/img/backcard1@3x.png';
import imgSrc11 from '../assets/img/frontcard2@3x.png';
import imgSrc12 from '../assets/img/backcard2@3x.png';
import imgSrc13 from '../assets/img/frontcard3@3x.png';
import imgSrc14 from '../assets/img/backcard3@3x.png';
import imgSrc15 from '../assets/img/frontcard4@3x.png';
import imgSrc16 from '../assets/img/backcard4@3x.png';
import imgSrc17 from '../assets/img/frontcard5@3x.png';
import imgSrc18 from '../assets/img/backcard5@3x.png';

const img1 = document.createElement('img');
img1.src = imgSrc1;
img1.alt = 'Image 1';
document.body.appendChild(img1);

const img2 = document.createElement('img');
img2.src = imgSrc2;
img2.alt = 'Image 2';
document.body.appendChild(img2);

const img3 = document.createElement('img');
img3.src = imgSrc3;
img3.alt = 'Image 3';
document.body.appendChild(img3);

const img4 = document.createElement('img');
img1.src = imgSrc4;
img1.alt = 'Image 4';
document.body.appendChild(img4);

const img5 = document.createElement('img');
img2.src = imgSrc5;
img2.alt = 'Image 5';
document.body.appendChild(img5);

const img6 = document.createElement('img');
img3.src = imgSrc6;
img3.alt = 'Image 6';
document.body.appendChild(img6);

const img7 = document.createElement('img');
img1.src = imgSrc7;
img1.alt = 'Image 7';
document.body.appendChild(img7);

const img8 = document.createElement('img');
img2.src = imgSrc8;
img2.alt = 'Image 8';
document.body.appendChild(img8);

const img9 = document.createElement('img');
img3.src = imgSrc9;
img3.alt = 'Image 9';
document.body.appendChild(img9);

const img10 = document.createElement('img');
img1.src = imgSrc10;
img1.alt = 'Image 10';
document.body.appendChild(img10);

const img11 = document.createElement('img');
img2.src = imgSrc11;
img2.alt = 'Image 11';
document.body.appendChild(img11);

const img12 = document.createElement('img');
img3.src = imgSrc12;
img3.alt = 'Image 12';
document.body.appendChild(img12);

const img13 = document.createElement('img');
img1.src = imgSrc13;
img1.alt = 'Image 13';
document.body.appendChild(img13);

const img14 = document.createElement('img');
img2.src = imgSrc14;
img2.alt = 'Image 14';
document.body.appendChild(img14);

const im153 = document.createElement('img');
img3.src = imgSrc15;
img3.alt = 'Image 15';
document.body.appendChild(img15);

const img16 = document.createElement('img');
img1.src = imgSrc16;
img1.alt = 'Image 16';
document.body.appendChild(img16);

const img17 = document.createElement('img');
img2.src = imgSrc17;
img2.alt = 'Image 17';
document.body.appendChild(img17);

const img18 = document.createElement('img');
img3.src = imgSrc18;
img3.alt = 'Image ';
document.body.appendChild(img18);

console.log('This is the main page');


// ! 카드 뒤집기 _1번카드
document.querySelector('.card').addEventListener('click', function() {
  if (this.classList.contains('flipped')) {
    // If the card is already flipped, navigate to top.html
    window.location.href = '../page_1top/top.html';
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add('flipped');
    
    // Reset z-index for all cards
    document.querySelectorAll('.card-container .card').forEach(card => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});


// ! 카드 뒤집기_2번카드
document.querySelector('.card_2').addEventListener('click', function() {
  if (this.classList.contains('flipped1')) {
    // If the card is already flipped, navigate to top.html
    window.location.href = '../page_2bottom/bottom.html';
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add('flipped1');
    
    // Reset z-index for all cards
    document.querySelectorAll('.card-container .card_2').forEach(card => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});

// ! 카드 뒤집기_3번카드
document.querySelector('.card_3').addEventListener('click', function() {
  if (this.classList.contains('flipped2')) {
    // If the card is already flipped, navigate to top.html
    window.location.href = '../page_3bag/bag.html';
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add('flipped2');
    
    // Reset z-index for all cards
    document.querySelectorAll('.card-container .card_3').forEach(card => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});


// ! 카드 뒤집기_4번카드
document.querySelector('.card_4').addEventListener('click', function() {
  this.classList.toggle('flipped3');

  document.querySelectorAll('.card-container').forEach(card => {
    card.style.zIndex = 0;
  });

  this.style.zIndex = 4;
});

// ! 카드 뒤집기_5번카드
document.querySelector('.card_5').addEventListener('click', function() {
  this.classList.toggle('flipped4');

  document.querySelectorAll('.card-container').forEach(card => {
    card.style.zIndex = 0;
  });

  this.style.zIndex = 4;
});


