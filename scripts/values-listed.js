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
    data.forEach((element, i) => {

    let newCard = document.createElement('li')
    let theValue = document.createElement('p')
    let buttonsContainer = document.createElement('div')
    let cardTypeContainer = document.createElement('div')
    let cardType = document.createElement('p')
    let exitBtn = document.createElement('button')


        newCard.classList.add("every-value-listed")
        theValue.classList.add("numeral-value")
        cardTypeContainer.classList.add("value-type-container")
        cardType.classList.add("value-type-view")
        exitBtn.classList.add("exclude-value-item")

        
        theValue.innerText = `R$ ${element.value}`
    if(element.categoryID == 1){
        cardType.innerText = "Saída"
    } else {
        cardType.innerText = "Entrada"
    }
        
    cardTypeContainer.append(cardType)
    buttonsContainer.append(cardTypeContainer, exitBtn)
    newCard.append(theValue, buttonsContainer)
    listForValues.append(newCard)
    })
    sumValues(data)
}
console.log(insertedValues)
function sumValues(data) {
    const calcSave = data.reduce((total, current)=> {
        if(current.categoryID == 0){
            return total + current.value
        } else {
            return total - current.value
        }
    }, 0)
    let sumDisplay = document.querySelector('.sum-values')
    console.log(calcSave)
    sumDisplay.innerText = calcSave.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
renderValuesCards(insertedValues)