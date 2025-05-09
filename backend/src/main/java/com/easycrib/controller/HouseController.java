package com.easycrib.controller;

import com.easycrib.model.House;
import com.easycrib.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/houses")
@CrossOrigin(origins = "*")
public class HouseController {

    @Autowired
    private HouseRepository houseRepository;

    @GetMapping
    public ResponseEntity<List<House>> getAllHouses() {
        return ResponseEntity.ok(houseRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<House> getHouseById(@PathVariable String id) {
        return houseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<House> addHouse(@RequestBody House house) {
        return ResponseEntity.ok(houseRepository.save(house));
    }
    

    @GetMapping("/test")
    public ResponseEntity<Map<String, Object>> getTestData() {
        Map<String, Object> testData = new HashMap<>();
        testData.put("status", "success");
        testData.put("message", "API is working correctly");
        testData.put("timestamp", System.currentTimeMillis());
        testData.put("sampleHouses", Arrays.asList(
            Map.of(
                "id", "test-id-1",
                "name", "Sample House 1",
                "price", 250000,
                "bedrooms", 3,
                "bathrooms", 2
            ),
            Map.of(
                "id", "test-id-2",
                "name", "Sample House 2",
                "price", 350000,
                "bedrooms", 4,
                "bathrooms", 3
            )
        ));
        
        return ResponseEntity.ok(testData);
    }
}