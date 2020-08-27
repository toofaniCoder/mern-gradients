const express = require("express");
const app = express();
const connectDB = require("./config/database");
const path = require("path");

// connect database
// db
connectDB();

// middleware
app.use(express.json());

app.use("/gradients", require("./routes/api/gradient"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started at: ${PORT}`));
