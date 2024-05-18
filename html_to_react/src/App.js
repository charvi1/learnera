import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactPage from './components/ContactPage';
import EduPackages from './components/packages';
import Signin from './components/signin';
import Signup from './components/signup';
import Footer from './components/Footer';
import Page1 from './components/page1';
import Quiz from './components/quiz';
import Page3 from './components/page3';
import Results from './components/result';
import Vision from './components/vision';
import Review from './components/review';
import FAQ from './components/faq';
import Com from './components/com';
import Checkout from './components/Checkout'; // Import Checkout component
import { Elements } from '@stripe/react-stripe-js'; // Import Elements
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('process.env.sk_test_51PHgJWSEdO7ajODjtoGJu3GGJo5OjjlZckYJ3XJRG5zPq6YvYisKyGTVGHNz5GV7Xl0XytRDpoPMdf8DIQ4j9cYo00fSpCfWI6'
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/packages" element={<EduPackages />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/results" element={<Results />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/review" element={<Review />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/com" element={<Com />} />
      <Route path="/checkout" element={<Elements stripe={stripePromise}><Checkout /></Elements>} />{/* Add Route for Checkout */}
      
    </Routes>
  </Router>
);

const Home = () => (
  <>
    <Page1 />
    <Page3 />
    <Quiz />
    <Results />
    <Vision />
    <Review />
    <FAQ />
    <Com />
    <Footer />
  </>
);

export default App;
