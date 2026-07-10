(function () {
    emailjs.init("VHUOYh-PuOi2kLWKd");
})();
 

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Envoi en cours...";
 
    
    emailjs.sendForm(
        "service_77fsxkj",
        "template_56ep8sp",
        form
    ).then(
        function () {
            status.textContent = "Message envoyé avec succès !";
            form.reset();
        },
        function (error) {
            status.textContent = "Erreur lors de l'envoi. Réessaie.";
            console.error("Erreur EmailJS:", error);
        }
    );
});
 