const input = document.querySelector("input")
const form = document.querySelector("form")
const list = document.getElementById("list")

form.onsubmit = (e) => {
  e.preventDefault()
  addItemInList()
}

function createCheckbox() {
  const checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  checkBox.classList.add("checkbox")
  return checkBox
}

function createRemoveButton() {
  const buttonRemove = document.createElement("button")
  buttonRemove.classList.add("button-remove")

  const icon = document.createElement("img")
  icon.src = "/assets/icon-delete.svg"
  icon.alt = "Remover"
  
  buttonRemove.appendChild(icon)
  return buttonRemove
}

function createItem(text) {
  const createItem = document.createElement("div")
  const warning = document.querySelector("aside")
  createItem.classList.add("item-in-list")

  const checkBox = createCheckbox()
  const buttonRemove = createRemoveButton()
  const textSpan = document.createElement("span")
  const removeWarningButton = document.getElementById("remove-warning")
  const warningText = document.getElementById("warning-text")
  textSpan.textContent = text

  const divButton = document.createElement("div")
  divButton.classList.add("div-button")
  divButton.appendChild(buttonRemove)

  createItem.appendChild(checkBox)
  createItem.appendChild(textSpan)
  createItem.appendChild(divButton)

  buttonRemove.addEventListener("click", () => {
    const removedItemText = textSpan.textContent;

    warning.querySelector('.warning-text').textContent = `O item "${removedItemText}" foi removido da lista`;
    warning.classList.remove("hidden");

    createItem.remove()
  })

  removeWarningButton.addEventListener("click", () => {
    warning.classList.add("hidden")
  })

  return createItem
}

function addItemInList() {
  if (!input.value.trim()) 
    return
  const newItem = createItem(input.value)
  list.appendChild(newItem)

  input.value = ""
}