

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the CRM Express Server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
