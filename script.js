document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Please enter a task');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.addEventListener('click', function () {
            listItem.remove(); // Correct way to remove the <li>
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }

    // 👇 Attach event listeners here, not inside addTask
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    console.log('DOM fully loaded');
});
