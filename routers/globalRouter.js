<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
import { onlyPublic, onlyPrivate } from "../middlewares";
=======
=======
>>>>>>> feature/#3/video
import express from "express.js";
import passport from "passport.js";
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
    getMe,
    facebookLogin,
    postFacebookLogin,
    kakaoLogin,
    postkakaoLogIn
  } from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middlewares";
<<<<<<< HEAD
>>>>>>> feature/#3/video
=======
>>>>>>> feature/#3/video
=======
import { onlyPublic, onlyPrivate } from "../middlewares.js";
>>>>>>> origin/develop

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> feature/#3/video
=======

>>>>>>> feature/#3/video
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
<<<<<<< HEAD
<<<<<<< HEAD
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
<<<<<<< HEAD
  passport.authenticate("github", { failureRedirect: "/login" }),
=======
=======
>>>>>>> feature/#3/video

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate('github', {failureRedirect: '/login.js'}),
<<<<<<< HEAD
>>>>>>> feature/#3/video
=======
>>>>>>> feature/#3/video
=======
  passport.authenticate("github", { failureRedirect: "/login.js" }),
>>>>>>> origin/develop
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> feature/#3/video
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
   routes.facebookCallback,
   passport.authenticate("facebook", { failureRedirect: "/login.js" }),
   postFacebookLogin
);

globalRouter.get(routes.kakaotalk, kakaoLogin);
globalRouter.get(
  routes.kakaotalkCallback,
  passport.authenticate('kakao', {failureRedirect: '/login.js'}),
  postkakaoLogIn
);

globalRouter.get(routes.logout, logout);


<<<<<<< HEAD
>>>>>>> feature/#3/video
=======
>>>>>>> feature/#3/video
export default globalRouter;