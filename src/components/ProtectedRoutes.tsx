import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'appStore';

export const ProtectedRoutes =()=> {
  const token = useAppSelector(s=>s.token);
  return (
   token 
    ? <Outlet/>
    : <Navigate to={'/login'} />
  )
}