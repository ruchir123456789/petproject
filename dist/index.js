import express from "express";
const app = express();
import dotenv from "dotenv";
import router from "../dist/routers/authroute.js";
import routers from "./routers/dogroute.js";
import userrouter from "./routers/userrouter.js";
//dotenv codfig
dotenv.config();
const port = process.env.PORT;
//use middelware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/dogs", routers);
app.use("/user", userrouter);
app.get("/", (req, res) => {
    res.send("dog data");
});
app.listen(port, () => {
    console.log(`your server running on the port ad the link http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map