/* eslint-disable no-unused-vars */
import { useState } from 'react'
import FetchData from './Component/FetchData/FetchData'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchData />
    </>
  )
}

export default App
