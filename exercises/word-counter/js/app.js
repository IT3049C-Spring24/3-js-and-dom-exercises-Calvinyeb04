// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textAreaInput = document.querySelector("#text");
const statsSection = document.querySelector("#stat");

// 🤖: Create an Event Listener on textarea input
textAreaInput.addEventListener("input", function () {
  // Get the content of the textarea
  const text = textAreaInput.value;

  // Split the text into words
  const words = text.trim().split(/\s+/);

  // Count the number of words and characters
  const wordCount = words.length;
  const charCount = text.length;

  // Update the stats section
  statsSection.textContent = `You've written ${wordCount} words and ${charCount} characters.`;
});
