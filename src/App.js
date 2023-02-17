
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies" 
import Serials from "./pages/Serials"  
import Error from "./pages/Error"                                                     
import SharedLayout from "./pages/SharedLayout"
import OneMovie from "./Components/OneMovie"

const App = () => {
  return <BrowserRouter>
 
    <Routes>

      {/* path cesta, "/" je úvodní strana , "*" je cokoliv jiného při chybě, překlepu,
      vše je obaleno jako ShareLayout a propsáno jako/přez Outlet*/}
      <Route path="/" element={ <SharedLayout /> } >
    {/* ˇindex kopíruje obalující path="/" */}
      <Route index element={ <Home /> } />
      <Route path="/movies" element={ <Movies /> } />
      <Route path="/serials" element={ <Serials /> } />
      <Route path="/all-movies/:movieId" element={ <OneMovie /> } />
      <Route path="*" element={ <Error /> }/>

      </Route>
      
    </Routes>
   
  </BrowserRouter>
}

export default App