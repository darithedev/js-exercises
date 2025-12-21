//This function return true o false if the color is valid - PLEASE DONT MODIFY
function isValidColor(string) {
  const validColor = new Option().style;
  validColor.color = string;
  return validColor.color === string.toLowerCase();
}

// ========== DO NOT MODIFY ABOVE FUNCTION ===========

// Event Listeners
const bodytag = document.getElementById('bodytag');
const element = document.getElementById('element');
// Color Prompt
const color = prompt("What color would you like to change the background to?");
// Use color prompt to change background color
if (isValidColor(color)) {
  bodytag.style.backgroundColor = color;
} else alert("That is an invalid color, please try again!");
// Add an event listener for the mouse enter
element.addEventListener("mouseenter", (event) => {
  element.textContent = "Mouse enter event";
  element.style.border = '2px solid black';
  console.log("Mouse enter event.");
});
// Add an event listener for the mouse leave
element.addEventListener("mouseleave", (event) => {
  element.textContent = "Hover Me";
  element.style.border = 'none';
  console.log("Mouse leave event.");
});