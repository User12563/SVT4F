function showGame(gameId) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => game.classList.add('hidden'));
    document.getElementById(gameId).classList.remove('hidden');
}

function checkKit() {
    const kitMessage = document.getElementById('kitMessage');
    const hasEau = document.getElementById('eau').checked;
    const hasNourriture = document.getElementById('nourriture').checked;
    const hasMedicaments = document.getElementById('medicaments').checked;
    const hasVetements = document.getElementById('vetements').checked;
    const hasDocuments = document.getElementById('documents').checked;

    if (hasEau && hasNourriture && hasMedicaments && hasVetements && hasDocuments) {
        kitMessage.textContent = 'Vous avez correctement préparé votre kit ! Gagné !';
        document.getElementById('phase1').classList.add('hidden');
        document.getElementById('phase2').classList.remove('hidden');
    } else {
        kitMessage.textContent = 'Assurez-vous d\'inclure tous les éléments dans votre kit d\'urgence.';
    }
}

function evacuer(response) {
    const evacMessage = document.getElementById('evacMessage');
    if (response === 'oui') {
        evacMessage.textContent = 'Vous avez évacué en sécurité. Gagné !';
        document.getElementById('phase2').classList.add('hidden');
        document.getElementById('phase3').classList.remove('hidden');
    } else {
        evacMessage.textContent = 'Vous êtes en danger, évacuez immédiatement !';
    }
}

function nettoyer(response) {
    const cleanMessage = document.getElementById('cleanMessage');
    if (response ===[_{{{CITATION{{{_1{](https://github.com/js202005082300/Aide-m-moires/tree/c85c562d508c68fa086972462338ed773a25c8ac/JavaScript%2Fcours%2F004_op%C3%A9rateurs%2Fnote.md)[_{{{CITATION{{{_2{](https://github.com/js202005082300/Aide-m-moires/tree/c85c562d508c68fa086972462338ed773a25c8ac/JavaScript%2Fcours%2F002_hello_world%2Fnote.md)[_{{{CITATION{{{_3{](https://github.com/kikstrn/test_markdown/tree/cf87059d22c6e1ee76e8a2da0b4a0257051a50be/markdown.md)
