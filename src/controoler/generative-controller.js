import generativeService from "../service/generative-service.js";

const generateImage = async (req, res, next) => {

    try {
        const result = await generativeService.generateImage(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getHistories = async (req, res, next) => {
    try {
        const result = await generativeService.getHistories(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    generateImage,
    getHistories
}