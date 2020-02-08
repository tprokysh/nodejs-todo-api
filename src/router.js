import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.end("hello");
});

export default router;
