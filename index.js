require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => console.log(`Socialmindr CMS listening on port ${port}!`));  