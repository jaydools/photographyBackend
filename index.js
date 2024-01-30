const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}!`));
