// Orders Logic


function HandleSubmit(event) {
    event.preventDefault()
    let name = document.getElementById("name").value
    let coffeeType = document.getElementById("coffeeType").value
    let size = document.getElementById("size").value
    let Quantity = document.getElementById("Quantity").value
    let total = document.getElementById("total")
    if (coffeeType === "Americano") {
        if (size === "Small") {
            total.innerHTML = `<p>${100 * Quantity}</p>`
        } else if (size === "Medium") {
            total.innerHTML = `<p>${200 * Quantity}</p>`
        } else if (size === "Large") {
            total.innerHTML = `<p>${300 * Quantity}</p>`
        }
    }
    if (name && coffeeType && size && Quantity) {
        let Data = JSON.parse(localStorage.getItem("Orders")) || []
        Data.push({ name, coffeeType, size, Quantity })

        localStorage.setItem("Orders", JSON.stringify(Data))
        alert("Order placed successfully")
    } else {
        alert("please fill all details")
    }
}

function HandleTotal() {
    let coffeeType = document.getElementById("coffeeType").value
    let size = document.getElementById("size").value
    let Quantity = document.getElementById("Quantity").value
    let total = document.getElementById("total")
    console.log(Quantity)
    if (coffeeType === "Americano") {
        if (size === "Small") {
            total.innerHTML = `<p>${100 * Quantity}</p>`
        } else if (size === "Medium") {
            total.innerHTML = `<p>${200 * Quantity}</p>`
        } else if (size === "Large") {
            total.innerHTML = `<p>${300 * Quantity}</p>`
        }
    } else if (coffeeType === "Expresso") {
        if (size === "Small") {
            total.innerHTML = `<p>${70 * Quantity}</p>`
        } else if (size === "Medium") {
            total.innerHTML = `<p>${140 * Quantity}</p>`
        } else if (size === "Large") {
            total.innerHTML = `<p>${210 * Quantity}</p>`
        }
    } else if (coffeeType === "Cappuccino") {
        if (size === "Small") {
            total.innerHTML = `<p>${50 * Quantity}</p>`
        } else if (size === "Medium") {
            total.innerHTML = `<p>${100 * Quantity}</p>`
        } else if (size === "Large") {
            total.innerHTML = `<p>${150 * Quantity}</p>`
        }
    }
}