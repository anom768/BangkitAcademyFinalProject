import supertest from "supertest";
import {web} from "../src/application/web.js";
import {addQuizTest, getQuizTest, truncateQuizTest} from "./test-util.js";
import {logger} from "../src/application/logging.js";

describe("quiz api test", function() {
    describe("POST /api/quiz", function() {
        beforeEach(async () => {
            await addQuizTest();
        });

        afterEach(async () => {
            await truncateQuizTest();
        })

        it("Should create a Quiz success", async () => {
            const result = await supertest(web)
                .post('/api/quiz')
                .send({
                    image: "image-1.jpg",
                    audio: "audio-1.wav",
                    a: "a",
                    b: "b",
                    c: "c",
                    d: "d",
                    answer: "singa"
                });

            expect(result.status).toBe(200);
            expect(result.body.data.image).toBe("image-1.jpg");
            expect(result.body.data.audio).toBe("audio-1.wav");
        })

        it('should create a quiz failed', async () => {
            const result = await supertest(web)
                .post('/api/quiz')
                .send({
                    image: "",
                    audio: "",
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    answer: ""
                });
            logger.info(result.body)
            expect(result.status).toBe(400);
            expect(result.body.errors).toBeDefined();
        });

        it('should update a quiz success', async () => {
            const quizDB = await getQuizTest();
            const result = await supertest(web)
                .put('/api/quiz/' + quizDB.id)
                .send({
                    image: "image-2.jpg",
                    audio: "audio-2.wav",
                    a: "aa",
                    b: "bb",
                    c: "cc",
                    d: "dd",
                    answer: "harimau"
                })
            expect(result.status).toBe(200);
            expect(result.body.data.image).toBe("image-2.jpg");
            expect(result.body.data.audio).toBe("audio-2.wav");
        });

        it('should update a quiz error', async () => {
            const quizDB = await getQuizTest();
            const result = await supertest(web)
                .put('/api/quiz/' + quizDB.id)
                .send({
                    image: "",
                    audio: "",
                    a: "",
                    b: "",
                    c: "",
                    d: "",
                    answer: ""
                })
            expect(result.status).toBe(400);
            expect(result.body.errors).toBeDefined();
        });

        it('should get all quiz success', async () => {
            await addQuizTest();
            await addQuizTest();
            const result = await supertest(web)
                .get("/api/quiz")

            expect(result.status).toBe(200);
            logger.info(result.body)
        });
    })
})