import imgSrc1 from '../assets/img/building@3x.png';
import imgSrc2 from '../assets/img/bird@3x.png';
import imgSrc3 from '../assets/img/cloud@3x.png';
import imgSrc4 from '../assets/img/cloud@3x.png';
import imgSrc5 from '../assets/img/cloud2@3x.png';
import imgSrc6 from '../assets/img/sun@3x.png';
import imgSrc7 from '../assets/img/back@3x.png';

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

const bodyEl = document.querySelector('body');
const focusEl = document.querySelector('#focus');

// first load
window.onload = () => {
  resetFocus();
};

// screen resized
window.addEventListener("resize", resizeScreen = () => {
  resetFocus();
});

document.addEventListener("mousemove", trackMouse = (event) => {
  const eventX = event.clientX + "px";
  const eventY = event.clientY + "px";
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.2}px at ${eventX} ${eventY},
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%)`;
});

let isEventRunning = false;
document.addEventListener("click", clickFocus = (event) => {
  if (!isEventRunning) {
    isEventRunning = true;
    window.removeEventListener('resize', resizeScreen);
    document.removeEventListener("mousemove", trackMouse);
    document.removeEventListener("click", clickFocus);

    const eventX = event.clientX + "px";
    const eventY = event.clientY + "px";

    let i = 0, j = 0;
    // zoomIn 반복 실행 3ms에 0.001씩 100번(300ms)
    const zoomIn = setInterval(() => {
      i += 1;
      focusEl.style.background = `radial-gradient(
        circle ${getScreenAvg() * (0.2 - (0.001 * i))}px at ${eventX} ${eventY},
        rgba(0, 0, 0, 0.01) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0.96) 100%)`;
    }, 3);

    // zoomIn 반복 끝
    setTimeout(() => {
      clearInterval(zoomIn);

      // zoomOut 반복 실행 10ms에 0.02씩 100번(1000ms)
      const zoomOut = setInterval(() => {
        j += 1;
        focusEl.style.background = `radial-gradient(
          circle ${getScreenAvg() * (0.1 + (0.02 * j))}px at ${eventX} ${eventY},
          rgba(0, 0, 0, 0.01) 0%,
          rgba(0, 0, 0, 0.5) 70%,
          rgba(0, 0, 0, 0.96) 100%)`;
      }, 10);

      // zoomOut 반복 끝
      setTimeout(() => {
        clearInterval(zoomOut);
        focusEl.style.display = 'none'; // div를 사라지게 만듭니다
        isEventRunning = false;
      }, 1000);
    }, 300);
  }
});

function resetFocus() {
  // reset place if reloaded
  focusEl.style.display = 'block'; // div를 다시 보이게 만듭니다
  focusEl.style.background = `radial-gradient(
    circle ${getScreenAvg() * 0.2}px at ${bodyEl.clientWidth * 0.6}px ${bodyEl.clientHeight * 0.3}px,
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.96) 100%)`;
}

function getScreenAvg() {
  return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.5);
}

