import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
      <div >
          <Routes>
              <Route path='*' element={<DefaultLayout/>}/>

              {/*<Route path="/" element={<Home />} />*/}
          </Routes>
      </div>
  );
}

export default App;