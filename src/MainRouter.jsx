import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Services from './components/Services'
import Projects from './components/Projects'
import Layout from './components/Layout'

const MainRouter = () => {
    return (<div>
        <Layout/>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/services" element={<Services />} />
<Route exact path="/projects" element={<Projects />} />
</Routes>
</div>
)
}
export default MainRouter
