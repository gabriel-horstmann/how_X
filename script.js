const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 40 ? '0 2px 20px rgba(10,61,98,0.1)' : 'none';
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('navLinks').classList.remove('open');
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.feature-card,.obj-card,.stat-card,.badge-item,.route-card,.timeline-content-left,.timeline-content-right').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });