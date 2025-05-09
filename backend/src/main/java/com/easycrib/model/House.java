package com.easycrib.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "houses")
@Data
public class House {
    @Id
    private String id;
    
    private String title;
    private String description;
    private Double price;
    private String location;
    private Integer bedrooms;
    private Integer bathrooms;
    private Double area;
    private String imageUrl;
} 