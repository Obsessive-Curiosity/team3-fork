document.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  const content = document.getElementById('content');
  const scrollRange = 2000; 
  const opacityStart = 3000; 
  const opacityEnd = 9000; 

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    
    if (scrollY <= scrollRange) {
      const translateY = (scrollY / scrollRange) * 100; 
      welcomeScreen.style.transform = `translateY(-${translateY}%)`;
    } else {
      welcomeScreen.style.transform = 'translateY(-100%)'; 
    }

    
    let opacity = 0;
    if (scrollY > opacityStart && scrollY <= opacityEnd) {
      opacity = (scrollY - opacityStart) / (opacityEnd - opacityStart); 
    } else if (scrollY > opacityEnd) {
      opacity = 1; 
    }
    content.style.opacity = opacity;

    console.log(
      'ScrollY:',
      scrollY,
      'Welcome Transform:',
      welcomeScreen.style.transform,
      'Content Opacity:',
      opacity
    ); 
  });
});
