if (document.images) {
    bild0 = new Image(); bild0.src = "exclamation-circle-solid.svg";
    bild1 = new Image(); bild1.src = "check-square-solid.svg";
}

anzluecken = 16;

// Define the correctAnswers array here
const correctAnswers = [
    "Human",
    "Human",
    "Human",
    "Human",
    "HumanFactory",
    "Human",
    "Man",
    "HumanFactory",
    "Human",
    "Woman",
    "HumanFactory",
    "Human",
    "introduce",
    "ManFactory",
    "WomanFactory",
    "$manFactory"
];

function checkAnswers() {
    const userAnswers = [];
    let correctAnswersCount = 0;

    for (let i = 1; i <= anzluecken; i++) {
        const inputName = `text${i}`;
        const input = document.formular[inputName];

        if (input) {
            const userAnswer = input.value.trim();
            userAnswers.push(userAnswer);

            if (userAnswer === "") {
                document[`auswertung${i}`].src = "exclamation-circle-solid.svg"; // Empty input
            } else {
                const correctAnswer = correctAnswers[i - 1];
                if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                    document[`auswertung${i}`].src = "check-square-solid.svg"; // Correct answer
                    correctAnswersCount++;
                } else {
                    document[`auswertung${i}`].src = "exclamation-circle-solid.svg"; // Incorrect answer
                }
            }
        }
    }

    if (correctAnswersCount === anzluecken) {
        alert(`Glueckwunsch! Alle ${correctAnswersCount}/${anzluecken} Antworten sind richtig! Du Design Pattern Master.`);
    } else {
        alert(`${correctAnswersCount}/${anzluecken} Antworten sind richtig. Die Falschen Antworten sind markiert mit einem (!) markiert`);
    }
}
