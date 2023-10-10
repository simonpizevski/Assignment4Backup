//JS variables
let completedCount = 0;
const todoArray = [];

//HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#btnAddTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("#completedCount");

//function to handle change status on object in array
//takes parameter completed(boolean)
button.addEventListener("click", function () {
  //get value from input
  const text = input.value;

  //check that text is not empty
  if (text.length == 0) {
    info.innerText = "Input must not be empty";
    return;
  } else {
    info.innerText = "";
  }

  //add task to todoArray
  todoArray.push(text);

  //create li-element in ul
  const task = document.createElement("li");
  list.appendChild(item);

  //create a span-element in out new li and add text
  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  itemLabel.setAttribute("class", "itemLabel");
  task.appendChild(itemLabel);

  //create  a span-element that has a trashcan
  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1";
  trashcan.setAttribute("class", "trashcan");
  task.appendChild(trashcan);
  console.log(todoArray);

  itemLabel.addEventListener("click", function () {
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

    completedInfo.innerText = `${completedCount} completed`;

    let removeFromArray = item;
    let indexToRemove = todoArray.indexOf(removeFromArray);
    todoArray.splice(indexToRemove, 1);

    console.log(todoArray);

    //remove li-element
    item.remove();
  });

  //set empty input field after adding to list
  input.value = "";
});
