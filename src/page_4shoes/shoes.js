document.addEventListener("DOMContentLoaded", function() {
  var squares = document.querySelectorAll(".square");

  squares.forEach(function(square) {
    square.addEventListener("mouseenter", function() {
      var randomX = Math.random() * 400 - 200; // -200부터 200 사이의 랜덤한 값
      var randomY = Math.random() * 400 - 200; // -200부터 200 사이의 랜덤한 값
      square.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    });

    square.addEventListener("transitionend", function() {
      var rect = square.getBoundingClientRect();
      if (
        rect.left + rect.width < 0 || // 왼쪽 벽 밖으로 나갔을 때
        rect.right - rect.width > window.innerWidth || // 오른쪽 벽 밖으로 나갔을 때
        rect.top + rect.height < 0 || // 위쪽 벽 밖으로 나갔을 때
        rect.bottom - rect.height > window.innerHeight // 아래쪽 벽 밖으로 나갔을 때
      ) {
        square.style.transition = "opacity 2s ease";
        square.style.opacity = "0"; // 천천히 사라지게 함
      }
    });
  });
});

//! 추가하고싶은 기술
//! 1. 사각형을 치우면 delete 버튼이 생성돼서 버튼을 누르면 사각형들이 사라지게 하기
//! 2. 버튼을 누르고 사각형들이 사라지면 wish 신발이 나오게 하기 
//! 3. 액자 밑에 4~5개의 액자를 두고 액자에 hover를 하면 애니메이션 설정하기 (어떤 애니메이션을 넣을지는 고민 중)
//! 4.  4~5개의 액자마다 다 다른 애니메이션을 넣기 1. 눈 깜빡 2. 문 열리고 닫히고 3. 투명도 조절 4. 생각해보기 