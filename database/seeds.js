require('dotenv').config();
const mongoose =require("../config/database");
const ClientModel = require("./models/client_model");
const InviteCleanerModel = require("./models/invite_cleaner_model");
const InvitesModel = require("./models/invite_model")
const LogsModel = require("./models/log_model")
const MessageModel = require("./models/message_model")

const faker = require("faker");

const clientPromises = [];
for(let i = 0; i < 10; i++) {
    console.log(`Creating client ${i + 1}`);
    clientPromises.push(ClientModel.create({
        job_title: faker.name.title(),
        name: faker.name.firstName(),
        username: faker.random.word(),
        email: faker.internet.email(),
        location: faker.address.country(),
        industry: faker.commerce.department(),
        interval: faker.random.number(),
        company_size: faker.random.number(),
        company_exclusion: [faker.company.companyName(), faker.company.companyName(), faker.company.companyName()],
        message: faker.lorem.paragraph(),
        account_status: false,
        verification_status: false,
        server_status:false
    }));
  }

Promise.all(clientPromises)
.then(clients => {
  const clientIds = clients.map(x => x._id);
  
  const invitePromises =[];
  for(let i = 0; i < 10; i++){
  console.log(`Creating invites ${i + 1}`);
    invitePromises.push(InvitesModel.create({
      timestamp: Date.now(),
      industry: faker.commerce.department(),
      title: faker.name.title(),
      location: faker.address.country(),
      linkedinId: faker.phone.phoneNumber(),
      client: clientIds[i],
    }))
  }

  const inviteCleanerPromises =[];
  for(let i = 0; i < 10; i++){
  console.log(`Creating invite cleaner ${i + 1}`);
    inviteCleanerPromises.push(InviteCleanerModel.create({
      timestamp: Date.now(),
      number_deleted: faker.random.number(),
      invites_remaining: faker.random.number(),
      client: clientIds[i],
    }))
  }

  const logsPromises =[];
  for(let i = 0; i < 10; i++){
  console.log(`Creating logs ${i + 1}`);
    logsPromises.push(LogsModel.create({
      timestamp: Date.now(),
      error_log: faker.lorem.paragraph(),
      client: clientIds[i],
    }))
  }

  const messagePromises =[];
  for(let i = 0; i < 10; i++){
  console.log(`Creating messages ${i + 1}`);
    messagePromises.push(MessageModel.create({
      timestamp: Date.now(),
      linkedin_id: faker.random.number(),
      accept_time: Date.now(),
      deleted: faker.random.boolean(),
      client: clientIds[i],
    }))
  }
  return Promise.all(
    invitePromises,
    inviteCleanerPromises,
    logsPromises,
    messagePromises
  )
  .then(clients => {
    console.log(`Seeds file successful, created ${clients.length} clients`);
  })
})
.catch(err => console.log(`Seeds file had an error: ${err}`))
.finally(() => mongoose.disconnect());


