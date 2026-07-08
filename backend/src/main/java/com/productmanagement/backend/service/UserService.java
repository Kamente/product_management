package com.productmanagement.backend.service;

import com.productmanagement.backend.dto.request.RegisterRequest;
import com.productmanagement.backend.dto.response.UserResponse;
import com.productmanagement.backend.dto.request.UpdateUserRequest;

import java.util.List;

public interface UserService {
    UserResponse register(RegisterRequest request);
    List<UserResponse> getAllUsers();
    UserResponse getUser(Long id);
    UserResponse updateUser(Long id, UpdateUserRequest request);
    void deleteUser(Long id);
    UserResponse promoteToAdmin(Long id);
    UserResponse demoteToUser(Long id);
    UserResponse getCurrentUser ();
}