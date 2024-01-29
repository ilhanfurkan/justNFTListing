import { useAccount } from "wagmi";
// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Alchemy } from "alchemy-sdk";
import { useEffect, useState } from "react";
import "./nft.css";
import { useNetwork } from "../../contexts/network";

export default function NFTListing(props) {
  const { network } = useNetwork();

  console.log(network.trim('"'), "naber babus");
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: "GF-tm8sQBaqPYCBOllNtlpygVRaPc__5", // Replace with your Alchemy API Key.
    network: network, // Replace with your network.
  };

  console.log(settings, "settings");

  //@ts-ignore
  const alchemy = new Alchemy(settings);

  const [NFTs, setNFTs] = useState();

  const { address } = useAccount();

  useEffect(() => {
    if (address !== undefined) {
      alchemy.nft.getNftsForOwner(address).then((res) => {
        setNFTs(res.ownedNfts);
        console.log(res.ownedNfts);
      });
    }
  }, [address]);

  console.log(NFTs, "asd");

  return (
    <div className="container">
      <div className="content">
        {address &&
          NFTs &&
          NFTs?.map(
            (x) =>
              x?.media?.length !== 0 &&
              x.rawMetadata.image !== "" && (
                <div
                  className="card"
                  onClick={() => console.log(x.rawMetadata.image, " asdasd")}
                >
                  <img src={x?.rawMetadata?.image} height={340} width={340} />
                  <div className="title">{x?.rawMetadata?.name}</div>
                  <div className="desc">
                    {x?.rawMetadata?.description?.slice(0, 180)}
                    {x?.rawMetadata?.description?.length <= 180 ? "" : "..."}
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
