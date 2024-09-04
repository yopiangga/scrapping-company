const express = require("express");
const { sKemenperin } = require("./scrapping/kemenperin");

const app = express();
const port = 3000;

app.get("/s-kemenperin", sKemenperin);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
