import { CategoryCard } from "../Component/Category-card";
import { RightNav } from "../Component/Right-nav";
import "./Explore.css";
export const Home = () => {
  return (
    <div className="explore-block">
      <div className="left-nav">
        <RightNav />
      </div>

      <div className="explore-contianer">
        <CategoryCard />
      </div>
    </div>
  );
};
