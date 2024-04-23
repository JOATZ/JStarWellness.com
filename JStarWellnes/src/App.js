import { store } from 'app/store'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import AboutPage from 'pages/About'
import BeforeAndAfterNT from 'pages/BeforeAndAfterNT'
import BeforeAndAfterPM from 'pages/BeforeAndAfterPM'
import ContactPage from 'pages/ContactPage'
import EducationPage from 'pages/Education/EducationPage'
import Gallery from 'pages/Gallery'
import HomePage from 'pages/HomePage'
import ServicePage from 'pages/ServicePage'
import Testimonials from 'pages/Testimonials/Testimonials'
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
                        <Route path='Services' element={<ServicePage />} />
                        <Route path='Education' element={<EducationPage />} />
                        <Route path='Contact' element={<ContactPage />} />
                        <Route path='About' element={<AboutPage />} />
                        <Route path='Gallery' element={<Gallery />} />
                        <Route path='Testimonials' element={<Testimonials />} />
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
