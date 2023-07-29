import { createContext, useContext, useEffect, useState } from "react";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
};
export const useDate = () => useContext(CardContext);
