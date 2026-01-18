const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.post("/api/data", (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: "data received successfully",
    data: {
      name,
      age,
    },
  });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
