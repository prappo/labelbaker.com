import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/404';
import ShareEditableTemplate from './pages/features/ShareEditableTemplates'
import Roadmap from './pages/roadmap';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path='/feature/share-editable-template' element={<ShareEditableTemplate />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
