package com.productmanagement.backend.service.impl;

import com.productmanagement.backend.dto.request.ProductRequest;
import com.productmanagement.backend.dto.response.ProductResponse;
// import com.productmanagement.backend.exception.DuplicateResourceException;
import com.productmanagement.backend.exception.ResourceNotFoundException;
import com.productmanagement.backend.entity.Product;
import com.productmanagement.backend.repository.ProductRepository;
import com.productmanagement.backend.service.ProductService;
// import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

// import java.util.List;

import com.productmanagement.backend.specification.ProductSpecification;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;


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
    public Page<ProductResponse> getAllProducts(
            int page,
            int size,
            String sortBy,
            String direction) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable =
                PageRequest.of(page, size, sort);

        return repository.findAll(pageable)
                .map(this::mapToResponse);
    }

    @Override
    public ProductResponse getProductById(Long id) {

        Product product = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        return mapToResponse(product);
    }

    @Override
    public ProductResponse updateProduct(Long id, ProductRequest request) {

        Product product = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

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
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        repository.delete(product);

    }

    @Override
    public Page<ProductResponse> searchProducts(
            String keyword,
            String category,
            BigDecimal minPrice,
            BigDecimal maxPrice,
            int page,
            int size,
            String sortBy,
            String direction){
        Sort sort = direction.equalsIgnoreCase("desc")

                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();
        Pageable pageable =
                PageRequest.of(page,size,sort);
        Specification<Product> specification =
                Specification
                        .where(ProductSpecification.keyword(keyword))
                        .and(ProductSpecification.category(category))
                        .and(ProductSpecification.minPrice(minPrice))
                        .and(ProductSpecification.maxPrice(maxPrice));

        return repository.findAll(specification,pageable)

                .map(this::mapToResponse);
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