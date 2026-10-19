// Menu do celular: abre e fecha ao tocar no botão
const botao = document.querySelector('.menu-botao');
const menu = document.querySelector('#menu');

botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto);
});

// Fecha o menu depois de escolher uma seção
menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', false);
    });
});

// Mantém o ano do rodapé sempre atualizado
document.querySelector('#ano').textContent = new Date().getFullYear();
