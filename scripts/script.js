// JavaScript Document
console.log("hi");

/* TRIANGLE */


const buttons = document.querySelectorAll('#eventselector button');  /*bron 5 ChatGPT: Can you help me with making all of the triangles invisible and making them visible when I am clicking the right button. The triangle needs to be visisble under the button that has been clicked https://chatgpt.com/share/66f67134-a870-800f-bf92-74196002f010 */

// Get all sections and the buttons
// Select all direct child div elements inside the .eventsections container
const sections = document.querySelectorAll('.eventsections > div');
const prevBtn = document.querySelector(' .eventsections > button:first-of-type');
const nextBtn = document.querySelector(' .eventsections > button:last-of-type');

let currentIndex = 0; // Start at the first section


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

// Function to update visible section
function showSection(index) {
    // Hide all sections
    sections.forEach(section => section.style.display = 'none');
    
    // Show the section based on index
    sections[index].style.display = 'block';
}

// Initialize by showing the first section
showSection(currentIndex);

// Add event listeners to the buttons
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


document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

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

  // Add event listener to hamburger icon to toggle menu
  hamburgerIcon.addEventListener('click', toggleMenu);
});


