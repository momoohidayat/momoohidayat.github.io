// Animate JS
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show');
    } else {
      entry.target.classList.remove('animate-show');
    }
  });
});

const animateInScroll = document.querySelectorAll('.animate');
animateInScroll.forEach((el) => animationObserver.observe(el));


const animateInit = document.querySelectorAll('.animate-init');
setTimeout(() => {
  animateInit.forEach((entry) => {
    entry.classList.add('animate-show');
  });
}, 500);

setTimeout(() => {
  const ctaButton = document.querySelector('.animate-sub-header-cta-ping');
  ctaButton.classList.remove('hidden');
  ctaButton.classList.add('inline-flex');
  ctaButton.classList.add('animate-ping-small');
}, 2000);