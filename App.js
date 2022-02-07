import './App.css';
//import { useState } from "react";
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Basic from './pages/basic'
import AddUser from './pages/AddUser'

//import { DataGridPro } from '@mui/x-data-grid-pro';
import Axios from 'axios'

function App() {
    return(
      <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<AddUser/>} />
          </Routes>
      </Router>
      </>
    )
  
}
export default App;
