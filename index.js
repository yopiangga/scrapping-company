const express = require("express");
const { sKemenperin } = require("./scrapping/kemenperin");
const { sIdx } = require("./scrapping/idx");

const app = express();
const port = 3000;

app.get("/s-kemenperin", sKemenperin);
app.get("/s-idx", sIdx);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
