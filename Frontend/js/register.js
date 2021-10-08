async function createUser() {
    let nombre = document.getElementById('name').value;
    let apellidoPat = document.getElementById('apePat').value;
    let apellidoMat = document.getElementById('apeMat').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    let usuario = {
        nombre: nombre,
        apellidoPat: apellidoPat,
        apellidoMat: apellidoMat,
        email: email,
        userPasword: pass
    };
    let url = await fetch('http://localhost:3000/createUser', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
    //alert("Usuario creado.");
}