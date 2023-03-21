package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.repositories.NotificationRepository;
import com.abdo.rommatesfinder.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.DeleteExchange;

import java.util.List;

@RestController
@RequestMapping("/notifications")
@CrossOrigin("http://localhost:3000")
public class NotificationController {
    private final NotificationService notificationService;

    @Autowired
    NotificationRepository notificationRepository;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @GetMapping("/{id}")
    public List<Notification> getNotificationById(@PathVariable String id) {
        return notificationService.getNotificationByReceiver(id);
    }


@DeleteMapping("/{id}")
public void DeleteNotifcationsUser(@PathVariable String id) {
    List<Notification> notificatios=notificationService.getNotificationByReceiver(id);
    for(int i=0;i<notificatios.size();i++){
     notificationRepository.delete(notificatios.get(i));
    }


}
    @PostMapping
    public Notification createNotification(@RequestBody Notification notification) {
        return notificationService.createNotification(notification);
    }
}

