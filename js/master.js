// Smooth scroll to shop section
function scrollToShop() {
    const shopSection = document.getElementById('shop');
    shopSection.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission (just a placeholder for now)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent page reload on form submission
    alert('Message sent successfully!');
});