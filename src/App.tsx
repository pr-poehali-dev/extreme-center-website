import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import ReviewsPage from '@/pages/ReviewsPage';
import CartPage from '@/pages/CartPage';
import DeliveryPage from '@/pages/DeliveryPage';
import PromotionsPage from '@/pages/PromotionsPage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactsPage from '@/pages/ContactsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => {
      const idx = prev.indexOf(productId);
      if (idx === -1) return prev;
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={setActivePage} onAddToCart={addToCart} />;
      case 'catalog':
        return <CatalogPage onAddToCart={addToCart} onOpenReviews={() => setActivePage('reviews')} />;
      case 'reviews':
        return <ReviewsPage />;
      case 'cart':
        return <CartPage cartItems={cartItems} onRemove={removeFromCart} onNavigate={setActivePage} />;
      case 'delivery':
        return <DeliveryPage />;
      case 'promotions':
        return <PromotionsPage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage onNavigate={setActivePage} onAddToCart={addToCart} />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Layout activePage={activePage} onNavigate={setActivePage} cartCount={cartItems.length}>
        {renderPage()}
      </Layout>
    </TooltipProvider>
  );
}
