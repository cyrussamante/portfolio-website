// Get all the section elements
const sections = document.getElementsByClassName('section');

// Variable to store the current section index
let currentSectionIndex = 0;

// Function to handle the scroll event
function handleScroll(event) {
  // Get the current scroll position
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the user has manually scrolled
  if (Math.abs(currentPosition - sections[currentSectionIndex].offsetTop) < 10) {
    // User has manually scrolled to the current section
    return;
  }

  // Check if the user has scrolled down
  if (currentPosition > sections[currentSectionIndex].offsetTop) {
    currentSectionIndex++;
    if (currentSectionIndex >= sections.length) {
      currentSectionIndex = sections.length - 1;
    }
  } else {
    // User has scrolled up
    currentSectionIndex--;
    if (currentSectionIndex < 0) {
      currentSectionIndex = 0;
    }
  }

  // Scroll to the center of the current section
  const currentSection = sections[currentSectionIndex];
  const currentSectionTop = currentSection.offsetTop;
  const currentSectionHeight = currentSection.offsetHeight;
  const scrollToPosition = currentSectionTop + currentSectionHeight / 2 - window.innerHeight / 2;
  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
  });
}

// Add the scroll event listener to the window
window.addEventListener('scroll', handleScroll);
