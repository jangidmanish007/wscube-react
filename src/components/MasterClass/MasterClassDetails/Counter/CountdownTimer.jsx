import React from 'react';
import useCountdownTimer from '../useCountdownTimer';

export const BannerCounter = React.memo(({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div className="d-lg-flex d-none align-items-start mb-28 banner-timer">
      <div className="text-center text-white mr-40">
        <p className="m-0 fs-36 fw-600 lh-54">{String(days).padStart(2, '0')}</p>
        <span className="fs-18 fw-400 lh-27">Days</span>
      </div>
      <div className="mr-31 fs-40 text-white lh-48 timer-colon">:</div>
      <div className="text-center text-white mr-40">
        <p className="m-0 fs-36 fw-600 lh-54">{String(hours).padStart(2, '0')}</p>
        <span className="fs-18 fw-400 lh-27">Hours</span>
      </div>
      <div className="mr-31 fs-40 text-white lh-48">:</div>
      <div className="text-center text-white mr-40">
        <p className="m-0 fs-36 fw-600 lh-54">{String(minutes).padStart(2, '0')}</p>
        <span className="fs-18 fw-400 lh-27">Minutes</span>
      </div>
      <div className="mr-31 fs-40 text-white lh-48">:</div>
      <div className="text-center text-white mr-40">
        <p className="m-0 fs-36 fw-600 lh-54">{String(seconds).padStart(2, '0')}</p>
        <span className="fs-18 fw-400 lh-27">Seconds</span>
      </div>
    </div>
  );
});

export const RegisterCounter = React.memo(({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div className="d-flex align-items-center mb-lg-56 mb-28 justify-content-lg-start justify-content-center">
      <div className="py-13 px-20 bg-white reg-timer rounded-40 border-w border-color-1 fs-14 lh-21 fw-600 mr-10">
        <span className="lh-24">
          {String(days).padStart(2, '0')} <b className="fw-600">Day</b>
        </span>
        <p className="m-0 d-lg-none text-color-10 fs-12 lh-18">Day</p>
      </div>
      <div className="m-0 d-lg-none text-color-10 fs-20 lh-30">:</div>
      <div className="py-13 px-20 bg-white reg-timer rounded-40 border-w border-color-1 fs-14 lh-21 fw-600 mr-10">
        <span className="lh-24">
          {String(hours).padStart(2, '0')} <b className="fw-600">Hours</b>
        </span>
        <p className="m-0 d-lg-none text-color-10 fs-12 lh-18">Hours</p>
      </div>
      <div className="m-0 d-lg-none text-color-10 fs-20 lh-30">:</div>
      <div className="py-13 px-20 bg-white reg-timer rounded-40 border-w border-color-1 fs-14 lh-21 fw-600 mr-10">
        <span className="lh-24">
          {String(minutes).padStart(2, '0')} <b className="fw-600">Minutes</b>
        </span>
        <p className="m-0 d-lg-none text-color-10 fs-12 lh-18">Minutes</p>
      </div>
      <div className="m-0 d-lg-none text-color-10 fs-20 lh-30">:</div>
      <div className="py-13 px-20 bg-white reg-timer rounded-40 border-w border-color-1 fs-14 lh-21 fw-600">
        <span className="lh-24">
          {String(seconds).padStart(2, '0')} <b className="fw-600">Seconds</b>
        </span>
        <p className="m-0 d-lg-none text-color-10 fs-12 lh-18">Seconds</p>
      </div>
    </div>
  );
});

export const StickyFooterCounter = React.memo(({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div className="d-xl-flex d-none align-items-start ml-28">
      <div className="text-center text-white mr-12">
        <p className="m-0 fs-16 fw-600 lh-24">{String(days).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Days</span>
      </div>
      <div className="mr-12 fs-20 text-white lh-30 timer-colon">:</div>
      <div className="text-center text-white mr-12">
        <p className="m-0 fs-16 fw-600 lh-24">{String(hours).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Hours</span>
      </div>
      <div className="mr-12 fs-20 text-white lh-30">:</div>
      <div className="text-center text-white mr-12">
        <p className="m-0 fs-16 fw-600 lh-24">{String(minutes).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Minutes</span>
      </div>
      <div className="mr-12 fs-20 text-white lh-30">:</div>
      <div className="text-center text-white mr-12">
        <p className="m-0 fs-16 fw-600 lh-24">{String(seconds).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Seconds</span>
      </div>
    </div>
  );
});

export const ThankYouCounter = React.memo(({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div className="d-flex">
      <div className="text-center text-color-1 mx-15">
        <p className="m-0 fs-16 fw-600 lh-24">{String(days).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Days</span>
      </div>
      <div className="text-center text-color-1 mx-15">
        <p className="m-0 fs-16 fw-600 lh-24">{String(hours).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Hours</span>
      </div>
      <div className="text-center text-color-1 mx-15">
        <p className="m-0 fs-16 fw-600 lh-24">{String(minutes).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Minutes</span>
      </div>
      <div className="text-center text-color-1 mx-15">
        <p className="m-0 fs-16 fw-600 lh-24">{String(seconds).padStart(2, '0')}</p>
        <span className="fs-12 fw-400 lh-18">Seconds</span>
      </div>
    </div>
  );
});
