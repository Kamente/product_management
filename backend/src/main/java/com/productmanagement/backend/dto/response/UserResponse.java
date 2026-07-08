package com.productmanagement.backend.dto.response;

import com.productmanagement.backend.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private Role role;

}