package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.models.RentRequest;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RentRequestRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import com.abdo.rommatesfinder.services.RentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    UserRepository userRepository;
      @Autowired
      RentRequestService rentRequestService;

    @Autowired
    RentRequestRepository rentRequestRepository;
    @GetMapping("/{userId}/requests")
    public ResponseEntity<List<RentRequest>> getUserFriendRequests(@PathVariable String userId) {
        List<RentRequest> rentRequests = rentRequestRepository.findByToUser(userId);
        return ResponseEntity.ok(rentRequests);
    }
    @GetMapping("/Notification/{userId}")
    public List<Notification> getNotificationsForUser(@PathVariable String userId) {
        User user =userRepository.findById(userId).get() ;
        return rentRequestService.getNotificationsForUser(user);
    }
}
