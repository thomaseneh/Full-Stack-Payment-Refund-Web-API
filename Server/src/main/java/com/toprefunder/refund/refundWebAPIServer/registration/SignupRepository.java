package com.toprefunder.refund.refundWebAPIServer.registration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<SignupEntity, Integer> {
}
