package com.pulse.api.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @PostMapping("/prompt")
    public Map<String, String> processAiQuery(@RequestBody Map<String, String> request) {
        String userPrompt = request.get("prompt");
        String aiResponse = "Pulse AI Agente: He analizado tu consulta sobre '" + userPrompt + "'. ¡Listo para optimizar tus tracks!";
        
        Map<String, String> response = new HashMap<>();
        response.put("reply", aiResponse);
        return response;
    }
}
