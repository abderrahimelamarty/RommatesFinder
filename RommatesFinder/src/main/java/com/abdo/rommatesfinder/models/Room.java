package com.abdo.rommatesfinder.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Room {
    @Id
    String id;
    String Ville;
    String images;
    String adresse;
    String Description;
    String userId;
    String Username;
    int Prix;
}
