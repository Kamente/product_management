import api from "../api/axios";

export const getUsers=()=>api.get("/users");

export const createUser=(user)=>
api.post("/users/register",user);

export const updateUser=(id,user)=>
api.put(`/users/${id}`,user);

export const deleteUser=(id)=>
api.delete(`/users/${id}`);

export const promoteUser=(id)=>
api.put(`/users/${id}/promote`);

export const demoteUser=(id)=>
api.put(`/users/${id}/demote`);

export const getProfile=()=>
api.get("/users/profile");