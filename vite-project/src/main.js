const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through';
  });

  list.appendChild(li);
  input.value = '';
});
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './vite-project', // Путь к папке с твоими исходными файлами
  build: {
    outDir: 'dist', // Папка, в которую будут собираться файлы при сборке
  }
})
