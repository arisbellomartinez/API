import { db } from "../db.js"

export const getUsuarios = async (req, res) => {
    const [rows]=await db.query('SELECT * FROM usuarios')
    res.json(rows)
}
export const getUsuariosById = async (req, res) => {

    const id = req.params.id
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?',[id])
    if (rows.length = 0) {
      return res.status(404).json({status:"Empleado no encontrado"})  
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

export const updateUsuarios = (req, res) => {
    res.send('Metodo put')
}

export const deleteUsuarios = (req, res) => {
    res.send('Metodo delete')
}