document.addEventListener("DOMContentLoaded", function () {
    // Get all the links with the class 'nav-link'
    var links = document.querySelectorAll('a.nav-link');

    // Iterate over each link
    links.forEach(function (link) {
        // Listen for a click event
        link.addEventListener("click", function (e) {
            // Prevent the default behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute
            var targetId = this.getAttribute("href").substring(1);

            // Get the target section
            var targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});