import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
