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
create_box[0].addEventListener('click',createParentBox)
//    below function create the todo box after clicking of add task box.
var main_box=document.createElement('div');
main_box.classList.add("Parent_box");
main_div.appendChild(main_box);

 


     function createParentBox()
     {
      empty_comment[0].style.display="none";
      box[0].style.display="none";
      parent_blur.style.filter="blur(0px)";
     
     
     
      // code for appendin the todo box.
       var todo_box=document.createElement("todo_box");
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
      


      

//     console.log(main_box);
     }


