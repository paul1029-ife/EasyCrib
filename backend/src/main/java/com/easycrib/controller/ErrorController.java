package com.easycrib.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

    @RequestMapping("/error")
    public ResponseEntity<Map<String, Object>> handleError() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "error");
        response.put("message", "The requested endpoint was not found. Please check the URL and try again.");
        response.put("available_endpoints", new String[] {
            "GET / - Welcome page",
            "GET /api/houses - Get all houses",
            "GET /api/houses/{id} - Get house by ID",
            "POST /api/houses - Add a new house"
        });
        
        return ResponseEntity.status(404).body(response);
    }
} 