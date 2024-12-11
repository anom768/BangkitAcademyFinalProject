import { prismaClient } from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    })
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

export const addQuizTest = async () => {
    await prismaClient.quiz.create({
        data: {
            image: "image-1.jpg",
            audio: "audio-1.wav",
            a: "a",
            b: "b",
            c: "c",
            d: "d",
            answer: "singa"
        }
    })
};

export const getQuizTest = async () => {
    return prismaClient.quiz.findFirst();
}

export const truncateQuizTest = async () => {
    await prismaClient.quiz.deleteMany();
};

export const createGenerativeTest = async () => {
    await prismaClient.generative.create({
        data: {
            username: "test",
            image: "image-1.jpg",
            prompt: "test prompt"
        }
    })
}

export const removeGenerativeTest = async () => {
    await prismaClient.generative.deleteMany()
}
