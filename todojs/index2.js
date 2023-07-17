// getting the element from the html using DOM.
let parent_Container = document.getElementsByClassName("headingFirst");
let popup = document.getElementsByClassName("addTask");
let popup2 = document.getElementsByClassName("addItem");
let checkItems = document.querySelector(".checkItem");
let backButton = document.querySelector(".backButton");
let backButton2 = document.querySelector(".backButton2");

// targetting the element for second....
let parent_container2 = document.getElementsByClassName("headingSecond");
let headingSecondText = document.getElementsByClassName("headingSecondText");
let toDoCardMainContainer = document.getElementsByClassName("toDoCardMainContainers");
let toDoCardMainContainer2 = document.getElementsByClassName("toDoCardMainContainer2");

// addEventListener Section.....
let main_PopUp1 = document.querySelector(".addTaskPopUp");
main_PopUp1.addEventListener("click", () => {
  addNewPopUp();
});

let main_PopUp2 = document.querySelector(".addTaskPopUp2");
main_PopUp2.addEventListener("click", () => {
  addNewPopUp();
});




let addTaskPopUpSecondPage = document.querySelector(".addTaskPopUpSecondPage");
addTaskPopUpSecondPage.addEventListener("click", () => {
  addNewPopUp();
});

let addTaskButton = document.querySelector(".addTaskButton");
addTaskButton.addEventListener("click", () => {
  addTask();
});

let closeTaskButton = document.querySelector(".closeTaskButton");
closeTaskButton.addEventListener("click", () => {
  closeTask();
});

let addSubtaskConButton = document.querySelector(".addSubtaskConButton");
addSubtaskConButton.addEventListener("click", () => {
  todoParent2();
});

let closeSubtaskConButton = document.querySelector(".closeSubtaskConButton");
closeSubtaskConButton.addEventListener("click", () => {
  closeItem();
});


// function start
function addNewPopUp() {
  parent_Container[0].classList.add("blur1");
  parent_container2[0].classList.add("blur1");

  popup[0].style.display = "block";
}

function closeTask() {
  popup[0].style.display = "none";
  parent_Container[0].classList.remove("blur1");
  parent_container2[0].classList.remove("blur1");
}
var count_Id = 0;
var count = 0;
let toDoCardContainerCardId = 0;
let count_Child;
// let count_Head_Child;
let count_CMD;

// adding a new task
function addTask() {
  count_Id++;
  count++;

  let cardTittle = document.querySelector(".cardText").value;
//  if user does not provive the Name of the Task then Empty will shown
  if (cardTittle) {
    createParentTodoBox1(count_Id, cardTittle);
  } else {
    cardTittle = "Empty";
    createParentTodoBox1(count_Id, cardTittle);
  }
  closeTask();
  // all box deleted then normal UI will visible
  if (count > 0) {
    checkItems.style.display = "none";
  }
}
// function for creating the todo box
function createParentTodoBox1(id, cardTittle) {

  // creating elements inside main todo box
  let toDoCardContainerDiv = document.createElement("div");
  toDoCardContainerDiv.setAttribute("id", `${id}`);
  let heading = document.createElement("p");
  let button1 = document.createElement("img");
  let button2 = document.createElement("img");
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", `mainDiv${id}`);

  // appending things
  toDoCardMainContainer[0].appendChild(toDoCardContainerDiv);
  toDoCardContainerDiv.appendChild(heading);
  toDoCardContainerDiv.appendChild(mainDiv);
  toDoCardContainerDiv.append(button1);
  toDoCardContainerDiv.append(button2);

  // toDoCardContainerDiv.appendChild(mainDiv);

  heading.innerHTML = `${cardTittle}`;

  button2.src = "./edit.jpg";
  button1.src = "./trash.jpg";
  // giving the class name to the element
  mainDiv.classList.add("mainDiv");
  toDoCardContainerDiv.classList.add("toDoCardContainerscard");
  button1.classList.add("addCardBtn1");
  button2.classList.add("addCardBtn2");
  heading.classList.add("line");

  // below code when user click on the heading of the task
  heading.addEventListener("click", () => {
    parent_Container[0].style.display = "none";
    parent_container2[0].style.display = "block";
    mainDiv.classList.add("mainDivBack");
    headingSecondText[0].innerHTML = `${cardTittle}`;
    toDoCardContainerCardId = toDoCardContainerDiv.getAttribute("id");
    // count_Head_Child = document.getElementById(`${toDoCardContainerCardId}`);
    // console.log(count_Head_Child);
    toDoCardMainContainer2[0].appendChild(toDoCardContainerDiv);
    // here headChaild is a taskParentDiv
    button1.addEventListener("click", () => {
      mainDiv.classList.remove("mainDivBack");
      parent_Container[0].style.display = "block";
      parent_container2[0].style.display = "none";
      toDoCardContainerDiv.remove();
      RemoveNoItem();
    });
  });

  // this button will delete the main todo box;
  button1.addEventListener("click", () => {
    toDoCardContainerDiv.remove();
    count--;
    RemoveNoItem();
  });

  // code when user click or want to add some more items then a pop up will be on the center of the screen
  button2.addEventListener("click", () => {
    parent_Container[0].classList.add("blur1");
    parent_container2[0].classList.add("blur1");
    popup2[0].style.display = "block";

  //  getting id from todo parent box
    toDoCardContainerCardId = toDoCardContainerDiv.getAttribute("id");
    // this line is use to targeting the subtaskContainner
    count_Child = document.getElementById(`${toDoCardContainerCardId}`).children;
    count_CMD = count_Child[1];
  });
  backButton.addEventListener("click", () => {
    toDoCardMainContainer[0].appendChild(toDoCardContainerDiv);
    back();
  });
  backButton2.addEventListener("click", () => {
    toDoCardMainContainer[0].appendChild(toDoCardContainerDiv);
    back();
  });
}

// if user click and does't wish to add anything then they can simply click on the close button. indicate below code.
function closeItem() {
  parent_Container[0].classList.remove("blur1");
  parent_container2[0].classList.remove("blur1");
  popup2[0].style.display = "none";
}
// this function create items inside todo box uniquely
function todoParent2() {
  popup2[0].style.display = "none";
  parent_Container[0].classList.remove("blur1");
  parent_container2[0].classList.remove("blur1");

  let itemDiv = document.createElement("div");
  let itemText = document.createElement("div");
  let SubtaskConButton = document.createElement("button");

  count_CMD.appendChild(itemDiv);
  itemDiv.appendChild(itemText);
  itemDiv.appendChild(SubtaskConButton);

  itemDiv.classList.add("itemDiv");
  itemText.classList.add("itemText");
  SubtaskConButton.classList.add("SubtaskConButton");

  // getting value from second input box to add sub task
  let itemInput = document.querySelector(".cardItem").value;
  // subtask Heading
  if (itemInput) {
    itemText.innerHTML = `${itemInput}`;
    SubtaskConButton.innerHTML = " Done";
  } else {
    itemText.innerHTML =`No data`;
    SubtaskConButton.innerHTML = " Done";
  }

  itemText.innerHTML = `${itemInput}`;
  SubtaskConButton.innerHTML = " Done";

  // code when user click on done button which is kept beside sub-task and it will get deleted.
  SubtaskConButton.addEventListener("click", () => {
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "red";
    SubtaskConButton.style.display = "none";
    itemText.style.marginLeft = "55px";

    // below code for toggeling the things.
    itemText.addEventListener("click", () => {
      itemText.style.textDecoration = "none";
      itemText.style.color = "black";
      SubtaskConButton.style.display = "block";
      itemText.style.marginLeft = "0px";
    });
  });
}
// code for the things when user click on back button .
function back() {
  parent_Container[0].style.display = "block";
  parent_container2[0].style.display = "none";
  // here headChaild is a taskParentDiv
  mainDiv.classList.remove("mainDivBack");
}

function RemoveNoItem() {
  if (count === 0) {
    checkItems.style.display = "block";
  }
}


  
