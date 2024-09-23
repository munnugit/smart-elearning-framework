// Function to get recommendations
function getRecommendations() {
    const userId = document.getElementById('userId').value;

    if (!userId) {
        alert("Please enter your User ID.");
        return;
    }

    fetch('/api/recommendations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('recommendationResult').innerText = "Recommendations: " + data.recommendations.join(", ");
        } else {
            document.getElementById('recommendationResult').innerText = data.message;
        }
    });
}

// Function to generate personalized learning path
function generatePath() {
    const learningGoal = document.getElementById('learningGoal').value;

    if (!learningGoal) {
        alert("Please enter your learning goal.");
        return;
    }

    const samplePath = `Based on your goal "${learningGoal}", we suggest the following path:
    1. Course A: Introduction to ${learningGoal}.
    2. Course B: Advanced ${learningGoal}.
    3. Course C: Expert ${learningGoal}.`;

    document.getElementById('learningPathResult').innerText = samplePath;
}

// Function to handle feedback submission
function submitFeedback() {
    const feedback = document.getElementById('feedbackInput').value;

    if (!feedback) {
        alert("Please enter your feedback.");
        return;
    }

    const feedbackResponse = "Thank you for your feedback! We value your input and will use it to improve our services.";
    document.getElementById('feedbackResult').innerText = feedbackResponse;
}

// Function to check quiz answer
function checkAnswer() {
    const answer = document.getElementById('quizAnswer').value.trim().toLowerCase();

    if (answer === "") {
        alert("Please enter your answer.");
        return;
    }

    const correctAnswer = "paris";
    const quizResponse = answer === correctAnswer
        ? "Correct! The capital of France is Paris."
        : "Incorrect. The correct answer is Paris.";

    document.getElementById('quizResult').innerText = quizResponse;
}
