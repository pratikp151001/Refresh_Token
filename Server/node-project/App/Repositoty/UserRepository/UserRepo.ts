import { PrismaClient } from "@prisma/client"
import { UserModel } from "../../Model/UserModel";
import { UserLoginModel } from "../../Model/userLoginModel";

const prisma = new PrismaClient()

class UserRepository {
    async UserRegister(user: UserModel) {

        try {
            let respUser = await prisma.user.create({
                data: {
                    name: user.name,
                    mobile: user.mobile,
                    password: user.password,
                    email: user.email
                }
            })
            return respUser;
        }
        catch (e) {
            return e
        }
    }

    async UserLogin(user: UserLoginModel) {

        try {
            let respUser = await prisma.user.findFirst({
                where: {
                    email: user.email
                }
            })
            return respUser;
        }
        catch (e) {
            return e
        }
    }

    async GetUsers() {

        try {
            let respUser = await prisma.user.findMany({})
            return respUser;
        }
        catch (e) {
            return e
        }
    }
}

export default new UserRepository;