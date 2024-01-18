import { db } from "../db.js"

export const test =  async (req, res) => {
    const [result] = await db.query("SELECT 1+1")
    res.json(result)

}