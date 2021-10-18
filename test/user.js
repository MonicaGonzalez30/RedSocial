let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

//Registrar un nuevo usuario
describe('Testing create user endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .post('/createUser')
        .send({
            name: "Sara",
            lastNameP: "Segundo",
            lastNameM: "Alonso",
            email: "sara63@gmail.com",
            password: "sarita01"
        })
        .end(function name(err,res){
            expect(res.text).to.be.equal('Usuario creado.');
            expect(res).to.have.status(200)
        })
    })
})

//Mostrar información del usuario
describe('Testing user information endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .get('/user/monik196901@gmail.com')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNw7NuaWNhIiwibGFzdE5hbWVQIjoiR29uesOhbGV6IiwibGFzdE5hbWVNIjoiQ2hhY8OzbiIsImVtYWlsIjoibW9uaWsxOTY5MDFAZ21haWwuY29tIn0sImlhdCI6MTYzNDE2NDE0MX0.Azn6c00YOB0iMBVzjl3xS_ZdKpGazjJX7ipze2YI05g' })
        .end(function name(err,res){
            expect(res.text).to.be.equal('{"idProfile":1,"name":"Mónica","lastNameP":"González","lastNameM":"Chacón","photo":"https://lh3.googleusercontent.com/ogw/ADea4I5G9X0D3CsU7FTZ3qydwjoQ0hWu7tKmyfpvrkZf=s83-c-mo","city":"Nezahualcóyotl","country":"México","age":17,"studies":"CECyT 14 Luis Enrique Erro, Certificación en Microsoft Office","languages":"Español, Ingles Nivel B1","linkedIn":"www.linkedin.com/in/monica-gonzalez-chacon","hobbies":"Escuchar música, dibujar, salir a pasear, ver anime, series y peliculas.","extraKnowledge":"JavasCript, HTML, CSS, Node.Js, Express, Bases de datos SQL"}');
            expect(res).to.have.status(200)
        })
    })
})

//Mostrar las recomendaciones del usuario
describe('Testing user feedbacks endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .get('/userFeedback/monik196901@gmail.com')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNw7NuaWNhIiwibGFzdE5hbWVQIjoiR29uesOhbGV6IiwibGFzdE5hbWVNIjoiQ2hhY8OzbiIsImVtYWlsIjoibW9uaWsxOTY5MDFAZ21haWwuY29tIn0sImlhdCI6MTYzNDE2NDE0MX0.Azn6c00YOB0iMBVzjl3xS_ZdKpGazjJX7ipze2YI05g' })
        .end(function name(err,res){
            expect(res.body).to.be.a('array');
            expect(res).to.have.status(200)
        })
    })
})

//Guardar información del usuario
describe('Testing create profile endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .post('/createProfile')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJHdWFkYWx1cGUgQW5nw6lsaWNhIiwibGFzdE5hbWVQIjoiQ2hhY8OzbiIsImxhc3ROYW1lTSI6IkNydXoiLCJlbWFpbCI6ImdwZUFuZ2VsaWNhNjlAZ21haWwuY29tIn0sImlhdCI6MTYzNDMyNDkzMH0.zONmg3jxnBBHJKyIrqyRnngIYOVbmis_kusAyqW8qrI' })
        .send({
            email: "gpeAngelica69@gmail.com",
            photo: "https://www.eltiempo.com/files/image_640_428/uploads/2019/12/07/5dec47012d257.jpeg",
            city: "Ciudad de México",
            country: "México",
            age: 25,
            studies: "UPIICSA del IPN como Ingeniera en Informática",
            languages: "Español",
            linkedIn: "www.linkedin.com/in/guadalupe-angelica-chacon-cruz",
            hobbies: "Nadar, leer, ver peliculas y series",
            extraKnowledge: "Java, JavaScript, HTML, EJS, Express"
        })
        .end(function name(err,res){
            expect(res.text).to.be.equal('Perfil del usuario creado.');
            expect(res).to.have.status(200)
        })
    })
})

//Guardar recomendacion en el perfil del usuario
describe('Testing create feedback endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .post('/createFeedback')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJHdWFkYWx1cGUgQW5nw6lsaWNhIiwibGFzdE5hbWVQIjoiQ2hhY8OzbiIsImxhc3ROYW1lTSI6IkNydXoiLCJlbWFpbCI6ImdwZUFuZ2VsaWNhNjlAZ21haWwuY29tIn0sImlhdCI6MTYzNDMyNDkzMH0.zONmg3jxnBBHJKyIrqyRnngIYOVbmis_kusAyqW8qrI' })
        .send({
            email: "gpeAngelica69@gmail.com",
            comment: "El perfil esta muy completo aunque la foto no tiene relación con el perfil."
        })
        .end(function name(err,res){
            expect(res.text).to.be.equal('Feedback para el usuario creado.');
            expect(res).to.have.status(200)
        })
    })
})

//Mostrar a todos los usuarios
describe('Testing users endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .get('/users')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNw7NuaWNhIiwibGFzdE5hbWVQIjoiR29uesOhbGV6IiwibGFzdE5hbWVNIjoiQ2hhY8OzbiIsImVtYWlsIjoibW9uaWsxOTY5MDFAZ21haWwuY29tIn0sImlhdCI6MTYzNDE2NDE0MX0.Azn6c00YOB0iMBVzjl3xS_ZdKpGazjJX7ipze2YI05g' })
        .end(function name(err,res){
            expect(res.body).to.be.a('array');
            expect(res).to.have.status(200)
        })
    })
})

//Enviar solicitudes de amistad
describe('Testing send request friendship endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .post('/sendRequestFriendship')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJHdWFkYWx1cGUgQW5nw6lsaWNhIiwibGFzdE5hbWVQIjoiQ2hhY8OzbiIsImxhc3ROYW1lTSI6IkNydXoiLCJlbWFpbCI6ImdwZUFuZ2VsaWNhNjlAZ21haWwuY29tIn0sImlhdCI6MTYzNDMyNDkzMH0.zONmg3jxnBBHJKyIrqyRnngIYOVbmis_kusAyqW8qrI' })
        .send({
            emailSend: "gpeAngelica69@gmail.com",
            emailReceive: "monik196901@gmail.com",
            status: "Enviado"
        })
        .end(function name(err,res){
            expect(res.text).to.be.equal('Solicitud de amistad enviada.');
            expect(res).to.have.status(200)
        })
    })
})

//Mostrar todas las solicitudes de amistad
describe('Testing requests friendship endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .get('/requestsFriendship/monik196901@gmail.com')
        .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJNw7NuaWNhIiwibGFzdE5hbWVQIjoiR29uesOhbGV6IiwibGFzdE5hbWVNIjoiQ2hhY8OzbiIsImVtYWlsIjoibW9uaWsxOTY5MDFAZ21haWwuY29tIn0sImlhdCI6MTYzNDE2NDE0MX0.Azn6c00YOB0iMBVzjl3xS_ZdKpGazjJX7ipze2YI05g' })
        .end(function name(err,res){
            expect(res.body).to.be.a('array');
            expect(res).to.have.status(200)
        })
    })
})