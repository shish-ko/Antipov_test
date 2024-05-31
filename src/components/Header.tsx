import { ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface IHeaderProps {
  children: ReactNode
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <div className="main-container">
        <div className="header">
          <button className="navBtn" onClick={() => navigate(-1)} style={pathname === '/' ? { visibility: 'hidden' } : {}}>Назад</button>
          <div className="header__outlet">
            {children}

          </div>
          <button className="navBtn" >Выход</button>
        </div>
      </div>
    </header>
  )
}