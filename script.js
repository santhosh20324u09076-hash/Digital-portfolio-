// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form submission alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
  this.reset();
});
