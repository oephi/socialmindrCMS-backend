
const corsOptions = {
  origin: process.env.CORS_URI,
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = {
  corsOptions
}

// app.listen(process.env.PORT, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
