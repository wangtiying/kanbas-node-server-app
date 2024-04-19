// const express = require("express");
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import Calulator from "./Calculator.js";
import Assignment from "./Assignments.js";
// import Courses from "./Courses.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/route.js";
import cors from "cors";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express();

//changed 5
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}

app.use(express.json());
app.use(session(sessionOptions));
Hello(app);
Lab5(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// Courses(app);
Assignment(app);
Calulator(app);
UserRoutes(app);
//changed 5
// app.listen(process.env.PORT || 4000);
const port = process.env.PORT || 4000;
app.listen(port);