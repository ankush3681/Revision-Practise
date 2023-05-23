getReq()
const login = localStorage.getItem("login")
if (!login || login === false) {
    window.location = "../pages/login.html"
}
let Dogdata;
let showModal = false
async function getReq() {
    document.getElementById("data-render").innerHTML = `<h1>Loading...</h1>`
    try {
        const req = await fetch(`https://mock-5-backend.onrender.com/dogs`)
        const res = await req.json()
        Dogdata = res
        display(Dogdata)
    } catch (error) {
        console.log(error)
    }
}

function display(data) {
    document.getElementById("data-render").innerHTML = `${data.map((item) => {
        return `<div id="dog-card">
        <img src="https://media.istockphoto.com/id/1346381655/photo/tricolor-bernese-mountain-dog-sitting-looking-at-camera-and-panting-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=QJxqGPZLpPHC0GooDsgVenqRTpzL_ApyLs3vG_zl4jc=" alt="dog-image-${item.id}" width=100%/>
        <b>${item.name}</b>
        <p>age: ${item.age}</p>
        <p>location: ${item.place}</p>
        <p>gender: ${item.gender}</p>
        <i onclick="deleteReq(${item.id})" class="fa-sharp fa-solid fa-trash" style="color: #000000;"></i>
        <i onclick="modal(${item.id},'${item.name}','${item.age}','${item.gender}','${item.place}')" class="fa-solid fa-pen-to-square" style="color: #000205;"></i>
    </div>`
    }).join("")}`
}

function SearchData() {
    document.getElementById("data-render").innerHTML = `<h1>Loading...</h1>`
    let searchText = document.getElementById("search").value
    let newData = Dogdata.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })
    display(newData)
}

function filterData(value) {
    document.getElementById("data-render").innerHTML = `<h1>Loading...</h1>`
    if (value) {
        let newData = Dogdata.filter((item) => {
            return item.gender == value
        })
        display(newData)
    } else {
        getReq()
    }
}

function sortData(value) {
    document.getElementById("data-render").innerHTML = `<h1>Loading...</h1>`
    if (value === "lth") {
        let newData = Dogdata.sort((a, b) => a.age - b.age)
        let filter = document.getElementById("filters").value
        display(newData)
    } else if (value === "htl") {
        let newData = Dogdata.sort((a, b) => b.age - a.age)
        let filter = document.getElementById("filters").value

        display(newData)
    } else {
        getReq()
    }
}

async function deleteReq(id) {
    document.getElementById("data-render").innerHTML = `<h1>Loading...</h1>`
    try {
        let req = await fetch(`https://mock-5-backend.onrender.com/dogs/${id}`, {
            method: "DELETE"
        })
        getReq()
    } catch (error) {
        alert(error.message)
    }
}

function modal(id, name, age, gender, place) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    let nameInput = document.getElementById("name");
    let DogInput = document.getElementById("dogID");
    let ageInput = document.getElementById("age");
    let genderInput = document.getElementById("gender");
    let placeInput = document.getElementById("place");
    nameInput.value = name;
    ageInput.value = age;
    genderInput.value = gender;
    placeInput.value = place;
    DogInput.value = id
}

function HideModal() {
    document.getElementsByClassName("modal")[0].style.display = "none"
}


async function Update(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let place = document.getElementById("place").value
    let id = document.getElementById("dogID").value;
    const details = { name, age, place, gender }
    let updateBtn = document.getElementById("update-btn")
    updateBtn.value = "Loading..."
    try {
        const req = await fetch(`https://mock-5-backend.onrender.com/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        })
        const res = await req.json()
        document.getElementById("update-btn").value = "Update"
        getReq()
        alert("“successfully Updated")
        HideModal()
    } catch (error) {
        alert(error.message)
        document.getElementById("update-btn").value = "Update"
    }
}

function Logout() {
    localStorage.clear()
    window.location = "../pages/login.html"
}