import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";
const getuserdata = async (req, res) => {
    try {
        const data = await prisma.user.findMany();
        if (!data) {
            return res.status(500).send({
                message: "no data found in get data API"
            });
        }
        res.status(200).send({
            message: "user Info",
            data: data
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "error in get data API ",
            error: error
        });
    }
};
const updateuserdata = async (req, res) => {
    try {
        const user = req.user;
        console.log(user);
        const { type, password } = req.body;
        if (!type || !password) {
            return res.status(500).send({
                message: "type passwaord not their needed for update both data"
            });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const data = await prisma.user.update({
            data: { type, password: hashpassword },
            where: { email: user.email }
        });
        if (!data) {
            return res.status(500).send({
                message: "data not updated in UPDATE of user API"
            });
        }
        res.status(200).send({
            message: "user Updated ",
            data: data
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "error in user update API"
        });
    }
};
const deleteuserdata = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(500).send({
                message: "req.user data not faetched in Delete API "
            });
        }
        const data = await prisma.user.delete({
            where: { email: user.email }
        });
        if (!data) {
            return res.status(500).send({
                message: "user not deleted in Delete API "
            });
        }
        res.status(200).send({
            message: "user deleted in delete API ",
            email: user.email
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "errror is user delete API "
        });
    }
};
export { getuserdata, updateuserdata, deleteuserdata };
//# sourceMappingURL=usercontroller.js.map