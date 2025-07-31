const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.gofess7.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejs`
    );
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectDB;
