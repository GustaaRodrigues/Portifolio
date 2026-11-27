// 1. Alternar Modo Claro / Escuro
const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Altera o ícone do botão conforme o tema ativo
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️';
    } else {
        btnTema.textContent = '🌙';
    }
});