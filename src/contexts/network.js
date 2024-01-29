import React, { createContext, useContext, useState } from "react";
const NetworkContext = createContext();

const NetworkProvider = ({ children }) => {
  localStorage.setItem("network", "polygon-mainnet");
  const [network, setNetwork] = useState(localStorage.getItem("network"));

  const updateNetwork = (newNetwork) => {
    localStorage.setItem("network", newNetwork);
    setTimeout(() => {
      setNetwork(localStorage.getItem("network"));
    }, 1000);
  };

  const contextValue = {
    network,
    updateNetwork,
  };

  return (
    <NetworkContext.Provider value={contextValue}>
      {children}
    </NetworkContext.Provider>
  );
};

const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error("useNetwork hook must be used within a NetworkProvider");
  }
  return context;
};

export { NetworkProvider, useNetwork };
