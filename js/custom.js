$('.pilihan-dark-mode').select2();

// Toggle light and dark mode (store local storage) 
$(document).ready(function() {
    // Check local storage for the current theme
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === null) {
        // If the theme is not stored in local storage, set it to 'light'
        currentTheme = 'light';
    }

    // Set the initial theme
    $('html').attr('data-theme', currentTheme);

    // Listen for a change event on the select dropdown
    $('select[name="theme-switch"]').change(function() {
        // Get the new theme
        var newTheme = $(this).val();
        // Set the new theme
        $('html').attr('data-theme', newTheme);
        // Store the new theme in local storage
        localStorage.setItem('theme', newTheme);
    });
});
// end of dark mode toggle ============================

// Navbar include
$(function(){
    const navbarURL = './inc/navbar.html';

    fetch(navbarURL)
        .then(response => response.text())
        .then(html => {
        const navbarElement = document.getElementById('header');
        navbarElement.innerHTML = html;
        })
        .catch(error => console.error(error));
});

$document.ready(function() {
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
})  