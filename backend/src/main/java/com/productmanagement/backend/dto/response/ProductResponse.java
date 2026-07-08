package com.productmanagement.backend.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
public class ProductResponse {

    private Long id;

    private String name;

    private String description;

    private String category;

    private BigDecimal price;

    private Integer quantity;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}