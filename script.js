
document.getElementById('year').textContent = new Date().getFullYear();

// contact form behavior: open mail client via mailto with message content
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    formMessage.textContent = 'Please complete all fields.';
    formMessage.style.color = 'crimson';
    return;
  }
  const subject = encodeURIComponent('TAY Forge Initiative Contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
  window.location.href = 'mailto:tayforgeinitiative@gmail.com?subject=' + subject + '&body=' + body;
});
