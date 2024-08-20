const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

const Data = sequelize.define(
  "Data",
  {
    apiUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apiKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uniqueId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datacore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataclass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recordPerPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentPageNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recordCount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fields: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "data", // Set the table name to lowercase
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
  }
);

// Setup the association
User.hasOne(Data, { foreignKey: "userId" });
Data.belongsTo(User, { foreignKey: "userId" });

module.exports = Data;
