import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
  Divider,
  CssBaseline,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "97vh",
        background: " linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          backgroundColor: "#CFD8DC",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: "#26A69A" }}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom fontFamily={"serif"}>
          Sign In
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: 2 }} />
        <Box component="form" noValidate onSubmit={(e) => e.preventDefault()}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            sx={{ marginBottom: 2 }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#26A69A",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
