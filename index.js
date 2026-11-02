const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Ruta de verificación general
app.get('/', (req, res) => {
  res.json({ message: "Servidor Pulse activo y respondiendo" });
});

// Controladores simulados para Pulse Media
app.get('/api/music/status', (req, res) => {
  res.json({ service: "MusicController", status: "Online", track: "Pulse Intro Stream" });
});

app.get('/api/ai/status', (req, res) => {
  res.json({ service: "AiController", status: "Online", model: "Gemini / OpenAI Ready" });
});

app.listen(PORT, () => {
  console.log(`Servidor Pulse corriendo en el puerto ${PORT}`);
});
