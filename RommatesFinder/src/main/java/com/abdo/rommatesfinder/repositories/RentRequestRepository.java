package com.abdo.rommatesfinder.repositories;

import com.abdo.rommatesfinder.models.RentRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RentRequestRepository extends MongoRepository<RentRequest,String> {
    List<RentRequest> findByToUser(String userId);
}
