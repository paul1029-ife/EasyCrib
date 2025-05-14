package com.easycrib.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HomeController {
    
    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> welcome() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome to EasyCrib API! 🏠");
        response.put("status", "active");
        response.put("endpoints", new String[] {
            "GET /api/houses - Get all houses",
            "GET /api/houses/{id} - Get house by ID",
            "POST /api/houses - Add a new house"
        });
        
        return ResponseEntity.ok(response);
    }
} 