window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".solution-btn").forEach(button => {

        button.addEventListener("click", () => {

            const solution =
                button.parentElement.querySelector(".solution");

            if (!solution) {
                return;
            }

            solution.classList.toggle("open");

            button.textContent =
                solution.classList.contains("open")
                ? "Masquer la correction"
                : "Voir la correction";
        });

    });

});