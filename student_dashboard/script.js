document.addEventListener('DOMContentLoaded', function() {
    // Hide all tab contents initially
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Add event listeners to sidebar options
    var sidebarOptions = document.querySelectorAll('.sidebar li');
    sidebarOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Hide all tab contents
            tabContents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show corresponding tab content
            var tabId = option.getAttribute('id') + '-content';
            document.getElementById(tabId).style.display = 'block';
        });
    });
});


document.getElementById('logout').addEventListener('click', function() {
    // Perform logout functionality here
    // For example, redirect the user to the logout page
    window.location.href = "../LinguaConnect/index.html";
});

document.getElementById('flashcard-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var front = document.getElementById('front').value;
    var back = document.getElementById('back').value;

    addFlashcard(front, back);
    this.reset(); // Clear input fields after adding flashcard
});

function addFlashcard(front, back) {
    var flashcardContainer = document.getElementById('flashcards');
    var flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.innerHTML = '<div><strong>Front:</strong> ' + front + '</div><div><strong>Back:</strong> ' + back + '</div>';
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        flashcard.remove();
    });
    flashcard.appendChild(removeButton);
    flashcardContainer.appendChild(flashcard);
}

document.addEventListener('DOMContentLoaded', function() {
    var flashcards = localStorage.getItem('flashcards');
    if (flashcards) {
        document.getElementById('flashcards').innerHTML = flashcards;
    }
});

window.addEventListener('beforeunload', function() {
    var flashcards = document.getElementById('flashcards').innerHTML;
    localStorage.setItem('flashcards', flashcards);
});
