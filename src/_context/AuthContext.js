'use client'
// context/auth-context.js
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getUserProfile } from '@/_services/authService';
import { usePathname, useSearchParams } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginSideBar, setShowLoginSideBar] = useState(false);
  const [getUser, setGetUser] = useState(true);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const utmSource = searchParams.get("utm_source");

  useEffect(() => {
    getUtms()
  }, [utmSource])

  useEffect(() => {
    if (Cookies.get('_token')) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [Cookies.get('_token')]);

  const fetchUser = async () => {
    const accessToken = Cookies.get('_token');
    if (accessToken) {
      try {
        const data = await getUserProfile();
        if (data?.status) {
          setUser(data?.result);
          setIsLoggedIn(true);
          setLoading(false);
        } else {
          Cookies.remove('_token');
          Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
        }
      } catch (err) {
        setIsLoggedIn(false);
        setLoading(false);
        Cookies.remove('_token');
        Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
        console.error('Failed to fetch user:', err);
      }
    }
    setLoading(false);
  };

  const getUtms = () => {
    if (utmSource != null) {
      const queryParams = {};
      searchParams.forEach((value, key) => {
        queryParams[key] = value;
      });
      const expireParams = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 minutes from now
      const stringParams = JSON.stringify(queryParams)
      if (stringParams) {
        Cookies.set('social_url_source', stringParams, {
          expires: expireParams,
          domain: `${process.env.COOKIES_DOMAIN}`,
        });
        Cookies.set('utm_pathname', pathName, {
          expires: expireParams,
          domain: `${process.env.COOKIES_DOMAIN}`,
        });
      }
    }
  }

  const logout = async () => {
    // await axios.post('/api/auth/logout');
    Cookies.remove('_token');
    Cookies.remove('_token', { domain: `${process.env.COOKIES_DOMAIN}` });
    setIsLoggedIn(false);
    setUser(null);
  };

  const getUtmParams = () => {
    const utmCookie = Cookies.get('social_url_source');
    return utmCookie ? JSON.parse(utmCookie) : null;
  };

  return (
    <AuthContext.Provider value={{ user, fetchUser, isLoggedIn, loading, logout, showLoginSideBar, setShowLoginSideBar, getUtmParams }}>
      {children}
    </AuthContext.Provider>
  );
};
