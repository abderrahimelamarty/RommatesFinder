package com.abdo.rommatesfinder.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Message {
    @Id

    private String id;


    private String chatId;


    private String senderId;


    private String text;

    public Message(String chatId, String senderId, String text) {
        this.chatId = chatId;
        this.senderId = senderId;
        this.text = text;
    }

    // getters and setters
}

