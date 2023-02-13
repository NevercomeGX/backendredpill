import { Router } from "express";
import {
	getProjects,
	createProject,
	// updateProject,
	// getProject,
} from "../controllers/emails.controller.js";

const router = Router();

// Routes
router.post("/", createProject);
router.get("/", getProjects);
// router.put("/:id", updateProject);
// router.get("/:id", getProject);

export default router;
