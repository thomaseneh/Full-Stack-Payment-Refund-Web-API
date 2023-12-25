package com.toprefunder.refund.refundWebAPIServer.registration;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Setter
@Getter
@Entity
@Table(name = "signup")
public class SignupEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "signup_id")
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private String email;
    private String password;
    @Column(name = "confirm_password")
    private String confirmPassword;
    private String checkbox;

    public SignupEntity() {
        super();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SignupEntity that = (SignupEntity) o;
        return id == that.id && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(email, that.email) && Objects.equals(password, that.password) && Objects.equals(confirmPassword, that.confirmPassword) && Objects.equals(checkbox, that.checkbox);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, password, confirmPassword, checkbox);
    }

    @Override
    public String toString() {
        return "SignupEntity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", confirmPassword='" + confirmPassword + '\'' +
                ", checkbox='" + checkbox + '\'' +
                '}';
    }
}
