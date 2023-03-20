package com.abdo.rommatesfinder.repositories;

import com.abdo.rommatesfinder.models.Chat;
import com.abdo.rommatesfinder.models.Roommate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoommateRepository extends MongoRepository<Roommate, String> {


}
