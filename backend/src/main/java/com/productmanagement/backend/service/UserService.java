package com.productmanagement.backend.service;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse register(RegisterRequest request);
    List<UserResponse> getAllUsers();

}