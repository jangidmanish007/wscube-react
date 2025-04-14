import React from 'react';

export default function PortfolioBenefits() {
  const portfolioMatterData = [
    {
      id: 1,
      heading: 'Showcase Your Product Thinking:',
      disc: `Imagine a hiring manager flipping through a stack of resumes. Yours stands out because your portfolio demonstrates your skills. 
      You showcase your ability to define product roadmaps, translate business goals into user-centric solutions, and ultimately drive results.`,
    },
    {
      id: 2,
      heading: 'Unleash Your Data Superpowers:',
      disc: `Data is the lifeblood of product management. Your portfolio is the platform to highlight your research methodologies and data analysis skills. 
             But it’s not just about the numbers. You showcase how you leverage data to inform product decisions, measure success, and
             ultimately tell a data-driven story.`,
    },
    {
      id: 3,
      heading: 'Become a Storytelling Master:',
      disc: `Captivate potential employers with compelling narratives.  Your portfolio isn’t just a collection of projects; it’s a journey.  Weave impactful
              case studies into your narrative, demonstrating clear communication of complex concepts.  Hiring managers don’t just want to see what 
              you did; they want to understand how you think.`,
    },
    {
      id: 4,
      heading: 'Prove Your UX Prowess:',
      disc: `Understanding user-centered design principles is no longer a bonus, it’s a must-have for product managers. Your portfolio is the platform
              to demonstrate your grasp of UX principles and your ability to apply them in real-world projects. Showcase how you prioritize the user experience
                at every stage of the product development process.`,
    },
  ];
  return (
    <section>
      <div className="container-main container-w-xl-1202">
        <div className="row mb-68">
          <div className="col-12">
            <h2 className="fs-28 lh-42 fw-600 text-color-1 mb-20">Portfolio Website Benefits</h2>
            <p className="fs-14 lh-21 fw-400 text-color-34 mb-0">
              The product management landscape is a battlefield. Resumes are a starting point, but in today’s fiercely
              competitive market, you need a weapon that separates you from the pack. Enter the product manager
              portfolio – your secret weapon to showcase your strategic thinking, user empathy, and ability to translate
              ideas into reality. But how do you craft a portfolio that crushes the competition and lands you dream
              product management jobs faster? Worry not, product leader hopefuls! This in-depth guide equips you with
              the knowledge and strategies to build a killer product manager portfolio. Here’s a masterclass on how to
              build your resume and portfolio if you are looking to transition to a product role.
            </p>
          </div>
        </div>
        <div className="row mb-68">
          <div className="col-12">
            <div className="mb-32">
              <h3 className="fs-20 lh-30 fw-600 text-color-1 mb-12">Portfolio Website Benefits</h3>
              <p className="fs-14 lh-21 fw-400 text-color-34 mb-0">
                Think of your portfolio as a dynamic, interactive conversation starter. It goes beyond the static
                information on a resume, allowing you to:
              </p>
            </div>
            <div className="d-grid grid-md-cols-2 grid-cols-1 grid-gap-20">
              {portfolioMatterData?.map((item, index) => {
                return (
                  <div className={`h-100 rounded-12 p-lg-36 p-28 portfolio-matters-card`} key={index}>
                    <h3 className="fs-16 fw-600 lh-24 text-color-1 mb-12">{item?.heading}</h3>
                    <p className="fs-14 fw-400 lh-21 text-color-34 mb-0">{item?.disc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
