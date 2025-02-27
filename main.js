const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const noTasksMsg = document.getElementById('noTasks');
const clearButton = document.getElementById('clearButton');

addButton.addEventListener('click', function () {
    noTasksMsg.innerText = '';
    clearButton.removeAttribute('disabled');
    const newElement = document.createElement('li');
    newElement.innerHTML = `${taskInput.value} <input type="checkbox" id="taskCheck" name="taskCheck" unchecked />`;
    taskInput.value = '';
    taskList.append(newElement);
});

const list = document.getElementById('taskList');
const taskCheckbox = document.getElementById('taskCheck');
list.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
        taskCheckbox.removeAttribute('unchecked'); //cannot read properties of null
        taskCheckbox.addAttribute('checked');
	}
});