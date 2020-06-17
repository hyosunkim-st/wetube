import passport from "passport";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import GithubStrategy from "passport-guthub";
=======
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
>>>>>>> origin/develop
import User from "./models/User.js";
import { githubLoginCallback } from "./controllers/userController.js";
import routes from "./routes.js";

passport.use(User.createStrategy());

passport.use(new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

=======
=======
>>>>>>> feature/#3/video
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";

//import GithubStrategy from "passport-github";
//import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
    //githubLoginCallback,
    //facebookLoginCallback,
    kakaoLoginCallback
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

/*passport.use(
    new GithubStrategy ({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:4000${routes.githubcallback}`
    },
    githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: `https://ff9d7e597ee3.ngrok.io${routes.facebookCallback}`,
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
      },
      facebookLoginCallback
    )
);
*/
passport.use(
    new KakaoStrategy(
    {
    clientID : process.env.KAKAO_ID,
    clientSecret: process.env.KAKAO_SECRET,
    callbackURL : `http://localhost:4000${routes.kakaotalkCallback}`
    },
    kakaoLoginCallback
    )
);

import User from "./models/User";

passport.use(User.createStrategy());
<<<<<<< HEAD
>>>>>>> feature/#3/video
=======
>>>>>>> feature/#3/video
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());