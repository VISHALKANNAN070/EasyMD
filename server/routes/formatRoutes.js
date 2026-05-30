import express from "express";
import validateInput from "../middleware/validateInput.js";
import generateReadme from "../controllers/generateReadme.js";
const router = express.Router();

router.post("/", validateInput, generateReadme)

export default router