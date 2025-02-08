import * as React from "react";

export default function SupportedCrypto(props) {
  return (
    <div className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Supported Crypto
        </h4>
      </div>
      <div className="c-supportedLogos d-flex align-items-center overflow-hidden position-relative">
        <div className="c-supportedLogos__logos d-flex">
          {props.cryptoData.map((data, index) => {
            return (
              <img
                alt={data.name}
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={data.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
