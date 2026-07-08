package com.productmanagement.backend.service.impl;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;
import com.productmanagement.backend.dto.request.UpdateUserRequest;
import com.productmanagement.backend.exception.DuplicateResourceException;
import com.productmanagement.backend.exception.ResourceNotFoundException;
import com.productmanagement.backend.entity.Role;
import com.productmanagement.backend.entity.User;
import com.productmanagement.backend.repository.UserRepository;
import com.productmanagement.backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository repository,
                           PasswordEncoder passwordEncoder) {

        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserResponse register(RegisterRequest request){

        if(repository.existsByUsername(request.getUsername()))
            throw new DuplicateResourceException("Username already exists");

        if(repository.existsByEmail(request.getEmail()))
            throw new DuplicateResourceException("Email already exists");

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        repository.save(user);

        return map(user);

    }

    @Override
    public List<UserResponse> getAllUsers(){

        return repository.findAll()
                .stream()
                .map(this::map)
                .toList();

    }

    @Override
    public UserResponse getUser(Long id){

        User user = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        return map(user);
    }


    @Override
    public UserResponse getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();

        User user = repository.findByUsername(username)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        return map(user);
    }

    @Override
    public UserResponse updateUser(Long id,
                                   UpdateUserRequest request){

        User user = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        repository.save(user);

        return map(user);
    }

    @Override
    public void deleteUser(Long id){

        User user = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        repository.delete(user);
    }

    @Override
    public UserResponse promoteToAdmin(Long id){

        User user = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        user.setRole(Role.ADMIN);
        repository.save(user);
        return map(user);

    }

    @Override
    public UserResponse demoteToUser(Long id){

        User user = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        user.setRole(Role.USER);
        repository.save(user);

        return map(user);

    }

    private UserResponse map(User user){
        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;
    }

}