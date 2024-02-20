import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { store } from './app/store'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/About'
import BeforeAfterNT from './pages/BeforeAndAfterNT'
import BeforeAfterPM from './pages/BeforeAndAfterPM'
import ContactPage from './pages/ContactPage'
import Gallery from './pages/Gallery'
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
                    <Route path='gallery' element={<Gallery />} />
                    <Route
                        path='gallery/BeforeAfterNT'
                        element={<BeforeAfterNT />}
                    />
                    <Route
                        path='gallery/BeforeAfterPM'
                        element={<BeforeAfterPM />}
                    />
                </Routes>
                <Footer />
            </div>
        </Provider>
    )
}

export default App
