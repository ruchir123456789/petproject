import express from "express";
const router = express.Router();
import { createdogdata, getdogdata, updatedogdata, deletedogdata } from "../controllers/dogcontroller.js";
import multers from "../config/multer.js";
router.post("/create", multers.single("image"), createdogdata);
router.get("/getdata", getdogdata);
router.put("/update/:id", multers.single("image"), updatedogdata);
router.delete("/delete/:id", deletedogdata);
export default router;
//# sourceMappingURL=dogroute.js.map