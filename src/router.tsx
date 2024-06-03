import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { Default_UI } from "~comps/Default_UI";
import { SignUp } from "./pages/SingUpPage";
import { LogIn } from "./pages/LogInPage";
import { ProtectedRoutes } from "~comps//ProtectedRoutes";
import { IndexPage, loader as indexLoader } from "./pages/IndexPage";
import { UserPage, loader as userLoader } from "./pages/UserPage";

const routeObj = createRoutesFromElements(
  <Route path="/" element={<Default_UI />}>
    <Route element={<ProtectedRoutes />}>
      <Route index={true} element={<IndexPage />} loader={indexLoader} />
      <Route path="/user/:id" element={<UserPage />} loader={userLoader} />
    </Route>
    <Route path="/sign" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
  </Route>
);

export const router = createBrowserRouter(routeObj);