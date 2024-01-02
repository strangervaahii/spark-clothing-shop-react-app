// This is a React component that defines the routes for the application using the react-router-dom library.
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from '../../pages/HomePage/HomePage';
// import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
// import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
// import ProductsPage from '../../pages/ProductsPage/ProductsPage';
// import PageNotFound from '../../components/shared/PageNotFound/PageNotFound';
// import History from '../../pages/AboutUsPage/History/History';
// import ProductDetail from '../../pages/ProductsPage/ProductDetail/ProductDetail';

// The component uses the Suspense component from React to handle lazy loading of components.
const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const AboutUsPage = React.lazy(() => import('../../pages/AboutUsPage/AboutUsPage'));
const ContactUsPage = React.lazy(() => import('../../pages/ContactUsPage/ContactUsPage'));
const ProductsPage = React.lazy(() => import('../../pages/ProductsPage/ProductsPage'));
const PageNotFound = React.lazy(() => import('../../components/shared/PageNotFound/PageNotFound'));
const History = React.lazy(() => import('../../pages/AboutUsPage/History/History'));
const ProductDetail = React.lazy(() => import('../../pages/ProductsPage/ProductDetail/ProductDetail'));

const AppRoutes = () => {
  return (
    // The Suspense component displays a spinner while the components are being loaded asynchronously.
    <Suspense fallback={<div className='spinner-border'></div>}>
      {/* The component defines routes for the home page, products page, product detail page, about us page, history page, and contact us page. */}
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='about-us' element={<AboutUsPage />}>
          <Route path='history' element={<History />} />
        </Route>
        <Route path='contact-us' element={<ContactUsPage />} />
        {/* If none of the defined routes match the URL, the PageNotFound component is displayed. */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
