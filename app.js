const express = require("express");
const route = require("./routes/route");

const app = express();

//route handler
app.use("/", route);

//Dynamic Port binding
const PORT = process.env.PORT || 2001;
app.listen(PORT, () => console.log(`express server running at ${PORT}`));
