package com.productmanagement.backend.service.impl;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;
import com.productmanagement.backend.entity.Role;
import com.productmanagement.backend.entity.User;
import com.productmanagement.backend.repository.UserRepository;
import com.productmanagement.backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
            throw new RuntimeException("Username already exists");

        if(repository.existsByEmail(request.getEmail()))
            throw new RuntimeException("Email already exists");

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

    private UserResponse map(User user){

        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;

    }

}