import routes from "../routes";
import Video from "../models/Video";

//Home

export const home = async (req, res) => {
  try{
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch(error){
      console.log(error);
      res.render("home", {pageTitle: "Home", videos: [] });
  }
};

// Search

export const search = async (req, res) => {
 const{
     query: { term: searchinqBv }
 } = req;
 let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Upload

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

    @@ -34,6 +40,8 @@ export const postUpload = async (req, res) => {
        res.redirect(routes.videoDetail(newVideo.id));
    };
    
    // Video Detail
    
    export const videoDetail = async (req, res) => {
      const {
        params: { id }
    @@ -46,6 +54,8 @@ export const videoDetail = async (req, res) => {
      }
    };
    
    // Edit Video
    
    export const getEditVideo = async (req, res) => {
      const {
        params: { id }
    @@ -71,12 +81,16 @@ export const postEditVideo = async (req, res) => {
      }
    };
    
    // Delete Video
    
    export const deleteVideo = async (req, res) => {
      const {
        params: { id }
      } = req;
      try {
        await Video.findOneAndRemove({ _id: id });
      } catch (error) {
        console.log(error);
      }

      res.redirect(routes.home);
    };