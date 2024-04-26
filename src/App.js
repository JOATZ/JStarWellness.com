import React, { lazy, Suspense, useEffect } from 'react'
import { store } from 'app/store'
import Footer from 'components/Footer.js'
import Header from 'components/Header.js'
import HomePage from 'pages/HomePage.js'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import 'css/App.css'
const AboutPage = lazy(() => import('pages/About'))
const ContactPage = lazy(() => import('pages/ContactPage'))
const EducationPage = lazy(() => import('pages/EducationPage'))
const Gallery = lazy(() => import('pages/Gallery'))
const ServicePage = lazy(() => import('pages/ServicePage'))
const Testimonials = lazy(() => import('pages/Testimonials.js'))

function App() {
    useEffect(() => {
        import('pages/About')
        import('pages/ContactPage')
        import('pages/EducationPage')
        import('pages/Gallery')
        import('pages/ServicePage')
        import('pages/Testimonials')
    }, [])
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <div className='app-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='Services' element={<ServicePage />} />
                            <Route
                                path='Education'
                                element={<EducationPage />}
                            />
                            <Route path='Contact' element={<ContactPage />} />
                            <Route path='About' element={<AboutPage />} />
                            <Route path='Gallery' element={<Gallery />} />
                            <Route
                                path='Testimonials'
                                element={<Testimonials />}
                            />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </Provider>
    )
}

export default App
