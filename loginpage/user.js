let jwt = localStorage.getItem("jwt");
if (jwt == null) {
    window.location.href = "./login.html"
}

function loadUser () {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://")
}