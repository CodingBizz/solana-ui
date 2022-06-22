import React from "react";
import "./App.scss";
import { Title, Content } from "./components/text";
import Transaction from "./components/transaction/transaction";
import Account from "./utils/account";
import Airdrop from "./utils/airdrop";

function App() {
  const { transactions } = Account();
  const { processing, getAirdrop } = Airdrop();

  return (
    <div className="App">
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

          return <Transaction key={index} {...transactionData} />;
        })}
      <button onClick={getAirdrop}>Get airdrop of 1 SOL</button>
    </div>
  );
}

export default App;
