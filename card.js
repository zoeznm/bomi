// ! 카드 뒤집기 _1번카드
document.querySelector('.card').addEventListener('click', function() {
  if (this.classList.contains('flipped')) {
    // If the card is already flipped, navigate to top.html
    window.location.href = 'spotlight.html';
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
    window.location.href = 'scope.html';
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
  this.classList.toggle('flipped2');

  document.querySelectorAll('.card-container').forEach(card => {
    card.style.zIndex = 0;
  });

  this.style.zIndex = 4;
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


