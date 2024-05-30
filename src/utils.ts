import { TRegForm } from "./pages/SingIn";

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
export {emailValidator, passwordValidator};
