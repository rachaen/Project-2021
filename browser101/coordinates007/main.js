const coordinates = document.querySelector('.coordinates');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');

window.addEventListener('mousemove', (event) => {
  coordinates.innerHTML = `
    ${event.clientX}px, ${event.clientY}px
    `;
  coordinates.style.left = event.clientX + 30 + 'px';
  coordinates.style.top = event.clientY + 30 + 'px';
  target.style.left = event.clientX + 'px';
  target.style.top = event.clientY + 'px';
  vertical.style.left = event.clientX + 'px';
  horizontal.style.top = event.clientY + 'px';
  coordinates;
});
