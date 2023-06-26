import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Form from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

/**
 * When should we decide creating a new component?
 * **** When we need to write duplicate code
 * **** Which data are different
 */

// When you see any duplicate structure just make it a component


/**
 * Designing Component
 * - Props
 * - Component Tree
 * - 
 */