import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Time from './SetTime.js'
import SetTime from './Time.js'



function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route exact path="/Workaholic" element={<SetTime/>}/>
=======
        <Route exact path="/Workaholic/" element={<SetTime/>}/>
>>>>>>> refs/remotes/origin/main
        <Route exact path="/Time" element={<Time/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
