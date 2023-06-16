import { BrowserRouter , Routes , Route  } from 'react-router-dom';

import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Cards from './Components/Cards';
import UseState from './Components/UseState';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route  path="/" element={<Home/>}>Home</Route>
             <Route path="/Login" element={<LoginPage/>}>LoginPage</Route>
             <Route path="/Cards"  element={<Cards/>}>Cards</Route>
             <Route path="/UseState" element={<UseState/>}>UseState</Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
