package com.productmanagement.backend.controller;

import com.productmanagement.backend.dto.request.ProductRequest;
import com.productmanagement.backend.dto.response.ProductResponse;
import com.productmanagement.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/products")

public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping

    @ResponseStatus(HttpStatus.CREATED)

    public ProductResponse create(

            @Valid @RequestBody ProductRequest request) {

        return service.createProduct(request);

    }

    @GetMapping

    public List<ProductResponse> getAll() {

        return service.getAllProducts();

    }

    @GetMapping("/{id}")

    public ProductResponse getOne(

            @PathVariable Long id) {

        return service.getProductById(id);

    }

    @PutMapping("/{id}")

    public ProductResponse update(

            @PathVariable Long id,

            @Valid @RequestBody ProductRequest request) {

        return service.updateProduct(id, request);

    }

    @DeleteMapping("/{id}")

    @ResponseStatus(HttpStatus.NO_CONTENT)

    public void delete(

            @PathVariable Long id) {

        service.deleteProduct(id);

    }

}