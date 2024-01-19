package com.toprefunder.refund.refundWebAPIServer.registration.roles;

import com.toprefunder.refund.refundWebAPIServer.registration.signup.SignupEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class Roles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String role;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "roles_signup",
            joinColumns = @JoinColumn(name = "roles_id"),
            inverseJoinColumns = @JoinColumn(name = "signup_id"))
    private Set<SignupEntity> signupEntities;
}
