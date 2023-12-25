package com.toprefunder.refund.refundWebAPIServer.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class SignupController {

    @Autowired
    SignupRepository repository;

    @GetMapping("/allusers")
    public ResponseEntity<List<SignupEntity>> allUsers(){
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/newuser")
    public ResponseEntity<SignupEntity> newUser(@RequestBody SignupEntity user){
        return new ResponseEntity<>(repository.save(user), HttpStatus.CREATED);
    }
}
