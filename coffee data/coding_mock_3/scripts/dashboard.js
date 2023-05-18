
let page = 1
let data = JSON.parse(localStorage.getItem("Orders"))
DisplayData(data)


function DisplayData(data) {
    PaginationButtons()
    document.getElementById("data-render").innerHTML = `
    <table>
    <thead>
    <th>Sr.no</th>
    <th>Name</th>
    <th>Coffee Type</th>
    <th>Coffee Size</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Edit</th>
    <th>Delete</th>
    </thead>
    <tbody>
   ${data.filter((item, i) => {
        return i >= 10 * (page - 1) && i < 10 * page
    }).map((item, i) => {
        let price = TotalPrice(item.coffeeType, item.size, item.Quantity)
        return `<tr>
       <td>${i + 1}</td> 
       <td>${item.name}</td> 
       <td>${item.coffeeType}</td> 
       <td>${item.size}</td> 
       <td>${item.Quantity}</td> 
       <td>${price}</td>
       <td><button onclick="EditItem(${i})">Edit</button></td> 
       <td><button onclick="DeleteItem(${i})">Delete</button></td> 
       </tr>`
    }).join("")}
    </tbody>
    </table>
    `
}

function TotalPrice(coffeeType, size, Quantity) {
    if (coffeeType === "Americano") {
        if (size === "Small") {
            return 100 * Quantity
        } else if (size === "Medium") {
            return 200 * Quantity
        } else if (size === "Large") {
            return 300 * Quantity
        }
    } else if (coffeeType === "Expresso") {
        if (size === "Small") {
            return 70 * Quantity
        } else if (size === "Medium") {
            return 140 * Quantity
        } else if (size === "Large") {
            return 210 * Quantity
        }
    } else if (coffeeType === "Cappuccino") {
        if (size === "Small") {
            return 50 * Quantity
        } else if (size === "Medium") {
            return 100 * Quantity
        } else if (size === "Large") {
            return 150 * Quantity
        }
    }
}

function EditItem(index) {
    let data = JSON.parse(localStorage.getItem("Orders"))
    data[index].size = "Medium"
    DisplayData(data)
}

function DeleteItem(index) {
    let data = JSON.parse(localStorage.getItem("Orders"))
    data.splice(index, 1)
    localStorage.setItem("Orders", JSON.stringify(data))
    DisplayData(data)
}

function HandleSort(value) {
    if (value === "lth") {
        data.sort((a, b) => {
            let price = TotalPrice(a.coffeeType, a.size, a.Quantity)
            let price2 = TotalPrice(b.coffeeType, b.size, b.Quantity)
            return price - price2
        })
    } else if (value === "htl") {
        data.sort((a, b) => {
            let price = TotalPrice(a.coffeeType, a.size, a.Quantity)
            let price2 = TotalPrice(b.coffeeType, b.size, b.Quantity)
            return price2 - price
        })
    } else {
        data = JSON.parse(localStorage.getItem("Orders"))
        DisplayData(data)
    }
    DisplayData(data)

}

function HandleFilterByType(value) {
    data = JSON.parse(localStorage.getItem("Orders"))
    data = data.filter((item) => {
        return item.coffeeType === value
    })
    DisplayData(data)

}

function HandleFilterBySize(value) {
    let x = document.getElementById("Filter").value
    if (x) {
        data = JSON.parse(localStorage.getItem("Orders"))
        data = data.filter((item) => {
            return item.size === value && item.coffeeType === x
        })
        DisplayData(data)
        PaginationButtons()
    } else {
        data = JSON.parse(localStorage.getItem("Orders"))
        data = data.filter((item) => {
            return item.size === value
        })
        DisplayData(data)
        PaginationButtons()
    }
}
function PaginationButtons() {
    let data = JSON.parse(localStorage.getItem("Orders"))
    const numberOfButtons = Math.ceil(data.length / 10)
    let pages = Array.from({ length: numberOfButtons }, (_, i) => i + 1)

    document.getElementById("pagination-buttons").innerHTML = `${pages.map((item) => {
        return `<button onclick="HandlePageChange(${item})">${item}</button>`
    }).join("")}`

}


function HandlePageChange(value) {
    page = value
    DisplayData(data)
}