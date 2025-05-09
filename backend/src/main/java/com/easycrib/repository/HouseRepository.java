package com.easycrib.repository;

import com.easycrib.model.House;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends MongoRepository<House, String> {
} 