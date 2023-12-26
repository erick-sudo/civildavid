import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [launching, setLaunching] = useState(true);

  const contextData = {
    launching,
    setLaunching
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
