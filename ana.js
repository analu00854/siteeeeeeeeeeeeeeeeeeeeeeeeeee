document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});
const imagem = document.querySelector('.img-move');
imagem.addEventListener('click', () => {
  imagem.style.transform = 'translateY(-20px)';
}); 