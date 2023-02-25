package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.Notification;
import com.abdo.rommatesfinder.models.RentRequest;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.NotificationRepository;
import com.abdo.rommatesfinder.repositories.RentRequestRepository;
import com.abdo.rommatesfinder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service

public class RentRequestService {


@Autowired
 RentRequestRepository rentRequestRepository;
@Autowired
    UserRepository userRepository;
@Autowired
    NotificationRepository notificationRepository;

        public RentRequest sendRentRequest(String request,String fromUser, String toUser) {
            RentRequest rentRequest = new  RentRequest();
            rentRequest .setFromUser(fromUser);
            rentRequest .setToUser(toUser);
            rentRequest.setRequest(request);
            rentRequest.setAccepted(false);
          return  rentRequestRepository.save( rentRequest );
        }

   public Notification acceptRentRequest(String requestId){
            RentRequest request =rentRequestRepository.findById(requestId).get();
            request.setAccepted(true);
            rentRequestRepository.save(request);
              Notification noti= sendNotification(request);
            return noti;
   }
    private Notification sendNotification(RentRequest rentRequest) {
        User sender =userRepository.findById(rentRequest.getFromUser()).get();
        String message = "Your friend request to " + userRepository.findById(rentRequest.getToUser()).get().getUsername() + " has been accepted.";

        // create notification object
        Notification notification = new Notification();
        notification.setSender(sender);
        notification.setReceiver(sender);
        notification.setMsg(message);
        notification.setTimestamp(LocalDateTime.now());

        // save notification to database
      return notificationRepository.save(notification);

    }


    public List<Notification> getNotificationsForUser(User user) {
        return notificationRepository.findByReceiverAndReadFalseOrderByTimestampDesc(user);
    }


}
