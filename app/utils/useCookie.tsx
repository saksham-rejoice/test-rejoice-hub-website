
export function useCookie(name: string) {
    const getCookie = () => {
      if (typeof document === 'undefined') return null;
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : null;
    };
  
    const setCookie = (value: string, days: number) => {
      if (typeof document === 'undefined') return;
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    };
  
    return { getCookie, setCookie };
  }
  