const taskinput = document.getElementById('task');
const tasklist = document.getElementById('tasklist');

window.onload = function(){
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	tasks.forEach(task=>addtaskToDom(task));
}

function addtask(){
	const task = taskinput.value.trim();
	if(task === '') return;

	addtaskToDom(task);
	saveTask(task);
	taskinput.value = '';
}

function addtaskToDom(task) {
	const li = document.createElement('li');
	li.innerHTML = `${task} <button class="delete-btn" onclick="removeTask(this)">X</button>`;
	tasklist.appendChild(li);
}
function saveTask(task) {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(button) {
	const li = button.parentElement;
	const task = li.firstChild.textContent.trim();

	tasklist.removeChild(li);

	let tasks = JSON.parse(localStorage.getItem('tasks'));
	tasks = tasks.filter(t=>t!==task);
	localStorage.setItem('tasks',JSON.stringify(tasks));
}



