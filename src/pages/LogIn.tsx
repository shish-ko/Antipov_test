import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { AppInput } from "src/components/UI_components/AppInput"
import { emailValidator } from "src/utils"
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
  const onSubmit: SubmitHandler<TLogInForm> = (data) => console.log(data)

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
        <button className="appBtn">Вход</button>
        <p className="auth__redirect">Нет аккаунта? <Link to={'/sign'}>зарегистрироваться</Link></p>
      </form>
    </div>
  )
}