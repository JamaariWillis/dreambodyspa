
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
      
          // Add the event listener for the "Book Now" button once the script is loaded
          document.getElementById('book-now-button').addEventListener('click', function() {
            blvd.open();
          });
        };
      
        d.parentNode.insertBefore(c, d);
      })(document);
      