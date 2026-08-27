import DashBoard from "./Pages/dashboard";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

