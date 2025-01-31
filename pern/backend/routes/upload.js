const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const fs = require("fs");
const Task = require("../models/task");
const Agent = require("../models/agent");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  const file = xlsx.readFile(req.file.path);
  const sheet = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

  const agents = await Agent.findAll();
  if (agents.length === 0)
    return res.status(400).json({ error: "No agents found" });

  for (let i = 0; i < sheet.length; i++) {
    const agent = agents[i % agents.length];
    await Task.create({ ...sheet[i], agentId: agent.id });
  }

  fs.unlinkSync(req.file.path);
  res.json({ message: "Tasks distributed successfully" });
});

module.exports = router;
