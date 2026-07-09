import api from "../api/axios";
export const getUsers = () => {
    return api.get("/users");
};

export const getUser = (id) => {
    return api.get(`/users/${id}`);
};

export const createUser = (user) => {
    return api.post("/users/register", user);
};

export const updateUser = (id, user) => {
    return api.put(`/users/${id}`, user);
};

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};

export const promoteUser = (id) => {
    return api.put(`/users/${id}/promote`);
};

export const demoteUser = (id) => {
    return api.put(`/users/${id}/demote`);
};