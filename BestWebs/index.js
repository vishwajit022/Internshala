// Get the button and card number/CVV elements by their IDs
const showNumberButton = document.getElementById('showNumberButton');
const cardNumberDots = document.querySelector('.card__number__dots');
const cardCVV = document.querySelector('.card__cvv');

// Add a click event listener to the "Show card number" button
showNumberButton.addEventListener('click', function() {
    // Toggle the visibility of the card number dots and CVV
    if (cardCVV.textContent === 'CVV: 7651') {
        // Replace the content with the actual card numbers
        cardNumberDots.style.display = 'inline';
        cardNumberDots.innerHTML = '<span>&#x25CF &#x25CF &#x25CF &#x25CF</span> ' +
            '<span>&#x25CF &#x25CF &#x25CF &#x25CF</span> ' +
            '<span>&#x25CF &#x25CF &#x25CF &#x25CF</span>';
        cardCVV.style.display = 'inline';
        cardCVV.textContent = 'CVV: ***'; // Replace with the actual CVV
        showNumberButton.textContent = 'Hide card number';
    } else {
        // Hide the card numbers when the button is clicked again
        cardNumberDots.textContent = '1234 4566 7654  ';
        cardNumberDots.style.padding = '1vh';
        cardCVV.textContent = 'CVV: 7651';
        showNumberButton.textContent = 'Show card number';
    }
});
// Get the elements by their IDs
// Get the elements by their IDs
const toggleTransactions = document.getElementById('toggleTransactions');
const recentTransactions = document.getElementById('recentTransactions');

// Add a click event listener to the "keyboard_arrow_up" icon
toggleTransactions.addEventListener('click', () => {
    // Toggle the visibility of recent transactions with a fade effect
    recentTransactions.classList.toggle('show');
});