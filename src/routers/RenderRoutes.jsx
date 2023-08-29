/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

export default function RenderRoutes() {
  // const { user } = useContext(AppContext)
  const user = true


  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={user ? r.element : r.elementLogin} />
      ))}
    </Routes>
  )
}
