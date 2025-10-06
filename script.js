 // Intersection Observer para animaciones de scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: dejar de observar después de animar
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar todos los elementos con clases de animación
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
            animatedElements.forEach(el => observer.observe(el));
            
            // Scroll to Top Button
            const scrollToTopBtn = document.getElementById('scrollToTop');
            
            // Mostrar/ocultar botón según scroll
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            });
            
            // Funcionalidad del botón
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        // Smooth scroll para anclas (si las agregas en el futuro)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
