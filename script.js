document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contatti-form');
    const success = document.getElementById('form-success');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            success.style.display = 'block';
            setTimeout(() => {
                success.style.display = 'none';
            }, 3500);
        });
    }

    // Navbar sticky con effetto scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animazioni all'apparire delle card servizi e testimonianze
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.servizio-card, .testimonianza').forEach(el => {
        observer.observe(el);
    });

    // Consigli salute
    const consigli = [
        "Bevi almeno 2 litri d'acqua al giorno!",
        'Fai una passeggiata di almeno 30 minuti ogni giorno.',
        'Non saltare mai la colazione!',
        'Dedica tempo al relax e alla respirazione profonda.',
        'Lava spesso le mani per prevenire infezioni.',
        'Mangia almeno 5 porzioni di frutta e verdura al giorno.',
        'Controlla la pressione regolarmente.',
        'Sorridi: fa bene alla salute!'
    ];
    const consiglioTesto = document.getElementById('consiglio-testo');
    if(consiglioTesto) {
        const random = Math.floor(Math.random() * consigli.length);
        consiglioTesto.textContent = consigli[random];
    }
    // Curiosità mediche
    const curiosita = [
        'Il cuore umano batte circa 100.000 volte al giorno.',
        "Le ossa più piccole del corpo sono nell'orecchio.",
        "Il fegato è l'organo interno più grande.",
        "Il sangue rappresenta circa l'8% del peso corporeo.",
        "La pelle è l'organo più esteso del corpo umano.",
        'Il cervello contiene circa 86 miliardi di neuroni.',
        'Le impronte della lingua sono uniche come quelle delle dita.'
    ];
    const curiositaTesto = document.getElementById('curiosita-testo');
    if(curiositaTesto) {
        const random = Math.floor(Math.random() * curiosita.length);
        curiositaTesto.textContent = curiosita[random];
    }
    // Timeline animata
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });
    timelineItems.forEach(el => timelineObserver.observe(el));

    // Hamburger menu mobile
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if(hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }
}); 