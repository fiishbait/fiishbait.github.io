const draggables = document.querySelectorAll(".draggable");
const bowl = document.getElementById("bowl");
const eatButton = document.getElementById("eatButton");
const happyCat = document.querySelector(".happy-cat");
const angryCat = document.querySelector(".angry-cat");
const mainCat = document.querySelector(".cat");

let currentFoodId = null;

// Hide button initially
eatButton.style.display = "none";

// Setup drag and drop
draggables.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.id);

    const dragIcon = item.cloneNode(true);
    dragIcon.style.width = "100px";
    dragIcon.style.position = "absolute";
    dragIcon.style.top = "-1000px";
    document.body.appendChild(dragIcon);
    e.dataTransfer.setDragImage(dragIcon, 50, 50);
    setTimeout(() => {
      document.body.removeChild(dragIcon);
    }, 0);
  });
});

bowl.addEventListener("dragover", (e) => e.preventDefault());

bowl.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(id);

  if (draggedItem) {
    currentFoodId = id;
    bowl.src = draggedItem.dataset.bowl;

    // Only show button if a valid food is dropped
    if (draggedItem.dataset.bowl && draggedItem.dataset.reaction) {
      eatButton.style.display = "block";
      positionEatButton();
    }
  }
});

// Position button near bowl
function positionEatButton() {
  const rect = bowl.getBoundingClientRect();
  eatButton.style.top = `${window.scrollY + rect.top - -100}px`;
  eatButton.style.left = `${window.scrollX + rect.right + -265}px`;
}

// Eat button click
eatButton.addEventListener("click", () => {
  if (!currentFoodId) return;

  const draggedItem = document.getElementById(currentFoodId);
  const reaction = draggedItem.dataset.reaction;

  // Optional: swap cat image
  const mainCat = document.querySelector(".cat");
  if (reaction === "happy") mainCat.src = "happy cat.png";
  else if (reaction === "angry") mainCat.src = "angry cat.png";

  showReaction(reaction);

  bowl.src = "bowl.png";
  eatButton.style.display = "none";
  currentFoodId = null;
});
