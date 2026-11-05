
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        const isOpen = answer.style.maxHeight !== "";

        // Close all answers
        document.querySelectorAll(".faq-answer").forEach(function(item) {
            item.style.maxHeight = "";
        });

        document.querySelectorAll(".faq-question span").forEach(function(item) {
            item.textContent = "+";
        });

        // Open selected answer
        if (!isOpen) {

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});


// CONTACT FORM DEMONSTRATION

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formMessage.style.color = "red";

        formMessage.textContent = "Please fill in all fields.";

        return;

    }

    formMessage.style.color = "green";

    formMessage.textContent =
        "Form validated! Connect a backend to send your enquiry.";

    contactForm.reset();

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
