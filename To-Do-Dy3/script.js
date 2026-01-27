

const itemCtn = document.getElementsByClassName("item-ctn")[0]
const addBtn = document.getElementsByClassName('add-btn')[0]
const taskForm = document.getElementsByClassName("task-form")[0]
const taskName = document.getElementsByClassName("task-name")[0]
const taskDesc = document.getElementsByClassName("task-desc")[0]
const submitBtn = document.getElementsByClassName('submit-btn')[0]

var insertedTaskName;
var insertedDesc;

console.log(taskName)

function generateAndAppendCardToItemsCtn(title,desc,personName="sudhanshu",startDateText="25/10/1998",endDateText="25/10/3000",statusText="Defined") {
    var card = document.createElement('div')
    card.classList.add("card")

    var heading = document.createElement("h1")
    heading.classList.add("item-text")
    heading.innerText = title

    var para = document.createElement('p')
    para.classList.add("desc")
    para.innerText = desc

    var utilsCtn = document.createElement('div')
    utilsCtn.classList.add("utils-ctn")

    var name = document.createElement("h2")
    name.classList.add("name")
    name.innerText = personName
    var startDate = document.createElement("h2")
    startDate.classList.add("start-date")
    startDate.innerText = startDateText
    var endDate = document.createElement("h2")
    endDate.classList.add("end-date")
    endDate.innerText = endDateText

    utilsCtn.appendChild(name)
    utilsCtn.appendChild(startDate)
    utilsCtn.appendChild(endDate)


    var utilsCtn2 = document.createElement('div')
    utilsCtn2.classList.add("utils-ctn")

    var status = document.createElement("h2")
    status.classList.add("status")
    status.innerText = statusText

    var discardBtn = document.createElement("button")
    discardBtn.classList.add("discard-btn")
    discardBtn.innerText = "Discard"
    var completeBtn = document.createElement("button")
    completeBtn.classList.add("complete-btn")
    completeBtn.innerText = "Complete"
    utilsCtn2.appendChild(status)
    utilsCtn2.appendChild(discardBtn)
    utilsCtn2.appendChild(completeBtn)

    card.appendChild(heading)
    card.appendChild(para)
    card.appendChild(utilsCtn)
    card.appendChild(utilsCtn2)

    itemCtn.appendChild(card)
}

function showFormHandler(){
    taskForm.classList.remove("hidden")
}
function taskNameChangeHandler(event){
    console.log(event.target.value)
    insertedTaskName = event.target.value
}

function descChangeHandler(event){
    console.log(event.target.value)
    insertedDesc = event.target.value
}

function addTaskHandler(event){
    event.preventDefault()
    generateAndAppendCardToItemsCtn(insertedTaskName,insertedDesc)
    taskForm.classList.add("hidden")
}


addBtn.addEventListener('click',showFormHandler)
taskName.addEventListener('change',taskNameChangeHandler)
taskDesc.addEventListener('change',descChangeHandler)
submitBtn.addEventListener('click',addTaskHandler)