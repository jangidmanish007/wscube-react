'use client';
import { getPortfolioCategoryList, getPortfolioList } from '@/_services/portfolioServices';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';

export default function UserPortfolioCategory({ usersPortfolioData, categorySlug }) {
  const route = usePathname();
  const [categoryList, setCategoryList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const recordsPerPage = 15;
  const ulRef = useRef(null);

  useEffect(() => {
    getPortfolioCategories();
    getPortfolioData(1, true);
  }, [route]);

  useEffect(() => {
    if (ulRef.current && isScrolled) {
      const activeElement = ulRef.current.querySelector('.active');
      if (activeElement) {
        const activeElementLeft = activeElement.offsetLeft;
        const activeElementWidth = activeElement.offsetWidth;
        const ulWidth = ulRef.current.clientWidth;
        const scrollPosition = activeElementLeft - (ulWidth / 2 - activeElementWidth / 2);
        const maxScroll = ulRef.current.scrollWidth - ulRef.current.clientWidth;

        setTimeout(() => {
          ulRef?.current?.scrollTo({
            left: Math.min(Math.max(scrollPosition, 0), maxScroll),
            behavior: 'smooth',
          });
        }, 1000);
      }
    }
  }, [route, isScrolled]);

  async function getPortfolioCategories() {
    const response = await getPortfolioCategoryList();
    if (response?.status) {
      const data = response?.result;
      setCategoryList(data);
      setIsScrolled(true);
    } else {
      setCategoryList([]);
      setIsScrolled(false);
    }
  }

  async function getPortfolioData(page, reset = false) {
    const params = {
      limit: recordsPerPage,
      page: page,
    };
    if (categorySlug) {
      params.category_slug = categorySlug;
    }
    const isPfCategory = Cookies.get('pfCategory');
    setIsLoading(true);
    const response = await getPortfolioList(params);
    if (response?.status) {
      setIsLoading(false);
      setCurrentPage(response?.result?.currentPage);
      setTotalRecords(response?.result?.totalRecords);
      setPortfolioList((prev) => (reset ? response?.result?.portfolios : [...prev, ...response?.result?.portfolios]));
      if (isPfCategory) {
        window.scrollTo({ top: 500, behavior: 'smooth' });
        Cookies.remove('pfCategory');
      }
    } else {
      setIsLoading(false);
      if (isPfCategory) {
        Cookies.remove('pfCategory');
      }
    }
  }

  return (
    <section className="pb-70 ">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12">
            {(categoryList?.length > 0 && (
              <ul
                className="d-flex align-items-center common-listing-tabbing-2 pb-6 list-unstyled mb-lg-47 mb-36"
                ref={ulRef}
              >
                <li className="mr-20 text-nowrap">
                  <Link href={'/portfolio'} onClick={() => Cookies.set('pfCategory', true)}>
                    <span
                      className={`list-item cursor-pointer px-22 h-size-40 d-flex align-items-center text-nowrap
                    bg-white fs-14 lh-21 fw-600 label-color-1 border-w-2 border-color-1 rounded-12 text-color-1 ${
                      (route == '/portfolio' && 'active') || ''
                    }`}
                    >
                      All
                    </span>
                  </Link>
                </li>
                {categoryList?.map((item, index) => {
                  return (
                    <li className="mr-20 text-nowrap" key={index}>
                      <Link href={`/portfolio/${item?.slug}`} onClick={() => Cookies.set('pfCategory', true)}>
                        <span
                          className={`list-item cursor-pointer px-22 h-size-40 d-flex align-items-center text-nowrap
                    bg-white fs-14 lh-21 fw-600 label-color-1 border-w-2 border-color-1 rounded-12 text-color-1 ${
                      (categorySlug == `${item?.slug}` && 'active') || ''
                    }`}
                        >
                          {item?.category_name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )) ||
              ''}
            {(portfolioList?.length > 0 && (
              <div className="d-grid grid-xl-cols-5 grid-lg-cols-4 grid-md-cols-3 grid-sm-cols-2 grid-cols-1 grid-gap-20 mb-53">
                {portfolioList?.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div
                        className="custom-card transation-3 hover-shadow-4 border-w-2 rounded-20 h-100 user-portfolio-cards"
                        style={{ background: '#F5F7FF' }}
                      >
                        <div className="custom-card-body px-16 py-16">
                          <div
                            className="img-box max-h-140 overflow-hidden rounded-19 mb-8"
                            style={{ background: '#E5E7EB' }}
                          >
                            {(item?.User?.profile_pic && (
                              <Image
                                src={`${process.env.IMG_PATH}${item?.User?.profile_pic}`}
                                width={140}
                                height={140}
                                alt="Image"
                                className="w-full img-fluid transation-3 object-fit-cover"
                              />
                            )) || (
                              <Image
                                src={`/images/portfolio/default-user-avtar.svg`}
                                width={140}
                                height={140}
                                alt="Image"
                                className="w-full img-fluid transation-3 object-fit-cover"
                              />
                            )}
                          </div>
                          <div className="text-center">
                            <h3
                              className="fs-16 fw-600 lh-24 text-color-1 mb-12 line-clamp-2"
                              title={item?.User?.full_name}
                            >
                              {item?.User?.full_name}
                            </h3>
                            <p
                              title={item?.User?.highlights}
                              className="fs-12 fw-400 lh-18 text-color-34 mb-0 line-clamp-2"
                            >
                              {item?.User?.highlights}
                            </p>
                          </div>
                        </div>
                        <div
                          className="custom-card-footer portfolio-view-card py-12 px-16 rounded-b-20 text-center"
                          style={{ background: '#E5EBFF' }}
                        >
                          {(item?.slug_url && (
                            <Link href={`/portfolio/${item?.slug_url}`}>
                              <span className="fs-14 fw-400 lh-21 text-color-1"> View Portfolio</span>
                            </Link>
                          )) || <span className="fs-14 fw-400 lh-21 text-color-1"> View Portfolio</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )) ||
              ''}

            {portfolioList?.length > 0 && portfolioList.length < totalRecords && (
              <div className="text-center">
                <button
                  className="outline-none fs-14 hover-shadow-2 min-h-40 bg-white fw-600 text-color-1 border-w-2 rounded-12 min-h-40 px-lg-20 px-14"
                  // onClick={handleSeeAllClick}
                  onClick={() => getPortfolioData(currentPage + 1)}
                >
                  <Image
                    src={`/images/portfolio/exchange-icon.svg`}
                    width={14}
                    height={12}
                    alt="icon"
                    className={`mr-8 ${isLoading ? 'loading-icon' : ''}`}
                  />
                  Load more...
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {(!portfolioList || portfolioList?.length == 0) && !isLoading && (
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12">
              <div className="text-center py-4">
                <Image
                  src={`${process.env.LOCAL_IMAGE_PATH}images/portfolio/empty-box.svg`}
                  width={250}
                  height={250}
                  alt="Image"
                  className="img-fluid mb-3"
                />
                <h5 className="fs-lg-22 fs-20 fw-600 text-color-1 lh-30">No Portfolios Available!</h5>
                <p className="fs-lg-16 fs-14 fw-400 lh-27 mb-0 text-color-7">
                  It seems you haven't created any portfolios yet. Start adding your projects to showcase your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
