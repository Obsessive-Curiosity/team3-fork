document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector(".profile-image");
    const profileInfo = document.querySelector(".profile-info");
  
    profileImg.addEventListener("mouseover", function(event) {
        profileInfo.style.display = "block"; 
    });

    profileImg.addEventListener("mouseout", function(event) {
        profileInfo.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bestPlaylist = document.querySelector(".best-playlist"); 
    const playlist = document.querySelector(".playlist"); 
  
    bestPlaylist.addEventListener("mouseenter", function(event) {
      playlist.style.display = "block"; 
    });
  
    bestPlaylist.addEventListener("mouseleave", function(event) {
      playlist.style.display = "none"; 
    });
});

  
document.addEventListener("DOMContentLoaded", function() {
    const bestmovie = document.querySelector(".best-movie"); 
    const movie = document.querySelector(".movie"); 

    bestmovie.addEventListener("mouseover", function(event) {
        movie.style.display = "block"; 
    });

    bestmovie.addEventListener("mouseout", function(event) {
        movie.style.display = "none"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bestmenu = document.querySelector(".best-menu"); 
    const menu = document.querySelector(".menu"); 

    bestmenu.addEventListener("mouseover", function(event) {
        menu.style.display = "block"; 
    });

    bestmenu.addEventListener("mouseout", function(event) {
        menu.style.display = "none"; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const besthobby = document.querySelector(".best-hobby"); 
    const hobby = document.querySelector(".hobby"); 

    besthobby.addEventListener("mouseover", function(event) {
        hobby.style.display = "block"; 
    });

    besthobby.addEventListener("mouseout", function(event) {
        hobby.style.display = "none"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mytmi = document.querySelector(".my-tmi"); 
    const tmi = document.querySelector(".tmi"); 

    mytmi.addEventListener("mouseover", function(event) {
        tmi.style.display = "block"; 
    });

    mytmi.addEventListener("mouseout", function(event) {
        tmi.style.display = "none"; 
    });
});