package com.toprefunder.refund.refundWebAPIServer.registration.signup;

import com.toprefunder.refund.refundWebAPIServer.registration.roles.RoleRepository;
import com.toprefunder.refund.refundWebAPIServer.registration.roles.Roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class SignupService implements UserDetailsService {

    public SignupRepository repository;
   public PasswordEncoder encoder;
    public RoleRepository roleRepository;

    @Autowired
    public SignupService(SignupRepository repository, PasswordEncoder encoder, RoleRepository roleRepository) {
        this.repository = repository;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SignupEntity users = repository.findByUsername(username);
        if (users == null){
            throw new UsernameNotFoundException("The requested" + username + "not found");
        }
        List<SimpleGrantedAuthority> authorities = users.getRole().stream()
                .map(roles -> new SimpleGrantedAuthority(roles.getRole()))
                .toList();
        return new User(users.getUsername(), users.getPassword(), authorities);
    }

    public SignupEntity saveUser(SignupEntity newUsers) {

        SignupEntity existingUsername = repository.findByUsername(newUsers.getUsername());
        Optional<SignupEntity> existingEmail = repository.findByEmail(newUsers.getEmail());

        if (existingEmail.isEmpty() && existingUsername == null) {
            String hashPassword = encoder.encode(newUsers.getPassword());
            newUsers.setPassword(hashPassword);

            String hashConfirmPassword = encoder.encode(newUsers.getConfirmPassword());
            newUsers.setConfirmPassword(hashConfirmPassword);

            Roles roles = roleRepository.findByRole("USER").orElseGet(this::userRole);
            newUsers.setRole(Collections.singleton(roles));
            return repository.save(newUsers);
        } else {
            throw new RuntimeException("User already exist");
        }
    }
    public SignupEntity updateUser(int id, SignupEntity user) {
        Optional<SignupEntity> userToUpdate = repository.findById(user.getId());

        if (userToUpdate.isPresent()) {
            SignupEntity updatedUser = userToUpdate.get();
            updatedUser.setUsername(user.getUsername());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setPassword(user.getPassword());
            updatedUser.setConfirmPassword(user.getConfirmPassword());
            return repository.save(updatedUser);
        } else {
        throw new UsernameNotFoundException("User does not exist");
    }
}

    private Roles userRole(){
        Roles newRole = new Roles();
        newRole.setRole("USER");
        return roleRepository.save(newRole);
    }

    public List<SignupEntity> findAll() {
        return repository.findAll();
    }

    public SignupEntity findByEmail(String email) {
        return repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User email: " + email + "is not found"));
    }

    public void deleteById(int id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EmptyResultDataAccessException("The user with the id: " + id + "does not exist", 1);
        }
    }

    public SignupEntity saveAdmin(SignupEntity adminEntity) {

        SignupEntity existingUsername = repository.findByUsername(adminEntity.getUsername());

        Optional<SignupEntity> existingEmail = repository.findByEmail(adminEntity.getEmail());

        if (existingEmail.isEmpty() && existingUsername == null){

            String hashPassword = encoder.encode(adminEntity.getPassword());
            adminEntity.setPassword(hashPassword);

            String hasConfirmPassword = encoder.encode(adminEntity.getConfirmPassword());
            adminEntity.setConfirmPassword(hasConfirmPassword);

            Roles adminRole = roleRepository.findByRole("ADMIN").orElseGet(this::adminRole);
            adminEntity.setRole(Collections.singleton(adminRole));

            return repository.save(adminEntity);

        } else {
            throw new RuntimeException("User already exist");
        }
    }

    public SignupEntity updateAdmin(int id, SignupEntity user) {
        Optional<SignupEntity> userToUpdate = repository.findById(user.getId());

        if (userToUpdate.isPresent()) {
            SignupEntity updatedUser = userToUpdate.get();
            updatedUser.setUsername(user.getUsername());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setPassword(user.getPassword());
            updatedUser.setConfirmPassword(user.getConfirmPassword());
            return repository.save(updatedUser);
        } else {
            throw new UsernameNotFoundException("User does not exist");
        }
    }

    private Roles adminRole(){
        Roles newAdminRole = new Roles();
        newAdminRole.setRole("ADMIN");
        return roleRepository.save(newAdminRole);
    }
}

