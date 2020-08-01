/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/
/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}
fullItemList.addEventListener(); // add event listener
fullItemList.addEventListener("click"); // add click
fullItemList.addEventListener("click", checkOffItem); // add function name

/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}
