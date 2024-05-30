document.addEventListener('DOMContentLoaded', function() {
    //génerer l'operation CAPCHAT
    const captchaElement = document.getElementById('captcha');
    const captchaResultElement = document.getElementById('captcha-result');
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    captchaElement.textContent = `${num1} + ${num2}`;
    let captchaAnswer = num1 + num2;

/*fonction submit pour gerer les elements du formulaire */
function Submit(event) {
    event.preventDefault();//Empêche la soumission par defaut du formulaire

    //Vérifier la reponse du CAPCHA
    if (parseInt(captchaResultElement.value) !== captchaAnswer) {
        alert('La réponse est incorrecte. Veuillez réessayer.');
        return;
    }


    //Récupère l'élément formulaire avec l'identifiant 'contact-form'
    const form = document.getElementById('contact-form');
    //Encode l'objet du message du formulaire pour l'inclure dans un URL
    const subject = encodeURIComponent("Formulaire de contact");
    // Encode le corps du message du formulaire pour l'inclure dans un URL
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n` + // Récupère et encode le nom de famille
        `Prénom: ${form.prenom.value}\n` +
        `Adresse email: ${form.email.value}\n` +
        `Date de naissance: ${form.date.value}\n` +
        `Formations souhaitées: ${form.formations.value}\n` +
        `Actuellement, vous êtes: ${form.annee.value}\n` +
        `Langues parlées: ${Array.from(form.langues)
            .filter(langue => langue.checked)
            .map(langue => langue.value)
            .join(', ')}\n\n` +
        `Demande spécifique: \n${form.demande.value}`
    );

    //Creer l'URL mailto avec les paramètres saisie
    const mailtoLink = `mailto:lamour.e2101771@etud.univ-ubs.fr?subject=${subject}&body=${body}`;

// Ouvrir l'URL mailto dans une nouvelle fenetre pour creer un email
window.location.href = mailtoLink;


}

//Atache la fonction Submit à l'évèneemnt de soumission du formulaire
document.getElementById('contact-form').addEventListener('submit',Submit);

});