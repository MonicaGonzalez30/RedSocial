async function logOut(){
    let token = await JSON.parse(localStorage.getItem('Monnet_token')); //Obtencion del token
    if (token != undefined) {
        localStorage.removeItem('Monnet_token');
        alert("Ha cerrado sesión");
        window.location="./login.html";
    } else{
        alert("Su sesión ha caducado.");
        window.location="./login.html";
    }
}

async function mostrarUsuarios(){
    let token = JSON.parse(localStorage.getItem('Monnet_token'));//Obtiene el token desde el local storage

    let url = await fetch('http://localhost:3000/users', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
    });
    const data = await url.json(url);
    console.log(data)
    let usuarios = document.getElementById("contenedorUsuarios");
    for (let i = 0; i < data.length; i++) {
        var contenedor = document.createElement("div");
        let usuario = `
        <div class="card" style="width: 15rem; margin-top: 20px;">
            <img src="${data[i].photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].name} ${data[i].lastNameP} ${data[i].lastNameM}</h5>
                <p>${data[i].email}</p>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modalAmistad"><i class="fas fa-user-friends"></i> Enviar solicitud de amistad</a>
            </div>
        </div>`;
        contenedor.innerHTML += usuario;
        usuarios.appendChild(contenedor);
    }
}

mostrarUsuarios();