const request = require("supertest");
const {app, server} = require("../lib/server");

describe("GET taks", () => {
    test("should return a json object", async() => {
        const response = await request(app)
            .get("/");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({message: "FizzBuzz Api welcome!"});
    });

    test("Should return a list of explorers filtered by node mission", async () => {
        const response = await request(app)
            .get("/v1/explorers/node");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject([
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            }
        ]);
    });

    test("Should return a list of explorers filtered by java mission", async () => {
        const response = await request(app)
            .get("/v1/explorers/java");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject([
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/java/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/java/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/java/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/java/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/java/),
                stacks: expect.any(Array)
            }
        ]);
    });

    test("Should return an object with mission node and its explorers amount", async () => {
        const response = await request(app)
            .get("/v1/explorers/amount/node");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({mission: expect.stringMatching(/node/), quantity: 10});
    });

    test("Should return an object with mission java and its explorers amount", async () => {
        const response = await request(app)
            .get("/v1/explorers/amount/java");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({mission: expect.stringMatching(/java/), quantity: 5});
    });

    afterAll(() => {
        server.close();
    });
});