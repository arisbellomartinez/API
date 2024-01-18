import { db } from "../db.js"

export const getUsuarios = (req, res) => {
    res.send('Welcome')
}

export const createUsarios = async (req, res) => {
    const {name,cedula}= req.body
    await db.query('INSERT INTO usuarios (name,cedula) VALUES (?, ?)',[name,cedula])
    res.send('Usuarios creados')
}

export const updateUsuarios = (req, res) => {
    res.send('Metodo put')
}

export const deleteUsuarios = (req, res) => {
    res.send('Metodo delete')
}