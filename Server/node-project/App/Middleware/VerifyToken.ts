import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { responseModel } from "../Model/ResponseModel";


dotenv.config({ path: ".env" });

async function VerifyToken(req: any, res: Response, next: NextFunction) {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    let token = req.session.access_token
    // console.log("🚀 ~ file: VerifyToken.ts:13 ~ VerifyToken ~ token:", token)

    let access_key = process.env.ACCESS_TOKEN_KEY

    if (token != null) {
        Jwt.verify(token, access_key as string, async (err: any, user: any) => {
            if (err) {

                if (err.name == "TokenExpiredError") {
                    let token = req.session.refresh_token

                    let refresh_key = process.env.REFRESH_TOKEN_KEY
                    Jwt.verify(token, refresh_key as string, async (err: any, user: any) => {
                        if (err) {
                            let response: responseModel = {
                                status: 400,
                                data: null,
                                error: err as string,

                                message: "Unauthorized Userrrrr",
                                success: false
                            }

                            res.json(response).status(400)
                        }
                        else {
                            const AccessToken = Jwt.sign(
                                { user_id: user.user_id, user_email: user.user_email, user_password:user.user_password }, access_key as string, { expiresIn: '15s' });
                              
                                req.session.access_token=AccessToken
                            console.log("🚀 ~ file: VerifyToken.ts:42 ~ Jwt.verify ~ user:", user)

                            next()
                        }
                    })
                }
                else {
                    console.log("🚀 ~ file: VerifyToken.ts:20 ~ Jwt.verify ~ err:", err)
                    let response: responseModel = {
                        status: 400,
                        data: null,
                        error: err as string,

                        message: "Unauthorized Userrrrr",
                        success: false
                    }

                    res.json(response).status(400)
                }
            }
            else {

                req.data = user.user_id


                next()


            }

        })
    }
    else {
        let response: responseModel = {
            status: 400,
            data: null,
            error: "No Token",

            message: "Unauthorized User",
            success: false
        }

        res.json(response).status(400)

    }


}

export default VerifyToken