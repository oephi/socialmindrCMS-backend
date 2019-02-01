require('dotenv').config();
const supertest = require('supertest');
const app = require('../../../app');
const mongoose = require('mongoose');

beforeAll(() => {
  mongoose.connect(process.env.DATABASE_TEST, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

  mongoose.connection.on("error", err => console.log(err));

});
 

afterAll(() => {
  mongoose.connection.close();
});

describe("The user creates a new client", () =>{
  test("POST /clients with a valid req body", async () =>{
    const response = await supertest(app)
    .post("/clients")
    .send({
      name: "Ryan",
      email: "ryan@sickle.com.au",
      password: "whatever"
    })
    .expect(302);

    expect(response.body).toEqual({});
    expect(response.headers.location).toMatch(/^\/clients\/.*$/);
  });
});