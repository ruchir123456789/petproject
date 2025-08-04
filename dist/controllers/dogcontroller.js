import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import multer from "multer";
import multers from "../config/multer.js";
import { isContext } from "vm";
const createdogdata = async (req, res) => {
    try {
        const { name, type, breed, age, color, country, email } = req.body;
        if (!name || !type || !breed || !age || !color || !country || !email) {
            return res.status(500).send({
                message: "data not recived create API"
            });
        }
        const file = req.file;
        if (!file) {
            return res.status(500).send({
                message: "Image not recived"
            });
        }
        const imgUrl = file?.filename;
        const data = await prisma.dogs.create({
            data: { name, type, breed, age: Number(age), color, country, email, imageurl: imgUrl }
        });
        if (!data) {
            return res.status(500).send({
                message: "data not created in create dog API"
            });
        }
        res.status(200).send({
            message: "imageurl",
            imgUrl,
            data
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "erro in create API",
            error: error
        });
    }
};
const getdogdata = async (req, res) => {
    try {
        const data = await prisma.dogs.findMany();
        if (!data) {
            return res.status(500).send({
                message: "data not found "
            });
        }
        res.status(201).send({
            message: "data recived",
            data: data
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "error in get data API",
            error: error
        });
    }
};
const updatedogdata = async (req, res) => {
    try {
        const userid = req.params.id;
        const { name, type, breed, age, color, country, email } = req.body;
        const file = req.file;
        const imgurl = file?.filename;
        if (!userid) {
            return res.status(500).send({
                message: "id not recived in update API"
            });
        }
        const user = await prisma.dogs.findUnique({
            where: { id: Number(userid) }
        });
        if (!user) {
            return res.status(400).send({
                message: "user not their"
            });
        }
        const data = await prisma.dogs.update({
            where: { id: Number(userid) },
            data: {
                name: name || user.name,
                type: type || user.type,
                breed: breed || user.breed,
                age: Number(age) || user.age,
                color: color || user.color,
                country: country || user.country,
                email: user.email,
                imageurl: imgurl || user.imageurl
            }
        });
        if (!data) {
            return res.status(500).send({
                message: "data not updated in update API"
            });
        }
        res.status(200).send({
            message: "User Updated ",
            data: data
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "error in update API",
            error: error
        });
    }
};
const deletedogdata = async (req, res) => {
    try {
        const userid = req.params.id;
        if (!userid) {
            return res.status(500).send({
                message: "user id not recved in Delete data API"
            });
        }
        const data = await prisma.dogs.delete({
            where: { id: Number(userid) }
        });
        if (!data) {
            return res.status(500).send({
                message: "user not deleted in delete API"
            });
        }
        res.status(200).send({
            message: "user deleted for id in delete API ",
            id: userid
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Delete API",
            error: error
        });
    }
};
export { createdogdata, getdogdata, updatedogdata, deletedogdata };
//# sourceMappingURL=dogcontroller.js.map