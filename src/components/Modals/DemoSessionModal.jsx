'use client';
import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail, validName } from '@/_helper/Regex';
import {
  fetchModalCourses,
  getCountriesList,
  getEducationList,
  leadStore,
  leadStoreDA,
  wsLeadStore,
} from '@/_services/modalService';
import Cookies from 'js-cookie';
// import { LeadStoreApi, getLeadCoursesList } from '@/_services/FormsApi';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import { thankyouCategory } from '../Layouts/navData';
import CustomDropdown from '../Layouts/Common/CustomDropDown';
import Link from 'next/link';
import moment from 'moment';
import { useAuth } from '@/_context/AuthContext';

function DemoSessionModal(props) {
  const {
    setShowBookmodal,
    setShowOtp,
    userMobile,
    setUserMobile,
    setUserId,
    setOtpToken,
    isLoading,
    setIsLoading,
    setShowLeadModal,
    leadType,
    crmCrsId,
    frnchId,
    leadNote,
    currUrl,
    courseSlug,
    leadHeading,
    setCategorySlug,
    categorySlug,
    newCategoryUrl,
    setCourseSlug,
    centerSlug,
    lmLeadCourse,
  } = props;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [education, setEducation] = useState('');
  const [courseName, setCourseName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [franchise, setFranchise] = useState('');
  const [error, setError] = useState(false);
  const [checkTerms, setCheckTerms] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const [coursesList, setCoursesList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ countryId: '', countryName: '' });
  const { getUtmParams } = useAuth();
  const router = useSearchParams();
  const utmMedium = router.get('utm_medium');
  const utmSource = router.get('utm_source');
  const utmCampaign = router.get('utm_campaign');
  const utmAdset = router.get('utm_adset');
  const utmAd = router.get('utm_ad');
  const utmTerm = router.get('utm_term');
  const utmDevice = router.get('utm_device');
  const utmDevicemodel = router.get('utm_device_modal');
  const utmNetwork = router.get('utm_network');
  const gClid = router.get('gclid');

  const utmChannel = router.get('utm_channel');
  const utmPostId = router.get('utm_post_id');
  const utmPage = router.get('utm_page');

  const utmData = getUtmParams();

  const showCountries = ['ethical-hacking-course', 'penetration-testing-course'].includes(courseSlug);
  const pathName = usePathname();
  const leadSources = {
    lead_source: 5,
    parent_lead_type: 1,
    lead_mode: 1,
    lead_type: 3,
  };

  const occupations = [
    {
      id: '1',
      name: 'Student',
    },
    {
      id: '2',
      name: 'Working Professional',
    },
    {
      id: '3',
      name: 'Homemaker',
    },
    {
      id: '4',
      name: 'Business Owner',
    },
    {
      id: '5',
      name: 'Graduate',
    },
  ];

  useEffect(() => {
    if (crmCrsId) {
      setCourseName(`${crmCrsId}`);
    }
  }, [crmCrsId]);

  useEffect(() => {
    if (frnchId) {
      setFranchise(`${frnchId}`);
    }
  }, [frnchId]);

  useEffect(() => {
    getCourses();
    getEducation();
  }, []);

  useEffect(() => {
    getCoutries();
  }, [showCountries]);

  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  async function getCourses() {
    const res = await fetchModalCourses(frnchId);
    if (res.status) {
      const data = res.result;
      setCoursesList(data);
    }
  }

  async function getEducation() {
    const res = await getEducationList();
    if (res.status) {
      const data = res.result;
      setEducationList(data);
    }
  }

  async function getCoutries() {
    const res = await getCountriesList();
    if (res.status) {
      const data = res.result;
      setCountriesList(data);
    }
  }

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let nameMsg = '';
    let mobileMsg = '';
    let emailMsg = '';
    let eduMsg = '';
    let crsNameMsg = '';
    let occMsg = '';
    let countryMsg = '';
    let isValid = false;

    if (!userName) {
      nameMsg = 'Please enter name';
    }
    if (userName && !validName(userName)) {
      nameMsg = 'Please enter valid name';
    }
    if (!userMobile?.numWithoutCode) {
      mobileMsg = 'Please enter your mobile number';
    } else if (!mobileNumberRegex.test(userMobile?.numWithoutCode)) {
      mobileMsg = 'Please enter a valid mobile number';
    }
    if (!userEmail && userMobile?.code != '91') {
      emailMsg = 'Please enter email';
    }
    if (userEmail && !validEmail(userEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!education) {
      eduMsg = 'Please select education';
    }
    if (!courseName || courseName == '') {
      crsNameMsg = 'Please select course';
    }
    if (leadType == 'exploreCrs' && !occupation) {
      occMsg = 'Please select occupation';
    }

    if (showCountries && !selectedCountry.countryId) {
      countryMsg = 'Please select country';
    }

    if (!nameMsg && !mobileMsg && !emailMsg && !eduMsg && !crsNameMsg && !occMsg && !countryMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        mobile: '',
        email: '',
        education: '',
        crsName: '',
        occ: '',
        country: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        mobile: mobileMsg,
        email: emailMsg,
        education: eduMsg,
        crsName: crsNameMsg,
        occ: occMsg,
        country: countryMsg,
      });
      return false;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let leadMode = 1;
    let res = null;
    const utmPathName = Cookies.get('utm_pathname') || null;
    if (formValidation()) {
      setIsLoading(true);
      const params = {
        lead_source: leadSources?.lead_source,
        parent_lead_type: leadSources?.parent_lead_type,
        lead_mode: leadMode,
        lead_type: leadSources?.lead_type,
        course_id: courseName,
        mobile_number: userMobile?.numWithoutCode,
        country_code: userMobile?.code,
        email: userEmail,
        name: userName,
        course_type_request: (!franchise && 'Online') || 'Offline',
        lead_note: leadNote,
        education_id: education,
        profession_id: occupation,
        state_id: '',
        franchise_id: franchise,
        ...(utmPathName === pathName && utmData?.utm_source && utmData),
      };

      if (selectedCountry?.countryId) {
        params.country_id = selectedCountry?.countryId;
      }

      if (utmData?.utm_source && utmPathName && utmPathName === pathName) {
        params.redirect_source = true;
      } else if (utmData?.utm_source) {
        params.redirect_source = false;
        params.utm_source = utmData?.utm_source;
      }

      if (!utmData?.utm_source && utmSource) {
        params.redirect_source = true;
        params.utm_source = utmSource;
      }
      if (!utmData?.utm_source && utmMedium) {
        params.utm_medium = utmMedium;
      }
      if (!utmData?.utm_source && utmCampaign) {
        params.utm_campaign = utmCampaign;
      }
      if (!utmData?.utm_source && utmAdset) {
        params.utm_adset = utmAdset;
      }
      if (!utmData?.utm_source && utmAd) {
        params.utm_ad = utmAd;
      }
      if (!utmData?.utm_source && utmTerm) {
        params.utm_term = utmTerm;
      }

      if (!utmData?.utm_source && utmDevice) {
        params.utm_device = utmDevice;
      }
      if (!utmData?.utm_source && utmDevicemodel) {
        params.utm_device_modal = utmDevicemodel;
      }
      if (!utmData?.utm_source && utmNetwork) {
        params.utm_network = utmNetwork;
      }
      if (!utmData?.utm_source && gClid) {
        params.gclid = gClid;
      }

      if (!utmData?.utm_source && utmChannel) {
        params.utm_channel = utmChannel;
      }

      if (!utmData?.utm_source && utmPostId) {
        params.utm_post_id = utmPostId;
      }

      if (!utmData?.utm_source && utmPage) {
        params.utm_page = utmPage;
      }

      // const wsLeadStoreRes = await wsLeadStore(params);
      if (courseName == '47' || courseName == '8' || courseName == '9') {
        res = await leadStoreDA(params);
      } else {
        res = await leadStore(params);
      }
      if (res.status) {
        const data = res.result;
        setUserId(data?.lm_user_id);
        setOtpToken(data?.request_token);
        if (!data?.mobile_number_verified && userMobile?.code == '91') {
          if (courseName && courseName != '') {
            Cookies.set('leadCrs', courseName);
            Cookies.set('leadCenter', franchise);
            Cookies.remove('social_url_source');
            Cookies.remove('utm_pathname');
            Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
          }
          setShowOtp(true);
        } else {
          setUserMobile({
            code: '91',
            number: '',
            numWithoutCode: '',
          });
          toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
          if (currUrl) {
            window.open(currUrl);
          }
          if (courseName && courseName != '') {
            Cookies.set('leadCrs', courseName);
            // userouter.push('/thank-you');
            Cookies.set('leadCenter', franchise);
            Cookies.set('thankYouPageVisited', moment().add(3, 'seconds').format('YYYY-MM-DD HH:mm:ss'));
            if (pathName === '/events/data-analytics-course') {
              Cookies.remove('social_url_source');
              Cookies.remove('utm_pathname');
              Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
              Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
              window.location.href = `/thank-you-data-masterclass/data-analytics-course`;
            } else if (centerSlug) {
              Cookies.remove('social_url_source');
              Cookies.remove('utm_pathname');
              Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
              Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
              window.location.href = `/${courseSlug}-${centerSlug}/thank-you`;
              // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}-${centerSlug}`;
            } else {
              Cookies.remove('social_url_source');
              Cookies.remove('utm_pathname');
              Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
              Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
              window.location.href = `/${courseSlug}/thank-you`;
              // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}`;
            }
          }
        }
        setShowBookmodal(false);
        setShowLeadModal(false);
        setIsLoading(false);
      } else {
        setUserMobile({
          code: '91',
          number: '',
          numWithoutCode: '',
        });
        toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
        if (currUrl) {
          window.open(currUrl);
        }
        if (courseName && courseName != '') {
          Cookies.set('leadCrs', courseName);
          Cookies.set('leadCenter', franchise);
          // userouter.push('/thank-you');
          if (pathName === '/events/data-analytics-course') {
            Cookies.remove('social_url_source');
            Cookies.remove('utm_pathname');
            Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
            window.location.href = `/thank-you-data-masterclass/data-analytics-course`;
          } else if (centerSlug) {
            Cookies.remove('social_url_source');
            Cookies.remove('utm_pathname');
            Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
            window.location.href = `/${courseSlug}-${centerSlug}/thank-you`;
            // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}-${centerSlug}`;
          } else {
            Cookies.remove('social_url_source');
            Cookies.remove('utm_pathname');
            Cookies.remove('social_url_source', { domain: `${process.env.COOKIES_DOMAIN}` });
            Cookies.remove('utm_pathname', { domain: `${process.env.COOKIES_DOMAIN}` });
            window.location.href = `/${courseSlug}/thank-you`;
            // window.location.href = `/thank-you-${thankyouCategory[newCategoryUrl]}/${courseSlug}`;
          }
        }
        setShowBookmodal(false);
        setShowLeadModal(false);
        setIsLoading(false);
      }
    }
  }

  function closeModal() {
    setUserMobile({
      code: '91',
      number: '',
      numWithoutCode: '',
    });
    setShowBookmodal(false);
    setShowLeadModal(false);
    if (categorySlug) {
      setCategorySlug('');
    }
    if (courseSlug && setCourseSlug) {
      setCourseSlug('');
    }
    setSelectedCountry({ countryId: '', countryName: '' });
  }

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    setCourseName(selectedCourseName);

    const course = coursesList.find((course) => course.id == selectedCourseName);
    if (course?.web_category_slug) {
      setCategorySlug(course?.web_category_slug);
    }
    if (course?.web_course_slug) {
      setCourseSlug(course?.web_course_slug);
    }
    setSelectedCountry({ countryId: '', countryName: '' });
  };

  const handleSelectCountry = (id, name) => {
    setSelectedCountry({ countryId: id, countryName: name });
  };

  return (
    <Modal
      show={true}
      onHide={closeModal}
      centered
      size="lg"
      className="book-class-modal"
      backdropClassName="ws-modal-backdrop"
    >
      <Modal.Body className="p-xl-24 p-16">
        <Image
          src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
          width={24}
          height={24}
          alt="Close"
          onClick={() => {
            setUserMobile({
              code: '91',
              number: '',
              numWithoutCode: '',
            });
            setShowBookmodal(false);
            setShowLeadModal(false);
            if (categorySlug) {
              setCategorySlug('');
            }
            if (courseSlug && setCourseSlug) {
              setCourseSlug('');
            }
          }}
          className="img-fluid cursor-pointer position-absolute close-modal"
        />
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="h-100 w-100 rounded-20 d-flex flex-column modal-left-container py-60">
              <div className="px-2 h-100 d-flex align-items-center justify-content-center">
                <Image
                  src={'/images/modals/login-hero.svg'}
                  width={384}
                  height={322}
                  className="img-fluid"
                  alt="Image"
                />
              </div>
              <div className="text-center mt-auto">
                <p className="fs-25 lh-38 text-white mb-0">Let&apos;s enable fun learning experiences, together</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-lg-3">
            <h4 className={`${lmLeadCourse ? 'pe-3' : ''} fs-25 fw-600 text-color-1 lh-38 mb-lg-28 mb-20`}>
              {/* {(courseSlug === 'data-analytics-course' && 'Talk to Program Advisor') || (
                  <>{(currUrl && 'Download Curriculum') || 'Book Your Demo Class!'}</>
                )} */}
              {leadHeading || 'Book Demo Now'}
              {(lmLeadCourse && ` - ${lmLeadCourse}`) || ''}
            </h4>
            <form className="row" onSubmit={submitForm}>
              <div className="col-lg-12 mb-lg-28 mb-20">
                <div>
                  <label htmlFor="studentName" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value.trimStart().replace(/  +/g, ' '))}
                    className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                  />
                  {(error && errorMessage?.name && (
                    <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
                  )) ||
                    ''}
                </div>
              </div>
              <div className="col-lg-12 mb-lg-28 mb-20">
                <div className="mobile-with-country">
                  <label htmlFor="studentPhone" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={'in'}
                    value={userMobile.number}
                    onChange={handleOnChange}
                    disableCountryCode={false}
                  />
                  {(error && errorMessage?.mobile && (
                    <span className="fs-13 text-danger fw-500">{errorMessage?.mobile}</span>
                  )) ||
                    ''}
                </div>
              </div>
              {(userMobile?.code != '91' && (
                <div className="col-lg-12 mb-lg-28 mb-20">
                  <div>
                    <label htmlFor="studentEmail" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Email
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      placeholder="Your Email"
                      value={userEmail || ''}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                    />
                    {(error && errorMessage?.email && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
                    )) ||
                      ''}
                  </div>
                </div>
              )) ||
                ''}
              {(leadType == 'exploreCrs' && (
                <div className="col-lg-12 mb-16">
                  <div>
                    <label htmlFor="selOccupation" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Occupation
                    </label>
                    <div className="shadow-select">
                      <select
                        id="selOccupation"
                        onChange={(e) => setOccupation(e.target.value)}
                        className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                      >
                        <option value="">Select Occupation</option>
                        {occupations?.length > 0 &&
                          occupations.map((item, key) => (
                            <option value={item.id} key={key}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                      {(error && errorMessage?.occ && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.occ}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                </div>
              )) ||
                ''}
              <div className="col-lg-12 mb-16">
                <div>
                  <label htmlFor="education" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    Highest Education
                  </label>
                  <div className="shadow-select">
                    <select
                      id="education"
                      onChange={(e) => setEducation(e.target.value)}
                      className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                    >
                      <option value="">Select Highest Education</option>
                      {educationList?.length > 0 &&
                        educationList.map((item, key) => (
                          <option value={item.id} key={key}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    {(error && errorMessage?.education && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.education}</span>
                    )) ||
                      ''}
                  </div>
                </div>
              </div>
              {(leadType != 'exploreCrs' && (
                <div className="col-lg-12 mb-16">
                  <div>
                    <label htmlFor="chooseCourse" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                      Courses
                    </label>
                    <div className="shadow-select">
                      <select
                        id="chooseCourse"
                        // onChange={(e) => setCourseName(e)}
                        onChange={handleCourseChange}
                        className="w-100 common-form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white select-box-wrapper"
                      >
                        <option value="">Select Course</option>
                        {coursesList?.length > 0 &&
                          coursesList.map((course, key) => (
                            <option value={course.id} key={key}>
                              {course.name}
                            </option>
                          ))}
                      </select>
                      {(error && errorMessage?.crsName && (
                        <span className="fs-13 text-danger fw-500">{errorMessage?.crsName}</span>
                      )) ||
                        ''}
                    </div>
                  </div>
                </div>
              )) ||
                ''}
              {showCountries && (
                <div className="mb-16 position-relative">
                  <label htmlFor="studentName" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    Country
                  </label>
                  <CustomDropdown
                    label="Select Country"
                    items={countriesList}
                    selectedValue={selectedCountry.countryName || 'Select Country'}
                    onSelectValue={handleSelectCountry}
                    itemId={selectedCountry.countryId}
                    searchBy={true}
                  />
                  {error && errorMessage.country && (
                    <span className="fs-13 text-danger fw-500">{errorMessage.country}</span>
                  )}
                </div>
              )}
              <div className="col-lg-12 mb-16">
                <div className="form-check">
                  <input
                    className="form-check-input shadow-none"
                    type="checkbox"
                    value=""
                    id="checkTerms"
                    defaultChecked
                    onChange={(e) => setCheckTerms(e.target.checked)}
                  />
                  <label htmlFor="checkTerms" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    I have read and agree to the{' '}
                    <Link className="text-color-1 text-decoration-underline" target="blank" href={'/privacy-policy'}>
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link
                      className="text-color-1 text-decoration-underline"
                      target="blank"
                      href={'/terms-and-conditions'}
                    >
                      Terms & Conditions
                    </Link>
                    .
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input shadow-none"
                    type="checkbox"
                    value=""
                    id="checkWhatsapp"
                    defaultChecked
                  />
                  <label htmlFor="checkWhatsapp" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                    Send me updates on WhatsApp
                  </label>
                </div>
              </div>
              <div className="col-12 text-lg-start text-center">
                <button
                  disabled={isLoading || !checkTerms}
                  className="blue-fill-btn min-h-56 px-36 fs-18 w-100 fw-600 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto"
                >
                  {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DemoSessionModal;
