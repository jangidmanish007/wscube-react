"use client";
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const session = false;
    useEffect(() => {
      if (!session) {
        redirect('/');
      }
    }, []);

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />
  }
}