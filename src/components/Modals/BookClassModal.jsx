import { franchise, leadSources } from '@/_constants/GlobalConstants';
import { toastConfig } from '@/_helper/PluginSettings';
import { validEmail, validName } from '@/_helper/Regex';
import { LeadStoreApi, getLeadCoursesList } from '@/_services/FormsApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

function BookClassModal(props) {
  const { setShowBookmodal, setShowOtp, userMobile, setUserMobile, setUserId, setOtpToken, isLoading, setIsLoading } =
    props;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [courseType, setCourseType] = useState('');
  const [skillCenter, setSkillCenter] = useState('');
  const [courseName, setCourseName] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [coursesList, setCoursesList] = useState([]);
  const router = useRouter();
  const utmCampaign = router?.query?.utm_campaign;
  const utmMedium = router?.query?.utm_medium;
  const utmSource = router?.query?.utm_source;

  useEffect(() => {
    getCourses();
  }, []);

  const handleOnChange = (value, country) => {
    const numberWithoutCode = value.replace(country.dialCode, '');
    setUserMobile({ number: value, code: country.dialCode || 91, numWithoutCode: numberWithoutCode });
  };

  async function getCourses() {
    // const res = await getLeadCoursesList();
    // if (res.status) {
    //   const data = res.data;
    //   setCoursesList(data);
    // }
  }

  function formValidation() {
    const mobileNumberRegex = userMobile?.code === '91' ? /^[1-9][0-9]{9}$/ : /^[1-9][0-9]{6,15}$/;
    let nameMsg = '';
    let mobileMsg = '';
    let emailMsg = '';
    let courseMsg = '';
    let centerMsg = '';
    let crsNameMsg = '';
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
    if (!userEmail) {
      emailMsg = 'Please enter email';
    }
    if (userEmail && !validEmail(userEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!courseType) {
      courseMsg = 'Please select course type';
    }
    if (courseType == 'Offline' && !skillCenter) {
      centerMsg = 'Please select Career School';
    }
    if (!courseName) {
      crsNameMsg = 'Please select course';
    }
    if (!nameMsg && !mobileMsg && !emailMsg && !courseMsg && !centerMsg && !crsNameMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        mobile: '',
        email: '',
        crsType: '',
        center: '',
        crsName: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        mobile: mobileMsg,
        email: emailMsg,
        crsType: courseMsg,
        center: centerMsg,
        crsName: crsNameMsg,
      });
      return false;
    }
  }

  async function submitForm(e) {
    e.preventDefault();
    let leadMode;
    if (formValidation()) {
      if (courseType == 'Offline') {
        leadMode = 2;
      } else {
        leadMode = 1;
      }
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
        course_type_request: courseType,
        lead_note: userMsg,
      };

      if (utmSource) {
        params.utm_source = utmSource;
      }
      if (utmMedium) {
        params.utm_medium = utmMedium;
      }
      if (utmCampaign) {
        params.utm_campaign = utmCampaign;
      }
      const res = await LeadStoreApi(params);
      if (res.status) {
        const data = res.data;
        setUserId(data?.lm_user_id);
        setOtpToken(data?.request_token);
        if (!data?.mobile_number_verified) {
          setShowOtp(true);
        } else {
          toast.success('Thanks for enquiry with us we will contact as soon as possible', toastConfig);
        }
        setShowBookmodal(false);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <Modal
        show={true}
        onHide={setShowBookmodal}
        centered
        size="lg"
        className="book-class-modal"
        backdropClassName="ws-modal-backdrop"
      >
        <Modal.Body className="p-xl-40 p-16">
          <Image
            src={process.env.IMG_PATH + 'images/icons/close-modal.svg'}
            width={24}
            height={24}
            alt="Close"
            onClick={() => setShowBookmodal(false)}
            className="img-fluid cursor-pointer position-absolute close-modal"
          />
          <h4 className="fs-25 fw-600 text-color-1 lh-38 mb-lg-40 mb-20">Book Your Free Demo Class!</h4>
          <form className="row" onSubmit={submitForm}>
            <div className="col-lg-6 mb-lg-40 mb-20">
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
                  className="w-100 form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                />
                {(error && errorMessage?.name && (
                  <span className="fs-13 text-danger fw-500">{errorMessage?.name}</span>
                )) ||
                  ''}
              </div>
            </div>
            <div className="col-lg-6 mb-lg-40 mb-20">
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
            <div className="col-lg-6 mb-lg-40 mb-20">
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
                  className="w-100 form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                />
                {(error && errorMessage?.email && (
                  <span className="fs-13 text-danger fw-500">{errorMessage?.email}</span>
                )) ||
                  ''}
              </div>
            </div>
            <div className="col-lg-6 mb-lg-40 mb-20">
              <div>
                <label htmlFor="selectCourse" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Course Type
                </label>
                <div className="shadow-select">
                  <select
                    id="selectCourse"
                    onChange={(e) => setCourseType(e.target.value)}
                    className="w-100 form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                  >
                    <option value="">Select Course Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                  {(error && errorMessage?.crsType && (
                    <span className="fs-13 text-danger fw-500">{errorMessage?.crsType}</span>
                  )) ||
                    ''}
                </div>
              </div>
            </div>
            {courseType != 'Online' && (
              <div className="col-lg-6 mb-lg-40 mb-20">
                <div>
                  <label htmlFor="selectCenter" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Career School
                  </label>
                  <div className="shadow-select">
                    <select
                      id="selectCenter"
                      onChange={(e) => setSkillCenter(e.target.value)}
                      className="w-100 form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                    >
                      <option value="">Select Career School</option>
                      {franchise?.length > 0 &&
                        franchise.map((center, key) => (
                          <option value={center.id} key={key}>
                            {center.name}
                          </option>
                        ))}
                    </select>
                    {(error && errorMessage?.center && (
                      <span className="fs-13 text-danger fw-500">{errorMessage?.center}</span>
                    )) ||
                      ''}
                  </div>
                </div>
              </div>
            )}
            <div className="col-lg-6 mb-lg-40 mb-20">
              <div>
                <label htmlFor="chooseCourse" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Choose Course
                </label>
                <div className="shadow-select">
                  <select
                    id="chooseCourse"
                    onChange={(e) => setCourseName(e.target.value)}
                    className="w-100 form-control h-size-57 rounded-12 px-16 text-color-1 fs-16 
                  border-w-2 border-color-1 input-focus-shadow bg-white"
                  >
                    <option value="">Choose Course</option>
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
            <div className="col-lg-12 mb-lg-40 mb-20">
              <div>
                <label htmlFor="studentMessage" className="fs-16 lh-24 text-color-1 mb-lg-12 mb-8">
                  Message
                </label>
                <textarea
                  name="studentMessage"
                  id="studentMessage"
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value.trimStart().replace(/  +/g, ' '))}
                  placeholder="Type your message here."
                  className="w-100 form-control h-size-185 rounded-12 px-16 text-color-1 fs-16 
                border-w-2 border-color-1 input-focus-shadow bg-white resize-none shadow-textarea"
                ></textarea>
              </div>
            </div>
            <div className="col-12 text-lg-start text-center">
              <button
                disabled={isLoading}
                className="blue-fill-btn min-h-56 px-36 fs-18 fw-600 rounded-12 orange-hover-shadow submit-book-class mx-lg-0 mx-auto"
              >
                {isLoading && <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>}
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookClassModal;
