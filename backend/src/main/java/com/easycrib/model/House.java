package com.easycrib.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Embedded;
import jakarta.persistence.Embeddable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Column;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "house_name")
    private String name;
    
    private String description;
    private Double price;
    private String location;
    private Integer bedrooms;
    private Integer bathrooms;
    private String propertyType;
    
    @ElementCollection
    @CollectionTable(name = "house_amenities", joinColumns = @JoinColumn(name = "house_id"))
    @Column(name = "amenity")
    private List<String> amenities;
    
    private String imageUrl;
    
    // Additional fields
    private String paymentPeriod;
    private String furnishing;
    private String internet;
    private String parking;
    private Boolean billsIncluded;
    private Double deposit;
    private Integer minimumStay;
    private String availableFrom;
    
    @Embedded
    private LandlordInfo landlord;
    
    @ElementCollection
    @CollectionTable(name = "house_nearby_facilities", joinColumns = @JoinColumn(name = "house_id"))
    private List<NearbyFacility> nearbyFacilities;
    
    private String distanceToUniversity;
    private String nearestUniversity;
    
    @Data
    @Embeddable
    public static class LandlordInfo {
        @Column(name = "landlord_name")
        private String name;
        
        private Integer responseRate;
        private String responseTime;
        private String phone;
    }
    
    @Data
    @Embeddable
    public static class NearbyFacility {
        @Column(name = "facility_name")
        private String name;
        
        private String distance;
        private String type;
    }
} 