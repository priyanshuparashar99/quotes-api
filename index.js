const express = require("express");
const request = require("request");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ?? 3000;

// Routes
app.get("/", (req, res) => {
        const category = req.params.category || "amazing";

  request.get(
    {
      url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    },
    (err, data) => {
      if (err) console.log("Error", err);
      return res.json(JSON.parse(data.body));
    }
  );
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
