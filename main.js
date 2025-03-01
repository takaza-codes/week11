const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const noTasksMsg = document.getElementById('noTasks');
const clearButton = document.getElementById('clearButton');
const errorMsg = document.getElementById('errorMessage');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.addEventListener('DOMContentLoaded', prevTasks);

function prevTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        noTasksMsg.innerText = 'No tasks';
        clearButton.setAttribute('disabled', '');
    } else {
        noTasksMsg.innerText = '';
        clearButton.removeAttribute('disabled');
    }

    tasks.forEach(() => {
        const newElement = document.createElement('li');
        newElement.innerHTML = `${taskInput.value.trim()} <input type="checkbox" class="taskCheck" name="taskCheck" unchecked />`;
        taskList.append(newElement);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function checkInput() {
    if (taskInput.value.trim() === '') {
        errorMsg.innerText = 'Enter your task';
    return;
} else {
    noTasksMsg.innerText = '';

    const newElement = document.createElement('li');
    errorMsg.innerText = '';
    newElement.innerHTML = `${taskInput.value.trim()} <input type="checkbox" class="taskCheck" name="taskCheck" unchecked />`;
    taskList.append(newElement);
    tasks.push(taskInput.value);
    clearButton.removeAttribute('disabled');
}
}


taskList.addEventListener('click', (event) => {
    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains('done')) {
            event.target.classList.remove('done');
        } else {event.target.classList.add('done')}
    } 
});

addButton.addEventListener('click', function () {
    checkInput();
    taskInput.value = '';
});

clearButton.addEventListener('click', function () {
    taskList.innerHTML = '';
    tasks = [];
    clearButton.setAttribute('disabled', '');
});