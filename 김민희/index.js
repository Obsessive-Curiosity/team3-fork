// tilte 누르면 색깔 바꾸기
const title = document.querySelector("#title");
const bodySelect = document.querySelector("body");
// const sectionHeaders = document.querySelectorAll(".section-header");
// const wraps = document.querySelectorAll(".wrap");

function changeColor(e) {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // e.target.style.color = randomColor;

  // wraps.forEach(wrap => {
  //   wrap.style.borderColor = randomColor;
  // });

  // sectionHeaders.forEach(header => {
  //   header.style.borderColor = randomColor;
  bodySelect.style.backgroundColor = randomColor;

  // });
}

title.addEventListener("click", changeColor);

// 삼각형 버튼 누르면 내용 나타났다가 사라지게 하기
const profileWrap = document.querySelector("#profile-section .wrap");
const profileToggleBtn = document.querySelector("#profile-toggle-btn");

const helloWrap = document.querySelector("#hello-section .wrap")
const helloToggleBtn = document.querySelector("#hello-toggle-btn");


profileToggleBtn.addEventListener("click", () => {
  profileWrap.classList.toggle("hidden");
});

helloToggleBtn.addEventListener("click", () => {
  helloWrap.classList.toggle("hidden");
});