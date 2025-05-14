package com.easycrib.controller;

import com.easycrib.model.House;
import com.easycrib.model.House.LandlordInfo;
import com.easycrib.model.House.NearbyFacility;
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
                    // Update basic fields
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
                    
                    // Update new fields
                    if (houseDetails.getPaymentPeriod() != null) {
                        existingHouse.setPaymentPeriod(houseDetails.getPaymentPeriod());
                    }
                    if (houseDetails.getFurnishing() != null) {
                        existingHouse.setFurnishing(houseDetails.getFurnishing());
                    }
                    if (houseDetails.getInternet() != null) {
                        existingHouse.setInternet(houseDetails.getInternet());
                    }
                    if (houseDetails.getParking() != null) {
                        existingHouse.setParking(houseDetails.getParking());
                    }
                    if (houseDetails.getBillsIncluded() != null) {
                        existingHouse.setBillsIncluded(houseDetails.getBillsIncluded());
                    }
                    if (houseDetails.getDeposit() != null) {
                        existingHouse.setDeposit(houseDetails.getDeposit());
                    }
                    if (houseDetails.getMinimumStay() != null) {
                        existingHouse.setMinimumStay(houseDetails.getMinimumStay());
                    }
                    if (houseDetails.getAvailableFrom() != null) {
                        existingHouse.setAvailableFrom(houseDetails.getAvailableFrom());
                    }
                    if (houseDetails.getDistanceToUniversity() != null) {
                        existingHouse.setDistanceToUniversity(houseDetails.getDistanceToUniversity());
                    }
                    if (houseDetails.getNearestUniversity() != null) {
                        existingHouse.setNearestUniversity(houseDetails.getNearestUniversity());
                    }
                    
                    // Update embedded objects
                    if (houseDetails.getLandlord() != null) {
                        existingHouse.setLandlord(houseDetails.getLandlord());
                    }
                    if (houseDetails.getNearbyFacilities() != null) {
                        existingHouse.setNearbyFacilities(houseDetails.getNearbyFacilities());
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
        
        // Create a sample house
        House sampleHouse = new House();
        sampleHouse.setId(1L);
        sampleHouse.setName("Sample House 1");
        sampleHouse.setDescription("A beautiful 3-bedroom house");
        sampleHouse.setPrice(250000.0);
        sampleHouse.setLocation("123 Main St");
        sampleHouse.setBedrooms(3);
        sampleHouse.setBathrooms(2);
        sampleHouse.setPropertyType("Single Family");
        sampleHouse.setAmenities(List.of("Garage", "Garden"));
        sampleHouse.setImageUrl("https://example.com/house1.jpg");
        sampleHouse.setPaymentPeriod("month");
        sampleHouse.setFurnishing("furnished");
        sampleHouse.setInternet("included");
        sampleHouse.setParking("available");
        sampleHouse.setBillsIncluded(true);
        sampleHouse.setDeposit(1000.0);
        sampleHouse.setMinimumStay(6);
        sampleHouse.setAvailableFrom("2024-04-01");
        sampleHouse.setDistanceToUniversity("2.5");
        sampleHouse.setNearestUniversity("University of Example");
        
        // Create landlord info
        LandlordInfo landlord = new LandlordInfo();
        landlord.setName("John Doe");
        landlord.setResponseRate(95);
        landlord.setResponseTime("within 1 hour");
        sampleHouse.setLandlord(landlord);
        
        // Create nearby facilities
        List<NearbyFacility> facilities = List.of(
            createNearbyFacility("Supermarket", "0.5", "shopping"),
            createNearbyFacility("Bus Stop", "0.2", "transport")
        );
        sampleHouse.setNearbyFacilities(facilities);
        
        testData.put("sampleHouses", List.of(sampleHouse));
        return ResponseEntity.ok(testData);
    }
    
    private NearbyFacility createNearbyFacility(String name, String distance, String type) {
        NearbyFacility facility = new NearbyFacility();
        facility.setName(name);
        facility.setDistance(distance);
        facility.setType(type);
        return facility;
    }
}