document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            id: 'finance',
            title: 'Finance',
            description: 'Nous offrons des services de trading professionnels pour maximiser vos investissements.',
            image: 'images/trader.jpg',
            icon: 'fas fa-chart-line', // Icône pour le trader
            link: 'trader.html'
        },
        {
            id: 'comptable',
            title: 'Comptable & Fiscaliste',
            description: 'Nous gérons vos comptes, vos clients et vos fournisseurs avec expertise.',
            image: 'images/comptable.jpg',
            icon: 'fas fa-calculator', // Icône pour le comptable
            link: 'comptable.html'
        },
        {
            id: 'marketing',
            title: 'Marketing Digital',
            description: 'Spécialisé dans le e-mail marketing pour booster votre visibilité en ligne.',
            image: 'images/marketing.jpg',
            icon: 'fas fa-envelope', // Icône pour le marketing
            link: 'marketing.html'
        },
        {
            id: 'inventoriste',
            title: 'Inventoriste',
            description: 'Nous assurons une gestion précise et efficace de vos stocks.',
            image: 'images/inventoriste.jpg',
            icon: 'fas fa-boxes', // Icône pour l'inventoriste
            link: 'inventoriste.html'
        },
    ];

    const servicesList = document.getElementById('services-list');

    if (servicesList) {
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <i class="${service.icon}"></i>
                <img src="${service.image}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}">En savoir plus</a>
            `;
            servicesList.appendChild(card);
        });
    }

    const reservationForm = document.getElementById('reservation-form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const date = e.target.date.value;

            alert(`Merci ${name}, votre rendez-vous a été réservé pour le ${date}. Nous vous contacterons à ${email}.`);
            reservationForm.reset();
        });
    }

    // Images de fond pour le slideshow de la page d'accueil
    const homeBackgrounds = [
        'https://images.pexels.com/photos/1422286/pexels-photo-1422286.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/821357/pexels-photo-821357.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6929004/pexels-photo-6929004.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://media.istockphoto.com/id/1488413053/fr/photo/inscription-sur-la-vitrine-porte-de-la-boutique-bienvenue.jpg?b=1&s=612x612&w=0&k=20&c=oTznlGqoG2bBE9wceD0bi7amroS7jGJOQm5dMQYtwBo='
    ];

    let currentIndex = 0;

    // Fonction pour changer l'image de fond
    function changeHomeBackground() {
        document.body.style.backgroundImage = `url('${homeBackgrounds[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % homeBackgrounds.length; // Passer à l'image suivante
    }

    // Démarrer le slideshow si on est sur la page d'accueil
    if (document.body.classList.contains('home')) {
        changeHomeBackground(); // Afficher la première image immédiatement
        setInterval(changeHomeBackground, 5000); // Changer toutes les 5 secondes
    }

    // Slideshow pour la page d'accueil
    if (document.body.classList.contains('home')) {
        const slideshowImages = document.querySelectorAll('#background-slideshow img');
        let currentIndex = 0;

        function changeSlideshowImage() {
            slideshowImages.forEach((img, index) => {
                img.classList.remove('active');
                if (index === currentIndex) {
                    img.classList.add('active');
                }
            });
            currentIndex = (currentIndex + 1) % slideshowImages.length;
        }

        // Démarrer le slideshow
        changeSlideshowImage(); // Afficher la première image immédiatement
        setInterval(changeSlideshowImage, 5000); // Changer toutes les 5 secondes
    }

    // Texte dynamique pour le header
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        const messages = [
            "BIENVENUE CHEZ EDEN_NEWS",
            "DES SERVICES PROFESSIONNELS POUR VOUS",
            "CONTACTEZ-NOUS POUR PLUS D'INFORMATIONS"
        ];
        let currentIndex = 0;

        function updateHeaderText() {
            headerTitle.textContent = messages[currentIndex];
            currentIndex = (currentIndex + 1) % messages.length;
        }

        setInterval(updateHeaderText, 5000); // Changer le texte toutes les 5 secondes
    }

    // Gestion du formulaire d'avis
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.querySelector('#feedback-list ul');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;
            const rating = e.target.rating.value;

            // Ajouter l'avis à la liste
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${name}</strong> (${email}) - Note : ${rating}/5
                <p>${message}</p>
            `;
            feedbackList.appendChild(listItem);

            // Réinitialiser le formulaire
            feedbackForm.reset();
        });
    }

    // Gestion de l'affichage/masquage du formulaire d'avis
    const toggleFeedbackButton = document.getElementById('toggle-feedback-form');

    if (toggleFeedbackButton && feedbackForm) {
        toggleFeedbackButton.addEventListener('click', () => {
            if (feedbackForm.style.display === 'none') {
                feedbackForm.style.display = 'block';
                toggleFeedbackButton.textContent = 'Masquer le formulaire';
            } else {
                feedbackForm.style.display = 'none';
                toggleFeedbackButton.textContent = 'Donner un avis';
            }
        });
    }

    // Gestion des boutons d'inscription et de connexion
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupButton && loginButton && signupForm && loginForm) {
        signupButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation du clic
            signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
            loginForm.style.display = 'none'; // Masquer le formulaire de connexion
        });

        loginButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation du clic
            loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
            signupForm.style.display = 'none'; // Masquer le formulaire d'inscription
        });

        // Masquer les formulaires lorsqu'on clique en dehors
        document.addEventListener('click', () => {
            signupForm.style.display = 'none';
            loginForm.style.display = 'none';
        });

        // Empêcher la fermeture des formulaires lorsqu'on clique à l'intérieur
        signupForm.addEventListener('click', (e) => e.stopPropagation());
        loginForm.addEventListener('click', (e) => e.stopPropagation());
    }
});
