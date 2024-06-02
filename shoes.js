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
