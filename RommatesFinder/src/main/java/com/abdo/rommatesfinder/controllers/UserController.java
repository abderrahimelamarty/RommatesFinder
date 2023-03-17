package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.models.RentRequest;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RentRequestRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import com.abdo.rommatesfinder.services.RentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("http://localhost:3000")
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
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") String userId) {
        User user = userRepository.findById(userId).get();
        return ResponseEntity.ok(user);
    }

}
