import jwt from "jsonwebtoken";
import { decode } from "punycode";
const secretkey = process.env.SECRET_KET || "mysecretkey@123";
const authenticateuser = async (req, res, next) => {
    const token = req.headers["authorization"]?.split(' ')[1];
    if (!token) {
        return res.status(500).send({
            message: "token not generated "
        });
    }
    jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                message: "token not verified"
            });
        }
        else {
            req.user = decoded;
            // req.user.email = decoded; //circular loop
            console.log(req.user);
            next();
        }
    });
};
const isadmin = async (req, res, next) => {
    if (req.user.type !== "admin") {
        return res.status(401).send({
            message: "unauthorised user"
        });
    }
    next();
};
export { authenticateuser, isadmin };
//# sourceMappingURL=authmiddleware.js.map