package com.abdo.rommatesfinder.repositories;

import com.abdo.rommatesfinder.models.Chat;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends MongoRepository<Chat, String> {
    List<Chat> findByMembersContaining(String username);

    Chat findByMembers(String firstId, String secondId);
}

