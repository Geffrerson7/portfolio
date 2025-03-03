(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
    document.getElementById("year").textContent = new Date().getFullYear();
})()


