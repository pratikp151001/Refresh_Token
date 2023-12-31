import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from "../../Repositoty/index"
import session from "express-session";

const GetuserController = async (req: any, res: Response) => {
    try {
        // let token = req.session.refresh_token
        let resp = await UserRepository.UserRepository.GetUsers()

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
export default { GetuserController }