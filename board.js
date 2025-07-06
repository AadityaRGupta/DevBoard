const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

async function fetchTasks() {
  const res = await fetch('/api/tasks');
  const tasks = await res.json();
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: task })
    });
    input.value = '';
    fetchTasks();
  }
});

fetchTasks();
