package com.toprefunder.refund.refundWebAPIServer.registration.signup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminSignupController {

    SignupService adminSignupService;

    @Autowired
    public AdminSignupController(SignupService adminSignupService) {
        this.adminSignupService = adminSignupService;
    }

    @GetMapping("/admin/login")
    public String login() {
        return "login";
    }

    @GetMapping("/allusers")
    public ResponseEntity<List<SignupEntity>> users() {
        List<SignupEntity> allUsers = adminSignupService.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    @GetMapping("/user")
    ResponseEntity<SignupEntity> findUserByEmail(@PathVariable String email) {
        try {
            SignupEntity emailToFind = adminSignupService.findByEmail(email);
            return ResponseEntity.ok(emailToFind);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUserbyId(@PathVariable int id) {
        adminSignupService.deleteById(id);
    }

    @PutMapping("/admin/update/{id}")
    ResponseEntity<SignupEntity> updateAdmin(@PathVariable int id, @RequestBody SignupEntity adminToUpdate) {
        SignupEntity adminUpdate = adminSignupService.updateAdmin(id, adminToUpdate);
        return new ResponseEntity<>(adminUpdate, HttpStatus.ACCEPTED);
    }

    @PostMapping("/admin/register")
    ResponseEntity<SignupEntity> saveAdmin(@RequestBody SignupEntity admin) {
        SignupEntity adminToSave = adminSignupService.saveAdmin(admin);
        return new ResponseEntity<>(adminToSave, HttpStatus.CREATED);
    }

}
