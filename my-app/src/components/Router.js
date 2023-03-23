
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dlta from './Dlta';
import Tango from './Tango';
export default function Router() {
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/"  exact element={<Home />} />
        
        <Route path="/Dlta" element={<Dlta />} />
        <Route path="/Tango" element={<Tango />} />
      </Routes>
    
  
  </BrowserRouter>
  )
}


