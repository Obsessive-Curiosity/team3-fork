const myName = document.querySelector("#name");
const aboutMeBtn = document.querySelector("#infoBtn");
const cardMid = document.querySelectorAll(".cardMid");

// 이름 클릭하면 랜덤 색상으로 바꾸기
const getRandomNum = function () {
    return Math.floor(Math.random() * 256);
}

function colorChange(e) {
    const r = getRandomNum();
    const g = getRandomNum();
    const b = getRandomNum();
    e.target.style.color = `rgb(${r},${g},${b})`;
}

myName.addEventListener("click", colorChange);

//aboutMe 버튼 클릭하면 하단 정보 보이게 하기기
const showAboutMeBtn = function () {
    for (const item of cardMid) {
        item.classList.toggle("show");
    }
}

// for (const item of cardMid) {
//     item.classList.add = "show";
//     console.log(item);
// }

aboutMeBtn.addEventListener("click", showAboutMeBtn);