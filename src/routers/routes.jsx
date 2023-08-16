import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import { supUrl } from '../utils/constants'


export const routes = [

  { path: `${supUrl}/login`, name: "Login", element: <PublicLayout> <Login /></PublicLayout>, elementLogin: <Login />, isPrivate: false },

  { path: `${supUrl}/home`, name: "Car", element: <PublicLayout> <Home /></PublicLayout>, elementLogin: <Login />, isPrivate: true }
]