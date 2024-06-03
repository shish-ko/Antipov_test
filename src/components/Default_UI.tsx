import { Outlet } from "react-router-dom";

export const Default_UI: React.FC = () => {
  return(
    <div className="app-container">
      <Outlet />
    </div>
  );
};