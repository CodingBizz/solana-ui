import { useState, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";

const Airdrop = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [processing, setProcessing] = useState(false);
  const getAirdrop = useCallback(async () => {
    setProcessing(true);

    try {
      const airdropSignature = await connection.requestAirdrop(
        publicKey,
        web3.LAMPORTS_PER_SOL
      );
      const latestBlockHash = await connection.getLatestBlockhash();

      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: airdropSignature,
      });
    } catch (error) {
      console.warn(error);
    }

    setProcessing(false);
  }, [publicKey, connection]);

  return { processing, getAirdrop };
};

export default Airdrop;
