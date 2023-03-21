package com.abdo.rommatesfinder.repositories;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends MongoRepository<Notification,String> {
    List<Notification> findByReceiverAndReadFalseOrderByTimestampDesc(User receiver);

    List<Notification> findByReceiver(String id);
}
