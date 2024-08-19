

  // 캔버스 요소를 가져옵니다.
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  var points = []; // 생성된 모든 점들의 좌표를 저장합니다.

  // 캔버스에 클릭한 점들을 그리는 함수
  function drawPoints() {
    points.forEach(function(point) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 8, 0, Math.PI * 4);
      ctx.fillStyle = '#0C2B2D';
      ctx.fill();
    });
  }

  // 캔버스에 선을 그리는 함수
  function drawLines() {
    if (points.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = '#0C2B2D';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // 캔버스에 모든 것을 그리는 함수
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    drawPoints();
  }

  // 캔버스를 클릭할 때마다 호출되는 이벤트 핸들러
  canvas.addEventListener('click', function(e) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    // 새로운 점을 추가합니다.
    points.push({ x: mouseX, y: mouseY });

    // 이전에 생성된 점들과 현재 점을 연결하여 선을 그립니다.
    draw();

    // 캔버스에 클릭한 점들을 그립니다.
    drawPoints();
  });

  // 브라우저 창 크기가 변경될 때 캔버스의 크기를 조정하는 함수
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }

  // 초기 캔버스 크기 설정
  resizeCanvas();

  // 브라우저 창 크기가 변경될 때마다 캔버스 크기를 조정합니다.
  window.addEventListener('resize', resizeCanvas);

