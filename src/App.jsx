
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { UserLayouts } from './components/Layouts/UserLayouts'
function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<UserLayouts/>}>

      </Route>
      <Route>
        
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
