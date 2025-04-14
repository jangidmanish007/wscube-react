'use client';
import { getCourseSubQuestions, submitCourseQuestion } from '@/_services/modalService';
import React, { useEffect, useRef, useState } from 'react';
import { OverlayTrigger, Popover, ProgressBar, Spinner } from 'react-bootstrap';
import ClearFormPopup from './ClearFormPopup';
import Link from 'next/link';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import axios from 'axios';
import { mutipartHeader } from '@/_utils/ApiBase';
import { toast } from 'react-toastify';
import { toastConfig } from '@/_helper/PluginSettings';
import SelfieCameraModal from './SelfieCameraModal';
import ProfileUploadModal from './ProfileUploadModal';
import DocFrontModal from './DocFrontModal';
import DocBackModal from './DocBackModal';
import {
  getCourseSubQuestion,
  submitApplicationQuestion,
  uploadMultipleFiles,
} from '@/_services/applicationFormServices';
import { useAuth } from '@/_context/AuthContext';

export default function QuestionsForm({
  isLoading,
  setIsLoading,
  courseId,
  subQueParams,
  setShowContactForm,
  setShowQuesForm,
  subQueList,
  setSubQueList,
  courseSlug,
  answeredQuestions,
  setAnsweredQuestions,
  imagePreview,
  setImagePreview,
  profileImage,
  setProfileImage,
  selfieImage,
  setSelfieImage,
  frontDocument,
  setFrontDocument,
  frontPreview,
  setFrontPreview,
  backDocument,
  setBackDocument,
  backPreview,
  setBackPreview,
  crmCrsId,
  lmLeadId,
  pageSlug,
}) {
  const [showClearModal, setShowClearModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [otherInputs, setOtherInputs] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [progressFill, setProgressFill] = useState('75');
  const [currentStep, setCurrentStep] = useState(1);
  const [popupType, setPopupType] = useState('');
  const [documentType, setDocumentType] = useState('');
  const questionsPerPage = 5;
  const maxChars = 200;
  const [showSelfieModal, setShowSelfieModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showFrontModal, setShowFrontModal] = useState(false);
  const [showBackModal, setShowBackModal] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isFIdChanged, setIsFIdChanged] = useState(false);
  const [isBIdChanged, setIsBIdChanged] = useState(false);
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [userStatus, setUserStatus] = useState(null);
  // const { user } = useAuth();

  useEffect(() => {
    if (crmCrsId && subQueParams?.question_id && subQueParams?.option_id) {
      getSubQuestions();
    }
  }, [crmCrsId, subQueParams]);

  async function getSubQuestions() {
    setIsQuestionLoading(true);
    const res = await getCourseSubQuestion(crmCrsId, subQueParams?.question_id, subQueParams?.option_id, lmLeadId);
    if (res.status) {
      const data = res.result?.questions;
      const user = res?.result?.user_status;
      if (data?.length > 0) {
        // const subQuesArr = data.map((question) => ({
        //   sub_question_id: question.id,
        //   sub_option_id: question?.question_answers?.lm_course_sub_ques_option_id || null,
        //   answer: question?.question_answers?.answer || '',
        //   option_with_other: question?.options?.some((opt) => opt.option_with_other) || false,
        // }));
        const subQuesArr = data.map((question) => {
          const selectedOption = question?.options?.find(
            (opt) => opt.id === question?.question_answers?.lm_course_sub_ques_option_id
          );
          return {
            sub_question_id: question.id,
            sub_option_id: question?.question_answers?.lm_course_sub_ques_option_id || null,
            answer: question?.question_answers?.answer || '',
            option_with_other: selectedOption?.option_with_other || false,
          };
        });

        setOtherInputs((prev) => {
          const updatedOtherInputs = { ...prev };
          subQuesArr.forEach((subQuestion) => {
            if (subQuestion.option_with_other) {
              updatedOtherInputs[subQuestion.sub_question_id] = subQuestion.answer; // Set "Other" answers
            }
          });
          return updatedOtherInputs;
        });
        const updatedArr = [
          {
            question_id: data[0]?.lm_course_question_id,
            option_id: data[0]?.lm_course_ques_option_id,
            answer: '',
            sub_questions: subQuesArr,
          },
        ];
        setAnsweredQuestions(updatedArr);
      }
      setSubQueList(data);
      if (user) {
        setUserStatus(user);
        if (user?.id_proof_image) {
          handleIdProofImages(user.id_proof_image);
        }
        if (user?.id_proof_type) {
          setDocumentType(user?.id_proof_type);
        }
        if (user?.image) {
          setSelfieImage(user?.image);
          setImagePreview(user?.image);
        }
      }
      setIsQuestionLoading(false);
    } else {
      setIsQuestionLoading(false);
    }
  }

  const handleIdProofImages = (id_proof_image) => {
    const images = id_proof_image.split(',');
    const trimmedImages = images.map((img) => img.trim());
    if (trimmedImages.length === 2) {
      setFrontPreview(trimmedImages[0]);
      setFrontDocument(trimmedImages[0]);
      setBackPreview(trimmedImages[1]);
      setBackDocument(trimmedImages[1]);
    } else if (trimmedImages.length === 1) {
      setFrontPreview(trimmedImages[0]);
      setFrontDocument(trimmedImages[0]);
    }
  };

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleTextChange = (questionId, subQuestionId, value) => {
    setAnsweredQuestions((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const questionIndex = updatedAnswers.findIndex((q) => q.question_id === questionId);
      if (questionIndex !== -1) {
        const subQuestionIndex = updatedAnswers[questionIndex].sub_questions.findIndex(
          (sq) => sq.sub_question_id === subQuestionId
        );
        if (subQuestionIndex !== -1) {
          updatedAnswers[questionIndex].sub_questions[subQuestionIndex].answer = value;
        } else {
          updatedAnswers[questionIndex].sub_questions.push({
            sub_question_id: subQuestionId,
            sub_option_id: null,
            answer: value,
          });
        }
      } else {
        updatedAnswers.push({
          question_id: questionId,
          option_id: null,
          answer: null,
          sub_questions: [{ sub_question_id: subQuestionId, sub_option_id: null, answer: value }],
        });
      }
      return updatedAnswers;
    });
  };

  const handleOptionChange = (questionId, subQuestionId, optionId, value = null, option_with_other) => {
    setAnsweredQuestions((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const questionIndex = updatedAnswers.findIndex((q) => q.question_id === questionId);
      if (questionIndex !== -1) {
        const subQuestionIndex = updatedAnswers[questionIndex].sub_questions.findIndex(
          (sq) => sq.sub_question_id === subQuestionId
        );
        if (subQuestionIndex !== -1) {
          updatedAnswers[questionIndex].sub_questions[subQuestionIndex] = {
            sub_question_id: subQuestionId,
            sub_option_id: optionId,
            answer: value,
            option_with_other: option_with_other,
          };
        } else {
          updatedAnswers[questionIndex].sub_questions.push({
            sub_question_id: subQuestionId,
            sub_option_id: optionId,
            answer: value,
            option_with_other: option_with_other,
          });
        }
      } else {
        updatedAnswers.push({
          question_id: questionId,
          option_id: null,
          answer: null,
          sub_questions: [
            {
              sub_question_id: subQuestionId,
              sub_option_id: optionId,
              answer: value,
              option_with_other: option_with_other,
            },
          ],
        });
      }
      return updatedAnswers;
    });
    if (value !== null) {
      setOtherInputs((prev) => ({
        ...prev,
        [subQuestionId]: value,
      }));
    }
  };

  const handleRateChange = (questionId, subQuestionId, value) => {
    setAnsweredQuestions((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const questionIndex = updatedAnswers.findIndex((q) => q.question_id === questionId);
      if (questionIndex !== -1) {
        const subQuestionIndex = updatedAnswers[questionIndex].sub_questions.findIndex(
          (sq) => sq.sub_question_id === subQuestionId
        );
        if (subQuestionIndex !== -1) {
          updatedAnswers[questionIndex].sub_questions[subQuestionIndex] = {
            sub_question_id: subQuestionId,
            sub_option_id: null,
            answer: value,
          };
        } else {
          updatedAnswers[questionIndex].sub_questions.push({
            sub_question_id: subQuestionId,
            sub_option_id: null,
            answer: value,
          });
        }
      } else {
        updatedAnswers.push({
          question_id: questionId,
          option_id: null,
          answer: null,
          sub_questions: [{ sub_question_id: subQuestionId, sub_option_id: null, answer: value }],
        });
      }
      return updatedAnswers;
    });
  };
  const handleTextareaChange = (questionId, subQuestionId, value) => {
    setAnsweredQuestions((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const questionIndex = updatedAnswers.findIndex((q) => q.question_id === questionId);
      if (questionIndex !== -1) {
        const subQuestionIndex = updatedAnswers[questionIndex].sub_questions.findIndex(
          (sq) => sq.sub_question_id === subQuestionId
        );
        if (subQuestionIndex !== -1) {
          updatedAnswers[questionIndex].sub_questions[subQuestionIndex].answer = value;
        } else {
          updatedAnswers[questionIndex].sub_questions.push({
            sub_question_id: subQuestionId,
            sub_option_id: null,
            answer: value,
          });
        }
      } else {
        updatedAnswers.push({
          question_id: questionId,
          option_id: null,
          answer: null,
          sub_questions: [{ sub_question_id: subQuestionId, sub_option_id: null, answer: value }],
        });
      }
      return updatedAnswers;
    });
  };

  async function submitForm(e) {
    e.preventDefault();
    // Check if all required fields are filled
    let formIsValid = true;
    const newErrors = {};
    if (!isTermsChecked) {
      formIsValid = false;
      newErrors['terms'] = 'You must agree to the terms.';
    }

    if (!selfieImage) {
      formIsValid = false;
      newErrors['selfieImage'] = 'Profile image is required.';
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }

    if (!documentType) {
      formIsValid = false;
      newErrors['docType'] = 'ID Proof is required.';
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }
    if (
      documentType &&
      (documentType === 'Adhar Card' || documentType === 'Passport') &&
      (!frontDocument || !backDocument)
    ) {
      formIsValid = false;
      newErrors['document'] = 'Documents is required.';
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }

    if (documentType && documentType === 'Driving License' && !frontDocument) {
      formIsValid = false;
      newErrors['document'] = 'Document is required.';
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }

    subQueList.forEach((item) => {
      const answeredQuestion = answeredQuestions.find((q) => q.question_id === item.lm_course_question_id);
      const hasAnsweredSubQuestion =
        answeredQuestion && answeredQuestion.sub_questions.some((sq) => sq.answer || sq.sub_option_id);

      // Check for required text and textarea fields
      if (item.is_required && (item.type === 'text' || item.type === 'textarea')) {
        if (!hasAnsweredSubQuestion) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }
      // Check for required options fields
      if (item.is_required && item.type === 'options') {
        const hasOptionSelected =
          answeredQuestion && answeredQuestion.sub_questions.find((sq) => sq.sub_question_id === item.id);

        if (!hasOptionSelected) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 500, behavior: 'smooth' });
        } else if (hasOptionSelected && hasOptionSelected?.option_with_other && !hasOptionSelected?.answer) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 500, behavior: 'smooth' });
        }
      }

      // Check for required rate fields
      if (item.is_required && item.type === 'rate') {
        const hasRateSelected =
          answeredQuestion && answeredQuestion.sub_questions.find((sq) => sq.sub_question_id === item.id);
        if (!hasRateSelected) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }
      }
    });
    if (formIsValid) {
      setErrors({});
      setIsLoading(true);
      const mainQuestions = JSON.parse(localStorage.getItem('selectedQuestions'));
      const lmUserDetails = JSON.parse(localStorage.getItem('applyParams'));
      const newAnswersArray = mainQuestions.map((mainQuestion) => {
        const answeredQuestion = answeredQuestions.find((q) => q.question_id === mainQuestion.question_id);
        return {
          ...mainQuestion,
          sub_questions: answeredQuestion ? answeredQuestion?.sub_questions : [],
        };
      });
      let docs = '';
      let uploadFiles = [];
      if (frontDocument?.name && backDocument?.name) {
        docs = `${frontDocument.name}, ${backDocument.name}`;
        uploadFiles = [frontDocument, backDocument];
      } else if (frontDocument?.name) {
        docs = frontDocument?.name || frontDocument;
        uploadFiles = [frontDocument];
      }
      const params = {
        crm_course_id: crmCrsId,
        // lm_user_id: lmUserId,
        lm_lead_id: lmLeadId,
        is_agree: isTermsChecked,
        image: selfieImage?.name || selfieImage,
        id_proof_type: documentType,
        id_proof_image: (docs && docs) || `${frontDocument}, ${backDocument}`,
        questions: newAnswersArray,
      };
      if (uploadFiles?.length > 0) {
        const uploadDocs = await uploadMultipleFiles(uploadFiles);
      }
      if (selfieImage?.name) {
        let files = [selfieImage];
        const uploadProfile = await uploadMultipleFiles(files);
      }
      const response = await submitApplicationQuestion(params);
      if (response.status) {
        // localStorage.removeItem('applyParams');
        localStorage.removeItem('selectedQuestions');
        window.location.href = '/apply-now/' + pageSlug + '/thank-you';
      } else {
        setIsLoading(false);
      }
    } else {
      // Update state with errors for required fields
      setErrors(newErrors);
    }
  }

  function clearForm() {
    setOtherInputs({});
    setErrors({});
    setAnsweredQuestions([]);
    if (popupType == 'STEP_2') {
      handlePreviousQuestion();
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }
    setImagePreview(null);
    setBackDocument(null);
    setFrontDocument(null);
    setFrontPreview(null);
    setBackPreview(null);
    setSelfieImage(null);
    setDocumentType('');
    setProfileImage('');
  }

  function handleShowSubmitForm() {
    window.scrollTo({ top: 80, behavior: 'smooth' });
    setShowQuesForm(false);
    setShowContactForm(true);
  }

  const handleNext = () => {
    let formIsValid = true;
    const newErrors = {};
    const filterdArr = subQueList.slice(0, 5);
    filterdArr.forEach((item) => {
      const answeredQuestion = answeredQuestions?.find((q) => q.question_id === item.lm_course_question_id);

      // Check for required options fields
      if (item.is_required && item.type === 'options') {
        const hasOptionSelected =
          answeredQuestion && answeredQuestion.sub_questions.find((sq) => sq.sub_question_id === item.id);

        // Check if sub_option_id or answer is blank
        const isSubOptionOrAnswerMissing = answeredQuestion?.sub_questions.some(
          (sq) => sq.sub_question_id === item.id && (!sq.sub_option_id || (sq.option_with_other && !sq.answer))
        );

        if (!hasOptionSelected || isSubOptionOrAnswerMissing) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        } else if (hasOptionSelected && hasOptionSelected?.option_with_other && !hasOptionSelected?.answer) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }

      // Check for required rate fields
      if (item.is_required && item.type === 'rate') {
        const hasRateSelected = answeredQuestion && answeredQuestion.sub_questions.find((sq) => sq.answer);
        if (!hasRateSelected) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }
      // Check for required text and textarea fields
      if (item.is_required && (item.type === 'text' || item.type === 'textarea')) {
        const hasAnsweredSubQuestion =
          answeredQuestion && answeredQuestion.sub_questions.some((sq) => sq.answer || sq.sub_option_id);
        if (!hasAnsweredSubQuestion) {
          formIsValid = false;
          newErrors[item.id] = 'This is a required question';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }

      if (item.type === 'text' || item.web_icon_path) {
        const url = answeredQuestion?.sub_questions.find((sq) => sq.sub_question_id === item.id)?.answer;
        if (url && !url.startsWith('https://')) {
          formIsValid = false;
          newErrors[item.id] = 'Please enter valid url';
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      }
    });
    if (formIsValid) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setProgressFill('100');
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePreviousQuestion = () => {
    setErrors({});
    setProgressFill('75');
    setCurrentStep((prevStep) => prevStep - 1);
  };

  function handleShowConfirmPopup(type) {
    setShowClearModal(true);
    setPopupType(type);
  }

  const startIndex = (currentStep - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToRender = subQueList.slice(startIndex, endIndex);

  return (
    <>
      {showClearModal && (
        <ClearFormPopup setShowClearModal={setShowClearModal} clearForm={clearForm} popupType={popupType} />
      )}
      {showSelfieModal && (
        <SelfieCameraModal
          setShowSelfieModal={setShowSelfieModal}
          isCameraActive={isCameraActive}
          setIsCameraActive={setIsCameraActive}
          setSelfieImage={setSelfieImage}
          setImagePreview={setImagePreview}
          lmLeadId={lmLeadId}
        />
      )}
      {showUploadModal && (
        <ProfileUploadModal
          setShowUploadModal={setShowUploadModal}
          setSelfieImage={setSelfieImage}
          selfieImage={selfieImage}
          setImagePreview={setImagePreview}
        />
      )}
      {showFrontModal && (
        <DocFrontModal
          setShowFrontModal={setShowFrontModal}
          setFrontDocument={setFrontDocument}
          frontDocument={frontDocument}
          setFrontPreview={setFrontPreview}
          setIsFIdChanged={setIsFIdChanged}
          userStatus={userStatus}
        />
      )}
      {showBackModal && (
        <DocBackModal
          setShowBackModal={setShowBackModal}
          setBackDocument={setBackDocument}
          backDocument={backDocument}
          setBackPreview={setBackPreview}
          setIsBIdChanged={setIsBIdChanged}
          userStatus={userStatus}
        />
      )}
      <section className="py-64">
        <div className="container-main container-w-xl-1202">
          {(!isQuestionLoading && (
            <div className="row">
              <div className="col-12">
                <div className="mx-auto max-w-515 w-100 sub-ques-form">
                  <div className="form-fill-progress-wrapper mb-35 text-center">
                    <div className="d-flex justify-content-between mb-8">
                      {(currentStep * questionsPerPage < subQueList.length && (
                        <button
                          disabled={isLoading}
                          onClick={() => handleShowSubmitForm()}
                          type="button"
                          className="fs-16 rounded-12 btn-blue-disabled bg-transparent border-0 text-color-7"
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className="text-color-7 mr-8" width={12} height={6} />
                          Go Back
                        </button>
                      )) || (
                        <button
                          disabled={isLoading}
                          onClick={() => handlePreviousQuestion()}
                          type="button"
                          className="fs-16 rounded-12 btn-blue-disabled bg-transparent border-0 text-color-7"
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className="text-color-7 mr-8" width={12} height={6} />
                          Go Back
                        </button>
                      )}
                      <span className="text-center fs-14 fw-400 lh-21 text-color-7 d-inline-block">
                        Step {(currentStep * questionsPerPage < subQueList.length && '2') || '3'} of 3
                      </span>
                    </div>
                    <div className="progress-bar-box">
                      <ProgressBar now={progressFill} />
                    </div>
                  </div>
                  <form className="" onSubmit={submitForm}>
                    {questionsToRender?.length > 0 &&
                      questionsToRender.map((item, key) => {
                        const answeredQuestion = answeredQuestions.find(
                          (q) => q.question_id === item.lm_course_question_id
                        );
                        const currentAnswer =
                          answeredQuestions
                            .find((q) => q.question_id === item.lm_course_question_id)
                            ?.sub_questions.find((sq) => sq.sub_question_id === item.id)?.answer || '';

                        return (
                          <React.Fragment key={key}>
                            {item.type === 'textarea' && (
                              <div className={`mb-32 mb-lg-29`}>
                                <h3
                                  className="fs-lg-20 fs-15 lh-30 fw-400 text-color-1"
                                  style={{ marginBottom: '12px' }}
                                >
                                  {item?.question
                                    ?.replace('\n/n\n', '\n')
                                    .split('\n')
                                    .map((comment, commIndex) => {
                                      return (
                                        <span key={commIndex}>
                                          {parse(comment)}
                                          <br />
                                        </span>
                                      );
                                    })}
                                  {item?.is_required && <span className="text-danger">*</span>}
                                </h3>
                                <div className="textarea-resize-icon">
                                  <textarea
                                    id={'ques' + item.id}
                                    placeholder="Your answer"
                                    value={
                                      answeredQuestions
                                        .find((q) => q.question_id === item.lm_course_question_id)
                                        ?.sub_questions.find((sq) => sq.sub_question_id === item.id)?.answer || ''
                                    }
                                    maxLength={maxChars}
                                    onChange={(e) =>
                                      handleTextareaChange(item.lm_course_question_id, item.id, e.target.value)
                                    }
                                    style={{
                                      cursor: `${
                                        (item?.question_answers?.is_approved === true && 'not-allowed') || 'inherit'
                                      }`,
                                    }}
                                    disabled={item?.question_answers?.is_approved === true}
                                    className="w-100 common-form-control h-size-100 pt-12 rounded-12 px-16 text-color-1 fs-14 
                   border-w-2 border-color-1 input-focus-shadow bg-white resize-icon"
                                  />
                                </div>
                                <span className="text-end d-flex justify-content-end fs-14 fw-400 lh-21 text-color-1">
                                  {currentAnswer?.length}/{maxChars}
                                </span>
                                {errors[item.id] && <p className="text-danger fs-14 mb-0">{errors[item.id]}</p>}
                                {item?.question_answers?.is_approved === false &&
                                  item?.question_answers?.reject_reason && (
                                    <p className="text-danger fs-14 mb-0">
                                      <span className="fw-600">Correction Request:</span>{' '}
                                      {item?.question_answers?.reject_reason}
                                    </p>
                                  )}
                              </div>
                            )}
                            {item.type === 'text' && (
                              <div className="mb-lg-52 mb-32">
                                <h3
                                  className="fs-lg-20 fs-15 lh-30 fw-400 text-color-1"
                                  style={{ marginBottom: '12px' }}
                                >
                                  {parse(item?.question)}
                                  {item?.is_required && <span className="text-danger">*</span>}
                                </h3>
                                <div className="position-relative mb-6">
                                  <input
                                    type="text"
                                    id={'ques' + item.id}
                                    placeholder="Your answer"
                                    value={
                                      answeredQuestions
                                        .find((q) => q.question_id === item.lm_course_question_id)
                                        ?.sub_questions.find((sq) => sq.sub_question_id === item.id)?.answer || ''
                                    }
                                    style={{
                                      cursor: `${
                                        (item?.question_answers?.is_approved === true && 'not-allowed') || 'inherit'
                                      }`,
                                    }}
                                    disabled={item?.question_answers?.is_approved === true}
                                    onChange={(e) =>
                                      handleTextChange(item.lm_course_question_id, item.id, e.target.value)
                                    }
                                    className="w-100 common-form-control h-size-57 rounded-12 pl-16 pr-45 text-color-1 fs-14 
                                border-w-2 border-color-1 input-focus-shadow bg-white"
                                  />
                                  {item?.web_icon_path && (
                                    <div
                                      className="position-absolute top-50 end-0 fs-24 mr-16"
                                      style={{ transform: 'translateY(-46%)' }}
                                    >
                                      <Image
                                        width={24}
                                        height={24}
                                        src={`${process.env.IMG_PATH}${item?.web_icon_path}`}
                                        alt="linkdin-logo"
                                        className="img-fluid"
                                      />
                                    </div>
                                  )}
                                </div>
                                {errors[item.id] && <p className="text-danger fs-14 mb-0">{errors[item.id]}</p>}
                                {item?.question_answers?.is_approved === false &&
                                  item?.question_answers?.reject_reason && (
                                    <p className="text-danger fs-14 mb-0">
                                      <span className="fw-600">Correction Request:</span>{' '}
                                      {item?.question_answers?.reject_reason}
                                    </p>
                                  )}
                              </div>
                            )}
                            {item.type === 'options' && (
                              <div className="mb-lg-40 mb-32 apply-question">
                                <h3
                                  className="fs-lg-20 fs-15 lh-30 fw-400 text-color-1"
                                  style={{ marginBottom: '12px' }}
                                >
                                  {parse(item?.question)}
                                  {item?.is_required && <span className="text-danger">*</span>}
                                </h3>
                                <div className="d-flex flex-wrap">
                                  {item?.options?.length > 0 &&
                                    item?.options.map((opt, index) => {
                                      const checked = answeredQuestion?.sub_questions.find(
                                        (sq) => sq.sub_question_id === item.id && sq.sub_option_id === opt.id
                                      );
                                      return (
                                        <>
                                          <div className={`form-check ps-0 mr-12  d-flex flex-wrap `} key={index}>
                                            <input
                                              className={`form-check-input d-none custom-radio-btn-2 cursor-pointer border-dark mb-1 ${
                                                opt?.option_with_other && 'mb-2'
                                              }`}
                                              type="radio"
                                              name={'ques' + item.id}
                                              id={'option' + `${item.id}` + opt.id}
                                              onChange={() =>
                                                handleOptionChange(
                                                  item.lm_course_question_id,
                                                  item.id,
                                                  opt.id,
                                                  null,
                                                  opt.option_with_other
                                                )
                                              }
                                              checked={checked ? true : false}
                                              disabled={item?.question_answers?.is_approved === true}
                                              style={{
                                                cursor: `${
                                                  (item?.question_answers?.is_approved === true && 'not-allowed') ||
                                                  'pointer'
                                                }`,
                                              }}
                                            />
                                            <label
                                              className={`fs-16 lh-24 fw-400 text-color-7 px-16 py-8 rounded-12 custom-label-2 mb-12 user-select-none cursor-pointer`}
                                              for={'option' + `${item.id}` + opt.id}
                                              style={{
                                                cursor: `${
                                                  (item?.question_answers?.is_approved === true && 'not-allowed') ||
                                                  'pointer'
                                                }`,
                                              }}
                                            >
                                              {opt.option}
                                            </label>
                                          </div>
                                          {opt?.option_with_other && checked && (
                                            <div className="text-end w-100">
                                              <div className="textarea-resize-icon w-100">
                                                <textarea
                                                  type="text"
                                                  value={otherInputs[item.id] || ''}
                                                  onChange={(e) =>
                                                    handleOptionChange(
                                                      item.lm_course_question_id,
                                                      item.id,
                                                      opt.id,
                                                      e.target.value,
                                                      opt.option_with_other
                                                    )
                                                  }
                                                  style={{
                                                    cursor: `${
                                                      (item?.question_answers?.is_approved === true && 'not-allowed') ||
                                                      'inherit'
                                                    }`,
                                                  }}
                                                  maxLength={maxChars}
                                                  disabled={item?.question_answers?.is_approved === true}
                                                  className="w-100 common-form-control h-size-100 pt-12 rounded-12 px-16 text-color-1 fs-14 
                   border-w-2 border-color-1 input-focus-shadow bg-white resize-icon"
                                                />
                                              </div>
                                              <span className="text-end d-flex justify-content-end fs-14 fw-400 lh-21 text-color-1">
                                                {currentAnswer?.length}/{maxChars}
                                              </span>
                                            </div>
                                          )}
                                        </>
                                      );
                                    })}
                                </div>
                                {errors[item.id] && <p className="text-danger fs-14 mb-0">{errors[item.id]}</p>}
                                {item?.question_answers?.is_approved === false &&
                                  item?.question_answers?.reject_reason && (
                                    <p className="text-danger fs-14 mb-0">
                                      <span className="fw-600">Correction Request:</span>{' '}
                                      {item?.question_answers?.reject_reason}
                                    </p>
                                  )}
                              </div>
                            )}
                            {item.type === 'rate' && (
                              <div className="mb-lg-40 mb-32 apply-question">
                                <h3 className="fs-lg-20 fs-15 lh-30 fw-400 text-color-1 mb-12">
                                  {parse(item?.question)}
                                  {item?.is_required && <span className="text-danger">*</span>}
                                </h3>
                                <p className="fs-16 fw-400 lh-24 text-color-3 mb-3">
                                  Rate yourself on a scale of 1-10.
                                </p>
                                <div className="d-flex flex-wrap align-items-center justify-content-start">
                                  {Array(10)
                                    .fill()
                                    .map((rat, i) => {
                                      const checked = answeredQuestion?.sub_questions.find(
                                        (sq) => sq.sub_question_id === item.id && sq.answer == i + 1
                                      );
                                      return (
                                        <div
                                          className={`form-check mr-9 d-flex justify-content-center flex-column p-0 `}
                                          key={i}
                                        >
                                          <input
                                            className="form-check-input d-none custom-radio-btn-2 cursor-pointer"
                                            type="radio"
                                            name={'rate' + item.id}
                                            id={'rate' + `${item.id}` + i}
                                            onChange={() =>
                                              handleRateChange(item.lm_course_question_id, item.id, i + 1)
                                            }
                                            disabled={item?.question_answers?.is_approved === true}
                                            checked={checked ? true : false}
                                            style={{
                                              cursor: `${
                                                (item?.question_answers?.is_approved === true && 'not-allowed') ||
                                                'pointer'
                                              }`,
                                            }}
                                          />
                                          <label
                                            className="fs-16 lh-24 fw-400 text-color-7 px-14 py-8 rounded-12 custom-label-2 mb-12 user-select-none cursor-pointer"
                                            for={'rate' + `${item.id}` + i}
                                            style={{
                                              cursor: `${
                                                (item?.question_answers?.is_approved === true && 'not-allowed') ||
                                                'pointer'
                                              }`,
                                            }}
                                          >
                                            {i + 1}
                                          </label>
                                        </div>
                                      );
                                    })}
                                </div>
                                {errors[item.id] && <p className="text-danger fs-14 mb-0">{errors[item.id]}</p>}
                                {item?.question_answers?.is_approved === false &&
                                  item?.question_answers?.reject_reason && (
                                    <p className="text-danger fs-14 mb-0">
                                      <span className="fw-600">Correction Request:</span>{' '}
                                      {item?.question_answers?.reject_reason}
                                    </p>
                                  )}
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    {currentStep * questionsPerPage >= subQueList.length && (
                      <>
                        <div className="mb-4">
                          <h4 className="fs-lg-20 fs-15 fw-400 lh-30 text-color-1 mb-lg-28 mb-12">
                            Upload the required documents<span className="text-danger">*</span>
                            <OverlayTrigger
                              placement={'auto'}
                              overlay={
                                <Popover className="border-color-42 w-100 max-w-478 min-w-478 doc-popover rounded-16">
                                  <Popover.Body className="p-lg-28 p-16">
                                    <div>
                                      <h3 className="fs-14 lh-21 text-color-34">Photo tips</h3>
                                      <ul className="pl-20">
                                        <li className="fs-14 lh-21 text-color-34">
                                          Accepted file types: .jpg, .jpeg, .png and Max. 1MB
                                        </li>
                                        <li className="fs-14 lh-21 text-color-34">
                                          For best results, upload a square image at least 200px by 200px.
                                        </li>
                                        <li className="fs-14 lh-21 text-color-34">Use a friendly. smiling headshot</li>
                                        <li className="fs-14 lh-21 text-color-34">
                                          Consider using your photo from LinkedIn or other professional web sites.
                                        </li>
                                        <li className="fs-14 lh-21 text-color-34">
                                          Solo shots only- there shouldn't be anyone else In your picture. Students just
                                          want to see your face.
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h3 className="fs-14 lh-21 text-color-34">ID Proof</h3>
                                      <ul className="pl-20">
                                        <li className="fs-14 lh-21 text-color-34">
                                          Accepted file types: .jpg, .jpeg, .png and Max. 1MB
                                        </li>
                                        <li className="fs-14 lh-21 text-color-34">
                                          For best results, upload a square image at least 400px by 200px.
                                        </li>
                                        <li className="fs-14 lh-21 text-color-34">
                                          ID Proof must be valid (not expired)
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="mb-24">
                                      <h3 className="fs-14 lh-21 text-color-34 mb-12">Here are some good example:</h3>
                                      <div className="d-flex align-items-center">
                                        <Image
                                          width={87}
                                          height={87}
                                          src={`/images/demo-pic-2.png`}
                                          alt="image"
                                          className="img-fluid mr-12"
                                        />
                                        <Image
                                          width={87}
                                          height={87}
                                          src={`/images/demo-pic-1.png`}
                                          alt="image"
                                          className="img-fluid mr-12"
                                        />
                                      </div>
                                    </div>
                                    <p className="fs-14 lh-21 text-color-34 mb-0">
                                      <span className="fw-600">Note:</span> Avoid awkward cropping, angles and filters.
                                    </p>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <span>
                                <Image
                                  width={20}
                                  height={20}
                                  src={`/images/icons/info-circle-gray.svg`}
                                  alt="icon"
                                  className="img-fluid ml-4 cursor-pointer"
                                />
                              </span>
                            </OverlayTrigger>
                          </h4>
                          <div className="mb-32">
                            <div className="d-flex align-items-center">
                              <div className="mr-20">
                                <h5 className="mb-12 text-color-1 fw-400 fs-lg-16 fs-14 lh-24 text-nowrap">
                                  Profile Picture
                                </h5>
                                <div className="position-relative bg-color-29 d-flex flex-column align-items-center justify-content-center min-w-106 max-w-106 min-h-102 max-h-102 rounded-8 border-dashed border-color-45">
                                  {(!selfieImage && (
                                    <>
                                      <Image
                                        width={31}
                                        height={39}
                                        src={`/images/icons/user-upload.svg`}
                                        alt="icon"
                                        className="img-fluid"
                                      />
                                    </>
                                  )) || (
                                    <>
                                      {(!userStatus?.image || userStatus?.is_profile_pic_approved === false) && (
                                        <span
                                          className="position-absolute rounded-circle border-w border-color-8 bg-white cursor-pointer h-size-20 w-size-20 d-flex align-items-center justify-content-center"
                                          style={{ top: '-10px', right: '-10px', zIndex: 9 }}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelfieImage(null);
                                            setImagePreview(null);
                                            if (userStatus?.is_profile_pic_approved === false) {
                                              setUserStatus({ ...userStatus, image: '' });
                                            }
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faClose} width={10} height={10} />
                                        </span>
                                      )}
                                      {(userStatus?.image && (
                                        <img
                                          width={98}
                                          height={94}
                                          src={`${process.env.APPLICATION_IMG_PATH}uploads/images/users/${imagePreview}`}
                                          alt="Image"
                                          className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                        />
                                      )) || (
                                        <Image
                                          width={98}
                                          height={94}
                                          src={imagePreview}
                                          alt="icon"
                                          className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                          style={{ zIndex: '9' }}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                          }}
                                        />
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                              {!selfieImage && (
                                <div className="pt-35">
                                  <p
                                    onClick={() => setShowUploadModal(true)}
                                    className="cursor-pointer mb-12 fs-14 lh-21"
                                    style={{ color: '#4568F2' }}
                                  >
                                    Upload Photo
                                  </p>
                                  <p
                                    onClick={() => {
                                      setShowSelfieModal(true);
                                      setIsCameraActive(true);
                                    }}
                                    className="cursor-pointer fs-14 lh-21 m-0"
                                    style={{ color: '#4568F2' }}
                                  >
                                    Take a Selfie
                                  </p>
                                </div>
                              )}
                            </div>
                            {errors['selfieImage'] && (
                              <p className="text-danger fs-14 mt-1 mb-0">{errors['selfieImage']}</p>
                            )}
                            {userStatus?.is_profile_pic_approved === false && userStatus?.profile_pic_reject_reason && (
                              <p className="text-danger fs-14 mb-0 mt-2">
                                <span className="fw-600">Correction Request:</span>{' '}
                                {userStatus?.profile_pic_reject_reason}
                              </p>
                            )}
                          </div>
                          <div>
                            <h5 className="mb-12 text-color-1 fw-400 fs-lg-16 fs-14 lh-24 text-nowrap">ID Proof</h5>
                            <div>
                              <select
                                onChange={(e) => {
                                  setDocumentType(e.target.value);
                                  setBackDocument(null);
                                  setFrontDocument(null);
                                  setFrontPreview(null);
                                  setBackPreview(null);
                                }}
                                value={documentType}
                                disabled={userStatus?.is_id_proof_approved === true}
                                className={`${
                                  (documentType == 'Adhar Card' && 'min-w-250') || ''
                                } px-12 fs-14 shadow-none text-color-1 h-size-44 border-color-45 border-w-2 rounded-12 max-w-180 outline-none`}
                              >
                                <option value="">Document Type</option>
                                <option value="Adhar Card">Adhar Card (Only for Indians)&nbsp;&nbsp;&nbsp;</option>
                                <option value="Driving License">Driving License</option>
                                <option value="Passport">Passport</option>
                              </select>
                            </div>
                            {errors['docType'] && <p className="text-danger fs-14 mt-1 mb-0">{errors['docType']}</p>}
                            {documentType && (
                              <div className="d-flex mt-20">
                                <div className="text-center mr-20">
                                  <div
                                    onClick={() => {
                                      if (userStatus?.is_id_proof_approved === false || !userStatus) {
                                        setShowFrontModal(true);
                                      }
                                    }}
                                    className="cursor-pointer position-relative bg-color-29 d-flex flex-column align-items-center justify-content-center min-w-106 max-w-106 min-h-102 max-h-102 rounded-8 border-dashed border-color-45"
                                  >
                                    {(!frontDocument && (
                                      <Image
                                        width={46}
                                        height={34}
                                        src={`/images/icons/front-img-icon.svg`}
                                        alt="icon"
                                        className="img-fluid"
                                      />
                                    )) || (
                                      <>
                                        {(userStatus?.is_id_proof_approved === false || !userStatus) && (
                                          <span
                                            className="position-absolute rounded-circle border-w border-color-8 bg-white cursor-pointer h-size-20 w-size-20 d-flex align-items-center justify-content-center"
                                            style={{ top: '-10px', right: '-10px', zIndex: 9 }}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setFrontDocument(null);
                                              setFrontPreview(null);
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faClose} width={10} height={10} />
                                          </span>
                                        )}
                                        {(userStatus?.id_proof_image && frontPreview && (
                                          <img
                                            width={98}
                                            height={94}
                                            src={
                                              (!isFIdChanged &&
                                                `${process.env.APPLICATION_IMG_PATH}uploads/images/users/${frontPreview}`) ||
                                              frontPreview
                                            }
                                            alt="icon"
                                            className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                            style={{ zIndex: '9' }}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                            }}
                                          />
                                        )) || (
                                          <Image
                                            width={98}
                                            height={94}
                                            src={frontPreview}
                                            alt="icon"
                                            className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                            style={{ zIndex: '9' }}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                            }}
                                          />
                                        )}
                                      </>
                                    )}
                                  </div>
                                  <p className="mb-0 fs-12 lh-18 mt-8 text-color-7">Upload Front</p>
                                </div>
                                {(documentType !== 'Driving License' && (
                                  <div className="text-center mr-20">
                                    <div
                                      onClick={() => {
                                        if (userStatus?.is_id_proof_approved === false || !userStatus) {
                                          setShowBackModal(true);
                                        }
                                      }}
                                      className="cursor-pointer position-relative bg-color-29 d-flex flex-column align-items-center justify-content-center min-w-106 max-w-106 min-h-102 max-h-102 rounded-8 border-dashed border-color-45"
                                    >
                                      {(!backDocument && (
                                        <Image
                                          width={46}
                                          height={34}
                                          src={`/images/icons/back-img-icon.svg`}
                                          alt="icon"
                                          className="img-fluid"
                                        />
                                      )) || (
                                        <>
                                          {(userStatus?.is_id_proof_approved === false || !userStatus) && (
                                            <span
                                              className="position-absolute rounded-circle border-w border-color-8 bg-white cursor-pointer h-size-20 w-size-20 d-flex align-items-center justify-content-center"
                                              style={{ top: '-10px', right: '-10px', zIndex: 9 }}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setBackDocument(null);
                                                setBackPreview(null);
                                              }}
                                            >
                                              <FontAwesomeIcon icon={faClose} width={10} height={10} />
                                            </span>
                                          )}
                                          {(userStatus?.id_proof_image && backPreview && (
                                            <img
                                              width={98}
                                              height={94}
                                              src={
                                                (!isBIdChanged &&
                                                  `${process.env.APPLICATION_IMG_PATH}uploads/images/users/${backPreview}`) ||
                                                backPreview
                                              }
                                              alt="icon"
                                              className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                              style={{ zIndex: '9' }}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                              }}
                                            />
                                          )) || (
                                            <Image
                                              width={98}
                                              height={94}
                                              src={backPreview}
                                              alt="icon"
                                              className="img-fluid rounded-8 p-1 position-relative cursor-default"
                                              style={{ zIndex: '9' }}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                              }}
                                            />
                                          )}
                                        </>
                                      )}
                                    </div>
                                    <p className="mb-0 fs-12 lh-18 mt-8 text-color-7">Upload Back</p>
                                  </div>
                                )) ||
                                  ''}
                              </div>
                            )}
                            {errors['document'] && <p className="text-danger fs-14 mt-1 mb-0">{errors['document']}</p>}
                            {userStatus?.is_id_proof_approved === false && userStatus?.id_proof_reject_reason && (
                              <p className="text-danger fs-14 mb-0 mt-2">
                                <span className="fw-600">Correction Request:</span> {userStatus?.id_proof_reject_reason}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mb-16">
                          <h4 className="fs-lg-20 fs-18 fw-400 lh-30 text-color-1 mb-12">Declaration and Consent</h4>
                          <p className="fs-lg-16 fs-14 lh-24 fw-400 text-color-7 ">
                            By submitting this application, I consent to WsCube Company using my personal information
                            for learning personalization and program-related updates, in accordance with their privacy
                            policy. I also acknowledge and agree to WsCube Company's strict no-refund policy. If I am
                            dissatisfied with the teaching or choose to withdraw for any reason, I understand that I
                            will not be entitled to a refund. The fees paid are non-transferable and cannot be applied
                            to other courses, services, or individuals.
                          </p>
                          <div class="form-check form-checkbox">
                            <input
                              class="form-check-input old-form-check-input shadow-none"
                              type="checkbox"
                              value=""
                              id="checkTerms"
                              defaultChecked
                              checked={isTermsChecked}
                              onChange={handleTermsChange}
                            />
                            <label htmlFor="checkTerms" className="fs-14 lh-21 fw-400 text-color-1 mb-lg-12 mb-8">
                              I have read and agree to the{' '}
                              <Link
                                href={'/privacy-policy'}
                                target="blank"
                                className="fs-14 lh-21 fw-400 text-color-1 text-decoration-underline"
                              >
                                privacy policy
                              </Link>{' '}
                              and{' '}
                              <Link
                                href={'/terms-and-conditions'}
                                target="blank"
                                className="fs-14 lh-21 fw-400 text-color-1 text-decoration-underline"
                              >
                                terms of service
                              </Link>
                              .
                            </label>
                            {errors['terms'] && <p className="text-danger fs-14 mb-0">{errors['terms']}</p>}
                          </div>
                        </div>
                      </>
                    )}
                    <div className="text-center">
                      {(currentStep * questionsPerPage < subQueList.length && (
                        <>
                          <a
                            className="blue-fill-btn min-h-56 px-36 d-flex align-items-center justify-content-center cursor-pointer 
                        px-4 min-w-120 fs-16 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled w-100 mb-20"
                            onClick={handleNext}
                          >
                            Next
                          </a>
                          <button
                            disabled={answeredQuestions?.length == 0 || userStatus?.status == 'Correction Request'}
                            onClick={() => handleShowConfirmPopup('STEP_1')}
                            type="button"
                            className="text-decoration-none cursor-pointer text-color-7 fw-500 fs-16 border-0 bg-transparent p-0 outline-none shadow-none btn-blue-disabled"
                          >
                            Clear form
                          </button>
                        </>
                      )) || (
                        <>
                          <button
                            disabled={isLoading}
                            className="blue-fill-btn min-h-48 px-36 px-4 min-w-120 fs-16 fw-600 rounded-12 orange-hover-shadow btn-blue-disabled w-100 mb-20"
                          >
                            {isLoading && (
                              <Spinner animation="border" role="status" size={'sm'} className="me-2"></Spinner>
                            )}
                            {(userStatus?.status == 'Correction Request' && 'Re-Submit') || 'Submit'}
                          </button>
                          <button
                            disabled={answeredQuestions?.length == 0 || userStatus?.status == 'Correction Request'}
                            onClick={() => handleShowConfirmPopup('STEP_2')}
                            type="button"
                            className="text-decoration-none cursor-pointer text-color-7 fw-500 fs-16 border-0 bg-transparent p-0 outline-none shadow-none btn-blue-disabled"
                          >
                            Clear form
                          </button>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )) || (
            <div className="mx-auto text-center p-5 mt-lg-150">
              <Spinner animation="border" role="status" size={'lg'} variant="primary" className=""></Spinner>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
