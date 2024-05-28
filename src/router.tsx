import { Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import { Default_UI } from "./components/Default_UI";

const routeObj = createRoutesFromElements(
  <Route path="/" element={<Default_UI />}>
    <Route element={<h1>Protected</h1>}>
      <Route index={true} />
      <Route path="/user/:id" />
    </Route>
    <Route element={<h1> Unprotected</h1>}>
      <Route path="/sign" />
      <Route path="/login" />
    </Route>
  </Route>
)

export const router = createBrowserRouter(routeObj);