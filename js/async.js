import getData from "./sync.js";

import { idx } from "./sync.js";

const API = "http://localhost:3000/data"

// Add
let formAdd = document.querySelector(".formAdd")

// Edit
let formEdit = document.querySelector(".formEdit")

// Search
let formSearch = document.querySelector(".formSearch")

// Filter
let select = document.querySelector(".select")

// Info
let h11 = document.querySelector(".h11")
let h22 = document.querySelector(".h22")
let h33 = document.querySelector(".h33")

// get function

async function get() {
    try {
        let { data } = await axios.get(API)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

// Delete function

export async function deleteFunc(id) {
    try {
        await axios.delete(`${API}/${id}`)
        get()
    } catch (error) {
        console.log(error);
    }
}

// Add function

formAdd.onsubmit = async (event) => {
    event.preventDefault()
    let user = {
        name: formAdd["name"].value,
        age: formAdd["age"].value,
        status: false
    }
    try {
        await axios.post(API, user)
        get()
    } catch (error) {
        console.log(error);
    }
}

// Edit function

formEdit.onsubmit = async (event) => { 
    event.preventDefault()
    let user = {
        name: formEdit["name"].value,
        age: formEdit["age"].value
    }
    try {
        await axios.put(`${API}/${idx}`, user)
        get()
    } catch (error) {
        console.log(error);
    }
}

// Checked function

export async function checkedFunc(e) {
    let user = {
        ...e,
        status: !e.status
    }
    try {
        await axios.put(`${API}/${e.id}`, user)
        get()
    } catch (error) {
        console.log(error);
    }
}

// Search function

formSearch.onsubmit = async (event) => {
    event.preventDefault()
    try {
        let { data } = await axios.get(`${API}?name=${formSearch["name"].value}`)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

// Filter function

select.onclick = async () => {
    if (select.value == "All") {
        try {
            get()
        } catch (error) {
            console.log(error);
        }
    }
    else if (select.value == "Active") {
        try {
            let { data } = await axios.get(`${API}?status=${true}`)
            getData(data)
        } catch (error) {
            console.log(error);
        }
    }
    else if (select.value == "Inactive") {
        try {
            let { data } = await axios.get(`${API}?status=${false}`)
            getData(data)
        } catch (error) {
            console.log(error);
        }
    }
}

// Info function

export async function infoFunc(e) {
    h11.innerHTML = `Name: ${e.name}`
    h22.innerHTML = `Age: ${e.age}`
    h33.innerHTML = `Status: ${e.status ? "Active" : "Inactive"}`
}

export default get