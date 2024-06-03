import { TRegForm } from "./pages/SingUpPage";
import { useState, useEffect } from 'react';

const emailValidator = (email: string) => {
  return email
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) || 'Неверный e-mail'
}

const passwordValidator = (checkPassword: string, formValues: TRegForm) => {
  return checkPassword === formValues.password || 'Пароли не совпадают';
}


const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export {emailValidator, passwordValidator, useScreenSize};
