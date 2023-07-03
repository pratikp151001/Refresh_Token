import { UserModel } from "../../Model/UserModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
 import UserRepository from "../../Repositoty/index"

const RegisterController = async (req: Request, res: Response) => {

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:", "AddBlog")
    try {

        const user: UserModel = {
            name: req.body.name,
            mobile: req.body.mobile,
            password: req.body.password,
            email: req.body.email

        }

     let resp = await UserRepository.UserRepository.UserRegister(user)

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