import { db } from "../db.js"

export const getUsuarios = async (req, res) => {
    try {
        
        const [rows]=await db.query('SELECT * FROM usuarios')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message:"Sufrio un error al obtener los usuarios"})
    }
}
export const getUsuariosById = async (req, res) => {
    try {
        
        const id = req.params.id
        const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?',[id])
        if (rows.length = 0) {
          return res.status(404).json({message:"Empleado no encontrado"})  
        }
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:"Sufrio un error al obtener los usuarios por id"})
    }
}

export const createUsarios = async (req, res) => {
    try {
        
        const {name,cedula}= req.body
        const [rows] = await db.query('INSERT INTO usuarios (name,cedula) VALUES (?, ?)',[name,cedula])
        res.send({
            id:rows.insertId,
            name,
            cedula
        })
    } catch (error) {
        return res.status(500).json({message:"Sufrio un error al crear los usuarios"})
    }
}

export const updateUsuarios = async (req, res) => {
    try {
        
        const {id} = req.params
        const {name,cedula} = req.body
        
        const [result] = await db.query('UPDATE usuarios SET name = IFNULL(?,name), cedula = INFNULL(?,cedula) WHERE id = ?',[name,cedula,id])
        if (result.affectedRows === 0) {
            return res.status(404).json("Empleado no encontrado")
        }
        res.send("Usuario actualizado")
    } catch (error) {
        return res.status(500).json({message:"Sufrio un error al actualizarr los usuarios"})
    }

}

export const deleteUsuarios =async (req, res) => {
    try {
        
        const [result]=await db.query('DELETE FROM usuarios WHERE id = ?',[req.params.id])
        if (result.affectedRows<=0) {
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:"Sufrio un error al eliminar los usuarios"})
    }
}