async function login(){
    //Vailidacion de los campos
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    if(email == null || email.length == 0 || /^\s+$/.test(email)) {
        alert('ERROR: El campo email debe llenarse.');
        return false;
    } else if(pass == null || pass.length == 0 || /^\s+$/.test(pass)) {
        alert('ERROR: El campo contraseña debe llenarse.');
        return false;
    }
    
    //Proceso del login
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let login = {
        email: email,
        password:password
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
    if (data.token != "Usuario no autenticado." && data.token != undefined) {
        localStorage.setItem('Presupuestos_token',JSON.stringify(data.token)) //Manda el token al local storage
        window.location="./index.html"; //Redirigir a la pagina
    } else {
        alert("Usuario o contraseña incorrectos.")
    }
}