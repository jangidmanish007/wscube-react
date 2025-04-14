import Image from 'next/image';
import React from 'react';

export default function CertificateCards(props) {
  const { featureData } = props;
  return (
    <div className="cartificate-card h-full">
      <div className="img-box mb-16 ">
        <Image
          src={process.env.IMG_PATH + featureData?.icon}
          width={48}
          height={48}
          alt="certificat-icon"
          className="img-fluid mx-lg-0 mx-auto"
        />
      </div>
      <div className="info mb-3">
        <h3 className="fs-18 fw-600 lh-27 text-color-33 min-h-lg-54 text-lg-start text-center">{featureData?.title}</h3>
        <p className="fs-14 fw-400 lh-21 text-color-2  text-lg-start text-center">{featureData?.description}</p>
      </div>
    </div>
  );
}
