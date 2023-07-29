import { ExploreCard } from "../Component/Explore-card";
import { RightNav } from "../Component/Right-nav";
import "./Explore.css";
export const Explore = () => {
  return (
    <div className="explore-block">
      <div className="left-nav">
        <RightNav />
      </div>

      <div className="explore-contianer">
        <ExploreCard />
      </div>
    </div>
  );
};
