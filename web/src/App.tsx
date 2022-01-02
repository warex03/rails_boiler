import { FunctionComponent, useEffect } from 'react'
import axios from 'axios'

const App: FunctionComponent = () => {
  useEffect(() => {
    axios.get('/api/auth').then((resp: any) => {
      console.log(resp)
    })
  }, [])

  return <h1>Hello World</h1>
}

export default App
