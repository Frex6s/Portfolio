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

(function () {
  const car = document.getElementById('f1-cursor');
  const toggle = document.getElementById('f1-toggle');
  if (!car) return;

  const STORAGE_KEY = 'f1-cursor-enabled';
  let enabled = localStorage.getItem(STORAGE_KEY) !== 'off';

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let carX = targetX;
  let carY = targetY;
  let angle = 0;

  const EASE = 0.15;

  window.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (enabled) car.classList.add('visible');
  });
  window.addEventListener('mouseleave', function () {
    car.classList.remove('visible');
  });

  function updateToggleLabel() {
    if (!toggle) return;
    toggle.textContent = enabled ? '🏎️ ON' : '🏎️ OFF';
    toggle.classList.toggle('is-off', !enabled);
  }

  if (toggle) {
    updateToggleLabel();
    toggle.addEventListener('click', function () {
      enabled = !enabled;
      localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
      if (!enabled) car.classList.remove('visible');
      updateToggleLabel();
    });
  }

  function animate() {
    if (enabled) {
      const dx = targetX - carX;
      const dy = targetY - carY;
      carX += dx * EASE;
      carY += dy * EASE;

      if (Math.hypot(dx, dy) > 1) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 180;
        let diff = targetAngle - angle;
        diff = ((diff + 180) % 360) - 180;
        angle += diff * 0.2;
      }

      car.style.transform = 'translate(' + carX + 'px,' + carY + 'px) translate(-50%,-72%) rotate(' + angle + 'deg)';
    }
    requestAnimationFrame(animate);
  }

  animate();
})();

console.log("        --.__.--")
console.log("     ___\\(0_0)/")
console.log("  ~~/     (OO)")
console.log("    \\  __  /")
console.log("snd  `='`='=")
console.log("Qu'est ce que tu fais là ?")

document.getElementById('year').textContent = new Date().getFullYear();