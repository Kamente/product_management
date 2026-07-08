package com.productmanagement.backend.service.impl;

import com.productmanagement.backend.dto.request.ProductRequest;
import com.productmanagement.backend.dto.response.ProductResponse;
import com.productmanagement.backend.entity.Product;
import com.productmanagement.backend.repository.ProductRepository;
import com.productmanagement.backend.service.ProductService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;

    public ProductServiceImpl(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public ProductResponse createProduct(ProductRequest request) {

        Product product = Product.builder()
                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .price(request.getPrice())
                .quantity(request.getQuantity())
                .build();

        repository.save(product);

        return mapToResponse(product);
    }

    @Override
    public List<ProductResponse> getAllProducts() {

        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public ProductResponse getProductById(Long id) {

        Product product = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

        return mapToResponse(product);
    }

    @Override
    public ProductResponse updateProduct(Long id, ProductRequest request) {

        Product product = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setCategory(request.getCategory());
        product.setPrice(request.getPrice());
        product.setQuantity(request.getQuantity());

        repository.save(product);

        return mapToResponse(product);
    }

    @Override
    public void deleteProduct(Long id) {

        Product product = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

        repository.delete(product);

    }

    private ProductResponse mapToResponse(Product product) {

        ProductResponse response = new ProductResponse();

        response.setId(product.getId());
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setCategory(product.getCategory());
        response.setPrice(product.getPrice());
        response.setQuantity(product.getQuantity());
        response.setCreatedAt(product.getCreatedAt());
        response.setUpdatedAt(product.getUpdatedAt());

        return response;

    }

}