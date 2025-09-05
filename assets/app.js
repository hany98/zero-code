document.addEventListener('DOMContentLoaded', () => {
  const countDisplay = document.getElementById('count');
  const clickButton = document.getElementById('click-button');
  let count = localStorage.getItem('clickCount') || 0;
  count = parseInt(count);
  countDisplay.textContent = count;

  clickButton.addEventListener('click', () => {
    count++;
    localStorage.setItem('clickCount', count);
    countDisplay.textContent = count;
  });
});