// src/pages/Home.tsx
import  { useState } from 'react';
import Hero from '../components/Hero';
import Modal from '../components/Modal';


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-white min-h-[90vh] relative">
      {/* Navbar */}
     

      {/* Hero Section */}
      <Hero />

      {/* Enquiry Modal */}
      <Modal
        show={showModal}
        logoSrc="/images/ps.png"
        title="Apply for grade 10"
        imageSrc="/images/Modal.png"
        enquiryUrl="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default Home;
