package com.toprefunder.refund.refundWebAPIServer.registration.signup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SignupRepository extends JpaRepository<SignupEntity, Integer> {
    SignupEntity findByUsername(String username);

    Optional<SignupEntity> findByEmail(String email);


}
