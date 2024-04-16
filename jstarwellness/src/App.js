import { store } from 'app/store'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import AboutPage from 'pages/About'
import BeforeAndAfterNT from 'pages/BeforeAndAfterNT'
import BeforeAndAfterPM from 'pages/BeforeAndAfterPM'
import ContactPage from 'pages/ContactPage'
import Gallery from 'pages/Gallery'
import HomePage from 'pages/HomePage'
import ServicePage from 'pages/ServicePage'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import 'App.css'

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <div className='app-content'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='services' element={<ServicePage />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='gallery' element={<Gallery />} />
                        <Route
                            path='BeforeAndAfterNT'
                            element={<BeforeAndAfterNT />}
                        />
                        <Route
                            path='BeforeAndAfterPM'
                            element={<BeforeAndAfterPM />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Provider>
    )
}

export default App
