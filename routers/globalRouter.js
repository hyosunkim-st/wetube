import express from "express";
import passport from "passport";
import routes from "../routes.js";
import { home, search } from "../controllers/videoController.js";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe
} from "../controllers/userController.js";

import { onlyPublic, onlyPrivate } from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login.js" }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

export default globalRouter;