let Dogdata;
const login = localStorage.getItem("login")
if (!login) {
    window.location = "../pages/login.html"
}
getReq()
async function getReq() {
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
    let FemaleDogData = data.filter((item) => {
        return item.gender == "Female"
    })
    let MaleDogData = data.filter((item) => {
        return item.gender == "Female"
    })
    let total = data.reduce((acc, item) => acc + Number(item.age), 0)
    console.log(total)
    total = total / data.length
    document.getElementById("total-dogs").innerText = data.length
    document.getElementById("female-dogs").innerText = FemaleDogData.length
    document.getElementById("male-dogs").innerText = MaleDogData.length
    document.getElementById("avg-age").innerText = total.toFixed(2)
}

function Logout() {
    localStorage.clear()
    window.location = "../pages/login.html"
}