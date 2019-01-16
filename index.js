require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;
require("./config/database");
// require("./database/models/client_model")
// require("./database/models/invites_cleaner_model")
// require("./database/models/invites_model")
// require("./database/models/logs_model")
// require("./database/models/message_model")


app.listen(port, () => console.log(`Socialmindr CMS listening on port ${port}!`));  