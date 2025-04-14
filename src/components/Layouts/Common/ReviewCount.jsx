import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';

export default function ReviewCount({ reviewCount, iconColor }) {
  const fullStars = Math.floor(reviewCount);
  const hasHalfStar = reviewCount % 1 !== 0;
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          width={16}
          height={18}
          className={`me-1 ${(iconColor == 'blue' && 'text-color-3') || 'text-color-27'} `}
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfStroke}
          width={16}
          height={18}
          className={`me-1 ${(iconColor == 'blue' && 'text-color-3') || 'text-color-27'} `}
        />
      );
    } else {
      if (!iconColor) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            width={16}
            className={`me-1 ${(iconColor == 'blue' && 'text-color-29') || ''} `} // Use a different color for empty stars if needed
          />
        );
      }
    }
  }

  return (
    <div className={`d-flex align-items-center ${(iconColor && 'fs-18') || 'fs-lg-16 fs-12 ps-2 pe-1'}`}>{stars}</div>
  );
}
