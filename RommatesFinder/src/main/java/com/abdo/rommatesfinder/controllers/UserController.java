package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    UserRepository userRepository;


    @GetMapping("/users/{id}")
    public ResponseEntity<Optional> getUser(@PathVariable("id") String userId) {
         Optional user = userRepository.findById(userId);
        return ResponseEntity.ok(user);
    }

}
