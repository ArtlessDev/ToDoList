const container = document.getElementById("main-content");

const btnAddTask = document.getElementById("btnAddTask");
//onclick declaration doesnt have to be here
//btnAddTask.addEventListener('click', onclick)
const txtTask = document.getElementById("txtTask");
const todoTasks = document.getElementById("todoTasks");

const arr = [];



//onclick can be declared here
btnAddTask.addEventListener('click', function(){

    const item = document.createElement("li");
    const btnDone = document.createElement("button");
    btnDone.addEventListener('click', removeButton);
    btnDone.id = arr.length + 1;
    arr.push(
        {id: btnDone.id, name: txtTask.value}
        );
    btnDone.innerHTML = "done task";
    
    const textSpan = document.createElement('span');
    textSpan.textContent = txtTask.value;

    item.appendChild(textSpan);
    item.appendChild(btnDone);

    todoTasks.appendChild(item);
    txtTask.value = '';

});

arr.forEach(button => {
    button.addEventListener('click', function(){
        
        const item = button.parentElement;
        item.remove;
    });
});

function removeButton(e){
    const item = e.target.parentElement;
    item.remove();
    console.log("removed")
}