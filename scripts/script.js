/*

const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
})

let newContactCard = document.createElement("div")
newContactCard.innerHTML = `
    <div> 
        <p> ciao </p>
    </div>`

newContactCard.appendChild(newContactCard)

GamepadButton.addEventListener('click', function(e){
    e.target.parentElement
})
*/

let id = 0
const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

//Barro o no il testo
const strikethroughText = function(event)
{
    console.log(event)
    //Recupero il box e label
    let checkBox = event.target
    let label = event.target.parentElement.getElementsByTagName("label")[0]
    //Barra o sbarra la parola
    label.classList.toggle("strikethroughText")
}

const deleteTask = function(event){
     //Recupero il parent
     const parent = event.target.parentElement.remove()
}

//Aggiorna i pulsanti
const updateButtons = function()
{
    //Mi prendo tutti pulsanti per barrare e cancellare
    const buttonsCheck = document.querySelectorAll(".button-check")
    const buttonsDelete = document.querySelectorAll(".button-delete")
    //Adesso prendo gli ultimi
    const lastButton = buttonsCheck[buttonsCheck.length -1]
    const lastButtonDelete = buttonsDelete[buttonsDelete.length -1]
    //Gli aggiungo l'evento
    lastButton.addEventListener("click", e => strikethroughText(e))
    lastButtonDelete.addEventListener("click", e => deleteTask(e))
}

//Si occupa di aggiungere un task
const addTask = function(taskValue)
{
    //Mi segno l'id e creo l'elemento che andrò ad inserire
    id ++
    const taskHtml = document.createElement("div")
    //Aggiungo l'elemento
    taskHtml.classList.add("tasks")
    taskHtml.innerHTML = `
    <input id="task-${id}" class="button-check" type="checkbox">
    <label id="task-label-${id}"for="task-${id}"> ${taskValue} </label>
    <button id="elimina-${id}" class="button-delete"> Elimina</button>
    <hr>`
    taskList.appendChild(taskHtml)
}

//Quando aggiungi un task
taskForm.addEventListener("submit", function(e)
{
    //Annullo l'azione di default
    e.preventDefault()
    //Prendo il valore dell'input e lo elmino dal box
    const input = document.getElementById("input-task")
    const taskValue = input.value
    input.value = ""
    //Aggiungo il nuovo pezzo di HTML
    addTask(taskValue)
    //Aggiorno i pulsanti della pagina
    updateButtons()
})

function event(){
    
}