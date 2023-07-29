import { NavLink } from "react-router-dom";
import "./Rightside.css";
export const RightNav = () => {
  return (
    <div className="sidebar">
      <div className="icon-contianer">
        <NavLink className="nav-link" to="/">
          <div className="sidebarOption ">
            <i class="fa-solid fa-house"></i>
            <h2>Home</h2>
          </div>
        </NavLink>
        <NavLink className="nav-link" to="/explore">
          <div className="sidebarOption ">
            <i class="fa-solid fa-compass"></i>
            <h2>Explore</h2>
          </div>
        </NavLink>
        <NavLink className="nav-link" to="/bookmark">
          <div className="sidebarOption ">
            <i class="fa-solid fa-list"></i>
            <h2>Playlist</h2>
          </div>
        </NavLink>
        <NavLink className="nav-link" to="/watchlater">
          <div className="sidebarOption ">
            <i class="fa-solid fa-clock"></i>
            <h2>Watch History</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
