import React, { useState } from "react";

interface Pay {
  date: string;
  eth: number;
  usd: number;
}

const payRecord: Pay[] = [
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
  { date: "03/02/2024", eth: 1.6, usd: 4.2 },
  { date: "13/06/2024", eth: 2, usd: 5.3 },
  { date: "16/05/2024", eth: 1.9, usd: 5 },
  { date: "09/11/2024", eth: 0.5, usd: 1.3 },
  { date: "29/03/2024", eth: 4.2, usd: 11.1 },
];

export default function RecordTable() {
  const [page, setPage] = React.useState<number>(0);

  const handleClickPrev = () => {
    if (page) setPage(page - 1);
  };

  const handleClickNext = () => {
    if (page != Math.floor((payRecord.length - 1) / 5)) setPage(page + 1);
  };

  return (
    <div>
      <table className="rounded-2 table table-dark table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th className="text-end">Payout</th>
          </tr>
        </thead>
        <tbody>
          {payRecord
            .slice(5 * page, Math.min(5 * (page + 1), payRecord.length))
            .map((item, index) => {
              return (
                <tr className="cursor-pointer">
                  <td>{item.date}</td>
                  <td className="text-end d-flex flex-row align-items-center justify-content-end">
                    <p className="mb-0">{item.eth.toFixed(2)} ETH</p>
                    <span className="small text-white-50 ms-2">{`$${item.usd.toFixed(
                      1
                    )}K`}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClickPrev}
        >
          Prev
        </button>
        <span className="mx-2 my-2">{`Page ${page + 1} of ${
          Math.floor((payRecord.length - 1) / 5) + 1
        }`}</span>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
