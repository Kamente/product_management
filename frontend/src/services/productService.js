import api from "../api/axios";

export const getProducts = (
    page = 0,
    size = 10,
    sortBy = "id",
    direction = "asc"
) => {

    return api.get("/products", {

        params: {
            page,
            size,
            sortBy,
            direction
        }

    });

};

export const createProduct = (product) => {

    return api.post("/products", product);

};

export const updateProduct = (id, product) => {

    return api.put(`/products/${id}`, product);

};

export const deleteProduct = (id) => {

    return api.delete(`/products/${id}`);

};

export const getProduct = (id) => {

    return api.get(`/products/${id}`);

};