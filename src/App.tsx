// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import ContainerMain from "./pages/ContainerMain";
import SideBar from "./components/SideBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex box-border">
      <SideBar />
      <ContainerMain ></ContainerMain>
    </div>

  )
}

export default App
