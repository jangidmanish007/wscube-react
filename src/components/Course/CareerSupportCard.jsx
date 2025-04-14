import Image from 'next/image';
import parse from 'html-react-parser';

export default function CareerSupportCard(props) {
  const { careerSupportAllData } = props;
  return (
    <div
      title={careerSupportAllData?.title}
      className="career-support-card border-w-2 border-color-1 hover-shadow-4 rounded-12 position-relative h-full"
    >
      <div className="career-support-body py-lg-24 px-lg-20 text-center py-24 px-11">
        <div className="img-box mb-20 position-relative min-h-145 text-center">
          {/* <div className="position-absolute bottom-0 w-full h-full career-bg-layer"></div> */}
          <Image
            src={`${process.env.IMG_PATH}${careerSupportAllData?.image}`}
            width={200}
            height={145}
            alt="career-img"
            className="img-fluid mx-auto"
          />
        </div>
        <h3 className="fs-lg-20 fw-600 lh-lg-30 fs-18 lh-28 text-color-1 mb-16 text-center">
          {careerSupportAllData?.title}
        </h3>
        <div className="min-h-80">
          <p className="fs-lg-16 fs-14 fw-400 lh-lg-24 lh-21 text-color-7 line-clamp-4 text-center">
            {parse(careerSupportAllData?.description)}
          </p>
        </div>
      </div>
    </div>
  );
}
