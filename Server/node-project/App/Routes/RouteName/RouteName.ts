import  express  from "express";
import Controller from "../../Controller";
import VerifyToken from "../../Middleware/VerifyToken";

const router=express.Router()

router.post('/registeruser',Controller.RegisterController.RegisterController)
router.post('/loginuser',Controller.LoginController.LoginController)
router.get('/verify/:id',Controller.VerifyuserController.VerifyuserController)
router.get('/users',VerifyToken,Controller.GetuserController.GetuserController)



export  default router;