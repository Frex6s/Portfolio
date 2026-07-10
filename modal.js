document.body.insertAdjacentHTML("beforeend", `
	<div id="project-modal" class="modal-overlay" hidden>
		<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<button class="modal-close" id="modal-close" aria-label="Fermer">&times;</button>
			<img id="modal-image" class="modal-image" src="" alt="">
			<h3 id="modal-title"></h3>
			<p id="modal-description"></p>
			<div id="modal-skills" class="modal-skills"></div>
			<a id="modal-github" class="cta" href="#" target="_blank" rel="noopener">Voir sur GitHub</a>
		</div>
	</div>
`);

const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalSkills = document.getElementById("modal-skills");
const modalGithub = document.getElementById("modal-github");
const modalClose = document.getElementById("modal-close");

let lastFocusedElement = null;

function openModal(card) {
    const { title, description, image, github, skills } = card.dataset;

    modalTitle.textContent = title || "";
    modalDescription.textContent = description || "";
    modalImage.src = image || "";
    modalImage.alt = title || "";
    modalImage.style.display = image ? "block" : "none";

    modalSkills.innerHTML = "";
    if (skills) {
        skills.split(",").forEach(function (skill) {
            const trimmed = skill.trim();
            if (!trimmed) return;
            const span = document.createElement("span");
            span.className = "skill";
            span.textContent = trimmed;
            modalSkills.appendChild(span);
        });
    }

    if (github && github !== "#") {
        modalGithub.href = github;
        modalGithub.style.display = "inline-block";
    } else {
        modalGithub.style.display = "none";
    }

    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    modalClose.focus();
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

document.querySelectorAll(".project").forEach(function (card) {
    card.addEventListener("click", function () {
        openModal(card);
    });

    card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(card);
        }
    });
});

modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});