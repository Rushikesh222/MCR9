import { RightNav } from "../Component/Right-nav";
import { VideolistingCard } from "../Component/Videolisting-card";

export const VideoListing = () => {
  return (
    <div className="explore-block">
      <div className="left-nav">
        <RightNav />
      </div>

      <div className="explore-contianer">
        <VideolistingCard />
      </div>
    </div>
  );
};
