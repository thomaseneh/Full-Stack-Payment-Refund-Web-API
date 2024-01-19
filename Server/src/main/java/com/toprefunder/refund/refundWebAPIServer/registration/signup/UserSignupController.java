package com.toprefunder.refund.refundWebAPIServer.registration.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:5173")
public class UserSignupController {

   SignupService service;

    @Autowired
    public UserSignupController(SignupService service) {
        this.service = service;
    }

    @GetMapping("/user/login")
    public String login() {
        return "login";
    }

    @PutMapping("/user/update/{id}")
    ResponseEntity<SignupEntity> updateUser(@PathVariable int id, @RequestBody SignupEntity userToUpdate) {
        SignupEntity userUpdate = service.updateUser(id, userToUpdate);
        return new ResponseEntity<>(userUpdate, HttpStatus.ACCEPTED);
    }

    @PostMapping("/user/register")
    public ResponseEntity<SignupEntity> newUser(@RequestBody SignupEntity user){

        return new ResponseEntity<>(service.saveUser(user), HttpStatus.CREATED);
    }
}
