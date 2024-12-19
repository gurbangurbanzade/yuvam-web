import { useEffect } from 'react';
import { getRedirectUrls } from '@/api/common';

export const handleRedirect = async () => {
  const currentUrl = window.location.pathname;
console.log(currentUrl)
  const redirectData = await getRedirectUrls();
  if (!redirectData) return; 

  const redirectRule = redirectData.find((data: { url: string; redirectUrl: string;}) => data.url === currentUrl);

  if (redirectRule) {
    if (redirectRule.reload) {
      window.location.replace(redirectRule.redirectUrl);
    } else {
      window.location.href = redirectRule.redirectUrl;
    }
  }
};