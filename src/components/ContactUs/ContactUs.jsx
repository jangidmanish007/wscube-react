import Centers from './Centers';
import ReachOutDirectly from './ReachOutDirectly';
import ContactOnlineCourse from './ContactOnlineCourse';

export default function ContactUs({ centers, utmParameters }) {
  return (
    <>
      <section className="contact-banner pt-lg-119 pt-115 pb-lg-250 pb-80">
        <div className="header-gradiant w-100 min-h-183 position-absolute top-0 start-0 d-lg-block d-none"></div>
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center">
              <div className="position-relative" style={{ zIndex: 99 }}>
                <h1 className="fs-32 lh-48 fw-600 text-white mb-14">Get in touch</h1>
                <p className="fs-14 lh-21 fw-400 text-white mb-0 mx-auto max-w-512">
                  We&apos;re all ears! Talk to us about your needs, and we&apos;ll provide the best possible solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Centers centers={centers} />
      <ContactOnlineCourse />
      <ReachOutDirectly centers={centers} utmParameters={utmParameters} />
    </>
  );
}
