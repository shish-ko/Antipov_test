import { removeToken } from "appStore";
import { ReactNode } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Back from '~assets/back.svg?react'
import Exit from '~assets/exit.svg?react'

interface IHeaderProps {
  children: ReactNode
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <header className="header-container">
      <div className="main-container">
        <div className="header">
          <button className="navBtn" onClick={() => navigate(-1)} style={pathname === '/' ? { visibility: 'hidden' } : {}}>Назад</button>
          <button className="navBtn_icon" onClick={() => navigate(-1)} style={pathname === '/' ? { visibility: 'hidden' } : {}}><Back /></button>
          <div className="header__outlet">
            {children}
          </div>
          <button className="navBtn" onClick={() => { dispatch(removeToken()) }}>Выход</button>
          <button className="navBtn_icon" onClick={() => { dispatch(removeToken()) }}><Exit /></button>
        </div>
        <div className="header__smallOutlet">
          {children}
        </div>
      </div>
    </header>
  )
}