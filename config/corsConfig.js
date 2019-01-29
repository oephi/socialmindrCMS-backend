// Configuration settings for Cross-Origin Origin Resource sharing
const corsOptions = {
  origin: process.env.CORS_URI,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = {
  corsOptions
}
