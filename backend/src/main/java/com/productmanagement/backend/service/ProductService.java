package com.productmanagement.backend.service;

import com.productmanagement.backend.dto.request.ProductRequest;
import com.productmanagement.backend.dto.response.ProductResponse;

import java.util.List;

public interface ProductService {
    ProductResponse createProduct(ProductRequest request);
    List<ProductResponse> getAllProducts();
    ProductResponse getProductById(Long Id);
    ProductResponse updateProduct (Long Id, ProductRequest request);
    void deleteProduct (Long Id);
}
