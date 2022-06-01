import './App.css';
import Navbar from './components/layout/Navbar.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import NotFound from './components/pages/NotFound.jsx'

import Footer from './components/layout/Footer.jsx'
import { GithubProvider } from './context/GithubContext';
import { any } from 'prop-types';
function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github Profile Finder" />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
