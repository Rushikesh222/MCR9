export const initialState = {
  VideoData: [],
  AddPlaylist: [],
};
export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEO":
      return { ...state, VideoData: payload };
    case "SET_PLAYLIST":
      return { ...state, AddPlaylist: payload };
    case "REMOVE_PLAYLIST":
      const updatedPlaylist = state?.VideoData?.filter(
        (items) => items.id !== payload.id
      );
      return { ...state, AddPlaylist: updatedPlaylist };
    case "ADD_PLAYLIST":
      const updatedVideoData = [...state.videoData, payload];
      localStorage.setItem("video", JSON.stringify(updatedVideoData));
      return { ...state, VideoData: updatedVideoData };

    default:
      return state;
  }
};
