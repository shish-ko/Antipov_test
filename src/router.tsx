import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { Default_UI } from "./components/Default_UI";
import { SignIn } from "./pages/SingInPage";
import { LogIn } from "./pages/LogInPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { IndexPage, loader as indexLoader } from "./pages/IndexPage";

const routeObj = createRoutesFromElements(
  <Route path="/" element={<Default_UI />}>
    <Route element={<ProtectedRoutes />}>
      <Route index={true} element={<IndexPage />} loader={indexLoader}/>
      <Route path="/user/:id" />
    </Route>
    <Route>
      <Route path="/sign" element={<SignIn />}/>
      <Route path="/login" element={<LogIn />}/>
    </Route>
  </Route>
)

export const router = createBrowserRouter(routeObj);