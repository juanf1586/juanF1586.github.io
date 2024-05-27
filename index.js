//validacion formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Por favor, complete todos los campos.");
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
//---------------------------------------------------

// carrusel----------------------
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Por favor, complete todos los campos.");
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Custom interaction for carousel
    $('#testimonialsCarousel').on('slide.bs.carousel', function (event) {
        const activeItem = event.relatedTarget;
        console.log('Carousel item is changing to:', activeItem.id);
    });
});



//------------------------------ boton de los cards
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var link = card.getAttribute('data-link');
           
            if (link=="dental.html") {
                window.location.href = link;
            }else if (link=="rinones.html") {
                window.location.href = link;
            }else if (link=="nariz.html") {
                window.location.href = link;
            }else if (link=="rodilla.html") {
                window.location.href = link;
            }else if (link=="lipo.html") {
                window.location.href = link;
            }
        });
    });
});



//-------drop de menu

document.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Cerrar el menú cuando se hace clic en un enlace dentro del menú desplegable de servicios
    document.querySelectorAll('.dropdown-item').forEach(function(dropdownItem) {
        dropdownItem.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });

    // Cerrar el menú cuando se hace clic en cualquier otro enlace del menú
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});
