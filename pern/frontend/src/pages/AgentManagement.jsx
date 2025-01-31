import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

const AgentManagement = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCreateAgent = async () => {
    try {
      await axios.post("http://localhost:5000/api/agents/add", {
        name,
        email,
        mobile,
        password,
      });
      setSnackbarMessage("Agent created successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarMessage("Error creating agent");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "97vh",
        background:
          " linear-gradient(-225deg, #FFFEFF 0%,rgb(215, 255, 250) 100%)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 800, // Increased Paper width
          width: "40%", // Ensures Paper uses full available width
          backgroundColor: "#ffffff", // White background
          boxShadow: 5,
          overflow: "hidden", // Prevent overflow inside Paper
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            color: "#26A69A",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          Create New Agent
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Mobile"
          variant="outlined"
          type="text"
          fullWidth
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 4 }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateAgent}
          sx={{
            padding: "15px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#26A69A", // Green background
            color: "#fff",
            "&:hover": {
              backgroundColor: "#009688", // Darker green on hover
            },
          }}
        >
          Create Agent
        </Button>
      </Paper>

      {/* Snackbar Component positioned at the top-center */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top", // Positioning vertically at the top
          horizontal: "center", // Positioning horizontally at the center
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AgentManagement;
