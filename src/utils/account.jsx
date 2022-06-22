import { useState, useEffect, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Account = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const init = useCallback(async () => {
    if (publicKey) {
      let acc = await connection.getAccountInfo(publicKey);
      setAccount(acc);
      let transactions = await connection.getConfirmedSignaturesForAddress2(
        publicKey,
        {
          limit: 5,
        }
      );
      setTransactions(transactions);
    }
  }, [publicKey, connection]);

  useEffect(() => {
    if (publicKey) {
      setInterval(init, 1000);
    }
  }, [init, publicKey]);

  return { account, transactions };
};

export default Account;
