'use client';
import React, { useEffect, useState } from 'react';
import MasterClassesListingCard from './MasterClassesListingCard';
import { getMasterClassList } from '@/_services/eventsService';

export default function MainAllMasterClasses({ categoriesList, masterClassListData }) {
  const [isActiveCourse, setActiveCourse] = useState(0);
  const [filteredClassList, setFilteredClassList] = useState([]);

  useEffect(() => {
    if (masterClassListData) {
      setFilteredClassList(masterClassListData);
    }
  }, [masterClassListData]);

  useEffect(() => {
    masterListFilterData();
  }, [isActiveCourse]);

  async function masterListFilterData() {
    const params = {};
    if (isActiveCourse !== 0) {
      params.category_slug = isActiveCourse;
    }
    const response = await getMasterClassList(params);
    if (response?.status) {
      setFilteredClassList(response?.result);
    } else {
      setFilteredClassList([]);
    }
  }

  return (
    <section className="pt-lg-52 pb-lg-60 pt-35 pb-48">
      <div className="container-main container-w-xl-1202">
        <div className="row">
          <div className="col-12 pr-lg-16 pr-0">
            <ul className="d-flex align-items-center common-listing-tabbing pb-6 list-unstyled mb-52">
              <li
                className={`cursor-pointer px-12 h-size-40 d-flex align-items-center mr-20 text-nowrap
                    bg-white fs-14 lh-21 fw-600 label-color-1 border-w-2 border-color-1 rounded-12 ${
                      (isActiveCourse == 0 && 'active') || ''
                    }`}
                onClick={() => setActiveCourse(0)}
              >
                All Classes
              </li>
              {categoriesList?.map((item, index) => {
                return (
                  <li
                    className={`cursor-pointer px-12 h-size-40 d-flex align-items-center mr-20 text-nowrap
                    bg-white fs-14 lh-21 fw-600 label-color-1 border-w-2 border-color-1 rounded-12 ${
                      (isActiveCourse == item?.slug && 'active') || ''
                    }`}
                    key={index}
                    onClick={() => setActiveCourse(item?.slug)}
                  >
                    {item?.category_name} {item?.class_count && <> ({item?.class_count})</>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          {filteredClassList?.map((item, index) => {
            return (
              <div className="col-xl-4 col-md-6  mb-lg-20 mb-16" key={index}>
                <MasterClassesListingCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
