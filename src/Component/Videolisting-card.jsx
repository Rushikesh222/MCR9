import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../assets/videoData";
import "./Videocard.css";
import { isItemPresentInWishlist } from "../until/ispresentInWishlist";
import { useData } from "../context/CardContext";

export const VideolistingCard = () => {
  const { categoryname } = useParams();
  const navigate = useNavigate();
  const videolist = videos.filter((data) =>
    categoryname.toLowerCase().includes(data.category.toLowerCase())
  );
  const { state, dispatch } = useData();
  return (
    <div className="videolist-card">
      <h1>videolist</h1>
      <div className="video-container">
        {videolist.map((items) => {
          const { _id, title, thumbnail, avatar, category, creator, views } =
            items;
          return (
            <div key={_id} className="video-card">
              <div className="image-card">
                <img className="video-image" src={thumbnail} />
                <div className="clock-icon">
                  {isItemPresentInWishlist(state?.AddPlaylist, _id) ? (
                    <i
                      class="fa-solid fa-clock"
                      style={{ color: "#00FFFF" }}
                      onClick={() =>
                        dispatch({ type: "REMOVE_PLAYLIST", payload: [items] })
                      }
                    ></i>
                  ) : (
                    <i
                      class="fa-regular fa-clock"
                      onClick={() =>
                        dispatch({ type: "SET_PLAYLIST", payload: [items] })
                      }
                    ></i>
                  )}
                </div>
              </div>
              <div className="video-details">
                <img src={avatar} className="avatar-image" />
                <div className="video-text">
                  <h2>{title}</h2>
                  <h2>{category}</h2>
                  <div className="card-views">
                    <p>Views:{views}</p>
                    <p>{creator}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
