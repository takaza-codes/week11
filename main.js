const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {
    const newElement = document.createElement('li');
    newElement.textContent = taskInput.value;
    taskInput.value = '';
    taskList.append(newElement);
});

const list = document.getElementById('taskList');
list.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
	}
});