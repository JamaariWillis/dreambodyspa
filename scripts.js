
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


    (function (a) {
      var b = {
        businessId: '108503ee-d9f4-48f8-aaaa-69cb7ec3865b',
      };
    
      var c = a.createElement('script');
      var d = a.querySelector('script');
    
      c.src = 'https://static.joinboulevard.com/injector.min.js';
      c.async = true;
      c.onload = function () {
        blvd.init(b);
    
        // Ensure the blvd object is available before adding the event listener
        document.getElementById('book-now-button').addEventListener('click', function() {
          if (typeof blvd !== 'undefined' && typeof blvd.open === 'function') {
            blvd.open();
          } else {
            console.error("Boulevard script not fully loaded.");
          }
        });
      };
    
      d.parentNode.insertBefore(c, d);
    })(document);
    

  // JavaScript for Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.onclick = function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  };