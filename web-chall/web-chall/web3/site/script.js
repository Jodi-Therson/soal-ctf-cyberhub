document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Animate hamburger into X
        hamburger.classList.toggle('toggle'); 
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Modal Functionality ---
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.querySelector('.close-modal');
    const heroBookBtn = document.getElementById('heroBookBtn');
    const navBookBtn = document.getElementById('navBookBtn');

    // Function to open modal
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Event Listeners for buttons
    if(heroBookBtn) heroBookBtn.addEventListener('click', openModal);
    if(navBookBtn) navBookBtn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close modal if clicking outside the content box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle Form Submission (Demo)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your appointment request has been received.');
        closeModal();
        bookingForm.reset();
    });
});
// website}
