'use client';
import React, { useEffect, Suspense } from "react";
import "@/styles/scss/_app.scss";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Layouts/Footer";
import MainHeader from "@/components/Layouts/MainHeader";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/_context/AuthContext";
import Schema from "@/components/Layouts/Common/schematags";

const data = {};

export default function CategoryLayout({ children }) {
  const pathname = usePathname();

  const isFormPage = pathname && pathname.startsWith('/apply-now') || false;
  const isAdminPreview = pathname && pathname.startsWith('/portfolio/admin') || false;

  useEffect(() => {
    // Ensure the Facebook Pixel is initialized only once
    if (typeof window !== "undefined" && !window.fbq) {
      window.fbq = function () {
        if (window.fbq.callMethod) {
          window.fbq.callMethod(...arguments);
        } else {
          window.fbq.queue.push(arguments);
        }
      };
      window.fbq.queue = [];
      window.fbq.version = "2.0";
      window.fbq.loaded = true;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);

      window.fbq("init", "3096434187051908");

      window.fbq("init", "1179334446963086", { name: "pixel2" }); // New pixel

      window.fbq("track", "PageView");
      window.fbq("pixel2.track", "PageView");
      if ((pathname?.includes('/thank-you') || pathname?.includes('/th')) && !pathname.includes('/thank-you-data-analytics-course')) {
        window.fbq("track", "Lead");
        window.fbq("pixel2.track", "Lead");
      }
    } else if (window.fbq) {
      window.fbq("track", "PageView");
      window.fbq("pixel2?.track" in window.fbq ? "pixel2.track" : "track", "PageView");
    }
  }, [pathname]);

  return (
    <>
      <html lang="en">
        <head>
          {/* <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:type" content="course" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          {/* Google Analytics */}
          <Schema pathname={pathname} />
          {/* {((pathname === '/about' || pathname === '/jaipur' || pathname === '/jodhpur')) && (
            <Schema pathname={pathname} />
          )} */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-3L0ZF56S68"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3L0ZF56S68');
                `,
            }}
          />
          {/* Meta Pixel Code */}
          {/* <noscript>
            <img height="1" width="1" style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=3096434187051908&ev=PageView&noscript=1" />
          </noscript> */}
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-52JC74P');
                `,
            }}
          />
          {/* Google Tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10998233603"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10998233603');
                `,
            }}
          />
        </head>
        <body>
          {(pathname?.includes('/thank-you') || pathname?.includes('/th')) && !pathname.includes('/thank-you-data-analytics-course') && <script
            dangerouslySetInnerHTML={{
              __html: `
       gtag('event', 'conversion', {'send_to': 'AW-10998233603/AsXtCIOvuIoYEIP0rvwo'}); 
            `,
            }}
          />
            || ''}
          {/* {(pathname?.includes('/thank-you') || pathname?.includes('/th')) && !pathname.includes('/thank-you-data-analytics-course') &&
            <script
              dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3096434187051908');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
              `,
              }}
            />
            ||
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
              {
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3096434187051908');
              fbq('track', 'PageView');
                `,
              }}
            />
          } */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52JC74P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
            }}
          />
          <ToastContainer />
          {(pathname == '/landing-page/digital-marketing' || pathname == '/landing-page/digital-marketing/thank-you' || isFormPage || isAdminPreview) && (
            <>
              {React.cloneElement(children, { data })}
            </>
          ) || (<Suspense fallback={<></>}>
            <AuthProvider>
              <MainHeader />
              {React.cloneElement(children, { data })}
              <Footer />
            </AuthProvider></Suspense>
            )}
        </body>
      </html>
    </>
  );
}
