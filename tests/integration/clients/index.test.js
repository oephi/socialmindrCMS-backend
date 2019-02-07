require('dotenv').config();
const supertest = require('supertest');
const app = require('../../../app');
const mongoose = require('mongoose');
const ClientModel = require('../../../database/models/client_model');

// const token = process.env.TEST_TOKEN

beforeAll(() => {
  
  mongoose.connect(process.env.DATABASE_TEST, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

  mongoose.connection.on("error", err => console.log(err));
  
});
 

afterAll(async () => {
  await ClientModel.deleteMany({});
  mongoose.connection.close();
});


describe("My index POST request tests for /clients route", () =>{
  //variable must be let and not const to allow reassignment

  let token;
  // let user;
  //this gets the bearer token from the backend and assigns it to the token variable
  beforeAll((done) => {
    supertest(app)
      .post('/login')
      .send({
        email: "test@testing.com",
        password: "testing",
      })
      .end((err, response) => {
        token = response.body; 
        done();
      });
     
    })  

  test("GET /clients", async () =>{
    const response = await supertest(app)
    .get("/clients")
    .set('Authorization', `Bearer ${token}`)
    
    .expect(200);


    const client = await ClientModel();
    expect(client).toBeTruthy();
  });
});