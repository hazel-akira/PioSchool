// src/components/TransformativeHistory.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';

const TransformativeHistory: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    
    <section
      ref={ref}
    >
        <div className=" bg-[#277291] text-white/70 ">
      
      <div className="max-w-7xl py-20  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold font-poppins text-center text-primary mb-6">
              The <span className="text-secondary">Pioneer</span> Path
            </h2>
            <p className="text-gray-100 mb-6 leading-relaxed font-merriweather">
              Our journey of transformation as Pioneer School starts with the St Paul Thomas Academy, a Private Primary Boys Boarding school located in Samar Location, Ichagaki Ward, Maragua constituency, Murang’a County. The school was established in 1995 on an old Swiss-owned farm, formerly known as Samar Sisal Estate (Established 1945). Just like the pioneers of the sisal industry in Kenya, St Paul Thomas Academy was founded to pioneer one of the first Kenyan-owned private education institutions in Murang’a. With its idyllic weather, spacious grounds, and beautiful sisal-planted fields, it provided the perfect environment for young students to explore, learn, and grow.
            </p>
<p className='text-gray-100 mb-6 leading-relaxed font-merriweather'>
    Soon afterwards, in the early 2000's St Paul Thomas Academy gave birth to Pioneer School. 

This was after being persuaded by parents to establish the best private high school boy's boarding school since high school education is important and transformative to any young man's life and to the community at large. 

With that mandate from our customers, we proceeded to establish a unique high school program and experience.  

Pioneer school was the 1st private high school boarding school in Kenya to incorporate Aviation (Flying school program) and Marine (Seafarers program) on top of the basic education requirements stipulated by the ministry of education </p>



<p className='text-gray-100 mb-6 leading-relaxed font-merriweather'>It has since overseen the graduation of over 6,000 students, majority of whom have joined lucrative careers as doctors, engineers and lawyers after the completion of their university courses.  

With a handful of students from alumni of St Paul Thomas Academy, the school has grown by leaps and bounds.  

Students have gone on to become competitive pilots after having been fully armed with a PPL (Private Pilot License) from Pioneer School. </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-secondary-100 rounded-3xl p-8">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/psenv.png"
                  alt="Pioneer School Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
     
      </div>
    </section>
  );
};

export default TransformativeHistory;
