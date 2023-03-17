package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Message;
import com.abdo.rommatesfinder.repositories.MessageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin("http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<Message> addMessage(@RequestBody Message message) {
        Message newMessage = messageRepository.save(message);
        return new ResponseEntity<>(newMessage, HttpStatus.OK);
    }

    @GetMapping("/{chatId}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String chatId) {
        List<Message> messages = messageRepository.findByChatId(chatId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
