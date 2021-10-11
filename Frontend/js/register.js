async function createUser() {
    let name = document.getElementById('name').value;
    let apePat = document.getElementById('apePat').value;
    let apeMat = document.getElementById('apeMat').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if(name == null || name.length == 0 || /^\s+$/.test(name)) {
        alert('ERROR: El campo nombre debe llenarse.');
        return false;
    } else if(apePat == null || apePat.length == 0 || /^\s+$/.test(apePat)) {
        alert('ERROR: El campo apellido paterno debe llenarse.');
        return false;
    } else if(apeMat == null || apeMat.length == 0 || /^\s+$/.test(apeMat)) {
        alert('ERROR: El campo apellido materno debe llenarse.');
        return false;
    } else if(email == null || email.length == 0 || /^\s+$/.test(email)) {
        alert('ERROR: El campo email debe llenarse.');
        return false;
    } else if(pass == null || pass.length < 8 || /^\s+$/.test(pass)) {
        alert('ERROR: El campo contraseña debe llenarse y tener mínimo 8 caracteres.');
        return false;
    }

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