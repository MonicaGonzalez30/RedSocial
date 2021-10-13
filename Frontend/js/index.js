function cambiarFoto(){
    let foto = document.getElementById("photo");
    let nuevaFoto = document.getElementById("urlFoto").value;
    foto.src = nuevaFoto;
}

async function guardarInf(){
    //Decodificar el token
    let token = await JSON.parse(localStorage.getItem('Monnet_token'))//Obtiene el token desde el local storage
    console.log(token)
    // let tokenDec = atob(token);
    // console.log(tokenDec)

    let email;
    let foto = document.getElementById("photo").src;
    let cd = document.getElementById("cd").value;
    let pais = document.getElementById("pais").value;
    let edad = document.getElementById("edad").value;
    let estudios = document.getElementById("estudios").value;
    let idiomas = document.getElementById("idiomas").value;
    let hobbies = document.getElementById("hobbies").value;
    let conoci = document.getElementById("conocimientos").value;
    let linkedIn = document.getElementById("linkedIn").value;

    //Vailidacion de los campos
    if(cd == null || cd.length == 0 || /^\s+$/.test(cd)) {
        alert('ERROR: El campo ciudad debe llenarse.');
        return false;
    } else if(pais == null || pais.length == 0 || /^\s+$/.test(pais)) {
        alert('ERROR: El campo país debe llenarse.');
        return false;
    } else if(edad == null || edad.length == 0 || /^\s+$/.test(edad)) {
        alert('ERROR: El campo edad debe llenarse.');
        return false;
    } else if(estudios == null || estudios.length == 0 || /^\s+$/.test(estudios)) {
        alert('ERROR: El campo estudios debe llenarse.');
        return false;
    } else if(idiomas == null || idiomas.length == 0 || /^\s+$/.test(idiomas)) {
        alert('ERROR: El campo idiomas debe llenarse.');
        return false;
    } else if(hobbies == null || hobbies.length == 0 || /^\s+$/.test(hobbies)) {
        alert('ERROR: El campo hobbies debe llenarse.');
        return false;
    } else if(conoci == null || conoci.length == 0 || /^\s+$/.test(conoci)) {
        alert('ERROR: El campo conocimientos debe llenarse.');
        return false;
    } else if(linkedIn == null || linkedIn.length == 0 || /^\s+$/.test(linkedIn)) {
        alert('ERROR: El campo perfil de LinkedIn debe llenarse.');
        return false;
    }
    
    //Proceso del guardado de la información
    // let perfil = {
    //     email: email,
    //     photo: foto,
    //     city: cd,
    //     country: pais,
    //     age: edad,
    //     studies: estudios,
    //     languages: idiomas,
    //     linkedIn: linkedIn,
    //     hobbies: hobbies,
    //     extraKnowledge: conoci
    // };   
    // let url = await fetch('http://localhost:3000/createProfile', {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(perfil),
    // });
    //Regreso del token
    // const data = await url.json();
    // console.log(data.token);
    // if (data.token != "Usuario no autenticado.") {
    //     
    // } else {
    //     alert("Los datos no pudieron guardarse correctamente.")
    // }
}

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