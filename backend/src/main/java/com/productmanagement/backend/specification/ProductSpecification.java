package com.productmanagement.backend.specification;

import com.productmanagement.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class ProductSpecification {

    public static Specification<Product> keyword(String keyword){
        return (root, query, builder) ->
                keyword == null || keyword.isBlank()
                        ? builder.conjunction()
                        : builder.like(
                        builder.lower(root.get("name")),

                        "%" + keyword.toLowerCase() + "%"
                );
    }

    public static Specification<Product> category(String category){
        return (root, query, builder) ->

                category == null || category.isBlank()
                        ? builder.conjunction()
                        : builder.equal(
                        builder.lower(root.get("category")),
                        category.toLowerCase()
                );
    }

    public static Specification<Product> minPrice(BigDecimal price){
        return (root, query, builder) ->

                price == null
                        ? builder.conjunction()
                        : builder.greaterThanOrEqualTo(
                        root.get("price"),
                        price
                );
    }

    public static Specification<Product> maxPrice(BigDecimal price){

        return (root, query, builder) ->

                price == null
                        ? builder.conjunction()
                        : builder.lessThanOrEqualTo(
                        root.get("price"),
                        price
                );

    }
}