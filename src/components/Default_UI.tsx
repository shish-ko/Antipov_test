import { Outlet } from "react-router-dom"
import { AppInput } from "./UI_components/AppInput"

export const Default_UI: React.FC = () => {
  return(
    <div className="app-container">
      <Outlet />
    </div>
  )
}