import React from "react";
import "./App.scss";
import { Title, Content } from "./components/text";
import TransactionRow from "./components/transaction/transaction";
import Account from "./utils/account";
import Airdrop from "./utils/airdrop";
import Button from "./components/button/Button";

const {
  // Keypair,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

function App() {
  const { transactions } = Account();
  const { processing, getAirdrop } = Airdrop();
  const transactionObj = new Transaction();

  const mint = () => {
    console.log("heyhey");
  };

  transactionObj.add(
    SystemProgram.transfer({
      // fromPubkey: a,
      // toPubkey: ,
      lamports: 50000000,
    })
  );

  return (
    <div className="App">
      <Button clickFunction={mint} label="Mint bro!" />
      {console.log(transactions)}
      <Title tag={"h3"} text={"Recent transactions"} />
      {processing && <Title text="Airdrop processing" />}
      {!processing &&
        transactions?.map((item, index) => {
          const transactionData = {
            content: {
              text: item?.signature,
            },
            date: {
              text: item?.blockTime,
            },
          };

          return <TransactionRow key={index} {...transactionData} />;
        })}
      <button onClick={getAirdrop}>Get airdrop of 1 SOL</button>
    </div>
  );
}

export default App;
