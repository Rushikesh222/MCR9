import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { VideoListing } from "./Page/VideoListing";
import { Explore } from "./Page/Explore";
import { Watchlater } from "./Page/Watchlater";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting/:categoryname" element={<VideoListing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watchlater" element={<Watchlater />} />
      </Routes>
    </div>
  );
}

export default App;
