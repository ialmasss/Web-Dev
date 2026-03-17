let inputTask = document.querySelector(".inputTask");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");

addTask.addEventListener("click", function(){ 
    let text = inputTask.value.trim();
    if(text === ""){
        alert("Please enter a task");
        return;
    }

    

    let item = document.createElement("li");
    let check = document.createElement("input");
    let dlt = document.createElement("button");
    

    check.type = "checkbox";
    dlt.innerHTML = "Delete";

    dlt.className = "delete-btn";
    dlt.innerHTML = '<img src = "delete.png" class="img">'

    dlt.onclick = function(){
        let con = confirm("deleter?");
        if (con){
            item.remove();
        }
    }

    

    check.addEventListener("click", function(){
        if(check.checked){
            item.style.textDecoration = "line-through";
        }
        else{
            item.style.textDecoration = "none";
        }
    });

    let span = document.createElement("span");
    span.textContent = text;
    span.className = "span"
    
    


    item.appendChild(check);
    item.appendChild(span);
    item.appendChild(dlt);
    taskList.appendChild(item);

    
    inputTask.value = "";
});