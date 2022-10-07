let listForValues = document.querySelector('.values-list')
let listButtons = document.querySelectorAll('.finance-resume-btn')

let SelectList = listButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.innerText == "Entradas"){
            let entradas = insertedValues.filter(e => e.categoryID == 0)
            renderValuesCards(entradas)
        } else if(button.innerText == "Saídas"){
            let saidas = insertedValues.filter(e => e.categoryID == 1)
            renderValuesCards(saidas)
        } else {
            renderValuesCards(insertedValues)
        }
    })
})

function renderValuesCards(data){
    listForValues.innerHTML = ""
    if(data.length != 0){
    data.forEach((element, i) => {

    let newCard = document.createElement('li')
    let theValue = document.createElement('p')
    let buttonsContainer = document.createElement('div')
    let cardTypeContainer = document.createElement('div')
    let cardType = document.createElement('p')
    let excludeBtnBox = document.createElement('div')
    let excludeBtn = document.createElement('button')
    let trashFigure = document.createElement('img')
        excludeBtn.addEventListener('click', (event)=> {
            event.preventDefault()
            insertedValues.splice(i, 1)
            // console.log(element, i)
            newCard.remove()
        })

        newCard.classList.add("every-value-listed")
        theValue.classList.add("numeral-value")
        cardTypeContainer.classList.add("value-type-container")
        cardType.classList.add("value-type-view")
        buttonsContainer.classList.add("item-buttons-box")
        excludeBtnBox.classList.add("exclude-value-container")
        excludeBtn.classList.add("exclude-value-item")

        trashFigure.src = "./assets/trash.svg"

        theValue.innerText = `R$ ${element.value}`
    if(element.categoryID == 1){
        cardType.innerText = "Saída"
    } else {
        cardType.innerText = "Entrada"
    }
        
    cardTypeContainer.append(cardType)
    excludeBtnBox.append(excludeBtn)
    buttonsContainer.append(cardTypeContainer, excludeBtnBox)
    excludeBtn.append(trashFigure)
    newCard.append(theValue, buttonsContainer)
    listForValues.append(newCard)
    })
    sumValues(data)
    }
}


function sumValues(data) {
    const calcSave = data.reduce((total, current)=> {
        if(current.categoryID == 0){
            return total + current.value
        } else {
            return total - current.value
        }
    }, 0)
    let sumDisplay = document.querySelector('.sum-values')
    sumDisplay.innerText = calcSave.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
renderValuesCards(insertedValues)