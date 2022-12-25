const express = require("express");
const app = express();
const router = require("./router/index");
const PORT = 7000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`running at http://localhost:${PORT}`));
