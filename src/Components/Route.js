import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
function Path(){
  return(

    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element = {<Home/>}>Home</Route>
         <Route path="/LoginPage" element={<LoginPage/>}>Login Page</Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
};

export default Path;