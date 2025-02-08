import * as React from "react";

export default function CryptoModal(props) {
  const handleClose = () => {
    props.setOpen(!props.open);
  };

  const handleClickCrypto = (index) => {
    if (props.modalNo == 1) props.setSendCrypto(index);
    else props.setReceiveCrypto(index);
    props.setOpen(!props.open);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fade modal show"
      tabIndex={-1}
      style={{ paddingRight: 12, display: props.open ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title h4 mb-0">Select Crypto to Receive</h5>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                >
                  <line x1="19" y1="5" x2="5" y2="19"></line>
                  <line x1="19" y1="19" x2="5" y2="5"></line>
                </g>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3 input-group">
              <span
                className="h-100 mb-0 py-3 input-group-text"
                id="searchToken-addon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  >
                    <polyline
                      points="16.568 14.568 22 20 20 22 14.568 16.568"
                      strokeLinecap="butt"
                    ></polyline>
                    <path
                      d="M16.568,14.568l-.022.023a8.036,8.036,0,0,1-1.956,1.955l-.022.022L20,22l2-2Z"
                      stroke="none"
                      fill="currentColor"
                    ></path>
                    <circle cx="10" cy="10" r="8"></circle>
                  </g>
                </svg>
              </span>
              <input
                placeholder="Search..."
                type="text"
                id="SearchToken"
                className="form-control form-control-lg"
                value=""
              />
            </div>
            <div className="list-group">
              <div className="p-0 bg-transparent border-0 list-group-item">
                {props.cryptoData.map((data, index) => {
                  return (
                    <div
                      role="button"
                      tabIndex={0}
                      className="c-exchange__select-token px-4 py-4 border-1 border-top d-flex flex-row align-items-center justify-content-start w-100 rounded-0 btn btn-none"
                      onClick={() => handleClickCrypto(index)}
                    >
                      <div className="c-exchange__icon">
                        <img
                          alt={data.name}
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          src={data.url}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                        <p className="mb-2 h4">{data.name}</p>
                        <p className="mb-0 badge bg-dark fs-6 opacity-50">
                          {data.short}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
