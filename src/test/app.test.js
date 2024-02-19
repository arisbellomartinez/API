import app from "../app.js";
import request from "supertest";

// Define a valid JWT token for authorization
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTcwODMzNjc3MywiZXhwIjoxNzA4NDIzMTczfQ.FtI9ZQEZ7tiAxcL3KgkUv9UAWmycaz5xr1-sLTntJXA";

// Test suite for GET /tasks route
describe("GET /tasks", () => {
    test("Should respond with 200 status code", async () => {
        const response = await request(app).get("/tasks/").set("x-access-token", token).send();
        expect(response.statusCode).toBe(200);
    });

    test("Should respond with an array of tasks", async () => {
        const response = await request(app).get("/tasks/").set("x-access-token", token).send();
        expect(response.body).toBeInstanceOf(Array);
    });

    test("Should respond with 401 status code for invalid token", async () => {
        const response = await request(app).get("/tasks/").set("x-access-token", "invalid-token").send();
        expect(response.statusCode).toBe(401);
    });
});

// Test suite for POST /tasks route
describe("POST /tasks", () => {
    test("Should respond with 200 status code", async () => {
        const response = await request(app).post("/tasks/").set("x-access-token", token).send({
            "title": "test",
            "description": "test",
            "status": "test"
        });
        expect(response.statusCode).toBe(200);
    });

    test("Should respond with 400 for incomplete task data", async () => {
        const response = await request(app).post("/tasks/").set("x-access-token", token).send({
            "title": "test",
            "description": "test"
        });
        expect(response.statusCode).toBe(400);
    });
});

// Test suite for PUT /tasks/:id route
describe("PUT /tasks/:id", () => {
    test("Should respond with 200 status code", async () => {
        const response = await request(app).put("/tasks/15").set("x-access-token", token).send({
            "title": "test put",
            "description": "test put",
            "status": "test put"
        });
        expect(response.statusCode).toBe(200);
    });
});

// Test suite for DELETE /tasks/:id route
describe("DELETE /tasks/:id", () => {
    test("Should respond with 200 status code", async () => {
        const response = await request(app).delete("/tasks/12").set("x-access-token", token).send();
        expect(response.statusCode).toBe(200);
    });
});