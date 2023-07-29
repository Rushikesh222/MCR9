export const initialState = {
  VideoData: [],
  AddPlaylist: [],
  search: [],
};
export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEO":
      return { ...state, VideoData: payload };
    case "SET_PLAYLIST":
      return { ...state, AddPlaylist: payload };
    case "SEARCH-TITLE":
      const Searchlist =
        payload === ""
          ? state?.VideoData
          : state?.VideoData?.filter((items) =>
              items.title.toLowerCase().includes(payload.toLowerCase())
            );

      console.log(Searchlist);
      return { ...state, search: Searchlist };
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
