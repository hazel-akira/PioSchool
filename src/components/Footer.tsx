// src/components/Footer.tsx
import React from 'react';
import { FaAngleRight, FaTiktok, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';


const Footer: React.FC = () => (
  <footer className="bg-[#093056] text-white pt-12 pb-8">
    {/* Flex container: 1 column on mobile, 4 columns (25% each) on md+ */}
    <div className="max-w-7xl mx-auto px-6 flex flex-row md:flex-row md:justify-between md:items-start">
      <hr />
      {/* Quick Links */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h4 className="text-[#f4a024] uppercase font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {['Home','Transform','KCSE Past Performance','Leaders','Student Life','Boarding Life','Join Us','Fees','Location','Get Access'].map(link => (
            <li key={link} className="flex items-center">
              <FaAngleRight className="text-[#f4a024] mr-2" />
              <a href="./pages/Home" className="hover:text-[#f4a024]">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h4 className="text-[#f4a024] uppercase font-bold mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <HiPhone className="text-[#f4a024] mr-2 h-5 w-5" />
            <a href="tel:+254205038228" className="hover:text-[#f4a024]">020 5038065</a>
          </li>
          <li className="flex items-center">
            <HiMail className="text-[#f4a024] mr-2 h-5 w-5" />
            <a href="mailto:admissions@pioneerschools.ac.ke" className="hover:text-[#f4a024]">
              admissions@pioneerschools.ac.ke
            </a>
          </li>
          <li className="flex items-start">
            <HiLocationMarker className="text-[#f4a024] mr-2 h-5 w-5 mt-1" />
            <div className="leading-relaxed">
              P.O. BOX 625-10205 MARAGUA<br/>
              Along Kenol–Sagana Road, Samar Location,<br/>
              Ichagaki Ward, Maragua, Murang'a County
            </div>
          </li>
        </ul>
      </div>

     {/* Our Schools */}
<div className="w-full md:w-1/4 mb-8 md:mb-0">
  <h4 className="text-[#f4a024] uppercase font-bold mb-4">Our Schools</h4>
  <ul className="space-y-2 text-sm ml-4">
    <li>
      <a
        href="https://dev.pioneerschools.ac.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pioneer Group Of Schools
      </a>
    </li>
    <li>
      <a
        href="http://pioneergirlsschool.co.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pioneer Girls School
      </a>
    </li>
    <li>
      <a
        href="https://pioneergirlsjunioracademy.co.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pioneer Girls Junior Academy
      </a>
    </li>
    <li>
      <a
        href="https://pioneerjunioracademy.co.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pioneer Junior Academy
      </a>
    </li>
    <li>
      <a
        href="https://stpaulthomasacademy.co.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        St Paul Thomas Academy
      </a>
    </li>
    <li>
      <a
        href="https://piu.ac.ke/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pioneer International University
      </a>
    </li>
  </ul>
</div>

{/* Our Socials */}
<div className="w-full md:w-1/4">
  <h4 className="text-[#f4a024] uppercase font-bold mb-4">Our Socials</h4>
  <div className="flex space-x-4 mb-4 text-2xl">
    <a
      href="https://www.tiktok.com/@pioneerschools"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaTiktok />
    </a>
    <a
      href="https://www.instagram.com/thepioneerschoolke/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaInstagram />
    </a>
    <a
      href="https://twitter.com/PGSKenya"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.facebook.com/people/Pioneer-School/100067862721696/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaFacebook />
    </a>
    <a
      href="https://www.linkedin.com/company/pioneer-school-kenya/?originalSubdomain=ke"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://www.youtube.com/channel/UCfLkVtiaT2qq4P29qgJ1-2g"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f4a024]"
    >
      <FaYoutube />
    </a>
  </div>
  <p className="text-xs leading-snug">
    Regulated by the Ministry of Education Kenya (P/A/1977/09)<br />
    Licensed by Murang’a County
  </p>
</div>

    {/* <-- Add closing tag here */}
    </div>

    {/* Bottom Slogan + Links */}
    <div className="mt-12 flex flex-col items-center">
      <div className="bg-black bg-opacity-20 rounded-full px-6 py-2 mb-4">
        <span className="text-[#f4a024] font-semibold">Vitae Abundantiae | Life In Abundance</span>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 text-sm">
        {['Privacy Policy','Disclaimer','Sitemap','Copyright © 2025 . All rights reserved.'].map((item,i) => (
          <a key={i} href="#" className="hover:text-[#f4a024]">{item}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
