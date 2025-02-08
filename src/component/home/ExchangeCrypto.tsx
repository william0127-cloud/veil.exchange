import * as React from "react";

export default function ExchangeCrypto(props) {
  const [sendCryptoValue, setSendCryptoValue] = React.useState<number>(0);
  const [receiveCryptoValue, setReceiveCryptoValue] = React.useState<number>(0);

  const handleClickSelectCrypto = (no) => {
    props.setModalNo(no);
    props.setOpen(!props.open);
  };

  const handleClilckExchange = () => {
    const temp = props.sendCrypto;
    props.setSendCrypto(props.receiveCrypto);
    props.setReceiveCrypto(props.sendCrypto);
  };

  const handleChangeSendValue = (e) => {
    if (e.target.value == "") setSendCryptoValue(0);
    else setSendCryptoValue(parseFloat(e.target.value));
  };

  const handleChangeReceiveValue = (e) => {
    if (e.target.value == "") setReceiveCryptoValue(0);
    else setReceiveCryptoValue(parseFloat(e.target.value));
  };

  return (
    <div
      className="c-exchange__section my-4 my-lg-5 py-4 py-lg-5"
      id="exchange"
    >
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h3 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Exchange Crypto
        </h3>
      </div>
      <form
        id="exchangeForm"
        className="position-relative m-auto container-md mb-4 mb-lg-5"
      >
        <div className="row position-relative z-2 gy-4 mb-3 mb-md-4">
          <button
            className="c-exchange__swap position-absolute top-50 start-50 translate-middle bg-light rounded-circle z-3 d-flex align-items-center justify-content-center mt-3 mt-md-5"
            type="button"
            onClick={handleClilckExchange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g fill="white">
                <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z"></path>
                <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z"></path>
              </g>
            </svg>
          </button>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                <p className="h5 mb-0">You Send</p>
                {sendCryptoValue != 0 ? (
                  <p className="opacity-50 mb-0 fst-italic">{`${
                    sendCryptoValue
                  } ${props.cryptoData[props.sendCrypto].short} ≈ $${
                    sendCryptoValue * 98493
                  }`}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="p-3 p-lg-4 card-body">
                <button
                  type="button"
                  className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                  onClick={() => handleClickSelectCrypto(1)}
                >
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <div className="c-exchange__icon">
                      <img
                        alt=""
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={props.cryptoData[props.sendCrypto].url}
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                      <p className="mb-1 h5">
                        {props.cryptoData[props.sendCrypto].name}
                      </p>
                      <p className="mb-1 opacity-50">
                        {props.cryptoData[props.sendCrypto].short}
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g fill="currentColor">
                      <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                    </g>
                  </svg>
                </button>
                <div
                  className="c-exchange__input bg-light rounded-3 p-3 w-100"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Send Amount"
                >
                  <div className="mb-0 flex-grow-1 w-100">
                    <input
                      name="send"
                      placeholder="0.0000"
                      required
                      type="number"
                      id="exchangeForm.SendAmount"
                      className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                      onChange={handleChangeSendValue}
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                <p className="h5 mb-0">You Receive</p>
              </div>
              <div className="p-3 p-lg-4 card-body">
                <button
                  type="button"
                  className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                  onClick={() => handleClickSelectCrypto(2)}
                >
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <div className="c-exchange__icon">
                      <img
                        alt=""
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={props.cryptoData[props.receiveCrypto].url}
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                      <p className="mb-1 h5">
                        {props.cryptoData[props.receiveCrypto].name}
                      </p>
                      <p className="mb-1 opacity-50">
                        {props.cryptoData[props.receiveCrypto].short}
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g fill="currentColor">
                      <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                    </g>
                  </svg>
                </button>
                <div
                  className="c-exchange__input border-1 border bg-light rounded-3 p-3 d-flex flex-row justify-content-start align-items-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Approx. Receive Amount"
                >
                  <div className="mb-0 flex-grow-1">
                    <input
                      name="receive"
                      placeholder="0.0000"
                      required
                      type="text"
                      readOnly
                      id="exchangeForm.ReceiveAmount"
                      className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                      onChange={handleChangeReceiveValue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 card-header">
              <p className="h5 mb-2 mb-sm-0">Receiving Wallet Address</p>
            </div>
            <div className="p-3 p-lg-4 card-body">
              <div className="c-exchange__input bg-light rounded-3 p-3">
                <div className="gy-3 gy-sm-0 row">
                  <div className="col-sm-12">
                    <div className="mb-0 flex-grow-1">
                      <input
                        placeholder="Enter Wallet Address"
                        required
                        type="text"
                        id="exchangeForm.WalletAddress"
                        className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-row align-items-center justify-content-start my-3 my-lg-4"
          style={{ transform: "none" }}
        >
          <div className="mb-0">
            <div className="">
              <input required type="checkbox" className="form-check-input" />
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <p className="opacity-75 mb-0 ms-2">
            By using the site and creating an exchange, you agree to our
            <a className="text-primary" href="/tos">
              Terms of Services
            </a>
          </p>
        </div>
        <div tabIndex={0} style={{ transform: "none" }}>
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary w-100 py-3 fs-5 fw-bold btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="me-2"
            >
              <g
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
              >
                <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                <path
                  d="M23,12A11,11,0,0,1,2.237,17.073"
                  strokeLinecap="butt"
                ></path>
                <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                <path
                  d="M1,12A11,11,0,0,1,21.763,6.927"
                  strokeLinecap="butt"
                ></path>
              </g>
            </svg>
            Exchange
          </button>
        </div>
        <p className="opacity-75 text-center mt-3 mt-lg-4">
          Already have an order number?
          <a
            className="ms-2 text-muted text-decoration-underline"
            href="/#track"
          >
            Track your order
          </a>
        </p>
      </form>
    </div>
  );
}
