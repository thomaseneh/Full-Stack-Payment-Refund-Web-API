package com.toprefunder.refund.refundWebAPIServer.registration.roles;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Roles, Integer> {

    Optional<Roles> findByRole(String role);
}
