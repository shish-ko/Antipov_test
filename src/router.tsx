import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { Default_UI } from "./components/Default_UI";
import { SignIn } from "./pages/SingIn";

const routeObj = createRoutesFromElements(
  <Route path="/" element={<Default_UI />}>
    <Route element={<h1>Protected</h1>}>
      <Route index={true} />
      <Route path="/user/:id" />
    </Route>
    <Route>
      <Route path="/sign" element={<SignIn />}/>
      <Route path="/login" />
    </Route>
  </Route>
)

export const router = createBrowserRouter(routeObj);