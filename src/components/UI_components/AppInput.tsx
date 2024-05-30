import { InputHTMLAttributes, forwardRef } from "react"

interface IAppInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string
}

export const AppInput = forwardRef<HTMLInputElement,IAppInput>(({label, error, ...rest}, ref) => {

  return (
    <div className="appInput">
      {label && <label className="appInput__label">{label}</label>}
      <input className="appInput__input" data-error={error} {...rest} ref={ref}></input>
      <p className="appInput__error" data-active={!!error}>{error}</p>
    </div>
  )
})