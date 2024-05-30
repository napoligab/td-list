// Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

// Event Listeners
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);

// Functions

function addToDo(event) {
  // Prevents form from submitting
  event.preventDefault();

  // Create To Do div
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  // Create list item
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  // Rubbish button
  const rubbishButton = document.createElement("button");
  rubbishButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  rubbishButton.classList.add("rubbish-btn");
  toDoDiv.appendChild(rubbishButton);

  // Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);

  // Append to list
  toDoList.appendChild(toDoDiv);

  // Clear to do input input
  toDoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // Delete to do
  if(item.classList[0] === 'rubbish-btn') {
    item.remove();
  }
}
