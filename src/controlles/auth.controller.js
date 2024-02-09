import { db } from "../config/db/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config/config.js";


const allSing = async (req,res) => {
        
        const [rows] = await db.query('SELECT * FROM ejemplodb.auth');
        
      
        
        return rows
    
}



export const signUp = async (req,res) => {
    try {
        let match=0       
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
            
                        

            const token = jwt.sign({id:rows.insertId},SECRET_KEY,{expiresIn:86400})

            res.status(200).json({token})
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

    let matchUser = 0
    const {usuario,password} = req.body;
    const aux = await allSing();

    aux.forEach((element) => {
        if (element.usuario == usuario ) {
            const condition = bcryptjs.compareSync(password,element.password);
            if (condition) {
                matchUser=2
                const token = jwt.sign({id:element.id},SECRET_KEY,{expiresIn:86400})
                res.json({token})
                
            }else{
                matchUser = 1
            }
        }
    });
    if (matchUser==0) {
        return res.status(400).json({ message: "User no register"});
    } else if (matchUser==1){
        return res.status(400).json({ message: "Password incorrect"});
    }
};