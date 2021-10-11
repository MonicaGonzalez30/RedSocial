async function login(){
    //Vailidacion de los campos
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email == null || email.length == 0 || /^\s+$/.test(email)) {
        alert('ERROR: El campo email debe llenarse.');
        return false;
    } else if(password == null || password.length == 0 || /^\s+$/.test(password)) {
        alert('ERROR: El campo contraseña debe llenarse.');
        return false;
    }
    
    //Proceso del login
    let login = {
        email: email,
        password: password
    };   
    let url = await fetch('http://localhost:3000/login', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    });
    //Regreso del token
    const data = await url.json();
    console.log(data.token);
    if (data.token != "Usuario no autenticado.") {
        localStorage.setItem('Monnet_token',JSON.stringify(data.token)) //Manda el token al local storage
        window.location="./index.html"; //Redirigir a la pagina
    } else {
        alert("Usuario o contraseña incorrectos.")
    }
}