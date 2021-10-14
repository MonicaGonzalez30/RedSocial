function cambiarFoto(){
    let foto = document.getElementById("photo");
    let nuevaFoto = document.getElementById("urlFoto").value;
    foto.src = nuevaFoto;
}

async function guardarInf(){
    let token = JSON.parse(localStorage.getItem('Monnet_token'));//Obtiene el token desde el local storage
    let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 

    let email = token_decoded.data.email;
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
    let perfil = {
        email: email,
        photo: foto,
        city: cd,
        country: pais,
        age: edad,
        studies: estudios,
        languages: idiomas,
        linkedIn: linkedIn,
        hobbies: hobbies,
        extraKnowledge: conoci
    };   
    let url = await fetch('http://localhost:3000/createProfile', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify(perfil),
    });
    //Regreso de la respuesta
    const data = await url.text();
    console.log(data)
    if (data != "Perfil del usuario no creado.") {
        alert("Los datos se guardaron correctamente.")
    } else {
        alert("Los datos no pudieron guardarse correctamente.")
    }
}

async function mostrarInf(){
    let token = JSON.parse(localStorage.getItem('Monnet_token')); //Obtiene el token desde el local storage
    console.log(token)
    let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 
    const email = String(token_decoded.data.email); //obtener el valor

    //Mostrar la información ya registrada
    const nombre = document.getElementById("name");
    const apePat = document.getElementById("apePat");
    const apeMat = document.getElementById("apeMat");
    nombre.value = token_decoded.data.name;
    apePat.value = token_decoded.data.lastNameP;
    apeMat.value = token_decoded.data.lastNameM;

    let url = await fetch('http://localhost:3000/user/'+email, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
    });
    //Regreso de la respuesta
    const data = await url.json(url);
    console.log(data)
    if (data != "La información del usuario no existe.") {
        //Mostrar la información
        const foto = document.getElementById("photo");
        const cd = document.getElementById("cd");
        const pais = document.getElementById("pais");
        const edad = document.getElementById("edad");
        const estudios = document.getElementById("estudios");
        const idiomas = document.getElementById("idiomas");
        const hobbies = document.getElementById("hobbies");
        const conoci = document.getElementById("conocimientos");
        const linkedIn = document.getElementById("linkedIn");

        foto.src = data.photo;
        cd.value = data.city;
        pais.value = data.country;
        edad.value = data.age;
        estudios.value = data.studies;
        idiomas.value = data.languages;
        hobbies.value = data.linkedIn;
        conoci.value = data.hobbies;
        linkedIn.value = data.extraKnowledge;

        var idPerfil = data.idProfile;
        mostrarFeed(idPerfil);
    } else {
        alert("La información del perfil no existe, debe llenar los campos para guardar su información.")
    }
}

async function mostrarFeed(idPerfil){
    let token = JSON.parse(localStorage.getItem('Monnet_token')); //Obtiene el token desde el local storage
    const HTMLResponse = document.getElementById("contFeed");
    HTMLResponse.innerHTML = '';

    let url = await fetch('http://localhost:3000/userFeedback/'+idPerfil, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
    });
    //Regreso de la respuesta
    const data = await url.json(url);
    console.log(data)
    if (data != "El feedback no existe.") {
        //Mostrar los feedbacks
        let tpl=``;
        for (let i= 0; i < data.length; i++) {
           tpl=`
              <tr> 
                <td>${data[i].comment}</td>
              </tr> `
           HTMLResponse.innerHTML +=`${tpl}`;
        } 
    }
}


async function guardarFeed(idPerfil){
    console.log(idPerfil);
    let token = JSON.parse(localStorage.getItem('Monnet_token'));//Obtiene el token desde el local storage
    let recomendacion = document.getElementById("feedback").value;

    if(recomendacion == null || recomendacion.length == 0 || /^\s+$/.test(recomendacion)) {
        alert('ERROR: Debe ingresar un comentario de recomendación para poder guardarlo.');
        return false;
    }

    let recomen = {
        idProfile: idPerfil,
        comment: recomendacion
    };   
    let url = await fetch('http://localhost:3000/createFeedback', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify(recomen),
    });
    //Regreso de la respuesta
    const data = await url.text();
    console.log(data)
    if (data != "Feedback para el usuario no creado.") {
        alert("El comentario se guardó correctamente.")
    } else {
        alert("El comentario no pudo guardarse.")
    }
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

mostrarInf();