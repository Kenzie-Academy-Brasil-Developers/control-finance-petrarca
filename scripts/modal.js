let registerValueBtn = document.querySelectorAll('.register-value')
let htmlBody = document.querySelector('body')

let pressingB = registerValueBtn.forEach((button) => {
    button.addEventListener('click', () => {
        addValueModal()
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
        console.log("hahahahahahahhahahahahah")
    })


    modalBackground.classList.add("shadow-background")
    modalBody.classList.add("modal-box")

    modalHeader.classList.add("modal-header")
    closeBtn.classList.add("modal-close")

    valueEnterBox.classList.add("modal-value-insert")

    valueLabelBox.classList.add("type-select-box")
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