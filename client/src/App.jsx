import { useRoutes } from "react-router"
import { NavBar } from "./components"
import { routes } from "./routes";



const App = () => {

  const component = useRoutes(routes);
  
  return (

    <div>
      <NavBar />
      {
        component
      }
    </div>
  )
}

export default App