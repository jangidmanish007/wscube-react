import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function FaqCategories({ handleTabClick, activeSection, faqCategoryList }) {
  const [isStickyTop, setIsStickyTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1110) {
        setIsStickyTop(true);
      } else {
        setIsStickyTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul
      className="list-unstyled category-wise-faq mb-md-0 mb-60 position-sticky transation-2"
      style={{ top: (isStickyTop && '96px') || '40px' }}
    >
      {faqCategoryList?.map((item, index) => {
        return (
          <li
            key={index}
            className={`mb-12 cursor-pointer rounded-8 ${(activeSection === item.id && 'active') || ''}`}
            onClick={() => handleTabClick(item.id)}
          >
            <div className="py-12 px-12">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="category-icon mr-12 max-w-20">
                    <Image
                      src={`${process.env.IMG_PATH}${item?.icon}`}
                      width={20}
                      height={20}
                      className="w-auto h-size-20 max-h-20 img-box img-fluid"
                    />
                  </div>
                  <span className="fs-16 fw-600 lh-24 text-color-1 text-capitalize">{item?.name}</span>
                </div>
                <div className="">
                  <FontAwesomeIcon icon={faChevronRight} className="fs-14" width={14} height={14} />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
