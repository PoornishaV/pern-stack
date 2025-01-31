const express = require("express");
const bcrypt = require("bcryptjs");
const Agent = require("../models/agent");

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const agent = await Agent.create({
    name,
    email,
    mobile,
    password: hashedPassword,
  });

  res.json(agent);
});

module.exports = router;
