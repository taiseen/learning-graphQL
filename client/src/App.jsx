import { useRoutes, useNavigate } from "react-router"
import { getToken } from "./helper/localStorage";
import { NavBar } from "./components"
import { routes } from "./routes";
import { useEffect } from "react";


const App = () => {

  const navigate = useNavigate(true);
  const component = useRoutes(routes);
  const token = getToken();

  
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token]);


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