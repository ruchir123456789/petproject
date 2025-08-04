import express from "express";
import { authenticateuser } from "../middlewares/authmiddleware.js";
import { getuserdata, updateuserdata, deleteuserdata } from "../controllers/usercontroller.js";
const userrouter = express.Router();
userrouter.get("/getdata", authenticateuser, getuserdata);
userrouter.put("/update", authenticateuser, updateuserdata);
userrouter.delete("/delete", authenticateuser, deleteuserdata);
export default userrouter;
//# sourceMappingURL=userrouter.js.map