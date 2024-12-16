const myName = document.querySelector("#name");

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
const aboutMeBtn = document.querySelector("#infoBtn");
const cardHidden = document.querySelector("#hiddenCard");

const showAboutMeBtn = function () {
    cardHidden.classList.toggle("hidden");
    // cardHidden.classList.toggle("show");
}
console.log(cardHidden)

aboutMeBtn.addEventListener("click", showAboutMeBtn);

//댓글 추가하기
const commentInput = document.querySelector("#commentInput");
const commentBtn = document.querySelector("#commentBtn");
const commentContainer = document.querySelector("#commentContainer")

const inputValue = function () {
    const value = commentInput.value;

    if (value === "") {
        alert("댓글을 작성해주세요!");
        return;
    }

    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = value;

    commentContainer.append(newComment);

    commentInput.value = "";
}

commentBtn.addEventListener("click", inputValue);