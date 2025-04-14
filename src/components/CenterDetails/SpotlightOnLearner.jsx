import React, { useEffect, useRef } from 'react';

export default function SpotlightOnLearner({ centerSlug }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

  return (
    <section className="bg-color-19 py-lg-80 py-64">
      <div className="container-main container-w-xl-1202">
        <div className="d-lg-flex justify-content-between grid-gap-60">
          <div className="w-full max-w-lg-575 mb-lg-0 mb-44">
            <div className="section-info text-lg-start text-center text-color-1 mb-40">
              <h2 className="fw-600 fs-32 lh-48 mb-0">Spotlight on our Learner</h2>
            </div>
            {(centerSlug == 'jaipur' && (
              <div className="">
                <p className="fs-16 fw-600 lh-24 text-color-1 mb-12">Jitesh Bhojwani</p>
                <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                  WsCube Tech is a great institute. All the teachers are friendly in nature and have high knowledge of
                  the IT field.They have all the facility like projecter class and also have lab for our practicle
                  practice. I got lots of knowledge regarding my course and also got some extra advice and help for my
                  future planning in this field.
                </p>
              </div>
            )) || (
              <div className="">
                <p className="fs-16 fw-600 lh-24 text-color-1 mb-12">Pushpendra Singh Rathore</p>
                <p className="fs-16 fw-400 lh-24 text-color-7 mb-0">
                  Learning Digital Marketing from WsCube Tech was an outstanding experience. The team is diligent in
                  every aspect, from class schedules, to fee arrangements, and providing ample support in regards to
                  education. The trainers are extremely supportive, making the whole experience truly enjoyable.
                </p>
              </div>
            )}
          </div>
          <div className="w-full max-w-522 mx-lg-0 mx-auto">
            <div className="img-box text-lg-end text-center sportlight-video-box p-20 rounded-32">
              <div className="video-container-wrapper rounded-16">
                {(centerSlug == 'jaipur' && (
                  <video
                    width="100%"
                    height="267"
                    controls
                    className="rounded-16 object-fit-cover"
                    autoPlay
                    loop
                    ref={videoRef}
                  >
                    <source
                      src={`${process.env.IMG_PATH}images/home-images/home_video/Jitesh_DA_Testimonial.mp4`}
                      type="video/mp4"
                      className="rounded-16"
                    />
                    Your browser does not support the video tag.
                  </video>
                )) || (
                  <video
                    width="100%"
                    height="267"
                    controls
                    className="rounded-16 object-fit-cover"
                    autoplay
                    loop
                    ref={videoRef}
                  >
                    <source
                      src={`${process.env.IMG_PATH}images/home-images/home_video/Pushpendra_Singh_Rathore.mp4`}
                      type="video/mp4"
                      className="rounded-16"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
