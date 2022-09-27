import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Body/Home/Home';
import Test from './Components/Body/Test/Test';
import Heading from './Components/Body/Heading/Heading';
import Preformate from './Components/Body/Preformate/Preformate';
import TextStyles from './Components/Body/TextStyles/TextStyles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="heading"  element={<Heading/>} />
          <Route path="preformate"  element={<Preformate/>} />
          <Route path="text-style"  element={<TextStyles/>} />

          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
