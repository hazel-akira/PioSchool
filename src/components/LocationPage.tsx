

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
    

      {/* Hero */}
      <section className="bg-[#093056] py-12 flex flex-col items-center">
        <img
          src="/images/ps.png"
          alt="Pioneer School Logo"
          className="h-20 mb-4"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Our Location
        </h1>
      </section>

      {/* Contact + Map */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#093056]">
              Get in Touch
            </h2>

            <div className="flex items-start gap-4">
              <PhoneIcon className="w-6 h-6 text-[#093056]" />
              <a
                href="tel:+254205038065"
                className="text-lg text-gray-800 hover:underline"
              >
                +254 20 503 8065 / +254 700 372 350
              </a>
            </div>

            <div className="flex items-start gap-4">
              <EnvelopeIcon className="w-6 h-6 text-[#093056]" />
              <a
                href="mailto:admissions@pioneerschools.ac.ke"
                className="text-lg text-gray-800 hover:underline"
              >
                admissions@pioneerschools.ac.ke
              </a>
            </div>

            <div className="flex items-start gap-4">
              <MapPinIcon className="w-6 h-6 text-[#093056]" />
              <p className="text-lg text-gray-800">
                P.O. Box 625‑10205 Maragua<br />
                Along Kenol‑Sagana Road,<br />
                Samar Location, Ichagaki Ward,<br />
                Maragua, Murang’a County
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Pioneer School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4016685206457!2d37.162116975687546!3d-0.8280403352984652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50c74d53417%3A0xff10395f6befaa0!2sPioneer%20School!5e0!3m2!1sen!2ske!4v1753091826286!5m2!1sen!2ske"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>

      {/* Floating Call Button */}
      <a
        href="tel:+254205038065"
        className="fixed bottom-6 right-6 bg-[#1CB0F6] hover:bg-[#0a8ac8] text-white p-4 rounded-full shadow-xl z-50"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>

      
    </div>
  )
}

export default LocationPage
