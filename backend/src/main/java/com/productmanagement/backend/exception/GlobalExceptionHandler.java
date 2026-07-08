package com.productmanagement.backend.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestControllerAdvice

public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)

    @ResponseStatus(HttpStatus.NOT_FOUND)

    public Map<String,String> handle(EntityNotFoundException e){

        return Map.of(
                "error",
                e.getMessage()
        );

    }

}