
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhoneIcon from '../components/PhoneIcon';


const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Floating phone icon visible on all pages */}
      <PhoneIcon />
      {/* Main content rendered here by nested routes */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;


