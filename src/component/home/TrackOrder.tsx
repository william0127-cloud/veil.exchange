import * as React from "react";

export default function TrackOrder() {
  return (
    <div
      id="track"
      className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container"
    >
      <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Track your Order
        </h4>
        <p className="text-center text-primary mb-0">
          Already have an order number? Check the status of your order
        </p>
      </div>
      <div className="m-auto container-sm">
        <div className="card">
          <div className="card-body">
            <form className="d-flex flex-column flex-sm-row align-items-start">
              <div className="mb-0 flex-grow-1">
                <input
                  placeholder="#6PCF012721"
                  required
                  type="text"
                  id="exchangeForm.WalletAddress"
                  className="bg-dark h4 fs-4 text-white mb-0 py-3 px-3 form-control"
                />
                <div className="invalid-feedback">
                  Error. Invalid order number.
                </div>
              </div>
              <button
                type="submit"
                value="Submit"
                className="mt-3 mt-sm-0 ms-0 ms-sm-3 py-3 px-4 px-md-5 fw-bold btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="me-2"
                >
                  <g fill="currentColor">
                    <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"></path>
                  </g>
                </svg>
                Track Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
