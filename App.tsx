// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Transform from './pages/Transform';
import TransformativeHistory from './components/TransformativeHistory';
import Leadership from './pages/Leadership';
import TailorMadeLeadershipPathways from './pages/TailorMadeLeadershipPathways';
import SchoolOfSTEM from './pages/SchoolOfStem';
import SchoolOfSocialSciences from './pages/SchoolOfSocialSciences';
import SchoolOfArtsAndSportsScience from './pages/SchoolOfArtsAndSportsScience';
import Seafarers from './pages/Seafarers';
import Aviator from './pages/Aviator';
import InfoCard from './components/InfoCard';
import StudentLife from './pages/StudentsLife';
import BoardingLife from './pages/BoardingLife';
import Farm2Fork     from './pages/Farm2Fork';
import NursingCare   from './pages/NursingCare';
import Chaplaincy    from './pages/Chaplaincy';
import JoinUs from './pages/JoinUs';
import Grade9 from './components/Grade9';
export default function App() {
  return (
    <Routes>                  {/* No BrowserRouter here */}
      <Route element={<Layout />}> 
      <Route path="/" element={<Home />} />
      <Route path="/transform" element={<Transform />} />
      <Route path="/transformative-history" element={<TransformativeHistory/>}/>
      <Route path="/our-leadership" element={<Leadership />} />
      <Route path="/leaders" element={<Leadership />} />
      <Route path="/tailor-made-leadership-pathways" element={<TailorMadeLeadershipPathways />} />
      <Route path="/school-of-science-technology-engineering-and-mathematics" element={<SchoolOfSTEM />} />
      <Route path="/school-of-social-sciences" element={<SchoolOfSocialSciences />} />
      <Route path="/school-of-arts-and-sports-science" element={<SchoolOfArtsAndSportsScience />} />
      <Route path="/seafarers" element={<Seafarers />} />
      <Route path="/aviator" element={<Aviator />} />
      <Route path="/aviator" element={<Aviator />} />
      <Route path="/student-life" element={<StudentLife />} />
      <Route path="/boarding-life" element={<BoardingLife />} />
<Route path="/farm-2-fork" element={<Farm2Fork />} />
<Route path="/nursing-care" element={<NursingCare />} />
<Route path="/chaplaincy" element={<Chaplaincy />} />
<Route path="/join" element={<JoinUs />} />
<Route path="/grade9" element={<Grade9 />} />
      <Route
        path="/InfoCard"
        element={
          <InfoCard
            title="Sample Title"
            description="Sample description."
            imageSrc="/public/images/hero.jpg" 
          />
        }
      />
  </Route>
    </Routes>
    
  );
}
