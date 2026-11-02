package com.pulse.api.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/music")
public class MusicController {

    @GetMapping("/status")
    public Map<String, String> getStatus() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "Online");
        response.put("service", "Pulse Audio Core");
        return response;
    }

    @PostMapping("/spotify/connect")
    public Map<String, String> connectSpotify(@RequestParam String artistId) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Conexión con Spotify inicializada para el artista: " + artistId);
        response.put("status", "Success");
        return response;
    }
}
