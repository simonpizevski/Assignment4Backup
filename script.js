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

  //add todo to todoArray
  //const todoObject = {name: text, status: false};
  todoArray.push(text);

  //create li-element in ul
  const item = document.createElement("li");
  list.appendChild(item);

  //create a span-element in out new li and add text
  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);

  //create  a span-element that has a trashcan
  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  //add a listener to the span(li element)
  itemLabel.addEventListener("click", function () {
    //toggle completed/uncompleted
    if (item.getAttribute("class") == "completed") {
      item.setAttribute("class", "");
      completedCount--;
    } else {
      item.setAttribute("class", "completed");
      completedCount++;
      completedInfo.innerText = `${completedCount} completed`;

    }
  });

  //add a listener to the trashcan
  trashcan.addEventListener("click", function () {
    if (item.getAttribute("class") == "completed") {
      completedCount--;
    }

    completedInfo.innerText = `${completedCount} completed`;
    //remove li-element
    item.remove();
  });

  //set empty input field after adding to list
  input.value = "";
});


//function addTodo

//function deleteTodo

