package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.models.RentRequest;
import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RoomRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import com.abdo.rommatesfinder.services.RentRequestService;
import com.abdo.rommatesfinder.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {
    @Autowired
    RoomService roomService;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    RentRequestService rentRequestService;
    @Autowired
    UserRepository userRepository;
    @GetMapping("/allRooms")
    public ResponseEntity<List<Room>>  getAllRooms(){
        List<Room> rooms=  roomService.getRooms();
        return new ResponseEntity<List<Room>>(rooms, HttpStatus.OK);
    }
    @GetMapping("/Rooms/{id}")
    public ResponseEntity<Room>  getRoom(@PathVariable("id") String id){
        Room room=  roomService.getRoom(id).get();
        return new ResponseEntity<Room>(room, HttpStatus.OK);
    }
    @PostMapping ("/addRoom")
    public ResponseEntity<Room>  addRoom(@RequestBody Room room){
        return new ResponseEntity<Room>(roomService.addRoom(room), HttpStatus.OK);
    }
    @GetMapping("/RoomsByCity/{ville}")
    public ResponseEntity<List<Room>>  getRoomsByCity(@PathVariable("ville") String ville){
        List<Room> rooms=roomService.getRooms();
        List<Room> roomss=new ArrayList<Room>();
        for(int i=0;i<rooms.size();i++){
            if(rooms.get(i).getVille().equals(ville)){
                roomss.add(rooms.get(i));
            }
        }
        return new ResponseEntity<List<Room>>(roomss, HttpStatus.OK);
    }
    @PostMapping ("/bookRoom")
    public ResponseEntity<RentRequest>  bookRoom(@RequestBody RentRequest rentRequest){

        return new ResponseEntity<RentRequest>(rentRequestService.sendRentRequest(rentRequest.getRequest(), rentRequest.getFromUser(), rentRequest.getToUser()), HttpStatus.OK);
    }
    @PostMapping("/{id}/accept")
    public ResponseEntity<Notification> acceptFriendRequest(@PathVariable("id") String rentRequestId) {
        return  new ResponseEntity<Notification>(rentRequestService.acceptRentRequest(rentRequestId),HttpStatus.OK);
    }

}
