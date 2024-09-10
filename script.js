let currentQuestionIndex = 0;
let bossHealth = 100;
let playerHealth = 100;

const questions = [
    { question: "Quanto é 2 + 2?", answer: "4" },
    { question: "Quanto é 5 x 3?", answer: "15" },
    // Adicione mais questões
];

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

function startGame() {
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-text").textContent = questions[currentQuestionIndex].question;
    } else {
        alert("Você venceu o jogo!");
        window.location.href = "index.html"; // Redireciona para a tela inicial
    }
}

document.getElementById("submit-answer").addEventListener("click", function() {
    checkAnswer();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {
    const playerAnswer = document.getElementById("answer-input").value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (playerAnswer === correctAnswer) {
        applyBossDamage();
    } else {
        applyPlayerDamage();
    }
    currentQuestionIndex++;
    showQuestion();
    document.getElementById("answer-input").value = "";
}

function applyBossDamage() {
    bossHealth -= 10;
    updateHealthBars();
    flashScreen();
    if (bossHealth <= 0) {
        alert("Você derrotou o Boss!");
    }
}

function applyPlayerDamage() {
    playerHealth -= 10;
    updateHealthBars();
    flashScreen();
    if (playerHealth <= 0) {
        alert("Você perdeu!");
    }
}

function updateHealthBars() {
    document.getElementById("boss-health").style.width = bossHealth + "%";
    document.getElementById("player-health").style.width = playerHealth + "%";
}

function flashScreen() {
    const flashOverlay = document.getElementById("flash-overlay");
    flashOverlay.style.opacity = 1;
    setTimeout(() => {
        flashOverlay.style.opacity = 0;
    }, 200);
}
