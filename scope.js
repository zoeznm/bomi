// document.addEventListener('DOMContentLoaded', () => {
//   const scope = document.querySelector('.scope');
//   const centerDot = document.querySelector('.center-dot');
//   const crosshair = document.querySelector('.crosshair');
//   const infoBox = document.getElementById('info-box');
//   const pointCount = 5;
//   const points = [];

//   // 랜덤 점 생성
//   for (let i = 0; i < pointCount; i++) {
//       const point = document.createElement('div');
//       point.classList.add('point');
//       point.style.top = `${Math.random() * 100}%`;
//       point.style.left = `${Math.random() * 100}%`;
//       scope.appendChild(point);
//       points.push(point);
//   }

//   // 중앙 점 드래그 앤 드롭 기능 구현
//   let isDragging = false;
//   let offsetX, offsetY;

//   centerDot.addEventListener('mousedown', (e) => {
//       isDragging = true;
//       offsetX = e.offsetX;
//       offsetY = e.offsetY;
//       centerDot.style.pointerEvents = 'none'; // 드래그 중에는 이벤트 방지
//   });

//   document.addEventListener('mousemove', (e) => {
//       if (isDragging) {
//           const rect = scope.getBoundingClientRect();
//           const radius = rect.width / 2;
//           const centerX = rect.left + radius;
//           const centerY = rect.top + radius;

//           let x = e.clientX - rect.left - offsetX;
//           let y = e.clientY - rect.top - offsetY;

//           // 원 안에서의 움직임 제한
//           const distance = Math.sqrt((x + centerDot.offsetWidth / 2 - radius) ** 2 + (y + centerDot.offsetHeight / 2 - radius) ** 2);

//           if (distance < radius) {
//               centerDot.style.left = `${x}px`;
//               centerDot.style.top = `${y}px`;

//               // 십자선 위치 업데이트
//               updateCrosshair(x + centerDot.offsetWidth / 2, y + centerDot.offsetHeight / 2, radius);
//           } else {
//               // 경계 바깥으로 나가지 않도록 제한
//               const angle = Math.atan2(y - radius + centerDot.offsetHeight / 2, x - radius + centerDot.offsetWidth / 2);
//               x = radius + Math.cos(angle) * (radius - centerDot.offsetWidth / 2) - centerDot.offsetWidth / 2;
//               y = radius + Math.sin(angle) * (radius - centerDot.offsetHeight / 2) - centerDot.offsetHeight / 2;

//               centerDot.style.left = `${x}px`;
//               centerDot.style.top = `${y}px`;

//               // 십자선 위치 업데이트
//               updateCrosshair(x + centerDot.offsetWidth / 2, y + centerDot.offsetHeight / 2, radius);
//           }

//           // 점 위치 감지 및 정보 표시
//           let pointFound = false;
//           points.forEach(point => {
//               const pointRect = point.getBoundingClientRect();
//               const pointX = pointRect.left - rect.left + pointRect.width / 2;
//               const pointY = pointRect.top - rect.top + pointRect.height / 2;

//               const distance = Math.sqrt((x + centerDot.offsetWidth / 2 - pointX) ** 2 + (y + centerDot.offsetHeight / 2 - pointY) ** 2);

//               if (distance < 5) { // 조준점과 점이 가까우면
//                   infoBox.style.display = 'flex';
//                   infoBox.textContent = 'Point detected!';
//                   pointFound = true;
//               }
//           });

//           if (!pointFound) {
//               infoBox.style.display = 'none';
//           }
//       }
//   });

//   document.addEventListener('mouseup', () => {
//       isDragging = false;
//       centerDot.style.pointerEvents = 'auto'; // 드래그 종료 후 이벤트 재활성화
//   });

//   function updateCrosshair(x, y, radius) {
//       const verticalLine = crosshair.querySelector('::before');
//       const horizontalLine = crosshair.querySelector('::after');

//       verticalLine.style.height = `${Math.abs(y - radius)}px`;
//       verticalLine.style.top = y > radius ? `${radius}px` : `${y}px`;

//       horizontalLine.style.width = `${Math.abs(x - radius)}px`;
//       horizontalLine.style.left = x > radius ? `${radius}px` : `${x}px`;
//   }
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const scope = document.querySelector('.scope');
//   const centerDot = document.querySelector('.center-dot');
//   const crosshairVertical = document.querySelector('.crosshair-vertical');
//   const crosshairHorizontal = document.querySelector('.crosshair-horizontal');
//   const infoBox = document.getElementById('info-box');
//   const pointCount = 5;
//   const points = [];
//   const moveStep = 5; // 점 이동 단위 거리

//   // 랜덤 점 생성
//   for (let i = 0; i < pointCount; i++) {
//       const point = document.createElement('div');
//       point.classList.add('point');
//       point.style.top = `${Math.random() * 100}%`;
//       point.style.left = `${Math.random() * 100}%`;
//       scope.appendChild(point);
//       points.push(point);
//   }

//   // 점 이동 함수
//   function moveDot(dx, dy) {
//       const rect = scope.getBoundingClientRect();
//       const radius = rect.width / 2;
//       const dotRect = centerDot.getBoundingClientRect();

//       let x = dotRect.left - rect.left + dx + dotRect.width / 2;
//       let y = dotRect.top - rect.top + dy + dotRect.height / 2;

//       // 원 안에서의 움직임 제한
//       const distance = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);

//       if (distance <= radius) {
//           centerDot.style.left = `${(x / rect.width) * 100}%`;
//           centerDot.style.top = `${(y / rect.height) * 100}%`;

//           // 십자선 위치 업데이트
//           updateCrosshair(x, y, radius);

//           // 점 위치 감지 및 정보 표시
//           let pointFound = false;
//           points.forEach(point => {
//               const pointRect = point.getBoundingClientRect();
//               const pointX = pointRect.left - rect.left + pointRect.width / 2;
//               const pointY = pointRect.top - rect.top + pointRect.height / 2;

//               const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);

//               if (distance < 5) { // 조준점과 점이 가까우면
//                   infoBox.style.display = 'flex';
//                   infoBox.textContent = 'Point detected!';
//                   pointFound = true;
//               }
//           });

//           if (!pointFound) {
//               infoBox.style.display = 'none';
//           }
//       }
//   }

//   function updateCrosshair(x, y, radius) {
//       crosshairVertical.style.left = `${x}px`;
//       crosshairHorizontal.style.top = `${y}px`;
//   }

//   // 방향 버튼 이벤트 리스너 추가
//   document.getElementById('up').addEventListener('click', () => moveDot(0, -moveStep));
//   document.getElementById('left').addEventListener('click', () => moveDot(-moveStep, 0));
//   document.getElementById('down').addEventListener('click', () => moveDot(0, moveStep));
//   document.getElementById('right').addEventListener('click', () => moveDot(moveStep, 0));
// });

document.addEventListener('DOMContentLoaded', () => {
  const scope = document.querySelector('.scope');
  const centerDot = document.querySelector('.center-dot');
  const crosshairVertical = document.querySelector('.crosshair-vertical');
  const crosshairHorizontal = document.querySelector('.crosshair-horizontal');
  const infoBox = document.getElementById('info-box');
  const pointCount = 5; // 랜덤 점 개수
  let points = [];
  const moveStep = 5; // 점 이동 단위 거리

  // 초기화
  resetGame();

  // 점 이동 함수
  function moveDot(dx, dy) {
      const rect = scope.getBoundingClientRect();
      const radius = rect.width / 2;
      const dotRect = centerDot.getBoundingClientRect();

      let x = dotRect.left - rect.left + dx + dotRect.width / 2;
      let y = dotRect.top - rect.top + dy + dotRect.height / 2;

      // 원 안에서의 움직임 제한
      const distance = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);

      if (distance <= radius) {
          centerDot.style.left = `${(x / rect.width) * 100}%`;
          centerDot.style.top = `${(y / rect.height) * 100}%`;

          // 십자선 위치 업데이트
          updateCrosshair(x, y, radius);

          // 점 위치 감지 및 정보 표시
          let pointFound = false;
          points.forEach(point => {
              const pointRect = point.getBoundingClientRect();
              const pointX = pointRect.left - rect.left + pointRect.width / 2;
              const pointY = pointRect.top - rect.top + pointRect.height / 2;

              const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);

              if (distance < 5) { // 조준점과 점이 가까우면
                  infoBox.style.display = 'flex';
                  infoBox.textContent = 'Point detected!';
                  pointFound = true;
              }
          });

          if (!pointFound) {
              infoBox.style.display = 'none';
          }
      }
  }

  function updateCrosshair(x, y, radius) {
      crosshairVertical.style.left = `${x}px`;
      crosshairHorizontal.style.top = `${y}px`;
  }

  // 방향 버튼 이벤트 리스너 추가
  document.getElementById('up').addEventListener('click', () => moveDot(0, -moveStep));
  document.getElementById('left').addEventListener('click', () => moveDot(-moveStep, 0));
  document.getElementById('down').addEventListener('click', () => moveDot(0, moveStep));
  document.getElementById('right').addEventListener('click', () => moveDot(moveStep, 0));

  // 다시하기 버튼 이벤트 리스너 추가
  document.getElementById('restart').addEventListener('click', resetGame);

  // 게임 초기화 함수
  function resetGame() {
      // 현재 상태 초기화
      centerDot.style.left = '50%';
      centerDot.style.top = '50%';
      crosshairVertical.style.left = '50%';
      crosshairHorizontal.style.top = '50%';

      // 랜덤 점 생성
      createRandomPoints();

      // 정보 박스 숨기기
      infoBox.style.display = 'none';
  }

  // 랜덤 점 생성 함수
  function createRandomPoints() {
      // 기존 랜덤 점 제거
      points.forEach(point => point.remove());
      points = [];

      // 새로운 랜덤 점 생성
      for (let i = 0; i < pointCount; i++) {
          const point = document.createElement('div');
          point.classList.add('point');
          point.style.top = `${Math.random() * 100}%`;
          point.style.left = `${Math.random() * 100}%`;
          point.style.backgroundColor = getRandomColor();
          scope.appendChild(point);
          points.push(point);
      }
  }

  // 랜덤 색상 생성 함수
  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});
