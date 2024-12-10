import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY

export const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization')?.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ errors: "Unauthorized" }).end();
    }

    try {
        // Verifikasi token
        // Simpan informasi pengguna di `req.user`
        req.user = jwt.verify(token, SECRET_KEY);

        // Lanjutkan ke handler berikutnya
        next();
    } catch (error) {
        // Token tidak valid
        return res.status(401).json({ errors: "Unauthorized" }).end();
    }
};