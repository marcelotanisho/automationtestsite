document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === 'password') {
        showMessage('Login successful!');
    } else {
        showMessage('Invalid credentials, please try again.');
    }
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    if(searchTerm) {
        showSearchResult(`You searched for "${searchTerm}".`);
    } else {
        showSearchResult('Please enter a search term.');
    }
});

document.getElementById('dropdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.getElementById('options').value;
    showMessage(`You selected: ${selectedOption}`);
});

document.getElementById('radioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedRadio = document.querySelector('input[name="radioGroup"]:checked');
    if (selectedRadio) {
        showMessage(`You chose: ${selectedRadio.value}`);
    } else {
        showMessage('Please select a radio option.');
    }
});

document.getElementById('textareaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comments').value;
    showMessage(`You commented: "${comment}"`);
});

// Update the input after 2 seconds when the button is clicked
document.getElementById('updateButton').addEventListener('click', function() {
    const delayedInput = document.getElementById('delayedInput');
    
    setTimeout(function() {
        delayedInput.value = "This input has been updated!";
    }, 2000);  // 2 second delay
});

function showMessage(message) {
    const messageContainer = document.getElementById('messageContainer');
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    messageContainer.classList.remove('hidden');
}

function showSearchResult(result) {
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    resultText.textContent = result;
    resultContainer.classList.remove('hidden');
}

// Shadow DOM custom element
class ShadowInput extends HTMLElement {
    constructor() {
        super();
        // Attach shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Create input element
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter shadow input';

        // Style inside shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            input {
                padding: 10px;
                margin-top: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                width: 100%;
                box-sizing: border-box;
            }
        `;

        // Append input and style to shadow root
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(input);
    }
}

// Define the new element
customElements.define('shadow-input', ShadowInput);
 
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('images');
    const showImageButton = document.getElementById('showImage');
    const messageContainer = document.getElementById('messageContainer');
    const selectedImage = document.getElementById('selectedImage');

    showImageButton.addEventListener('click', function() {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const imageUrl = selectedOption.getAttribute('data-img-src');

        // Update the image source and show it
        selectedImage.src = imageUrl;
        selectedImage.style.display = 'block';
        messageContainer.classList.remove('hidden');
    });
});

// JavaScript to trigger an alert
document.getElementById('alertButton').addEventListener('click', function() {
    alert('This is a test alert!');
});
