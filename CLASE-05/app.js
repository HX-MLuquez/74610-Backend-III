const express = require("express");
const app = express();
const port = 3000;

// 🔹 Middleware CORS manual
// www.jimy_api.com
// www.jimy.com.ar
app.use((req, res, next) => {
  // Origen permitido (podés ajustar esto)
  res.header("Access-Control-Allow-Origin", "https://jimy.com.ar");
  // Métodos HTTP permitidos
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // Encabezados personalizados permitidos
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Manejo especial para preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
