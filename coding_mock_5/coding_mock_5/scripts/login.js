function Validate(event) {
    event.preventDefault()
    document.getElementById("login-btn").value = "Loading..."
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (email && password) {
        const details = { email, password }
        PostReq(details)
    } else {
        alert("Please fill all details")
        document.getElementById("login-btn").value = "Login"
    }

}

async function PostReq(details) {
    try {
        const req = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        })
        const res = await req.json()
        if (res.error) {
            alert(res.error)
        } else {
            localStorage.setItem("login", true)
            window.location = "../pages/data.html"
        }
        document.getElementById("login-btn").value = "Login"
    } catch (error) {
        alert(error.message)
        document.getElementById("login-btn").value = "Login"
    }
}