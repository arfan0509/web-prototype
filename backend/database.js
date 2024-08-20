const { Sequelize } = require("sequelize");

// Konfigurasi koneksi ke Supabase
const sequelize = new Sequelize(
  "postgres",
  "postgres.nbkivqkbawggozqbqaiz",
  "uWgTv-r64!qMasg",
  {
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    port: 6543,
    dialect: "postgres", // Gunakan dialect postgres untuk Supabase
    logging: false, // Disable logging jika tidak diperlukan
    dialectOptions: {
      ssl: {
        require: true, // Memastikan SSL digunakan
        rejectUnauthorized: false, // Mengabaikan masalah sertifikat self-signed
      },
    },
  }
);

// Test koneksi
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully to Supabase.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

module.exports = sequelize;
