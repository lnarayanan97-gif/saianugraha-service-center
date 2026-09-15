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

    const formData = new FormData(form);

    const name = formData.get('name') || '';
    const mobile = formData.get('mobile') || '';
    const area = formData.get('area') || '';
    const product = formData.get('product') || '';
    const service = formData.get('service') || '';
    const contact = formData.get('contact') || '';
    const problem = formData.get('problem') || '';

    const message =
`Hi Sai Anugraha Service Center,

I want to book a service.

Name: ${name}
Mobile: ${mobile}
Area / Location: ${area}
Product: ${product}
Service Type: ${service}
Preferred Contact: ${contact}
Problem / Requirement: ${problem}

Please assist me. Thank you.`;

    const whatsappNumber = '917904060657';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    form.reset();
});
