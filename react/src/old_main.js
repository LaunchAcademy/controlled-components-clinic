// This code may be used to show how we would perform this JS functionality WITHOUT react, but inspect
// but is not required for comprehension, and could possibly confuse.

// function getTasks() {
//   fetch('/api/v1/tasks')
//     .then(response => {
//       return response.json()
//     })
//     .then(json => {
//       if(json.tasks){
//         let taskList = document.querySelector('#tasks')
//         json.tasks.forEach((task) => {
//           taskList.innerHTML += `<li>${task.description}</li>`
//         })
//       }
//     })
// }
//
// function processTaskSubmission(event) {
//   event.preventDefault()
//   let descriptionInput = document.querySelector('#description')
//   let description = descriptionInput.value
//   let taskList = document.querySelector('#tasks')
//   fetch('/api/v1/tasks', { method: 'post', body:
//     JSON.stringify({task: {description: description}})})
//   taskList.innerHTML += `<li>${description}</li>`
//   descriptionInput.value = ''
// }
//
// getTasks()
//
// document
//   .querySelector('#new-task-submit-button')
//   .addEventListener("click", processTaskSubmission)
