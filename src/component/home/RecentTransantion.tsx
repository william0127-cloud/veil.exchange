import * as React from "react";
import TransactionCard from "../TransactionCard.tsx";

interface Transaction {
  time: string;
  fromCoin: string;
  toCoin: string;
  value: number;
}

const transactionData: Transaction[] = [
  { time: "06/02/2025 - 08:03", fromCoin: "usdc", toCoin: "eth", value: 1000 },
  { time: "06/08/2024 - 06:23", fromCoin: "ada", toCoin: "dai", value: 234 },
  { time: "14/03/2024 - 02:53", fromCoin: "btc", toCoin: "ada", value: 542 },
  { time: "12/11/2024 - 15:12", fromCoin: "sol", toCoin: "btc", value: 622 },
  { time: "26/07/2024 - 11:52", fromCoin: "uni", toCoin: "ltc", value: 6446 },
];

export default function RecentTransaction() {
  return (
    <div className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Recent Transaction
        </h4>
      </div>
      <div className="list-group">
        <div className="mb-2 p-0 border-0 list-group-item">
          {transactionData.map((item, index) => {
            return <TransactionCard item={item}></TransactionCard>;
          })}
        </div>
      </div>
    </div>
  );
}
