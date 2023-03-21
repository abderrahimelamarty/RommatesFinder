package com.abdo.rommatesfinder.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Notification {
    @Id
    String id;
    String sender;
    String receiver;
    String msg;
    private LocalDateTime timestamp;
    private boolean read;
}
