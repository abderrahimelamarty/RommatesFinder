package com.abdo.rommatesfinder.payload.response;



import lombok.Data;

import java.util.List;
@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String id;
    private String username;
    private String email;

    private int budget ;
    private int tele ;
    private String image ;
    private List<String> roles;

    public JwtResponse(String accessToken, String id, String username, String email, List<String> roles,String image,int tele, int budget ) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.budget=budget;
        this.tele=tele;
        this.image=image;
    }






}