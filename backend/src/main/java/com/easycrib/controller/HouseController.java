package com.easycrib.controller;

import com.easycrib.model.House;
import com.easycrib.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

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
    public ResponseEntity<House> getHouseById(@PathVariable Long id) {
        return houseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<House> addHouse(@RequestBody House house) {
        try {
            House savedHouse = houseRepository.save(house);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedHouse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<House> updateHouse(@PathVariable Long id, @RequestBody House houseDetails) {
        return houseRepository.findById(id)
                .map(existingHouse -> {
                    if (houseDetails.getName() != null) {
                        existingHouse.setName(houseDetails.getName());
                    }
                    if (houseDetails.getDescription() != null) {
                        existingHouse.setDescription(houseDetails.getDescription());
                    }
                    if (houseDetails.getPrice() != null) {
                        existingHouse.setPrice(houseDetails.getPrice());
                    }
                    if (houseDetails.getLocation() != null) {
                        existingHouse.setLocation(houseDetails.getLocation());
                    }
                    if (houseDetails.getBedrooms() != null) {
                        existingHouse.setBedrooms(houseDetails.getBedrooms());
                    }
                    if (houseDetails.getBathrooms() != null) {
                        existingHouse.setBathrooms(houseDetails.getBathrooms());
                    }
                    if (houseDetails.getPropertyType() != null) {
                        existingHouse.setPropertyType(houseDetails.getPropertyType());
                    }
                    if (houseDetails.getAmenities() != null) {
                        existingHouse.setAmenities(houseDetails.getAmenities());
                    }
                    if (houseDetails.getImageUrl() != null) {
                        existingHouse.setImageUrl(houseDetails.getImageUrl());
                    }
                    
                    House updatedHouse = houseRepository.save(existingHouse);
                    return ResponseEntity.ok(updatedHouse);
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteHouse(@PathVariable Long id) {
        return houseRepository.findById(id)
                .map(house -> {
                    houseRepository.delete(house);
                    Map<String, Boolean> response = new HashMap<>();
                    response.put("deleted", Boolean.TRUE);
                    return ResponseEntity.ok(response);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/test")
    public ResponseEntity<Map<String, Object>> getTestData() {
        Map<String, Object> testData = new HashMap<>();
        testData.put("status", "success");
        testData.put("message", "API is working correctly");
        testData.put("timestamp", System.currentTimeMillis());
        testData.put("sampleHouses", List.of(
            Map.of(
                "id", 1L,
                "name", "Sample House 1",
                "description", "A beautiful 3-bedroom house",
                "price", 250000.0,
                "location", "123 Main St",
                "bedrooms", 3,
                "bathrooms", 2,
                "propertyType", "Single Family",
                "amenities", "Garage, Garden",
                "imageUrl", "https://example.com/house1.jpg"
            ),
            Map.of(
                "id", 2L,
                "name", "Sample House 2",
                "description", "Modern 4-bedroom house",
                "price", 350000.0,
                "location", "456 Oak Ave",
                "bedrooms", 4,
                "bathrooms", 3,
                "propertyType", "Single Family",
                "amenities", "Pool, Fireplace",
                "imageUrl", "https://example.com/house2.jpg"
            )
        ));
        
        return ResponseEntity.ok(testData);
    }
}