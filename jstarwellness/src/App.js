import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { store } from './app/store'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/About'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

import './App.css'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='about' element={<AboutPage />} />
                </Routes>
                <Footer />
            </div>
        </Provider>
    )
}

export default App
