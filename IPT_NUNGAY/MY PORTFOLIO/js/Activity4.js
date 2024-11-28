// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Get the section ID
    const targetSection = document.getElementById(targetId); // Select the target section
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Scroll to the section minus header height
        behavior: 'smooth'
      });
    }
  });
});

// Smooth Scroll for "Contact Me" Button
document.querySelector('.btn').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior
  const contactSection = document.getElementById('contact'); // Replace with the Contact section's ID
  if (contactSection) {
    window.scrollTo({
      top: contactSection.offsetTop - 60,
      behavior: 'smooth'
    });
  }
});

// Add Popup Alert for "Contact Me" Button
document.querySelector('.btn').addEventListener('click', () => {
  setTimeout(() => {
    alert('Hello, Im Cedrick from BSIT 3A');
  }, 800); // Delay to simulate smooth scroll completion
});

// Add Active State for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
