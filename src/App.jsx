import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import Navigation from './components/Navigation/Navigation';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
// import css from '';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:productId" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
