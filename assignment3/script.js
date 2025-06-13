const draggables = document.querySelectorAll(".draggable");
const bowl = document.getElementById("bowl");
const eatButton = document.getElementById("eatButton");
const happyCat = document.querySelector(".happy-cat");
const angryCat = document.querySelector(".angry-cat");
const mainCat = document.querySelector(".cat");

let currentFoodId = null;

// Hides button when bowl is empty
eatButton.style.display = "none";

// Drag and drop

// Items are enabled to be dragged around
draggables.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.id);

    // Copies the icon of the dragged item
    const dragIcon = item.cloneNode(true);
    dragIcon.style.width = "100px";
    dragIcon.style.position = "absolute";
    dragIcon.style.top = "-1000px"; // Able to move the dragged food item off-screen
    document.body.appendChild(dragIcon);

    // Customises the dragged image
    e.dataTransfer.setDragImage(dragIcon, 50, 50);
    setTimeout(() => {
      // Gets rid of the copied icon
      document.body.removeChild(dragIcon);
    }, 0);
  });
});

// Allows the bowl to become the dropbox
bowl.addEventListener("dragover", (e) => e.preventDefault());

// Dropping the foods in the bowl
bowl.addEventListener("drop", (e) => {
  e.preventDefault();

  // Gets the ID of the food
  const id = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(id);

  if (draggedItem) {
    currentFoodId = id;

    // Changes the image of the bowl to the food that has been dropped
    bowl.src = draggedItem.dataset.bowl;

    // Shows the eat button when food is dropped into the bowl
    if (draggedItem.dataset.bowl && draggedItem.dataset.reaction) {
      eatButton.style.display = "block";
    }
  }
});

// Position button near bowl
function positionEatButton() {
  const rect = bowl.getBoundingClientRect();
  eatButton.style.top = `${window.scrollY + rect.top - -100}px`;
  eatButton.style.left = `${window.scrollX + rect.right + -265}px`;
}

// When eat button is clicked
eatButton.addEventListener("click", () => {
  // No food has been dropped, it will do nothing
  if (!currentFoodId) return;

  // Gets reaction of the dropped food
  const draggedItem = document.getElementById(currentFoodId);
  const reaction = draggedItem.dataset.reaction;

  // Swaps cat image based on the reaction of the cat to the food that has been dropped
  const mainCat = document.querySelector(".cat");
  if (reaction === "happy") {
    mainCat.src = "happy cat.png";
    showReaction("happy");
  } else if (reaction === "angry") {
    mainCat.src = "angry cat.png";
    showReaction("angry");
  }
});
