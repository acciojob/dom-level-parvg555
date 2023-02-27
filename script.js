//your code here

// Get the element you want to find the level of
let element = document.getElementById("level");

// Initialize the level variable
let level = 0;

// Iterate through the parent nodes of the element
while (element.parentNode) {
    // Increase the level by 1 for each parent node
    level++;
    // Update the element to the parent node
    element = element.parentNode;
}

alert("The level of the element is: " + level);