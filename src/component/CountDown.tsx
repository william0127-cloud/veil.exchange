import * as React from "react";

export default function CountDown() {
  const countDownDate = new Date("Feb 10, 2025 02:37:25").getTime();
  const [days, setDays] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);

  // Update the count down every 1 second
  setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);
  return (
    <div className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div className="align-items-center justify-content-center m-auto text-center row">
        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="h2 text-primary text-center">
              Next Revenue Share Airdrop
            </p>
            <h2 className="h1 text-gradient text-center position-relative z-3 d-inline mb-4">
              Countdown till next Payout
            </h2>
            <div className="w-100 g-2 g-sm-1 g-md-3 row">
              <div className="col-md-3 col-sm-3 col-6">
                <div className="w-100 card">
                  <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                    <p className="h1 text-primary mb-0 text-center">{days}</p>
                    <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                      Days
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <div className="w-100 card">
                  <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                    <p className="h1 text-primary mb-0 text-center">{hours}</p>
                    <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                      Hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <div className="w-100 card">
                  <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                    <p className="h1 text-primary mb-0 text-center">
                      {minutes}
                    </p>
                    <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                      Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-6">
                <div className="w-100 card">
                  <div className="p-3 mb-0 d-flex flex-column align-items-center justify-content-center gap-2 card-body">
                    <p className="h1 text-primary mb-0 text-center">
                      {seconds}
                    </p>
                    <p className="fs-5 text-white-50 mb-0 text-center fw-bold">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
