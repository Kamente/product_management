import api from "../api/axios";

export const getProducts = (
    page = 0,
    size = 10,
    sortBy = "id",
    direction = "asc"
) =>
    api.get("/products", {
        params: { page, size, sortBy, direction }
    });

export const getProduct = (id) =>
    api.get(`/products/${id}`);

export const createProduct = (product) =>
    api.post("/products", product);

export const updateProduct = (id, product) =>
    api.put(`/products/${id}`, product);

export const deleteProduct = (id) =>
    api.delete(`/products/${id}`);

export const searchProducts = (
    keyword,
    category = "",
    minPrice = "",
    maxPrice = "",
    page = 0,
    size = 10
) =>
    api.get("/products/search", {
        params: {
            keyword,
            category,
            minPrice,
            maxPrice,
            page,
            size
        }
    });