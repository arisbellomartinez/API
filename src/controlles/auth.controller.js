import { db } from "../config/db/db.js";
import bcryptjs from "bcryptjs";


const allSing = async (req,res) => {
        // Fetch all users from the database
        const [rows] = await db.query('SELECT * FROM ejemplodb.auth');
        
        // Respond with the retrieved users as JSON
        
        return rows
    
}



export const signUp = async (req,res) => {
    try {
        let match=0
        console.log(match);        
        const {usuario,password} = req.body;
        const aux = await allSing();
        aux.forEach((user)=>{
            if (user.usuario == usuario) {
                match++;
            }
        })
        
        if (match == 0) {
            
            const crypt = bcryptjs.hashSync(password);
                        const [rows]= await db.query("INSERT INTO auth (usuario,password) VALUES (?,?)",[usuario,crypt]);
            
                        res.json({
                        id:rows.insertId,
                        usuario,
                        password
            })
            
        }else{
            
            match=0
            return res.status(400).send("Invalid data provided ya exit");
        }
    }
     catch (error) {
        return res.status(500).json({ message: "Error creating user" });
    }
    
    
}

export const signIn = async (req,res) => {
    res.json("Sing In")
};