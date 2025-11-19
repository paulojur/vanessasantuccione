// Lógica do Menu Hambúrguer
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = menuBtn.querySelector('i');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        // Abrir Menu
        menuOverlay.classList.remove('-translate-x-full');
        // Trocar ícone para 'X'
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        // Bloquear scroll do fundo
        document.body.style.overflow = 'hidden';
    } else {
        // Fechar Menu
        menuOverlay.classList.add('-translate-x-full');
        // Trocar ícone para Hambúrguer
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        // Restaurar scroll
        document.body.style.overflow = '';
    }
}

// Adicionar ouvinte de evento ao botão
if(menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}
