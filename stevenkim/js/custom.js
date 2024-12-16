const nameElement = document.getElementById("name");
const jobElement = document.getElementById("job");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

nameElement.addEventListener("click", function () { 
    const randomColor = getRandomColor(); // 랜덤 색상 생성
    nameElement.style.color = randomColor;
})

jobElement.addEventListener("click", function() {
    const randomColor = getRandomColor(); // 랜덤 색상 생성
    jobElement.style.color = randomColor; 
})

const imageContainer = document.querySelector('.image-container');
const zoomImage = document.querySelector('.zoom-image');
const magnifier = document.querySelector('.magnifier');

// 마우스를 따라 돋보기를 움직이는 함수
imageContainer.addEventListener('mousemove', (event) => {
  const containerRect = imageContainer.getBoundingClientRect();
  const x = event.clientX - containerRect.left;
  const y = event.clientY - containerRect.top;

  // 돋보기를 보여주고 위치 설정
  magnifier.style.display = 'block';
  magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
  magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;

  // 확대된 이미지를 배경처럼 움직이도록 설정
  const backgroundX = (x / containerRect.width) * 100;
  const backgroundY = (y / containerRect.height) * 100;

  zoomImage.style.transformOrigin = `${backgroundX}% ${backgroundY}%`;
  zoomImage.style.transform = 'scale(2)'; // 이미지 확대 배율 설정
});

// 마우스가 컨테이너를 벗어났을 때 돋보기 숨기기
imageContainer.addEventListener('mouseleave', () => {
  magnifier.style.display = 'none';
  zoomImage.style.transform = 'scale(1)'; // 확대 초기화
});