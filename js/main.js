window.addEventListener("load", () => {

    // Loader
    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hide");
    }

});


// Sticky Navbar
window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (header) {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

});


// Back To Top Button
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
// Scroll Reveal Animation

const reveals =
document.querySelectorAll(
".reveal, .zoom-in, .fade-left, .fade-right"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

revealOnScroll();

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const toast = document.getElementById("toast");

function showToast(message, type = "success") {
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.className = "toast";
    }, 3500);
}

const form =
document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", async e => {

        e.preventDefault();

        const email =
        form.querySelector(
            'input[type="email"]'
        ).value;

        const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {

            showToast("Please enter a valid email", "error");
            return;

        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            showToast("Message sent successfully!", "success");
            form.reset();

        } catch (error) {
            showToast("ไม่สามารถส่งข้อความได้ ลองอีกครั้ง", "error");
            console.error(error);
        }

    });

}


    window.addEventListener("scroll", () => {

        const winScroll =
        document.documentElement.scrollTop;

        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const scrolled =
        (winScroll / height) * 100;

        const bar = document.getElementById("progressBar");
        if (bar) {
            bar.style.width = scrolled + "%";
        }

    });


