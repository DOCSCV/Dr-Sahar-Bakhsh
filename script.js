const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all links
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    this.classList.add('active'); 
  });
});