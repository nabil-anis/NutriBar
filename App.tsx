import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Builder from './pages/Builder';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      {showWelcome ? (
        <Welcome onEnter={handleEnter} />
      ) : (
        <HashRouter>
          <div className="flex flex-col min-h-screen font-sans text-stone-800 dark:text-stone-200">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/builder" element={<Builder />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      )}
    </ThemeProvider>
  );
}

export default App;