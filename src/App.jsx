import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import About from './pages/About';
import From from './component/From';
import Start from './component/Start';
import TermAndConditions from './pages/TermAndConditions';
import Product from './component/Product';

const App = () => {
  return (
    <div className="mx-auto flex flex-col bg-slate-200 "> {/* Fixed div structure */}
      <Router>
          <Start />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<From />} />
        </Routes>
          < From />
          <About />
      </Router>
    </div>
  );
};

export default App;
