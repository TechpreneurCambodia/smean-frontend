
export const setCookie = (name, value, seconds = 60 * 60 * 24) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + seconds * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };
  

export const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

export const eraseCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};
