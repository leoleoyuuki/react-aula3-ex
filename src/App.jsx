import Menu from './components/Menu.jsx'
import Rodape from './components/Rodape.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <>
    <Menu/>
      <Outlet/>
    <Rodape/>
    </>
  )
}


