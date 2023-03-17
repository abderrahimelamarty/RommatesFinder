package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RoomRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
   @Autowired
    RoomRepository roomRepository;
   @Autowired
    UserRepository userRepository;
public List<Room> getRooms(){
    return roomRepository.findAll();
}

public Room addRoom(Room room){
    User user=userRepository.findById(room.getUserId()).get();
room.setUsername(user.getUsername());
    Room NewRoom=roomRepository.save(room);
    return NewRoom;
}
public Optional<Room> getRoom(String id){
    return roomRepository.findById(id);
}
}
