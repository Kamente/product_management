package com.productmanagement.backend.service;

import com.productmanagement.backend.dto.request.ProductRequest;
import com.productmanagement.backend.dto.response.ProductResponse;
import org.springframework.data.domain.Page;
// import java.util.List;

import java.math.BigDecimal;

public interface ProductService {
    ProductResponse createProduct(ProductRequest request);
    Page<ProductResponse> getAllProducts(
            int page,
            int size,
            String sortBy,
            String direction);
    Page<ProductResponse> searchProducts(
            String keyword,
            String category,
            BigDecimal minPrice,
            BigDecimal maxPrice,
            int page,
            int size,
            String sortBy,
            String direction
    );
    ProductResponse getProductById(Long Id);
    ProductResponse updateProduct (Long Id, ProductRequest request);
    void deleteProduct (Long Id);
}
