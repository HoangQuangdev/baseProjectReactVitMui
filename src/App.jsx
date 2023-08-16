import { BrowserRouter } from "react-router-dom"
import RenderRoutes from "./routers/RenderRoutes"

function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>


  )
}

export default App