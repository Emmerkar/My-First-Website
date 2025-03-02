// Get elements (check if they exist to avoid errors on other pages)
const button = document.getElementById('toggleButton');
const heading = document.getElementById('myHeading');
const counter = document.getElementById('counter');
const userInput = document.getElementById('userInput');

// Load saved data from localStorage, or set defaults
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
let lastText = localStorage.getItem('lastText') || 'Hello, World!';

// Set initial values if elements exist
if (heading) heading.textContent = lastText;
if (counter) counter.textContent = 'Clicks: ' + clickCount;
if (document.body) document.body.style.backgroundColor = 'lightblue'; // Initial background

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event listener if button exists
if (button) {
    button.addEventListener('click', function () {
        // Get the text from the input field if it exists
        const inputText = userInput ? userInput.value : '';

        // Update the heading with the input text, or a default if empty
        if (heading) {
            if (inputText === '') {
                heading.textContent = 'You didn’t type anything!';
            } else {
                heading.textContent = inputText;
            }
        }

        // Increment and update the counter
        clickCount = clickCount + 1;
        if (counter) counter.textContent = 'Clicks: ' + clickCount;

        // Change the background color randomly
        document.body.style.backgroundColor = getRandomColor();

        // Save to localStorage
        localStorage.setItem('clickCount', clickCount);
        if (heading) localStorage.setItem('lastText', heading.textContent);

        // Clear the input field if it exists
        if (userInput) userInput.value = '';
    });
}