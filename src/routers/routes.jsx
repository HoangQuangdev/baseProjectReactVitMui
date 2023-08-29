import PublicLayout from "../layouts/PublicLayout"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import { supUrl } from "../utils/constants"
import Table from '../pages/table/Index'
import Charts from "../pages/charts/Charts"
export const routes = [
  {
    path: `${supUrl}/login`,
    name: "Login",
    element: (
      <Login />
    ),
    elementLogin: <Login />,
    isPrivate: false
  },

  {
    path: `${supUrl}/home`,
    name: "Home",
    element: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
    elementLogin: <Login />,
    isPrivate: true
  },

  {
    path: `${supUrl}/table`,
    name: "Car",
    element: (
      <PublicLayout>
        <Table />
      </PublicLayout>
    ),
    elementLogin: <Login />,
    isPrivate: true
  },

  {
    path: `${supUrl}/charts`,
    name: "Car",
    element: (
      <PublicLayout>
        <Charts />
      </PublicLayout>
    ),
    elementLogin: <Login />,
    isPrivate: true
  }
]
