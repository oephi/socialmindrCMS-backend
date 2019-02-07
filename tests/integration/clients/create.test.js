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

describe("Clients create route test", () =>{
  //variable must be let and not const to allow reassignment

  let token;

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

  test("POST /clients with a valid req body, check redirect and document created", async () =>{
    const clientCount = await ClientModel.count();
    const response = await supertest(app)
    .post("/clients")
    .set('Authorization', `Bearer ${token}`)
    .send({
      name: "Ryan",
      email: "ryan@sickle.com.au",
      password: "whatever"
    })
    .expect(302);

    const newClientCount= await ClientModel.count();

    expect(response.body).toEqual({});
    expect(response.headers.location).toMatch(/^\/clients\/.*$/);
    expect(newClientCount).toBe(clientCount + 1);
  });


  test("POST /clients with a valid req body and match data created", async () =>{
    const response = await supertest(app)
    .post("/clients")
    .set('Authorization', `Bearer ${token}`)
    .send({
      name: "Bob",
      email: "ryan@sickle.com.au",
      password: "whatever"
    })
    .expect(302);


    const client = await ClientModel.findOne({name: "Bob"});
    expect(client).toBeTruthy();
    expect(client.name).toBe("Bob");
  });

  test("POST /clients with no authorization return 'Unauthorized'", async () =>{
    const response = await supertest(app)
    .post("/clients")
    .send({
      name: "Bob",
      email: "ryan@sickle.com.au",
      password: "whatever"
    })
    .expect(401);
  });
});