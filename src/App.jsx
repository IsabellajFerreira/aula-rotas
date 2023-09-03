import { Outlet } from 'react-router-dom'
import Rodape from './components/Rodape/Rodape'
import Cabecalho from './components/Cabecalho/Cabecalho'


function App() {


  return (
    <>
    <Cabecalho/>
      <Outlet />
      <Rodape/>
    
    </>
  )
}

export default App
