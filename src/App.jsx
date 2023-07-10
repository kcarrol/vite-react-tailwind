import { useState } from 'react'
import fathymLogo from '/thinky.svg'
import tailwindLogo from '/tailwind.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div class="mx-auto max-w-md">
        <div class="flex h-40 max-w-md items-center justify-center">
          <div class="h-40 w-40">
            <a href="https://fathym.com" target="_blank">
              <img src={fathymLogo} className="logo" alt="Fathym logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://tailwindcss.com" target="_blank">
              <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>
          <div class="h-40 w-40">
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </div>

      </div>
      <h2>Fathym + Tailwind + Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more.
      </p>
    </>
  )
}

export default App
