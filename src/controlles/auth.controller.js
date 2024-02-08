import { db } from "../config/db/db.js";
import bcryptjs from "bcryptjs";


export const signUp = async (req,res) => {
    

    try {
        const {usuario,password} = req.body;
    const crypt = bcryptjs.hashSync(password);
    const [user] = await db.query("SELECT * FROM auth")
    user.forEach(
        (element) => {
            if(element.usuario === usuario){
                return res.status(400).json({message: "El usuario ya existe"});
            }
        }
    );

    const [rows]= await db.query("INSERT INTO auth (usuario,password) VALUES (?,?)",[usuario,crypt]);
    
    res.json({
        id:rows.insertId,
        usuario,
        password
    })
    } catch (error) {
        return res.status(500).json({ message: "Error creating user" });
    }
};

export const signIn = async (req,res) => {
    res.json("Sing In")
};