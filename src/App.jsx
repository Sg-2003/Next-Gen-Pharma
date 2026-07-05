import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CounterStrip from './components/CounterStrip/CounterStrip';
import CompanyIntroduction from './components/CompanyIntroduction/CompanyIntroduction';
import ProductCategories from './components/ProductCategories/ProductCategories';
import FranchiseOpportunity from './components/FranchiseOpportunity/FranchiseOpportunity';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AiProductsStrip from './components/AiProductsStrip/AiProductsStrip';
import CertificationsCompliance from './components/CertificationsCompliance/CertificationsCompliance';
import TestimonialsPartners from './components/TestimonialsPartners/TestimonialsPartners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)', paddingBottom: '0' }}>
      <Navbar />
      <HeroBanner />
      <CounterStrip />
      <CompanyIntroduction />
      <ProductCategories />
      <FranchiseOpportunity />
      <WhyChooseUs />
      <AiProductsStrip />
      <CertificationsCompliance />
      <TestimonialsPartners />
      <Footer />
    </main>
  );
}

export default App;
