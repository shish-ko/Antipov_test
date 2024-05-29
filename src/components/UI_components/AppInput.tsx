import { InputHTMLAttributes } from "react"

interface IAppInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string
}

export const AppInput: React.FC<IAppInput> = ({label, error}) => {
  return (
    <div className="appInput">
      {label && <label className="appInput__label">{label}</label>}
      <input className="appInput__input" data-error={error}></input>
      <p className="appInput__error" data-active={error}>error</p>
    </div>
  )
}