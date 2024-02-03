import './App.css'
import FetchUser from './FetchUser'
import Header from './components/Header'
import FetchCoin from './FetchCoin'

function App() {
  return (
    <>
    <div className="container">
    <Header title="Github Search App" desc="Search For Any User On Github"/>
    <FetchUser/>  
    </div>
    <FetchCoin/>
    </>
  )
}

export default App


























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import FetchUser from './FetchUser'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <FetchUser/>

//     </>
//   )
// }

// export default App
