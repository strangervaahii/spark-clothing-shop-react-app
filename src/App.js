// Import the header and footer components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'; // import the app components stylesheet
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes/AppRoutes';

// Defining the functional App component
function App() {
  return (
    <>
      <ErrorBoundary>
        <HashRouter>
          <Header />
          <main className='container mt-5 pt-3' id='mainSection'>
            <AppRoutes />
          </main>
          <hr />
          <Footer />
        </HashRouter>
      </ErrorBoundary>
    </>
  );
}

// export the app component
export default App;
