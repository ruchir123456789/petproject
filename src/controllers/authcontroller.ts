import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();
const secretkey = process.env.SECRET_KEY || "mysecretkey@123"


const userregister = async (req: Request, res: Response) => {

    try {
        const { name, email, type, password } = req.body;

        if (!name || !email || !type || !password) {
            return res.status(400).send({
                message: "data not recived"
            })
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const data = await prisma.user.create({
            data: { name, email, type, password: hashpassword }
        })

        if (!data) {
            return res.status(400).send({
                message: "not registerd"
            })
        }

        res.status(200).send({
            message: "user registerd",
            data: data
        })

    }

    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "register API Error",
            error: error
        })
    }



}


const userlogin = async (req: Request, res: Response) => {
    try {
        const { name, email, type, password } = req.body;

        if (!name || !email || !type || !password) {
            return res.status(400).send({
                message: "data not recived login API"
            })
        }

        const hashpassword = await bcrypt.hash(password, 10)


        const userdata = await prisma.user.findUnique({
            where: { email: email }
        })

        if (!userdata) {
            return res.status(400).send({
                message: "email or password invalid"
            })
        }

        const comparepassword = await bcrypt.compare(password, userdata.password)
        if (!comparepassword) {
            return res.status(400).send({
                message: "email or password invalid"
            })
        }


        const token = jwt.sign({ email: userdata.email, password: userdata.password, type: userdata.type, name: userdata.name }, secretkey, { "expiresIn": "1h" })


        if (!token) {
            return res.status(400).send({
                message: "token not generated "
            })
        }

        res.status(200).send({
            message: "token is",
            token: token
        })



    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "login API Error",
            error: error
        })
    }
}


export { userregister, userlogin }