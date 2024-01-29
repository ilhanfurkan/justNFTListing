import React from "react";
import { Networks } from "../../config/networks.config";
import "./modal.css";
import { useNetwork } from "../../contexts/network";

const NetworkModal = (props) => {
  const { network, updateNetwork } = useNetwork();
  return (
    <div className={"containerModal"}>
      {Networks.map((network, index) => (
        <div
          key={index}
          onClick={() => {
            updateNetwork(network.name);
            // window.location.reload();
          }}
        >
          {network.name}
        </div>
      ))}
    </div>
  );
};

export default NetworkModal;
