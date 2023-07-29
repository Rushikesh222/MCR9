import { useParams } from "react-router-dom";
import { useData } from "../context/CardContext";
import { RightNav } from "../Component/Right-nav";

export const SingleVideo = () => {
  const { state, dispatch } = useData();
  const { userId } = useParams();
  const singleVideo = state?.VideoData?.find(
    (items) => items._id === parseInt(userId)
  );
  console.log(singleVideo);
  return (
    <div className="explore-block">
      <div className="left-nav">
        <RightNav />
      </div>
      <div className="single-video"></div>
      <div className="explore-contianer">{}</div>
    </div>
  );
};
