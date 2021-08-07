import { Router } from "express";
const router = Router();

//We load the controller
import * as loginCtrl from "../controllers/login.controllers";

//We list the POST
router.post('/', loginCtrl.login);

export default router;