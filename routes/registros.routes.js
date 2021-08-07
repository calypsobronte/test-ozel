import { Router } from "express";
const router = Router();

//We load the controller
import * as registrosCtrl from "../controllers/registros.controllers";

//We list the GET, POST, PATCH, DELET
router.post('/', registrosCtrl.createRegistros);
router.get('/', registrosCtrl.getRegistros);
router.get('/:id', registrosCtrl.getRegisterbyId)
router.patch('/:id', registrosCtrl.patchRegistros);
router.delete('/:id', registrosCtrl.deleteRegistros);

export default router;