const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Agent = require("./agent");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  notes: { type: DataTypes.TEXT, allowNull: true },
  agentId: { type: DataTypes.UUID, references: { model: Agent, key: "id" } },
});

module.exports = Task;
