import * as React from "react";

export default function LatestUpdates(props) {
  return (
    <div className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
          Latest Updates
        </h4>
      </div>
      <div className="gy-4 gy-md-0 row row-cols-md-3 row-cols-1">
        {props.updateCardData.map((data, index) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      style={{ color: "transparent" }}
                      src={data.logo}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">{data.title}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released: 07/01/25
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
