/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WebsiteProject } from './pages/WebsiteProject';
import { DesignProject } from './pages/DesignProject';
import { SoapProject } from './pages/SoapProject';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="font-sans antialiased text-white selection:bg-accent selection:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/website" element={<WebsiteProject />} />
            <Route path="/project/design" element={<DesignProject />} />
            <Route path="/project/soap" element={<SoapProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

