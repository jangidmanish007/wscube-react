import Image from 'next/image';

export const CustomPrevArrow = ({ onClick }) => (
  <button
    className="custom-slick-button custom-prev-arrow position-absolute d-none d-lg-flex
     align-items-center justify-content-center p-0 rounded-circle bg-color-2 border-w border-color-1 transation-2 cursor-pointer"
    onClick={onClick}
  >
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5632 1.5V1.5C13.1395 5.48445 16.3382 8.58736 20.3174 10.1769C20.3792 10.2016 20.4401 10.226 20.5
         10.25M20.5 10.25C20.4401 10.274 20.3792 10.2984 20.3174 10.3231C16.3382 11.9126 13.1395 15.0156 11.5632
          19V19M20.5 10.25C10.5416 10.25 1.5 10.25 1.5 10.25"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

// eslint-disable-next-line react/prop-types
export const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-slick-button custom-next-arrow position-absolute d-none d-lg-flex
     align-items-center justify-content-center p-0 rounded-circle bg-color-2 border-w border-color-1 transation-2 cursor-pointer"
    onClick={onClick}
  >
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5632 1.5V1.5C13.1395 5.48445 16.3382 8.58736 20.3174 10.1769C20.3792 10.2016 20.4401 10.226 20.5 10.25M20.5
         10.25C20.4401 10.274 20.3792 10.2984 20.3174 10.3231C16.3382 11.9126 13.1395 15.0156 11.5632 19V19M20.5 10.25C10.5416
          10.25 1.5 10.25 1.5 10.25"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
