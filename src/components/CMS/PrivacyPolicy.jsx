'use client';

import { Accordion } from 'react-bootstrap';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="cms-banner py-100">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12 text-center text-white">
              <h1 className="fs-32 lh-48 mb-14 fw-600">WsCube Tech Privacy Policy</h1>
              <p className="fs-14 lh-21 m-0">Last Updated: January 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cms-page-content py-80">
        <div className="container-main container-w-xl-1202">
          <div className="row">
            <div className="col-12">
              <p>
                This privacy notice for WsCube Tech Pvt. Ltd. ('Company', 'we', 'us', or 'our',), describes how and why
                we might collect, store, use, and/or share ('process') your information when you use our services
                ('Services'), such as when you:
              </p>
              <ul>
                <li>
                  Visit our website at <a href={process.env.NEXT_PUBLIC_SITE_URL}>www.wscubetech.com</a> or any website
                  of ours that links to this privacy notice
                </li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p>
                <b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights
                and choices. If you do not agree with our policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us at 
                <a href="mailto:info@wscubetech.com">info@wscubetech.com</a>.
              </p>
              <h3>SUMMARY OF KEY POINTS</h3>
              <p>
                This summary provides key points from our privacy notice, but you can find out more details about any of
                these topics by clicking the link following each key point or by using our table of contents below to
                find the section you are looking for. You can also click here to go directly to our table of contents.
              </p>
              <h3>What personal information do we process?</h3>
              <p>
                When you visit, use, or navigate our Services, we may process personal information depending on how you
                interact with WsCube Tech Pvt. Ltd. and the Services, the choices you make, and the products and
                features you use. Click here to learn more.
              </p>
              <h3>Do we process any sensitive personal information?</h3>
              <p>We do not process sensitive personal information.</p>
              <h3>Do we receive any information from third parties?</h3>
              <p>We do not receive any information from third parties.</p>
              <h3>How do we process your information? </h3>
              <p>
                We process your information to provide, improve, and administer our Services, communicate with you, for
                security and fraud prevention, and comply with the law. We may also process your information for other
                purposes with your consent. We process your information only when we have a valid legal reason to do so.
                In what situations and with which parties do we share personal information? We may share information in
                specific situations and with specific third parties.
              </p>
              <h3>How do we keep your information safe?</h3>
              <p>
                We have organisational and technical processes and procedures in place to protect your personal
                information. However, no electronic transmission over the internet or information storage technology can
                be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorised third parties will not be able to defeat our security and improperly collect, access,
                steal, or modify your information.
              </p>
              <h3>What are your rights?</h3>
              <p>
                Depending on where you are located geographically, the applicable privacy law may mean you have certain
                rights regarding your personal information.
              </p>
              <h3>How do you exercise your rights?</h3>
              <p>
                How do you exercise your rights? The easiest way to exercise your rights is by filling out our data
                subject request form available here:{' '}
                <a href="https://www.wscubetech.com/contact">https://www.wscubetech.com/contact</a>, or by contacting
                us. We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. WHAT INFORMATION DO WE COLLECT?</Accordion.Header>
                  <Accordion.Body>
                    <h3>Personal information you disclose to us</h3>
                    <p>
                      We collect personal information that you provide to us. We collect personal information that you
                      voluntarily provide to us when you register on the Services, express an interest in obtaining
                      information about us or our products and Services, when you participate in activities on the
                      Services, or otherwise when you contact us.
                    </p>
                    <h3>Personal Information Provided by You</h3>
                    <p>
                      The personal information that we collect depends on the context of your interactions with us and
                      the Services, the choices you make, and the products and features you use. The personal
                      information we collect may include the following:
                    </p>
                    <ul>
                      <li>names</li>
                      <li>phone numbers</li>
                      <li>email addresses</li>
                      <li>job titles</li>
                      <li>contact preferences</li>
                      <li>billing addresses</li>
                      <li>usernames</li>
                      <li>passwords</li>
                    </ul>
                    <h3>Payment Data</h3>
                    <p>
                      We may collect data necessary to process your payment if you make purchases, such as your payment
                      instrument number (such as a credit card number), and the security code associated with your
                      payment instrument. All payment data is stored by Razorpay. You may find their privacy notice
                      link(s) here:{' '}
                      <a target="blank" href="https://razorpay.com/privacy/">
                        https://razorpay.com/privacy/
                      </a>
                      .
                    </p>
                    <h3>Information automatically collected</h3>
                    <p>
                      Some information — such as your Internet Protocol (IP) address and/or browser and device
                      characteristics — is collected automatically when you visit our Services.
                    </p>
                    <p>
                      We automatically collect certain information when you visit, use, or navigate the Services. This
                      information does not reveal your specific identity (like your name or contact information) but may
                      include device and usage information, such as your IP address, browser and device characteristics,
                      operating system, language preferences, referring URLs, device name, country, location,
                      information about how and when you use our Services, and other technical information. This
                      information is primarily needed to maintain the security and operation of our Services, and for
                      our internal analytics and reporting purposes.
                    </p>
                    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                    <p>The information we collect includes:</p>
                    <ul>
                      <li>
                        <p>
                          <b>Log and Usage Data.</b> Log and usage data is service-related, diagnostic, usage, and
                          performance information our servers automatically collect when you access or use our Services
                          and which we record in log files. Depending on how you interact with us, this log data may
                          include your IP address, device information, browser type, and settings and information about
                          your activity in the Services (such as the date/time stamps associated with your usage, pages
                          and files viewed, searches, and other actions you take such as which features you use), device
                          event information (such as system activity, error reports (sometimes called 'crash dumps'),
                          and hardware settings).
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Device Data.</b> We collect device data such as information about your computer, phone,
                          tablet, or other device you use to access the Services. Depending on the device used, this
                          device data may include information such as your IP address (or proxy server), device and
                          application identification numbers, location, browser type, hardware model, Internet service
                          provider and/or mobile carrier, operating system, and system configuration information.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Location Data.</b> We collect location data such as information about your device's
                          location, which can be either precise or imprecise. How much information we collect depends on
                          the type and settings of the device you use to access the Services. For example, we may use
                          GPS and other technologies to collect geolocation data that tells us your current location
                          (based on your IP address). You can opt out of allowing us to collect this information either
                          by refusing access to the information or by disabling your Location setting on your device.
                          However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                        </p>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. HOW DO WE PROCESS YOUR INFORMATION?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We process your information to provide, improve, and administer our Services, communicate with
                      you, for security and fraud prevention, and to comply with law. We may also process your
                      information for other purposes with your consent.
                    </p>
                    <h3>
                      We process your personal information for a variety of reasons, depending on how you interact with
                      our Services, including:
                    </h3>
                    <ul>
                      <li>
                        <p>
                          To facilitate account creation and authentication and otherwise manage user accounts. We may
                          process your information so you can create and log in to your account, as well as keep your
                          account in working order.
                        </p>
                      </li>
                      <li>
                        <p>
                          To deliver and facilitate delivery of services to the user. We may process your information to
                          provide you with the requested service.
                        </p>
                      </li>
                      <li>
                        <p>
                          To respond to user inquiries/offer support to users. We may process your information to
                          respond to your inquiries and solve any potential issues you might have with the requested
                          service.
                        </p>
                      </li>
                      <li>
                        <p>
                          To fulfil and manage your orders. We may process your information to fulfil and manage your
                          orders, payments, returns, and exchanges made through the Services.
                        </p>
                      </li>
                      <li>
                        <p>
                          To enable user-to-user communications. We may process your information if you choose to use
                          any of our offerings that allow for communication with another user.
                        </p>
                      </li>
                      <li>
                        <p>
                          To send you marketing and promotional communications. We may process the personal information
                          you send to us for our marketing purposes, if this is in accordance with your marketing
                          preferences. You can opt out of our marketing emails at any time. For more information, see
                          'WHAT ARE YOUR PRIVACY RIGHTS?' below.
                        </p>
                      </li>
                      <li>
                        <p>
                          To evaluate and improve our Services, products, marketing, and your experience. We may process
                          your information when we believe it is necessary to identify usage trends, determine the
                          effectiveness of our promotional campaigns, and to evaluate and improve our Services,
                          products, marketing, and your experience.
                        </p>
                      </li>
                      <li>
                        <p>
                          To comply with our legal obligations. We may process your information to comply with our legal
                          obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                        </p>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We may share information in specific situations described in this section and/or with the
                      following third parties.
                    </p>
                    <p>We may need to share your personal information in the following situations:</p>
                    <ul>
                      <li>
                        <p>
                          <b>Business Transfers.</b> We may share or transfer your information in connection with, or
                          during negotiations of, any merger, sale of company assets, financing, or acquisition of all
                          or a portion of our business to another company.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Business Partners.</b> We may share your information with our business partners to offer
                          you certain products, services, or promotions.
                        </p>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We may use cookies and similar tracking technologies (like web beacons and pixels) to access or
                      store information. Specific information about how we use such technologies and how you can refuse
                      certain cookies is set out in our Cookie Notice.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      If you choose to register or log in to our services using a social media account, we may have
                      access to certain information about you.
                    </p>
                    <p>
                      Our Services offer you the ability to register and log in using your third-party social media
                      account details (like your Facebook or Twitter logins). Where you choose to do this, we will
                      receive certain profile information about you from your social media provider. The profile
                      information we receive may vary depending on the social media provider concerned, but will often
                      include your name, email address, friends list, and profile picture, as well as other information
                      you choose to make public on such a social media platform.
                    </p>
                    <p>
                      We will use the information we receive only for the purposes that are described in this privacy
                      notice or that are otherwise made clear to you on the relevant Services. Please note that we do
                      not control, and are not responsible for, other uses of your personal information by your
                      third-party social media provider. We recommend that you review their privacy notice to understand
                      how they collect, use, and share your personal information, and how you can set your privacy
                      preferences on their sites and apps.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>6. HOW LONG DO WE KEEP YOUR INFORMATION?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
                      notice unless otherwise required by law.
                    </p>
                    <p>
                      We will only keep your personal information for as long as it is necessary for the purposes set
                      out in this privacy notice, unless a longer retention period is required or permitted by law (such
                      as tax, accounting, or other legal requirements). No purpose in this notice will require us to
                      keep your personal information for longer than six (6) months past the termination of the user's
                      account.
                    </p>
                    <p>
                      When we have no ongoing legitimate business need to process your personal information, we will
                      either delete or anonymize such information, or, if this is not possible (for example, because
                      your personal information has been stored in backup archives), then we will securely store your
                      personal information and isolate it from any further processing until deletion is possible.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We aim to protect your personal information through a system of organisational and technical
                      security measures. We have implemented appropriate and reasonable technical and organisational
                      security measures designed to protect the security of any personal information we process.
                    </p>
                    <p>
                      However, despite our safeguards and efforts to secure your information, no electronic transmission
                      over the Internet or information storage technology can be guaranteed to be 100% secure, so we
                      cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will
                      not be able to defeat our security and improperly collect, access, steal, or modify your
                      information. Although we will do our best to protect your personal information, transmission of
                      personal information to and from our Services is at your own risk. You should only access the
                      Services within a secure environment.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>8. WHAT ARE YOUR PRIVACY RIGHTS?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You may review, change, or terminate your account at any time. If you are located in the EEA or UK
                      and you believe we are unlawfully processing your personal information, you also have the right to
                      complain to your local data protection supervisory authority. You can find their contact details
                      here:{' '}
                      <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html">
                        https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html
                      </a>
                    </p>
                    <p>
                      If you are located in Switzerland, the contact details for the data protection authorities are
                      available here:{' '}
                      <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                        https://www.edoeb.admin.ch/edoeb/en/home.html
                      </a>
                      .
                    </p>
                    <p>
                      <b>Withdrawing your consent:</b> If we are relying on your consent to process your personal
                      information, which may be express and/or implied consent, depending on the applicable law, you
                      have the right to withdraw your consent at any time. You can withdraw your consent at any time by
                      contacting us by using the contact details.
                    </p>
                    <p>
                      However, please note that this will not affect the lawfulness of the processing before its
                      withdrawal nor, when applicable law allows, will it affect the processing of your personal
                      information conducted in reliance on lawful processing grounds other than consent.
                    </p>
                    <p>
                      <b>Opting out of marketing and promotional communications:</b> You can unsubscribe from our
                      marketing and promotional communications at any time by clicking on the unsubscribe link in the
                      emails that we send, or by contacting us using the details provided.
                    </p>
                    <p>
                      You will then be removed from the marketing lists. However, we may still communicate with you —
                      for example, to send you service-related messages that are necessary for the administration and
                      use of your account, to respond to service requests, or for other non-marketing purposes.
                    </p>
                    <h3>Account Information</h3>
                    <p>
                      If you would at any time like to review or change the information in your account or terminate
                      your account, you can:
                    </p>
                    <h3>Contact us using the contact information provided.</h3>
                    <p>
                      Upon your request to terminate your account, we will deactivate or delete your account and
                      information from our active databases. However, we may retain some information in our files to
                      prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
                      and/or comply with applicable legal requirements.
                    </p>
                    <p>
                      <b>Cookies and similar technologies:</b> Most Web browsers are set to accept cookies by default.
                      If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.
                      If you choose to remove cookies or reject cookies, this could affect certain features or services
                      of our Services. If you have questions or comments about your privacy rights, you may email us at
                      <a href="mailto:info@wscubetech.com"> info@wscubetech.com</a>.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>9. CONTROLS FOR DO-NOT-TRACK FEATURES</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
                      ('DNT') feature or setting you can activate to signal your privacy preference not to have data
                      about your online browsing activities monitored and collected.
                    </p>
                    <p>
                      At this stage no uniform technology standard for recognising and implementing DNT signals has been
                      finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that
                      automatically communicates your choice not to be tracked online. If a standard for online tracking
                      is adopted that we must follow in the future, we will inform you about that practice in a revised
                      version of this privacy notice.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>10. HOW CAN YOU CONTACT US REGARDING PRIVACY POLICY?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      If you have questions or comments about this notice, you may email us at{' '}
                      <a href="mailto:info@wscubetech.com">info@wscubetech.com</a> or by post to:
                    </p>
                    <p>
                      WsCube Tech Pvt. Ltd. 1st Floor, Laxmi Tower
                      <br />
                      Bhaskar Circle
                      <br />
                      Jodhpur, Rajasthan 342001 <br />
                      India
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Based on the applicable laws of your country, you may have the right to request access to the
                      personal information we collect from you, change that information, or delete it. To request to
                      review, update, or delete your personal information, please visit:
                      <a href="https://www.wscubetech.com/contact"> https://www.wscubetech.com/contact</a>.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
