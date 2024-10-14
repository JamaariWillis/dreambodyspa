
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

