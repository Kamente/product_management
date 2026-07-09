import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const role = localStorage.getItem("role");

        if (token && username && role) {
            setUser({
                token,
                username,
                role
            });

        }

        setLoading(false);

    }, []);

    const login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        setUser(data);

    };

    const logout = () => {
        localStorage.clear();
        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{
                user,
                login,
                logout,
                loading
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);