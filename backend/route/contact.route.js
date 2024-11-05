// route/contact.route.js

import express from "express";
import { ContactFormSubmission } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/contact", ContactFormSubmission);

export default router;
