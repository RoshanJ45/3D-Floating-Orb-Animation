        const container = document.querySelector('.container');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    