window.addEventListener('scroll', function() {
    let header = document.getElementById('header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the opacity based on the scroll position
    let opacity = 1 - (scrollTop / 200); // Adjust the division factor to control the fade-out speed
    // Apply the opacity to the header element
    header.style.opacity = opacity < 0 ? '0' : opacity.toString();
});