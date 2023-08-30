const barsButton = document.querySelector(".fa-bars");
const navbar = document.querySelector(".header-navbar-a");

const click = () => {
    barsButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

click();