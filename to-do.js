const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const newItemInput = document.querySelector('#new-item');



form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if (newItemInput.value.trim()) {
		const li = document.createElement('li');
		li.innerHTML = `
			<span class="task-name">${newItemInput.value}</span>
			<button class="edit-btn">Edit</button>
			<button class="delete-btn">Delete</button>
		`;
		taskList.appendChild(li);
		newItemInput.value = '';
	
	const dateTimeSpan = document.createElement('span');
    dateTimeSpan.textContent = getCurrentDateTime();
    taskList.appendChild(dateTimeSpan);
	}
});


taskList.addEventListener('click', (e) => {
	if (e.target.classList.contains('edit-btn')) {
		const taskItem = e.target.parentNode;
		const taskTextSpan = taskItem.querySelector('span');
		const newText = prompt('Edit the task:', taskTextSpan.textContent);
		taskTextSpan.textContent = newText;
	
	}
});

taskList.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete-btn')) {
		e.target.parentElement.remove();
	}
});