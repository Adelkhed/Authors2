
const express = require("express");
const app = express();
const cors = require("cors")

require('dotenv').config();

const port = process.env.PORT;

require("./config/mongoose.config.js")

// MIDDLEWARE
app.use(express.json(), express.urlencoded({ extended: true }),cors())
// app.use(cors({
//     origin: "localhost:3000",
//     methods:["GET","POST"]
// }))

const AllAuthorsRoutes = require("./routes/author.route.js")(app)
AllAuthorsRoutes

// this needs to be below the other code blocks
app.listen( port, () => console.log(`🌴🌴🌴🌴 Listening on port: ${port} 🌴🌴🌴🌴`) );