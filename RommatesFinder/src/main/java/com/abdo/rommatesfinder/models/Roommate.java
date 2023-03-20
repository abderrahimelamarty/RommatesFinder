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
public class Roommate {
    @Id
    String id;
    String Ville;
    String image;
    String Description;
    String userId;
    List<String> interests;
    String Username;
    int Prix;
}
