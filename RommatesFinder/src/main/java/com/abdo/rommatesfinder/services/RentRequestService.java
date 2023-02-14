package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.RentRequest;
import com.abdo.rommatesfinder.models.User;
import com.abdo.rommatesfinder.repositories.RentRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class RentRequestService {


@Autowired
 RentRequestRepository rentRequestRepository;


        public RentRequest sendRentRequest(String request,String fromUser, String toUser) {
            RentRequest rentRequest = new  RentRequest();
            rentRequest .setFromUser(fromUser);
            rentRequest .setToUser(toUser);
            rentRequest.setRequest(request);
          return  rentRequestRepository.save( rentRequest );
        }

}
