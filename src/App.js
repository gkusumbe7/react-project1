import { BrowserRouter , Routes , Route  } from 'react-router-dom';

import Home from './Components/Home';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route  path="/" element={<Home/>}>Home</Route>
             <Route path="/Login" element={<LoginPage/>}>LoginPage</Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
