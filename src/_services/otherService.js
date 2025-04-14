import { fetcher } from "@/_utils/ApiBase";
import { cetnerList } from "@/components/CenterDetails/centerList";
import { faTruckDroplet } from "@fortawesome/free-solid-svg-icons";

//  master classes list api
export const getMetaData = async (params) => {
  try {
    let checkCenter = false
    if (cetnerList.includes(params?.slug)) {
      checkCenter = faTruckDroplet
      return {
        robots: {
          index: false,
          follow: false,
        },
      };
    } else {
      const response = await fetcher('GET', process.env.GET_META_DETAILS, params);
      if (response?.status) {
        const metaData = response?.result;
        const url = params?.slug == 'home-page' ? '/' : '/' + params?.slug;
        return {
          title: metaData?.meta_title,
          description: metaData?.meta_description,
          keywords: metaData?.meta_keywords,
          alternates: {
            canonical: params?.isEvent ? process.env.NEXT_PUBLIC_SITE_URL + '/events' + url : process.env.NEXT_PUBLIC_SITE_URL + url,
          },
          openGraph: {
            title: metaData?.meta_title,
            description: metaData?.meta_description,
            siteName: process.env.APP_NAME,
            url: process.env.NEXT_PUBLIC_SITE_URL + url,
            images: ['https://www.wscubetech.com/images/wscube-tech-logo-2.svg']
          },
          twitter: {
            site: '@wscubetechindia'
          }
        };
      } else {
        return null
      }
    }
  } catch (err) {
    return null;
  }
}




