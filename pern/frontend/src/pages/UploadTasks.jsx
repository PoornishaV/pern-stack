import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Input,
  Snackbar,
  Alert,
} from "@mui/material";

const UploadTasks = () => {
  const [file, setFile] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadTasks = async () => {
    if (!file) {
      setSnackbarMessage("Please select a file before uploading.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // This header is important for file uploads
          },
        }
      );
      setSnackbarMessage("Tasks uploaded and distributed successfully");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Error uploading tasks");
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
          maxWidth: 500,
          backgroundColor: "#ffffff", // White background
          boxShadow: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            color: "black",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          Upload Tasks
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: 4,
          }}
        >
          <Input
            type="file"
            inputProps={{
              accept: ".csv,.xlsx,.xls", // Restrict file types if needed
            }}
            onChange={handleFileChange}
            sx={{
              display: "none", // Hide default file input button
            }}
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button
              variant="outlined"
              component="span"
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                borderColor: "#26A69A",
                color: "black",
                "&:hover": {
                  borderColor: "#26A69A", // Darker border on hover
                  color: "#26A69A",
                },
                marginBottom: 3,
              }}
            >
              Select File
            </Button>
          </label>
          {file && (
            <Typography
              variant="body1"
              sx={{ marginBottom: 2, color: "#4caf50", fontSize: "14px" }}
            >
              File Selected: {file.name}
            </Typography>
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleUploadTasks}
          fullWidth
          sx={{
            padding: "15px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#26A69A", // Purple background
            color: "#fff",
            "&:hover": {
              backgroundColor: "#26A69A", // Darker purple on hover
            },
          }}
        >
          Upload
        </Button>
      </Paper>

      {/* Snackbar Component */}
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

export default UploadTasks;
