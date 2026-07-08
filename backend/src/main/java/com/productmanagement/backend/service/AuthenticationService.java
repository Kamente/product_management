package com.productmanagement.backend.service;

import com.productmanagement.backend.dto.request.LoginRequest;
import com.productmanagement.backend.dto.response.LoginResponse;

public interface AuthenticationService {

    LoginResponse login(LoginRequest request);

}