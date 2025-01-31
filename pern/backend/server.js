const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
const agentRoutes = require("./routes/agent");
const uploadRoutes = require("./routes/upload");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/upload", uploadRoutes);

sequelize.sync().then(() => console.log("Database connected"));

app.listen(5000, () => console.log("Server running on port 5000"));
