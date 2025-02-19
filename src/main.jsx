import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <div className=' md:px-26 px-4'>
    <App />
    </div>
    
    <Footer/>
  </StrictMode>,
)
