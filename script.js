// Selecionar os elementos
const menuBtn = document.getElementById('menu-btn');
const menuSidebar = document.getElementById('menu-sidebar');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuIcon = menuBtn.querySelector('i');

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        // ABRIR O MENU
        
        // 1. Deslizar a Sidebar para dentro (remove o translate negativo)
        menuSidebar.classList.remove('-translate-x-full');
        
        // 2. Mostrar o fundo escuro
        menuBackdrop.classList.remove('hidden');
        // Pequeno delay para permitir a transição de opacidade (fade in)
        setTimeout(() => {
            menuBackdrop.classList.remove('opacity-0');
        }, 10);

        // 3. Transformar ícone em X
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        
        // 4. Travar o scroll da página
        document.body.style.overflow = 'hidden';

    } else {
        // FECHAR O MENU

        // 1. Esconder a Sidebar
        menuSidebar.classList.add('-translate-x-full');
        
        // 2. Esconder o fundo escuro (Fade out primeiro)
        menuBackdrop.classList.add('opacity-0');
        // Depois da animação terminar, adicionar hidden
        setTimeout(() => {
            menuBackdrop.classList.add('hidden');
        }, 500); // 500ms igual à duração da transição CSS

        // 3. Voltar ícone para Barras
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        
        // 4. Destravar o scroll
        document.body.style.overflow = '';
    }
}

// Evento de clique no botão
if(menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}