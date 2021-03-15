const coordinates = document.querySelector('.coordinates');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  coordinates.innerHTML = `
    ${x}px, ${y}px
    `;
  coordinates.style.transform = `translate(${x}px, ${y}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px, ${
    y - targetHalfHeight
  }px)`;
  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
});
