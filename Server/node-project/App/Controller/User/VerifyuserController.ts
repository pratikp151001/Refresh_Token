import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from "../../Repositoty/index"
import session from "express-session";

const VerifyuserController = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: updateuser.ts:35 ~ UpdateuserController ~ UpdateuserController:", VerifyuserController)

  
    try {
        // let token = req.session.refresh_token
        let id=req.params.id
        console.log("🚀 ~ file: updateuserController.ts:10 ~ UpdateuserController ~ id:", id)
         let resp = await UserRepository.UserRepository.VerifyUsers(id)

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
export default { VerifyuserController }