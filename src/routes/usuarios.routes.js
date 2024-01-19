import { Router } from "express";
import { getUsuarios, createUsarios, updateUsuarios, deleteUsuarios, getUsuariosById} from "../controlles/usuarios.controller.js";


const router = Router();

router.get('/', getUsuarios)

router.get('/:id', getUsuariosById)


router.post('/', createUsarios )

router.patch('/:id', updateUsuarios)

router.delete('/:id', deleteUsuarios)




export default router;