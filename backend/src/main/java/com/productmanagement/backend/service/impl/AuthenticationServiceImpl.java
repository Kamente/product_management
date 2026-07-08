package com.productmanagement.backend.service.impl;

import com.productmanagement.backend.dto.request.LoginRequest;
import com.productmanagement.backend.dto.response.LoginResponse;
import com.productmanagement.backend.entity.User;
import com.productmanagement.backend.exception.ResourceNotFoundException;
import com.productmanagement.backend.repository.UserRepository;
import com.productmanagement.backend.security.JwtService;
import com.productmanagement.backend.service.AuthenticationService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public AuthenticationServiceImpl(UserRepository repository,
                                     PasswordEncoder passwordEncoder,
                                     JwtService jwtService){

        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;

    }

    @Override
    public LoginResponse login(LoginRequest request){

        User user = repository.findByUsername(request.getUsername())

                .orElseThrow(() ->

                        new ResourceNotFoundException("Invalid username or password"));

        if(!passwordEncoder.matches(request.getPassword(),
                user.getPassword())){

            throw new ResourceNotFoundException("Invalid username or password");

        }

        String token = jwtService.generateToken(user.getUsername());

        return new LoginResponse(

                token,

                user.getUsername(),

                user.getRole().name()

        );

    }

}