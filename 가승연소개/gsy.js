document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.querySelector(".profile-image");
  const profileInfo = document.querySelector(".profile-info");
  const bestPlaylist = document.querySelector(".best-playlist");
  const playList = document.querySelector(".playlist");
  const bestMovie = document.querySelector(".best-movie");
  const movie = document.querySelector(".movie");
  const bestMenu = document.querySelector(".best-menu");
  const menu = document.querySelector(".menu");
  const bestHobby = document.querySelector(".best-hobby");
  const hobby = document.querySelector(".hobby");
  const myTmi = document.querySelector(".my-tmi");
  const tmi = document.querySelector(".tmi");

  // visible 토글 함수
  const setVisibleToggle = (element) => {
    element.classList.toggle("visible");
  };

  // [hover 대상 객체, hover할 때 visible 될 객체]
  const hoverElements = [[profileImg, profileInfo]];

  const clickElements = [
    [bestPlaylist, playList],
    [bestMovie, movie],
    [bestMenu, menu],
    [bestHobby, hobby],
    [myTmi, tmi],
  ];

  hoverElements.forEach((element) => {
    const [hoverEl, infoEl] = element;
    hoverEl.addEventListener("mouseover", () => setVisibleToggle(infoEl));
    hoverEl.addEventListener("mouseout", () => setVisibleToggle(infoEl));
  });

  clickElements.forEach((element) => {
    const [clickEl, infoEl] = element;

    clickEl.addEventListener("click", () => setVisibleToggle(infoEl));
  });
});
