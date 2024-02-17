import app from "../app.js"
import request from "supertest"

describe("GET /tasks",() => {
    test("Should respond with 200 status code",async() => {
        const response= await request(app).get("/tasks/").set("x-access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTcwODE4NDc1NCwiZXhwIjoxNzA4MjcxMTU0fQ.TN1RV1fDg2bDH8bvVIccbFkn2QiKeTckt9pWbZy197g").send()
        expect(response.statusCode).toBe(200)
    })

    test("Should respond with an array of tasks",async() => {
        const response= await request(app).get("/tasks/").set("x-access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTcwODE4NDc1NCwiZXhwIjoxNzA4MjcxMTU0fQ.TN1RV1fDg2bDH8bvVIccbFkn2QiKeTckt9pWbZy197g").send()
        expect(response.body).toBeInstanceOf(Array)
    })

    
})

describe("POST /tasks",()=>{
    test("Should respond with 200 status code",async()=>{
        const response= await request(app).post("/tasks/").set("x-access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTcwODE4NDc1NCwiZXhwIjoxNzA4MjcxMTU0fQ.TN1RV1fDg2bDH8bvVIccbFkn2QiKeTckt9pWbZy197g").send({
            "title":"test",
            "description":"test",
            "status": "test"
        })
        expect(response.statusCode).toBe(200)
    })

    test("Should respond with 400 the created task",async()=>{
        const response= await request(app).post("/tasks/").set("x-access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTcwODE4NDc1NCwiZXhwIjoxNzA4MjcxMTU0fQ.TN1RV1fDg2bDH8bvVIccbFkn2QiKeTckt9pWbZy197g").send({
            "title":"test",
            "description":"test",
        })
        expect(response.statusCode).toBe(400)
    })
})