//JS variables
let completedCount = 0;
const todoArray = [];

//HTML element variables
const input = document.querySelector("#input-todo");
const list = document.querySelector("ul");
const button = document.querySelector("#button-add");
const info = document.querySelector("small");
const completedInfo = document.querySelector("#count-completed");

//function to handle change stasktus on object in array
button.addEventListener("click", function () {
  //get value from input
  const text = input.value;

  //check that text is not empty
  if (text.length == 0) {
    info.innerText = "Input must not be empty";
    info.setAttribute("class", "errorBlink");
    setTimeout(() => {
      info.classList.remove("errorBlink");
    }, 1200);
    return;
  } else {
    info.innerText = "";
    info.removeAttribute("class", "errorBlink");
  }

  //add item to todoArray
  todoArray.push(text);

  //create li-element in ul
  const item = document.createElement("li");
  list.appendChild(item);

  //create a p-element for the task
  const task = document.createElement("p");
  task.innerText = text;
  task.setAttribute("class", "task");
  item.setAttribute("class", "added");
  item.appendChild(task);

  //create  a span-element that has a trashcan
  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  task.addEventListener("click", function () {

    //toggle completed/uncompleted
    if (task.getAttribute("class") == "completed") {
      task.setAttribute("class", "");
      completedCount--;
    } else {
      task.setAttribute("class", "completed");
      completedCount++;
      console.log(todoArray);
    }
    completedInfo.innerText = `${completedCount} completed`;
  });

  trashcan.addEventListener("click", function () {
    if (task.getAttribute("class") == "completed") {
      completedCount--;
    }

    let removeFromArray = item;
    let indexToRemove = todoArray.indexOf(removeFromArray);
    todoArray.splice(indexToRemove, 1);

    //remove li-element
    item.remove();

    completedInfo.innerText = `${completedCount} completed`;
  });

  //set empty input field after adding to list
  input.value = "";
});
