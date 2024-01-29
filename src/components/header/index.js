import React from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import "./header.css";
// import NetworkModal from "../modal";

const Header = () => {
  return (
    <div className="header">
      {/* <button className="networkButton">Network</button> */}
      {/* <NetworkModal/> */}
      <h1 className="title">NFT Listing</h1>
      <ConnectKitButton />
    </div>
  );
};

export default Header;
