document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById('new-task-description')
  const form = document.querySelector('form')
  newTask.id = 'newTaskDescription'
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    listTask(e.target.newTaskDescription.value)
    form.reset()
  })

  function listTask(task){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'X'
    li.textContent = `${task}  `
    li.appendChild(btn)
    document.getElementById('tasks').appendChild(li)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }

});
