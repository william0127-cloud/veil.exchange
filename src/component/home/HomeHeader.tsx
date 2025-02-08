import * as React from "react";

function HeaderContainer() {
  return (
    <header className="c-hero px-4 px-lg-5 mb-4 mb-md-5 d-flex flex-column justify-content-center align-items-center position-relative z-3 overflow-hidden">
      <div className="c-hero__container d-flex flex-column justify-content-center align-items-center position-relative z-3 container">
        <h1 className="c-hero__title fw-bold text-center mb-3 mb-lg-4">
          <span className="text-primary">Privacy Driven</span> <br />
          <span className="text-gradient">Crypto Exchange</span>
        </h1>
        <p className="fs-5 text-muted text-center lh-lg mb-0">
          Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless
          security and privacy. No sign-up or limits.
        </p>
        <a className="fs-5 text-muted text-center lh-lg mb-0" href="/token">
          Powered by our Veil utility token.
        </a>
        <a className="h5 mt-3 mt-lg-4 text-white" href="/#exchange">
          <span className="text-decoration-underline link-offset-3">
            Try the Exchange Now{" "}
          </span>
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
              <line x1="2" y1="12" x2="15" y2="12"></line>
              <polygon points="15 17 15 7 22 12 15 17"></polygon>
            </g>
          </svg>
        </a>
        <div className="g-3 w-100 mt-4 mt-lg-5 row row-cols-sm-2 row-cols-1">
          <div className="col">
            <div className="border rounded-3 bg-medium p-3 text-center">
              <p className="mb-2 text-uppercase small">
                Lifetime Volume Swapped
              </p>
              <p className="mb-0 h4 fw-bolder text-primary">$45,179,208</p>
            </div>
          </div>
          <div className="col">
            <div className="border rounded-3 bg-medium p-3 text-center">
              <p className="mb-2 text-uppercase small">Past 24-Hour Volume</p>
              <p className="mb-0 h4 fw-bolder text-primary">$26,155</p>
            </div>
          </div>
        </div>
      </div>
      <video
        className="videoTag position-absolute w-100 top-0 start-0 end-0 bottom-0 z-n1 object-fit-cover h-100"
        autoPlay
        loop
        muted
        poster="/hero-bg.webp"
      >
        <source src="/herobackground.webm" type="video/webm" />
      </video>
    </header>
  );
}
export default HeaderContainer;
