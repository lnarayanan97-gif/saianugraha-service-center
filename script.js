const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Request captured. WhatsApp / backend integration will be connected after the final contact details are added.';
  form.reset();
});
