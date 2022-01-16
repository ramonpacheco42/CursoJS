import { createContext, useState } from 'react' 
import {Home} from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const TestContext = createContext({} as any )

function App() {
  const [value, setValue] = useState('Teste')

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />}>
          </Route>
       </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
