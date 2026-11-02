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

// 1. Controlador de Música / Spotify
app.get('/api/music/status', (req, res) => {
  res.json({ 
    service: "MusicController", 
    status: "Online", 
    message: "Conexión con la API de Spotify lista para configurar",
    track: "Pulse Intro Stream" 
  });
});

// 2. Controlador de Inteligencia Artificial
app.get('/api/ai/status', (req, res) => {
  res.json({ 
    service: "AiController", 
    status: "Online", 
    message: "Endpoints de Gemini/OpenAI listos para recibir peticiones" 
  });
});

// Endpoint POST para procesar consultas de IA o recomendaciones musicales
app.post('/api/ai/process', (req, res) => {
  const userPrompt = req.body.prompt || "Hola Pulse";
  res.json({
    success: true,
    response: `IA procesó tu solicitud correctamente: "${userPrompt}"`
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Pulse corriendo en el puerto ${PORT}`);
});
