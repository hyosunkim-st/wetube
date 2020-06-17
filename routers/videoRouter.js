import express from "express";
import routes from "../routes.js";
import {
<<<<<<< HEAD
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";
=======
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo

} from "../controllers/videoController.js";
import { onlyPrivate, uploadVideo } from "../middlewares.js";
>>>>>>> origin/develop

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
<<<<<<< HEAD
<<<<<<< HEAD
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
=======
videoRouter.get(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
=======
videoRouter.get(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
>>>>>>> feature/#3/video

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);
>>>>>>> feature/#3/video



export default videoRouter;