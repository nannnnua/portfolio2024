$(document).ready(function() {
  $('.marquee').marquee({
    duration: 20000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    pauseOnHover: true,
    startVisible: true
  });
});

// Mouse Event
// document.addEventListener('mousemove', (e) => {
//   const circles = document.querySelectorAll('.mouseMove');
//   circles.forEach(circle => {
//     const rect = circle.getBoundingClientRect();
//     const circleX = rect.left + rect.width / 2;
//     const circleY = rect.top + rect.height / 2;
//     const distX = e.clientX - circleX;
//     const distY = e.clientY - circleY;
//     const dist = Math.sqrt(distX * distX + distY * distY);

//     if (dist < 200) {
//       const moveX = (distX / dist) * 20;
//       const moveY = (distY / dist) * 20;
//       circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
//     } else {
//       circle.style.transform = 'translate(0, 0)';
//     }
//   });
// });