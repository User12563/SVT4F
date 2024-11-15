    function showGame(gameId) {
        document.querySelectorAll('.game-section').forEach(function(section) {
            section.classList.remove('active');
        });
        document.getElementById(gameId).classList.add('active');
        document.getElementById('home').style.display = 'none';
    }

    function showHome() {
        document.querySelectorAll('.game-section').forEach(function(section) {
            section.classList.remove('active');
        });
        document.getElementById('home').style.display = 'block';
    }

    function checkKit() {
        const essentialItems = ['eau', 'nourriture', 'medicaments'];
        let selectedItems = [];
        document.querySelectorAll('input[name="kit"]:checked').forEach(function(checkbox) {
            selectedItems.push(checkbox.value);
        });

        if (essentialItems.every(item => selectedItems.includes(item))) {
            document.getElementById('kitMessage').textContent = "Bonne préparation ! Passons à la phase suivante.";
            document.getElementById('phase1').classList.add('hidden');
            document.getElementById('phase2').classList.remove('hidden');
        } else {
            document.getElementById('kitMessage').textContent = "Il vous manque des objets essentiels.";
        }
    }

    function evacuer(choice) {
        if (choice === 'oui') {
            document.getElementById('evacMessage').textContent = "Bonne décision ! Vous êtes en sécurité.";
            document.getElementById('phase2').classList.add('hidden');
            document.getElementById('phase3').classList.remove('hidden');
        } else {
            document.getElementById('evacMessage').textContent = "Restez prudent, il est conseillé d'évacuer.";
        }
    }

    function nettoyer(method) {
        if (method === 'avec un masque') {
            document.getElementById('cleanMessage').textContent = "Bon choix ! Nettoyer en toute sécurité.";
            document.getElementById('winMessage1').classList.remove('hidden');
        } else {
            document.getElementById('cleanMessage').textContent = "Attention ! Il est dangereux de nettoyer sans protection.";
        }
    }

    function checkAnswer(questionId, answer) {
        const correctAnswers = {
            'question1': 'Mauna Loa',
            'question2': 'Gaz',
            'question3': '1980'
        };

        if (answer === correctAnswers[questionId]) {
            document.getElementById('message' + questionId.slice(-1)).textContent = "Bonne réponse !";
            document.getElementById(questionId).classList.add('hidden');

            // Montrer la prochaine question, si elle existe
            const nextQuestionId = 'question' + (parseInt(questionId.slice(-1)) + 1);
            const nextQuestion = document.getElementById(nextQuestionId);
            if (nextQuestion) {
                nextQuestion.classList.remove('hidden');
            } else {
                document.getElementById('winMessage2').classList.remove('hidden');
            }
        } else {
            document.getElementById('message' + questionId.slice(-1)).textContent = "Mauvaise réponse, essayez encore.";
        }
    }

    function movePiece(piece) {
        // Exemple de logique de manipulation de pièces pour un puzzle
        alert("Fonction de mouvement à implémenter.");
    }
