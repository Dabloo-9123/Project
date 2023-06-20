var plus=document.getElementsByClassName("heading-right");

var empty_comment= document.getElementsByClassName("second-div")
// console.log(empty_comment[0].innerHTML)
plus[0].addEventListener('click',()=>{
      show()
})
let parent_blur= document.getElementById('parent_blur');
// console.log(parent_blur);
// code to popup after clicking on add task a popup will be created to add the tasklist.
var box=document.getElementsByClassName("popup");
function show()
{
     box[0].style.display="block";
     parent_blur.style.filter="blur(3px)"
//      main_div.style.filter="blur(3px)"
      // console.log(box)
}
var close_box=document.getElementsByClassName("close_box");


// code to hide the popup box;
close_box[0].addEventListener('click',hide)
function hide()
{
      box[0].style.display="none";
      parent_blur.style.filter="blur(0px)"  
      // main_div.style.filter="blur(0px)" 
}

var create_box= document.getElementsByClassName("create_box");
var main_div= document.getElementById('main_div');
var todo_heading=document.getElementsByClassName("todo_heading");
var todo_box=document.getElementsByClassName("todo_box");
var get_input = document.getElementsByTagName('input');
var add_btn=document.getElementsByClassName('add_btn');
var del_btn=document.getElementsByClassName('del_btn');

// console.log(todo_heading[0]);
create_box[0].addEventListener('click',createParentBox);

//    below function create the todo box after clicking of add task box.
var main_box=document.createElement('div');
main_box.classList.add("Parent_box");
main_div.appendChild(main_box);

// var todo_box=document.createElement("div");


     function createParentBox()
     {
      empty_comment[0].style.display="none";
      box[0].style.display="none";
      parent_blur.style.filter="blur(0px)";
     
      // code for appendin the todo box.
      var todo_box=document.createElement("div");
      todo_box.classList.add("todo_box");
       main_box.appendChild(todo_box);

      // code for appending the heading in todo box.
      var create_heading =document.createElement('h3');
      create_heading.classList.add("todo_heading");
      todo_box.append(create_heading);
      create_heading.innerHTML=get_input[0].value;

      //code for appending the horizontal line in todo box.
      var create_hr = document.createElement("hr");
      create_hr.classList.add("horizontal_line");
      todo_box.appendChild(create_hr);

      //code for creating the sub-add-task inside the box.

      var add_btn=document.createElement('div');
      add_btn.classList.add('add_btn');
      todo_box.appendChild(add_btn);
     

      var del_btn=document.createElement('div');
      del_btn.classList.add('del_btn');
      todo_box.appendChild(del_btn);
      // console.log(main_box);
     add_btn.addEventListener('click',insideTask);
     del_btn.addEventListener('click',hideAddedItem);
      function hideAddedItem()
      {
      todo_box.remove();
      }
      createElement2[0].addEventListener('click',createElementTodo2)
      function createElementTodo2()
      {
            box1[0].style.display="none";  
            main_box.style.filter="blur(0px)"
            parent_blur.style.filter="blur(0px)"
            var add_task=document.createElement('div');
            add_task.classList.add("addTask");
            todo_box.appendChild(add_task);
      // add_task.innerHTML=input2.value;
      var add_content=document.createElement('span')
      add_content.classList.add("add_content");
      add_task.appendChild(add_content);
      add_content.innerHTML=input2.value;

      var add_button2=document.createElement('div');
      add_button2.classList.add('add_button2');
      add_task.appendChild(add_button2);
      add_button2.innerHTML="mark done"
      add_button2.addEventListener('click',lineThrough1);
      function lineThrough1()
     {
      add_button2.remove();
       add_content.style.textDecoration='line-through';
       add_content.style.color=" orangered"
      }
     }
}


// below code represent if we click on + button inside todo_box then a popup will created
var box1=document.getElementsByClassName("popup1");
function insideTask()
{
      box1[0].style.display="block";
      parent_blur.style.filter="blur(3px)"
      main_box.style.filter="blur(3px)"


}
// below code represent the hide the popup of box1
var close_box2=document.getElementsByClassName("close_box2");
close_box2[0].addEventListener('click',hidepopup2)
function hidepopup2()
{
      box1[0].style.display="none";  
      main_box.style.filter="blur(0px)"
}

var createElement2=document.getElementsByClassName("create_box2");
// console.log(createElement2)

var add_task=document.getElementsByClassName("addTask");
var input2=document.getElementById("todohead1")
var add_button2=document.getElementsByClassName("add_button2")





