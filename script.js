const colorButton = document.getElementById('colorButton');
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
colorButton.addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});
