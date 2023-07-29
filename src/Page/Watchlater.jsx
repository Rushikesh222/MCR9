import { RightNav } from "../Component/Right-nav";
import { WatchLaterCard } from "../Component/WatchlaterCard";

import "./Explore.css";
export const Watchlater = () => {
  return (
    <div className="explore-block">
      <div className="left-nav">
        <RightNav />
      </div>

      <div className="explore-contianer">
        <WatchLaterCard />
      </div>
    </div>
  );
};
