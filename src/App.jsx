import { useState } from 'react'
import Container from './Components/Container/Container'
import Card from './Components/Card/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Card/>
      </Container>
    </>
  )
}

export default App
