var plus=document.getElementsByClassName("heading-right");

var plus1=document.getElementsByClassName("heading-right1");
plus1[0].addEventListener('click',()=>{
      show()
})

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
                 
var heading1_div= document.getElementsByClassName('heading1_div')
var create_box= document.getElementsByClassName("create_box");
var main_div= document.getElementById('main_div');
var Parent_box;
var todo_heading=document.getElementById("todo_heading");
var todo_box=document.getElementById("todo_box");
var get_input = document.getElementsByTagName('input');
var add_btn=document.getElementById('add_btn');
var del_btn=document.getElementById('del_btn');
console.log(todo_heading,todo_box,add_btn,del_btn)

// console.log(todo_heading[0]);
create_box[0].addEventListener('click',createParentBox);


//    below function create the todo box after clicking of add task box.
var main_box=document.createElement('div');
main_box.classList.add("Parent_box");
main_div.appendChild(main_box);

// var todo_box=document.createElement("div");


     var count=0;
     var token;
     function createParentBox()
     {
      count++;
      empty_comment[0].style.display="none";
      box[0].style.display="none";
      parent_blur.style.filter="blur(0px)";
    
      // code for appendin the todo box.
        
      var todo_box=document.createElement("div");
      todo_box.classList.add("todo_box");
      todo_box.setAttribute('id',`box${count}`)
       main_box.appendChild(todo_box);
      //  console.log(childrens1);
      // code for appending the heading in todo box.
      var create_heading =document.createElement('h3');
      create_heading.classList.add("todo_heading");
      todo_box.append(create_heading);
      create_heading.innerHTML=get_input[0].value;
      var heading=document.getElementsByClassName('heading')
    var heading1 = document.getElementsByClassName('heading1')
    var todo_head= document.getElementsByClassName('todo_head');
    
      todo_card_id=todo_box.getAttribute('id');
      var head_child=document.getElementById(`${todo_card_id}`)
      create_heading.addEventListener('click',()=>{
            // heading thinngs
           
            heading1_div[0].appendChild(head_child);
           heading[0].style.display="none" ;
           heading1[0].style.display="flex" ;
           todo_head[0].innerHTML=create_heading.innerHTML;
          
         
         
          heading1_div[0].style.display="flex";
          main_box.style.display="none";
     

     
})
var task1=document.getElementsByClassName("task1");
task1[0].addEventListener('click',()=>
{
      head_child.remove()
      // heading thinngs
      heading[0].style.display="flex";
      heading1[0].style.display="none";
      // heading1_div[0].style.display="none"
      main_box.appendChild(head_child)
      // main_box.style.display="block";
      main_box.style.display="flex";
      main_box.style.flexWrap="wrap";
     
     
     
     
//  main_box.appendChild(head_child)
     
     
//     heading1_div.remove();

})

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
     
      var desc_div = document.createElement('div')
      desc_div.classList.add("desc_div");
      todo_box.appendChild(desc_div);
      desc_div.setAttribute('id',`${count}`)
      // console.log(main_box);
     add_btn.addEventListener('click',()=>{
      insideTask();
      token=desc_div.id;
     });
     del_btn.addEventListener('click',hideAddedItem);
      function hideAddedItem()
      {
      todo_box.remove();
      }
     
//      below code append the sub task inside the todo box;
 

}
var createElement2=document.getElementById("create_box2");
createElement2.addEventListener('click',()=>{
      createElementTodo2(token);
 })
function createElementTodo2(unique)
{
var unique_id=document.getElementById(unique)
box1[0].style.display="none";  
main_box.style.filter="blur(0px)"
parent_blur.style.filter="blur(0px)"


var add_task=document.createElement('div');
add_task.classList.add("addTask");
unique_id.appendChild(add_task);
var add_content=document.createElement('span')
// console.log(add_task)

add_content.classList.add("add_content");
add_task.appendChild(add_content);
add_content.innerHTML=input2.value;

  
// add_task.innerHTML=input2.value;
var add_button2=document.createElement('div');
add_button2.classList.add('add_button2');
add_task.appendChild(add_button2);
add_button2.innerHTML="mark done"


// below code to add line through inside todo box on click of button
 add_button2.addEventListener('click',lineThrough1);
function lineThrough1()
{
add_button2.remove();
 add_content.style.textDecoration='line-through';
 add_content.style.color=" orangered"
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

// console.log(createElement2)

var add_task=document.getElementById("addTask");
// console.log(add_task)
var input2=document.getElementById("todohead1")
var add_button2=document.getElementsByClassName("add_button2")









