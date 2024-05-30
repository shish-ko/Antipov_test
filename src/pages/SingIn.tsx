import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { AppInput } from "src/components/UI_components/AppInput"
import { emailValidator, passwordValidator } from "src/utils"
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
  const onSubmit: SubmitHandler<TRegForm> = (data) => console.log(data)

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
        <button className="appBtn">Зарегистрироваться</button>
        <p className="auth__redirect">Уже есть аккаунт? <Link to={'/login'}>войти</Link></p>
      </form>
    </div>
  )
}