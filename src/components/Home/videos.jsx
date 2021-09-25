import "../../css/Home/video.css";
import VideoListCard from "./video-list-card";

let HomeVideo = () => {
  return (
    <>
      <div className="home-video">
        <div className="vid-pl-head">
          <div className="srno">SrNo.</div>
          <div className="video-link">Video PlayLists</div>
        </div>
        <div className="video-card-container">
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
