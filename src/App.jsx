import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './componet/Header'
import Mount from './componet/Mount'
import Unmount from './componet/Unmount'
import Update from './componet/update'


const App = () => {
  return (
    <div>

      <Header />
      
      <nav>
        <ul>
          <li><Link to="/mount">Mounting </Link></li>
          <li><Link to="/update">Updating</Link></li>
          <li><Link to="/unmount">Unmounting</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/mount" element={<Mount />} />
        <Route path="/update" element={<Update />} />
        <Route path="/unmount" element={<Unmount />} />
      </Routes>




    </div>
  )
}

export default App