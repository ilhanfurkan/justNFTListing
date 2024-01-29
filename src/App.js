import "./App.css";
import React from "react";

import { WagmiConfig, createConfig } from "wagmi";
import { mainnet, optimism, polygon } from "@wagmi/core/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import NFTListing from "./components/nftListing";
import Header from "./components/header";
import { NetworkProvider } from "./contexts/network";

const alchemyApiKey = "GF-tm8sQBaqPYCBOllNtlpygVRaPc__5";

const config = createConfig(
  getDefaultConfig({
    alchemyId: alchemyApiKey,
    chains: [polygon, mainnet, optimism],
    appName: "Ello G'ovner",
  })
);

// network'e gore nft listelemesini yapcam ama musait oldugunda bak!!!

function App() {
  return (
    <React.Fragment>
      <WagmiConfig config={config}>
        <NetworkProvider>
          <ConnectKitProvider
            theme="retro"
            options={{
              language: "tr-TR",
            }}
          >
            <Header />
            <NFTListing />
          </ConnectKitProvider>
        </NetworkProvider>
      </WagmiConfig>
    </React.Fragment>
  );
}

export default App;
