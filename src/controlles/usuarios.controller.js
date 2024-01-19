import { db } from "../db.js"

export const getUsuarios = async (req, res) => {
    const [rows]=await db.query('SELECT * FROM usuarios')
    res.json(rows)
}
export const getUsuariosById = async (req, res) => {

    const id = req.params.id
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?',[id])
    if (rows.length = 0) {
      return res.status(404).json({message:"Empleado no encontrado"})  
    }
    res.json(rows[0])
}

export const createUsarios = async (req, res) => {
    const {name,cedula}= req.body
    const [rows] = await db.query('INSERT INTO usuarios (name,cedula) VALUES (?, ?)',[name,cedula])
    res.send({
        id:rows.insertId,
        name,
        cedula
    })
}

export const updateUsuarios = async (req, res) => {

    const {id} = req.params
    const {name,cedula} = req.body
    
    const [result] = await db.query('UPDATE usuarios SET name = IFNULL(?,name), cedula = INFNULL(?,cedula) WHERE id = ?',[name,cedula,id])
    if (result.affectedRows === 0) {
        return res.status(404).json("Empleado no encontrado")
    }
    res.send("Usuario actualizado")
}

export const deleteUsuarios =async (req, res) => {
    const [result]=await db.query('DELETE FROM usuarios WHERE id = ?',[req.params.id])
    if (result.affectedRows<=0) {
        return res.status(404).json({message:"Usuario no encontrado"})
    }
    res.sendStatus(204)
}