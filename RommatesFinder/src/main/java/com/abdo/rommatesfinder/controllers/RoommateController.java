package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Roommate;
import com.abdo.rommatesfinder.services.RoommateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roommates")
@CrossOrigin("http://localhost:3000")
public class RoommateController {
    private final RoommateService roommateService;

    @Autowired
    public RoommateController(RoommateService roommateService) {
        this.roommateService = roommateService;
    }

    @GetMapping("/")
    public List<Roommate> getAllRoommates() {
        return roommateService.getAllRoommates();
    }

    @GetMapping("/{id}")
    public Roommate getRoommateById(@PathVariable String id) {
        return roommateService.getRoommateById(id);
    }

    @PostMapping("/")
    public Roommate addOrUpdateRoommate(@RequestBody Roommate roommate) {

        return roommateService.addOrUpdateRoommate(roommate);
    }

    @DeleteMapping("/{id}")
    public void deleteRoommateById(@PathVariable String id) {
        roommateService.deleteRoommateById(id);
    }
}
