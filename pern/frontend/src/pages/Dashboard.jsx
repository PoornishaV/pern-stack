import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Grid, Paper } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAgentManagement = () => navigate("/agent-management");
  const handleUploadTasks = () => navigate("/upload-tasks");

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
          maxWidth: 550, // Max width to maintain a balanced layout
          backgroundColor: "#CFD8DC",
          boxShadow: 5, // Subtle shadow for depth
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            color: "Black",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          Welcome to the Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              onClick={handleAgentManagement}
              fullWidth
              sx={{
                padding: "15px",
                fontSize: "17px",
                fontWeight: "bold",
                backgroundColor: "#26A69A", // Vibrant Orange
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#80CBC4", // Darker shade on hover
                  color: "#546E7A",
                },
              }}
            >
              Manage Agents
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              onClick={handleUploadTasks}
              fullWidth
              sx={{
                padding: "15px",
                fontSize: "17px",
                fontWeight: "bold",
                backgroundColor: "#F5F5F5", // Fresh Green
                color: "#26A69A",
                "&:hover": {
                  backgroundColor: "#B0BEC5", // Darker green on hover
                  color: "#009688",
                },
              }}
            >
              Upload Tasks
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
