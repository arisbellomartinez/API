import  jwt  from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.js";
import { db } from "../config/db/db.js";


export const verifyToken = async (req, res,next) => {
    const token = req.headers["x-access-token"]
    const {usuario} = req.body
    if (!token) {
        return res.status(403).json({message: " no Access token"})
    }
    const decoded=jwt.verify(token,SECRET_KEY)
    const [rows] = await db.query("SELECT * FROM auth WHERE usuario = ?",[usuario])
    if (rows.length==0) {
        return res.status(404).json({message: "user does not exist"})
    }
    
    console.log(rows);
    next();
}