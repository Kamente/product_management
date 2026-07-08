package com.productmanagement.backend.controller;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;
import com.productmanagement.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/users")

public class UserController {

    private final UserService service;

    public UserController(UserService service){
        this.service=service;
    }

    @PostMapping("/register")

    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(
            @Valid @RequestBody RegisterRequest request){

        return service.register(request);

    }

    @GetMapping

    public List<UserResponse> getAll(){
        return service.getAllUsers();

    }

}