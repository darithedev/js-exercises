/* 
Add your javascript implementation here for each task.
Remember to consult your instructions! 
*/

const list = document.getElementById('list');
const firstListItem = list.querySelector('li');
firstListItem.textContent = "I'm learning Js"

const listAll = list.querySelectorAll('li')
const newItem = document.createElement('li')
newItem.textContent = 'Chicken, rice, and broccli'
list.appendChild(newItem)

