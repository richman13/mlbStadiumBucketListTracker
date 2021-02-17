import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import stadiumsRouter from "./api/v1/stadiumsRouter.js"
import visitsRouter from "./api/v1/visitsRouter.js";
import scheduleRouter from "./api/v1/scheduleRouter.js"

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/stadiums", stadiumsRouter)
rootRouter.use("/api/v1/visits", visitsRouter)
rootRouter.use("/api/v1/schedule", scheduleRouter)


export default rootRouter;
