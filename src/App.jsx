import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footertemp from "../components/layout/Footertemp";
import AppRoutes from "../routes/AppRoutes";
 
function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footertemp />
      
     </BrowserRouter>
  );
}

export default App;
