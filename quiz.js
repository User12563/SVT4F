function checkAnswer(questionId, answer) {
    const messages = {
        'question1': 'Mauna Loa',
        'question2': 'Gaz',
        'question3': '1980'
    };
    const messageElement = document.getElementById('message' + questionId.charAt(questionId.length - 1));
    const nextQuestion = 'question' + (parseInt(questionId.charAt(questionId.length - 1)) + 1);
    if (answer === messages[questionId]) {
        messageElement.textContent = 'Bonne réponse !';
    } else {
        messageElement.textContent = 'Mauvaise réponse. La bonne réponse est ' + messages[questionId] + '.';
    }
    document.getElementById(questionId).classList.add('hidden');
    if (document.getElementById(nextQuestion)) {
        document.getElementById(nextQuestion).classList.remove('hidden');
    } else {
        document.getElementById('finalMessage').classList.remove('hidden');
    }
}
