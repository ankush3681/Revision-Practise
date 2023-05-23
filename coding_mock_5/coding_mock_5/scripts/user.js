function ValidateAndPost(event) {
    event.preventDefault()
    document.getElementById("register-btn").value = "Loading.."
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender").value
    let place = document.getElementById("place").value
    if (name && age && gender && place) {
        const details = { name, age, place, gender }
        PostDetails(details)
    } else {
        document.getElementById("register-btn").value = "Register"
        alert("fill details")
    }
}

async function PostDetails(details) {
    document.getElementById("register-btn").value = "Loading.."
    try {
        const req = await fetch("https://mock-5-backend.onrender.com/dogs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        })
        const res = await req.json()
        document.getElementById("register-btn").value = "Register"
        alert("“successfully registered”")
    } catch (error) {
        alert(error.message)
        document.getElementById("register-btn").value = "Register"
    }
}