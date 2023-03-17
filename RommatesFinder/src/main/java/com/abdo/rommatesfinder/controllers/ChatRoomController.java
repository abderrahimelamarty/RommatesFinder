package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Chat;
import com.abdo.rommatesfinder.models.ChatRoomRequest;
import com.abdo.rommatesfinder.services.ChatRoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    public ChatRoomController(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    @PostMapping("/chats")
    public ResponseEntity<Chat> createChatRoom(@RequestBody ChatRoomRequest request) {
        Chat chatRoom = chatRoomService.createChatRoom(request.getSenderId(), request.getReceiverId());
        return ResponseEntity.ok(chatRoom);
    }

    @GetMapping("/chat/{userId}")
    public ResponseEntity<List<Chat>> getChatRoomsForUser(@PathVariable String userId) {
        List<Chat> chatRooms = chatRoomService.getChatRoomsForUser(userId);
        return ResponseEntity.ok(chatRooms);
    }

    @GetMapping("/chat/find/{firstId}/{secondId}")
    public ResponseEntity<Chat> findChatRoom(@PathVariable String firstId, @PathVariable String secondId) {
        Chat chatRoom = chatRoomService.findChatRoom(firstId, secondId);
        return ResponseEntity.ok(chatRoom);
    }
}
