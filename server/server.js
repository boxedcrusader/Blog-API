import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blogRoutes.js";

env.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use("/blog", blogRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
