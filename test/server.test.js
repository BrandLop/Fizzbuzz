const request = require("supertest");
const {app, server} = require("../lib/server");

describe("GET taks", () => {
    test("should return a json object", async() => {
        const response = await request(app)
            .get("/");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({message: "FizzBuzz Api welcome!"});
    });

    afterAll(() => {
        server.close();
    });
});