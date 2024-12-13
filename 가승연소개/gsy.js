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

    profileImg.addEventListener("mouseover", function() {
        profileInfo.style.display = "block"; 
    });

    profileImg.addEventListener("mouseout", function() {
        profileInfo.style.display = "none";
    });

    bestPlaylist.addEventListener("mouseenter", function() {
        playlist.style.display = "block"; 
      });
    
    bestPlaylist.addEventListener("mouseleave", function() {
        playlist.style.display = "none"; 
      });

    bestmovie.addEventListener("mouseover", function() {
        movie.style.display = "block"; 
    });

    bestmovie.addEventListener("mouseout", function() {
        movie.style.display = "none"; 
    });
    
    bestmenu.addEventListener("mouseover", function() {
        menu.style.display = "block"; 
    });

    bestmenu.addEventListener("mouseout", function() {
        menu.style.display = "none"; 
    });
    besthobby.addEventListener("mouseover", function() {
        hobby.style.display = "block"; 
    });

    besthobby.addEventListener("mouseout", function() {
        hobby.style.display = "none"; 
    });
    mytmi.addEventListener("mouseover", function() {
        tmi.style.display = "block"; 
    });

    mytmi.addEventListener("mouseout", function() {
        tmi.style.display = "none"; 
    });
});

