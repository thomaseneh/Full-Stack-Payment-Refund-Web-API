package com.toprefunder.refund.refundWebAPIServer.registration.signup;

import com.toprefunder.refund.refundWebAPIServer.registration.roles.Roles;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "signup")
public class SignupEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private String email;
    private String username;
    private String password;
    @Column(name = "confirm_password")
    private String confirmPassword;
    private String checkbox;


    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "roles_signup",
            joinColumns = @JoinColumn(name = "signup_id"),
            inverseJoinColumns = @JoinColumn(name = "roles_id"))
    private Set<Roles> role = new HashSet<>();
}
