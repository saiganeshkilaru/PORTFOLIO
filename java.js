// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll('.reveal');

function revealElements() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealElements);

revealElements();


// =========================
// VIDEO PLAY / PAUSE
// =========================

const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach((item) => {

  const video = item.querySelector('video');

  // HOVER PREVIEW

  item.addEventListener('mouseenter', () => {

    if (!item.classList.contains('playing')) {
      video.play();
    }

  });

  item.addEventListener('mouseleave', () => {

    if (!item.classList.contains('playing')) {

      video.pause();
      video.currentTime = 0;

    }

  });

  // CLICK TO PLAY / PAUSE

  item.addEventListener('click', () => {

    if (video.paused) {

      // Pause all other videos

      document.querySelectorAll('.portfolio-video').forEach((v) => {
        v.pause();
      });

      document.querySelectorAll('.video-item').forEach((card) => {
        card.classList.remove('playing');
      });

      // Play selected video

      video.play();

      item.classList.add('playing');

    } else {

      video.pause();

      item.classList.remove('playing');

    }

  });

});


// =========================
// CONTACT FORM
// =========================

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  alert('Message Sent Successfully ✔️');

  form.reset();

});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove('active-link');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active-link');
    }

  });

});


// =========================
// NAVBAR BACKGROUND
// =========================

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {

    navbar.style.background = 'rgba(10,10,15,0.95)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';

  } else {

    navbar.style.background = 'rgba(15,15,20,0.7)';
    navbar.style.boxShadow = 'none';

  }

});


// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector('.hero-text h4');

if (typingText) {

  const words = [
    'Creative Graphic Designer',
    'UI/UX Specialist',
    'Motion Graphics Artist',
    'Brand Identity Expert'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

      typingText.textContent =
        currentWord.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;

      }

    } else {

      typingText.textContent =
        currentWord.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {

        isDeleting = false;

        wordIndex = (wordIndex + 1) % words.length;

      }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

  }

  typeEffect();

}


// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn = document.createElement('button');

scrollBtn.innerHTML = '↑';

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.width = '50px';
scrollBtn.style.height = '50px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background =
  'linear-gradient(135deg,#7c5cff,#ff4d8d)';
scrollBtn.style.color = '#fff';
scrollBtn.style.fontSize = '22px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {

  if (window.scrollY > 400) {

    scrollBtn.style.display = 'block';

  } else {

    scrollBtn.style.display = 'none';

  }

});

scrollBtn.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});


// =========================
// ACTIVE LINK STYLE
// =========================

const style = document.createElement('style');

style.innerHTML = `

.active-link{
  color:#fff !important;
  position:relative;
}

.active-link::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-5px;
  width:100%;
  height:2px;
  background:linear-gradient(135deg,#7c5cff,#ff4d8d);
  border-radius:10px;
}

`;

document.head.appendChild(style);