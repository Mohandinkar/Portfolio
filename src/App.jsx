
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Toaster position='bottom-right'
     toastOptions={{
      style: {
        background: '#363636',
        color: '#fff',
      },
    }}/>
    </>
  )
}

export default App
