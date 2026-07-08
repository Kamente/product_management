package com.productmanagement.backend.controller;

import com.productmanagement.backend.dto.request.LoginRequest;
import com.productmanagement.backend.dto.response.LoginResponse;
import com.productmanagement.backend.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService){
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public LoginResponse login(
            @Valid
            @RequestBody

            LoginRequest request){

        return authenticationService.login(request);

    }

}