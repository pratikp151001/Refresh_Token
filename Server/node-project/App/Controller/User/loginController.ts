import { UserLoginModel } from "../../Model/userLoginModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from "../../Repositoty/index"
import Jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const LoginController = async (req: any, res: Response) => {
    try {
        const user: UserLoginModel = {

            password: req.body.password,
            email: req.body.email

        }
        let resp: any = await UserRepository.UserRepository.UserLogin(user)
        if (resp.verify) {
            if (resp.password == user.password) {
                const access_key = process.env.ACCESS_TOKEN_KEY;
                const AccessToken = Jwt.sign(
                    {
                        user_id: resp.id, user_email: resp.email
                        // , user_password: resp.password 
                    }, access_key as string, { expiresIn: '15s' });
                const refresh_key = process.env.REFRESH_TOKEN_KEY;
                const RefreshTokenToken = Jwt.sign(
                    {
                        user_id: resp.id, user_email: resp.email
                        // , user_password: resp.password
                    }, refresh_key as string, { expiresIn: '60s' });


                req.session.refresh_token = RefreshTokenToken
                req.session.access_token = AccessToken

                let response: responseModel = {
                    status: 200,
                    data: { data: resp, AccessToken: AccessToken, RefreshToken: RefreshTokenToken, },
                    error: null,

                    message: "successfully",
                    success: true
                }

                res.json(response).status(200)
            }
            else {
                
              

                throw "Please enter Valid email password"
            }
        }
        else{
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
                subject: "About Invoice",
                html: '<a href="http://localhost:9999/verify/'+resp.id+'">Verify</a>'
            });

           throw "Please Verify by email"

        }
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
export default { LoginController }