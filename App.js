// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import Calulator from "./Calculator.js";
import Assignment from "./Assignments.js";
// import Courses from "./Courses.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // has to be donw before any communications

Hello(app);
Lab5(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// Courses(app);
Assignment(app);
Calulator(app);

app.listen(process.env.PORT || 4000);
