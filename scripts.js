
    // JavaScript function to toggle the dropdown
    document.getElementById('finance-link').onclick = function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var menu = document.getElementById('finance-menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    };



  // JavaScript for Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.onclick = function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  };