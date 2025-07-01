import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import './tutorial.ts'
// import './exercises/exercise_01_array_names.ts'
// import './exercises/exercise_02_employee.ts'
import './exercises/exercise_03_interface.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
