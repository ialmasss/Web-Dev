let inputTask = document.querySelector(".inputTask");
let addTask = document.querySelector(".addTask");
let list = document.querySelector(".list");

addTask.addEventListener("click", function(){ 
    let text = inputTask.value;
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
        item.remove();
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
    list.appendChild(item);

    
    inputTask.value = "";
});