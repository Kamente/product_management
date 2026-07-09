import {

    Box,

    Button,

    Card,

    CardContent,

    TextField,

    Typography

} from "@mui/material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import authService from "../../services/authService";

import { useAuth } from "../../contexts/AuthContext";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [form, setForm] = useState({

        username: "",

        password: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const data = await authService.login(form);
            login(data);
            navigate("/dashboard");
        }

        catch (err) {
            alert(
                err.response?.data?.message ||
                "Login Failed"

            );

        }

    };

    return (

        <Box

            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"

            }}

        >

            <Card sx={{ width: 420 }}>

                <CardContent>

                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom

                    >

                        Product Management

                    </Typography>

                    <Typography
                        align="center"
                        sx={{ mb: 3 }}

                    >
                        Sign in

                    </Typography>

                    <form onSubmit={handleSubmit}>

                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            margin="normal"
                            value={form.username}
                            onChange={handleChange}

                        />

                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            margin="normal"
                            value={form.password}
                            onChange={handleChange}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                            type="submit"
                        >
                            Login

                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>

    );

};

export default Login;