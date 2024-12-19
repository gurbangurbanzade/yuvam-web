"use client"
import { useEffect } from 'react';
import { handleRedirect } from '@/lib/redirectData';

const RedirectComponent = () => {
  useEffect(() => {
    handleRedirect();
  }, []);

  return null; 
};

export default RedirectComponent;