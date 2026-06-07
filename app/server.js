const express = require("express");

const app = express();

const PORT = 3000;

const SERVER_NAME =
  process.env.SERVER_NAME || "Unknown";

const BACKEND =
  process.env.BACKEND || "unknown";

const ALGORITHM =
  process.env.LOAD_BALANCER_ALGORITHM || "Round Robin";

function page(title, content) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Bioskop Online</title>

      <style>

      body{
          font-family: Arial;
          background:#f5f5f5;
          padding:30px;
      }

      .box{
          background:white;
          padding:20px;
          border-radius:10px;
      }

      a{
          display:block;
          margin-top:10px;
      }

      </style>

  </head>

  <body>

      <div class="box">

          <h1>🎬 Sistem Reservasi Bioskop Online</h1>

          <h3>${title}</h3>

          ${content}

          <hr>

          <p><b>Backend :</b> ${BACKEND}</p>

          <p><b>Server :</b> ${SERVER_NAME}</p>

          <p><b>Algorithm :</b> ${ALGORITHM}</p>

      </div>

  </body>

  </html>
  `;
}

app.get("/", (req, res) => {

  res.send(page(
      "Menu Utama",
      `
      <a href="/movies">🎥 Daftar Film</a>
      <a href="/booking">🎫 Booking Tiket</a>
      <a href="/payment">💳 Pembayaran</a>
      <a href="/api/status">📡 API Status</a>
      `
  ));

});

app.get("/movies", (req, res) => {

  res.send(page(
      "Daftar Film",
      `
      <ul>
        <li>Avengers Endgame</li>
        <li>Spider-Man</li>
        <li>Mission Impossible</li>
      </ul>
      `
  ));

});

app.get("/booking", async (req, res) => {

  await new Promise(resolve =>
      setTimeout(resolve,5000)
  );

  res.send(page(
      "Booking Tiket",
      `
      Tiket berhasil dipesan.
      `
  ));

});

app.get("/payment", (req, res) => {

  res.send(page(
      "Pembayaran",
      `
      Status pembayaran berhasil.
      `
  ));

});

app.get("/api/status", (req,res)=>{

  res.json({

      algorithm: ALGORITHM,

      layer: "NGINX Load Balancer",

      active_backend: BACKEND,

      server_name: SERVER_NAME,

      status: "ACTIVE"

  });

});

app.listen(PORT, ()=>{

  console.log(
    `${SERVER_NAME} running`
  );

});