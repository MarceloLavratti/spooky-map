import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const PORT = process.env.PORT || 3333;

connectDatabase();

app.listen(PORT, () => {
    console.log(`🚀 Server rodando na porta ${PORT}`);
});
