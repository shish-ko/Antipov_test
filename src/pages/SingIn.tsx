import { AppInput } from "src/components/UI_components/AppInput"

export const SignIn =() => {
  return(
    <div className="auth-container">
      <div className="auth">
        <h2>Регистрация</h2>
        <AppInput label="Имя" />
        <AppInput label="Электронная почта" />
        <AppInput label="Пароль" />
        <AppInput label="Подтвердите пароль" />
        <button className="appBtn">Зарегистрироваться</button>
      </div>
    </div>
  )
}