import { deleteFunc } from "./async.js";

import { checkedFunc } from "./async.js";

let box = document.querySelector(".box")

// Edit
let modal = document.querySelector(".dialogEdit")
let formEdit = document.querySelector(".formEdit")

// Edit function

let idx = null

function openModal(e) {
    modal.showModal()
    idx = e.id
    formEdit["name"].value = e.name
    formEdit["age"].value = e.age
}

// get function

function getData(data) {
    box.innerHTML = "";
    data.forEach((e) => {
        let div = document.createElement("div")
        div.className = "item-container";

        let h1 = document.createElement("h1")
        h1.className = "name";
        h1.innerHTML = e.name

        let h2 = document.createElement("h2")
        h2.className = "age";
        h2.innerHTML = e.age

        let h3 = document.createElement("h3")
        h3.className = "status";
        h3.innerHTML = e.status ? "Active" : "Inactive"

        let btnDelete = document.createElement("button")
        btnDelete.className = "delete-btn";
        btnDelete.innerHTML = "Delete"
        btnDelete.onclick = () => {
            deleteFunc(e.id)
        }

        let btnEdit = document.createElement("button")
        btnEdit.className = "edit-btn";
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            openModal(e)
        }

        let check = document.createElement("button")
        check.className = "check-btn";
        check.innerHTML = "Checked"
        check.onclick = () => {
            checkedFunc(e)
        }

        div.append(h1, h2, h3, btnDelete, btnEdit, check)
        box.appendChild(div)
    })
}


export { idx }

export default getData