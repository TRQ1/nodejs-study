import express from "express";
import routes from "../routes"
import { home, search } from "../controllers/videoControllers";
import { getJoin, postJoin, login, logout } from "../controllers/userControllers";

const globalRouter = express.Router();

/**
 * Global redirect list
 */
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;