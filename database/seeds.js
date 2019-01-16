require('dotenv').config();
const mongoose =require("../config/database");
const ClientModel = require("./models/client_model");
const faker = require("faker");

const clientPromises = [];
for(let i = 0; i < 10; i++) {
    console.log(`Creating client ${i + 1}`);
    clientPromises.push(ClientModel.create({
        title: faker.name.title(),
        name: faker.name.firstName(),
        username: faker.random.word(),
        location: faker.address.country(),
        industry: faker.commerce.department(),
        interval: faker.random.number(),
        size: faker.random.number(),
        exclude: [faker.company.companyName(), faker.company.companyName(), faker.company.companyName()],
        message: faker.lorem.paragraph()
    }));
  }

Promise.all(clientPromises)
.then(clients => {
    console.log(`Seeds file successful, created ${clients.length} clients`);
})
.catch(err => console.log(`Seeds file had an error: ${err}`))
.finally(() => mongoose.disconnect());