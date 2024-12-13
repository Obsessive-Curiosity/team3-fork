document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector(".profile-image");
    const profileInfo = document.querySelector(".profile-info");
    const bestPlaylist = document.querySelector(".best-playlist"); 
    const playlist = document.querySelector(".playlist"); 
    const bestmovie = document.querySelector(".best-movie"); 
    const movie = document.querySelector(".movie"); 
    const bestmenu = document.querySelector(".best-menu"); 
    const menu = document.querySelector(".menu"); 
    const besthobby = document.querySelector(".best-hobby"); 
    const hobby = document.querySelector(".hobby"); 
    const mytmi = document.querySelector(".my-tmi"); 
    const tmi = document.querySelector(".tmi"); 

    profileImg.addEventListener("mouseover", function(event) {
        profileInfo.style.display = "block"; 
    });

    profileImg.addEventListener("mouseout", function(event) {
        profileInfo.style.display = "none";
    });

    bestPlaylist.addEventListener("mouseenter", function(event) {
        playlist.style.display = "block"; 
      });
    
    bestPlaylist.addEventListener("mouseleave", function(event) {
        playlist.style.display = "none"; 
      });

    bestmovie.addEventListener("mouseover", function(event) {
        movie.style.display = "block"; 
    });

    bestmovie.addEventListener("mouseout", function(event) {
        movie.style.display = "none"; 
    });
    
    bestmenu.addEventListener("mouseover", function(event) {
        menu.style.display = "block"; 
    });

    bestmenu.addEventListener("mouseout", function(event) {
        menu.style.display = "none"; 
    });
    besthobby.addEventListener("mouseover", function(event) {
        hobby.style.display = "block"; 
    });

    besthobby.addEventListener("mouseout", function(event) {
        hobby.style.display = "none"; 
    });
    mytmi.addEventListener("mouseover", function(event) {
        tmi.style.display = "block"; 
    });

    mytmi.addEventListener("mouseout", function(event) {
        tmi.style.display = "none"; 
    });
});

