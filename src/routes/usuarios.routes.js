import { Router } from "express";
import { getUsuarios, createUsarios, updateUsuarios, deleteUsuarios} from "../controlles/usuarios.controller.js";


const router = Router();

router.get('/', getUsuarios)


router.post('/', createUsarios )

router.put('/', updateUsuarios)

router.delete('/', deleteUsuarios)




export default router;