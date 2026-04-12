const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('.hobby-card').forEach(card => {
    card.querySelector('.hobby-header').addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        document.querySelectorAll('.hobby-card.open').forEach(c => c.classList.remove('open'));
        if (!isOpen) card.classList.add('open');
    });
});

document.querySelectorAll('.music-item').forEach(item => {
    item.querySelector('.music-header').addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
            document.querySelectorAll('.music-item.open').forEach(i => {
                i.classList.remove('open');
                const audio = i.querySelector('audio');
                if (audio) { audio.pause(); audio.currentTime = 0; }
        });
        if (!isOpen) item.classList.add('open');
    });
});