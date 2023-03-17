package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.Chat;
import com.abdo.rommatesfinder.repositories.ChatRoomRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ChatRoomService {
 private final ChatRoomRepository chatRoomRepository;

 public ChatRoomService(ChatRoomRepository chatRoomRepository) {
  this.chatRoomRepository = chatRoomRepository;
 }

 public List<Chat> getChatRoomsForUser(String username) {
  return chatRoomRepository.findByMembersContaining(username);
 }
 public Chat createChatRoom(String senderId, String receiverId) {
  Chat chatRoom = new Chat();
  chatRoom.setMembers(Arrays.asList(senderId, receiverId));
  return chatRoomRepository.save(chatRoom);
 }



 public Chat findChatRoom(String firstId, String secondId) {
  return chatRoomRepository.findByMembers(firstId, secondId);
 }

}
