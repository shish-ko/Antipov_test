import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { AppInput } from "~comps/UI_components/AppInput"
import { emailValidator, passwordValidator } from "utils";
import { useDispatch } from 'react-redux';
import { API_URL } from "constants";
import { setToken } from "appStore";
import { IAuthRes } from "interfaces";
export type TRegForm = {
  name: string,
  email: string,
  password: string,
  checkPassword: string,
}
export const SignIn =() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TRegForm> = async ({email, password}) => {
    const res = await fetch(API_URL+'register/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json() as IAuthRes;
    dispatch(setToken(data.token));
    navigate('/')
  }

  return(
    <div className="auth-container">
      <form className="auth" onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <AppInput label="Имя" 
          {...register('name', {required: 'Введите имя'})} 
          error={errors.name?.message}/>
        <AppInput label="Электронная почта" 
          {...register('email', {required: 'Введите e-mail', validate: emailValidator})} 
          error={errors.email?.message}/>
        <AppInput label="Пароль" 
          {...register('password', {required: 'Введите пароль'})}
          error={errors.password?.message}
          type="password"/>
        <AppInput label="Подтвердите пароль" 
          {...register('checkPassword', {required: 'Повторите пароль', validate: passwordValidator})}
          error={errors.checkPassword?.message}
          type="password"/>
        <button className="appBtn auth__submit">Зарегистрироваться</button>
        <p className="auth__redirect">Уже есть аккаунт? <Link to={'/login'} className="auth__redirectLink">войти</Link></p>
      </form>
    </div>
  )
}