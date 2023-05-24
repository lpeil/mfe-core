import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./routes/home"
import Pix from "./routes/pix"
import Login from "./routes/login"
import { RequireAuth } from "./components"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<RequireAuth />} path="/*">
        <Route index element={<Home />} />
        <Route path="pix" element={<Pix />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router
