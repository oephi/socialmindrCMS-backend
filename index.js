require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;
require("./config/database");

global.HTTPError = class HTTPError extends Error {
  constructor(statusCode, message) {
      super(message);

      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, HTTPError);
      }
      this.name = "HTTPError";
      this.statusCode = statusCode;
  }
};


app.listen(port, () => console.log(`Socialmindr CMS listening on port ${port}!`));  