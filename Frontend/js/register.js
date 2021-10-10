async function createUser() {
    let nombre = document.getElementById('name').value;
    apellidoPat = document.getElementById('apePat').value;
    apellidoMat = document.getElementById('apeMat').value;
    emai = document.getElementById('email').value;
    passw = document.getElementById('password').value;

    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('ERROR: El campo nombre debe llenarse.');
        return false;
    } else if(apellidoPat == null || apellidoPat.length == 0 || /^\s+$/.test(apellidoPat)) {
        alert('ERROR: El campo apellido paterno debe llenarse.');
        return false;
    } else if(apellidoMat == null || apellidoMat.length == 0 || /^\s+$/.test(apellidoMat)) {
        alert('ERROR: El campo apellido materno debe llenarse.');
        return false;
    } else if(emai == null || emai.length == 0 || /^\s+$/.test(emai)) {
        alert('ERROR: El campo email debe llenarse.');
        return false;
    } else if(passw == null || passw.length < 8 || /^\s+$/.test(passw)) {
        alert('ERROR: El campo contraseña debe llenarse y tener mínimo 8 caracteres.');
        return false;
    }

    let name = document.getElementById('name').value;
    let apePat = document.getElementById('apePat').value;
    let apeMat = document.getElementById('apeMat').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    let usuario = {
        name: name,
        lastNameP: apePat,
        lastNameM: apeMat,
        email: email,
        password: pass
    };
    let url = await fetch('http://localhost:3000/createUser', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
    const data = await url.text();
    console.log(data)
    if (data == "Usuario creado.") {
        alert("Usuario creado correctamente.")
    } else {
        alert("El usuario no pudo crearse.")
    }
}