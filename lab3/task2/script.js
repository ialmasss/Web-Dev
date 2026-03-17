let inputTask = document.querySelector(".inputTask");
let addTask = document.querySelector(".addTask");
let list = document.querySelector(".list");

function addNewTask() {
    let text = inputTask.value.trim();

    if (text === "") return;

    let con = confirm("Is it important?");
    if (con){
        list.prepend(item);
    }
    else{
         addNewTask();
        list.appendChild(item);
    }

    let item = document.createElement("li");
    let check = document.createElement("input");
    let dlt = document.createElement("button");
    let span = document.createElement("span");

    check.type = "checkbox";
    span.textContent = text;
    span.className = "span";

    dlt.className = "delete-btn";
    dlt.innerHTML = '<img src="delete.png" class="img">';

    dlt.onclick = function() {
        item.remove();
    };

    check.addEventListener("change", function() {
        if(check.checked){
            item.style.textDecoration = "line-through";
        }
        else{
            item.style.textDecoration = "none";
        }
    });

    item.appendChild(check);
    item.appendChild(span);
    item.appendChild(dlt);
    list.appendChild(item);    

    inputTask.value = "";
}

    addTask.addEventListener("click", addNewTask);

    inputTask.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});
