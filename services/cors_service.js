const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: process.env.CORS_URI,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/clients', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

// app.listen(process.env.PORT, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
