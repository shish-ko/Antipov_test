export const AppInput = () => {
  return (
    <div className="appInput">
      <input className="appInput__input" data-error={true}></input>
      <p className="appInput__error" data-active={true}>error</p>
    </div>
  )
}