document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi du formulaire pour la démonstration
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Affiche une alerte avec les informations du formulaire
        alert(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Réinitialise le formulaire
        form.reset();
    });
});