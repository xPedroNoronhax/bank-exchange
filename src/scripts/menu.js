document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu .navmenu__links");
    const body = document.body;

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    body.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && e.target !== mobileMenuButton) {
            mobileMenu.classList.remove("active");
        }
    });
})