const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    if (taskTitle === "") {
        alert("Please enter a task title.");
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
        <div>
            <span class="task-title">${taskTitle}</span> 
            <span class="task-datetime">(${taskDate} ${taskTime})</span>
        </div>
        <div>
            <button onclick="toggleComplete(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    clearInputFields();
}

// Clear input fields
function clearInputFields() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
}

// Mark task as complete
function toggleComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle("completed");
}

// Edit task
function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskTitleElement = taskItem.querySelector(".task-title");
    const taskDateTimeElement = taskItem.querySelector(".task-datetime");

    const newTitle = prompt("Edit task title", taskTitleElement.textContent);
    const newDate = prompt("Edit task date (YYYY-MM-DD)", taskDateTimeElement.textContent.split(" ")[0].slice(1));
    const newTime = prompt("Edit task time (HH:MM)", taskDateTimeElement.textContent.split(" ")[1]);

    if (newTitle) taskTitleElement.textContent = newTitle;
    if (newDate) taskDateTimeElement.textContent = `(${newDate} ${newTime})`;
}

// Delete task
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskList.removeChild(taskItem);
}
