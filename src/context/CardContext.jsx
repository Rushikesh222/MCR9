import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { categories } from "../assets/Category";
import { initialState, videoReducer } from "../Reducer/Reducer";
import { videos } from "../assets/videoData";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  console.log(state);
  useEffect(() => {
    const storedVideo = localStorage.getItem("video");
    if (storedVideo) {
      dispatch({
        type: "SET_VIDEO",
        payload: JSON.parse(storedVideo),
      });
    } else {
      localStorage.setItem("video", JSON.stringify(videos));
      dispatch({ type: "SET_VIDEO", payload: videos });
    }
  }, [videos]);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
