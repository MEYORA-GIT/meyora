import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Seo from './Seo';

export default function Layout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Seo />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
