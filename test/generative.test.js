import {createGenerativeTest, createTestUser, removeGenerativeTest, removeTestUser} from "./test-util.js";
import supertest from "supertest";
import jwt from "jsonwebtoken";
import {web} from "../src/application/web.js";
import {func} from "joi";
import {logger} from "../src/application/logging.js";

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';
const mockUser = {
    username: 'test',
    name: 'Test User'
};

// Generate token JWT untuk pengguna
const token = jwt.sign({ username: mockUser.username }, SECRET_KEY, { expiresIn: '1h' });

describe("Run Generative API", function() {

    describe("POST /api/users/generate", function() {

        beforeEach(async () => {
            await createTestUser();
        });

        afterEach(async ()  => {
            await removeGenerativeTest()
            await removeTestUser()
        });

        it('should success generate image', async () => {
            const result = await supertest(web)
                .post("/api/users/generate")
                .set("Authorization", `Bearer ${token}`)
                .send({
                    prompt: "prompt test"
                });

            expect(result.status).toBe(200);
            expect(result.body.data.id).toBeDefined();
            expect(result.body.data.username).toBe("test");
            expect(result.body.data.image).toBe("default");
            expect(result.body.data.prompt).toBe("prompt test");
        });

        it('should failed', async () => {
            const result = await supertest(web)
                .post("/api/users/generate")
                .set("Authorization", `Bearer ${token}`)
                .send({
                    prompt: ""
                });

            expect(result.status).toBe(400);
            expect(result.body.errors).toBeDefined();
        });

        it('should unauthorized', async () => {
            const result = await supertest(web)
                .post("/api/users/generate")
                .set("Authorization", `salah`)
                .send({
                    prompt: "prompt test"
                });

            expect(result.status).toBe(401);
            expect(result.body.errors).toBeDefined();
        });
    })

    describe("GET /api/users/histories", function () {

        // beforeEach(async () => {
        //     await createTestUser();
        //     await createGenerativeTest();
        //     await createGenerativeTest();
        // })

        // afterEach(async() => {
        //     await removeGenerativeTest();
        //     await removeTestUser();
        // })

        it('should return all histories image', async () => {
            const result = await supertest(web)
                .get("/api/users/histories")
                // .set("Authorization", `Bearer ${token}`)

            logger.info(result);
            expect(result.status).toBe(200);

        });
    })
})