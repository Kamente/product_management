// test the logged-in user at the moment

package com.productmanagement.backend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/me")
    public String me(Authentication authentication){

        return authentication.getName();

    }

}