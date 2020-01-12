const express = require("express");
const app = express();

//route handler
app.get("/", (req, res) => {
  res.send({ Welcome: "to my app" });
});

//Dynamic Port binding
const PORT = process.env.PORT || 2001;
app.listen(PORT, () => console.log(`express server running at ${PORT}`));
