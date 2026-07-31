// Timer variables and application state
let timeLeft = 15;
let timerInterval;
let currentIndex = 0;
let submitted = false;
let streak = 0;

// DOM elements for score tracking
const correctDisplay =
    document.getElementById("correctCount");

const learningDisplay =
    document.getElementById("learningCount");

const notAttemptedDisplay =
    document.getElementById("notAttemptedCount");

const streakDisplay =
    document.getElementById("streakCount");

// DOM elements for the vocabulary card
const definition = document.getElementById("definition");
const sentence = document.getElementById("sentence");
const result = document.getElementById("result");
const answerInput = document.getElementById("answerInput");

const reviewArea =
    document.getElementById("reviewArea");


// Randomize the order of vocabulary words
function shuffleWords() {
    
    for (let i = words.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [words[i], words[randomIndex]] =
            [words[randomIndex], words[i]];
    }
}


// Update the score tracker based on each word's status
function updateScoreDisplay() {


    let correct = 0;
    let learning = 0;
    let notAttempted = 0;

    for (let word of words) {
        
        if (word.status === "correct") {
            correct++;
        }

        else if (word.status === "learning") {
            learning++;
        }

        else {
            notAttempted++;
        }
    }

    correctDisplay.textContent = correct;
    learningDisplay.textContent = learning;
    notAttemptedDisplay.textContent = notAttempted;
}

// Calculate the accuracy percentage of a vocabulary word
function getAccuracy(word) {

    if (word.attempts === 0) {
        return 0;
    }

    return Math.round(
        (word.correctAnswers / word.attempts) * 100
    );
}

// Determine the mastery level of a vocabulary word
function getMastery(word) {

    const accuracy = getAccuracy(word);

    if (word.attempts === 0) {
        return "Not Attempted";
    }

    else if (accuracy >= 90) {
        return "Mastered";
    }

    else if (accuracy >= 60) {
        return "Learning";
    }

    else {
        return "Needs Practice";
    }
}


// Display the current word's definition and sentence
function loadWord() {

    const currentWord = words[currentIndex];

    definition.textContent = currentWord.definition;
    sentence.textContent = currentWord.sentence;

    answerInput.value = "";
    result.textContent = "";

    startTimer();
}

// Display all words marked as "still learning"
function showReviewWords() {
    
    const reviewWords = 
        words.filter(
            word => word.status === "learning"
        );

    if (reviewWords.length === 0) {

        reviewArea.innerHTML =
            "<p> No review words. Good job!</p>";

        return;
    }

    let html =
        "<h3>Review Words</h3>";

    for (let word of reviewWords) {

        html += `
            <div class="review-card">

                <h4>${word.word}</h4>

                <p>
                    <strong>Definition:</strong>
                    ${word.definition}
                </p>

                <p>
                    <strong>Sentence:</strong>
                    ${word.sentence}
                </p>

                <p>
                    <strong>Attempts:</strong>
                    ${word.attempts}
                </p>

                <p>
                    <strong>Accuracy:</strong>
                    ${getAccuracy(word)}%
                </p>

                <p>
                    <strong>Mastery:</strong>
                    ${getMastery(word)}
                </p>

            </div>
       `;
    }

    reviewArea.innerHTML = html;
}

// Save user progress to local storage
function saveProgress() {

    localStorage.setItem(
        "satWords",
        JSON.stringify(words)
    );
}

// Load saved progress from local storage
function loadProgress() {

    const savedWords =
        localStorage.getItem("satWords")

    if (!savedWords) {
        return;
    }

    const parsedWords =
        JSON.parse(savedWords);

    for (let currentWord of words) {

        const savedWords =
            parsedWords.find(
                word =>
                    word.word === currentWord.word
            );
        
        if (savedWords) {

            currentWord.status =
                savedWords.status;
        }
    }
}

// Start or restart the countdown timer
function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 15;

    document.getElementById("timer")
        .textContent = timeLeft;

    timerInterval = setInterval(function() {
        
        timeLeft--;

        document.getElementById("timer")
            .textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            result.textContent =
                "Time's up! The word was " + 
                words[currentIndex].word;

            words[currentIndex].status =
                "learning";

            words[currentIndex].attempts++;

            submitted = true;

            updateScoreDisplay();
            saveProgress();
        }
    }, 1000);
}

// Check the user's answer and update progress
document.getElementById("submitButton")
.addEventListener("click", function() {

    if (submitted) {
        return;
    }

    submitted = true;
    clearInterval(timerInterval);

    words[currentIndex].attempts++;

    const userAnswer =
        answerInput.value.trim().toLowerCase();

    const correctAnswer =
        words[currentIndex].word.toLowerCase();

    if (userAnswer === correctAnswer) {

        result.textContent =
            "Correct!";
        result.style.color = "darkgreen";

        words[currentIndex].status =
            "correct";

        words[currentIndex].correctAnswers++;

        streak++;
        streakDisplay.textContent = streak;

        if (streak === 5) {
            result.textContent =
                "🔥 5 word streak! Keep going!";
        }

    } 
    
    else if (
        words[currentIndex].synonyms.includes(userAnswer)
    ) {

        result.textContent =
            "Very close! The SAT word was " +
            words[currentIndex].word;
        result.style.color = "orange";

        words[currentIndex].status =
            "learning";

    } 
    
    else {

        result.textContent =
            "Incorrect. The word was " +
            words[currentIndex].word;
        result.style.color = "red";

        words[currentIndex].status =
            "learning";
        
        streak = 0;
        streakDisplay.textContent = streak;
    }

    updateScoreDisplay();
    saveProgress();

});

// Move to the next vocabulary word
document.getElementById("nextButton")
.addEventListener("click", function() {

    submitted = false;

    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    loadWord();

});

// Show words that need additional review
document.getElementById("reviewButton")
.addEventListener("click", function() {

    showReviewWords();
});

// Shuffle the vocabulary list and restart practite
document.getElementById("shuffleButton")
.addEventListener("click", function() {

    clearInterval(timerInterval);
    shuffleWords();
    currentIndex = 0;
    submitted = false;
    loadWord();
});

// Allow users to submit answers by pressing "enter"
answerInput.addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            document
                .getElementById("submitButton")
                .click();
        }
    }
);

// Initialize the SAT vocabulary trainer
shuffleWords();
loadProgress();
loadWord();
updateScoreDisplay();