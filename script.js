document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="edit">✎</button>
                <button class="delete">✗</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Handle task list events
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            const li = e.target.parentElement;
            const span = li.querySelector('span');
            const newTaskText = prompt('Edit task:', span.textContent);
            if (newTaskText !== null) {
                span.textContent = newTaskText.trim();
            }
        }

        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }

        if (e.target.tagName === 'SPAN') {
            e.target.parentElement.classList.toggle('completed');
        }
    });
});
