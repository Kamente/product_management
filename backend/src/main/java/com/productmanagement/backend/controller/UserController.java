package com.productmanagement.backend.controller;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;
import com.productmanagement.backend.dto.request.UpdateUserRequest;
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
    @GetMapping("/{id}")
    public UserResponse getUser(@PathVariable Long id){

        return service.getUser(id);

    }

    @PutMapping("/{id}")
    public UserResponse updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request){

        return service.updateUser(id, request);

    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){

        service.deleteUser(id);

    }

    @PutMapping("/{id}/promote")
    public UserResponse promote(@PathVariable Long id){

        return service.promoteToAdmin(id);

    }

    @PutMapping("/{id}/demote")
    public UserResponse demote(@PathVariable Long id){

        return service.demoteToUser(id);

    }

}