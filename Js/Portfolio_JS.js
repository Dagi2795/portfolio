const phrases = ["3rd year Software Enginering student","Graphics Designer", "Full Stack Developer", "Mobile App Designer", 
"Graphics Designer", "Software Developer", "Database Administrator ", 
]; // Phrases to type and erase
const speed = 100; // Typing speed in milliseconds
const eraseSpeed = 50; // Erasing speed in milliseconds
let phraseIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeAndBackspace() {
  const container = document.getElementById('text-container');
  const currentPhrase = phrases[phraseIndex];
  
  
  if (isTyping) {
    container.textContent += currentPhrase[charIndex];
    charIndex++;
    if (charIndex < currentPhrase.length) {
      setTimeout(typeAndBackspace, speed);
    } else {
      isTyping = false;
      setTimeout(typeAndBackspace, speed * 5); // Pause before erasing
    }
  } else {
    container.textContent = container.textContent.slice(0, -1);
    if (container.textContent.length > 0) {
      setTimeout(typeAndBackspace, eraseSpeed);
    } else {
      isTyping = true;
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
      setTimeout(typeAndBackspace, speed); // Start typing next phrase
    }
  }
}

// Start the effect
typeAndBackspace();