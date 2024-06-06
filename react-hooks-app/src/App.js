import { useState } from 'react'

import ComponentA from './components/ComponentA'
import { createContext } from 'react'

export const UserContext = createContext();

function App() {

  const [user] = useState({
    username: 'timk',
    firstName: 'tim',
    lastName: 'kellogg'
  })

  return (

    <div>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  )
}

export default App;
