const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});







document.addEventListener('DOMContentLoaded', function () {
    // Get all the elements with the class 'row'
    var rows = document.querySelectorAll('.row');
    var customButton = document.querySelector('.custom-button');

    // Function to check if an element is in the viewport with a 20% threshold
    function isElementInViewport(element, threshold = 0.6) {
        var rect = element.getBoundingClientRect();
        var thresholdOffset = threshold * element.clientHeight;
        return (
            rect.top >= -thresholdOffset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + thresholdOffset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        // Check each '.row' element
        rows.forEach(function (rowElement) {
            // If the element is in the viewport and has not been scrolled into view before
            if (isElementInViewport(rowElement) && !rowElement.classList.contains('scrolled')) {
                // Apply the styles
                rowElement.classList.add('scrolled');
                rowElement.style.backgroundColor = '#fff';
                rowElement.style.color = '#06151f';
            }
        });

        // Apply styles to the custom button based on its visibility
        if (isElementInViewport(customButton)) {
            customButton.style.backgroundColor = '#06151f';
            customButton.style.color = '#fff';
        } else {
            customButton.style.backgroundColor = '#fff';
            customButton.style.color = '#06151f';
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check on page load
    handleScroll();
});



document.addEventListener('DOMContentLoaded', function () {
    var rows = document.querySelectorAll('.row');

    function calculateOpacity(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var center = windowHeight / 2;
        var centerThreshold = center * 0.4;

        // Calculate the percentage of the element's center in the viewport
        var percentageVisible = Math.max(0, Math.min(1, (center - Math.abs(center - (rect.top + rect.bottom) / 2)) / centerThreshold));

        // Adjust opacity for smoother fade-in and fade-out
        return percentageVisible;
    }

    function handleScroll() {
        rows.forEach(function (rowElement) {
            var opacity = calculateOpacity(rowElement);
            var elementsToFade = rowElement.querySelectorAll('.cryoh2, .slim1, .services, .custom-button, .custom-button2, .review');

            elementsToFade.forEach(function (element) {
                element.style.transition = 'opacity 1ms ease-in-out'; // Set transition duration to 1ms for quick fade-in/out

                // Adjust opacity based on scroll position
                if (opacity > 0) {
                    element.style.opacity = opacity;
                } else {
                    element.style.opacity = 0;
                }
            });
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


