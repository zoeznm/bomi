console.log("hello")// ! 팝업창 
document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('popup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // 페이지 로드 시 팝업 창을 표시
  popup.style.display = 'block';

  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// ! enter 클릭시 text 나오게 하기 
var currentIndex = 0;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var currentText = document.getElementById("text" + (currentIndex + 1));
        if (currentText) {
            currentText.style.display = "block";
            currentIndex++;
            currentText.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    }
});

let currentView = 'home';
let enterCount = 0; // Enter 키 누른 횟수를 저장하는 변수
let isSwitched = false; // 화면이 전환되었는지를 추적하는 변수

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !isSwitched) {
    enterCount++;
    if (enterCount === 6) {
      toggleView();
      enterCount = 0; // 카운트를 리셋하여 다시 6번 셀 수 있도록 합니다.
    }
  }
});

// ! 6번째 enter 키를 눌렀을 때 화면 전환되게 하기 
// function toggleView() {
//   const container = document.getElementById('container');
  
//   if (currentView === 'home') {
//     container.style.transform = 'translateX(-100vw)';
//     currentView = 'about';
//   } else {
//     container.style.transform = 'translateX(0)';
//     currentView = 'home';
//   }
//   isSwitched = true; // 화면이 전환되었음을 표시
// }
// ! 엔터키 top.html로 전환
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//       enterKeyPressCount++;
//       if (enterKeyPressCount === 6) {
//           window.location.href = 'top.html';
//       }
//   }
// });

// ! 카드 뒤집기 _1번카드
// document.querySelector('.card').addEventListener('click', function() {
//   if (this.classList.contains('flipped')) {
//     // If the card is already flipped, navigate to top.html
//     window.location.href = 'top.html';
//   } else {
//     // Otherwise, flip the card and bring it to the front
//     this.classList.add('flipped');
    
//     // Reset z-index for all cards
//     document.querySelectorAll('.card-container .card').forEach(card => {
//       card.style.zIndex = 0;
//     });

//     // Set z-index for the clicked card
//     this.style.zIndex = 4;
//   }
// });


// // ! 카드 뒤집기_2번카드
// document.querySelector('.card_2').addEventListener('click', function() {
//   this.classList.toggle('flipped1');

//   document.querySelectorAll('.card-container').forEach(card => {
//     card.style.zIndex = 0;
//   });

//   this.style.zIndex = 4;
// });

// // ! 카드 뒤집기_3번카드
// document.querySelector('.card_3').addEventListener('click', function() {
//   this.classList.toggle('flipped2');

//   document.querySelectorAll('.card-container').forEach(card => {
//     card.style.zIndex = 0;
//   });

//   this.style.zIndex = 4;
// });

// // ! 카드 뒤집기_4번카드
// document.querySelector('.card_4').addEventListener('click', function() {
//   this.classList.toggle('flipped3');

//   document.querySelectorAll('.card-container').forEach(card => {
//     card.style.zIndex = 0;
//   });

//   this.style.zIndex = 4;
// });

// // ! 카드 뒤집기_5번카드
// document.querySelector('.card_5').addEventListener('click', function() {
//   this.classList.toggle('flipped4');

//   document.querySelectorAll('.card-container').forEach(card => {
//     card.style.zIndex = 0;
//   });

//   this.style.zIndex = 4;
// });


