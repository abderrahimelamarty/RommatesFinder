package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.Roommate;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RoommateRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoommateService {
    private final RoommateRepository roommateRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    public RoommateService(RoommateRepository roommateRepository) {
        this.roommateRepository = roommateRepository;
    }

    public List<Roommate> getAllRoommates() {
        return roommateRepository.findAll();
    }

    public Roommate getRoommateById(String id) {
        return roommateRepository.findById(id).orElse(null);
    }

    public Roommate addOrUpdateRoommate(Roommate roommate) {
        User user=userRepository.findById(roommate.getUserId()).get();
        roommate.setUsername(user.getUsername());
        System.out.println(roommate.getUsername());
        return roommateRepository.save(roommate);
    }

    public void deleteRoommateById(String id) {
        roommateRepository.deleteById(id);
    }
}
