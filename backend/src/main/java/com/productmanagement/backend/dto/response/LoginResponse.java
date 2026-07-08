package com.productmanagement.backend.dto.response;

import com.productmanagement.backend.entity.Role;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private Long id;
    private String username;
    private String email;
    private Role role;
    private String message;
}