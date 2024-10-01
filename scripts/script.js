// JavaScript Document //ChatGPT:kun je mijn javascript alleen zo aanpassen dat het semantisch correct is? (eerst const en var, dan let, dan function, dan event listeners https://chatgpt.com/share/66fbfb55-06d4-800f-ac8c-faf19783cfbf
console.log("hi");

/* TRIANGLE */

// Const declarations
const buttons = document.querySelectorAll('#eventselector button');  /*bron 5 ChatGPT: Can you help me with making all of the triangles invisible and making them visible when I am clicking the right button. The triangle needs to be visisble under the button that has been clicked https://chatgpt.com/share/66f67134-a870-800f-bf92-74196002f010 */

const sections = document.querySelectorAll('.eventsections > div');

const prevBtn = document.querySelector('.eventsections > button:first-of-type');
const nextBtn = document.querySelector('.eventsections > button:last-of-type');

const hamburgerIcon = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


var modal = document.getElementById("guardiangirlsvideo");
var btn = document.getElementById("videoTrigger");
var span = document.getElementsByClassName("close")[0];

// Let declarations
let currentIndex = 0; // Start at the first section

// Functions

// Function to update visible section
function showSection(index) {
    // Hide all sections
    sections.forEach(section => section.style.display = 'none');
    
    // Show the section based on index
    sections[index].style.display = 'block';
}

// function showSection(sectionId) { // bron 13 ChatGPT: Ik heb twee errors javascript: (LAAT ERRORS ZIEN) https://chatgpt.com/share/66fbfa6f-afb8-800f-9332-0db16a4eedb2
//   const section = document.getElementById(sectionId);
//   if (section) {
//       section.style.display = 'block';
//   } else {
//       console.log(`Section with ID ${sectionId} does not exist on this page.`);
//   }
// }

// Function to toggle the menu open/close
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active'); // Close the menu
        hamburgerIcon.src = 'images/hamburgermenu.png'; // Set icon to burger
    } else {
        menu.classList.add('active'); // Open the menu
        hamburgerIcon.src = 'images/hamburgercross.png'; // Set icon to cross
    }
}

// Event listeners

document.addEventListener('DOMContentLoaded', function() {
    // Set the first button as active by default if buttons exist
    if (buttons.length > 0) { /*bron 9 ChatGPT: I want that the first button is active by default */
        buttons[0].parentElement.classList.add('active');
    }

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            // Remove the 'active' class from all list items
            document.querySelectorAll('#eventselector li').forEach((li) => {
                li.classList.remove('active');
            });

            // Add the 'active' class to the parent <li> of the clicked button
            this.parentElement.classList.add('active');
        });
    });

    // Add event listener to hamburger icon to toggle menu
    hamburgerIcon.addEventListener('click', toggleMenu);

    // Initialize by showing the first section
    showSection(currentIndex);
});

// Event listener for the modal open button
btn.onclick = function() {
    modal.style.display = "block";
};


// Event listener for the modal close button
span.onclick = function() {
    modal.style.display = "none";
};

// Event listener for closing the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Add event listeners to the prev and next buttons
prevBtn.addEventListener('click', () => {
    // Go to previous section, if at 0 go to the last section
    currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
    showSection(currentIndex);
});

nextBtn.addEventListener('click', () => {
    // Go to next section, if at the last section go back to the first
    currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
    showSection(currentIndex);
});

