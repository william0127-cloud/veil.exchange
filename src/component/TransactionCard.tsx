import * as React from "react";

export default function TransactionCard(props) {
  return (
    <div className="card" style={{ marginTop: 10 }}>
      <div className="card-body">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="d-flex flex-row align-items-center justify-content-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                strokeWidth="1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="7.5"></circle>
                <polyline points="8 3 8 8 13 8"></polyline>
              </g>
            </svg>
            <p className="mb-0 ms-2">{props.item.time}</p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-end">
            <div className="d-flex flex-row align-items-center">
              <div className="c-recent-transaction__icon">
                <img
                  alt=""
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  src={`/assets/svg/${props.item.fromCoin}.svg`}
                  style={{ color: "transparent" }}
                />
              </div>
              <p className="mb-0 fw-bold ms-2">{props.item.value}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="mx-3"
            >
              <g
                strokeWidth="1"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
              </g>
            </svg>
            <div className="d-flex flex-row align-items-center">
              <div className="c-recent-transaction__icon">
                <img
                  alt=""
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  src={`/assets/svg/${props.item.toCoin}.svg`}
                  style={{ color: "transparent" }}
                />
              </div>
              <p className="mb-0 fw-bold ms-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
