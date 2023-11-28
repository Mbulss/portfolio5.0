window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
    } else {
        navbar.style.position = 'static';   
    }
};

