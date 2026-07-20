document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });

    });

});