import { UserModel } from "../../Model/UserModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from "../../Repositoty/index"
import nodemailer from "nodemailer";

const RegisterController = async (req: Request, res: Response) => {
    try {
        const user: UserModel = {
            name: req.body.name,
            mobile: req.body.mobile,
            password: req.body.password,
            email: req.body.email,
            verify: false

        }
        let resp: any = await UserRepository.UserRepository.UserRegister(user)
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'damien.dibbert@ethereal.email',
                pass: 'e4FJeRuQrHDA1gkNRF'
            }
        });
        let info = await transporter.sendMail({
            from: 'damien.dibbert@ethereal.email',
            to: 'damien.dibbert@ethereal.email',
            subject: "Verify Email",
            html: '<a href="http://localhost:9999/verify/'+resp.id+'">Verify</a>'
        });
        let response: responseModel = {
            status: 200,
            data: resp,
            error: null,
            message: "successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch (e) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail",
            success: false
        }

        res.json(response).status(400)

    }
}
export default { RegisterController }