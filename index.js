function Switchbutton() {
    // Get all designer buttons
    const buttons = document.querySelectorAll('.designer');
    buttons.forEach((btn) => {
        // Toggle color and text based on current state
        if (btn.innerText === 'Something new') {
            btn.innerText = 'Designer';
            btn.style.backgroundColor = '#f9eb2d';
            btn.style.color = 'black';
        } else {
            btn.innerText = 'Something new';
            btn.style.backgroundColor = 'white';
            btn.style.color = '#5d5d5dd4';
        }
    });
}

function Drop() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
}

function select() {
    const dropdown = document.querySelector('.dropdown-link');
    dropdown.style.textDecoration === 'underline';
}