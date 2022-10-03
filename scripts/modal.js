let registerValueBtn = document.querySelectorAll('.register-value')
let htmlBody = document.querySelector('body')

let pressingB = registerValueBtn.forEach((button) => {
    button.addEventListener('click', () => {
        addValueModal()
        modalReleaseType()
        insertNewValue()
    })
})


function addValueModal() {
    let modalBackground = document.createElement('div')
    let modalBody = document.createElement('div')
    let modalForm = document.createElement('form')

    let modalHeader = document.createElement('div')
    let modalTitle = document.createElement('h3')
    let closeBtn = document.createElement('button')
    closeBtn.innerText = "X"
    closeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        modalBackground.remove()
    })

    let descriptionBox = document.createElement('div')
    let modalDescription = document.createElement('p')

    let valueEnterBox = document.createElement('div')
    let inputLabel = document.createElement('p')
    let inputValue = document.createElement('input')

    let valueLabelBox = document.createElement('div')
    let valueLabel = document.createElement('p')
    let valuesCategory = document.createElement('div')
    let valueIsEnter = document.createElement('button')
    let valueIsExit = document.createElement('button')

    let submitBox = document.createElement('div')
    let cancelBtn = document.createElement('button')
    let confirmBtn = document.createElement('button')
    cancelBtn.innerText = "Cancelar"
    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        modalBackground.remove()
    })
    confirmBtn.addEventListener('click', (event) => {
        event.preventDefault()
    })

    modalBackground.classList.add("full-modal")

    modalBackground.classList.add("shadow-background")
    modalBody.classList.add("modal-box")

    modalHeader.classList.add("modal-header")
    closeBtn.classList.add("modal-close")

    valueEnterBox.classList.add("modal-value-insert")
    inputValue.classList.add("value-input")

    valueLabelBox.classList.add("type-select-box")
    valuesCategory.setAttribute('id',"value-type-wrapper")
    valueIsEnter.classList.add("type-of-value", "modal-button-1")
    valueIsExit.classList.add("type-of-value", "modal-button-1")

    cancelBtn.classList.add("modal-button-1")
    confirmBtn.classList.add("submit-modal", "modal-button-1")


    modalTitle.innerText = "Registro de valor"
    modalDescription.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor. (Apenas números)"
    inputLabel.innerText = "Valor"
    inputValue.placeholder = "R$ 00,00"
    inputValue.type = "number"
    valueLabel.innerText = "tipo de valor"

    valueIsEnter.innerText = "Entrada"
    valueIsExit.innerText = "Saída"

    confirmBtn.innerText = "Inserir valor"

    modalHeader.append(modalTitle, closeBtn)
    descriptionBox.append(modalDescription)
    valueEnterBox.append(inputLabel, inputValue)
    valuesCategory.append(valueIsEnter, valueIsExit)
    valueLabelBox.append(valueLabel, valuesCategory)
    submitBox.append(cancelBtn, confirmBtn)
    modalForm.append(modalHeader, descriptionBox, valueEnterBox, valueLabelBox, submitBox)
    modalBody.append(modalForm)
    modalBackground.append(modalBody)
    htmlBody.append(modalBackground)

}

function modalReleaseType() {
    let container = document.getElementById('value-type-wrapper')
    
    console.log(container)
    container.addEventListener('click', (event) => {
        event.preventDefault()
        let buttons = container.querySelectorAll(".type-of-value")
        let clicked = event.target
        
        if(clicked.id != "value-type-wrapper"){
            buttons.forEach((element) => {
                element.classList.remove("activeBtn")
            })
            clicked.classList.add("activeBtn")
        }
    })
}

function insertNewValue() {
    let fullModal = document.querySelector(".full-modal")
    let submitBtn = document.querySelector(".submit-modal")
    submitBtn.addEventListener('click', (event) =>{
        event.preventDefault()
        
        let valueInput = document.querySelector(".value-input")
        let activeBtn = document.querySelector(".activeBtn")
        console.log(valueInput)

        if(typeof +valueInput.value == 'number' && activeBtn){

            let object = {
                id: insertedValues[insertedValues.length -1].id + 1,
                value: +valueInput.value,
            }

            if(activeBtn.innerText == "Entrada"){
                object.categoryID = 0
            } else if(activeBtn.innerText == "Saída") {
                object.categoryID = 1
            }
            insertedValues.unshift(object)
            fullModal.remove()
            renderValuesCards(insertedValues)
        } 
    })
}
