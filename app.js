let todoText = document.getElementById("write-task");
let myTask;
let addBtn= document.getElementById("add-task");
let todoList = document.getElementById("todo-list");
let err= document.getElementById("error-text")

todoText.addEventListener("keypress",(e)=>{
   if(e.key==="Enter"){
    addBtn.click();
   }
})
todoText.addEventListener("focus",(e)=>{
   err.innerHTML="";
})


addBtn.addEventListener("click",()=>{
    if(todoText.value===''){
       err.innerHTML="Please provide a task to add.";
       return;
    }
    err.innerHTML="";
    myTask=todoText.value;
    todoList.innerHTML += "<li><p>"+myTask+"</p><div class=\"task-buttons\"><button class=\"done\" onclick=\"taskDone(this)\" value=\"pending\"><i class=\"fa-solid fa-check\" style=\"color: #1cc427;\"></i></button> <button class=\"delete\" onclick=\"deleteTask(this)\"><i class=\"fa-solid fa-trash\" style=\"color: #c22014;\"></i></button></div></li>"
    todoText.value="";   
})


function taskDone(e){
    e.parentNode.parentNode.classList.toggle("task-completed");
    if(e.value=="pending"){
        e.innerHTML="<i class=\"fa-solid fa-rotate-right\" style=\"color: #5895fe;\"></i>"
        e.value="done";
    }else if(e.value=="done"){
        e.innerHTML="<i class=\"fa-solid fa-check\" style=\"color: #1cc427;\"></i>"
        e.value="pending";
    }
}

function deleteTask(e){
    e.parentNode.parentNode.remove();
}