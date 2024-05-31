import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setToken } from "appStore"
import { AppInput } from "~comps/UI_components/AppInput"
import { API_URL } from "constants"
import { IAuthRes } from "interfaces"
import { emailValidator } from "utils"
type TLogInForm = {
  email: string,
  password: string,
}
export const LogIn=() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogInForm>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TLogInForm> = async ({email, password}) => {
    const res = await fetch(API_URL+'login/', {
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
        <h2>Авторизация</h2>        
        <AppInput label="Электронная почта" 
          {...register('email', {required: 'Введите e-mail', validate: emailValidator})} 
          error={errors.email?.message}/>
        <AppInput label="Пароль" 
          {...register('password', {required: 'Введите пароль'})}
          error={errors.password?.message}
          type="password"/>        
        <button className="appBtn auth__submit">Вход</button>
        <p className="auth__redirect">Нет аккаунта? <Link to={'/sign'}>зарегистрироваться</Link></p>
      </form>
    </div>
  )
}