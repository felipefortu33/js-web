document.querySelectorAll("#tabela-pacientes tr").forEach(row => {
    const removeBtn = row.querySelector(".remove-btn");
    
    if (removeBtn) {
        removeBtn.addEventListener("click", function () {
            row.classList.add("fadeOut");
            setTimeout(() => {
                row.remove();
            }, 1000);
        });
    }
});

// Adicionando estilo para a animação fadeOut
const style = document.createElement('style');
style.innerHTML = `
.fadeOut {
    opacity: 0;
    transition: opacity 1s ease-out;
}
`;
document.head.appendChild(style);
