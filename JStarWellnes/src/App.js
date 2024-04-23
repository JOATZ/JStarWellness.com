import React, { lazy, Suspense, useEffect } from 'react'
import { store } from 'app/store'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import HomePage from 'pages/HomePage'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import 'App.css'
const AboutPage = lazy(() => import('pages/About'))
const BeforeAndAfterNT = lazy(() => import('pages/BeforeAndAfterNT'))
const BeforeAndAfterPM = lazy(() => import('pages/BeforeAndAfterPM'))
const ContactPage = lazy(() => import('pages/ContactPage'))
const EducationPage = lazy(() => import('pages/Education/EducationPage'))
const Gallery = lazy(() => import('pages/Gallery'))
const ServicePage = lazy(() => import('pages/ServicePage'))
const Testimonials = lazy(() => import('pages/Testimonials/Testimonials'))

function App() {
    useEffect(() => {
        import('pages/About')
        import('pages/ContactPage')
        import('pages/Education/EducationPage')
        import('pages/Gallery')
        import('pages/ServicePage')
        import('pages/Testimonials/Testimonials')
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
                            <Route
                                path='BeforeAndAfterNT'
                                element={<BeforeAndAfterNT />}
                            />
                            <Route
                                path='BeforeAndAfterPM'
                                element={<BeforeAndAfterPM />}
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
