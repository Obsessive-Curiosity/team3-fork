const modeSwitchButton = document.querySelector('#mode-switch');

modeSwitchButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeSwitchButton.textContent = "dark mode";
  } else {
    modeSwitchButton.textContent = "light mode"
  }
})