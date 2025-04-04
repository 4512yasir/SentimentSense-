// Get elements
const inputBox = document.getElementById('textbox');
const submitButton = document.getElementById('button');
const displayDiv = document.querySelector('.display');

// Define simple sentiment keywords
const positiveWords = ['happy', 'great', 'good', 'love', 'awesome', 'fantastic', 'excellent', 'amazing', 'joy'];
const negativeWords = ['sad', 'angry', 'bad', 'hate', 'terrible', 'awful', 'worst', 'horrible', 'upset'];

// Function to check sentiment
function analyzeSentiment(text) {
    const lowerText = text.toLowerCase();
    let score = 0;

    positiveWords.forEach(word => {
        if (lowerText.includes(word)) score += 1;
    });

    negativeWords.forEach(word => {
        if (lowerText.includes(word)) score -= 1;
    });

    if (score > 0) return '😊 Positive';
    if (score < 0) return '😡 Negative';
    return '😐 Neutral';
}

// Event listener for button
submitButton.addEventListener('click', () => {
    const userText = inputBox.value.trim();
    if (userText === '') {
        displayDiv.textContent = 'Please enter some text.';
        return;
    }

    const result = analyzeSentiment(userText);
    displayDiv.textContent = `Sentiment: ${result}`;
});

