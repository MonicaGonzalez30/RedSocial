let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Testing login endpoint', () => {
    it('Sending request', () =>{
        chai.request(url)
        .post('/login')
        .send({
            email: 'monik196901@gmail.com',
            password: 'Moni1234'
        })
        .end(function name(err,res){
            //console.log(err);
            expect(res.body).to.have.property('token');
            expect(res).to.have.status(200)
        })
    })
})