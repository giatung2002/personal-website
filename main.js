const aboutLink = document.getElementById("about-link");
const modal = document.getElementById("about-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contact-modal");
const contactCloseBtn = contactModal.getElementsByClassName("close")[0];

aboutLink.addEventListener("click", function() {
  event.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

contactLink.addEventListener("click", function() {
    contactModal.style.display = "block";
  });

  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactModal.style.display = "block";
  }); 

  contactCloseBtn.addEventListener("click", function() {
    contactModal.style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    const form = e.target;
    const data = new FormData(form); // Gather form data
  
    // Asynchronously submit the form data via POST
    fetch(form.action, {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(result => {
      // Hide the form and show the success message
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  window.addEventListener('scroll', function() {
    const parallaxSection = document.getElementById('parallax-section');
    let offset = window.pageYOffset;
    parallaxSection.style.backgroundPositionY = offset * 0.7 + 'px';
  });
  
  
  