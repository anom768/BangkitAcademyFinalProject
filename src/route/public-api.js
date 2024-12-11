import express from "express";
import userController from "../controoler/user-controller.js";
import generativeController from "../controoler/generative-controller.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
// publicRouter.get('/api/users/histories', generativeController.getHistories);

export {
    publicRouter
}
