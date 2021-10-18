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

async function mostrarSolicitudes(){
    let token = JSON.parse(localStorage.getItem('Monnet_token'));//Obtiene el token desde el local storage
    let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 
    let email = token_decoded.data.email;

    let url = await fetch('http://localhost:3000/requestsFriendship/'+email, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
    });
    const data = await url.json(url);
    console.log(data)
    let solicitudes = document.getElementById("contenedorSolicitudes");
    for (let i = 0; i < data.length; i++) {
        var contenedor = document.createElement("div");
        let solicitud = `
        <div class="card item" style="width: 18rem; margin-top: 20px;">
            <div class="card-body">
                <h5 class="card-title">${data[i].emailSend}</h5>
                <p>Te envió solicitud de amistad</p>
                <button type="button" class="btn btn-success acept">Aceptar</button>
                <button type="button" class="btn btn-danger refuse">Rechazar</button>
            </div>
        </div>`;
        contenedor.innerHTML += solicitud;
        solicitudes.appendChild(contenedor);
    }

    aceptar();
    rechazar();
}

function aceptar(){
    /*const enviarSolicitudBotones = document.querySelectorAll(".envSolicitud");
    enviarSolicitudBotones.forEach((envSolBoton) => {
        envSolBoton.addEventListener('click', envSol);
    });

    async function envSol(event) {
        const button = event.target;
        const item = button.closest('.item');
        let emailR = item.querySelector('.item-email').textContent; //Se obtiene el email al que se envia la solicitud
      
        let token = JSON.parse(localStorage.getItem('Monnet_token'));//Obtiene el token desde el local storage
        let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 
        let emailS = token_decoded.data.email;  //Obtiene el email que envia la solicitud
    
        let solicitud = {
            emailSend: emailS,
            emailReceive: emailR,
            status: 'Enviado'
        };   
        let url = await fetch('http://localhost:3000/sendRequestFriendship', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+token
            },
            body: JSON.stringify(solicitud),
        });
        //Regreso de la respuesta
        const data = await url.text();
        console.log(data)
        if (data != "Solicitud de amistad no enviada.") {
            alert("La solicitud de amistad se envió correctamente.")
        } else {
            alert("La solicitud de amistad no pudo enviarse.")
        }
    } */
}

function rechazar(){

}

mostrarSolicitudes();