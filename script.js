// Handle button click
function handleClick() {
    const input = document.getElementById('userInput');
    const output = document.getElementById('output');
    
    if (input.value.trim() === '') {
        alert('Please enter something!');
        return;
    }
    
    // Display the output
    output.textContent = `You entered: ${input.value}`;
    output.classList.add('active');
    
    // Clear input
    input.value = '';
    input.focus();
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('userInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleClick();
        }
    });
});