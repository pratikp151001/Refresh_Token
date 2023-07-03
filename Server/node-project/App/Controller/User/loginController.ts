import { UserLoginModel } from "../../Model/userLoginModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from "../../Repositoty/index"
import Jwt from "jsonwebtoken";
import session from "express-session";

const LoginController = async (req: any, res: Response) => {

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:")
    try {
        //    let session : any=req

        const user: UserLoginModel = {

            password: req.body.password,
            email: req.body.email

        }
        console.log("🚀 ~ file: LoginController.ts:13 ~ LoginController ~ user:", user)

        let resp: any = await UserRepository.UserRepository.UserLogin(user)

        if (resp.password == user.password) {
            const access_key = process.env.ACCESS_TOKEN_KEY;
            const AccessToken = Jwt.sign(
                { user_id: resp.id, user_email: resp.email, user_password: resp.password }, access_key as string, { expiresIn: '15s' });
            const refresh_key = process.env.REFRESH_TOKEN_KEY;
            const RefreshTokenToken = Jwt.sign(
                { user_id: resp.id, user_email: resp.email, user_password: resp.password }, refresh_key as string, { expiresIn: '60s' });


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