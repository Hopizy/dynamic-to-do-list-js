// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Alert if task is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Remove task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append remove button to list item
    listItem.appendChild(removeButton);

    // Append list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on pressing Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask once DOM is loaded (optional placeholder logic)
  addTask(); // If you want to initialize with a test task or placeholder, you can modify this line
});
