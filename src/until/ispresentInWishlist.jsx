export const isItemPresentInWishlist = (data, id) => {
  console.log(data);
  return data?.find((items) => (items._id === id ? true : false));
};
