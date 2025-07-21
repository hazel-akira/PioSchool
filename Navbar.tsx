import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [mobileTransformOpen, setMobileTransformOpen] = useState(false);
  const [mobileLeadersOpen, setMobileLeadersOpen] = useState(false);
  const [mobileStudentOpen, setMobileStudentOpen] = useState(false);
  const [mobileBoardingOpen, setMobileBoardingOpen] = useState(false);

  const transformRef = useRef<HTMLDivElement>(null);
  const leadersRef   = useRef<HTMLDivElement>(null);
  const studentRef   = useRef<HTMLDivElement>(null);
  const boardingRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (transformRef.current && !transformRef.current.contains(event.target as Node)) {
        setMobileTransformOpen(false);
      }
      if (leadersRef.current && !leadersRef.current.contains(event.target as Node)) {
        setMobileLeadersOpen(false);
      }
      if (studentRef.current && !studentRef.current.contains(event.target as Node)) {
        setMobileStudentOpen(false);
      }
      if (boardingRef.current && !boardingRef.current.contains(event.target as Node)) {
        setMobileBoardingOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#093056] text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <NavLink to="/" className="text-2xl font-extrabold tracking-wide">
          PIONEER SCHOOL
        </NavLink>

        <nav className="flex gap-6 text-sm font-semibold">
          {/* Home */}
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
            Home
          </NavLink>

          {/* Transform */}
          <div ref={transformRef} className="relative group">
            <button
              onClick={() => setMobileTransformOpen(o => !o)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              <span>Transform</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${mobileTransformOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            <div className={`
                absolute left-0 mt-1 w-56 bg-[#E4AF23] text-[#093056] rounded shadow-lg
                transition-opacity duration-200
                ${mobileTransformOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                group-hover:opacity-100 group-hover:pointer-events-auto
              `}
            >
              <NavLink to="/transform" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileTransformOpen(false)}>Transform</NavLink>
              <NavLink to="/transformative-history" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileTransformOpen(false)}>Our Transformative History</NavLink>
              <NavLink to="/our-leadership" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileTransformOpen(false)}>Our Leadership</NavLink>
            </div>
          </div>

          {/* KCSE Past Performance */}
          <NavLink to="/kcse-past-performance" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
            KCSE Past Performance
          </NavLink>

          {/* Leaders */}
          <div ref={leadersRef} className="relative group">
            <button
              onClick={() => setMobileLeadersOpen(o => !o)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              <span>Leaders</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${mobileLeadersOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            <div className={`
                absolute left-0 mt-1 w-64 bg-[#E4AF23] text-[#093056] rounded shadow-lg
                transition-opacity duration-200
                ${mobileLeadersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                group-hover:opacity-100 group-hover:pointer-events-auto
              `}
            >
              <NavLink to="/leaders" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>Leaders</NavLink>
              <NavLink to="/tailor-made-leadership-pathways" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>Tailor Made Leadership Pathways</NavLink>
              <NavLink to="/school-of-science-technology-engineering-and-mathematics" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>School of STEM</NavLink>
              <NavLink to="/school-of-social-sciences" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>School of Social Sciences</NavLink>
              <NavLink to="/school-of-arts-and-sports-science" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>School of Arts & Sports Science</NavLink>
              <NavLink to="/seafarers" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>Seafarers</NavLink>
              <NavLink to="/aviator" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileLeadersOpen(false)}>Aviator</NavLink>
            </div>
          </div>

          {/* Student Life */}
          <div ref={studentRef} className="relative group">
            <button
              onClick={() => setMobileStudentOpen(o => !o)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              <span>Student Life</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${mobileStudentOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            <div className={`
                absolute left-0 mt-1 w-56 bg-[#E4AF23] text-[#093056] rounded shadow-lg
                transition-opacity duration-200
                ${mobileStudentOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                group-hover:opacity-100 group-hover:pointer-events-auto
              `}
            >
              <NavLink to="/student-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Student Life</NavLink>
              <NavLink to="/student-life/basketball-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Basketball Life</NavLink>
              <NavLink to="/student-life/rugby-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Rugby Life</NavLink>
              <NavLink to="/student-life/photography-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Photography Life</NavLink>
              <NavLink to="/student-life/korea-exchange-program" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Korea Exchange Program</NavLink>
              <NavLink to="/student-life/swimmers-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Swimmers Life</NavLink>
              <NavLink to="/student-life/golf-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileStudentOpen(false)}>Golf Life</NavLink>
            </div>
          </div>

          {/* Boarding Life */}
          <div ref={boardingRef} className="relative group">
            <button
              onClick={() => setMobileBoardingOpen(o => !o)}
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              <span>Boarding Life</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${mobileBoardingOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            <div className={`
                absolute left-0 mt-1 w-48 bg-[#E4AF23] text-[#093056] rounded shadow-lg
                transition-opacity duration-200
                ${mobileBoardingOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                group-hover:opacity-100 group-hover:pointer-events-auto
              `}
            >
              <NavLink to="/boarding-life" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileBoardingOpen(false)}>Boarding Life</NavLink>
              <NavLink to="/farm-2-fork" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileBoardingOpen(false)}>Farm 2 Fork</NavLink>
              <NavLink to="/nursing-care" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileBoardingOpen(false)}>Nursing Care</NavLink>
              <NavLink to="/chaplaincy" className="block px-4 py-2 hover:bg-[#093056] hover:text-white" onClick={() => setMobileBoardingOpen(false)}>Chaplaincy</NavLink>
            </div>
          </div>

          {/* Join Us, Fees, Location, Get Access */}
          <NavLink to="/join"       className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Join Us</NavLink>
          <NavLink to="/fees"          className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Fees</NavLink>
          <NavLink to="/location"      className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Location</NavLink>
          <NavLink to="/get-access"    className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Get Access</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
